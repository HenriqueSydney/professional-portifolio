import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

import NOT_FOUND_IMAGE from '@/../public/not-found.svg'
import Image from "next/image";
import { GoBackButton } from "@/components/GoBackButton";
import { NavLinks } from "@/components/NavLinks";

export default function NotFound() {

  return (
    <div className="min-h-210 bg-gradient-to-br from-background via-background/95 to-primary/5 flex items-center justify-center px-4">
      <div className="max-w-[96rem] mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left side - Image */}
        <div className="relative order-2 lg:order-1">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
          <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 shadow-2xl">
            <Image
              src={NOT_FOUND_IMAGE}
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
              404
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-foreground">
              Página não encontrada
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto lg:mx-0">
              Oops! A página que você está procurando não existe ou foi movida.
              Que tal explorar outras áreas do meu portfólio?
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
  )
}