import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { CreateSubredditComponent } from './subreddit/create-subreddit/create-subreddit.component';
import { ListSubredditsComponent } from './subreddit/list-subreddits/list-subreddits.component';
import { ViewPostComponent } from './post/view-post/view-post.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { AccountVerificationComponent } from './auth/account-verification/account-verification.component';
import { TopicDiscussionComponent } from './topics/topic-discussion.component';
import { TopicsArchiveComponent } from './topics/topics-archive/topics-archive.component';
import { CommunityPageComponent } from './community/community-page/community-page.component';
import { CommunityDirectoryComponent } from './community/community-directory/community-directory.component';
import { MyCommunitiesComponent } from './community/my-communities/my-communities.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'r/:subreddit/comments/:id/:slug', component: ViewPostComponent },
  { path: 'r/:subreddit/comments/:id', component: ViewPostComponent },
  { path: 'view-post/:id', component: ViewPostComponent },
  { path: 'user-profile/:name', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'topics/archive', component: TopicsArchiveComponent },
  { path: 'topics/:slug', component: TopicDiscussionComponent },
  { path: 'topics', component: TopicDiscussionComponent },
  { path: 'communities/:slug', component: CommunityPageComponent },
  { path: 'communities', component: CommunityDirectoryComponent },
  { path: 'my-communities', component: MyCommunitiesComponent, canActivate: [AuthGuard] },
  { path: 'list-subreddits', component: ListSubredditsComponent },
  { path: 'create', component: CreatePostComponent, canActivate: [AuthGuard] },
  { path: 'create-post', redirectTo: '/create', pathMatch: 'full' },
  { path: 'create-subreddit', component: CreateSubredditComponent, canActivate: [AuthGuard] },
  { path: 'sign-up', component: SignupComponent },
  { path: 'signup', redirectTo: '/sign-up', pathMatch: 'full' },
  { path: 'account-verification/:token', component: AccountVerificationComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
