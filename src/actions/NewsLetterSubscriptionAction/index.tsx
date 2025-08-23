'use server'


import { newsLetterSubscriptionFormSchema, NewsLetterSubscriptionFormData } from "./newsLetterSubscriptionFormSchema";
import { render } from "@react-email/components";
import { randomUUID } from "node:crypto";
import { sendEmail } from "@/lib/mailer/sendEmail";
import NewsletterSubscriptionEmail from "@/email/NewsletterSubscriptionEmail";
import { makeNewsletterSubscriptionsRepository } from "@/repositories/factories/makeNewsletterSubscriptionsRepository";
import { date } from "@/lib/dayjs";
import { NewsLetterSubscriptions } from "@/generated/prisma";

export async function sendNewsLetterSubscriptionConfirmation(params: NewsLetterSubscriptionFormData) {
    try {
        // Validação runtime
        const { email } = newsLetterSubscriptionFormSchema.parse(params);

        // Aqui você executaria a lógica (ex.: salvar no banco, enviar e-mail, etc.)
        console.log('Mensagem recebida:', { email });

        const newsLetterSubscriptionRepository = makeNewsletterSubscriptionsRepository()

        const subscriptionExists = await newsLetterSubscriptionRepository.findSubscriptionByEmail(email)

        const currentDay = date()

        let subscription: NewsLetterSubscriptions | null = null

        if (subscriptionExists && currentDay.isAfter(subscriptionExists.confirmationExpiresAt)) {
            subscription = await newsLetterSubscriptionRepository.updateSubscriptionConfirmationExpirationById(subscriptionExists.id)

        } else {
            subscription = await newsLetterSubscriptionRepository.createSubscription(email)
        }

        const html = await render(
            <NewsletterSubscriptionEmail
                confirmationId={subscription.confirmationId}
            />
        );

        await sendEmail({
            to: email,
            html,
            subject: '[HenriqueLima.Dev] Seja bem vindo! Confirme sua inscrição e começe a diversos conteúdos do mundo de Desenvolvimento e DevOps'
        })

        return {
            success: true,
            message: 'Uma mensagem foi enviada para o seu e-mail. Confirme e começe a receber notícias fresquinhas!'
        };

    } catch (error) {
        if (error instanceof Error) {
            return {
                success: false,
                message: error.message
            };
        }

        return {
            success: false,
            message: 'Ocorreu um erro desconhecido.'
        };
    }
}

