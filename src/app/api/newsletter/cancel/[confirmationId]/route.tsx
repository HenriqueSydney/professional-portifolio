import { render } from "@react-email/components";
import z from "zod";

import NewsletterSubscriptionCancelEmail from "@/email/NewsletterSubscriptionCancelEmail";
import { SubscriptionNotFoundError } from "@/errors/SubscriptionNotFoundError";
import { sendEmail } from "@/lib/mailer/sendEmail";
import { makeNewsletterSubscriptionsRepository } from "@/repositories/factories/makeNewsletterSubscriptionsRepository";
import { repositoryClient } from "@/lib/repositoryClient";
import { NewsLetterSubscriptions } from "@/generated/prisma";
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

    await sendEmail({
      to: subscription.email,
      html,
      subject:
        "[HenriqueLima.Dev] Que pena! Mas não se preocupe! Sempre estarei te esperando de volta!",
    });

    return Response.redirect("/newsletter/canceled");
  } catch (error) {
    apiLogger.error(
      { stackTrace: error },
      "Newsletter cancel Subscription error"
    );
    return Response.redirect(`/newsletter/error/${error}`);
  }
}
