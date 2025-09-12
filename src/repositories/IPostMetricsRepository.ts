import { PostMetrics } from "@/generated/prisma";

export interface IPostMetricsRepository {
  findPostMetricsByPostId(postId: number): Promise<PostMetrics | null>;
  incrementLikeToPostByPostId(postId: number, userId: string): Promise<void>;
  decrementLikeToPostByPostId(postId: number, userId: string): Promise<void>;
  incrementLikeOfANotLoggedUserToToPostByPostId(postId: number): Promise<void>;
  decrementLikeOfANotLoggedUserToPostByPostId(postId: number): Promise<void>;
  incrementViewsToPostByPostId(postId: number): Promise<PostMetrics>;
}
