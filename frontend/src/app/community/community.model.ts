export interface CommunitySummary {
  id: number;
  name: string;
  slug: string;
  description?: string;
  headerImageUrl?: string;
  createdByUserId?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface CommunityDetail {
  community: CommunitySummary;
  member: boolean;
  creator: boolean;
  canEdit: boolean;
}

export interface CommunityCreatePayload {
  name: string;
  description?: string;
  headerImageUrl?: string;
}

export interface CommunityUpdatePayload {
  description?: string;
  headerImageUrl?: string;
}

export interface MyCommunities {
  createdCommunities: CommunitySummary[];
  joinedCommunities: CommunitySummary[];
}
