import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PostModel } from '../post-model';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { VotePayload } from './vote-payload';
import { VoteType } from './vote-type';
import { VoteService } from '../vote.service';
import { AuthService } from 'src/app/auth/shared/auth.service';
import { PostService } from '../post.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.css']
})
export class VoteButtonComponent implements OnInit, OnDestroy {

  @Input() post: PostModel;
  votePayload: VotePayload;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  isLoggedIn: boolean;
  private authSubscription?: Subscription;

  constructor(private voteService: VoteService,
    private authService: AuthService,
    private postService: PostService,
    private toastr: ToastrService) {

    this.votePayload = {
      voteType: undefined,
      postId: undefined
    };
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  ngOnInit(): void {
    this.updateVoteDetails();
    this.authSubscription = this.authService.loggedIn.subscribe((data: boolean) => {
      this.isLoggedIn = data;
    });
  }

  ngOnDestroy(): void {
    this.authSubscription?.unsubscribe();
  }

  upvotePost() {
    this.votePayload.voteType = VoteType.UPVOTE;
    this.vote();
  }

  downvotePost() {
    this.votePayload.voteType = VoteType.DOWNVOTE;
    this.vote();
  }

  private vote() {
    this.votePayload.postId = this.post.id;
    this.voteService.vote(this.votePayload).subscribe({
      next: () => {
        this.updateVoteDetails();
      },
      error: (error) => {
        this.toastr.error(error?.error?.message || 'Failed to submit vote');
      }
    });
  }

  private updateVoteDetails() {
    this.postService.getPost(this.post.id).subscribe((post) => {
      this.post = post;
    });
  }
}
