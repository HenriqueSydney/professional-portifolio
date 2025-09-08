"use server";

import { SpanKind, SpanStatusCode, trace } from "@opentelemetry/api";
import { makeRedisClient } from "./redis/makeRedisClient";
import { apiLogger } from "./logger";

export const OPERATION_TYPES = {
  REPOSITORY: "repository",
  NOTION: "notion",
} as const;

export type OperationType =
  (typeof OPERATION_TYPES)[keyof typeof OPERATION_TYPES];

export interface OperationWrapperOptions {
  cache?: "force-cache" | "no-cache" | "revalidate-tags";
  revalidate?: number | false;
  tags?: string[];
  params?: string;
  revalidateCachedTags?: boolean;
}

type OperationWrapperResponse<T> = [Error, null] | [null, T];

export async function operationWrapper<T>(
  operationType: "repository" | "notion",
  operationName: string,
  callback: () => Promise<T>,
  options: OperationWrapperOptions = {}
): Promise<OperationWrapperResponse<T>> {
  const {
    cache = "force-cache",
    revalidate = 0,
    tags = [],
    params = "",
  } = options;
  const redisClient = makeRedisClient();
  const attributeKey = `${operationType}.operation`;
  const otelOptions = {
    kind: SpanKind.CLIENT, // Indica chamada externa
    attributes: {
      [attributeKey]: operationName,
      "cache.enabled": cache,
      "cache.revalidate": revalidate.toString(),
      "cache.tags": tags.join("; "),
    },
  };

  const tracer = trace.getTracer("professional-portfolio");
  return await tracer.startActiveSpan(
    operationName,
    otelOptions,
    async (span) => {
      const start = performance.now();
      try {
        const effectiveCache = cache === "force-cache";

        if (cache === "revalidate-tags" && tags.length > 0) {
          apiLogger.debug(`Invalidating cache for tags: ${tags.join(", ")}`);
          span.setAttribute("cache.invalidated_tags", tags.join("; "));

          setImmediate(async () => {
            try {
              await redisClient.invalidateCacheByTags(
                `${operationType}:tag`,
                tags
              );
              apiLogger.debug(
                `Successfully invalidated cache for tags: ${tags.join(", ")}`
              );
            } catch (error) {
              const errorInstance =
                error instanceof Error ? error : new Error(String(error));
              apiLogger.warn(
                {
                  error: errorInstance.message,
                  stackTrace: errorInstance.stack,
                  operationType,
                  operationName,
                  tags,
                },
                `Failed to invalidate cache for tags: ${tags.join(", ")}`
              );
            }
          });
        }

        if (!effectiveCache) {
          const result = await callback();

          span.setStatus({ code: SpanStatusCode.OK });
          return [null, result] satisfies OperationWrapperResponse<T>;
        }
        // Gerar chave única para o cache
        const cacheKey = redisClient.generateCacheKey(
          `${operationType}:${operationName}`,
          tags,
          params
        );

        span.setAttributes({ "cache.key": cacheKey });
        // Tentar recuperar do cache
        const cachedData = await redisClient.get(cacheKey);

        if (cachedData) {
          apiLogger.debug(`Cache HIT para: ${cacheKey}`);
          span.setAttribute("cache.hit", true);
          span.setStatus({ code: SpanStatusCode.OK }); // OK
          return [null, cachedData as T] satisfies OperationWrapperResponse<T>;
        }

        apiLogger.debug(`Cache MISS para: ${cacheKey}`);

        // Executar callback e obter dados frescos
        const freshData = await callback();

        // Armazenar no cache
        if (effectiveCache) {
          setImmediate(async () => {
            try {
              const ttl = revalidate && revalidate > 0 ? revalidate : undefined;
              await Promise.all([
                redisClient.set<T>(cacheKey, freshData, ttl),
                redisClient.addToTags(cacheKey, `${operationType}:tag`, tags),
              ]);
            } catch (error) {
              const errorInstance =
                error instanceof Error ? error : new Error(String(error));

              apiLogger.warn(
                {
                  error: errorInstance.message,
                  stackTrace: errorInstance.stack,
                  operationType,
                  operationName,
                  cacheKey,
                },
                `${operationType} background cache failed`
              );
            }
          });
        }

        span.setAttribute("cache.hit", false);
        span.setStatus({ code: SpanStatusCode.OK });

        return [null, freshData as T] satisfies OperationWrapperResponse<T>;
      } catch (error: any) {
        span.setAttribute("cache.hit", false);
        span.recordException(error);
        span.setStatus({ code: SpanStatusCode.ERROR, message: error.message }); // ERROR
        return [error as Error, null] satisfies OperationWrapperResponse<T>;
      } finally {
        span.setAttribute("execution.ms", performance.now() - start);
        span.end();
      }
    }
  );
}
