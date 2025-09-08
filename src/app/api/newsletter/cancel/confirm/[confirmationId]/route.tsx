import { render } from "@react-email/components";
import z from "zod";

import { SubscriptionNotFoundError } from "@/errors/SubscriptionNotFoundError";
import { makeNewsletterSubscriptionsRepository } from "@/repositories/factories/makeNewsletterSubscriptionsRepository";
import { NewsLetterSubscriptions } from "@/generated/prisma";
import { repositoryClient } from "@/lib/repositoryClient";
import { apiLogger } from "@/lib/logger";

const cancelSubscriptionNewsletterApiSchema = z.object({
  confirmationId: z.uuid({ version: "v4" }),
});

export async function GET(
  request: Request,
  { params }: { params: Promise<{ confirmationId: string }> }
) {
  try {
    const { confirmationId } =
      await cancelSubscriptionNewsletterApiSchema.parseAsync(params);
    const newsLetterSubscriptionRepository =
      makeNewsletterSubscriptionsRepository();

    const [subscriptionError, subscription] =
      await repositoryClient<NewsLetterSubscriptions | null>(
        "newsLetterSubscriptionRepository.findSubscriptionByConfirmationId",
        () =>
          newsLetterSubscriptionRepository.findSubscriptionByConfirmationId(
            confirmationId
          ),
        {
          cache: "no-cache",
        }
      );

    if (subscriptionError || !subscription) {
      throw new SubscriptionNotFoundError();
    }

    const [cconfirmSubscriptionError] =
      await repositoryClient<NewsLetterSubscriptions | null>(
        "newsLetterSubscriptionRepository.cancelSubscriptionById",
        () =>
          newsLetterSubscriptionRepository.confirmSubscriptionById(
            subscription.id
          ),
        {
          cache: "no-cache",
        }
      );

    if (cconfirmSubscriptionError) {
      throw new Error("Subscription confirmation error");
    }

    // const html = await render(
    //     <NewsletterSubscriptionConfirmationEmail
    //         confirmationId={confirmationId}
    //     />
    // );

    // await sendEmail({
    //     to: subscription.email,
    //     html,
    //     subject: '[HenriqueLima.Dev] Seja bem vindo! Confirme sua inscrição e começe a diversos conteúdos do mundo de Desenvolvimento e DevOps'
    // })

    return Response.redirect("/newsletter/confirmed");
  } catch (error) {
    apiLogger.error(
      { stackTrace: error },
      "Newsletter confirmation Subscription error"
    );
    return Response.redirect(`/newsletter/error/${error}`);
  }
}
