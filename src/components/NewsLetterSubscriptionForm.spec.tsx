import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";

// ---- Mocks no topo antes de importar o componente ----
vi.mock("next-intl", () => ({
  useTranslations: () => (key: string) => key,
}));

const mockToastFn = vi.fn(); // guarda para verificar chamadas

vi.mock("@/hooks/use-toast", () => ({
  useToast: vi.fn(() => ({
    toast: mockToastFn,
    dismiss: vi.fn(),
    toasts: [],
  })),
}));

vi.mock("@/actions/NewsLetterSubscriptionAction", () => ({
  sendNewsLetterSubscriptionConfirmation: vi.fn(),
}));

// ---- Agora importamos o componente e os mocks para sobrescrever ----
import { NewsLetterSubscriptionForm } from "./NewsLetterSubscriptionForm";
import { sendNewsLetterSubscriptionConfirmation } from "@/actions/NewsLetterSubscriptionAction";
import { useToast } from "@/hooks/use-toast";

describe("NewsLetterSubscriptionForm", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render newsletter form with basic elements", () => {
    render(<NewsLetterSubscriptionForm />);

    expect(screen.getByText("title")).toBeInTheDocument();
    expect(screen.getByText("description")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("button")).toBeInTheDocument();
  });

  it("should have email input with correct attributes", () => {
    render(<NewsLetterSubscriptionForm />);

    const emailInput = screen.getByRole("textbox");
    expect(emailInput).toHaveAttribute("type", "email");
    expect(emailInput).toHaveAttribute("placeholder", "placeholderEmail");
  });

  it("should render form element", () => {
    render(<NewsLetterSubscriptionForm />);
    expect(document.querySelector("form")).toBeInTheDocument();
  });

  it("should show success toast on successful submission", async () => {
    // Mock da action
    vi.mocked(sendNewsLetterSubscriptionConfirmation).mockResolvedValue({
      success: true,
      message: "Success",
    });

    // Mock do toast
    const mockToast = vi.fn();
    vi.mocked(useToast).mockReturnValue({
      toast: mockToast,
      dismiss: vi.fn(),
      toasts: [],
    });

    render(<NewsLetterSubscriptionForm />);

    const emailInput = screen.getByRole("textbox");
    const form = document.querySelector("form")!;

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.submit(form);

    await waitFor(() => {
      expect(sendNewsLetterSubscriptionConfirmation).toHaveBeenCalledWith({
        email: "test@example.com",
      });
      expect(mockToast).toHaveBeenCalledWith({
        title: "toast.success.title",
        description: "toast.success.description",
        action: expect.any(Object),
      });
    });
  });

  it("should show error toast on failed submission", async () => {
    // Mock da action
    vi.mocked(sendNewsLetterSubscriptionConfirmation).mockResolvedValue({
      success: false,
      message: "Error",
    });

    // Mock do toast
    const mockToast = vi.fn();
    vi.mocked(useToast).mockReturnValue({
      toast: mockToast,
      dismiss: vi.fn(),
      toasts: [],
    });

    render(<NewsLetterSubscriptionForm />);

    const emailInput = screen.getByRole("textbox");
    const form = document.querySelector("form")!;

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.submit(form);

    await waitFor(() => {
      expect(sendNewsLetterSubscriptionConfirmation).toHaveBeenCalled();
      expect(mockToast).toHaveBeenCalledWith({
        variant: "destructive",
        title: "toast.error.title",
        description: "toast.error.description",
        action: expect.any(Object),
      });
    });
  });
});
