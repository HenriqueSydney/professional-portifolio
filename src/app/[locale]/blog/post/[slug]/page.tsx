import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { NewsLetterSubscriptionForm } from "@/components/NewsLetterSubscriptionForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { getBlogPostBySlug } from "@/services/blog/getBlogPostBySlug";

import { Link } from "@/i18n/navigation";
import { renderNotionBlock } from "@/util/renderNotionBlock";

import { CommentsContainer } from "./components/Comments/CommentsContainer";
import { PostHeader } from "./components/PostHeader/PostHeader";
import { SocialActionContainer } from "./components/SocialAction/SocialActionContainer";
import { TableOfContents } from "./components/TableOfContents";

export default async function post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [t, blogPostResponse] = await Promise.all([
    getTranslations("blog.post"),
    getBlogPostBySlug(slug),
  ]);

  const [blogPostError, blogPost] = blogPostResponse;

  if (blogPostError) throw new Error(t("notFound"));

  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        <div className="absolute inset-0 z-0 h-full">
          <Image
            src={blogPost.cover}
            alt={t("imageAlt")}
            fill
            priority
            className="object-cover object-center "
          />
          <div className="absolute inset-0 z-2 backdrop-blur-xs bg-gradient-to-br from-black/80 via-black/60 to-black/75" />
        </div>
        <div className="relative z-10 container mx-auto px-4 pt-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <Link href="/blog">
            <Button variant="ghost" className="mb-6 hover:bg-primary/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t("backToBlog")}
            </Button>
          </Link>
          <PostHeader blogPost={blogPost} />
        </div>
      </div>

      {blogPost && <TableOfContents />}

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12">
              <CardContent
                id="blog_content"
                className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-code:text-primary prose-pre:bg-muted prose-pre:border"
              >
                {blogPost?.content
                  ? renderNotionBlock(blogPost.content)
                  : t("loadingContent")}
              </CardContent>
            </Card>

            <SocialActionContainer postId={blogPost.id} />

            <CommentsContainer postId={blogPost.id} />
          </div>
        </div>
      </section>
      {/* <RelatedPostsContainer /> */}

      {/* Newsletter CTA */}
      <section className="mb-16">
        <NewsLetterSubscriptionForm />
      </section>
    </div>
  );
}
