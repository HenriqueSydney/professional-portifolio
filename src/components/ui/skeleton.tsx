import { cn } from "@/lib/tailwindClassMerge";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "bg-gray-200 dark:bg-gray-800 animate-pulse rounded-md bg-muted",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
