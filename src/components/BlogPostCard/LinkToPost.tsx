'use client'

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

import { Button } from "../ui/button";

interface ILinkToPost {
    slug: string
}

export function LinkToPost({ slug }: ILinkToPost) {
  const t = useTranslations('homepage.blog')
  return (
    <Link href={`/blog/post/${slug}`} >
      <Button
        variant="outline"
        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
      >
        {t('postCard.readPostButton')}
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </Link>
  )
}