import { render } from "@react-email/components";
import z from "zod";

import NewsletterConfirmationEmail from "@/email/NewsletterConfirmationEmail";
import { AppError } from "@/errors/AppError";
import { SubscriptionNotFoundError } from "@/errors/SubscriptionNotFoundError";
import { makeNewsletterSubscriptionsRepository } from "@/repositories/factories/makeNewsletterSubscriptionsRepository";
import { NewsLetterSubscriptions } from "@/generated/prisma";
import { repositoryClient } from "@/lib/repositoryClient";
import { envVariables } from "@/env";
import { handleErrors } from "@/errors/handleErrors";
import { addSendEmailJob } from "@/queues/jobs/sendEmail";

const confirmationEmailApiSchema = z.object({
  confirmationId: z.uuid({ version: "v4" }),
});

export async function GET(
  request: Request,
  { params }: { params: Promise<{ confirmationId: string }> }
) {
  try {
    const { confirmationId } = confirmationEmailApiSchema.parse(await params);

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

    const [confirmSubscriptionByIdError, confirmSubscriptionById] =
      await repositoryClient<NewsLetterSubscriptions | null>(
        "newsLetterSubscriptionRepository.confirmSubscriptionById",
        () =>
          newsLetterSubscriptionRepository.confirmSubscriptionById(
            subscription.id
          ),
        {
          cache: "no-cache",
        }
      );

    if (confirmSubscriptionByIdError || !confirmSubscriptionById) {
      throw new Error("Subscription confirmation Error");
    }

    const html = await render(
      <NewsletterConfirmationEmail confirmationId={confirmationId} />
    );

    await addSendEmailJob({
      email: subscription.email,
      html,
      subject:
        "[HenriqueLima.Dev] Seja bem vindo! Sua inscrição foi confirmada!",
      logMessage: "Confirm subscription email message sent",
    });

    return Response.redirect(`${envVariables.BASE_URL}/newsletter/confirmed`);
  } catch (error) {
    let errorMessage = "Erro inexperado";
    if (error instanceof AppError) {
      errorMessage = error.message;
    }
    handleErrors(error, null, { messsage: errorMessage });
    return Response.redirect(
      `${envVariables.BASE_URL}/newsletter/error?error=${errorMessage}`
    );
  }
}
