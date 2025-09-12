import z from "zod";

export const commentFormSchema = z.object({
  message: z
    .string("O campo do assunto é obrigatório")
    .min(5, "O campo deve ter no mínimo 5 caracteres"),
  postId: z.number(),
});

export type CommentData = z.infer<typeof commentFormSchema>;
