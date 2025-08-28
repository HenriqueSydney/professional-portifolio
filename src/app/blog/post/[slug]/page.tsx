import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

import { getBlogPostBySlug } from "@/services/notion/getBlogPostBySlug";
import Link from "next/link";
import { renderNotionBlock } from "@/util/renderNotionBlock";
import { TableOfContents } from "./components/TableOfContents";
import { NewsLetterSubscriptionForm } from "@/components/NewsLetterSubscriptionForm";
import { SocialActions } from "./components/SocialActions";
import { PostHeader } from "./components/PostHeader";
import { RelatedPostsContainer } from "./components/RelatedPostsContainer";
import { Comments } from "./components/Comments";


export default async function post({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const [blogPostError, blogPost] = await getBlogPostBySlug(slug);

  if (blogPostError) throw new Error('Post not found');

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <Link href="/blog">
          <Button variant="ghost" className="mb-6 hover:bg-primary/10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Blog
          </Button>
        </Link>
      </div>
      {blogPost && <TableOfContents />}

      <PostHeader blogPost={blogPost} />

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12">
              <CardContent
                id='blog_content'
                className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-code:text-primary prose-pre:bg-muted prose-pre:border">
                {
                  blogPost?.content ? renderNotionBlock(blogPost.content) : "Carregando conteúdo..."
                }
              </CardContent>
            </Card>

            <SocialActions numberOfLikes={0} />

            <Comments />

          </div>
        </div>
      </section>
      <RelatedPostsContainer />

      {/* Newsletter CTA */}
      <section className="mb-16">
        <NewsLetterSubscriptionForm />
      </section>
    </div>
  );

}