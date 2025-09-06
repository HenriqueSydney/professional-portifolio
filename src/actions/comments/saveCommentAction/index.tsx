'use server'

import { randomUUID } from "node:crypto";

import { auth } from "@/auth";
import { apiLogger } from "@/lib/logger";
import { makePostCommentsRepository } from "@/repositories/factories/makePostCommentsRepository";

import { CommentData, commentFormSchema } from "./commentFormSchema";

export async function saveCommentAction(params: CommentData) {
  const session = await auth()

  if (!session) {
    apiLogger.warn('User not logged in')
    return {
      success: false,
      message: 'Para comentar, favor fazer o login'
    };
  }
  const postCommentsRepository = makePostCommentsRepository()
  const traceId = randomUUID()
  try {
    const { message, postId } = commentFormSchema.parse(params);

    const { id } = session.user

    const postComment = await postCommentsRepository.create({
      userId: id,
      postId,
      comment: message,
    })

    apiLogger.info({ userId: id, postCommentId: postComment.id, traceId }, 'User sent comment')

    return {
      success: true,
      newComment: postComment,
      message: 'Comentário registrado com sucesso!'
    };

  } catch (error) {
    if (error instanceof Error) {
      apiLogger.warn({ stackTrace: error, traceId }, 'Error saving message ')
      return {
        success: false,
        message: error.message
      };
    }

    apiLogger.error({ stackTrace: error, traceId }, 'Error saving message ')
    return {
      success: false,
      message: 'Ocorreu um erro desconhecido.'
    };
  }
}

