import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { finalize, switchMap, tap } from 'rxjs/operators';
import { CommunityDetail, CommunitySummary } from '../community.model';
import { CommunityService } from '../community.service';
import { PostService } from '../../shared/post.service';
import { PostModel } from '../../shared/post-model';
import { AuthService } from '../../auth/shared/auth.service';
import { VideoUploadService } from '../../shared/video-upload.service';
import { sortPostsByNewest } from '../../shared/post-sort.util';

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
  deletingCommunity = false;
  descriptionExpanded = false;

  selectedDomain = 'all';
  sidebarReloadToken = 0;

  avatarPreviewUrl: string | null = null;
  bannerPreviewUrl: string | null = null;
  avatarUploadFileName = '';
  bannerUploadFileName = '';
  isUploadingAvatar = false;
  isUploadingBanner = false;
  isAvatarDragActive = false;
  isBannerDragActive = false;

  readonly acceptedCommunityImageTypes = '.jpg,.jpeg,.png,.webp,.gif';

  editForm = new FormGroup({
    description: new FormControl(''),
    avatarImageUrl: new FormControl(''),
    bannerImageUrl: new FormControl('')
  });

  private routeSubscription?: Subscription;
  private readonly descriptionPreviewLimit = 220;
  private readonly maxCommunityImageBytes = 8 * 1024 * 1024;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService,
    private communityService: CommunityService,
    private postService: PostService,
    private videoUploadService: VideoUploadService
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
      this.descriptionExpanded = false;
      this.resetMediaEditState();
      this.loadCommunityAndPosts();
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }

  onSidebarDomainSelected(domain: string) {
    this.navigateToHomeDomain(domain);
  }

  goToTopicArchive() {
    this.router.navigateByUrl('/topics/archive');
  }

  goToCommunityDirectory() {
    this.router.navigateByUrl('/communities');
  }

  goToCreatePost() {
    if (!this.isLoggedIn) {
      this.router.navigateByUrl('/login');
      return;
    }

    const communityId = this.community?.id;
    if (!communityId) {
      this.router.navigateByUrl('/create');
      return;
    }

    this.router.navigate(['/create'], {
      queryParams: { communityId }
    });
  }

  toggleEditMode() {
    if (!this.community || !this.communityDetail?.canEdit || this.deletingCommunity) {
      return;
    }

    this.editMode = !this.editMode;
    if (this.editMode) {
      this.editForm.patchValue({
        description: this.community.description || '',
        avatarImageUrl: this.community.avatarImageUrl || '',
        bannerImageUrl: this.community.bannerImageUrl || ''
      });
      this.avatarPreviewUrl = this.community.avatarImageUrl || null;
      this.bannerPreviewUrl = this.community.bannerImageUrl || null;
      return;
    }

    this.resetMediaEditState();
  }

  saveCommunityChanges() {
    if (!this.communityDetail?.canEdit || !this.community || this.deletingCommunity || this.isUploadingAnyCommunityImage()) {
      return;
    }

    this.saveInProgress = true;
    this.communityService.updateCommunity(this.slug, {
      description: this.editForm.get('description')?.value || '',
      avatarImageUrl: this.editForm.get('avatarImageUrl')?.value || '',
      bannerImageUrl: this.editForm.get('bannerImageUrl')?.value || ''
    }).subscribe({
      next: (updatedCommunity) => {
        this.community = updatedCommunity;
        this.communityDetail = {
          ...this.communityDetail,
          community: updatedCommunity
        };
        this.editMode = false;
        this.saveInProgress = false;
        this.resetMediaEditState();
        this.sidebarReloadToken++;
        this.toastr.success('Community updated');
      },
      error: (error: HttpErrorResponse) => {
        this.saveInProgress = false;
        this.toastr.error(error?.error?.message || 'Failed to update community');
      }
    });
  }

  deleteCommunity() {
    if (!this.communityDetail?.canEdit || !this.community || this.deletingCommunity) {
      return;
    }

    const communityName = this.community.name;
    const typedName = window.prompt(`Type "${communityName}" to confirm community deletion.`);
    if (typedName === null) {
      return;
    }

    if (typedName.trim() !== communityName) {
      this.toastr.error('Community name does not match. Delete cancelled.');
      return;
    }

    this.deletingCommunity = true;
    this.communityService.deleteCommunity(this.slug).subscribe({
      next: () => {
        this.toastr.success('Community deleted');
        this.router.navigateByUrl('/communities');
      },
      error: (error: HttpErrorResponse) => {
        this.deletingCommunity = false;
        this.toastr.error(error?.error?.message || 'Failed to delete community');
      }
    });
  }

  joinCommunity() {
    if (!this.isLoggedIn) {
      this.router.navigateByUrl('/login');
      return;
    }

    if (!this.slug || this.joinInProgress || this.deletingCommunity) {
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
    if (!this.isLoggedIn || !this.communityDetail?.member || this.communityDetail?.creator) {
      return;
    }

    if (!this.slug || this.joinInProgress || this.deletingCommunity) {
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

  toggleDescription() {
    this.descriptionExpanded = !this.descriptionExpanded;
  }

  shouldShowDescriptionToggle(): boolean {
    return this.getCommunityDescription().length > this.descriptionPreviewLimit;
  }

  getDisplayedDescription(): string {
    const description = this.getCommunityDescription();

    if (this.descriptionExpanded || description.length <= this.descriptionPreviewLimit) {
      return description;
    }

    return `${description.slice(0, this.descriptionPreviewLimit).trim()}...`;
  }

  getCommunityAvatarLabel(): string {
    const name = this.community?.name || '';
    return name.trim().charAt(0).toUpperCase() || 'C';
  }

  getCommunityTagline(): string {
    const description = this.getCommunityDescription();
    if (description.length <= 110) {
      return description;
    }

    return `${description.slice(0, 110).trim()}...`;
  }

  getBannerBackground(currentCommunity: CommunitySummary): string {
    if (currentCommunity?.bannerImageUrl) {
      return `linear-gradient(rgba(11,11,15,0.58), rgba(11,11,15,0.82)), url(${currentCommunity.bannerImageUrl})`;
    }

    return 'linear-gradient(120deg, #162033 0%, #182337 45%, #141726 100%)';
  }

  onAvatarDropZoneClick(fileInput: HTMLInputElement) {
    fileInput.click();
  }

  onBannerDropZoneClick(fileInput: HTMLInputElement) {
    fileInput.click();
  }

  onAvatarFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    this.handleCommunityImageSelection(input.files, 'avatar');
    input.value = '';
  }

  onBannerFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    this.handleCommunityImageSelection(input.files, 'banner');
    input.value = '';
  }

  onAvatarDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isAvatarDragActive = true;
  }

  onAvatarDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isAvatarDragActive = false;
  }

  onAvatarDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isAvatarDragActive = false;
    this.handleCommunityImageSelection(event.dataTransfer?.files || null, 'avatar');
  }

  onBannerDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isBannerDragActive = true;
  }

  onBannerDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isBannerDragActive = false;
  }

  onBannerDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isBannerDragActive = false;
    this.handleCommunityImageSelection(event.dataTransfer?.files || null, 'banner');
  }

  private handleCommunityImageSelection(files: FileList | null, target: 'avatar' | 'banner') {
    if (!files || files.length === 0) {
      return;
    }

    if (files.length > 1) {
      this.toastr.info('Only one image can be uploaded at a time. Using the most recent file.');
    }

    const file = files.item(files.length - 1);
    if (!file) {
      return;
    }

    const validationError = this.validateCommunityImage(file);
    if (validationError) {
      this.toastr.error(validationError);
      return;
    }

    this.uploadCommunityImage(file, target);
  }

  private validateCommunityImage(file: File): string | null {
    if (!this.isSupportedCommunityImage(file)) {
      return 'Unsupported image type. Use jpg, jpeg, png, webp, or gif.';
    }

    if (file.size > this.maxCommunityImageBytes) {
      return 'Image is too large. Max size is 8 MB.';
    }

    return null;
  }

  private isSupportedCommunityImage(file: File): boolean {
    const fileType = (file.type || '').toLowerCase();
    if ([
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/webp',
      'image/gif'
    ].includes(fileType)) {
      return true;
    }

    return /\.(jpe?g|png|webp|gif)$/i.test(file.name || '');
  }

  private uploadCommunityImage(file: File, target: 'avatar' | 'banner') {
    this.setImageUploadState(target, true);

    this.videoUploadService.createMediaUploadUrl(file.name, file.type, 'IMAGE').pipe(
      switchMap((uploadData) => this.videoUploadService.uploadFile(uploadData.uploadUrl, file).pipe(
        tap(() => {
          const objectKey = uploadData.objectKey;

          if (target === 'avatar') {
            this.editForm.patchValue({ avatarImageUrl: objectKey });
            this.avatarPreviewUrl = URL.createObjectURL(file);
            this.avatarUploadFileName = file.name;
          } else {
            this.editForm.patchValue({ bannerImageUrl: objectKey });
            this.bannerPreviewUrl = URL.createObjectURL(file);
            this.bannerUploadFileName = file.name;
          }

          this.toastr.success(`${target === 'avatar' ? 'Avatar' : 'Banner'} uploaded`);
        })
      )),
      finalize(() => this.setImageUploadState(target, false))
    ).subscribe({
      error: (error: HttpErrorResponse) => {
        this.toastr.error(this.extractUploadErrorMessage(error));
      }
    });
  }

  private setImageUploadState(target: 'avatar' | 'banner', uploading: boolean) {
    if (target === 'avatar') {
      this.isUploadingAvatar = uploading;
      return;
    }

    this.isUploadingBanner = uploading;
  }

  private extractUploadErrorMessage(error: HttpErrorResponse): string {
    const backendMessage = error?.error?.message || error?.message;
    if (backendMessage) {
      return backendMessage;
    }

    if (error?.status === 0) {
      return 'Upload failed. Check network/S3 CORS configuration and try again.';
    }

    return 'Image upload failed';
  }

  private isUploadingAnyCommunityImage(): boolean {
    return this.isUploadingAvatar || this.isUploadingBanner;
  }

  private resetMediaEditState() {
    this.avatarPreviewUrl = null;
    this.bannerPreviewUrl = null;
    this.avatarUploadFileName = '';
    this.bannerUploadFileName = '';
    this.isAvatarDragActive = false;
    this.isBannerDragActive = false;
    this.isUploadingAvatar = false;
    this.isUploadingBanner = false;
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

  private loadCommunityAndPosts() {
    this.loading = true;
    this.postsLoading = true;
    this.notFound = false;
    this.posts = [];

    this.communityService.getCommunity(this.slug).subscribe({
      next: (detail) => {
        this.communityDetail = detail;
        this.community = detail.community;
        this.descriptionExpanded = false;
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
        this.posts = sortPostsByNewest(posts);
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

  private getCommunityDescription(): string {
    const description = this.community?.description?.trim();
    return description && description.length > 0 ? description : 'No community description yet.';
  }
}
