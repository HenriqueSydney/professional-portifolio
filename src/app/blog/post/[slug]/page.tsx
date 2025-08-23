import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Share2, BookOpen, User, Heart, MessageCircle, ArrowRight } from "lucide-react";

import { getBlogPostBySlug } from "@/services/notion/getBlogPostBySlug";
import Link from "next/link";
import { renderNotionBlock } from "@/util/renderNotionBlock";
import { TableOfContents } from "./components/TableOfContents";
import { NewsLetterForm } from "@/components/NewsLetterForm";


export default async function post({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const blogPost = await getBlogPostBySlug(slug);

  if (!blogPost) throw new Error('Post not found');

  // Mock de posts relacionados
  const relatedPosts = [
    {
      id: 2,
      slug: "monitoramento-grafana-prometheus",
      title: "Monitoramento de Aplicações com Grafana e Prometheus",
      category: "Monitoring",
      readTime: "12 min",
      date: "10 Jan 2025"
    },
    {
      id: 4,
      slug: "seguranca-devsecops-pratica",
      title: "Segurança em DevOps: DevSecOps na Prática",
      category: "Security",
      readTime: "10 min",
      date: "01 Jan 2025"
    },
    {
      id: 5,
      slug: "terraform-infrastructure-as-code",
      title: "Terraform e Infrastructure as Code",
      category: "Infrastructure",
      readTime: "14 min",
      date: "28 Dez 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {blogPost && <TableOfContents />}
      {/* Header */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <Link href="/blog">
            <Button variant="ghost" className="mb-6 hover:bg-primary/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Blog
            </Button>
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              {blogPost.categories.map((category) => (
                <Badge
                  key={category}
                  variant={category === "Todos" ? "default" : "outline"}
                  className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  {category}
                </Badge>
              ))}
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {blogPost.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {blogPost.readTime}
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4" />
                  {blogPost.views} visualizações
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {blogPost.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {blogPost.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold">{blogPost.author}</p>
                  <p className="text-sm text-muted-foreground">DevOps Engineer</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Heart className="w-4 h-4" />
                  {blogPost.likes}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MessageCircle className="w-4 h-4" />
                  {blogPost.comments}
                </div>
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Compartilhar
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {blogPost.tags.map((tag, index) => (
                <Badge key={index} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
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

            {/* Social Actions */}
            <div className="flex items-center justify-between mt-8 p-6 bg-card rounded-lg border">
              <div className="flex items-center gap-4">
                <Button variant="outline" className="gap-2">
                  <Heart className="w-4 h-4" />
                  Curtir ({blogPost.likes})
                </Button>
                <Button variant="outline" className="gap-2">
                  <Share2 className="w-4 h-4" />
                  Compartilhar
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Gostou do conteúdo? Deixe seu feedback!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Artigos <span className="bg-text-gradient bg-clip-text text-transparent">Relacionados</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
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
                        Ler artigo
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16">
        <NewsLetterForm />
      </section>
    </div>
  );

}