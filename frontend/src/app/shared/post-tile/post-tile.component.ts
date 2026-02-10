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

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goToPost(post: PostModel): void {
    this.router.navigateByUrl(this.getPostPath(post));
  }

  goToCommunity(post: PostModel): void {
    const slug = post?.communitySlug;
    if (!slug) {
      return;
    }

    this.router.navigate(['/communities', slug]);
  }

  getPostPath(post: PostModel): string {
    const safeSubreddit = this.slugify(post?.communitySlug || post?.communityName || post?.subredditName || 'community');
    const safeTitle = this.slugify(post?.postName || 'post');
    return `/r/${safeSubreddit}/comments/${post.id}/${safeTitle}`;
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
    const shareUrl = `${window.location.origin}${this.getPostPath(post)}`;
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

  getCommunityLabel(post: PostModel): string {
    return post?.communityName || post?.subredditName || 'community';
  }

  private slugify(value: string): string {
    return (value || '')
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '_')
      .replace(/_+/g, '_')
      .replace(/^-+|-+$/g, '')
      || 'post';
  }

  private isLikelyImageUrl(url: string): boolean {
    return /\.(png|jpe?g|gif|webp|bmp|svg|avif)(\?.*)?$/i.test(url);
  }
}
