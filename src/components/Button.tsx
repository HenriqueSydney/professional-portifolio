import { forwardRef } from "react";
import { ButtonProps, Button as ButtonUI } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";
import { cn } from "@/lib/tailwindClassMerge";

interface IButton extends Omit<ButtonProps, "disabled" | "children"> {
  isDisabled?: boolean;
  isLoading?: boolean;
  label?: string | React.ReactNode;
  loadingText?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  centralizeLoadingIcon?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, IButton>(
  (
    {
      label,
      isDisabled = false,
      isLoading = false,
      iconLeft,
      iconRight,
      className,
      centralizeLoadingIcon = false,
      ...rest
    },
    ref
  ) => {
    // Determina se o botão deve estar desabilitado
    const disabled = isDisabled || isLoading;
    // Determina se deve mostrar o texto
    const showText = !isLoading;

    return (
      <ButtonUI
        ref={ref}
        className={cn(
          "relative",
          {
            "cursor-not-allowed opacity-70": disabled,
          },
          className
        )}
        disabled={disabled}
        {...rest}
      >
        <span
          className={cn(
            "flex items-center justify-center gap-2",
            isLoading && "opacity-0"
          )}
        >
          {!isLoading && iconLeft && (
            <span className="flex-shrink-0">{iconLeft}</span>
          )}

          {showText && label}

          {!isLoading && iconRight && (
            <span className="flex-shrink-0">{iconRight}</span>
          )}
        </span>

        {isLoading && (
          <span
            className={cn(
              "absolute inset-0 flex items-center gap-2",
              centralizeLoadingIcon ? "justify-center" : "justify-center"
            )}
          >
            <Loader2Icon className="w-4 h-4 animate-spin flex-shrink-0" />
            {!centralizeLoadingIcon && <span>{label}</span>}
          </span>
        )}
      </ButtonUI>
    );
  }
);

Button.displayName = "Button";
