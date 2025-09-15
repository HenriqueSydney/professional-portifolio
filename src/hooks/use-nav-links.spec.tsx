import React, { FC } from "react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render } from "@testing-library/react";
import { useNavLinks, NavItem } from "./use-nav-links";

// Mock next/navigation
vi.mock("next/navigation", () => ({
  usePathname: vi.fn(),
}));

// Mock next-intl
vi.mock("next-intl", () => ({
  useTranslations: vi.fn(),
}));

// Import the mocked functions
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

const mockUsePathname = vi.mocked(usePathname);
const mockUseTranslations = vi.mocked(useTranslations);

// Test component to use the hook
const TestComponent: FC = () => {
  const navLinks = useNavLinks();
  return (
    <div data-testid="nav-links">
      {navLinks.map((item, index) => (
        <div key={index} data-testid={`nav-item-${index}`}>
          <span data-testid={`href-${index}`}>{item.href}</span>
          <span data-testid={`label-${index}`}>{item.label}</span>
          <span data-testid={`type-${index}`}>{item.type}</span>
        </div>
      ))}
    </div>
  );
};

describe("useNavLinks", () => {
  beforeEach(() => {
    // Setup mock translation function that returns translated strings
    const mockT = vi.fn((key: string) => {
      const translations: Record<string, string> = {
        about: "About",
        blog: "Blog",
        projects: "Projects",
        certifications: "Certifications",
        skills: "Skills",
        experience: "Experience",
      };
      return translations[key] || key;
    });

    // useTranslations should return the translation function
    mockUseTranslations.mockReturnValue(mockT as any);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should return nav items with anchor type when pathname is '/'", () => {
    mockUsePathname.mockReturnValue("/");

    const { getByTestId } = render(<TestComponent />);

    // Check that we have the expected number of nav items
    const navItems = getByTestId("nav-links").children;
    expect(navItems).toHaveLength(6);

    // Test each nav item
    const expectedItems: Omit<NavItem, "label">[] = [
      { href: "#about", type: "anchor" },
      { href: "blog", type: "link" },
      { href: "#projects", type: "anchor" },
      { href: "#certifications", type: "anchor" },
      { href: "#skills", type: "anchor" },
      { href: "#experience", type: "anchor" },
    ];

    expectedItems.forEach((expectedItem, index) => {
      const href = getByTestId(`href-${index}`).textContent;
      const type = getByTestId(`type-${index}`).textContent;

      expect(href).toBe(expectedItem.href);
      expect(type).toBe(expectedItem.type);
    });

    // Verify useTranslations was called correctly
    expect(mockUseTranslations).toHaveBeenCalledWith("navLinks");
  });

  it("should return nav items with link type when pathname is not '/'", () => {
    mockUsePathname.mockReturnValue("/some-other-page");

    const { getByTestId } = render(<TestComponent />);

    // Check that we have the expected number of nav items
    const navItems = getByTestId("nav-links").children;
    expect(navItems).toHaveLength(6);

    // Test each nav item (blog should always be 'link', others should be 'link' when not on home)
    const expectedItems: Omit<NavItem, "label">[] = [
      { href: "#about", type: "link" },
      { href: "blog", type: "link" },
      { href: "#projects", type: "link" },
      { href: "#certifications", type: "link" },
      { href: "#skills", type: "link" },
      { href: "#experience", type: "link" },
    ];

    expectedItems.forEach((expectedItem, index) => {
      const href = getByTestId(`href-${index}`).textContent;
      const type = getByTestId(`type-${index}`).textContent;

      expect(href).toBe(expectedItem.href);
      expect(type).toBe(expectedItem.type);
    });
  });

  it("should use correct translation labels", () => {
    mockUsePathname.mockReturnValue("/");

    const { getByTestId } = render(<TestComponent />);

    const expectedLabels = [
      "About",
      "Blog",
      "Projects",
      "Certifications",
      "Skills",
      "Experience",
    ];

    expectedLabels.forEach((expectedLabel, index) => {
      const label = getByTestId(`label-${index}`).textContent;
      expect(label).toBe(expectedLabel);
    });
  });

  it("should handle different pathname values correctly", () => {
    const testPaths = ["/blog", "/about", "/contact", "/projects"];

    testPaths.forEach((path) => {
      mockUsePathname.mockReturnValue(path);

      const { getByTestId, unmount } = render(<TestComponent />);

      // All items except blog should be 'link' type when not on home page
      const expectedTypes = ["link", "link", "link", "link", "link", "link"];

      expectedTypes.forEach((expectedType, index) => {
        const type = getByTestId(`type-${index}`).textContent;
        expect(type).toBe(expectedType);
      });

      unmount();
    });
  });

  it("should call usePathname and useTranslations hooks", () => {
    mockUsePathname.mockReturnValue("/");

    render(<TestComponent />);

    expect(mockUsePathname).toHaveBeenCalled();
    expect(mockUseTranslations).toHaveBeenCalledWith("navLinks");
  });

  it("should return consistent structure regardless of pathname", () => {
    const paths = ["/", "/blog", "/other"];

    paths.forEach((path) => {
      mockUsePathname.mockReturnValue(path);

      const { getByTestId, unmount } = render(<TestComponent />);

      // Should always return 6 nav items
      const navItems = getByTestId("nav-links").children;
      expect(navItems).toHaveLength(6);

      // Should always have the same hrefs
      const expectedHrefs = [
        "#about",
        "blog",
        "#projects",
        "#certifications",
        "#skills",
        "#experience",
      ];

      expectedHrefs.forEach((expectedHref, index) => {
        const href = getByTestId(`href-${index}`).textContent;
        expect(href).toBe(expectedHref);
      });

      unmount();
    });
  });

  it("should handle custom translations", () => {
    mockUsePathname.mockReturnValue("/");

    // Setup custom translation function for this specific test
    const mockCustomT = vi.fn((key: string) => {
      const customTranslations: Record<string, string> = {
        about: "Sobre",
        blog: "Blog",
        projects: "Projetos",
        certifications: "Certificações",
        skills: "Habilidades",
        experience: "Experiência",
      };
      return customTranslations[key] || key;
    });

    // Override the mock for this test
    mockUseTranslations.mockReturnValue(mockCustomT as any);

    const { getByTestId } = render(<TestComponent />);

    const expectedLabels = [
      "Sobre",
      "Blog",
      "Projetos",
      "Certificações",
      "Habilidades",
      "Experiência",
    ];

    expectedLabels.forEach((expectedLabel, index) => {
      const label = getByTestId(`label-${index}`).textContent;
      expect(label).toBe(expectedLabel);
    });
  });
});
