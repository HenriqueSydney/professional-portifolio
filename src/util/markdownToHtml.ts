import rehypeHighlight from "rehype-highlight"
import rehypeSanitize from "rehype-sanitize"
import rehypeStringify from "rehype-stringify"
import { remark } from "remark"
import remarkGfm from "remark-gfm"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"

/**
 * Converte markdown em HTML seguro e estilizado
 */
export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(remarkParse)       // parse markdown
    .use(remarkGfm)         // suporte a GitHub Flavored Markdown
    .use(remarkRehype)      // converte markdown -> hast (HTML AST)
    .use(rehypeSanitize)    // sanitiza (remove tags/scripts perigosos)
    .use(rehypeHighlight)   // highlight de código
    .use(rehypeStringify)   // transforma em string HTML
    .process(markdown)

  return result.toString()
}
