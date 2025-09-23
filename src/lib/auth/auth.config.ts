import type { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";
import Gitlab from "next-auth/providers/gitlab";
import Google, { GoogleProfile } from "next-auth/providers/google";

import { Role } from "@/generated/prisma";

import { prisma } from "../prisma";

export default {
  callbacks: {
    async jwt({ token, user }) {
      // Só roda no login inicial
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      // Joga os campos extras do token dentro da session
      if (token) {
        session.user.id = token.id as string;
        session.user.image = token.picture;
        session.user.role = token.role ?? "USER";
      }
      return session;
    },
  },
  providers: [
    GitHub,
    Gitlab,
    Google({
      authorization: {
        params: {
          access_type: "offline",
          prompt: "consent",
          response_type: "code",
        },
      },
      async profile(profile: GoogleProfile) {
        const user = await prisma.user.findUnique({
          where: { email: profile.email },
        });

        if (!user) {
          return {
            email: profile.email,
            id: profile.sub,
            name: profile.name,
            role:
              profile.email === process.env.GOOGLE_EMAIL
                ? Role.ADMIN
                : Role.USER,
          };
        }

        if (
          user.email === process.env.GOOGLE_EMAIL &&
          user.role !== Role.ADMIN
        ) {
          await prisma.user.update({
            data: { role: Role.ADMIN },
            where: { id: user.id },
          });
          return {
            email: profile.email,
            id: profile.sub,
            name: profile.name,
            role: Role.ADMIN,
          };
        }

        return {
          email: profile.email,
          id: profile.sub,
          name: profile.name,
          role: user.role,
        };
      },
    }),
  ],
} satisfies NextAuthConfig;
