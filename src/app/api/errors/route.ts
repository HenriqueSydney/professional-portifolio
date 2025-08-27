// app/api/log-error/route.ts
import { apiLogger } from '@/lib/logger'
import { NextRequest, NextResponse } from 'next/server'
import { ErrorLogData, errorLoggerSchema } from './errorLoggerSchema'


export async function POST(request: NextRequest) {
    try {
        const errorBody: ErrorLogData = await request.json()

        const errorData = await errorLoggerSchema.parseAsync(errorBody)

        // Log estruturado para Loki
        const logEntry = {
            level: 'error',
            timestamp: new Date().toISOString(),
            message: errorData.message,
            stack: errorData.stack,
            digest: errorData.digest,
            url: errorData.url,
            userAgent: errorData.userAgent,
            userId: errorData.userId,
            sessionId: errorData.sessionId,
            metadata: errorData.metadata,
            source: 'client-side-error'
        }

        apiLogger.error({ errorLog: logEntry }, 'An error has occur in a Client or a Server Component');

        return NextResponse.json({ success: true }, { status: 200 })
    } catch (error) {
        console.error('Error logging client error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
