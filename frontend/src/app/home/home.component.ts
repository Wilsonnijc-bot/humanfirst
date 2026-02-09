import { Component, OnInit } from '@angular/core';
import { PostModel } from '../shared/post-model';
import { PostService } from '../shared/post.service';
import { SubredditService } from '../subreddit/subreddit.service';
import { SubredditModel } from '../subreddit/subreddit-response';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {
  faChevronDown,
  faComments,
  faCompass,
  faHome,
  faLayerGroup,
  faPlus,
  faUsers
} from '@fortawesome/free-solid-svg-icons';
import { TopicDiscussionService } from '../topics/topic-discussion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Array<PostModel> = [];
  selectedDomain = 'all';
  readonly primaryNavItems = [
    { key: 'home', label: 'Home', icon: faHome, domain: 'all' }
  ];
  readonly homeSubItems = [
    { key: 'discussions', label: 'discussions', icon: faComments, domain: 'discussions' },
    { key: 'ai-prospects', label: 'AI prospects', icon: faLayerGroup, domain: 'ai-prospects' }
  ];
  readonly communityItems = [
    { key: 'ai-agent-community', label: 'AI agent community', icon: faUsers, domain: 'ai-agent-community' },
    { key: 'medical-science-community', label: 'Medical Science community', icon: faLayerGroup, domain: 'medical-science-community' }
  ];

  monthlyTopicLabel = 'Topic of the month - (manually change each month)';
  weeklyTopicLabel = 'Topic of the week - (manually change each week)';

  readonly faCompass = faCompass;
  readonly faPlus = faPlus;
  readonly faChevronDown = faChevronDown;

  private currentTopicSlug: string | null = null;
  private subredditIdByDomain = new Map<string, number>();
  private readonly domainAliases: Record<string, string[]> = {
    discussions: ['discussions'],
    'ai-prospects': ['ai prospects', 'ai-prospects'],
    'ai-agent-community': ['ai agent community', 'ai-agent-community'],
    'medical-science-community': ['medical science community', 'medical-science-community']
  };

  constructor(
    private postService: PostService,
    private subredditService: SubredditService,
    private toastr: ToastrService,
    private router: Router,
    private topicDiscussionService: TopicDiscussionService
  ) {
  }

  ngOnInit(): void {
    this.loadDomainMapping();
    this.loadTopicLabels();
  }

  selectDomain(domainKey: string) {
    if (this.selectedDomain === domainKey) {
      return;
    }
    this.selectedDomain = domainKey;
    this.loadPosts();
  }

  handlePrimaryNavClick(item: { domain?: string }) {
    if (item.domain) {
      this.selectDomain(item.domain);
    }
  }

  handleHomeSubItemClick(item: { domain?: string }) {
    if (item.domain) {
      this.selectDomain(item.domain);
    }
  }

  handleCommunityClick(item: { domain?: string }) {
    if (item.domain) {
      this.selectDomain(item.domain);
    }
  }

  isItemActive(item: { domain?: string }) {
    return !!item.domain && this.selectedDomain === item.domain;
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

  private loadTopicLabels() {
    this.topicDiscussionService.getCurrentTopic().subscribe((topic) => {
      this.monthlyTopicLabel = `Topic of the month - ${topic.monthTitle}`;
      this.weeklyTopicLabel = `Topic of the week - ${topic.weekTitle}`;
      this.currentTopicSlug = topic.slug || null;
    }, () => {
      this.currentTopicSlug = null;
    });
  }

  private loadDomainMapping() {
    this.subredditService.getAllSubreddits().subscribe((subreddits: SubredditModel[]) => {
      this.subredditIdByDomain.clear();

      const subredditIdByName = new Map<string, number>();
      subreddits.forEach((item) => {
        if (item.id) {
          subredditIdByName.set(this.normalizeName(item.name), item.id);
        }
      });

      Object.entries(this.domainAliases).forEach(([domainKey, aliases]) => {
        const mappedId = aliases
          .map((alias) => subredditIdByName.get(this.normalizeName(alias)))
          .find((value) => !!value);

        if (mappedId) {
          this.subredditIdByDomain.set(domainKey, mappedId);
        }
      });

      if (this.selectedDomain !== 'all' && !this.subredditIdByDomain.has(this.selectedDomain)) {
        this.selectedDomain = 'all';
      }

      this.loadPosts();
    }, () => {
      this.toastr.error('Failed to load domain list');
      this.loadPosts();
    });
  }

  private loadPosts() {
    if (this.selectedDomain === 'all') {
      this.postService.getAllPosts().subscribe((post) => {
        this.posts = this.sortPostsByNewest(post);
      }, () => {
        this.posts = [];
        this.toastr.error('Failed to load posts');
      });
      return;
    }

    const subredditId = this.subredditIdByDomain.get(this.selectedDomain);
    if (!subredditId) {
      this.posts = [];
      this.toastr.error('Selected domain is not available');
      return;
    }

    this.postService.getPostsBySubreddit(subredditId).subscribe((post) => {
      this.posts = this.sortPostsByNewest(post);
    }, () => {
      this.posts = [];
      this.toastr.error('Failed to load posts for selected domain');
    });
  }

  private sortPostsByNewest(posts: PostModel[]): PostModel[] {
    return [...(posts || [])].sort((a, b) => {
      const createdTimeA = this.parseTimestamp(a?.createdAt);
      const createdTimeB = this.parseTimestamp(b?.createdAt);

      if (createdTimeA !== createdTimeB) {
        return createdTimeB - createdTimeA;
      }

      return (b?.id || 0) - (a?.id || 0);
    });
  }

  private parseTimestamp(value: string | undefined): number {
    if (!value) {
      return 0;
    }
    const parsed = new Date(value).getTime();
    return Number.isNaN(parsed) ? 0 : parsed;
  }

  private normalizeName(value: string): string {
    return (value || '')
      .toLowerCase()
      .replace(/[_-]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }
}
