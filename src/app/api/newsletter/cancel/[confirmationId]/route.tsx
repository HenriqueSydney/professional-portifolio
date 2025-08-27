import NewsletterSubscriptionCancelEmail from "@/email/NewsletterSubscriptionCancelEmail";
import { SubscriptionNotFoundError } from "@/errors/SubscriptionNotFoundError";
import { sendEmail } from "@/lib/mailer/sendEmail";
import { makeNewsletterSubscriptionsRepository } from "@/repositories/factories/makeNewsletterSubscriptionsRepository";
import { render } from "@react-email/components";
import z from "zod";

const cancelSubscriptionNewsletterApiSchema = z.object({
    confirmationId: z.uuid({ version: 'v4' })
})


export async function GET(
    request: Request,
    { params }: { params: Promise<{ confirmationId: string }> }
) {

    try {
        const { confirmationId } = await cancelSubscriptionNewsletterApiSchema.parseAsync(params)

        const newsLetterSubscriptionRepository = makeNewsletterSubscriptionsRepository()

        const subscription = await newsLetterSubscriptionRepository.findSubscriptionByConfirmationId(confirmationId)

        if (!subscription) {
            throw new SubscriptionNotFoundError()
        }

        const html = await render(
            <NewsletterSubscriptionCancelEmail
                confirmationId={confirmationId}
            />
        );

        await sendEmail({
            to: subscription.email,
            html,
            subject: '[HenriqueLima.Dev] Seja bem vindo! Confirme sua inscrição e começe a diversos conteúdos do mundo de Desenvolvimento e DevOps'
        })


        return Response.redirect('/newsletter/canceled')
    } catch (error) {
        console.error(error)
        return Response.redirect(`/newsletter/error/${error}`)
    }


}