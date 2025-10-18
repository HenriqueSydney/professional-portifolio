import { PostMetrics } from "@/generated/prisma";

export type PostStats = {
  postId: number;
  numberOfViews: number;
  totalOfComments: number;
  numberOfLikes: number;
};

export type PostStatsWithAverage = {
  totalViews: number;
  totalLikes: number;
  totalComments: number;
  averageViewsPerPost: number;
  averageLikesPerPost: number;
  averageCommentsPerPost: number;
};

export interface IPostMetricsRepository {
  findPostMetricsByPostId(postId: number): Promise<PostMetrics | null>;
  incrementLikeToPostByPostId(postId: number, userId: string): Promise<void>;
  decrementLikeToPostByPostId(postId: number, userId: string): Promise<void>;
  incrementLikeOfANotLoggedUserToToPostByPostId(postId: number): Promise<void>;
  decrementLikeOfANotLoggedUserToPostByPostId(postId: number): Promise<void>;
  incrementViewsToPostByPostId(postId: number): Promise<PostMetrics>;
  getConsolidatedStatsByPostId(postId: number): Promise<PostStats | null>;
  getAllConsolidatedStats(): Promise<PostStats[]>;
  getGlobalConsolidatedStats(): Promise<PostStatsWithAverage>;
  getTopViewedPosts(
    limit?: number
  ): Promise<{ title: string; views: number }[]>;
}
