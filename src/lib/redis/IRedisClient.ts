import Redis from "ioredis";

export interface CacheStats {
    totalKeys: number;
    notionKeys: number;
    tagKeys: number;
    redisInfo: any;
}

export interface TagKeyResult {
    tag: string;
    keys: string[];
}

export interface CacheOptions {
    ttl?: number;
    tags?: string[];
}



export interface IRedisClient {
    /**
     * Gera uma chave de cache única baseada em prefixo, tags e parâmetros
     * @param prefix - Prefixo da chave (ex: 'notion', 'user')
     * @param tags - Array de tags para categorização
     * @param params - Parâmetros adicionais para tornar a chave única
     * @returns String da chave gerada
     */
    generateCacheKey(prefix: string, tags: string[], params?: any): string;

    /**
     * Busca dados do cache
     * @param key - Chave do cache
     * @returns Promise com os dados deserializados ou null se não encontrado
     */
    get<T>(key: string): Promise<T | null>;

    /**
     * Armazena dados no cache
     * @param key - Chave do cache
     * @param data - Dados a serem armazenados
     * @param ttl - Tempo de vida em segundos (opcional)
     * @returns Promise<void>
     */
    set<T>(key: string, data: T, ttl?: number): Promise<void>;

    /**
     * Adiciona uma chave de cache às tags especificadas para invalidação futura
     * @param cacheKey - Chave do cache
     * @param tags - Array de tags
     * @returns Promise<void>
     */
    addToTags(cacheKey: string, tagsPrefix: string, tags: string[]): Promise<void>;

    /**
     * Invalida todas as chaves associadas às tags especificadas
     * @param tags - Array de tags para invalidar
     * @returns Promise<void>
     */
    invalidateCacheByTags(tagsPrefix: string, tags: string[]): Promise<void>;

    /**
     * Invalida uma chave específica do cache
     * @param cacheKey - Chave a ser invalidada
     * @returns Promise<void>
     */
    invalidateCache(cacheKey: string): Promise<void>;

    /**
     * Obtém estatísticas sobre o uso do cache
     * @returns Promise com estatísticas do cache
     */
    getCacheStats(): Promise<CacheStats>;

    /**
     * Remove todas as chaves que começam com o prefixo especificado
     * @param prefix - Prefixo das chaves a serem removidas
     * @returns Promise<void>
     */
    clearCacheByPrefix(prefix: string): Promise<void>;


    getInstance(): Redis;

    /**
     * Verifica se a conexão com o Redis está ativa
     * @returns Promise<boolean> - true se conectado, false caso contrário
     */
    isConnected(): Promise<boolean>;

    /**
     * Fecha a conexão com o Redis
     * @returns Promise<void>
     */
    disconnect(): Promise<void>;

    /**
     * Getter para acesso direto ao cliente Redis (uso avançado)
     * @returns Instância do Redis client
     */
    readonly client: Redis;
}