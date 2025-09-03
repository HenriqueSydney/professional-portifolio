import { PostCommentsLikes } from "@/generated/prisma"

export interface IPostCommentsLikesRepository {
    findPostCommentsLikeByUserIdAndPostCommentId(userId: string, postCommentId: number): Promise<PostCommentsLikes | null>
    create(id: number, userId: string): Promise<void>
    delete(id: number, userId: string): Promise<void>
}