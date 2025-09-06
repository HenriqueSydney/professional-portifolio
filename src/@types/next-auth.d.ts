// types/next-auth.d.ts
import { DefaultSession, DefaultUser } from "next-auth"
import { JWT as DefaultJWT } from "next-auth/jwt"

import { Role } from "@/generated/prisma" // ou onde estiver seu enum Role

declare module "next-auth" {
    interface User extends DefaultUser {
        role: Role
    }

    interface Session extends DefaultSession {
        user: {
            id: string
            role: Role
        } & DefaultSession["user"]
    }
}

declare module "next-auth/jwt" {
    interface JWT extends DefaultJWT {
        role?: Role
    }
}