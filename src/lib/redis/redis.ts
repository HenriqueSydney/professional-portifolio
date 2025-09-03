import crypto from "node:crypto";
import { envVariables } from "@/env";
import Redis from "ioredis";

import { IRedisClient, CacheStats } from "./IRedisClient";
import { Meter, metrics, SpanKind, SpanStatusCode, trace, Tracer } from "@opentelemetry/api";
import { Logger } from "pino";
import { apiLogger } from "../logger";


export class RedisClient implements IRedisClient {
    private redis: Redis;
    private tracer: Tracer;
    private meter: Meter;
    private logger: Logger

    // Métricas Redis
    private operationCounter: any;
    private operationDuration: any;
    private connectionGauge: any;
    private cacheHitRatio: any;

    constructor() {
        this.redis = new Redis({
            //host: envVariables.REDIS_HOST || 'localhost',
            port: parseInt(envVariables.REDIS_PORT || '6379'),
            password: envVariables.REDIS_PASSWORD,
            maxRetriesPerRequest: 3,
            lazyConnect: true,
            keepAlive: 30000,
            connectTimeout: 10000,
            commandTimeout: 5000,
        });
        this.tracer = trace.getTracer('redis-client', '1.0.0');
        this.meter = metrics.getMeter('redis-client', '1.0.0');

        this.initMetrics();
        this.setupRedisEventListeners();
        this.logger = apiLogger
    }

    private initMetrics(): void {
        this.operationCounter = this.meter.createCounter('redis_operations_total', {
            description: 'Total number of Redis operations'
        });

        this.operationDuration = this.meter.createHistogram('redis_operation_duration_seconds', {
            description: 'Duration of Redis operations in seconds',
            unit: 's'
        });

        this.connectionGauge = this.meter.createUpDownCounter('redis_connections_active', {
            description: 'Number of active Redis connections'
        });

        this.cacheHitRatio = this.meter.createCounter('redis_cache_operations_total', {
            description: 'Cache hit/miss operations'
        });
    }

    private setupRedisEventListeners(): void {
        this.redis.on('connect', () => {
            this.connectionGauge.add(1);
        });

        this.redis.on('close', () => {
            this.connectionGauge.add(-1);
        });
    }

    /**
     * Wrapper genérico para operações Redis com telemetria
     */
    private async executeRedisOperation<T>(
        operationName: string,
        operation: () => Promise<T>,
        attributes: Record<string, any> = {}
    ): Promise<T> {
        const startTime = performance.now();

        return await this.tracer.startActiveSpan(`redis.${operationName}`, {
            kind: SpanKind.CLIENT,
            attributes: {
                'db.system': 'redis',
                'db.operation': operationName,
                'db.connection_string': `redis://***:${envVariables.REDIS_PORT}`,
                ...attributes
            }
        }, async (span: any) => {
            const labels = {
                operation: operationName,
                ...attributes
            };

            try {
                const result = await operation();

                // Métricas de sucesso
                this.operationCounter.add(1, { ...labels, result: 'success' });
                this.recordDuration(startTime, labels, 'success');

                span.setStatus({ code: SpanStatusCode.OK });
                return result;

            } catch (error: any) {
                // Métricas de erro
                this.operationCounter.add(1, {
                    ...labels,
                    result: 'error',
                    error_type: error.code || error.constructor.name
                });
                this.recordDuration(startTime, labels, 'error');

                span.recordException(error);
                span.setStatus({
                    code: SpanStatusCode.ERROR,
                    message: error.message
                });

                throw error;
            } finally {
                span.end();
            }
        });
    }

    private recordDuration(startTime: number, labels: Record<string, any>, result: string): void {
        const duration = (performance.now() - startTime) / 1000;
        this.operationDuration.record(duration, { ...labels, result });
    }



    /**
     * Gera uma chave de cache única
     */
    generateCacheKey(prefix: string, tags: string[], params?: any): string {
        const baseKey = prefix;
        const tagString = tags.length > 0 ? `:${tags.join(':')}` : '';
        const paramsString = params
            ? `:${crypto.createHash("md5").update(JSON.stringify(params)).digest("hex")}`
            : '';
        return `${baseKey}${tagString}${paramsString}`;
    }

    /**
     * Busca dados do cache
     */
    async get<T>(key: string): Promise<T | null> {

        if (!envVariables.CACHE_ENABLED) {
            return Promise.resolve(null)
        }

        return await this.executeRedisOperation(
            'get',
            async () => {
                try {
                    const data = await this.redis.get(key);
                    const result = data ? JSON.parse(data) as T : null;

                    // Métrica de cache hit/miss
                    this.cacheHitRatio.add(1, {
                        operation: 'get',
                        result: result ? 'hit' : 'miss'
                    });

                    return result;
                } catch (error) {
                    this.logger.error({ stackTrace: error }, `Erro ao buscar cache ${key}`);
                    return null;
                }
            },
            { 'db.redis.key': key }
        );
    }

    /**
     * Armazena dados no cache
     */
    async set<T>(key: string, data: T, ttl?: number): Promise<void> {
        const hasttl = Boolean(ttl && ttl > 0);

        return await this.executeRedisOperation(
            hasttl ? 'setex' : 'set',
            async () => {
                try {
                    const serializedData = JSON.stringify(data);

                    if (hasttl) {
                        await this.redis.setex(key, ttl!, serializedData);
                    } else {
                        await this.redis.set(key, serializedData);
                    }
                } catch (error) {
                    this.logger.error({ stackTrace: error }, `Erro ao armazenar cache ${key}`);
                }
            },
            {
                'db.redis.key': key,
                'cache.ttl': ttl || -1,
                'cache.data_size_bytes': JSON.stringify(data).length
            }
        );
    }



