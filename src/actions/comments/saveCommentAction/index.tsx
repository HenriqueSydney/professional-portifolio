"use server";

import { randomUUID } from "node:crypto";

import { auth } from "@/auth";
import { apiLogger } from "@/lib/logger";
import { makePostCommentsRepository } from "@/repositories/factories/makePostCommentsRepository";

import { CommentData, commentFormSchema } from "./commentFormSchema";
import { repositoryClient } from "@/lib/repositoryClient";
import { PostComments, Posts } from "@/generated/prisma";
import { makePostsRepository } from "@/repositories/factories/makePostsRepository";

export async function saveCommentAction(params: CommentData) {
  const session = await auth();

  if (!session) {
    apiLogger.warn("User not logged in");
    return {
      success: false,
      message: "Para comentar, favor fazer o login",
    };
  }
  const postsRepository = makePostsRepository();
  const postCommentsRepository = makePostCommentsRepository();
  const traceId = randomUUID();
  try {
    const { message, postId } = commentFormSchema.parse(params);

    const { id } = session.user;

    const [postError, post] = await repositoryClient<Posts | null>(
      "postCommentsRepository.findPostCommentById",
      () => postsRepository.findPostById(postId),
      {
        tags: [`post-${postId}`],
        params: `postId=${postId}`,
      }
    );

    if (postError) {
      throw postError;
    }

    if (!post) {
      throw new Error("Post not found");
    }

    const [commentCreationError, postComment] =
      await repositoryClient<PostComments>(
        "postCommentsRepository.findPostCommentById",
        () =>
          postCommentsRepository.create({
            userId: id,
            postId: post.id,
            comment: message,
          }),
        {
          cache: "revalidate-tags",
          tags: [`post-${postId}-comments`],
          params: `postId=${postId}&userId=${id}`,
        }
      );

    if (commentCreationError) {
      throw commentCreationError;
    }

    apiLogger.info(
      { userId: id, postCommentId: postComment.id, traceId },
      "User sent comment"
    );

    return {
      success: true,
      newComment: postComment,
      message: "Comentário registrado com sucesso!",
    };
  } catch (error) {
    if (error instanceof Error) {
      apiLogger.warn({ stackTrace: error, traceId }, "Error saving message ");
      return {
        success: false,
        message: error.message,
      };
    }

    apiLogger.error({ stackTrace: error, traceId }, "Error saving message ");
    return {
      success: false,
      message: "Ocorreu um erro desconhecido.",
    };
  }
}
