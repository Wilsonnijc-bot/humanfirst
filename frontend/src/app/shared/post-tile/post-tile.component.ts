import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { PostModel } from '../post-model';
import { faComments, faEllipsisH, faHeart, faPlay, faShare, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PostTileComponent implements OnInit {

  faComments = faComments;
  faHeart = faHeart;
  faShare = faShare;
  faEllipsisH = faEllipsisH;
  faPlay = faPlay;
  faVolumeMute = faVolumeMute;
  @Input() posts: PostModel[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToPost(id: number): void {
    this.router.navigateByUrl('/view-post/' + id);
  }

  isVideoPost(post: PostModel): boolean {
    return !!post?.videoUrl;
  }

  getImageUrl(post: PostModel): string | null {
    if (post?.imageUrl) {
      return post.imageUrl;
    }

    if (!post?.url) {
      return null;
    }

    return this.isLikelyImageUrl(post.url) ? post.url : null;
  }

  isMediaPost(post: PostModel): boolean {
    return this.isVideoPost(post) || !!this.getImageUrl(post);
  }

  isExternalLinkPost(post: PostModel): boolean {
    return !!post?.url && !this.isLikelyImageUrl(post.url) && !post?.imageUrl;
  }

  sharePost(post: PostModel): void {
    const shareUrl = `${window.location.origin}/view-post/${post.id}`;
    const webNavigator = navigator as any;
    if (webNavigator.share) {
      webNavigator.share({ title: post.postName, url: shareUrl }).catch(() => {
      });
      return;
    }
    if (webNavigator.clipboard?.writeText) {
      webNavigator.clipboard.writeText(shareUrl).catch(() => {
      });
    }
  }

  private isLikelyImageUrl(url: string): boolean {
    return /\.(png|jpe?g|gif|webp|bmp|svg|avif)(\?.*)?$/i.test(url);
  }
}
