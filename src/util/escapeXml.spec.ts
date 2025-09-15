import { describe, expect, it } from "vitest";
import { escapeXml } from "./escapeXml";

describe("Escape unsafe characters from XML", () => {
  it("should be able to escape unsafe characters from XML", () => {
    const input = `<tag attr="value" another='test'>& content</tag>`;
    const expected =
      "&lt;tag attr=&quot;value&quot; another=&apos;test&apos;&gt;&amp; content&lt;/tag&gt;";

    expect(escapeXml(input)).toBe(expected);
  });

  it("should return the same string if no unsafe characters are present", () => {
    const input = "HelloWorld123";
    expect(escapeXml(input)).toBe(input);
  });
});
