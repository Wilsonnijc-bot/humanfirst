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

  @Output() threadUpdated = new EventEmitter<void>();

  replyOpenMap: { [commentId: number]: boolean } = {};
  replyTextMap: { [commentId: number]: string } = {};
  replyStanceMap: { [commentId: number]: TopicStance } = {};

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
      next: () => {
        this.threadUpdated.emit();
      },
      error: (error) => {
        this.toastr.error(error?.error?.message || 'Failed to update upvote');
      }
    });
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
}
