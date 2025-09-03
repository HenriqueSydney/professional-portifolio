import { PostLikes } from "@/generated/prisma"

export interface IPostLikesRepository {
    findPostLikeByUserIdAndPostId(userId: string, postId: string): Promise<PostLikes | null>
}