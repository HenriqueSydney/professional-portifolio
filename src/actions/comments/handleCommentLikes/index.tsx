'use server'

import { apiLogger } from "@/lib/logger";
import { randomUUID } from "node:crypto";
import { auth } from "@/auth";
import { makePostCommentsRepository } from "@/repositories/factories/makePostCommentsRepository";
import { AddLikesData, addLikesSchema } from "./handleCommentLikesSchema";
import { makeRedisClient } from "@/lib/redis/makeRedisClient";
import { date } from "@/lib/dayjs";
import { makePostCommentsLikeRepository } from "@/repositories/factories/makePostCommentsLikeRepository";
import { headers } from "next/headers";

export async function handleCommentLikesAction(data: AddLikesData) {
    const headersList = await headers()
    const session = await auth()


    const cache = makeRedisClient()
    const postCommentsRepository = makePostCommentsRepository()
    const traceId = randomUUID()
    try {
        const { commentId } = addLikesSchema.parse(data);

        const ip = headersList.get('x-forwarded-for')?.split(',')[0] ||
            headersList.get('x-real-ip') ||
            'unknown-ip'


        const userIdentity = session?.user.id ?? ip
        const userId = session?.user.id
        const cacheKey = `comment:like:${userIdentity}:${commentId}`

        const decrementPromises = []
        const thirtyMinutesInSeconds = 30 * 60;
        const incrementPromises = []

        if (session && userId) {
            decrementPromises.push(postCommentsRepository.decrementLikeToCommentByCommentId(commentId, userId))
            incrementPromises.push(postCommentsRepository.incrementLikeToCommentByCommentId(commentId, userId))
        } else {
            decrementPromises.push(postCommentsRepository.decrementLikeOfANotLoggedUserToCommentByCommentId(commentId))
            incrementPromises.push(postCommentsRepository.incrementLikeOfANotLoggedUserToCommentByCommentId(commentId))
        }

        const hasAlreadyLikedCommentInThePast30Min = await cache.get<{ likedDate: string }>(cacheKey)

        if (hasAlreadyLikedCommentInThePast30Min) {
            await Promise.all([
                cache.invalidateCache(cacheKey),
                ...decrementPromises]
            )


            apiLogger.debug({ userIdentity, commentId, traceId, userType: session ? 'authenticated' : 'anonymous' }, 'Comment Liked decreased')
            return {
                success: true,
                operation: 'decrement',
                message: 'Hmm!! Que pena... talvez alguém fique um pouco triste (rs...)'
            };
        }


        if (userId) {
            const postCommentsLikeRepository = makePostCommentsLikeRepository()
            const hasAlreadyLikedComment = await postCommentsLikeRepository.findPostCommentsLikeByUserIdAndPostCommentId(userId, commentId)

            if (hasAlreadyLikedComment) {

                await postCommentsRepository.decrementLikeToCommentByCommentId(commentId, userId)
                apiLogger.debug({ userIdentity, commentId, traceId, userType: session ? 'authenticated' : 'anonymous' }, 'Comment Liked decreased')
                return {
                    success: true,
                    operation: 'decrement',
                    message: 'Hmm!! Que pena... talvez alguém fique um pouco triste (rs...)'
                };
            }
        }

        await Promise.all([
            cache.set(cacheKey, { likedDate: date().toISOString() }, thirtyMinutesInSeconds),
            ...incrementPromises
        ])
        apiLogger.debug({ userIdentity, commentId, traceId, userType: session ? 'authenticated' : 'anonymous' }, 'Comment Liked register')
        return {
            success: true,
            operation: 'increment',
            message: 'Uhull! Quem fez esse comentário vai ficar muito feliz!!'
        };



    } catch (error) {
        if (error instanceof Error) {
            apiLogger.warn({ stackTrace: error, traceId }, 'Error handling like')
            return {
                success: false,
                message: error.message
            };
        }

        apiLogger.error({ stackTrace: error, traceId }, 'Error handling like')
        return {
            success: false,
            message: 'Ocorreu um erro desconhecido.'
        };
    }
}

