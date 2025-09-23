import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { Header } from "../Header";

// Mocks
vi.mock("lucide-react", () => ({
  Menu: ({ className }: { className?: string }) => (
    <div data-testid="menu-icon" className={className} />
  ),
  X: ({ className }: { className?: string }) => (
    <div data-testid="x-icon" className={className} />
  ),
}));

vi.mock("next-auth/react", () => ({
  useSession: vi.fn(() => ({ data: null })),
}));

vi.mock("@/components/ui/button", () => ({
  Button: ({ children, onClick, variant, size, className, ...props }: any) => (
    <button
      onClick={onClick}
      className={className}
      data-variant={variant}
      data-size={size}
      {...props}
    >
      {children}
    </button>
  ),
}));

vi.mock("../NavLinks", () => ({
  NavLinks: ({ variant, setIsMobileMenuOpen }: any) => (
    <div data-testid={`nav-links-${variant}`}>Nav Links {variant}</div>
  ),
}));

vi.mock("./InternalizationToggle", () => ({
  InternalizationToggle: () => <div data-testid="intl-toggle">Intl Toggle</div>,
}));

vi.mock("./LoginDialog", () => ({
  LoginDialog: () => <div data-testid="login-dialog">Login Dialog</div>,
}));

vi.mock("./ThemeToggle", () => ({
  ThemeToggle: () => <div data-testid="theme-toggle">Theme Toggle</div>,
}));

vi.mock("./UserMenu", () => ({
  UserMenu: ({ session }: any) => <div data-testid="user-menu">User Menu</div>,
}));

describe("Header", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Mock window.scrollY
    Object.defineProperty(window, "scrollY", { value: 0, writable: true });
  });

  it("should render brand name and basic elements", () => {
    render(<Header />);

    expect(screen.getByText("Henrique Lima.dev")).toBeInTheDocument();
    expect(screen.getByTestId("theme-toggle")).toBeInTheDocument();
    expect(screen.getByTestId("intl-toggle")).toBeInTheDocument();
  });

  it("should show login dialog when no session", () => {
    render(<Header />);

    expect(screen.getByTestId("login-dialog")).toBeInTheDocument();
    expect(screen.queryByTestId("user-menu")).not.toBeInTheDocument();
  });

  it("should show user menu when session exists", async () => {
    const { useSession } = await import("next-auth/react");
    vi.mocked(useSession).mockReturnValue({
      data: {
        user: { name: "Test", email: "test@test.com" },
        expires: "2024-12-31",
      },
    } as any);

    render(<Header />);

    expect(screen.getByTestId("user-menu")).toBeInTheDocument();
    expect(screen.queryByTestId("login-dialog")).not.toBeInTheDocument();
  });

  it("should toggle mobile menu when button is clicked", () => {
    render(<Header />);

    // Initially shows Menu icon and mobile menu is closed
    expect(screen.getByTestId("menu-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("nav-links-mobile")).not.toBeInTheDocument();

    // Click mobile menu button
    const mobileButton = screen.getByTestId("menu-icon").closest("button")!;
    fireEvent.click(mobileButton);

    // Should show X icon and mobile nav
    expect(screen.getByTestId("x-icon")).toBeInTheDocument();
    expect(screen.getByTestId("nav-links-mobile")).toBeInTheDocument();
  });
});
