"use server";

import { randomUUID } from "node:crypto";

import { auth } from "@/auth";
import { apiLogger } from "@/lib/logger";

import { repositoryClient } from "@/lib/repositoryClient";
import { handleErrors } from "@/errors/handleErrors";
import { AppError } from "@/errors/AppError";
import z from "zod";
import { makeNewsletterSubscriptionsRepository } from "@/repositories/factories/makeNewsletterSubscriptionsRepository";
import { NewsLetterSubscriptions } from "@/generated/prisma";

export async function cancelSubscriptionAction(id: number) {
  const session = await auth();

  if (!session) {
    apiLogger.warn("User not logged in");
    return {
      success: false,
      message: "Para cancelar a subscrição de alguém, favor fazer o login",
    };
  }

  const subscriptionsRepository = makeNewsletterSubscriptionsRepository();
  const traceId = randomUUID();
  try {
    console.log(session.user);
    if (session.user.role !== "ADMIN") {
      throw new AppError(
        "Operação não permitida para usuário. Funcionalidade restrita para administradores",
        401
      );
    }
    const subscriptionId = z.number().parse(id);

    const [subscriptionError] = await repositoryClient<NewsLetterSubscriptions>(
      "subscriptionsRepository.deleteSubscriptionById",
      () => subscriptionsRepository.cancelSubscriptionById(subscriptionId),
      {
        tags: ["subscripitons", `subscripiton-${subscriptionId}`],
        cache: "revalidate-tags",
        revalidatePaths: ["/admin/subscribers"],
      }
    );

    if (subscriptionError) {
      throw subscriptionError;
    }

    apiLogger.info(
      { subscriptionId, operator: session.user.id, traceId },
      "Subscription canceled"
    );

    return {
      success: true,
      message: "Subscrição cancelada com sucesso!",
    };
  } catch (error) {
    const errorMessage = handleErrors(error, traceId);
    return {
      success: false,
      message: errorMessage,
    };
  }
}
