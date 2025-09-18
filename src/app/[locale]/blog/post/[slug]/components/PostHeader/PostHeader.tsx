import {
  Calendar,
  Clock,
  MessageCircleOff,
  MessageSquareCode,
  User,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

import { ShareButton } from "../SocialAction/ShareButton";

import { PostMetrics } from "./PostMetrics";
import { BlogPostBySlug } from "@/mappers/postMapper";
import { translationModelMapper } from "@/mappers/translationModelMapper";
import { getLocale } from "next-intl/server";
interface IPostHeader {
  blogPost: BlogPostBySlug;
}

export async function PostHeader({ blogPost }: IPostHeader) {
  const locale = await getLocale();
  return (
    <section className="relative z-10 pb-8 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Badge
              variant="outline"
              className="cursor-default bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              {blogPost.category}
            </Badge>

            <div
              className="flex items-center gap-4 text-sm text-white/80 drop-shadow-md"
              data-testid="post-publication-date"
            >
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {blogPost.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {blogPost.readTime}
              </div>
              <PostMetrics postId={blogPost.id} />
              {!blogPost.translatedModel && locale === "en" && (
                <div className="flex items-center gap-1 text-destructive font-bold">
                  <MessageCircleOff className="h-4 w-4" />
                  No translation available
                </div>
              )}
              {blogPost.translatedModel && (
                <div className="flex items-center gap-1 text-primary font-bold">
                  <MessageSquareCode className="h-4 w-4" />
                  Translated with{" "}
                  {translationModelMapper[blogPost.translatedModel]}
                </div>
              )}
            </div>
          </div>

          <h1
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white drop-shadow-lg"
            data-testid="post-title"
          >
            {blogPost.title}
          </h1>

          <p className="text-xl text-white/80 drop-shadow-md mb-8 leading-relaxed ">
            {`${blogPost.excerpt.substring(0, 247)}...`}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-white drop-shadow-lg ">
                  {blogPost.author}
                </p>
                <p className="text-sm text-white/80 drop-shadow-md">
                  Dev Fullstack / DevOps Engineer
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <ShareButton />
            </div>
          </div>

          <div
            className="flex flex-wrap gap-2 mt-6"
            data-testid="post-tags-container"
          >
            {blogPost.tags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="cursor-default bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
