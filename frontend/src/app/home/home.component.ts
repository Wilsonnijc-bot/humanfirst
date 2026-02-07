import { Component, OnInit } from '@angular/core';
import { PostModel } from '../shared/post-model';
import { PostService } from '../shared/post.service';
import { SubredditService } from '../subreddit/subreddit.service';
import { SubredditModel } from '../subreddit/subreddit-response';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {
  faBullhorn,
  faChevronDown,
  faComments,
  faCompass,
  faFire,
  faGlobe,
  faHome,
  faLayerGroup,
  faPaintBrush,
  faPlus,
  faUsers,
  faCogs
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Array<PostModel> = [];
  selectedDomain = 'all';
  readonly primaryNavItems = [
    { key: 'home', label: 'Home', icon: faHome },
    { key: 'popular', label: 'Popular', icon: faFire },
    { key: 'explore', label: 'Explore', icon: faCompass },
    { key: 'all', label: 'All', icon: faGlobe, domain: 'all' }
  ];
  readonly communityItems = [
    { key: 'discussions', label: 'discussions', icon: faComments, domain: 'discussions' },
    { key: 'ai-prospects', label: 'AI prospects', icon: faLayerGroup, domain: 'ai-prospects' },
    { key: 'humanfirst-lounge', label: 'Humanfirst Lounge', icon: faUsers },
    { key: 'design', label: 'Design', icon: faPaintBrush },
    { key: 'engineering', label: 'Engineering', icon: faCogs },
    { key: 'announcements', label: 'Announcements', icon: faBullhorn },
    { key: 'discover', label: 'Discover More Communities', icon: faCompass }
  ];
  readonly faPlus = faPlus;
  readonly faChevronDown = faChevronDown;
  private subredditIdByDomain = new Map<string, number>();

  constructor(
    private postService: PostService,
    private subredditService: SubredditService,
    private toastr: ToastrService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.loadDomainMapping();
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

  private loadDomainMapping() {
    this.subredditService.getAllSubreddits().subscribe((subreddits: SubredditModel[]) => {
      this.subredditIdByDomain.clear();
      const discussions = subreddits.find((item) => item.name.toLowerCase() === 'discussions');
      const aiProspects = subreddits.find((item) => item.name.toLowerCase() === 'ai prospects');

      if (discussions?.id) {
        this.subredditIdByDomain.set('discussions', discussions.id);
      }
      if (aiProspects?.id) {
        this.subredditIdByDomain.set('ai-prospects', aiProspects.id);
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
        this.posts = post;
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
      this.posts = post;
    }, () => {
      this.posts = [];
      this.toastr.error('Failed to load posts for selected domain');
    });
  }
}
