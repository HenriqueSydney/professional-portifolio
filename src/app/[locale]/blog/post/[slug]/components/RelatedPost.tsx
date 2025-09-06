import { ArrowRight, Calendar, Clock } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Link } from "@/i18n/navigation";

interface IRelatedPost {
    post: {
        id: number;
        slug: string;
        title: string;
        category: string;
        readTime: string;
        date: string;
    }
}

export async function RelatedPost({ post }: IRelatedPost) {
  const t = await getTranslations('blog.post')
  return (
    <Card
      key={post.id}
      className="group hover:shadow-glow transition-all duration-300 hover:scale-105"
    >
      <CardContent className="p-6">
        <Badge variant="outline" className="mb-3">
          {post.category}
        </Badge>

        <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
          {post.title}
        </h3>

        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {post.date}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {post.readTime}
          </div>
        </div>

        <Link href={`/blog/${post.slug}`}>
          <Button variant="ghost" className="w-full justify-start p-0 h-auto text-primary hover:text-primary-foreground hover:bg-primary transition-all duration-300">
            {t('relatedPosts.invitationToReadArticle')}
            <ArrowRight className="w-3 h-3 ml-1" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}