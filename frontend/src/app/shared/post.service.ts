import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostModel } from './post-model';
import { Observable } from 'rxjs';
import { CreatePostPayload } from '../post/create-post/create-post.payload';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private readonly apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  getAllPosts(): Observable<Array<PostModel>> {
    return this.http.get<Array<PostModel>>(`${this.apiBaseUrl}/api/posts/`);
  }

  createPost(postPayload: CreatePostPayload): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/api/posts/`, postPayload);
  }

  getPost(id: number): Observable<PostModel> {
    return this.http.get<PostModel>(`${this.apiBaseUrl}/api/posts/${id}`);
  }

  getPostsBySubreddit(id: number): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(`${this.apiBaseUrl}/api/posts/by-subreddit/${id}`);
  }

  getPostsByCommunity(slug: string): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(`${this.apiBaseUrl}/api/posts/by-community/${slug}`);
  }

  getAllPostsByUser(name: string): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(`${this.apiBaseUrl}/api/posts/by-user/${name}`);
  }
}
