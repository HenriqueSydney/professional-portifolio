import NewsletterConfirmationEmail from "@/email/NewsletterConfirmationEmail";
import { AppError } from "@/errors/AppError";
import { SubscriptionNotFoundError } from "@/errors/SubscriptionNotFoundError";
import { sendEmail } from "@/lib/mailer/sendEmail";
import { makeNewsletterSubscriptionsRepository } from "@/repositories/factories/makeNewsletterSubscriptionsRepository";
import { render } from "@react-email/components";
import z from "zod";

const confirmationEmailApiSchema = z.object({
    confirmationId: z.uuid({ version: 'v4' })
})


export async function GET(
    request: Request,
    { params }: { params: Promise<{ confirmationId: string }> }
) {



    try {
        const { confirmationId } = await confirmationEmailApiSchema.parseAsync(params)
        const newsLetterSubscriptionRepository = makeNewsletterSubscriptionsRepository()

        const subscription = await newsLetterSubscriptionRepository.findSubscriptionByConfirmationId(confirmationId)

        if (!subscription) {
            throw new SubscriptionNotFoundError()
        }

        await newsLetterSubscriptionRepository.confirmSubscriptionById(subscription.id)

        const html = await render(
            <NewsletterConfirmationEmail
                confirmationId={confirmationId}
            />
        );

        await sendEmail({
            to: subscription.email,
            html,
            subject: '[HenriqueLima.Dev] Seja bem vindo! Confirme sua inscrição e começe a diversos conteúdos do mundo de Desenvolvimento e DevOps'
        })


        return Response.redirect('/newsletter/confirmed')
    } catch (error) {
        let errorMessage = 'Erro inexperado'
        if (error instanceof AppError) {
            errorMessage = error.message
        }

        return Response.redirect(`/newsletter/error/${error}`)
    }


}