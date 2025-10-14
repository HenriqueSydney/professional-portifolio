import { AppError } from "@/errors/AppError";
import { handleErrors } from "@/errors/handleErrors";
import { apiLogger } from "@/lib/logger";
import { makeRedisClient } from "@/lib/redis/makeRedisClient";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name: prefix } = await params;

  try {
    const redisClient = makeRedisClient();

    // Validação do prefixo
    if (!prefix || prefix.trim() === "") {
      throw new AppError("Prefixo é obrigatório", 400);
    }

    apiLogger.debug(`Deletando todas as chaves do prefixo: ${prefix}`);

    // Verifica conexão
    const isConnected = await redisClient.isConnected();
    if (!isConnected) {
      throw new AppError("Redis não está conectado", 503);
    }

    const redis = redisClient.getInstance();

    // Busca todas as chaves do prefixo
    const pattern = `${prefix}:*`;
    const keys = await redis.keys(pattern);

    if (keys.length === 0) {
      return NextResponse.json({
        success: true,
        message: `Nenhuma chave encontrada para o prefixo: ${prefix}`,
        deleted: 0,
      });
    }

    // Deleta todas as chaves em batch
    const pipeline = redis.pipeline();
    keys.forEach((key) => {
      pipeline.del(key);
    });

    const results = await pipeline.exec();

    // Conta quantas foram deletadas com sucesso
    const deletedCount =
      results?.filter(([err, result]) => !err && result === 1).length || 0;

    apiLogger.info(`${deletedCount} chaves deletadas do prefixo: ${prefix}`);

    return NextResponse.json({
      success: true,
      message: `${deletedCount} chaves deletadas com sucesso`,
      prefix,
      deleted: deletedCount,
    });
  } catch (error) {
    const errorMessage = handleErrors(error);
    return NextResponse.json(
      { error: errorMessage },
      { status: errorMessage.status ?? 500 }
    );
  }
}
