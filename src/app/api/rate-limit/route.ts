import { SpanStatusCode, trace } from "@opentelemetry/api";
import { NextRequest, NextResponse } from "next/server";

import { apiLogger } from "@/lib/logger";
import { makeRateLimiter } from "@/lib/rateLimiter/makeRateLimiter";
import { handleErrors } from "@/errors/handleErrors";

const tracer = trace.getTracer("rate-limiter");

const rateLimiter = makeRateLimiter();

export async function GET(request: NextRequest) {
  const pathname = request.nextUrl.searchParams.get("path") || "/";

  const span = tracer.startSpan("rateLimiter.check", {
    attributes: {
      http_method: "GET",
      http_route: pathname,
    },
  });
  const start = performance.now();
  try {
    const identifier = rateLimiter.getIdentifier(request);

    span.setAttribute("rateLimiter.identifier", identifier);

    const isBlocked = await rateLimiter.isBlocked(identifier);

    if (isBlocked) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: "Blocked by rate limiter",
      });
      span.setAttribute("rateLimiter.blocked", true);
      return NextResponse.json(
        { blocked: true, retryAfter: 900 },
        { status: 429 }
      );
    }

    const config = rateLimiter.getRateLimitConfig(pathname);
    span.setAttribute("rateLimiter.limit", config.requests);
    span.setAttribute("rateLimiter.window", config.window);

    const result = await rateLimiter.checkLimit(identifier, config);

    span.setAttribute("rateLimiter.success", result.success);
    span.setAttribute("rateLimiter.remaining", result.remaining);
    span.setAttribute("rateLimiter.reset", result.reset);

    return NextResponse.json(
      {
        success: result.success,
        limit: result.limit,
        remaining: result.remaining,
        reset: result.reset,
        retryAfter: result.retryAfter,
      },
      {
        status: result.success ? 200 : 429,
      }
    );
  } catch (error) {
    span.setStatus({ code: SpanStatusCode.ERROR, message: String(error) });
    handleErrors(error, null, { messsage: "Rate limit check error" });
    return NextResponse.json(
      { success: true, limit: 100, remaining: 99, reset: Date.now() + 60000 },
      { status: 200 }
    );
  } finally {
    span.setAttribute("execution.ms", performance.now() - start);
    span.end();
  }
}
