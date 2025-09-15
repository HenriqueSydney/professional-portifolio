import { describe, it, expect } from "vitest";
import { unescapeXml } from "@/util/unescapeXml";

describe("unescapeXml", () => {
  it("should unescape &lt; to <", () => {
    expect(unescapeXml("&lt;")).toBe("<");
  });

  it("should unescape &gt; to >", () => {
    expect(unescapeXml("&gt;")).toBe(">");
  });

  it("should unescape &quot; to double quote", () => {
    expect(unescapeXml("&quot;")).toBe('"');
  });

  it("should unescape &apos; to single quote", () => {
    expect(unescapeXml("&apos;")).toBe("'");
  });

  it("should unescape &amp; to &", () => {
    expect(unescapeXml("&amp;")).toBe("&");
  });

  it("should unescape a string with multiple entities", () => {
    const input = "&lt;div&gt;&quot;Hello &amp; Welcome&quot;&lt;/div&gt;";
    const output = '<div>"Hello & Welcome"</div>';
    expect(unescapeXml(input)).toBe(output);
  });

  it("should return the same string if no entities are present", () => {
    expect(unescapeXml("Hello World")).toBe("Hello World");
  });
});
