import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { LinkToPost } from "./LinkToPost";

// Mock do hook de tradução
vi.mock("next-intl", () => ({
  useTranslations: () => (key: string) => key,
}));

// Mock do Link (se necessário, mas Next.js Link funciona normalmente)
vi.mock("@/i18n/navigation", () => ({
  Link: ({ href, children }: any) => <a href={href}>{children}</a>,
}));

describe("LinkToPost", () => {
  it("should render link with correct href and button text", () => {
    const slug = "my-post-slug";
    render(<LinkToPost slug={slug} />);

    // Busca o botão pelo texto da tradução
    const button = screen.getByText("postCard.readPostButton");
    expect(button).toBeInTheDocument();

    // Verifica se o botão está dentro de um link com o href correto
    const link = button.closest("a");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", `/blog/post/${slug}`);
  });
});
