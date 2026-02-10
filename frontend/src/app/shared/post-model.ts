export class PostModel {
  id: number;
  postName: string;
  url: string;
  videoUrl: string;
  imageUrl: string;
  description: string;
  voteCount: number;
  userName: string;
  subredditName: string;
  communityId?: number;
  communityName?: string;
  communitySlug?: string;
  commentCount: number;
  duration: string;
  createdAt: string;
  upVote: boolean;
  downVote: boolean;
}
