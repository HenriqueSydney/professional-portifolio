import { fetchBlogPosts } from "@/services/notion/fetchBlogPosts"
import { BlogListPostsFilter } from "./components/BlogListPostsFilter"
import { BookOpen } from "lucide-react"
import { fetchBlogPostsCategories } from "@/services/notion/fetchBlogPostsCategories"
import { NewsLetterSubscriptionForm } from "@/components/NewsLetterSubscriptionForm"
import { BlogPostCard } from "@/components/BlogPostCard"
import { BlogPostsList } from "./components/BlogPostsList"

type BlogPosts = {
  searchParams: Promise<{
    category?: "All" | "DevOps" | "Monitoring" | "Architecture" | "Security" | "Infrastructure" | "Frontend"
    query?: string
    nextCursor?: string
  }>
}

export default async function BlogPosts({ searchParams }: BlogPosts) {
  const { category, query } = await searchParams

  const selectedCategory: "All" | "DevOps" | "Monitoring" | "Architecture" | "Security" | "Infrastructure" | "Frontend" = category || 'All'


  const [blogCategories, highLigthedPostsResult, blogPostsResult] = await Promise.all([
    fetchBlogPostsCategories(),
    fetchBlogPosts({ numberOfPostsPerPage: 3, firstPageOnly: true }),
    fetchBlogPosts({ numberOfPostsPerPage: 6, category: selectedCategory, query })
  ])

  const [_, blogCategoriesSuccess] = blogCategories

  let categories: string[] = ["Todos"]
  if (blogCategoriesSuccess) {
    const categoriesName = blogCategoriesSuccess.map(category => category.name)
    categories = [...categories, ...categoriesName]
  }

  const [highLigthedPostsError, highLigthedPostsSuccess] = highLigthedPostsResult

  const highLigthedPosts = highLigthedPostsError ? [] : highLigthedPostsSuccess.blogPosts

  const [blogPostsError, blogPostsSuccess] = blogPostsResult

  const posts = blogPostsError ? [] : blogPostsSuccess.blogPosts

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
          {selectedCategory === "All" && (
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 flex items-center gap-2">
                <BookOpen className="h-8 w-8 text-primary" />
                Artigos em Destaque
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {highLigthedPosts && highLigthedPosts.filter(post => post.featured).map((post, index) => (
                  <BlogPostCard key={post.id} post={post} positionInList={index} transitionTimeFactor={0.1} />
                ))}
              </div>
            </div>
          )}

          <BlogPostsList hasMorePosts={blogPostsSuccess?.hasMore ?? false} postsNextCursor={blogPostsSuccess?.nextCursor} posts={posts} />


          <NewsLetterSubscriptionForm />
        </div>
      </section>
    </div>
  )
}