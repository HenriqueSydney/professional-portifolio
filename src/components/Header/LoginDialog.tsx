'use client'
import { Trigger } from "@radix-ui/react-dialog"
import { Chrome, Github, Gitlab, Loader2 } from "lucide-react"
import Link from "next/link"
import { signIn } from "next-auth/react"
import { useTranslations } from "next-intl"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import { cn } from "@/lib/utils"

export function LoginDialog() {
  const t = useTranslations('header')
  const [isLoading, setIsLoading] = useState<"github" | "gitlab" | "google" | null>(null)

  async function handleSignIn(provider: "github" | "gitlab" | "google") {
    try {
      setIsLoading(provider)
      await signIn(provider)
    } finally {
      setIsLoading(null)
    }
  }

  const providers = [
    {
      id: "github",
      className: "bg-neutral-900 hover:bg-neutral-800 text-white",
      icon: <Github className="w-4 h-4" />
    },
    {
      id: "gitlab",
      className: "bg-orange-600 hover:bg-orange-500 text-white ",
      icon: <Gitlab className="w-4 h-4" />
    },
    {
      id: "google",
      className: "bg-white border text-gray-700 hover:bg-gray-100",
      icon: <Chrome className="w-7 h-7 text-[#4285F4]" />
    }
  ] as const

  return (
    <Dialog>
      <Trigger asChild>
        <Button variant='outline' className="hover:shadow-glow transition-all duration-300">
          {t('loginDialog.button')}
        </Button>
      </Trigger>
      <DialogContent className="max-w-[480px] sm:max-w-[480px] rounded-2xl p-8 shadow-lg">
        <DialogHeader className="text-center">
          <DialogTitle className="text-xl font-bold">Login</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            {t('loginDialog.description')}
          </DialogDescription>
        </DialogHeader>

        <div className="my-10 grid gap-4">
          {providers.map(({ id, className, icon }) => (
            <Button
              key={id}
              size="lg"
              className={cn("p-6 flex items-center gap-2 text-xl font-medium", className)}
              onClick={() => handleSignIn(id)}
              aria-label={t(`loginDialog.providers.${id}`)}
              disabled={!!isLoading && isLoading !== id}
            >
              {isLoading === id ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                icon
              )}
              {isLoading === id
                ? t("loginDialog.providers.loading")
                : t(`loginDialog.providers.${id}`)}
            </Button>
          ))}

        </div>

        <p className="text-xs text-center text-muted-foreground">
          {t('loginDialog.terms')} <Link href="/terms-of-use" target="_blank" className="underline">{t('loginDialog.termsLink')}</Link>.
        </p>
      </DialogContent>
    </Dialog>
  )
}
