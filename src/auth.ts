import NextAuth from "next-auth"

import authConfig from "@/lib/auth/auth.config"

import { PrismaAdapter } from "./lib/auth/prisma-adapter"
import { prisma } from "./lib/prisma"


export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt" as const,
    maxAge: 1 * 60 * 60, // 1 hour
  },
  ...authConfig,
})