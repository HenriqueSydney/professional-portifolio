'use server'


import { makeRedisClient } from "../redis/makeRedisClient";
import { SpanKind, SpanStatusCode, trace } from "@opentelemetry/api";
import { apiLogger } from "../logger";

type NotionClientOptions = {
    cache?: boolean
    revalidate?: number | false // 0 or false = never expires until manual invalidation
    tags?: string[]
    params?: string
}

type NotionClientResponse<T> = [Error, null] | [null, T];

export async function notionClient<T>(operationName: string, callback: () => Promise<T>, options: NotionClientOptions = {}): Promise<NotionClientResponse<T>> {
    const { cache = true, revalidate = 0, tags = [], params = '' } = options;
    const redisClient = makeRedisClient()


    const otelOptions = {
        kind: SpanKind.CLIENT, // Indica chamada externa
        attributes: {
            'notion.operation': operationName,
            'cache.enabled': cache,
            'cache.revalidate': revalidate.toString(),
            'cache.tags': tags.join('; '),
        }
    }

    const tracer = trace.getTracer('professional-portfolio')
    return await tracer.startActiveSpan(operationName, otelOptions, async (span) => {
        const start = performance.now();
        try {
            if (!cache) {
                const result = await callback();
                span.setStatus({ code: SpanStatusCode.OK });
                return [null, result] satisfies NotionClientResponse<T>;
            }
            // Gerar chave única para o cache
            const cacheKey = redisClient.generateCacheKey(
                `notion:${operationName}`,
                tags,
                params
            );
            span.setAttributes({ 'cache.key': cacheKey });
            // Tentar recuperar do cache
            const cachedData = await redisClient.get(cacheKey);

            if (cachedData) {
                apiLogger.info(`Cache HIT para: ${cacheKey}`);
                span.setAttribute("cache.hit", true);
                span.setStatus({ code: SpanStatusCode.OK }); // OK
                return [null, cachedData as T] satisfies NotionClientResponse<T>;
            }

            apiLogger.info(`Cache MISS para: ${cacheKey}`);

            // Executar callback e obter dados frescos
            const freshData = await callback();

            // Armazenar no cache
            if (cache) {
                setImmediate(async () => {
                    try {
                        const ttl = revalidate && revalidate > 0 ? revalidate : undefined;
                        await Promise.all([
                            redisClient.set<T>(cacheKey, freshData, ttl),
                            redisClient.addToTags(cacheKey, 'notion:tag', tags)
                        ]);
                    } catch (error) {
                        apiLogger.warn({ stackTrace: error }, 'Notion background cache failed');
                    }
                });


            }
            span.setAttribute("cache.hit", false);
            span.setStatus({ code: SpanStatusCode.OK }); // OK
            return [null, freshData as T] satisfies NotionClientResponse<T>;

        } catch (error: any) {
            span.setAttribute("cache.hit", false);
            span.recordException(error);
            span.setStatus({ code: SpanStatusCode.ERROR, message: error.message }); // ERROR
            return [error as Error, null] satisfies NotionClientResponse<T>
        } finally {
            span.setAttribute("execution.ms", performance.now() - start);
            span.end();
        }
    });
}

