import { BookOpen } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { BlogPostCard } from "@/components/BlogPostCard";
import { NewsLetterSubscriptionForm } from "@/components/NewsLetterSubscriptionForm";

import { fetchBlogPosts } from "@/services/blog/fetchBlogPosts";
import { fetchBlogPostsCategories } from "@/services/notion/fetchBlogPostsCategories";

import { BlogListPostsFilter } from "./components/BlogListPostsFilter";
import { BlogPostsList } from "./components/BlogPostsList";
import { Suspense } from "react";

type BlogPosts = {
  searchParams: Promise<{
    category?:
      | "Todos"
      | "All"
      | "DevOps"
      | "Monitoring"
      | "Architecture"
      | "Security"
      | "Infrastructure"
      | "Frontend";
    query?: string;
    nextCursor?: string;
  }>;
};

export default async function BlogPosts({ searchParams }: BlogPosts) {
  const { category, query } = await searchParams;

  const selectedCategory:
    | "Todos"
    | "All"
    | "DevOps"
    | "Monitoring"
    | "Architecture"
    | "Security"
    | "Infrastructure"
    | "Frontend" = category || "All";

  const [t, blogCategories, highLigthedPostsResult, blogPostsResult] =
    await Promise.all([
      getTranslations("blog"),
      fetchBlogPostsCategories(),
      fetchBlogPosts({ numberOfPostsPerPage: 3, firstPageOnly: true }),
      fetchBlogPosts({
        numberOfPostsPerPage: 6,
        category: selectedCategory === "Todos" ? "All" : selectedCategory,
        query,
      }),
    ]);

  const [_, blogCategoriesSuccess] = blogCategories;

  let categories: string[] = [t("categories.all")];
  if (blogCategoriesSuccess) {
    const categoriesName = blogCategoriesSuccess.map(
      (category) => category.name
    );
    categories = [...categories, ...categoriesName];
  }

  const [highLigthedPostsError, highLigthedPostsSuccess] =
    highLigthedPostsResult;

  const highLigthedPosts = highLigthedPostsError
    ? []
    : highLigthedPostsSuccess.blogPosts;

  const [blogPostsError, blogPostsSuccess] = blogPostsResult;

  const posts = blogPostsError ? [] : blogPostsSuccess.blogPosts;

  return (
    <div className="min-h-screen bg-background">
      <section className="pt-24 mt-12 pb-4 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("title.beforeHighlight")}{" "}
              <span className="bg-text-gradient bg-clip-text text-transparent">
                {t("title.highlight")}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t("description")}
            </p>

            <Suspense fallback={<div>Loading blog...</div>}>
              <BlogListPostsFilter categories={categories} />
            </Suspense>
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
                {t("featuredPosts")}
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {highLigthedPosts &&
                  highLigthedPosts
                    .filter((post) => post.featured)
                    .map((post, index) => (
                      <BlogPostCard
                        key={post.id}
                        post={post}
                        positionInList={index}
                        transitionTimeFactor={0.1}
                      />
                    ))}
              </div>
            </div>
          )}

          <Suspense fallback={<div>Loading Blog List...</div>}>
            <BlogPostsList
              hasMorePosts={blogPostsSuccess?.hasMore ?? false}
              postsNextCursor={blogPostsSuccess?.nextCursor}
              posts={posts}
            />
          </Suspense>

          <NewsLetterSubscriptionForm />
        </div>
      </section>
    </div>
  );
}
