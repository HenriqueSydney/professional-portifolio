"use client";

import { signOut } from "next-auth/react";

export function CloseSession() {
  return (
    <button
      onClick={() => signOut({ redirect: true, redirectTo: "/" })}
      className="mt-3 text-destructive  text-sm font-medium"
    >
      Encerrar Sessão
    </button>
  );
}
