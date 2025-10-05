"use server";

import { randomUUID } from "node:crypto";

import { auth } from "@/auth";
import { apiLogger } from "@/lib/logger";
import { makePostCommentsRepository } from "@/repositories/factories/makePostCommentsRepository";
import { repositoryClient } from "@/lib/repositoryClient";
import { makeRedisClient } from "@/lib/redis/makeRedisClient";
import { handleErrors } from "@/errors/handleErrors";

export async function removeCommentAction(commentId: number) {
  const session = await auth();

  if (!session || session.user.role !== "ADMIN") {
    apiLogger.warn("User not autorized");
    return {
      success: false,
      message: "User not autorized",
    };
  }
  const postCommentsRepository = makePostCommentsRepository();
  const redisClient = makeRedisClient();
  const traceId = randomUUID();
  try {
    const [postCommentRemoveError, postCommentRemove] = await repositoryClient<{
      postId: number;
    } | null>(
      "postCommentsRepository.deleteById",
      () => postCommentsRepository.deleteById(commentId),
      {
        cache: "revalidate-tags",
        tags: [`comment-${commentId}`],
        params: `commentId=${commentId}`,
      }
    );

    if (postCommentRemoveError) {
      throw postCommentRemoveError;
    }

    if (postCommentRemove) {
      setImmediate(async () => {
        try {
          await redisClient.invalidateCacheByTags("repository:tag", [
            `post-${postCommentRemove.postId}-comments`,
          ]);
        } catch (error) {
          handleErrors(error, traceId, {
            commentId,
            postId: postCommentRemove.postId,
            message: "Falha ao invalidar cache de post comments após deleção",
          });
        }
      });
    }

    apiLogger.info(
      { userId: session.user.id, commentId, traceId },
      "Comment deleted by Administrator"
    );

    return {
      success: true,
      message: "Comentário removido com sucesso!",
    };
  } catch (error) {
    const errorMessage = handleErrors(error, traceId, {
      message: "Error deleting comment",
    });

    return {
      success: false,
      message: errorMessage,
    };
  }
}
