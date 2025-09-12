"use server";

import { getLocale } from "next-intl/server";

import { repositoryClient } from "@/lib/repositoryClient";
import { makePostsRepository } from "@/repositories/factories/makePostsRepository";
import { BlogPost, postsMapper } from "../../mappers/postsMapper";
import { fetchBlogPostsFromNotion } from "../notion/fetchBlogPostsFromNotion";

type GetBlogPostsParams = {
  firstPageOnly?: boolean;
  numberOfPostsPerPage?: number;
  nextCursor?: string;
  category?:
    | "All"
    | "DevOps"
    | "Monitoring"
    | "Architecture"
    | "Security"
    | "Infrastructure"
    | "Frontend";
  query?: string;
};

export type FetchBlogPostsData = {
  hasMore: boolean | null;
  nextCursor: string | null;
  blogPosts: BlogPost[];
};

type FetchBlogPostsResponse = [Error, null] | [null, FetchBlogPostsData];

export async function fetchBlogPosts(
  filters: GetBlogPostsParams
): Promise<FetchBlogPostsResponse> {
  const postsRepository = makePostsRepository();
  const {
    firstPageOnly,
    numberOfPostsPerPage = 6,
    nextCursor,
    category,
    query,
  } = filters;

  const tags = [
    firstPageOnly && `firstPage:${firstPageOnly}`,
    nextCursor && `cursor:${nextCursor}`,
    category && `category:${category}`,
    numberOfPostsPerPage && `limit:${numberOfPostsPerPage}`,
    query && `query:${query}`,
  ].filter((t): t is string => Boolean(t));

  const locale = await getLocale();

  const [postsError, posts] = await repositoryClient(
    "postsRepository.fetchPosts",
    () =>
      postsRepository.fetchPosts(
        { category, query, firstPageOnly, locale },
        {
          numberPerPage: numberOfPostsPerPage,
          page: nextCursor ? Number(nextCursor) : 1,
        }
      ),
    {
      cache: "no-cache",
      tags: ["blog-posts", ...tags],
    }
  );

  if (!postsError && posts) {
    const blogPosts = postsMapper(locale, posts, "repository");
    const data = {
      hasMore: posts.totalOfRecords > 0,
      nextCursor: nextCursor ? String(Number(nextCursor) + 1) : null,
      blogPosts,
    };

    return [null, data];
  }

  return fetchBlogPostsFromNotion(filters, locale, tags);
}
