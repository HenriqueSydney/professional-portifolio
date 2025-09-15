import { describe, expect, it } from "vitest";
import { markdownToHtml } from "./markdownToHtml"; // ajuste o caminho

describe("markdownToHtml", () => {
  it("should convert markdown to HTML with paragraph", async () => {
    const md = "Hello **World**";
    const html = await markdownToHtml(md);

    expect(html).toContain("<p>");
    expect(html).toContain("<strong>World</strong>");
  });

  it("should support GFM (tables)", async () => {
    const md = `
| Name  | Age |
|-------|-----|
| John  | 30  |
| Alice | 25  |
    `;
    const html = await markdownToHtml(md);

    expect(html).toContain("<table>");
    expect(html).toContain("<td>30</td>");
  });

  it("should sanitize unsafe HTML (remove <script> tags)", async () => {
    const md = `Hello <script>alert("xss")</script> World`;
    const html = await markdownToHtml(md);

    // Garante que a TAG foi removida
    expect(html).not.toContain("<script>");
    // Mas o texto interno pode aparecer
    expect(html).toContain('alert("xss")');
  });

  it("should highlight code blocks with hljs classes", async () => {
    const md = "```js\nconsole.log('Hello')\n```";
    const html = await markdownToHtml(md);

    expect(html).toContain('<pre><code class="hljs language-js"');
    expect(html).toContain('<span class="hljs-variable');
    expect(html).toContain('<span class="hljs-title function_">log</span>');
  });
});
