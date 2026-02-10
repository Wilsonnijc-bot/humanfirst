import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  CommunityCreatePayload,
  CommunityDetail,
  CommunitySummary,
  CommunityUpdatePayload,
  MyCommunities
} from './community.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {

  private readonly apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  getAllCommunities(): Observable<CommunitySummary[]> {
    return this.http.get<CommunitySummary[]>(`${this.apiBaseUrl}/api/communities`);
  }

  getCommunity(slug: string): Observable<CommunityDetail> {
    return this.http.get<CommunityDetail>(`${this.apiBaseUrl}/api/communities/${slug}`);
  }

  createCommunity(payload: CommunityCreatePayload): Observable<CommunitySummary> {
    return this.http.post<CommunitySummary>(`${this.apiBaseUrl}/api/communities`, payload);
  }

  updateCommunity(slug: string, payload: CommunityUpdatePayload): Observable<CommunitySummary> {
    return this.http.put<CommunitySummary>(`${this.apiBaseUrl}/api/communities/${slug}`, payload);
  }

  joinCommunity(slug: string): Observable<CommunityDetail> {
    return this.http.post<CommunityDetail>(`${this.apiBaseUrl}/api/communities/${slug}/join`, {});
  }

  leaveCommunity(slug: string): Observable<CommunityDetail> {
    return this.http.delete<CommunityDetail>(`${this.apiBaseUrl}/api/communities/${slug}/join`);
  }

  getMyCommunities(): Observable<MyCommunities> {
    return this.http.get<MyCommunities>(`${this.apiBaseUrl}/api/communities/mine`);
  }
}
