import { PostLikes } from "@/generated/prisma";

export interface IPostLikesRepository {
  findPostLikeByUserIdAndPostId(
    userId: string,
    postId: number
  ): Promise<PostLikes | null>;
}
