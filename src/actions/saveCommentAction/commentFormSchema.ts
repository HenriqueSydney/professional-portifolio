import z from "zod"

export const commentFormSchema = z.object({
  name: z.string('O campo do nome é obrigatório').min(3, 'O campo deve ter no mínimo 3 caracteres'),
  email: z.email('O campo de email é obrigatório'),
  message: z.string('O campo do assunto é obrigatório')
    .min(5, 'O campo deve ter no mínimo 5 caracteres')
    .max(2500, 'O campo deve ter no máximo 2500 caracteres')
})

export type CommentData = z.infer<typeof commentFormSchema>