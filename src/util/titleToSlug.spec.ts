import { describe, it, expect } from "vitest";
import { titleToSlug } from "@/util/titleToSlug";

describe("titleToSlug", () => {
  it("should return empty string if title is empty or not a string", () => {
    expect(titleToSlug({ title: "" })).toBe("");
    // @ts-expect-error testing invalid input
    expect(titleToSlug({ title: null })).toBe("");
    // @ts-expect-error testing invalid input
    expect(titleToSlug({ title: 123 })).toBe("");
  });

  it("should convert title to lowercase by default", () => {
    const result = titleToSlug({ title: "Hello World" });
    expect(result).toBe("hello-world");
  });

  it("should remove accents if removeAccents is true", () => {
    const result = titleToSlug({
      title: "Olá Mundo",
      options: { removeAccents: true },
    });
    expect(result).toBe("ola-mundo");
  });

  it("should respect maxLength option", () => {
    const result = titleToSlug({
      title: "a".repeat(200),
      options: { maxLength: 50 },
    });
    expect(result.length).toBe(50);
  });

  it("should allow custom separator", () => {
    const result = titleToSlug({
      title: "Hello World",
      options: { separator: "_" },
    });
    expect(result).toBe("hello_world");
  });

  it("should remove invalid characters in strict mode", () => {
    const result = titleToSlug({
      title: "Hello @ World!",
      options: { strict: true },
    });
    expect(result).toBe("hello-world");
  });

  it("should remove duplicate separators", () => {
    const result = titleToSlug({
      title: "Hello   World",
      options: { separator: "-" },
    });
    expect(result).toBe("hello-world");
  });

  it("should trim separators from start and end", () => {
    const result = titleToSlug({
      title: "  Hello World  ",
      options: { separator: "-" },
    });
    expect(result).toBe("hello-world");
  });
});
