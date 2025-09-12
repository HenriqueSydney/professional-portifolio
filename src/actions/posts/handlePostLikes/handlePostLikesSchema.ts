import z from "zod";

export const addLikeToPostSchema = z.object({
  postId: z.number(),
});

export type AddLikesToPostData = z.infer<typeof addLikeToPostSchema>;
