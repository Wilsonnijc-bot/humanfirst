import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth/shared/auth.service';
import { TopicDiscussionService } from './topic-discussion.service';
import { TopicComment, TopicStance, TopicWeekDetail } from './topic.model';

@Component({
  selector: 'app-topic-discussion',
  templateUrl: './topic-discussion.component.html',
  styleUrls: ['./topic-discussion.component.css']
})
export class TopicDiscussionComponent implements OnInit, OnDestroy {

  topic: TopicWeekDetail | null = null;
  unifiedComments: TopicComment[] = [];
  loading = false;
  errorMessage = '';
  isLoggedIn = false;

  commentText = '';
  selectedCommentStance: TopicStance = 'PRO';
  viewMode: 'month' | 'week' = 'month';
  selectedDomain = 'all';

  private currentSlug: string | null = null;
  private routeSubscription?: Subscription;
  private authSubscription?: Subscription;

  constructor(
    private topicDiscussionService: TopicDiscussionService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
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
      this.viewMode = this.currentSlug ? 'week' : 'month';
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

  setCommentStance(stance: TopicStance): void {
    this.selectedCommentStance = stance;
  }

  submitTopLevelComment(): void {
    if (!this.topic) {
      return;
    }
    if (!this.isLoggedIn) {
      this.toastr.warning('Please log in to comment');
      return;
    }

    const normalizedText = (this.commentText || '').trim();
    if (!normalizedText) {
      this.toastr.warning('Comment cannot be empty');
      return;
    }

    this.topicDiscussionService.addComment(this.topic.id, {
      text: normalizedText,
      stance: this.selectedCommentStance
    }).subscribe({
      next: () => {
        this.commentText = '';
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

  onSidebarDomainSelected(domain: string): void {
    this.navigateToHomeDomain(domain);
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

  isMonthView(): boolean {
    return this.viewMode === 'month';
  }

  goToCurrentWeekTopic(): void {
    if (!this.topic?.slug) {
      return;
    }

    this.router.navigate(['/topics', this.topic.slug]);
  }

  getWeeklyTopicBody(): string {
    const fallbackTitle = (this.topic?.weekTitle || 'this week topic').trim();
    const monthTitle = (this.topic?.monthTitle || 'this month topic').trim();
    const body = (this.topic?.weeklyTopicBody || '').trim();

    const baseBody = body || `This discussion explores "${fallbackTitle}" within "${monthTitle}". Review the context, trade-offs, and practical implications before choosing a Pro or Con stance.`;
    if (baseBody.length >= 1200) {
      return baseBody;
    }

    return `${baseBody}\n\n${this.buildExtendedWeeklyTopicRead(fallbackTitle, monthTitle)}`;
  }

  trackBySubdivision(index: number, item: { id: number }): number {
    return item.id || index;
  }

  private navigateToHomeDomain(domain: string) {
    this.selectedDomain = domain;

    if (domain === 'all') {
      this.router.navigate(['/']);
      return;
    }

    this.router.navigate(['/'], {
      queryParams: { domain }
    });
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
        this.unifiedComments = this.buildUnifiedCommentFeed(topic);
        this.loading = false;
      },
      error: (error) => {
        this.topic = null;
        this.unifiedComments = [];
        this.loading = false;
        this.errorMessage = error?.error?.message || 'Unable to load topic';
        this.toastr.error(this.errorMessage);
      }
    });
  }

  private buildUnifiedCommentFeed(topic: TopicWeekDetail | null): TopicComment[] {
    if (!topic) {
      return [];
    }

    const roots = [
      ...(topic.proComments || []),
      ...(topic.conComments || [])
    ].map((comment) => this.cloneCommentTree(comment));

    return this.sortCommentTree(roots);
  }

  private cloneCommentTree(comment: TopicComment): TopicComment {
    return {
      ...comment,
      replies: (comment.replies || []).map((reply) => this.cloneCommentTree(reply))
    };
  }

  private sortCommentTree(comments: TopicComment[]): TopicComment[] {
    const sorted = [...(comments || [])];
    sorted.sort((first, second) => this.compareComments(first, second));
    sorted.forEach((comment) => {
      comment.replies = this.sortCommentTree(comment.replies || []);
    });
    return sorted;
  }

  private compareComments(first: TopicComment, second: TopicComment): number {
    const upvoteDifference = (second?.upvoteCount || 0) - (first?.upvoteCount || 0);
    if (upvoteDifference !== 0) {
      return upvoteDifference;
    }

    const firstTimestamp = this.getCommentTimestamp(first);
    const secondTimestamp = this.getCommentTimestamp(second);
    return secondTimestamp - firstTimestamp;
  }

  private getCommentTimestamp(comment: TopicComment): number {
    const parsed = Date.parse(comment?.createdDate || '');
    return Number.isNaN(parsed) ? 0 : parsed;
  }

  private buildExtendedWeeklyTopicRead(weekTitle: string, monthTitle: string): string {
    return `Start by framing the decision: what should AI systems be allowed to recommend, and what must stay under direct human authority? In medical settings, speed and consistency can improve outcomes, but clinical context often includes edge cases that are hard to encode. As you read this topic, compare ideal workflows with real-world constraints like incomplete records, overloaded staff, and uneven access to specialist review.\n\nThen examine accountability pathways. If an AI-supported decision contributes to patient harm, responsibility is rarely singular. Consider how responsibility may be distributed across model developers, hospital leadership, care teams, and regulators. For "${weekTitle}", discuss what documentation, escalation rules, and override protocols should exist before deployment. Strong governance is not only about preventing failure; it also protects clinicians from unclear liability in high-pressure moments.\n\nA second lens is evidence quality. Ask what level of validation should be required before using AI tools for triage, diagnostics, and treatment planning. Should performance be measured only on benchmark datasets, or also on longitudinal outcomes across diverse populations? In the context of "${monthTitle}", evaluate whether explainability should be mandatory for high-impact decisions, and how to balance explainability with raw predictive performance.\n\nFinally, evaluate human factors. Even accurate systems can fail when teams over-trust outputs or under-trust useful recommendations. Discuss training expectations, user interface design, and how confidence scores should be communicated. The strongest proposals usually combine technical safeguards, clinical workflow fit, and clear ownership of final decisions. Use the comment section below and mark your stance to argue which safeguards are essential now versus which can be phased in over time.`;
  }
}
