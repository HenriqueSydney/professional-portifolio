import { PostMetrics } from "@/generated/prisma"

export interface IPostMetricsRepository {
    findPostMetricsByPostId(id: string): Promise<PostMetrics | null>
    incrementLikeToPostByPostId(id: string, userId: string): Promise<void>
    decrementLikeToPostByPostId(id: string, userId: string): Promise<void>
    incrementLikeOfANotLoggedUserToToPostByPostId(id: string): Promise<void>
    decrementLikeOfANotLoggedUserToPostByPostId(id: string): Promise<void>
    incrementViewsToPostByPostId(id: string): Promise<PostMetrics>
}