import { AppError } from "@/errors/AppError";
import { handleErrors } from "@/errors/handleErrors";
import { apiLogger } from "@/lib/logger";
import { makeRedisClient } from "@/lib/redis/makeRedisClient";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ name: string; key: string }> }
) {
  const { name: prefix, key } = await params;
  const redisClient = makeRedisClient();

  try {
    // Decodifica a chave (caso venha com caracteres especiais na URL)
    const decodedKey = decodeURIComponent(key);

    apiLogger.debug(`Deletando chave: ${decodedKey} do prefixo: ${prefix}`);

    // Valida se a chave pertence ao prefixo (segurança)
    if (!decodedKey.startsWith(`${prefix}:`)) {
      throw new AppError(
        `A chave ${decodedKey} não pertence ao prefixo ${prefix}`,
        400
      );
    }

    // Verifica conexão
    const isConnected = await redisClient.isConnected();
    if (!isConnected) {
      throw new AppError("Redis não está conectado", 503);
    }

    const redis = redisClient.getInstance();

    // Verifica se a chave existe
    const exists = await redis.exists(decodedKey);
    if (!exists) {
      throw new AppError(`Chave ${decodedKey} não encontrada`, 404);
    }

    // Deleta a chave
    const result = await redisClient.invalidateCache(decodedKey);

    if (!result) {
      throw new AppError(`Falha ao deletar a chave ${decodedKey}`, 500);
    }

    apiLogger.info(`Chave deletada com sucesso: ${decodedKey}`);

    return NextResponse.json({
      success: true,
      message: "Chave deletada com sucesso",
      key: decodedKey,
    });
  } catch (error) {
    const errorMessage = handleErrors(error);
    return NextResponse.json(
      { error: errorMessage },
      { status: errorMessage.status ?? 500 }
    );
  }
}
