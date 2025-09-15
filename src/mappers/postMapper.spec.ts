import { describe, it, expect } from "vitest";
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { postMapper } from "./postMapper";

describe("postMapper", () => {
  const defaultBlock: Partial<BlockObjectResponse> = {
    object: "block",
    id: "1",
    type: "paragraph",
    paragraph: {
      rich_text: [], // conteúdo vazio
      color: "default", // obrigatório
    },
  };

  it("should map a Notion post correctly", () => {
    const notionPost = {
      id: "notion123",
      properties: {
        Title: { title: [{ plain_text: "Título" }] },
        Cover: { url: "https://example.com/image.jpg" },
        Excerpt: { rich_text: [{ plain_text: "Resumo" }] },
        Category: { select: { name: "Tech" } },
        "Read Time": { number: 120 },
        Date: { date: { start: "2025-09-14T00:00:00.000Z" } },
        Homepage: { checkbox: true },
        Tags: { multi_select: [{ name: "tag1" }, { name: "tag2" }] },
      },
      block: {
        results: [defaultBlock],
      },
    };

    const mapped = postMapper("pt", notionPost, "notion");

    expect(mapped).toMatchObject({
      notionId: "notion123",
      title: "Título",
      cover: "https://example.com/image.jpg",
      excerpt: "Resumo",
      category: "Tech",
      featured: true,
      tags: ["tag1", "tag2"],
      content: [defaultBlock],
    });
    expect(mapped.readTime).toBe("2h"); // assumindo formatMinutesToHour
    expect(mapped.author).toBe("Henrique Sydney Ribeiro Lima");
  });

  it("should map a repository post correctly", () => {
    const repoPost = {
      id: 1,
      notionId: "repo123",
      title: "Repo Title",
      title_en: "Repo Title EN",
      coverUrl: "",
      excerpt_pt: "Resumo PT",
      excerpt_en: "Resumo EN",
      category: "Science",
      readTime: 90,
      createdAt: "2025-09-14T00:00:00.000Z",
      featured: false,
      translatedModel: {},
      ptBr: [defaultBlock],
      en: [defaultBlock],
      PostMetrics: {
        numberOfViews: 100,
        numberOfLikes: 10,
        totalOfComments: 5,
      },
      tags: ["tagA", "tagB"],
    };

    const mapped = postMapper("en", repoPost, "repository");

    expect(mapped).toMatchObject({
      id: 1,
      notionId: "repo123",
      title: "Repo Title",
      cover: expect.stringContaining("unsplash.com"), // default image
      excerpt: "Resumo PT",
      category: "Science",
      featured: false,
      tags: ["tagA", "tagB"],
      content: [defaultBlock],
    });

    expect(mapped.views).toBe(100);
    expect(mapped.likes).toBe(10);
    expect(mapped.comments).toBe(5);
    expect(mapped.translatedModel).toEqual(repoPost.translatedModel);
  });
});
