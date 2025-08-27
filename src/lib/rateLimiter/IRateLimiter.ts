import { NextRequest } from "next/server"

export interface RateLimitConfig {
    requests: number
    window: number // em segundos
    blockDuration?: number // em segundos, opcional
}

export interface RateLimitResult {
    success: boolean
    limit: number
    remaining: number
    reset: number
    retryAfter?: number
}

type GetRateLimitConfig = {
    requests: number,
    window: number
}

export interface IRateLimiter {
    checkLimit(identifier: string, config: RateLimitConfig): Promise<RateLimitResult>
    isBlocked(identifier: string): Promise<boolean>
    clearLimit(identifier: string): Promise<void>
    disconnect(): void
    getIdentifier(request: NextRequest): string
    getRateLimitConfig(pathname: string): GetRateLimitConfig
}
