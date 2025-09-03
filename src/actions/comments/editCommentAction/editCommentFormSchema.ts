import z from "zod"

export const editCommentFormSchema = z.object({
  message: z.string('O campo do assunto é obrigatório')
    .min(5, 'O campo deve ter no mínimo 5 caracteres'),
  commentId: z.number()
})

export type EditCommentData = z.infer<typeof editCommentFormSchema>