"use client";
import {
  Calendar,
  Clock,
  MessageCircleOff,
  MessageSquareCode,
} from "lucide-react";

import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

import { LinkToPost } from "./LinkToPost";
import { BlogPost } from "@/mappers/postsMapper";
import { translationModelMapper } from "@/mappers/translationModelMapper";
import { useLocale } from "next-intl";

interface IBlogPostCard {
  post: BlogPost;
  positionInList?: number;
  transitionTimeFactor?: number;
}

export function BlogPostCard({
  post,
  positionInList = 0,
  transitionTimeFactor = 0.1,
}: IBlogPostCard) {
  const locale = useLocale();
  return (
    <Card
      className="flex flex-col h-full group hover:shadow-glow transition-all duration-300 hover:scale-105 animate-slide-up post-card"
      style={{ animationDelay: `${positionInList * transitionTimeFactor}s` }}
    >
      <CardHeader>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            <Badge variant="outline" className="text-xs">
              {post.category}
            </Badge>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </div>
          </div>
        </div>
        <CardTitle className="flex flex-col text-xl group-hover:text-primary transition-colors duration-300 leading-tight gap-2">
          {post.title}
          {!post.translatedModel && locale === "en" && (
            <div className="flex items-center gap-1 text-muted-foreground text-xs">
              <MessageCircleOff className="h-4 w-4" />
              No translation available
            </div>
          )}
          {post.translatedModel && (
            <div className="flex items-center gap-1 text-muted-foreground text-xs">
              <MessageSquareCode className="h-4 w-4" />
              Translated with {translationModelMapper[post.translatedModel]}
            </div>
          )}
        </CardTitle>
      </CardHeader>

      <CardContent className="h-full flex flex-col justify-between space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          {`${post.excerpt.substring(0, 247)}...`}
        </p>
        <LinkToPost slug={post.slug} />
      </CardContent>
    </Card>
  );
}
