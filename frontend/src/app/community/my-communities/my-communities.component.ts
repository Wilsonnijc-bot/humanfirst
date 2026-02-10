import { Component, OnInit } from '@angular/core';
import { CommunityService } from '../community.service';
import { MyCommunities } from '../community.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-my-communities',
  templateUrl: './my-communities.component.html',
  styleUrls: ['./my-communities.component.css']
})
export class MyCommunitiesComponent implements OnInit {

  myCommunities: MyCommunities = {
    createdCommunities: [],
    joinedCommunities: []
  };

  loading = true;

  constructor(
    private communityService: CommunityService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.communityService.getMyCommunities().subscribe({
      next: (response) => {
        this.myCommunities = response || {
          createdCommunities: [],
          joinedCommunities: []
        };
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.toastr.error('Failed to load your communities');
      }
    });
  }
}
