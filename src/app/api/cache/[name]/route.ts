import { AppError } from "@/errors/AppError";
import { handleErrors } from "@/errors/handleErrors";
import { apiLogger } from "@/lib/logger";
import { makeRedisClient } from "@/lib/redis/makeRedisClient";
import { formatBytes } from "@/util/formatBytes";
import { NextResponse } from "next/server";

interface CacheKeyValue {
  key: string;
  value: any;
  ttl: number;
  size: number;
  type: string;
}

export async function GET(
  req: Request,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params;

  try {
    const redisClient = makeRedisClient();

    if (!name || name.trim() === "") {
      throw new AppError("Prefixo é obrigatório", 400);
    }

    apiLogger.debug(`Recuperando chaves do prefixo: ${name}`);

    const isConnected = await redisClient.isConnected();
    if (!isConnected) {
      throw new AppError("Redis não está conectado", 503);
    }

    const redis = redisClient.getInstance();

    // Busca todas as chaves do prefixo
    const pattern = `${name}:*`;
    const keys = await redis.keys(pattern);

    if (keys.length === 0) {
      return NextResponse.json({
        prefix: name,
        count: 0,
        keys: [],
        message: `Nenhuma chave encontrada para o prefixo: ${name}`,
      });
    }

    // Limita a 100 chaves para não sobrecarregar
    const limitedKeys = keys.slice(0, 100);
    const hasMore = keys.length > 100;

    // Busca detalhes de cada chave
    const keysData: CacheKeyValue[] = await Promise.all(
      limitedKeys.map(async (key) => {
        try {
          // Busca valor, TTL, tipo e tamanho em paralelo
          const [value, ttl, type, memory] = await Promise.all([
            redis.get(key),
            redis.ttl(key),
            redis.type(key),
            redis.memory("USAGE", key).catch(() => 0),
          ]);

          // Parse do valor se for JSON
          let parsedValue = value;
          try {
            parsedValue = value ? JSON.parse(value) : null;
          } catch {
            parsedValue = value;
          }

          return {
            key,
            value: parsedValue,
            ttl: ttl === -1 ? -1 : ttl, // -1 significa sem expiração
            size: memory || 0,
            type,
          };
        } catch (error) {
          handleErrors(
            error,
            undefined,
            `Erro ao buscar detalhes da chave ${key}`
          );
          return {
            key,
            value: null,
            ttl: -1,
            size: 0,
            type: "unknown",
          };
        }
      })
    );

    // Calcula estatísticas
    const totalSize = keysData.reduce((acc, item) => acc + item.size, 0);
    const withTTL = keysData.filter((item) => item.ttl > 0).length;
    const withoutTTL = keysData.filter((item) => item.ttl === -1).length;

    return NextResponse.json({
      prefix: name,
      count: keys.length,
      showing: limitedKeys.length,
      hasMore,
      statistics: {
        totalKeys: keys.length,
        totalSize: formatBytes(totalSize),
        keysWithTTL: withTTL,
        keysWithoutTTL: withoutTTL,
      },
      keys: keysData,
    });
  } catch (error) {
    const errorMessage = handleErrors(error);
    return NextResponse.json(
      { error: errorMessage },
      { status: errorMessage.status ?? 500 }
    );
  }
}
