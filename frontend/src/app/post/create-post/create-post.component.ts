import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/shared/post.service';
import { CreatePostPayload } from './create-post.payload';
import { ToastrService } from 'ngx-toastr';
import { MediaUploadType, VideoUploadService } from 'src/app/shared/video-upload.service';
import { finalize, switchMap, tap } from 'rxjs/operators';
import { CommunityService } from 'src/app/community/community.service';
import { CommunitySummary } from 'src/app/community/community.model';
import { SubredditService } from 'src/app/subreddit/subreddit.service';
import { SubredditModel } from 'src/app/subreddit/subreddit-response';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  createPostForm: FormGroup;
  postPayload: CreatePostPayload;
  communityOptions: CommunitySummary[] = [];
  subredditOptions: SubredditModel[] = [];
  isLoadingCommunities = false;
  isLoadingSubreddits = false;
  isUploadingAttachment = false;
  isDragActive = false;
  uploadedAttachmentFileName = '';
  uploadedAttachmentType = '';

  readonly acceptedFileTypes = '.jpg,.jpeg,.png,.gif,.webp,.heic,.heif,.mp4,.mov,.webm,.mkv';

  constructor(
    private router: Router,
    private postService: PostService,
    private toastr: ToastrService,
    private videoUploadService: VideoUploadService,
    private communityService: CommunityService,
    private subredditService: SubredditService
  ) {
    this.postPayload = {
      postName: '',
      url: '',
      videoKey: '',
      imageKey: '',
      description: '',
      subredditName: undefined,
      communityId: undefined
    };
  }

  ngOnInit() {
    this.createPostForm = new FormGroup({
      postName: new FormControl('', Validators.required),
      communityId: new FormControl(null),
      subredditName: new FormControl(''),
      url: new FormControl(''),
      description: new FormControl('', Validators.required),
    });

    this.loadCommunities();
    this.loadSubreddits();
  }

  createPost() {
    if (this.createPostForm.invalid) {
      this.toastr.error('Please fill in all required fields');
      return;
    }

    if (this.isUploadingAttachment) {
      this.toastr.info('Media upload is still in progress. Please wait.');
      return;
    }

    const rawCommunityId = this.createPostForm.get('communityId')?.value;
    const communityId = rawCommunityId === null || rawCommunityId === '' ? null : Number(rawCommunityId);

    const subredditNameRaw = (this.createPostForm.get('subredditName')?.value || '').trim();
    const subredditName = subredditNameRaw.length > 0 ? subredditNameRaw : null;

    this.postPayload.postName = this.createPostForm.get('postName')?.value;
    this.postPayload.communityId = Number.isFinite(communityId as number) ? (communityId as number) : undefined;
    this.postPayload.subredditName = subredditName || undefined;
    this.postPayload.url = (this.createPostForm.get('url')?.value || '').trim();
    this.postPayload.description = this.createPostForm.get('description')?.value;

    this.postService.createPost(this.postPayload).subscribe(() => {
      this.toastr.success('Post created successfully');
      this.router.navigateByUrl('/');
    }, () => {
      this.toastr.error('Create post failed. Please login again and try once more.');
    });
  }

  onMediaSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    this.handleSelectedFiles(input.files);
    input.value = '';
  }

  onDropZoneClick(fileInput: HTMLInputElement) {
    fileInput.click();
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragActive = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragActive = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragActive = false;
    this.handleSelectedFiles(event.dataTransfer?.files || null);
  }

  clearAttachment() {
    this.postPayload.videoKey = '';
    this.postPayload.imageKey = '';
    this.uploadedAttachmentFileName = '';
    this.uploadedAttachmentType = '';
  }

  discardPost() {
    this.router.navigateByUrl('/');
  }

  private loadCommunities() {
    this.isLoadingCommunities = true;

    this.communityService.getAllCommunities().pipe(
      finalize(() => {
        this.isLoadingCommunities = false;
      })
    ).subscribe({
      next: (communities) => {
        this.communityOptions = (communities || []).sort((a, b) => (a?.name || '').localeCompare(b?.name || ''));
      },
      error: () => {
        this.communityOptions = [];
        this.toastr.error('Failed to load communities');
      }
    });
  }

  private loadSubreddits() {
    this.isLoadingSubreddits = true;

    this.subredditService.getAllSubreddits().pipe(
      finalize(() => {
        this.isLoadingSubreddits = false;
      })
    ).subscribe({
      next: (subreddits) => {
        this.subredditOptions = (subreddits || []).sort((a, b) => (a?.name || '').localeCompare(b?.name || ''));
      },
      error: () => {
        this.subredditOptions = [];
        this.toastr.error('Failed to load branches');
      }
    });
  }

  private handleSelectedFiles(files: FileList | null) {
    if (!files || files.length === 0) {
      return;
    }

    if (files.length > 1) {
      this.toastr.info('Only one attachment is supported. Using the latest selected file.');
    }

    const file = files.item(files.length - 1);
    if (!file) {
      return;
    }

    const mediaType = this.detectMediaType(file);
    if (!mediaType) {
      this.toastr.error('Unsupported file type. Use jpg, jpeg, png, gif, webp, heic, mp4, mov, webm, or mkv.');
      return;
    }

    if (this.uploadedAttachmentFileName) {
      this.toastr.info(`Replacing previous attachment: ${this.uploadedAttachmentFileName}`);
    }

    this.uploadAttachment(file, mediaType);
  }

  private uploadAttachment(file: File, mediaType: MediaUploadType) {
    this.isUploadingAttachment = true;

    this.videoUploadService.createMediaUploadUrl(file.name, file.type, mediaType).pipe(
      switchMap((uploadData) => this.videoUploadService.uploadFile(uploadData.uploadUrl, file).pipe(
        tap(() => {
          this.postPayload.videoKey = '';
          this.postPayload.imageKey = '';

          if (mediaType === 'VIDEO') {
            this.postPayload.videoKey = uploadData.objectKey;
          } else {
            this.postPayload.imageKey = uploadData.objectKey;
          }

          this.uploadedAttachmentFileName = file.name;
          this.uploadedAttachmentType = mediaType.toLowerCase();
          this.toastr.success(`${this.uploadedAttachmentType} uploaded successfully`);
        })
      )),
      finalize(() => {
        this.isUploadingAttachment = false;
      })
    ).subscribe({
      error: (error: HttpErrorResponse) => {
        const errorMessage = this.extractUploadErrorMessage(error);
        this.toastr.error(errorMessage);
      }
    });
  }

  private extractUploadErrorMessage(error: HttpErrorResponse): string {
    const backendMessage = error?.error?.message || error?.message;
    if (backendMessage) {
      return backendMessage;
    }

    if (error?.status === 0) {
      return 'Upload failed. Check network/S3 CORS configuration and try again.';
    }

    return 'Attachment upload failed';
  }

  private detectMediaType(file: File): MediaUploadType | null {
    const fileType = (file.type || '').toLowerCase();

    if (this.isSupportedImage(fileType, file.name)) {
      return 'IMAGE';
    }

    if (this.isSupportedVideo(fileType, file.name)) {
      return 'VIDEO';
    }

    return null;
  }

  private isSupportedImage(fileType: string, fileName: string): boolean {
    if ([
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/gif',
      'image/webp',
      'image/heic',
      'image/heif'
    ].includes(fileType)) {
      return true;
    }

    return /\.(jpe?g|png|gif|webp|heic|heif)$/i.test(fileName || '');
  }

  private isSupportedVideo(fileType: string, fileName: string): boolean {
    if ([
      'video/mp4',
      'video/quicktime',
      'video/webm',
      'video/x-matroska'
    ].includes(fileType)) {
      return true;
    }

    return /\.(mp4|mov|webm|mkv)$/i.test(fileName || '');
  }
}
