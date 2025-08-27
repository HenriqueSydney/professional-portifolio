import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { fetchBlogPosts } from "@/services/notion/fetchBlogPosts";
import Link from "next/link";
import { fetchBlogPostsCategories } from "@/services/notion/fetchBlogPostsCategories";
import { NewsLetterSubscriptionForm } from "@/components/NewsLetterSubscriptionForm";
import { BlogPostCard } from "@/components/BlogPostCard";

export async function Blog() {


  const [blogCategories, blogPosts] = await Promise.all([
    fetchBlogPostsCategories(),
    fetchBlogPosts({ numberOfPostsPerPage: 6, firstPageOnly: true })
  ])

  const [_, blogCategoriesSuccess] = blogCategories

  let categories: string[] | undefined
  if (blogCategoriesSuccess) {
    const categoriesName = blogCategoriesSuccess.map(category => category.name)
    categories = ["Todos", ...categoriesName]
  }

  const [__, blogPostsSuccess] = blogPosts

  return (
    <section id="blog" className="py-15 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Blog & <span className="bg-text-gradient bg-clip-text text-transparent">Artigos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Compartilhando conhecimento sobre desenvolvimento, DevOps e tecnologias modernas
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-slide-up">
          {categories && categories.map((category) => (
            <Link key={category} href={`/blog?category=${category}`}>
              <Button
                variant={category === "Todos" ? "default" : "outline"}
                size="sm"
                className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                {category}
              </Button>
            </Link>
          ))}
        </div>

        {/* Featured Posts */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            Artigos em Destaque
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {blogPostsSuccess && blogPostsSuccess.filter(post => post.featured).map((post, index) => (
              <BlogPostCard key={post.id} post={post} positionInList={index} />
            ))}
          </div>
        </div>

        {/* All Posts */}
        <div>
          <h3 className="text-2xl font-semibold mb-8">Últimos artigos</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPostsSuccess && blogPostsSuccess.map((post, index) => (
              <BlogPostCard key={post.id} post={post} positionInList={index} transitionTimeFactor={0.05} />
            ))}
          </div>
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Link href='/blog'>
            <Button
              variant="outline"
              size="lg"
              className="bg-primary hover:bg-primary/90 shadow-glow hover:shadow-glow-lg transition-all duration-300">
              <BookOpen className="w-5 h-5 mr-2" />
              Conferir outros Posts
            </Button>
          </Link>
        </div>
        <NewsLetterSubscriptionForm />
      </div>
    </section>
  );
}