import { describe, it, expect } from "vitest";
import { normalizeId } from "./normalizeId";

describe("normalizeId", () => {
  it("should lowercase the text", () => {
    expect(normalizeId("HelloWorld")).toBe("helloworld");
  });

  it("should replace spaces with underscores", () => {
    expect(normalizeId("Hello World Test")).toBe("hello_world_test");
  });

  it("should remove special characters", () => {
    expect(normalizeId("Hello@World!#Test$")).toBe("helloworldtest");
  });

  it("should keep underscores", () => {
    expect(normalizeId("Hello_World")).toBe("hello_world");
  });

  it("should handle mixed cases (spaces + special chars)", () => {
    expect(normalizeId("Olá Mundo@ 2025!")).toBe("ol_mundo_2025");
  });

  it("should return empty string if only special characters", () => {
    expect(normalizeId("@#$%&*!")).toBe("");
  });

  it("should collapse multiple spaces into one underscore", () => {
    expect(normalizeId("Hello    World")).toBe("hello_world");
  });
});
