import { Pagination } from "@/@types/Pagination";
import { PostComments, User, Prisma } from "@/generated/prisma";

export type PostCommentesWithUser = PostComments & {
    user: User
}

export interface IPostCommentsReposity {
    create(data: Prisma.PostCommentsUncheckedCreateInput): Promise<PostComments>
    update(data: Prisma.PostCommentsUncheckedUpdateInput & { id: number }): Promise<PostComments>
    deleteById(id: number): Promise<void>
    findPostCommentById(id: number): Promise<PostComments | null>
    fetchCommentsByPostId(postId: string, pagination: Pagination): Promise<{ postComments: PostCommentesWithUser[], totalOfRecords: number }>
    incrementLikeToCommentByCommentId(id: number, userId: string): Promise<void>
    decrementLikeToCommentByCommentId(id: number, userId: string): Promise<void>
    incrementLikeOfANotLoggedUserToCommentByCommentId(id: number): Promise<void>
    decrementLikeOfANotLoggedUserToCommentByCommentId(id: number): Promise<void>
}