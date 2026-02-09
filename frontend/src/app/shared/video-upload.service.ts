import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export type MediaUploadType = 'IMAGE' | 'VIDEO';

export interface MediaUploadUrlRequest {
  fileName: string;
  contentType: string;
  mediaType: MediaUploadType;
}

export interface MediaUploadUrlResponse {
  uploadUrl: string;
  objectKey: string;
  mediaType: MediaUploadType;
}

export interface VideoUploadUrlResponse {
  uploadUrl: string;
  videoKey: string;
}

@Injectable({
  providedIn: 'root'
})
export class VideoUploadService {

  private readonly apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  createMediaUploadUrl(fileName: string, contentType: string, mediaType: MediaUploadType): Observable<MediaUploadUrlResponse> {
    const request: MediaUploadUrlRequest = { fileName, contentType, mediaType };
    return this.http.post<MediaUploadUrlResponse>(`${this.apiBaseUrl}/api/uploads/media/presign`, request);
  }

  uploadFile(uploadUrl: string, file: File): Observable<any> {
    const contentType = file.type && file.type.length > 0 ? file.type : 'application/octet-stream';
    return this.http.put(uploadUrl, file, {
      headers: new HttpHeaders({ 'Content-Type': contentType }),
      responseType: 'text'
    });
  }

  createVideoUploadUrl(fileName: string, contentType: string): Observable<VideoUploadUrlResponse> {
    return this.createMediaUploadUrl(fileName, contentType, 'VIDEO').pipe(
      map((response) => ({
        uploadUrl: response.uploadUrl,
        videoKey: response.objectKey
      }))
    );
  }

  uploadVideo(uploadUrl: string, file: File): Observable<any> {
    return this.uploadFile(uploadUrl, file);
  }
}
