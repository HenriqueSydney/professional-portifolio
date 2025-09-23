import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BlogPostCard } from "./index";
import { translationModelMapper } from "@/mappers/translationModelMapper";

// Mocks dos componentes e hooks que não queremos testar aqui
vi.mock("next-intl", () => ({
  useLocale: () => "en",
}));

vi.mock("./LinkToPost", () => ({
  LinkToPost: ({ slug }: { slug: string }) => (
    <div data-testid="link-to-post">{slug}</div>
  ),
}));

describe("BlogPostCard", () => {
  const mockPost = {
    id: "dsfasdf",
    tags: [],
    featured: true,
    title: "My Blog Post",
    category: "Tech",
    date: "2025-09-21",
    readTime: "5 min read",
    excerpt:
      "This is a short excerpt of the blog post that explains the main idea...",
    slug: "my-blog-post",
    translatedModel: null,
  };

  it("should render blog post card with basic information", () => {
    render(<BlogPostCard post={mockPost} />);

    // Categoria
    expect(screen.getByText(mockPost.category)).toBeInTheDocument();

    // Data e tempo de leitura
    expect(screen.getByText(mockPost.date)).toBeInTheDocument();
    expect(screen.getByText(mockPost.readTime)).toBeInTheDocument();

    // Título
    expect(screen.getByText(mockPost.title)).toBeInTheDocument();

    // Excerpt truncado
    expect(
      screen.getByText(`${mockPost.excerpt.substring(0, 247)}...`)
    ).toBeInTheDocument();

    // LinkToPost renderizado com slug correto
    expect(screen.getByTestId("link-to-post")).toHaveTextContent(mockPost.slug);

    // Mensagem de "No translation available" para locale "en" sem translatedModel
    expect(screen.getByText("No translation available")).toBeInTheDocument();
  });

  it("should show translated model info when translatedModel exists", () => {
    const translatedPost = { ...mockPost, translatedModel: "DEEPL" as const };
    render(<BlogPostCard post={translatedPost} />);

    // Mensagem de tradução
    expect(
      screen.getByText(
        `Translated with ${translationModelMapper[translatedPost.translatedModel]}`
      )
    ).toBeInTheDocument();
  });
});
