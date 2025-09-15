import { describe, it, expect, vi, beforeEach } from "vitest";
import { postsMapper } from "./postsMapper";
import * as notionUtils from "@notionhq/client";

// Mock de NotionDatabaseInfoOfPosts
const mockNotionPosts = {
  results: [
    {
      id: "notion-1",
      properties: {
        Slug: { rich_text: [{ plain_text: "my-post" }] },
        Title: { title: [{ plain_text: "My Post Title" }] },
        Excerpt: { rich_text: [{ plain_text: "Resumo do post" }] },
        Category: { select: { name: "Tech" } },
        Tags: { multi_select: [{ name: "JS" }, { name: "TS" }] },
        "Read Time": { number: 10 },
        Date: { date: { start: "2025-09-14T00:00:00.000Z" } },
        Homepage: { checkbox: true },
      },
      object: "page",
    },
  ],
};

// Mock de FetchPostsResponse (repositório)
const mockRepoPosts = {
  posts: [
    {
      notionId: "repo-1",
      slug: "repo-post",
      slug_en: "repo-post-en",
      title: "Repo Post Title",
      title_en: "Repo Post Title EN",
      excerpt_pt: "Resumo PT",
      excerpt_en: "Resumo EN",
      category: "Business",
      tags: ["API", "Node"],
      readTime: 15,
      createdAt: "2025-09-14T00:00:00.000Z",
      featured: true,
      translatedModel: null,
    },
  ],
};

describe("postsMapper", () => {
  beforeEach(() => {
    // Mocka o isFullPage para retornar sempre true
    vi.spyOn(notionUtils, "isFullPage").mockImplementation(() => true);
  });
  it("should map Notion posts correctly", () => {
    const posts = postsMapper("pt", mockNotionPosts, "notion");

    expect(posts).toHaveLength(1);

    const post = posts[0];
    expect(post.id).toBe("notion-1");
    expect(post.slug).toBe("my-post");
    expect(post.title).toBe("My Post Title");
    expect(post.excerpt).toBe("Resumo do post");
    expect(post.category).toBe("Tech");
    expect(post.tags).toEqual(["JS", "TS"]);
    expect(post.readTime).toBe("10m");
    expect(post.featured).toBe(true);
    expect(post.translatedModel).toBeNull();
  });

  it("should map repository posts correctly", () => {
    const posts = postsMapper("en", mockRepoPosts, "repository");
    expect(posts).toHaveLength(1);

    const post = posts[0];
    expect(post.id).toBe("repo-1");
    expect(post.slug).toBe("repo-post-en");
    expect(post.title).toBe("Repo Post Title EN");
    expect(post.excerpt).toBe("Resumo EN");
    expect(post.category).toBe("Business");
    expect(post.tags).toEqual(["API", "Node"]);
    expect(post.readTime).toBe("15m");
    expect(post.featured).toBe(true);
    expect(post.translatedModel).toBeNull();
  });
});
