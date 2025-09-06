'use client'
import { Home, RefreshCcw } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "next-themes"
import { useEffect, useState } from "react"

import { Footer } from "@/components/Footer"
import { GoBackButton } from "@/components/GoBackButton"
import { Header } from "@/components/Header"
import { NavLinks } from "@/components/NavLinks"
import { Button } from "@/components/ui/button"

import { errorLogger } from "@/services/errorLogger"

// Error boundaries must be Client Components
import ERROR_IMAGE from '@/../public/error.svg'
import { prepareLogDataForLogger } from "@/util/prepareLogDataForLogger"
export default function GlobalError({
  error,
}: {
    error: Error & { digest?: string }
}) {
  const [errorLogged, setErrorLogged] = useState(false)

  useEffect(() => {
    if (!errorLogged) {
      // Log no console para debug local
      console.error('Global Error:', {
        message: error.message,
        stack: error.stack,
        digest: error.digest,
        timestamp: new Date().toISOString()
      })

      const logData = prepareLogDataForLogger({
        error,
        context: 'global-error',
        metadata: {
          errorBoundary: 'global',
          url: window.location.href,
          timestamp: new Date().toISOString()
        }
      })

      // Enviar para o servidor
      errorLogger(logData)

      setErrorLogged(true)
    }
  }, [error, errorLogged])
  return (
    <html>
      <body>
        <SessionProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            <div className="min-h-210 bg-gradient-to-br from-background via-background/95 to-primary/5 flex items-center justify-center px-4">
              <div className="max-w-[96rem] mx-auto grid lg:grid-cols-2 gap-16 items-center">
                {/* Left side - Image */}
                <div className="relative order-2 lg:order-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
                  <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 shadow-2xl">
                    <Image
                      src={ERROR_IMAGE}
                      alt="404 - Página não encontrada"
                      className="w-full h-auto rounded-xl object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="text-center lg:text-left order-1 lg:order-2 space-y-6">
                  <div className="space-y-4">
                    <h1 className="text-6xl lg:text-8xl font-bold bg-gradient-to-r from-primary via-20% via-primary to-primary bg-clip-text text-transparent">
                                            Opps!!
                    </h1>
                    <h2 className="text-2xl lg:text-3xl font-semibold text-foreground">
                                            Algo não previsto aconteceu
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-md mx-auto lg:mx-0">
                                            Ops! Tivemos um imprevisto aqui. Já estou verificando e logo tudo volta ao normal.
                                            Enquanto isso, que tal explorar outras áreas do meu portfólio?
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <Button asChild size="lg" className="group">
                        <Link href="/">
                          <Home className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                                                    Voltar ao Início
                        </Link>
                      </Button>
                      <Button variant='outline' asChild size="lg" className="group">
                        <button onClick={() => window.location.reload()}>
                          <RefreshCcw className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                                                    Tentar novamente
                        </button>
                      </Button>
                      <GoBackButton />

                    </div>

                    <div className="pt-4">
                      <p className="text-sm text-muted-foreground mb-3">
                                                Ou explore as seções principais:
                      </p>
                      <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                        <NavLinks
                          variant="notFoundPage"
                        />

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  )
}