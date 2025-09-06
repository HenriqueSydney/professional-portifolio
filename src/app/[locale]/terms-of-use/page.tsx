import { ArrowLeft, Calendar } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { getTermsOfUse } from "@/services/notion/getTermsOfUse";

import { Link } from "@/i18n/navigation";
import { renderNotionBlock } from "@/util/renderNotionBlock";

import NotFound from "../../not-found";
import { TableOfContents } from "../blog/post/[slug]/components/TableOfContents";

export default async function TermsOfUse() {
  const [t, termsOfUseResponse] = await Promise.all([
    getTranslations('termsOfUse'),
    getTermsOfUse()
  ])
  const [termsOfUseError, termsOfUseSuccess] = termsOfUseResponse

  if (termsOfUseError) return NotFound()

  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        <div className="absolute inset-0 z-0 h-full">
          <Image
            src={termsOfUseSuccess.cover}
            alt="Blog post cover image"
            fill
            priority
            className="object-cover object-center "
          />
          <div className="absolute inset-0 z-2 backdrop-blur-xs bg-gradient-to-br from-black/80 via-black/60 to-black/75" />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <Link href="/">
            <Button variant="ghost" className="mb-6 hover:bg-primary/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('backToHomepageButton')}
            </Button>
          </Link>

          <section className="relative z-10 pb-8 bg-gradient-to-br from-primary/10 via-background to-accent/10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-4 text-sm text-white/80 drop-shadow-md">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {termsOfUseSuccess.date} - {t('updatedAt')}
                    </div>
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white drop-shadow-lg " >
                  {termsOfUseSuccess.title}
                </h1>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="py-8">

        {termsOfUseSuccess && <TableOfContents />}
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12">
              <CardContent
                id='blog_content'
                className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-code:text-primary prose-pre:bg-muted prose-pre:border">
                {
                  termsOfUseSuccess?.content ? renderNotionBlock(termsOfUseSuccess.content) : "Carregando conteúdo..."
                }
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}