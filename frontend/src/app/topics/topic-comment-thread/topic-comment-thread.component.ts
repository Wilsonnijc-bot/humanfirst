import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TopicDiscussionService } from '../topic-discussion.service';
import { TopicComment, TopicStance } from '../topic.model';

@Component({
  selector: 'app-topic-comment-thread',
  templateUrl: './topic-comment-thread.component.html',
  styleUrls: ['./topic-comment-thread.component.css']
})
export class TopicCommentThreadComponent {

  @Input() topicId: number;
  @Input() comments: TopicComment[] = [];
  @Input() isLoggedIn = false;
  @Input() currentUsername = '';

  @Output() threadUpdated = new EventEmitter<void>();

  replyOpenMap: { [commentId: number]: boolean } = {};
  replyTextMap: { [commentId: number]: string } = {};
  replyStanceMap: { [commentId: number]: TopicStance } = {};
  deletingCommentMap: { [commentId: number]: boolean } = {};

  constructor(
    private topicDiscussionService: TopicDiscussionService,
    private toastr: ToastrService
  ) {
  }

  toggleReply(commentId: number): void {
    const isOpen = !this.replyOpenMap[commentId];
    this.replyOpenMap[commentId] = isOpen;
    if (!isOpen) {
      return;
    }

    const targetComment = this.comments.find((comment) => comment.id === commentId);
    this.replyStanceMap[commentId] = targetComment?.stance || 'PRO';
  }

  setReplyStance(commentId: number, stance: TopicStance): void {
    this.replyStanceMap[commentId] = stance;
  }

  submitReply(comment: TopicComment): void {
    if (!this.isLoggedIn) {
      this.toastr.warning('Please log in to reply');
      return;
    }

    const raw = this.replyTextMap[comment.id] || '';
    const text = raw.trim();
    if (!text) {
      this.toastr.warning('Reply cannot be empty');
      return;
    }

    const stance = this.replyStanceMap[comment.id] || comment.stance || 'PRO';
    this.topicDiscussionService.addComment(this.topicId, {
      text,
      stance,
      parentCommentId: comment.id
    }).subscribe({
      next: () => {
        this.replyTextMap[comment.id] = '';
        this.replyStanceMap[comment.id] = comment.stance || 'PRO';
        this.replyOpenMap[comment.id] = false;
        this.threadUpdated.emit();
      },
      error: (error) => {
        this.toastr.error(error?.error?.message || 'Failed to post reply');
      }
    });
  }

  toggleCommentUpvote(comment: TopicComment): void {
    if (!this.isLoggedIn) {
      this.toastr.warning('Please log in to upvote comments');
      return;
    }

    this.topicDiscussionService.toggleCommentUpvote(comment.id).subscribe({
      next: (response) => {
        comment.upvoteCount = response?.upvoteCount ?? comment.upvoteCount;
        comment.upVotedByCurrentUser = !!response?.upVotedByCurrentUser;
        this.sortComments(this.comments);
      },
      error: (error) => {
        this.toastr.error(error?.error?.message || 'Failed to update upvote');
      }
    });
  }

  deleteComment(comment: TopicComment): void {
    if (!this.isLoggedIn) {
      this.toastr.warning('Please log in to delete comments');
      return;
    }
    if (!this.canDeleteComment(comment)) {
      this.toastr.error('You can only delete your own comment');
      return;
    }
    if (this.deletingCommentMap[comment.id]) {
      return;
    }

    this.deletingCommentMap[comment.id] = true;
    this.topicDiscussionService.deleteComment(comment.id).subscribe({
      next: () => {
        this.removeCommentLocally(comment);
        this.deletingCommentMap[comment.id] = false;
      },
      error: (error) => {
        this.deletingCommentMap[comment.id] = false;
        this.toastr.error(error?.error?.message || 'Failed to delete comment');
      }
    });
  }

  canDeleteComment(comment: TopicComment): boolean {
    if (typeof comment?.ownedByCurrentUser === 'boolean') {
      return comment.ownedByCurrentUser;
    }

    const current = (this.currentUsername || '').trim().toLowerCase();
    const author = (comment?.userName || '').trim().toLowerCase();
    return !!current && current === author;
  }

  isDeletingComment(commentId: number): boolean {
    return !!this.deletingCommentMap[commentId];
  }

  onNestedThreadUpdated(): void {
    this.threadUpdated.emit();
  }

  trackByComment(index: number, item: TopicComment): number {
    return item.id || index;
  }

  getStanceClass(stance: TopicStance | null | undefined): 'pro' | 'con' {
    return stance === 'CON' ? 'con' : 'pro';
  }

  private removeCommentLocally(comment: TopicComment): void {
    const index = this.comments.findIndex((item) => item.id === comment.id);
    if (index < 0) {
      return;
    }

    const promotedReplies = [...(comment.replies || [])];
    this.comments.splice(index, 1, ...promotedReplies);
    this.sortComments(this.comments);
  }

  private sortComments(comments: TopicComment[]): void {
    comments.sort((first, second) => {
      const upvoteDifference = (second?.upvoteCount || 0) - (first?.upvoteCount || 0);
      if (upvoteDifference !== 0) {
        return upvoteDifference;
      }

      return this.getCommentTimestamp(second) - this.getCommentTimestamp(first);
    });
  }

  private getCommentTimestamp(comment: TopicComment): number {
    const parsed = Date.parse(comment?.createdDate || '');
    return Number.isNaN(parsed) ? 0 : parsed;
  }
}
