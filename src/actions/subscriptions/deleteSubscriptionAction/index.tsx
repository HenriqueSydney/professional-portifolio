"use server";

import { randomUUID } from "node:crypto";

import { auth } from "@/auth";
import { apiLogger } from "@/lib/logger";

import { repositoryClient } from "@/lib/repositoryClient";
import { handleErrors } from "@/errors/handleErrors";
import { AppError } from "@/errors/AppError";
import z from "zod";
import { makeNewsletterSubscriptionsRepository } from "@/repositories/factories/makeNewsletterSubscriptionsRepository";

export async function deleteSubscriptionAction(id: number) {
  const session = await auth();

  if (!session) {
    apiLogger.warn("User not logged in");
    return {
      success: false,
      message: "Para deletar a subscrição de alguém, favor fazer o login",
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

    const [subscriptionError] = await repositoryClient<void>(
      "subscriptionsRepository.deleteSubscriptionById",
      () => subscriptionsRepository.deleteSubscriptionById(subscriptionId),
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
      "Subscription deleted"
    );

    return {
      success: true,
      message: "Subscrição removido com sucesso!",
    };
  } catch (error) {
    const errorMessage = handleErrors(error, traceId);
    return {
      success: false,
      message: errorMessage,
    };
  }
}
