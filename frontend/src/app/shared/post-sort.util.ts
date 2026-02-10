import { PostModel } from './post-model';

export function sortPostsByNewest(posts: PostModel[] | null | undefined): PostModel[] {
  return [...(posts || [])].sort((a, b) => {
    const createdA = parseTimestamp(a?.createdAt);
    const createdB = parseTimestamp(b?.createdAt);

    if (createdA !== createdB) {
      return createdB - createdA;
    }

    return (b?.id || 0) - (a?.id || 0);
  });
}

function parseTimestamp(value: string | undefined): number {
  if (!value) {
    return 0;
  }

  const parsed = new Date(value).getTime();
  return Number.isNaN(parsed) ? 0 : parsed;
}
