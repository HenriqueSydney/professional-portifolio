'use server'

import { SpanKind, SpanStatusCode, trace } from "@opentelemetry/api";
import { makeRedisClient } from "./redis/makeRedisClient";
import { apiLogger } from "./logger";

type IHttpClientResponse<T> = [Error, null] | [null, T];

type HttpResponseType = 'json' | 'blob' | 'text' | 'arrayBuffer' | 'formData';

export async function httpClient<T>(url: string, options?: RequestInit, responseType: HttpResponseType = 'json'): Promise<IHttpClientResponse<T>> {
  if (!url) {
    return Promise.resolve([new Error("URL is required"), null]);
  }

  const redisClient = makeRedisClient();

  // Gerar identificador único para a operação HTTP
  const operationId = `http:${options?.method ? options.method.toLowerCase() : 'get'}:${url.replace(/https?:\/\//, '').replace(/[^a-zA-Z0-9]/g, '_')}`;

  const method = options?.method ?? 'GET'
  const cache = options?.cache === 'default' || options?.cache === 'force-cache'
  const revalidate = options?.next?.revalidate
  const tags = options?.next?.tags ?? []

  const otelOptions = {
    kind: SpanKind.CLIENT, // Indica chamada externa
    attributes: {
      'http.endpoint': url,
      'http.operation': operationId,
      'cache.enabled': cache ? cache : 'false',
      'cache.revalidate': revalidate?.toString(),
      'cache.tags': tags ? tags.join('; ') : '',
    }
  }

  const tracer = trace.getTracer('professional-portfolio')
  return await tracer.startActiveSpan(operationId, otelOptions, async (span) => {
    const start = performance.now();
    try {

      const cacheKeyData = {
        body: options?.body ?? '',
      };

      const cacheKey = redisClient.generateCacheKey(
        operationId,
        tags,
        cacheKeyData
      );

      if (cache && method === 'GET') {
        span.setAttributes({ 'cache.key': cacheKey });

        // Tentar recuperar do cache
        const cachedData = await redisClient.get(cacheKey);

        if (cachedData) {
          apiLogger.info(`Cache HIT para: ${cacheKey}`);
          span.setAttribute("cache.hit", true);
          span.setStatus({ code: SpanStatusCode.OK });
          return [null, cachedData as T] satisfies IHttpClientResponse<T>;
        }

        apiLogger.info(`Cache MISS para: ${cacheKey}`);
      }


      const response = await fetch(url, {
        ...options,
        cache: 'no-cache'
      })



      if (!response.ok) {
        const errorMessage = `HTTP Error: ${response.status} ${response.statusText}`;
        return [new Error(errorMessage), null] satisfies IHttpClientResponse<T>
      }

      let data: T | Blob | string | ArrayBuffer | FormData;

      switch (responseType) {
        case 'blob':
          data = await response.blob();
          break;
        case 'text':
          data = await response.text();
          break;
        case 'arrayBuffer':
          data = await response.arrayBuffer();
          break;
        case 'formData':
          data = await response.formData();
          break;
        case 'json':
        default:
          data = await response.json();
          break;
      }

      if (cache && method === 'GET' && responseType == 'json') {
        setImmediate(async () => {
          try {
            const ttl = revalidate && revalidate > 0 ? revalidate : undefined;
            await Promise.all([
              redisClient.set<T>(cacheKey, data as T, ttl),
              redisClient.addToTags(cacheKey, 'http:tag', tags)
            ]);
          } catch (error) {
            apiLogger.warn({ stackTrace: error }, 'HTTP background cache failed');
          }
        });
      }

      return [null, data as T] satisfies IHttpClientResponse<T>

    } catch (error: any) {
      console.log(error)
      apiLogger.error({ stackTrace: error }, 'HTTP request error');
      span.setAttribute("cache.hit", false);
      span.recordException(error);
      span.setStatus({ code: SpanStatusCode.ERROR, message: error.message }); // ERROR
      return [error as Error, null] satisfies IHttpClientResponse<T>
    } finally {
      span.setAttribute("execution.ms", performance.now() - start);
      span.end();
    }
  })
}

