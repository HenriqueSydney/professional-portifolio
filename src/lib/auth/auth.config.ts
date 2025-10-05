import { envVariables } from "@/env";
import { Role } from "@/generated/prisma";
import type { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";
import Gitlab from "next-auth/providers/gitlab";
import Google from "next-auth/providers/google";
import { prisma } from "../prisma";

export default {
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log({ user, account, profile });
      if (account?.provider && profile && user?.id) {
        try {
          let role: Role = Role.USER;
          const email = profile.email || user.email;

          if (email === envVariables.GOOGLE_EMAIL) {
            role = Role.ADMIN;
          }

          // Atualiza os dados do usuário no banco com informações do provedor
          await prisma.user.update({
            where: { id: user.id },
            data: {
              name: profile.name || user.name,
              image: profile.picture || profile.image || user.image,
              role,
            },
          });

          // Atualiza o objeto user que será usado nos próximos callbacks
          user.name = profile.name || user.name;
          user.image = profile.picture || profile.image || user.image;
        } catch (error) {
          console.error("Erro ao atualizar usuário no login:", error);
        }
      }

      return true;
    },
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
    }),
  ],
} satisfies NextAuthConfig;
