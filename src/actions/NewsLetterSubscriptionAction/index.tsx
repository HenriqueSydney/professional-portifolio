"use server";

import { randomUUID } from "node:crypto";

import { render } from "@react-email/components";

import NewsletterSubscriptionEmail from "@/email/NewsletterSubscriptionEmail";
import { NewsLetterSubscriptions } from "@/generated/prisma";
import { date } from "@/lib/dayjs";
import { apiLogger } from "@/lib/logger";
import { makeNewsletterSubscriptionsRepository } from "@/repositories/factories/makeNewsletterSubscriptionsRepository";

import {
  NewsLetterSubscriptionFormData,
  newsLetterSubscriptionFormSchema,
} from "./newsLetterSubscriptionFormSchema";
import { repositoryClient } from "@/lib/repositoryClient";
import { handleErrors } from "@/errors/handleErrors";
import { addSendEmailJob } from "@/queues/jobs/sendEmail";
import { AppError } from "@/errors/AppError";

export async function sendNewsLetterSubscriptionConfirmation(
  params: NewsLetterSubscriptionFormData
) {
  const traceId = randomUUID();
  try {
    const { email } = newsLetterSubscriptionFormSchema.parse(params);

    apiLogger.info(
      { email, traceId },
      "Message received for Newsletter subscription"
    );

    const newsLetterSubscriptionRepository =
      makeNewsletterSubscriptionsRepository();

    const [subscriptionExistsError, subscriptionExists] =
      await repositoryClient<NewsLetterSubscriptions | null>(
        "newsLetterSubscriptionRepository.findSubscriptionByEmail",
        () => newsLetterSubscriptionRepository.findSubscriptionByEmail(email),
        {
          tags: ["newsletter-subscription", `subscription-email-${email}`],
          params: `subscriptionEmail=${email}`,
        }
      );

    if (subscriptionExistsError) {
      throw subscriptionExistsError;
    }

    const currentDay = date();

    let subscription: NewsLetterSubscriptions | null = null;

    if (subscriptionExists && subscriptionExists.confirmedAt) {
      throw new AppError(
        "Você já realizou sua inscrição. Caso queira cancelá-la, enviamos um email com orientações."
      );
    }

    if (
      subscriptionExists &&
      currentDay.isAfter(subscriptionExists.confirmationExpiresAt)
    ) {
      const [
        updateSubscriptionConfirmationError,
        updateSubscriptionConfirmationSuccess,
      ] = await repositoryClient<NewsLetterSubscriptions>(
        "newsLetterSubscriptionRepository.updateSubscriptionConfirmationExpirationById",
        () =>
          newsLetterSubscriptionRepository.updateSubscriptionConfirmationExpirationById(
            subscriptionExists.id
          ),
        {
          tags: ["newsletter-subscription", `subscription-email-${email}`],
          params: `subscriptionEmail=${email}`,
        }
      );

      if (updateSubscriptionConfirmationError) {
        throw updateSubscriptionConfirmationError;
      }
      subscription = updateSubscriptionConfirmationSuccess;
    } else {
      const [createSubscriptionError, createSubscriptionSuccess] =
        await repositoryClient<NewsLetterSubscriptions>(
          "newsLetterSubscriptionRepository.createSubscription",
          () => newsLetterSubscriptionRepository.createSubscription(email),
          {
            tags: ["newsletter-subscription", `subscription-email-${email}`],
            params: `subscriptionEmail=${email}`,
          }
        );

      if (createSubscriptionError) {
        throw createSubscriptionError;
      }

      subscription = createSubscriptionSuccess;
    }

    const html = await render(
      <NewsletterSubscriptionEmail
        confirmationId={subscription.confirmationId}
      />
    );

    apiLogger.info({ email, traceId }, "Trying to send email");

    await addSendEmailJob({
      email,
      html,
      subject:
        "[HenriqueLima.Dev] Seja bem vindo! Confirme sua inscrição e começe a diversos conteúdos do mundo de Desenvolvimento e DevOps",
      logMessage: "Message sent for Newsletter subscription",
      traceId,
    });

    return {
      success: true,
      message:
        "Uma mensagem foi enviada para o seu e-mail. Confirme e começe a receber notícias fresquinhas!",
    };
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = handleErrors(error, traceId, {
        message: "Error sending Newsletter subscription",
      });

      return {
        success: false,
        message: errorMessage,
      };
    }
    return {
      success: false,
      message: "Erro inexperado",
    };
  }
}
