import Redis from "ioredis";
import { NextRequest } from "next/server";

import { makeRedisClient } from "../redis/makeRedisClient";

import { IRateLimiter } from "./IRateLimiter";
import { handleErrors } from "@/errors/handleErrors";

const RATE_LIMITS = {
  global: { requests: 10000, window: 60 },
  api: { requests: 10000, window: 60 },
  auth: { requests: 10000, window: 300, blockDuration: 900 },
  public: { requests: 10000, window: 60 },
} as const;

// const RATE_LIMITS = {
//     global: { requests: 100, window: 60 },
//     api: { requests: 20, window: 60 },
//     auth: { requests: 5, window: 300, blockDuration: 900 },
//     public: { requests: 200, window: 60 }
// } as const

interface RateLimitConfig {
  requests: number;
  window: number; // em segundos
  blockDuration?: number; // em segundos, opcional
}

interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
  retryAfter?: number;
}

interface CacheEntry {
  result: RateLimitResult;
  expires: number;
  lastUsed: number;
}

export class RateLimiter implements IRateLimiter {
  private redis: Redis;
  private cache = new Map<string, CacheEntry>();
  private blockCache = new Map<string, number>(); // identifier -> expiresAt
  private luaScript: string;

  constructor() {
    const redisClient = makeRedisClient();
    this.redis = redisClient.getInstance();

    // Lua script para operações atômicas (muito mais rápido)
    this.luaScript = `
            local key = KEYS[1]
            local block_key = KEYS[2]
            local now = tonumber(ARGV[1])
            local window_start = tonumber(ARGV[2])
            local max_requests = tonumber(ARGV[3])
            local window_seconds = tonumber(ARGV[4])
            local block_duration = tonumber(ARGV[5]) or 0
            local unique_id = ARGV[6]

            -- Remove entradas antigas
            redis.call('ZREMRANGEBYSCORE', key, 0, window_start)
            
            -- Conta requests atuais
            local current_count = redis.call('ZCARD', key)
            
            if current_count >= max_requests then
                -- Aplica bloqueio se configurado
                if block_duration > 0 then
                    redis.call('SETEX', block_key, block_duration, '1')
                end
                
                return {0, max_requests, 0, math.floor((now + window_seconds * 1000) / 1000), block_duration > 0 and block_duration or window_seconds}
            else
                -- Adiciona request atual
                redis.call('ZADD', key, now, unique_id)
                
                -- Define TTL
                redis.call('EXPIRE', key, window_seconds + 60)
                
                local remaining = max_requests - current_count - 1
                return {1, max_requests, remaining, math.floor((now + window_seconds * 1000) / 1000), 0}
            end
        `;

    // Limpa cache periodicamente
    setInterval(() => this.cleanupCache(), 30000);
  }

  private cleanupCache(): void {
    const now = Date.now();

    // Limpa cache de rate limit
    for (const [key, entry] of this.cache.entries()) {
      if (now > entry.expires || now - entry.lastUsed > 120000) {
        // 2 min sem uso
        this.cache.delete(key);
      }
    }

    // Limpa cache de bloqueios
    for (const [identifier, expiresAt] of this.blockCache.entries()) {
      if (now >= expiresAt) {
        this.blockCache.delete(identifier);
      }
    }
  }

