import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { CommunityDetail, CommunitySummary } from '../community.model';
import { CommunityService } from '../community.service';
import { PostService } from '../../shared/post.service';
import { PostModel } from '../../shared/post-model';
import { AuthService } from '../../auth/shared/auth.service';

@Component({
  selector: 'app-community-page',
  templateUrl: './community-page.component.html',
  styleUrls: ['./community-page.component.css']
})
export class CommunityPageComponent implements OnInit, OnDestroy {

  communityDetail: CommunityDetail | null = null;
  community: CommunitySummary | null = null;
  posts: PostModel[] = [];
  slug = '';
  loading = true;
  postsLoading = true;
  notFound = false;
  isLoggedIn = false;
  joinInProgress = false;
  editMode = false;
  saveInProgress = false;

  editForm = new FormGroup({
    description: new FormControl(''),
    headerImageUrl: new FormControl('')
  });

  private routeSubscription?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService,
    private communityService: CommunityService,
    private postService: PostService
  ) {
  }

  ngOnInit(): void {
    this.authService.loggedIn.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });
    this.isLoggedIn = this.authService.isLoggedIn();

    this.routeSubscription = this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug') || '';
      if (!slug.trim()) {
        this.router.navigateByUrl('/communities');
        return;
      }

      this.slug = slug;
      this.editMode = false;
      this.loadCommunityAndPosts();
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }

  toggleEditMode() {
    if (!this.community || !this.communityDetail?.canEdit) {
      return;
    }

    this.editMode = !this.editMode;
    if (this.editMode) {
      this.editForm.patchValue({
        description: this.community.description || '',
        headerImageUrl: this.community.headerImageUrl || ''
      });
    }
  }

  saveCommunityChanges() {
    if (!this.communityDetail?.canEdit || !this.community) {
      return;
    }

    this.saveInProgress = true;
    this.communityService.updateCommunity(this.slug, {
      description: this.editForm.get('description')?.value || '',
      headerImageUrl: this.editForm.get('headerImageUrl')?.value || ''
    }).subscribe({
      next: (updatedCommunity) => {
        this.community = updatedCommunity;
        this.communityDetail = {
          ...this.communityDetail,
          community: updatedCommunity
        };
        this.editMode = false;
        this.saveInProgress = false;
        this.toastr.success('Community updated');
      },
      error: (error: HttpErrorResponse) => {
        this.saveInProgress = false;
        this.toastr.error(error?.error?.message || 'Failed to update community');
      }
    });
  }

  joinCommunity() {
    if (!this.isLoggedIn) {
      this.router.navigateByUrl('/login');
      return;
    }

    if (!this.slug || this.joinInProgress) {
      return;
    }

    this.joinInProgress = true;
    this.communityService.joinCommunity(this.slug).subscribe({
      next: (detail) => {
        this.communityDetail = detail;
        this.community = detail.community;
        this.joinInProgress = false;
        this.toastr.success('Joined community');
      },
      error: (error: HttpErrorResponse) => {
        this.joinInProgress = false;
        this.toastr.error(error?.error?.message || 'Failed to join community');
      }
    });
  }

  leaveCommunity() {
    if (!this.isLoggedIn) {
      return;
    }

    if (!this.slug || this.joinInProgress) {
      return;
    }

    this.joinInProgress = true;
    this.communityService.leaveCommunity(this.slug).subscribe({
      next: (detail) => {
        this.communityDetail = detail;
        this.community = detail.community;
        this.joinInProgress = false;
        this.toastr.success('Left community');
      },
      error: (error: HttpErrorResponse) => {
        this.joinInProgress = false;
        this.toastr.error(error?.error?.message || 'Failed to leave community');
      }
    });
  }

  private loadCommunityAndPosts() {
    this.loading = true;
    this.postsLoading = true;
    this.notFound = false;
    this.posts = [];

    this.communityService.getCommunity(this.slug).subscribe({
      next: (detail) => {
        this.communityDetail = detail;
        this.community = detail.community;
        this.loading = false;
        this.loadCommunityPosts();
      },
      error: (error: HttpErrorResponse) => {
        this.loading = false;
        this.postsLoading = false;
        this.notFound = error.status === 404;
        if (!this.notFound) {
          this.toastr.error(error?.error?.message || 'Failed to load community');
        }
      }
    });
  }

  private loadCommunityPosts() {
    this.postService.getPostsByCommunity(this.slug).subscribe({
      next: (posts) => {
        this.posts = this.sortPostsByNewest(posts || []);
        this.postsLoading = false;
      },
      error: (error: HttpErrorResponse) => {
        this.postsLoading = false;
        if (error.status === 404) {
          this.notFound = true;
          return;
        }
        this.toastr.error(error?.error?.message || 'Failed to load posts');
      }
    });
  }

  private sortPostsByNewest(posts: PostModel[]): PostModel[] {
    return [...posts].sort((a, b) => {
      const createdA = new Date(a?.createdAt || 0).getTime();
      const createdB = new Date(b?.createdAt || 0).getTime();
      return createdB - createdA;
    });
  }
}
