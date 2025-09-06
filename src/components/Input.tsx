import { forwardRef, ForwardRefRenderFunction } from "react"
import { FieldError } from "react-hook-form"

import { cn } from "@/lib/utils"

import { Label } from "./ui/label"
import { ErrorMessage } from "./ErrorMessage"

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputTextProps> = (
  { label = '', error = null, name, ...rest },
  ref,
) => {

  return (
    <div className="w-full flex flex-col gap-2">
      {label && (
        <Label htmlFor={name}>{label}</Label>
      )}
      <input
        className={
          cn(
            'flex-1 px-4 py-2 rounded-md bg-background border border-border transition-all duration-300',
            'text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary',
            error && 'border-destructive shadow-glow  '
          )
        }
        name={name}
        ref={ref}
        {...rest}
      />
      <ErrorMessage errorMessage={error?.message} />
    </div>
  )
}

export const Input = forwardRef(InputBase)