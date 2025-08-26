import { fetchBlogPosts } from "@/services/notion/fetchBlogPosts"
import { BlogListPostsFilter } from "./components/BlogListPostsFilter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BookOpen, Calendar, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { fetchBlogPostsCategories } from "@/services/notion/fetchBlogPostsCategories"

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
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
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
      <section className="py-16">
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
                  <Card
                    key={post.id}
                    className="group hover:shadow-glow transition-all duration-300 hover:scale-105 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="default">{post.category}</Badge>
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
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 leading-tight">
                        {post.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag: string) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <Link href={`/blog/post/${post.slug}`}>
                        <Button
                          variant="outline"
                          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                        >
                          Ler Artigo
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
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
                  <Card
                    key={post.id}
                    className="group hover:shadow-glow transition-all duration-300 hover:scale-105 animate-slide-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs">
                          {post.category}
                        </Badge>
                        {post.featured && (
                          <Badge variant="default" className="text-xs">
                            Destaque
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300 leading-tight">
                        {post.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {post.tags.slice(0, 2).map((tag: string) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </div>
                      </div>

                      <Link href={`/blog/post/${post.slug}`}>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="w-full justify-start p-0 h-auto text-primary hover:text-primary-foreground hover:bg-primary transition-all duration-300"
                        >
                          Ler mais
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <Card className="max-w-2xl mx-auto bg-card/50 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Quer ser notificado sobre novos artigos?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Receba em primeira mão os novos conteúdos sobre DevOps, desenvolvimento e tecnologias modernas.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    className="flex-1 px-4 py-2 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button className="hover:shadow-glow transition-all duration-300">
                    Inscrever-se
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}