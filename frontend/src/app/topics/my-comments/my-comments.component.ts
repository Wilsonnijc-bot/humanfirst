import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TopicComment } from '../topic.model';
import { TopicDiscussionService } from '../topic-discussion.service';

@Component({
  selector: 'app-my-comments',
  templateUrl: './my-comments.component.html',
  styleUrls: ['./my-comments.component.css']
})
export class MyCommentsComponent implements OnInit {

  comments: TopicComment[] = [];
  loading = true;
  deletingCommentId: number | null = null;
  selectedDomain = 'all';

  constructor(
    private topicDiscussionService: TopicDiscussionService,
    private router: Router,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.loadComments();
  }

  deleteComment(comment: TopicComment): void {
    if (!comment?.id || this.deletingCommentId) {
      return;
    }

    const confirmed = window.confirm('Delete this comment? This action cannot be undone.');
    if (!confirmed) {
      return;
    }

    this.deletingCommentId = comment.id;
    this.topicDiscussionService.deleteComment(comment.id).subscribe({
      next: () => {
        this.comments = this.comments.filter((item) => item.id !== comment.id);
        this.deletingCommentId = null;
        this.toastr.success('Comment deleted');
      },
      error: (error) => {
        this.deletingCommentId = null;
        this.toastr.error(error?.error?.message || 'Failed to delete comment');
      }
    });
  }

  goToTopic(comment: TopicComment): void {
    if (!comment?.topicSlug) {
      return;
    }

    this.router.navigate(['/topics', comment.topicSlug]);
  }

  onSidebarDomainSelected(domain: string): void {
    this.navigateToHomeDomain(domain);
  }

  trackByComment(index: number, item: TopicComment): number {
    return item.id || index;
  }

  private navigateToHomeDomain(domain: string): void {
    this.selectedDomain = domain;

    if (domain === 'all') {
      this.router.navigate(['/']);
      return;
    }

    this.router.navigate(['/'], {
      queryParams: { domain }
    });
  }

  private loadComments(): void {
    this.topicDiscussionService.getMyComments().subscribe({
      next: (comments) => {
        this.comments = comments || [];
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        this.toastr.error(error?.error?.message || 'Failed to load your comments');
      }
    });
  }
}
