import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { InternalizationToggle } from "./InternalizationToggle";
import { Locale } from "next-intl";

// Mocks simples
vi.mock("next/navigation", () => ({
  useSearchParams: () => ({
    toString: () => "",
  }),
}));

vi.mock("next-intl", () => ({
  useLocale: vi.fn(() => "pt"),
}));

vi.mock("@/i18n/navigation", () => ({
  usePathname: () => "/test-path",
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
  }),
}));

vi.mock("@/lib/tailwindClassMerge", () => ({
  cn: (...classes: (string | undefined | boolean)[]) =>
    classes.filter(Boolean).join(" "),
}));

describe("InternalizationToggle", () => {
  it("should render PT and EN options", () => {
    render(<InternalizationToggle />);

    expect(screen.getByText("PT")).toBeInTheDocument();
    expect(screen.getByText("EN")).toBeInTheDocument();
  });

  it("should highlight PT as active when locale is pt", () => {
    render(<InternalizationToggle />);

    const ptElement = screen.getByText("PT");
    const enElement = screen.getByText("EN");

    expect(ptElement).toHaveClass("font-extrabold");
    expect(enElement).toHaveClass("font-medium");
  });

  it("should toggle slider position based on locale", async () => {
    const { useLocale } = await import("next-intl");

    // Test with EN locale
    vi.mocked(useLocale).mockReturnValue("en");

    const { rerender } = render(<InternalizationToggle />);

    const slider = document.querySelector(".translate-x-full");
    expect(slider).toBeInTheDocument();

    // Test with PT locale
    vi.mocked(useLocale).mockReturnValue("pt");
    rerender(<InternalizationToggle />);

    const sliderPt = document.querySelector(".translate-x-0");
    expect(sliderPt).toBeInTheDocument();
  });
});
