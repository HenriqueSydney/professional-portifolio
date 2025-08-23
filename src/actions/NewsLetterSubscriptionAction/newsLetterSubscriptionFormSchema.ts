import z from "zod"

export const newsLetterSubscriptionFormSchema = z.object({
  email: z.email('O campo de email é obrigatório')
})

export type NewsLetterSubscriptionFormData = z.infer<typeof newsLetterSubscriptionFormSchema>