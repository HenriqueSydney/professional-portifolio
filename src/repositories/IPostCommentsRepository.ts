import { Pagination } from "@/@types/Pagination";

import { PostComments, Prisma, User } from "@/generated/prisma";

export type PostCommentesWithUser = PostComments & {
  user: User;
};

export type FetchCommentsByPostIdResponse = {
  postComments: PostCommentesWithUser[];
  totalOfRecords: number;
};

export interface IPostCommentsReposity {
  create(data: Prisma.PostCommentsUncheckedCreateInput): Promise<PostComments>;
  update(
    data: Prisma.PostCommentsUncheckedUpdateInput & { id: number }
  ): Promise<PostComments>;
  deleteById(id: number): Promise<{ postId: number } | null>;
  findPostCommentById(id: number): Promise<PostComments | null>;
  fetchCommentsByPostId(
    postId: number,
    pagination: Pagination
  ): Promise<FetchCommentsByPostIdResponse>;
  incrementLikeToCommentByCommentId(id: number, userId: string): Promise<void>;
  decrementLikeToCommentByCommentId(id: number, userId: string): Promise<void>;
  incrementLikeOfANotLoggedUserToCommentByCommentId(id: number): Promise<void>;
  decrementLikeOfANotLoggedUserToCommentByCommentId(id: number): Promise<void>;
}
