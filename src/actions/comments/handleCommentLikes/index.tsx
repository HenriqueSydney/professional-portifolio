"use server";

import { randomUUID } from "node:crypto";

import { headers } from "next/headers";

import { auth } from "@/auth";
import { date } from "@/lib/dayjs";
import { apiLogger } from "@/lib/logger";
import { makeRedisClient } from "@/lib/redis/makeRedisClient";
import { makePostCommentsLikeRepository } from "@/repositories/factories/makePostCommentsLikeRepository";
import { makePostCommentsRepository } from "@/repositories/factories/makePostCommentsRepository";

import { AddLikesData, addLikesSchema } from "./handleCommentLikesSchema";
import { repositoryClient } from "@/lib/repositoryClient";

export async function handleCommentLikesAction(data: AddLikesData) {
  const headersList = await headers();
  const session = await auth();

  const cache = makeRedisClient();
  const postCommentsRepository = makePostCommentsRepository();
  const traceId = randomUUID();
  try {
    const { commentId } = addLikesSchema.parse(data);

    const ip =
      headersList.get("x-forwarded-for")?.split(",")[0] ||
      headersList.get("x-real-ip") ||
      "unknown-ip";

    const userIdentity = session?.user.id ?? ip;
    const userId = session?.user.id;
    const cacheKey = `comment:like:${userIdentity}:${commentId}`;

    const decrementPromises = [];
    const thirtyMinutesInSeconds = 30 * 60;
    const incrementPromises = [];

    if (session && userId) {
      decrementPromises.push(
        repositoryClient(
          "postCommentsRepository.decrementLikeToCommentByCommentId",
          () =>
            postCommentsRepository.decrementLikeToCommentByCommentId(
              commentId,
              userId
            ),
          {
            cache: "no-cache",
          }
        )
      );

      incrementPromises.push(
        repositoryClient(
          "postCommentsRepository.incrementLikeToCommentByCommentId",
          () =>
            postCommentsRepository.incrementLikeToCommentByCommentId(
              commentId,
              userId
            ),
          {
            cache: "no-cache",
          }
        )
      );
    } else {
      decrementPromises.push(
        repositoryClient(
          "postCommentsRepository.decrementLikeOfANotLoggedUserToCommentByCommentId",
          () =>
            postCommentsRepository.decrementLikeOfANotLoggedUserToCommentByCommentId(
              commentId
            ),
          {
            cache: "no-cache",
          }
        )
      );

      incrementPromises.push(
        repositoryClient(
          "postCommentsRepository.incrementLikeOfANotLoggedUserToCommentByCommentId",
          () =>
            postCommentsRepository.incrementLikeOfANotLoggedUserToCommentByCommentId(
              commentId
            ),
          {
            cache: "no-cache",
          }
        )
      );
    }

    const hasAlreadyLikedCommentInThePast30Min = await cache.get<{
      likedDate: string;
    }>(cacheKey);

    if (hasAlreadyLikedCommentInThePast30Min) {
      await Promise.all([
        cache.invalidateCache(cacheKey),
        ...decrementPromises,
      ]);

      apiLogger.debug(
        {
          userIdentity,
          commentId,
          traceId,
          userType: session ? "authenticated" : "anonymous",
        },
        "Comment Liked decreased"
      );
      return {
        success: true,
        operation: "decrement",
        message:
          "Hmm!! Que pena... talvez alguém fique um pouco triste (rs...)",
      };
    }

    if (userId) {
      const postCommentsLikeRepository = makePostCommentsLikeRepository();

      const [_, hasAlreadyLikedComment] = await repositoryClient(
        "postCommentsLikeRepository.findPostCommentsLikeByUserIdAndPostCommentId",
        () =>
          postCommentsLikeRepository.findPostCommentsLikeByUserIdAndPostCommentId(
            userId,
            commentId
          ),
        {
          tags: [`comment-${commentId}-${userId}`],
          params: `commentId=${commentId}&userId=${userId}`,
        }
      );

      if (hasAlreadyLikedComment) {
        await repositoryClient(
          "postCommentsRepository.decrementLikeToCommentByCommentId",
          () =>
            postCommentsRepository.decrementLikeToCommentByCommentId(
              commentId,
              userId
            ),
          {
            cache: "revalidate-tags",
            tags: [`comment-${commentId}-${userId}`],
            params: `commentId=${commentId}&userId=${userId}`,
          }
        );

        apiLogger.debug(
          {
            userIdentity,
            commentId,
            traceId,
            userType: session ? "authenticated" : "anonymous",
          },
          "Comment Liked decreased"
        );
        return {
          success: true,
          operation: "decrement",
          message:
            "Hmm!! Que pena... talvez alguém fique um pouco triste (rs...)",
        };
      }
    }

    await Promise.all([
      cache.set(
        cacheKey,
        { likedDate: date().toISOString() },
        thirtyMinutesInSeconds
      ),
      ...incrementPromises,
    ]);

    apiLogger.debug(
      {
        userIdentity,
        commentId,
        traceId,
        userType: session ? "authenticated" : "anonymous",
      },
      "Comment Liked register"
    );
    return {
      success: true,
      operation: "increment",
      message: "Uhull! Quem fez esse comentário vai ficar muito feliz!!",
    };
  } catch (error) {
    if (error instanceof Error) {
      apiLogger.warn({ stackTrace: error, traceId }, "Error handling like");
      return {
        success: false,
        message: error.message,
      };
    }

    apiLogger.error({ stackTrace: error, traceId }, "Error handling like");
    return {
      success: false,
      message: "Ocorreu um erro desconhecido.",
    };
  }
}
