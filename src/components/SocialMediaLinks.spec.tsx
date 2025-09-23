import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { SocialMediaLinks } from "./SocialMediaLinks";

// Mock das dependências
vi.mock("lucide-react", () => ({
  Github: ({ className }: { className?: string }) => (
    <div className={className} data-testid="github-icon">
      Github Icon
    </div>
  ),
  Linkedin: ({ className }: { className?: string }) => (
    <div className={className} data-testid="linkedin-icon">
      LinkedIn Icon
    </div>
  ),
  Instagram: ({ className }: { className?: string }) => (
    <div className={className} data-testid="instagram-icon">
      Instagram Icon
    </div>
  ),
  Facebook: ({ className }: { className?: string }) => (
    <div className={className} data-testid="facebook-icon">
      Facebook Icon
    </div>
  ),
}));

vi.mock("./ui/button", () => ({
  Button: ({ children, variant, size, className, asChild, ...props }: any) => {
    if (asChild && children) {
      return (
        <div data-testid="button-wrapper" className={className} {...props}>
          {children}
        </div>
      );
    }
    return (
      <button
        data-testid="button"
        data-variant={variant}
        data-size={size}
        className={className}
        {...props}
      >
        {children}
      </button>
    );
  },
}));

describe("SocialMediaLinks Component", () => {
  it("should render all social media links", () => {
    render(<SocialMediaLinks />);

    // Verifica se todos os links estão presentes
    expect(screen.getByLabelText("GitHub")).toBeInTheDocument();
    expect(screen.getByLabelText("LinkedIn")).toBeInTheDocument();
    expect(screen.getByLabelText("Instagram")).toBeInTheDocument();
    expect(screen.getByLabelText("Facebook")).toBeInTheDocument();
  });

  it("should render all social media icons", () => {
    render(<SocialMediaLinks />);

    // Verifica se todos os ícones estão renderizados
    expect(screen.getByTestId("github-icon")).toBeInTheDocument();
    expect(screen.getByTestId("linkedin-icon")).toBeInTheDocument();
    expect(screen.getByTestId("instagram-icon")).toBeInTheDocument();
    expect(screen.getByTestId("facebook-icon")).toBeInTheDocument();
  });

  it("should have correct href attributes for all links", () => {
    render(<SocialMediaLinks />);

    const githubLink = screen.getByLabelText("GitHub");
    const linkedinLink = screen.getByLabelText("LinkedIn");
    const instagramLink = screen.getByLabelText("Instagram");
    const facebookLink = screen.getByLabelText("Facebook");

    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/henriquesydney"
    );
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://linkedin.com/in/henriquesydney"
    );
    expect(instagramLink).toHaveAttribute(
      "href",
      "https://instagram.com/henriquesydney"
    );
    expect(facebookLink).toHaveAttribute(
      "href",
      "https://facebook.com/henriquesydney"
    );
  });

  it("should have correct accessibility attributes", () => {
    render(<SocialMediaLinks />);

    const links = [
      screen.getByLabelText("GitHub"),
      screen.getByLabelText("LinkedIn"),
      screen.getByLabelText("Instagram"),
      screen.getByLabelText("Facebook"),
    ];

    links.forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
      expect(link).toHaveAttribute("aria-label");
    });
  });

  it("should apply correct CSS classes to buttons", () => {
    render(<SocialMediaLinks />);

    const buttonWrappers = screen.getAllByTestId("button-wrapper");

    buttonWrappers.forEach((wrapper) => {
      expect(wrapper).toHaveClass(
        "hover:bg-primary",
        "hover:text-primary-foreground",
        "hover:shadow-glow",
        "transition-all",
        "duration-300"
      );
    });
  });

  it("should render icons with correct size classes", () => {
    render(<SocialMediaLinks />);

    const icons = [
      screen.getByTestId("github-icon"),
      screen.getByTestId("linkedin-icon"),
      screen.getByTestId("instagram-icon"),
      screen.getByTestId("facebook-icon"),
    ];

    icons.forEach((icon) => {
      expect(icon).toHaveClass("h-5", "w-5");
    });
  });

  it("should render buttons with correct props", () => {
    render(<SocialMediaLinks />);

    // Como estamos usando asChild, verificamos se os button wrappers existem
    const buttonWrappers = screen.getAllByTestId("button-wrapper");
    expect(buttonWrappers).toHaveLength(4);
  });

  it("should render social links in correct order", () => {
    render(<SocialMediaLinks />);

    const container = screen.getByTestId("social-container");
    const links = container?.querySelectorAll("a");

    expect(links).toHaveLength(4);
    expect(links?.[0]).toHaveAttribute("aria-label", "GitHub");
    expect(links?.[1]).toHaveAttribute("aria-label", "LinkedIn");
    expect(links?.[2]).toHaveAttribute("aria-label", "Instagram");
    expect(links?.[3]).toHaveAttribute("aria-label", "Facebook");
  });

  it("should open links in new tab", () => {
    render(<SocialMediaLinks />);

    const links = screen.getAllByRole("link");

    links.forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
    });
  });

  describe("Individual Social Links", () => {
    it("should render GitHub link correctly", () => {
      render(<SocialMediaLinks />);

      const githubLink = screen.getByLabelText("GitHub");
      const githubIcon = screen.getByTestId("github-icon");

      expect(githubLink).toHaveAttribute(
        "href",
        "https://github.com/henriquesydney"
      );
      expect(githubIcon).toBeInTheDocument();
    });

    it("should render LinkedIn link correctly", () => {
      render(<SocialMediaLinks />);

      const linkedinLink = screen.getByLabelText("LinkedIn");
      const linkedinIcon = screen.getByTestId("linkedin-icon");

      expect(linkedinLink).toHaveAttribute(
        "href",
        "https://linkedin.com/in/henriquesydney"
      );
      expect(linkedinIcon).toBeInTheDocument();
    });

    it("should render Instagram link correctly", () => {
      render(<SocialMediaLinks />);

      const instagramLink = screen.getByLabelText("Instagram");
      const instagramIcon = screen.getByTestId("instagram-icon");

      expect(instagramLink).toHaveAttribute(
        "href",
        "https://instagram.com/henriquesydney"
      );
      expect(instagramIcon).toBeInTheDocument();
    });

    it("should render Facebook link correctly", () => {
      render(<SocialMediaLinks />);

      const facebookLink = screen.getByLabelText("Facebook");
      const facebookIcon = screen.getByTestId("facebook-icon");

      expect(facebookLink).toHaveAttribute(
        "href",
        "https://facebook.com/henriquesydney"
      );
      expect(facebookIcon).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("should have proper ARIA labels", () => {
      render(<SocialMediaLinks />);

      expect(screen.getByLabelText("GitHub")).toBeInTheDocument();
      expect(screen.getByLabelText("LinkedIn")).toBeInTheDocument();
      expect(screen.getByLabelText("Instagram")).toBeInTheDocument();
      expect(screen.getByLabelText("Facebook")).toBeInTheDocument();
    });

    it("should have proper security attributes", () => {
      render(<SocialMediaLinks />);

      const links = screen.getAllByRole("link");

      links.forEach((link) => {
        expect(link).toHaveAttribute("rel", "noopener noreferrer");
      });
    });

    it("should be keyboard accessible", () => {
      render(<SocialMediaLinks />);

      const links = screen.getAllByRole("link");

      links.forEach((link) => {
        expect(link).toBeVisible();
        expect(link).not.toHaveAttribute("tabindex", "-1");
      });
    });
  });
});
