import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth/shared/auth.service';
import { TopicDiscussionService } from './topic-discussion.service';
import { TopicStance, TopicWeekDetail } from './topic.model';

@Component({
  selector: 'app-topic-discussion',
  templateUrl: './topic-discussion.component.html',
  styleUrls: ['./topic-discussion.component.css']
})
export class TopicDiscussionComponent implements OnInit, OnDestroy {

  topic: TopicWeekDetail | null = null;
  loading = false;
  errorMessage = '';
  isLoggedIn = false;

  proCommentText = '';
  conCommentText = '';

  private currentSlug: string | null = null;
  private routeSubscription?: Subscription;
  private authSubscription?: Subscription;

  constructor(
    private topicDiscussionService: TopicDiscussionService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.authSubscription = this.authService.loggedIn.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });

    this.routeSubscription = this.activatedRoute.paramMap.subscribe((params) => {
      this.currentSlug = params.get('slug');
      this.loadTopic();
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.authSubscription?.unsubscribe();
  }

  vote(stance: TopicStance): void {
    if (!this.topic) {
      return;
    }
    if (!this.isLoggedIn) {
      this.toastr.warning('Please log in to cast your vote');
      return;
    }

    this.topicDiscussionService.voteOnTopic(this.topic.id, { stance }).subscribe({
      next: (summary) => {
        if (this.topic) {
          this.topic.voteSummary = summary;
        }
      },
      error: (error) => {
        this.toastr.error(error?.error?.message || 'Failed to vote on topic');
      }
    });
  }

  submitTopLevelComment(stance: TopicStance): void {
    if (!this.topic) {
      return;
    }
    if (!this.isLoggedIn) {
      this.toastr.warning('Please log in to comment');
      return;
    }

    const rawText = stance === 'PRO' ? this.proCommentText : this.conCommentText;
    const normalizedText = (rawText || '').trim();
    if (!normalizedText) {
      this.toastr.warning('Comment cannot be empty');
      return;
    }

    this.topicDiscussionService.addComment(this.topic.id, { text: normalizedText, stance }).subscribe({
      next: () => {
        if (stance === 'PRO') {
          this.proCommentText = '';
        } else {
          this.conCommentText = '';
        }
        this.loadTopic();
      },
      error: (error) => {
        this.toastr.error(error?.error?.message || 'Failed to publish comment');
      }
    });
  }

  onThreadUpdated(): void {
    this.loadTopic();
  }

  getProBarPercent(): number {
    if (!this.topic?.voteSummary || this.topic.voteSummary.totalVotes === 0) {
      return 50;
    }
    return this.topic.voteSummary.proPercent;
  }

  getConBarPercent(): number {
    if (!this.topic?.voteSummary || this.topic.voteSummary.totalVotes === 0) {
      return 50;
    }
    return this.topic.voteSummary.conPercent;
  }

  trackBySubdivision(index: number, item: { id: number }): number {
    return item.id || index;
  }

  private loadTopic(): void {
    this.loading = true;
    this.errorMessage = '';

    const request$ = this.currentSlug
      ? this.topicDiscussionService.getTopicBySlug(this.currentSlug)
      : this.topicDiscussionService.getCurrentTopic();

    request$.subscribe({
      next: (topic) => {
        this.topic = topic;
        this.loading = false;
      },
      error: (error) => {
        this.topic = null;
        this.loading = false;
        this.errorMessage = error?.error?.message || 'Unable to load topic';
        this.toastr.error(this.errorMessage);
      }
    });
  }
}
