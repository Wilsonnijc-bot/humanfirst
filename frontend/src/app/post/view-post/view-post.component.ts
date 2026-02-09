import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PostModel } from 'src/app/shared/post-model';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommentPayload } from 'src/app/comment/comment.payload';
import { CommentService } from 'src/app/comment/comment.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit, OnDestroy {

  postId: number;
  post: PostModel;
  commentForm: FormGroup;
  commentPayload: CommentPayload;
  comments: CommentPayload[];
  private routeSubscription?: Subscription;

  constructor(private postService: PostService, private activateRoute: ActivatedRoute,
    private commentService: CommentService, private router: Router) {

    this.commentForm = new FormGroup({
      text: new FormControl('', Validators.required)
    });
    this.commentPayload = {
      text: '',
      postId: 0
    };
  }

  ngOnInit(): void {
    this.routeSubscription = this.activateRoute.paramMap.subscribe((params) => {
      const idParam = params.get('id');
      const parsedId = idParam ? Number(idParam) : NaN;

      if (Number.isNaN(parsedId) || parsedId <= 0) {
        this.router.navigateByUrl('/');
        return;
      }

      this.postId = parsedId;
      this.commentPayload.postId = this.postId;
      this.getPostById();
      this.getCommentsForPost();
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }

  postComment() {
    this.commentPayload.text = this.commentForm.get('text')?.value;
    this.commentService.postComment(this.commentPayload).subscribe({
      next: () => {
        this.commentForm.get('text')?.setValue('');
        this.getCommentsForPost();
      }
    });
  }

  hasVideo(): boolean {
    return !!this.post?.videoUrl;
  }

  getImageUrl(): string | null {
    if (!this.post) {
      return null;
    }

    if (this.post.imageUrl) {
      return this.post.imageUrl;
    }

    if (this.post.url && this.isLikelyImageUrl(this.post.url)) {
      return this.post.url;
    }

    return null;
  }

  isExternalLinkPost(): boolean {
    if (!this.post?.url) {
      return false;
    }

    return !this.isLikelyImageUrl(this.post.url) && !this.post.imageUrl;
  }

  private getPostById() {
    this.postService.getPost(this.postId).subscribe({
      next: (data) => {
        this.post = data;
      },
      error: () => {
        this.router.navigateByUrl('/');
      }
    });
  }

  private getCommentsForPost() {
    this.commentService.getAllCommentsForPost(this.postId).subscribe({
      next: (data) => {
        this.comments = data;
      },
      error: () => {
        this.comments = [];
      }
    });
  }

  private isLikelyImageUrl(url: string): boolean {
    return /\.(png|jpe?g|gif|webp|bmp|svg|avif)(\?.*)?$/i.test(url);
  }
}
