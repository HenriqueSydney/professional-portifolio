import { CachePrefix } from "@/dtos/CachePrefix";
import { handleErrors } from "@/errors/handleErrors";
import { apiLogger } from "@/lib/logger";
import { makeRedisClient } from "@/lib/redis/makeRedisClient";
import { formatBytes } from "@/util/formatBytes";
import { NextResponse } from "next/server";

export async function GET() {
  apiLogger.debug("Recuperando dados do cache");

  try {
    const redisClient = makeRedisClient();
    // Verifica se está conectado
    const isConnected = await redisClient.isConnected();
    if (!isConnected) {
      return NextResponse.json(
        { error: "Redis não está conectado" },
        { status: 503 }
      );
    }

    // Obtém estatísticas gerais do cache
    const cacheStats = await redisClient.getCacheStats();

    // Define os prefixos que você quer monitorar
    const prefixes = [
      { prefix: "repository", name: "Repository Cache" },
      { prefix: "http", name: "HTTP Cache" },
      { prefix: "notion", name: "Notion Cache" },
      { prefix: "api", name: "API Cache" },
    ];

    // Busca informações detalhadas para cada prefixo
    const cachePrefixes: CachePrefix[] = await Promise.all(
      prefixes.map(async ({ prefix, name }) => {
        try {
          const redis = redisClient.getInstance();

          // Busca todas as chaves do prefixo
          const keys = await redis.keys(`${prefix}:*`);

          // Calcula tamanho total (aproximado)
          let totalSize = 0;
          if (keys.length > 0) {
            const sizes = await Promise.all(
              keys.slice(0, 100).map(async (key) => {
                try {
                  const memory = await redis.memory("USAGE", key);
                  return memory || 0;
                } catch {
                  return 0;
                }
              })
            );
            totalSize = sizes.reduce((acc, size) => acc + size, 0);

            // Estima o tamanho total se houver mais de 100 chaves
            if (keys.length > 100) {
              totalSize = (totalSize / 100) * keys.length;
            }
          }

          // Busca métricas de hit/miss (se você armazená-las)
          const hitsKey = `stats:${prefix}:hits`;
          const missesKey = `stats:${prefix}:misses`;

          const [hitsStr, missesStr] = await Promise.all([
            redis.get(hitsKey),
            redis.get(missesKey),
          ]);

          const hits = hitsStr ? parseInt(hitsStr, 10) : 0;
          const misses = missesStr ? parseInt(missesStr, 10) : 0;
          const total = hits + misses;
          const hitRate = total > 0 ? ((hits / total) * 100).toFixed(1) : "0.0";

          return {
            name,
            prefix,
            active: keys.length > 0,
            stats: {
              keys: keys.length,
              size: formatBytes(totalSize),
              hits,
              misses,
              hitRate: `${hitRate}%`,
            },
          };
        } catch (error) {
          handleErrors(error);
          return {
            name,
            prefix,
            active: false,
            stats: {
              keys: 0,
              size: "0 B",
              hits: 0,
              misses: 0,
              hitRate: "0.0%",
            },
          };
        }
      })
    );

    // Retorna dados completos
    return NextResponse.json({
      connected: isConnected,
      overview: {
        totalKeys: cacheStats.totalKeys,
        notionKeys: cacheStats.notionKeys,
        tagKeys: cacheStats.tagKeys,
      },
      prefixes: cachePrefixes,
    });
  } catch (error) {
    const errorMessage = handleErrors(error);
    return NextResponse.json(
      { error: errorMessage },
      { status: errorMessage.status ?? 500 }
    );
  }
}

// Função auxiliar para formatar bytes
