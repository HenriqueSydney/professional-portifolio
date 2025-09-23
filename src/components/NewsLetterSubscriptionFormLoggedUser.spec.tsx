import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";

// ---- Mocks no topo antes de importar o componente ----
vi.mock("next-intl", () => ({
  useTranslations: () => (key: string) => key,
}));

// Mock do useToast com vi.fn() para podermos checar chamadas
const mockToastFn = vi.fn();
vi.mock("@/hooks/use-toast", () => ({
  useToast: vi.fn(() => ({
    toast: mockToastFn,
    dismiss: vi.fn(),
    toasts: [],
  })),
}));

// Mock da action
vi.mock("@/actions/NewsLetterSubscriptionAction", () => ({
  sendNewsLetterSubscriptionConfirmation: vi.fn(),
}));

// ---- Import do componente depois dos mocks ----
import { NewsLetterSubscriptionFormLoggedUser } from "./NewsLetterSubscriptionFormLoggedUser";
import { sendNewsLetterSubscriptionConfirmation } from "@/actions/NewsLetterSubscriptionAction";
import { useToast } from "@/hooks/use-toast";

describe("NewsLetterSubscriptionFormLoggedUser", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render newsletter form with basic elements", () => {
    render(<NewsLetterSubscriptionFormLoggedUser email="test@example.com" />);

    expect(screen.getByText("title")).toBeInTheDocument();
    expect(screen.getByText("description")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("button")).toBeInTheDocument();
  });

  it("should have email input with correct attributes", () => {
    render(<NewsLetterSubscriptionFormLoggedUser email="test@example.com" />);
    const emailInput = screen.getByRole("textbox");

    expect(emailInput).toHaveAttribute("type", "email");
    expect(emailInput).toHaveAttribute("placeholder", "placeholderEmail");
    expect(emailInput).toHaveValue("test@example.com"); // valor inicial passado por props
  });

  it("should render form element", () => {
    render(<NewsLetterSubscriptionFormLoggedUser email="test@example.com" />);
    expect(document.querySelector("form")).toBeInTheDocument();
  });

  it("should show success toast on successful submission", async () => {
    vi.mocked(sendNewsLetterSubscriptionConfirmation).mockResolvedValue({
      success: true,
      message: "Success",
    });

    render(<NewsLetterSubscriptionFormLoggedUser email="test@example.com" />);
    const emailInput = screen.getByRole("textbox");
    const form = document.querySelector("form")!;

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.submit(form);

    await waitFor(() => {
      expect(sendNewsLetterSubscriptionConfirmation).toHaveBeenCalledWith({
        email: "test@example.com",
      });
      expect(mockToastFn).toHaveBeenCalledWith({
        title: "toast.success.title",
        description: "toast.success.description",
        action: expect.any(Object),
      });
    });
  });

  it("should show error toast on failed submission", async () => {
    vi.mocked(sendNewsLetterSubscriptionConfirmation).mockResolvedValue({
      success: false,
      message: "Error",
    });

    render(<NewsLetterSubscriptionFormLoggedUser email="test@example.com" />);
    const emailInput = screen.getByRole("textbox");
    const form = document.querySelector("form")!;

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.submit(form);

    await waitFor(() => {
      expect(sendNewsLetterSubscriptionConfirmation).toHaveBeenCalledWith({
        email: "test@example.com",
      });
      expect(mockToastFn).toHaveBeenCalledWith({
        variant: "destructive",
        title: "toast.error.title",
        description: "toast.error.description",
        action: expect.any(Object),
      });
    });
  });
});
