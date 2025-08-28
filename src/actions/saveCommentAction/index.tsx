'use server'

import { apiLogger } from "@/lib/logger";
import { randomUUID } from "node:crypto";
import { CommentData, commentFormSchema } from "./commentFormSchema";

export async function saveCommentAction(params: CommentData) {
  const traceId = randomUUID()
  try {
    const { name, email, message } = commentFormSchema.parse(params);




    apiLogger.info({ name, email, traceId }, 'User sent comment')

    return {
      success: true,
      message: 'Mensagem enviada com sucesso!'
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

