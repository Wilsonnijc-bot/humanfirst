import { Component, OnInit } from '@angular/core';
import { faPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth/shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  readonly faPlus = faPlus;
  readonly faUsers = faUsers;
  isLoggedIn: boolean;
  username: string;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.authService.loggedIn.subscribe((data: boolean) => this.isLoggedIn = data);
    this.authService.username.subscribe((data: string) => this.username = data);
    this.isLoggedIn = this.authService.isLoggedIn();
    this.username = this.authService.getUserName();
  }

  goToUserProfile() {
    this.router.navigateByUrl('/user-profile/' + this.username);
  }

  goToMyPosts() {
    this.router.navigateByUrl('/my-posts');
  }

  goToMyLikes() {
    this.router.navigateByUrl('/my-likes');
  }

  goToMyComments() {
    this.router.navigateByUrl('/my-comments');
  }

  goToMyCommunities() {
    this.router.navigateByUrl('/my-communities');
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigateByUrl('');
  }
}
