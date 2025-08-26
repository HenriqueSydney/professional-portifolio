import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { register } from "./instrumentation";

export default function middleware(request: NextRequest) {
  register()
  const response = NextResponse.next();
  response.headers.set("x-pathname", request.nextUrl.pathname);
  return response;
}

export const config = {
  // OPÇÃO A: Exclui arquivos estáticos (Recomendada)
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:ico|png|jpg|jpeg|gif|svg|webp|css|js|woff|woff2|ttf|eot|xml|txt|map)$).*)',
  ],

  // OPÇÃO B: Apenas rotas específicas (mais restritiva)
  // matcher: [
  //   '/api/:path*',     // Todas as APIs
  //   '/((?!_next).*)',  // Todas as páginas, exceto _next
  // ],

  // OPÇÃO C: Muito específica
  // matcher: [
  //   '/api/:path*',
  //   '/',
  //   '/about',
  //   '/blog/:path*',
  //   '/dashboard/:path*',
  // ],
};