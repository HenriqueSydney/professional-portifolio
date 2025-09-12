import { getLocale } from "next-intl/server";

import { getBlogPostBySlugFromNotion } from "../notion/getBlogPostBySlugNotion";
import { repositoryClient } from "@/lib/repositoryClient";
import { makePostsRepository } from "@/repositories/factories/makePostsRepository";
import { BlogPostBySlug, postMapper } from "../../mappers/postMapper";

type FetchBlogPostsBySlugResponse = [Error, null] | [null, BlogPostBySlug];

export async function getBlogPostBySlug(
  slug: string
): Promise<FetchBlogPostsBySlugResponse> {
  const postsRepository = makePostsRepository();

  const locale = await getLocale();

  const cacheTags = [`blog-post-${slug}`];

  const [postError, post] = await repositoryClient(
    "postsRepository.fetchPosts",
    () => postsRepository.findPostBySlug(slug, locale),
    {
      cache: "no-cache",
      tags: cacheTags,
    }
  );

  if (!postError && post) {
    const blogPosts = postMapper(locale, post, "repository");

    return [null, blogPosts];
  }

  return await getBlogPostBySlugFromNotion(slug, locale, cacheTags);
}
