export type TopicStance = 'PRO' | 'CON';

export interface TopicSubdivision {
  id: number;
  title: string;
  displayOrder: number;
}

export interface TopicVoteSummary {
  proVotes: number;
  conVotes: number;
  totalVotes: number;
  proPercent: number;
  conPercent: number;
  userStance: TopicStance | null;
}

export interface TopicComment {
  id: number;
  text: string;
  userName: string;
  createdDate: string;
  duration: string;
  upvoteCount: number;
  upVotedByCurrentUser: boolean;
  stance: TopicStance;
  replies: TopicComment[];
}

export interface TopicWeekDetail {
  id: number;
  slug: string;
  weekTitle: string;
  monthTitle: string;
  subdivisions: TopicSubdivision[];
  voteSummary: TopicVoteSummary;
  proComments: TopicComment[];
  conComments: TopicComment[];
}

export interface TopicWeekSummary {
  id: number;
  slug: string;
  weekTitle: string;
  monthTitle: string;
  createdDate: string;
}

export interface TopicVoteRequest {
  stance: TopicStance;
}

export interface TopicCommentRequest {
  text: string;
  stance: TopicStance;
  parentCommentId?: number;
}

export interface TopicCommentUpvoteResponse {
  commentId: number;
  upvoteCount: number;
  upVotedByCurrentUser: boolean;
}
