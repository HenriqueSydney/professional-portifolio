"use server";

import { randomUUID } from "node:crypto";

import { auth } from "@/auth";
import { apiLogger } from "@/lib/logger";

import { repositoryClient } from "@/lib/repositoryClient";
import { handleErrors } from "@/errors/handleErrors";
import { AppError } from "@/errors/AppError";
import z from "zod";
import { makeUserRepository } from "@/repositories/factories/makeUserRepository";

export async function removeUserAction(id: string) {
  const session = await auth();

  if (!session) {
    apiLogger.warn("User not logged in");
    return {
      success: false,
      message: "Para remover o usuário, favor fazer o login",
    };
  }

  const userRepository = makeUserRepository();
  const traceId = randomUUID();
  try {
    console.log(session.user);
    if (session.user.role !== "ADMIN") {
      throw new AppError(
        "Operação não permitida para usuário. Funcionalidade restrita para administradores",
        401
      );
    }
    const userId = z.string().parse(id);

    const [userError] = await repositoryClient<void>(
      "userRepository.deleteUser",
      () => userRepository.deleteUser(userId),
      {
        tags: ["users", `users-${userId}`],
        cache: "revalidate-tags",
        revalidatePaths: ["/admin/users", `/user/${userId}`],
      }
    );

    if (userError) {
      throw userError;
    }

    apiLogger.info(
      { userId, operator: session.user.id, traceId },
      "User deleted"
    );

    return {
      success: true,
      message: "Usuário removido com sucesso!",
    };
  } catch (error) {
    const errorMessage = handleErrors(error, traceId);
    return {
      success: false,
      message: errorMessage,
    };
  }
}
