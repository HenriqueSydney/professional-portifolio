"use server";

import { randomUUID } from "node:crypto";

import { auth } from "@/auth";
import { apiLogger } from "@/lib/logger";
import { makePostCommentsRepository } from "@/repositories/factories/makePostCommentsRepository";

import {
  EditCommentData,
  editCommentFormSchema,
} from "./editCommentFormSchema";
import { repositoryClient } from "@/lib/repositoryClient";
import { PostComments } from "@/generated/prisma";

export async function editCommentAction(params: EditCommentData) {
  const session = await auth();

  if (!session) {
    apiLogger.warn("User not logged in");
    return {
      success: false,
      message: "Para editar seu comentário, favor fazer o login",
    };
  }

  const postCommentsRepository = makePostCommentsRepository();
  const traceId = randomUUID();
  try {
    const { message, commentId } = editCommentFormSchema.parse(params);

    const { id: userId } = session.user;

    const [commentDataError, commentData] =
      await repositoryClient<PostComments | null>(
        "postCommentsRepository.findPostCommentById",
        () => postCommentsRepository.findPostCommentById(commentId),
        {
          tags: [`comment-${commentId}`],
          params: `commentId=${commentId}`,
        }
      );

    if (commentDataError) {
      throw commentDataError;
    }

    const isCommentFromSameUser = commentData?.userId == userId;

    if (!isCommentFromSameUser) {
      throw new Error("Comment is not from same User");
    }

    const [postCommentUpdateError, postComment] =
      await repositoryClient<PostComments>(
        "postCommentsRepository.update",
        () =>
          postCommentsRepository.update({
            id: commentId,
            comment: message,
          }),
        {
          cache: "revalidate-tags",
          tags: ["post-comments", `comment-${commentId}`],
          params: `commentId=${commentId}`,
        }
      );

    if (postCommentUpdateError) {
      throw postCommentUpdateError;
    }

    apiLogger.info(
      { userId, postCommentId: postComment.id, traceId },
      "User updated comment"
    );

    return {
      success: true,
      newComment: postComment,
      message: "Comentário atualizado com sucesso!",
    };
  } catch (error) {
    if (error instanceof Error) {
      apiLogger.warn({ stackTrace: error, traceId }, "Error updating message");
      return {
        success: false,
        message: error.message,
      };
    }

    apiLogger.error({ stackTrace: error, traceId }, "Error updating message ");
    return {
      success: false,
      message: "Ocorreu um erro desconhecido.",
    };
  }
}
