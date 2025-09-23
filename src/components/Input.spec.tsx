import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { createRef } from "react";
import { FieldError } from "react-hook-form";
import { Input } from "./Input";

// Mocks
vi.mock("@/lib/tailwindClassMerge", () => ({
  cn: (...classes: (string | undefined | boolean)[]) =>
    classes.filter(Boolean).join(" "),
}));

vi.mock("./ui/label", () => ({
  Label: ({ children, htmlFor, ...props }: any) => (
    <label data-testid="label" htmlFor={htmlFor} {...props}>
      {children}
    </label>
  ),
}));

vi.mock("./ErrorMessage", () => ({
  ErrorMessage: ({ errorMessage }: { errorMessage?: string }) =>
    errorMessage ? <div data-testid="error-message">{errorMessage}</div> : null,
}));

describe("Input Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render input with label when provided", () => {
    render(<Input label="Nome" name="name" placeholder="Digite seu nome" />);

    const input = screen.getByRole("textbox");
    const label = screen.getByTestId("label");

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("placeholder", "Digite seu nome");
    expect(input).toHaveAttribute("name", "name");
    expect(label).toHaveTextContent("Nome");
    expect(label).toHaveAttribute("for", "name");
  });

  it("should render with error styles and message when error is provided", () => {
    const error: FieldError = {
      type: "required",
      message: "Este campo é obrigatório",
    };

    render(<Input error={error} name="email" />);

    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("border-destructive", "shadow-glow");
    expect(screen.getByTestId("error-message")).toHaveTextContent(
      "Este campo é obrigatório"
    );
  });

  it("should forward ref correctly and handle user input", () => {
    const ref = createRef<HTMLInputElement>();
    const handleChange = vi.fn();

    render(<Input ref={ref} onChange={handleChange} />);

    const input = screen.getByRole("textbox");

    expect(ref.current).toBe(input);

    fireEvent.change(input, { target: { value: "test value" } });
    expect(handleChange).toHaveBeenCalled();
    expect(input).toHaveValue("test value");
  });

  it("should render without label and error when not provided", () => {
    render(<Input name="test" />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.queryByTestId("label")).not.toBeInTheDocument();
    expect(screen.queryByTestId("error-message")).not.toBeInTheDocument();
  });
});
