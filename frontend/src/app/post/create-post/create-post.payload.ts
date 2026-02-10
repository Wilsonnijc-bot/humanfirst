export class CreatePostPayload {
  postName: string;
  subredditName?: string;
  communityId?: number;
  url?: string;
  videoKey?: string;
  imageKey?: string;
  description: string;
}
