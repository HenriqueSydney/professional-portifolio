import { remark } from "remark"
import remarkParse from "remark-parse"
import remarkGfm from "remark-gfm"
import remarkRehype from "remark-rehype"
import rehypeStringify from "rehype-stringify"
import rehypeSanitize from "rehype-sanitize"
import rehypeHighlight from "rehype-highlight"

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
