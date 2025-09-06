import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import createMiddleware from 'next-intl/middleware';

import { routing } from './i18n/routing';


const intlMiddleware = createMiddleware(routing);


export default async function middleware(request: NextRequest) {
  //register()
  const { pathname } = request.nextUrl

  if (request.nextUrl.pathname.startsWith("/api/rate-limit")) {
    return NextResponse.next()
  }

  try {
    // Faz uma chamada interna para verificar rate limit
    const rateCheckUrl = new URL('/api/rate-limit', request.url)
    rateCheckUrl.searchParams.set('path', pathname)

    const rateCheck = await fetch(rateCheckUrl.toString(), {
      headers: {
        "x-pathname": request.nextUrl.pathname,
        'x-forwarded-for': request.headers.get('x-forwarded-for') || '',
        'x-real-ip': request.headers.get('x-real-ip') || '',
      }
    })

    const result = await rateCheck.json()
    if (!result.success) {
      return new NextResponse('Too Many Requests', {
        status: 429,
        headers: {
          "x-pathname": request.nextUrl.pathname,
          'X-RateLimit-Limit': result.limit?.toString() || '0',
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': result.reset?.toString() || '0',
          'Retry-After': result.retryAfter?.toString() || '60',
        }
      })
    }

    const response = NextResponse.next()
    response.headers.set("x-pathname", request.nextUrl.pathname);
    response.headers.set('X-RateLimit-Limit', result.limit?.toString() || '0')
    response.headers.set('X-RateLimit-Remaining', result.remaining?.toString() || '0')
    response.headers.set('X-RateLimit-Reset', result.reset?.toString() || '0')


    if (request.nextUrl.pathname.startsWith("/api")) {
      return NextResponse.next()
    }

    return intlMiddleware(request)

  } catch (error) {
    console.error('Middleware rate limit error:', error)
    return NextResponse.next()
  }

}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:ico|png|jpg|jpeg|gif|svg|webp|css|js|woff|woff2|ttf|eot|xml|txt|map)$).*)',
  ],
};