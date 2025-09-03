import z from "zod";

export const addLikeToPostSchema = z.object({
    postId: z.string()
})

export type AddLikesToPostData = z.infer<typeof addLikeToPostSchema>