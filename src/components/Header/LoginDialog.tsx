'use client'
import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Chrome, Github, Gitlab, Loader2 } from "lucide-react"
import { Trigger } from "@radix-ui/react-dialog"
import { useState } from "react"
import Link from "next/link"

export function LoginDialog() {
    const [isLoading, setIsLoading] = useState<"github" | "gitlab" | "google" | null>(null)

    async function handleSignIn(provider: "github" | "gitlab" | "google") {
        try {
            setIsLoading(provider)
            await signIn(provider)
        } finally {
            setIsLoading(null)
        }
    }

    return (
        <Dialog>
            <Trigger asChild>
                <Button variant='outline' className="hover:shadow-glow transition-all duration-300">
                    Entrar
                </Button>
            </Trigger>
            <DialogContent className="max-w-[480px] sm:max-w-[480px] rounded-2xl p-8 shadow-lg">
                <DialogHeader className="text-center">
                    <DialogTitle className="text-xl font-bold">Login</DialogTitle>
                    <DialogDescription className="text-sm text-muted-foreground">
                        Faça seu login e comece a interagir comigo em meus posts.
                    </DialogDescription>
                </DialogHeader>

                <div className="my-10 grid gap-4">
                    {/* GitHub */}
                    <Button
                        size="lg"
                        className="p-6 flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xl font-medium"
                        onClick={() => handleSignIn("github")}
                        aria-label="Entrar com GitHub"
                        disabled={!!isLoading && isLoading !== "github"}
                    >
                        {isLoading === "github" ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                            <Github className="w-4 h-4" />
                        )}

                        {isLoading === "gitlab" ? "Entrando..." : "Entrar com GitHub"}
                    </Button>

                    {/* GitLab */}
                    <Button
                        size="lg"
                        className="p-6 flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white text-xl font-medium"
                        onClick={() => handleSignIn("gitlab")}
                        aria-label="Entrar com GitLab"
                        disabled={!!isLoading && isLoading !== "gitlab"}
                    >
                        {isLoading === "gitlab" ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                            <Gitlab className="w-4 h-4" />
                        )}
                        {isLoading === "gitlab" ? "Entrando..." : "Entrar com GitLab"}
                    </Button>

                    {/* Google */}
                    <Button
                        size="lg"
                        className="p-6 flex items-center gap-2 bg-white border text-gray-700 hover:bg-gray-100 text-xl font-medium"
                        onClick={() => handleSignIn("google")}
                        aria-label="Entrar com Google"
                        disabled={!!isLoading && isLoading !== "google"}
                    >
                        {isLoading === "google" ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                            <Chrome className="w-7 h-7 text-[#4285F4]" />
                        )}

                        {isLoading === "gitlab" ? "Entrando..." : "Entrar com Google"}
                    </Button>
                </div>

                <p className="text-xs text-center text-muted-foreground">
                    Ao entrar, você concorda com os <Link href="/terms-of-use" target="_blank" className="underline">termos de uso</Link>.
                </p>
            </DialogContent>
        </Dialog>
    )
}
