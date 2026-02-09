export class CreatePostPayload {
    postName: string;
    subredditName?: string;
    url?: string;
    videoKey?: string;
    imageKey?: string;
    description: string;
}
