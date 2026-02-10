import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {
  TopicComment,
  TopicCommentRequest,
  TopicCommentUpvoteResponse,
  TopicVoteRequest,
  TopicVoteSummary,
  TopicWeekDetail,
  TopicWeekSummary
} from './topic.model';

@Injectable({
  providedIn: 'root'
})
export class TopicDiscussionService {

  private readonly apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  getCurrentTopic(): Observable<TopicWeekDetail> {
    return this.http.get<TopicWeekDetail>(`${this.apiBaseUrl}/api/topics/current`);
  }

  getTopicBySlug(slug: string): Observable<TopicWeekDetail> {
    return this.http.get<TopicWeekDetail>(`${this.apiBaseUrl}/api/topics/${encodeURIComponent(slug)}`);
  }

  getTopicArchive(): Observable<TopicWeekSummary[]> {
    return this.http.get<TopicWeekSummary[]>(`${this.apiBaseUrl}/api/topics/archive`);
  }

  voteOnTopic(topicId: number, request: TopicVoteRequest): Observable<TopicVoteSummary> {
    return this.http.post<TopicVoteSummary>(`${this.apiBaseUrl}/api/topics/${topicId}/vote`, request);
  }

  addComment(topicId: number, request: TopicCommentRequest): Observable<TopicComment> {
    return this.http.post<TopicComment>(`${this.apiBaseUrl}/api/topics/${topicId}/comments`, request);
  }

  toggleCommentUpvote(commentId: number): Observable<TopicCommentUpvoteResponse> {
    return this.http.post<TopicCommentUpvoteResponse>(`${this.apiBaseUrl}/api/topics/comments/${commentId}/upvote`, {});
  }

  deleteComment(commentId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiBaseUrl}/api/topics/comments/${commentId}`);
  }
}
