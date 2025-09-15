import { describe, it, expect } from "vitest";
import { cn } from "./tailwindClassMerge";

describe("cn", () => {
  it("should concatenate class names correctly", () => {
    const result = cn("bg-red-500", "text-white", "p-4");
    expect(result).toBe("bg-red-500 text-white p-4");
  });

  it("should handle conditional class names", () => {
    const result = cn("bg-red-500", { "text-white": true, hidden: false });
    expect(result).toBe("bg-red-500 text-white");
  });

  it("should merge Tailwind conflicting classes correctly", () => {
    const result = cn("p-2", "p-4", "bg-red-500", "bg-blue-500");
    expect(result).toBe("p-4 bg-blue-500"); // último valor sobrescreve o anterior
  });

  it("should handle empty and undefined values", () => {
    const result = cn("", undefined, "text-white");
    expect(result).toBe("text-white");
  });
});
