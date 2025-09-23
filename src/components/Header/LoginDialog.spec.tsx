import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { LoginDialog } from "./LoginDialog";

// Mocks simples
vi.mock("lucide-react", () => ({
  Chrome: () => <div data-testid="chrome-icon" />,
  Github: () => <div data-testid="github-icon" />,
  Gitlab: () => <div data-testid="gitlab-icon" />,
  Loader2: ({ className }: { className?: string }) => (
    <div data-testid="loader-icon" className={className} />
  ),
}));

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

vi.mock("next-auth/react", () => ({
  signIn: vi.fn(),
}));

vi.mock("next-intl", () => ({
  useTranslations: () => (key: string) => key,
}));

vi.mock("@/components/ui/button", () => ({
  Button: ({ children, onClick, disabled, className, ...props }: any) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={className}
      data-testid={props["aria-label"] || "button"}
      {...props}
    >
      {children}
    </button>
  ),
}));

vi.mock("@/components/ui/dialog", () => ({
  Dialog: ({ children }: any) => <div data-testid="dialog">{children}</div>,
  DialogContent: ({ children, className }: any) => (
    <div data-testid="dialog-content" className={className}>
      {children}
    </div>
  ),
  DialogHeader: ({ children, className }: any) => (
    <div data-testid="dialog-header" className={className}>
      {children}
    </div>
  ),
  DialogTitle: ({ children, className }: any) => (
    <h2 data-testid="dialog-title" className={className}>
      {children}
    </h2>
  ),
  DialogDescription: ({ children, className }: any) => (
    <p data-testid="dialog-description" className={className}>
      {children}
    </p>
  ),
}));

vi.mock("@radix-ui/react-dialog", () => ({
  Trigger: ({ children }: any) => (
    <div data-testid="dialog-trigger">{children}</div>
  ),
}));

vi.mock("@/lib/tailwindClassMerge", () => ({
  cn: (...classes: (string | undefined | boolean)[]) =>
    classes.filter(Boolean).join(" "),
}));

describe("LoginDialog", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render dialog with login button and providers", () => {
    render(<LoginDialog />);

    expect(screen.getByText("loginDialog.button")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("loginDialog.description")).toBeInTheDocument();

    // Check all provider buttons
    expect(
      screen.getByTestId("loginDialog.providers.github")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("loginDialog.providers.gitlab")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("loginDialog.providers.google")
    ).toBeInTheDocument();
  });

  it("should call signIn when provider button is clicked", async () => {
    const { signIn } = await import("next-auth/react");
    vi.mocked(signIn).mockResolvedValue(undefined as any);

    render(<LoginDialog />);

    const githubButton = screen.getByTestId("loginDialog.providers.github");
    fireEvent.click(githubButton);

    expect(signIn).toHaveBeenCalledWith("github");
  });

  it("should show loading state when signing in", async () => {
    const { signIn } = await import("next-auth/react");
    vi.mocked(signIn).mockImplementation(
      () => new Promise((resolve) => setTimeout(resolve, 100))
    );

    render(<LoginDialog />);

    const githubButton = screen.getByTestId("loginDialog.providers.github");
    fireEvent.click(githubButton);

    // Should show loading state
    expect(screen.getByTestId("loader-icon")).toBeInTheDocument();
    expect(
      screen.getByText("loginDialog.providers.loading")
    ).toBeInTheDocument();

    // Other buttons should be disabled
    const gitlabButton = screen.getByTestId("loginDialog.providers.gitlab");
    expect(gitlabButton).toBeDisabled();

    // Wait for loading to complete
    await waitFor(() => {
      expect(screen.queryByTestId("loader-icon")).not.toBeInTheDocument();
    });
  });

  it("should render terms link with correct attributes", () => {
    render(<LoginDialog />);

    const termsLink = screen.getByRole("link");
    expect(termsLink).toHaveAttribute("href", "/terms-of-use");
    expect(termsLink).toHaveAttribute("target", "_blank");
    expect(termsLink).toHaveClass("underline");
    expect(termsLink).toHaveTextContent("loginDialog.termsLink");
  });
});