  async checkLimit(
    identifier: string,
    config: RateLimitConfig
  ): Promise<RateLimitResult> {
    const cacheKey = `${identifier}:${config.requests}:${config.window}`;
    const now = Date.now();

    // Verifica cache local primeiro (válido por 5 segundos para requests normais)
    const cached = this.cache.get(cacheKey);
    if (cached && now < cached.expires) {
      cached.lastUsed = now;

      // Se ainda tem remaining, decrementa localmente
      if (cached.result.remaining > 0) {
        cached.result.remaining--;
        return { ...cached.result };
      }

      // Se não tem remaining mas ainda está no cache, retorna rate limited
      if (cached.result.remaining === 0) {
        return { ...cached.result, success: false };
      }
    }

    const window = config.window * 1000;
    const windowStart = now - window;

    try {
      // Executa Lua script (1 round trip vs múltiplas operações)
      const result = (await this.redis.eval(
        this.luaScript,
        2, // número de keys
        `rate_limit:${identifier}`,
        `block:${identifier}`,
        now.toString(),
        windowStart.toString(),
        config.requests.toString(),
        config.window.toString(),
        (config.blockDuration || 0).toString(),
        `${now}-${Math.random()}`
      )) as number[];

      const [success, limit, remaining, reset, retryAfter] = result;
      const rateLimitResult: RateLimitResult = {
        success: success === 1,
        limit,
        remaining,
        reset,
        retryAfter: retryAfter > 0 ? retryAfter : undefined,
      };

      // Cache o resultado por 5-10 segundos dependendo do remaining
      const cacheTime = remaining > 10 ? 10000 : remaining > 0 ? 5000 : 2000;
      this.cache.set(cacheKey, {
        result: { ...rateLimitResult },
        expires: now + cacheTime,
        lastUsed: now,
      });

      // Se foi bloqueado, adiciona ao cache de bloqueios
      if (!rateLimitResult.success && retryAfter > 0) {
        this.blockCache.set(identifier, now + retryAfter * 1000);
      }

      return rateLimitResult;
    } catch (error) {
      handleErrors(error, null, {
        message: "Rate limiter error",
      });
      // Em caso de erro, permite a request (fail-open)
      return {
        success: true,
        limit: config.requests,
        remaining: config.requests - 1,
        reset: Math.ceil((now + window) / 1000),
      };
    }
  }

  async isBlocked(identifier: string): Promise<boolean> {
    // Cache em memória primeiro (muito mais rápido)
    const cached = this.blockCache.get(identifier);
    if (cached) {
      if (Date.now() < cached) {
        return true;
      } else {
        this.blockCache.delete(identifier);
        return false;
      }
    }

    try {
      const blockKey = `block:${identifier}`;

      // Usa TTL em vez de GET (mais rápido)
      const ttl = await this.redis.ttl(blockKey);

      if (ttl > 0) {
        // Adiciona ao cache local
        this.blockCache.set(identifier, Date.now() + ttl * 1000);
        return true;
      }

      return false;
    } catch (error) {
      handleErrors(error, null, {
        message: "Block check error",
      });
      return false; // fail-open
    }
  }

  async clearLimit(identifier: string): Promise<void> {
    try {
      // Remove do cache local
      for (const key of this.cache.keys()) {
        if (key.startsWith(`${identifier}:`)) {
          this.cache.delete(key);
        }
      }
      this.blockCache.delete(identifier);

      // Remove do Redis
      const key = `rate_limit:${identifier}`;
      const blockKey = `block:${identifier}`;
      await this.redis.del(key, blockKey);
    } catch (error) {
      handleErrors(error, null, {
        message: "Clear limit error",
      });
    }
  }

  getIdentifier(request: NextRequest): string {
    const forwarded = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    const ip = forwarded?.split(",")[0]?.trim() || realIp || "unknown";
    return ip;
  }

  getRateLimitConfig(pathname: string): RateLimitConfig {
    // Cache estático - evita re-parsing de strings
    if (pathname.startsWith("/api/auth/")) return RATE_LIMITS.auth;
    if (pathname.startsWith("/api/")) return RATE_LIMITS.api;
    return RATE_LIMITS.public;
  }

  // Método para pré-aquecer o cache para IPs frequentes
  async warmupCache(identifiers: string[]): Promise<void> {
    const promises = identifiers.map(async (identifier) => {
      try {
        const config = RATE_LIMITS.public; // Usa config padrão para warmup
        await this.checkLimit(identifier, config);
      } catch (error) {
        handleErrors(error, null, {
          message: `Warmup failed for ${identifier}`,
        });
      }
    });

    await Promise.allSettled(promises);
  }

  // Estatísticas do cache para monitoramento
  getCacheStats(): {
    rateLimitCache: number;
    blockCache: number;
    hitRate?: number;
  } {
    return {
      rateLimitCache: this.cache.size,
      blockCache: this.blockCache.size,
    };
  }

  disconnect() {
    this.redis.disconnect();
  }
}
