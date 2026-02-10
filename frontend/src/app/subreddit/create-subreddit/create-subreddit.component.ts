import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommunityService } from 'src/app/community/community.service';

@Component({
  selector: 'app-create-subreddit',
  templateUrl: './create-subreddit.component.html',
  styleUrls: ['./create-subreddit.component.css']
})
export class CreateSubredditComponent implements OnInit {
  createSubredditForm: FormGroup;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private communityService: CommunityService
  ) {
    this.createSubredditForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      headerImageUrl: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  discard() {
    this.router.navigateByUrl('/');
  }

  createSubreddit() {
    if (this.createSubredditForm.invalid) {
      this.createSubredditForm.markAllAsTouched();
      return;
    }

    const payload = {
      name: (this.createSubredditForm.get('title')?.value || '').trim(),
      description: (this.createSubredditForm.get('description')?.value || '').trim(),
      headerImageUrl: (this.createSubredditForm.get('headerImageUrl')?.value || '').trim()
    };

    this.communityService.createCommunity(payload).subscribe({
      next: (community) => {
        this.toastr.success('Community created');
        this.router.navigate(['/communities', community.slug]);
      },
      error: (error) => {
        this.toastr.error(error?.error?.message || 'Failed to create community');
      }
    });
  }
}
