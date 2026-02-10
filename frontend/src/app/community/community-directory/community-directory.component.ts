import { Component, OnInit } from '@angular/core';
import { CommunityService } from '../community.service';
import { CommunitySummary } from '../community.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-community-directory',
  templateUrl: './community-directory.component.html',
  styleUrls: ['./community-directory.component.css']
})
export class CommunityDirectoryComponent implements OnInit {

  communities: CommunitySummary[] = [];
  loading = true;

  constructor(
    private communityService: CommunityService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.communityService.getAllCommunities().subscribe({
      next: (communities) => {
        this.communities = communities || [];
        this.loading = false;
      },
      error: () => {
        this.communities = [];
        this.loading = false;
        this.toastr.error('Failed to load communities');
      }
    });
  }
}
