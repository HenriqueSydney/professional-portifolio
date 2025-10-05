import { render } from "@react-email/components";
import z from "zod";

import NewsletterSubscriptionCancelEmail from "@/email/NewsletterSubscriptionCancelEmail";
import { SubscriptionNotFoundError } from "@/errors/SubscriptionNotFoundError";
import { makeNewsletterSubscriptionsRepository } from "@/repositories/factories/makeNewsletterSubscriptionsRepository";
import { repositoryClient } from "@/lib/repositoryClient";
import { NewsLetterSubscriptions } from "@/generated/prisma";
import { envVariables } from "@/env";
import { handleErrors } from "@/errors/handleErrors";
import { addSendEmailJob } from "@/queues/jobs/sendEmail";

const cancelSubscriptionNewsletterApiSchema = z.object({
  confirmationId: z.uuid({ version: "v4" }),
});

export async function GET(
  request: Request,
  { params }: { params: Promise<{ confirmationId: string }> }
) {
  try {
    const { confirmationId } = cancelSubscriptionNewsletterApiSchema.parse(
      await params
    );

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

    const html = await render(
      <NewsletterSubscriptionCancelEmail confirmationId={confirmationId} />
    );

    const [cancelSubscriptionError] =
      await repositoryClient<NewsLetterSubscriptions | null>(
        "newsLetterSubscriptionRepository.cancelSubscriptionById",
        () =>
          newsLetterSubscriptionRepository.cancelSubscriptionById(
            subscription.id
          ),
        {
          cache: "no-cache",
        }
      );

    if (cancelSubscriptionError) {
      throw new Error("Subscription canceling error");
    }

    await newsLetterSubscriptionRepository.cancelSubscriptionById(
      subscription.id
    );

    await addSendEmailJob({
      email: subscription.email,
      html,
      subject:
        "[HenriqueLima.Dev] Que pena! Mas não se preocupe! Sempre estarei te esperando de volta!",
      logMessage: "Canceled subscription confirmation message sent",
    });

    return Response.redirect(`${envVariables.BASE_URL}/newsletter/unsubscribe`);
  } catch (error) {
    const errorMessage = handleErrors(error, null, {
      message: "Newsletter cancel Subscription error",
    });

    return Response.redirect(
      `${envVariables.BASE_URL}/newsletter/error?error=${errorMessage}`
    );
  }
}
