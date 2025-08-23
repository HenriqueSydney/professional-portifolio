import z from "zod"

export const contactMessageSchema = z.object({
  name: z.string('O campo do nome é obrigatório').min(3, 'O campo deve ter no mínimo 3 caracteres'),
  email: z.email('O campo de email é obrigatório'),
  subject: z.string('O campo do assunto é obrigatório')
    .min(5, 'O campo deve ter no mínimo 5 caracteres')
    .max(70, 'O campo deve ter no máximo 70 caracteres'),
  message: z.string('O campo do assunto é obrigatório')
    .min(30, 'O campo deve ter no mínimo 30 caracteres')
})

export type ContactMessageData = z.infer<typeof contactMessageSchema>