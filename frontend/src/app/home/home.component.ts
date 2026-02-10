import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PostModel } from '../shared/post-model';
import { PostService } from '../shared/post.service';
import { SubredditService } from '../subreddit/subreddit.service';
import { SubredditModel } from '../subreddit/subreddit-response';
import { sortPostsByNewest } from '../shared/post-sort.util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Array<PostModel> = [];
  selectedDomain = 'all';

  private subredditIdByDomain = new Map<string, number>();
  private readonly domainAliases: Record<string, string[]> = {
    discussions: ['discussions'],
    'ai-prospects': ['ai prospects', 'ai-prospects']
  };

  constructor(
    private postService: PostService,
    private subredditService: SubredditService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const queryDomain = this.normalizeDomainKey(this.route.snapshot.queryParamMap.get('domain'));
    if (queryDomain) {
      this.selectedDomain = queryDomain;
    }

    this.loadDomainMapping();
  }

  onSidebarDomainSelected(domainKey: string) {
    this.selectDomain(domainKey);
  }

  private selectDomain(domainKey: string) {
    if (this.selectedDomain === domainKey) {
      return;
    }

    this.selectedDomain = domainKey;
    this.loadPosts();
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
      this.postService.getAllPosts().subscribe((posts) => {
        this.posts = sortPostsByNewest(posts);
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

    this.postService.getPostsBySubreddit(subredditId).subscribe((posts) => {
      this.posts = sortPostsByNewest(posts);
    }, () => {
      this.posts = [];
      this.toastr.error('Failed to load posts for selected domain');
    });
  }

  private normalizeDomainKey(value: string | null): string | null {
    if (!value) {
      return null;
    }

    const normalized = value.trim().toLowerCase();
    if (normalized === 'all' || Object.keys(this.domainAliases).includes(normalized)) {
      return normalized;
    }

    return null;
  }

  private normalizeName(value: string): string {
    return (value || '')
      .toLowerCase()
      .replace(/[_-]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }
}
