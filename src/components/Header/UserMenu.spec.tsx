import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { Session } from "next-auth";
import { UserMenu } from "./UserMenu";
import { Role } from "@/generated/prisma";

// Mocks
vi.mock("lucide-react", () => ({
  ChevronDown: ({ className }: { className?: string }) => (
    <div data-testid="chevron-down" className={className} />
  ),
  LogOut: ({ className }: { className?: string }) => (
    <div data-testid="logout-icon" className={className} />
  ),
}));

vi.mock("next-auth/react", () => ({
  signOut: vi.fn(),
}));

vi.mock("next-intl", () => ({
  useTranslations: () => (key: string) => key,
}));

vi.mock("@/components/ui/avatar", () => ({
  Avatar: ({ children, className }: any) => (
    <div data-testid="avatar" className={className}>
      {children}
    </div>
  ),
  AvatarFallback: ({ children }: any) => (
    <div data-testid="avatar-fallback">{children}</div>
  ),
  AvatarImage: ({ src, alt }: any) => (
    <img data-testid="avatar-image" src={src} alt={alt} />
  ),
}));

vi.mock("@/components/ui/dropdown-menu", () => ({
  DropdownMenu: ({ children }: any) => (
    <div data-testid="dropdown-menu">{children}</div>
  ),
  DropdownMenuContent: ({ children, className }: any) => (
    <div data-testid="dropdown-content" className={className}>
      {children}
    </div>
  ),
  DropdownMenuItem: ({ children, onClick, className }: any) => (
    <div data-testid="dropdown-item" onClick={onClick} className={className}>
      {children}
    </div>
  ),
  DropdownMenuLabel: ({ children, className }: any) => (
    <div data-testid="dropdown-label" className={className}>
      {children}
    </div>
  ),
  DropdownMenuSeparator: () => <hr data-testid="dropdown-separator" />,
  DropdownMenuTrigger: ({ children }: any) => (
    <div data-testid="dropdown-trigger">{children}</div>
  ),
}));

vi.mock("../ui/button", () => ({
  Button: ({ children, variant, className, ...props }: any) => (
    <button data-testid="menu-button" className={className} {...props}>
      {children}
    </button>
  ),
}));

describe("UserMenu", () => {
  const mockSession: Session = {
    user: {
      id: "asjflkfjkalsçf",
      name: "John Doe",
      email: "john@example.com",
      image: "https://example.com/avatar.jpg",
      role: Role.ADMIN,
    },
    expires: "2024-12-31",
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render user information correctly", () => {
    render(<UserMenu session={mockSession} />);

    const userNames = screen.getAllByText("John Doe");
    expect(userNames).toHaveLength(2); // aparece no trigger e no dropdown

    expect(screen.getByText("john@example.com")).toBeInTheDocument();

    const avatarImages = screen.getAllByTestId("avatar-image");
    expect(avatarImages[0]).toHaveAttribute(
      "src",
      "https://example.com/avatar.jpg"
    );
    expect(avatarImages[0]).toHaveAttribute("alt", "John Doe avatar");
  });

  it("should generate correct fallback avatar for users without image", () => {
    const sessionWithoutImage: Session = {
      ...mockSession,
      user: { ...mockSession.user, image: null },
    };

    render(<UserMenu session={sessionWithoutImage} />);

    const fallbackAvatars = screen.getAllByText("J D");
    expect(fallbackAvatars).toHaveLength(2); // aparece no trigger e no dropdown
  });

  it("should handle single name correctly", () => {
    const sessionSingleName: Session = {
      ...mockSession,
      user: { ...mockSession.user, name: "Madonna" },
    };

    render(<UserMenu session={sessionSingleName} />);

    // O componente duplica "Madonna" quando há apenas um nome
    const userNames = screen.getAllByText("Madonna Madonna");
    expect(userNames).toHaveLength(2);

    const fallbackAvatars = screen.getAllByText("M M");
    expect(fallbackAvatars).toHaveLength(2);
  });

  it("should call signOut when logout button is clicked", async () => {
    const { signOut } = await import("next-auth/react");

    render(<UserMenu session={mockSession} />);

    const logoutButton = screen.getByTestId("dropdown-item");
    fireEvent.click(logoutButton);

    expect(signOut).toHaveBeenCalled();
  });
});
