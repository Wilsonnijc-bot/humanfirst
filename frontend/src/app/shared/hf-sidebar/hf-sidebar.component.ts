import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import {
  faChevronDown,
  faComments,
  faCompass,
  faHome,
  faLayerGroup,
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { CommunitySummary } from '../../community/community.model';
import { CommunityService } from '../../community/community.service';
import { TopicDiscussionService } from '../../topics/topic-discussion.service';

const DEFAULT_MONTHLY_TOPIC_LABEL = 'Topic of the month - (manually change each month)';
const DEFAULT_WEEKLY_TOPIC_LABEL = 'Topic of the week - (manually change each week)';

@Component({
  selector: 'app-hf-sidebar',
  templateUrl: './hf-sidebar.component.html',
  styleUrls: ['./hf-sidebar.component.css']
})
export class HfSidebarComponent implements OnInit, OnChanges {

  @Input() selectedDomain = 'all';
  @Input() reloadToken = 0;
  @Output() domainSelected = new EventEmitter<string>();

  communityItems: CommunitySummary[] = [];
  monthlyTopicLabel = DEFAULT_MONTHLY_TOPIC_LABEL;
  weeklyTopicLabel = DEFAULT_WEEKLY_TOPIC_LABEL;

  readonly primaryNavItems = [
    { key: 'home', label: 'Home', icon: faHome, domain: 'all' }
  ];

  readonly homeSubItems = [
    { key: 'discussions', label: 'discussions', icon: faComments, domain: 'discussions' },
    { key: 'ai-prospects', label: 'AI prospects', icon: faLayerGroup, domain: 'ai-prospects' }
  ];

  readonly faCompass = faCompass;
  readonly faPlus = faPlus;
  readonly faChevronDown = faChevronDown;

  private currentTopicSlug: string | null = null;

  constructor(
    private communityService: CommunityService,
    private topicDiscussionService: TopicDiscussionService,
    private router: Router,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.refreshSidebarContent();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.reloadToken || changes.reloadToken.isFirstChange()) {
      return;
    }

    this.loadCommunities();
  }

  onPrimaryNavClick(item: { domain?: string }) {
    if (item.domain) {
      this.selectDomain(item.domain);
    }
  }

  onHomeSubItemClick(item: { domain?: string }) {
    if (item.domain) {
      this.selectDomain(item.domain);
    }
  }

  onCommunityClick(item: CommunitySummary) {
    if (!item?.slug) {
      return;
    }

    this.router.navigate(['/communities', item.slug]);
  }

  isItemActive(item: { domain?: string }) {
    return !!item.domain && this.selectedDomain === item.domain;
  }

  hasCommunityAvatar(item: CommunitySummary): boolean {
    return !!item?.avatarImageUrl;
  }

  getCommunityInitial(item: CommunitySummary): string {
    const name = item?.name || '';
    return name.trim().charAt(0).toUpperCase() || 'C';
  }

  goToCreateSubreddit() {
    this.router.navigateByUrl('/create-subreddit');
  }

  goToCurrentTopic() {
    if (this.currentTopicSlug) {
      this.router.navigate(['/topics', this.currentTopicSlug]);
      return;
    }

    this.router.navigateByUrl('/topics');
  }

  goToTopicArchive() {
    this.router.navigateByUrl('/topics/archive');
  }

  goToCommunityDirectory() {
    this.router.navigateByUrl('/communities');
  }

  private selectDomain(domain: string) {
    this.domainSelected.emit(domain);
  }

  private refreshSidebarContent() {
    this.loadTopicLabels();
    this.loadCommunities();
  }

  private loadTopicLabels() {
    this.topicDiscussionService.getCurrentTopic().subscribe({
      next: (topic) => {
        this.monthlyTopicLabel = `Topic of the month - ${topic.monthTitle}`;
        this.weeklyTopicLabel = `Topic of the week - ${topic.weekTitle}`;
        this.currentTopicSlug = topic.slug || null;
      },
      error: () => {
        this.monthlyTopicLabel = DEFAULT_MONTHLY_TOPIC_LABEL;
        this.weeklyTopicLabel = DEFAULT_WEEKLY_TOPIC_LABEL;
        this.currentTopicSlug = null;
      }
    });
  }

  private loadCommunities() {
    this.communityService.getAllCommunities().subscribe({
      next: (communities) => {
        this.communityItems = communities || [];
      },
      error: () => {
        this.communityItems = [];
        this.toastr.error('Failed to load communities');
      }
    });
  }
}