    /**
     * Adiciona chave às tags para invalidação futura
     */
    async addToTags(cacheKey: string, tagsPrefix: string, tags: string[]): Promise<void> {
        if (tags.length === 0) return;

        return await this.executeRedisOperation(
            'sadd_pipeline',
            async () => {
                try {
                    const pipeline = this.redis.pipeline();
                    for (const tag of tags) {
                        pipeline.sadd(`${tagsPrefix}:${tag}`, cacheKey);
                    }
                    await pipeline.exec();
                } catch (error) {
                    this.logger.error({ stackTrace: error }, 'Erro ao adicionar tags');
                }
            },
            {
                'cache.tags_count': tags.length,
                'cache.tags_prefix': tagsPrefix
            }
        );
    }

    /**
     * Invalida cache por tags
     */
    async invalidateCacheByTags(tagsPrefix: string, tags: string[]): Promise<void> {
        return await this.executeRedisOperation(
            'invalidate_by_tags',
            async () => {
                try {
                    const tagKeysPromises = tags.map(tag =>
                        this.redis.smembers(`${tagsPrefix}:${tag}`).then(keys => ({ tag, keys }))
                    );

                    const tagKeysResults = await Promise.all(tagKeysPromises);
                    const pipeline = this.redis.pipeline();
                    let totalOfKeys = 0;

                    for (const { tag, keys } of tagKeysResults) {
                        if (keys.length > 0) {
                            pipeline.del(...keys);
                            pipeline.del(`${tagsPrefix}:${tag}`);
                            totalOfKeys += keys.length;
                        }
                    }

                    if (totalOfKeys > 0) {
                        await pipeline.exec();
                        this.logger.info(`Cache invalidado para tags: ${tags.join(', ')}, ${totalOfKeys} chaves removidas`);
                    } else {
                        this.logger.info(`Nenhuma chave encontrada para as tags: ${tags.join(', ')}`);
                    }

                } catch (error) {
                    this.logger.error({ stackTrace: error }, `Erro ao invalidar cache das tags ${tags.join('; ')}`);
                }

            },
            {
                'invalidation.tags_count': tags.length,
                'invalidation.tags_prefix': tagsPrefix
            }
        );
    }

    /**
     * Invalida cache específico
     */
    async invalidateCache(cacheKey: string): Promise<boolean> {

        return await this.executeRedisOperation(
            'del',
            async () => {
                try {
                    const result = await this.redis.del(cacheKey);
                    if (result > 0) {
                        this.logger.info(`Cache invalidado: ${cacheKey}`);
                        return true
                    } else {
                        this.logger.info(`Cache não encontrado: ${cacheKey}`);
                        return false
                    }
                } catch (error) {
                    this.logger.error({ stackTrace: error }, `Erro ao invalidar cache ${cacheKey}`);
                    return false
                }
            },
            { 'db.redis.key': cacheKey }
        );
    }

    /**
     * Obtém estatísticas do cache
     */
    async getCacheStats(): Promise<CacheStats> {
        return await this.executeRedisOperation(
            'get_stats',
            async () => {
                try {
                    const [allKeys, notionKeys, tagKeys, redisInfo] = await Promise.all([
                        this.redis.keys('*'),
                        this.redis.keys('notion:*'),
                        this.redis.keys('tag:*'),
                        this.redis.info('memory')
                    ]);

                    const stats = {
                        totalKeys: allKeys.length,
                        notionKeys: notionKeys.length,
                        tagKeys: tagKeys.length,
                        redisInfo
                    };

                    return stats;
                } catch (error) {
                    this.logger.error({ stackTrace: error }, 'Erro ao obter stats do cache');
                    return {
                        totalKeys: 0,
                        notionKeys: 0,
                        tagKeys: 0,
                        redisInfo: null
                    };
                }
            },
            { 'stats.operation': 'comprehensive' }
        );
    }

    /**
     * Limpa todo o cache com base em um prefixo
     */
    async clearCacheByPrefix(prefix: string): Promise<void> {
        return await this.executeRedisOperation(
            'clear_by_prefix',
            async () => {
                try {
                    const keys = await this.redis.keys(`${prefix}:*`);
                    if (keys.length > 0) {
                        await this.redis.del(...keys);
                        this.logger.info(`${keys.length} chaves removidas para o prefixo: ${prefix}`);
                    } else {
                        this.logger.info(`Nenhuma chave encontrada para o prefixo: ${prefix}`);
                    }
                } catch (error) {
                    this.logger.error({ stackTrace: error }, `Erro ao limpar cache do prefixo ${prefix}`);
                }
            },
            {
                'cache.prefix': prefix,
                'operation.type': 'bulk_delete'
            }
        );
    }

    getInstance(): Redis {
        return this.redis
    }

    /**
     * Verifica se o Redis está conectado
     */
    async isConnected(): Promise<boolean> {
        return await this.executeRedisOperation(
            'ping',
            async () => {
                try {
                    await this.redis.ping();
                    return true;
                } catch {
                    return false;
                }
            }
        );
    }

    /**
     * Fecha a conexão com o Redis
     */
    async disconnect(): Promise<void> {
        return await this.executeRedisOperation(
            'quit',
            async () => {
                try {
                    await this.redis.quit();
                } catch (error) {
                    this.logger.error({ stackTrace: error }, 'Erro ao desconectar Redis');
                }
            }
        );
    }

    /**
     * Getter para acesso direto ao cliente Redis (caso necessário)
     */
    get client(): Redis {
        return this.redis;
    }
}

