'use server'

import { apiLogger } from "@/lib/logger";
import { randomUUID } from "node:crypto";
import { auth } from "@/auth";
import { makePostCommentsRepository } from "@/repositories/factories/makePostCommentsRepository";

export async function removeCommentAction(commentId: number) {
    const session = await auth()

    if (!session || session.user.role !== 'ADMIN') {
        apiLogger.warn('User not autorized')
        return {
            success: false,
            message: 'User not autorized'
        };
    }
    const postCommentsRepository = makePostCommentsRepository()
    const traceId = randomUUID()
    try {

        const postComment = await postCommentsRepository.deleteById(commentId)

        apiLogger.info({ userId: session.user.id, commentId, traceId }, 'Comment deleted by Administrator')

        return {
            success: true,
            newComment: postComment,
            message: 'Comentário removido com sucesso!'
        };

    } catch (error) {
        if (error instanceof Error) {
            apiLogger.warn({ stackTrace: error, traceId }, 'Error deleting comment ')
            return {
                success: false,
                message: error.message
            };
        }

        apiLogger.error({ stackTrace: error, traceId }, 'Error deleting comment')
        return {
            success: false,
            message: 'Ocorreu um erro desconhecido.'
        };
    }
}

