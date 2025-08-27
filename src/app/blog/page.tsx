import { fetchBlogPosts } from "@/services/notion/fetchBlogPosts"
import { BlogListPostsFilter } from "./components/BlogListPostsFilter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BookOpen, Calendar, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { fetchBlogPostsCategories } from "@/services/notion/fetchBlogPostsCategories"
import { NewsLetterSubscriptionForm } from "@/components/NewsLetterSubscriptionForm"
import { BlogPostCard } from "@/components/BlogPostCard"

type BlogPosts = {
  searchParams: {
    category?: "Todos" | "DevOps" | "Monitoring" | "Architecture" | "Security" | "Infrastructure" | "Frontend"
    query?: string
    favorites?: string
    fixed?: string
    page?: string
  }
}

export default async function BlogPosts({ searchParams }: BlogPosts) {
  const { category, query, favorites, fixed, page } = await searchParams

  const selectedCategory: "Todos" | "DevOps" | "Monitoring" | "Architecture" | "Security" | "Infrastructure" | "Frontend" = category || 'Todos'
  const favoritesBool = favorites === 'true'
  const fixedBool = fixed === 'true'
  const pageNumber = Number(page) || 1

  const [blogCategories, blogPostsResult] = await Promise.all([
    fetchBlogPostsCategories(),
    fetchBlogPosts({ numberOfPostsPerPage: 6, firstPageOnly: true })
  ])

  const [_, blogCategoriesSuccess] = blogCategories

  let categories: string[] = ["Todos"]
  if (blogCategoriesSuccess) {
    const categoriesName = blogCategoriesSuccess.map(category => category.name)
    categories = [...categories, ...categoriesName]
  }

  const [blogPostsError, blogPosts] = blogPostsResult

  const filteredPosts = blogPostsError ? [] : blogPosts

  return (
    <div className="min-h-screen bg-background">
      <section className="pt-24 mt-12 pb-4 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog & <span className="bg-text-gradient bg-clip-text text-transparent">Artigos</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Compartilhando conhecimento sobre desenvolvimento, DevOps e tecnologias modernas
            </p>

            <BlogListPostsFilter categories={categories} />
          </div>
        </div>
      </section>
      <section className="py-4">
        <div className="container mx-auto px-4">
          {/* Featured Posts */}
          {selectedCategory === "Todos" && (
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 flex items-center gap-2">
                <BookOpen className="h-8 w-8 text-primary" />
                Artigos em Destaque
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {blogPosts && blogPosts.filter(post => post.featured).map((post, index) => (
                  <BlogPostCard key={post.id} post={post} positionInList={index} transitionTimeFactor={0.1} />
                ))}
              </div>
            </div>
          )}

          {/* All Posts */}
          <div>
            <h2 className="text-3xl font-semibold mb-8">
              {selectedCategory === "Todos" ? "Todos os Artigos" : `Artigos sobre ${selectedCategory}`}
            </h2>
            {filteredPosts && filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  {query && <>Nenhum artigo encontrado para &quot;{query}&quot; na categoria &quot;{selectedCategory}&quot;.</>}
                  {!query && <>Nenhum artigo encontrado na categoria &quot;{selectedCategory}&quot;.</>}
                </p>
              </div>
            )}

            {filteredPosts.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post, index) => (
                  <BlogPostCard key={post.id} post={post} positionInList={index} transitionTimeFactor={0.05} />
                ))}
              </div>
            )}
          </div>
          <NewsLetterSubscriptionForm />
        </div>
      </section>
    </div>
  )
}