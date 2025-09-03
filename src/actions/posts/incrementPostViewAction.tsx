'use server'

import { AppError } from "@/errors/AppError";
import { apiLogger } from "@/lib/logger";
import { makePostMetricsRepository } from "@/repositories/factories/makePostMetricsRepository";
import z from "zod";

const postMetricsViewSchema = z.object({
    postId: z.string()
})

type PostMetricsViewData = z.infer<typeof postMetricsViewSchema>

export async function incrementPostViewAction(data: PostMetricsViewData) {

    try {

        const { postId } = await postMetricsViewSchema.parseAsync(data)

        const postMetricsRepository = makePostMetricsRepository()

        await postMetricsRepository.incrementViewsToPostByPostId(postId)

        apiLogger.debug({ postId }, 'View incrementada com sucesso')

        return {
            success: true
        }
    } catch (error) {
        let errorMessage = 'Erro inexperado'
        if (error instanceof AppError) {
            errorMessage = error.message
        }
        apiLogger.error({ stackTrace: error }, 'Erro ao tentar incrementar view')

        return {
            success: false
        }
    }

}