"use client";

import { Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useState } from "react";

import { BlogPostCard } from "@/components/BlogPostCard";

import { fetchBlogPosts } from "@/services/blog/fetchBlogPosts";

import { useInfiniteScroll } from "@/hooks/use-infinite-scroll";
import { BlogPost } from "@/mappers/postsMapper";

interface IBlogPosts {
  posts: BlogPost[];
  hasMorePosts: boolean | null;
  postsNextCursor?: string | null;
}

export function BlogPostsList({
  posts,
  hasMorePosts,
  postsNextCursor,
}: IBlogPosts) {
  const t = useTranslations("blog.blogPostsList");
  const [allPosts, setAllPosts] = useState<BlogPost[]>(posts);
  const [hasMore, setHasMore] = useState<boolean | null>(hasMorePosts);
  const [nextCursor, setNextCursor] = useState(postsNextCursor);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const params = useSearchParams();

  const selectedCategory =
    (params.get("category") as
      | "Todos"
      | "DevOps"
      | "Monitoring"
      | "Architecture"
      | "Security"
      | "Infrastructure"
      | "Frontend") || "Todos";
  const query = params.get("query");

  useEffect(() => {
    setAllPosts(posts);
    setHasMore(hasMorePosts);
    setNextCursor(postsNextCursor);
    setError(null);
  }, [selectedCategory, query, posts, hasMorePosts, postsNextCursor]);

  const loadMorePosts = useCallback(async () => {
    if (isLoading || !hasMore || !nextCursor) return;

    setIsLoading(true);
    setError(null);

    try {
      const result = await fetchBlogPosts({
        numberOfPostsPerPage: 6,
        nextCursor,
        category: selectedCategory !== "Todos" ? selectedCategory : undefined,
        query: query ?? undefined,
      });

      const [error, success] = result;

      if (error) {
        setError(t("error.unexpected"));
        return;
      }

      if (success) {
        setAllPosts((prevPosts) => [...prevPosts, ...success.blogPosts]);
        setHasMore(success.hasMore);
        setNextCursor(success.nextCursor ?? undefined);
      }
    } catch (err) {
      setError(t("error.loadMore"));
      console.error("Error loading more posts:", err);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, hasMore, nextCursor, selectedCategory, query]);

  const sentinelRef = useInfiniteScroll({
    hasMore: hasMore ?? false,
    isLoading,
    onLoadMore: loadMorePosts,
  });

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-8">
        {selectedCategory === "Todos"
          ? t("title.all")
          : t("title.category", { category: selectedCategory })}
      </h2>
      {allPosts && allPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            {query &&
              t("noPosts.withQuery", {
                query: `"${query}"`,
                category: `"${selectedCategory}"`,
              })}
            {!query &&
              t("noPosts.withoutQuery", { category: `"${selectedCategory}"` })}
          </p>
        </div>
      )}

      {allPosts.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allPosts.map((post, index) => (
            <BlogPostCard
              key={post.id}
              post={post}
              positionInList={index}
              transitionTimeFactor={0.05}
            />
          ))}
        </div>
      )}
      <div
        ref={sentinelRef}
        className="h-10 flex items-center justify-center mt-20"
      >
        {isLoading && (
          <div className="flex items-center gap-2 text-muted-foreground">
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>{t("loading")}</span>
          </div>
        )}

        {error && (
          <div className="text-center py-4">
            <p className="text-red-500 mb-2">{error}</p>
            <button
              onClick={loadMorePosts}
              className="text-primary hover:text-primary/80 underline"
            >
              {t("error.retryButton")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
