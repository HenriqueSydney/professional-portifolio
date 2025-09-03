import z from "zod";

export const addLikesSchema = z.object({
    commentId: z.int()
})

export type AddLikesData = z.infer<typeof addLikesSchema>