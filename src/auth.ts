import NextAuth from "next-auth"
import authConfig from "@/lib/auth/auth.config"
import { prisma } from "./lib/prisma"
import { PrismaAdapter } from "./lib/auth/prisma-adapter"


export const { auth, handlers, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt" as const,
        maxAge: 1 * 60 * 60, // 1 hour
    },
    ...authConfig,
})