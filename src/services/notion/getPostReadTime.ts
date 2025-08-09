/* eslint-disable @typescript-eslint/no-explicit-any */
import { notion } from "@/lib/notionClient";
import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

/**
 * Retorna o tempo estimado de leitura de um post com base na quantidade de palavras.
 * Usa média de 200 palavras por minuto.
 */
export async function getPostReadTime(pageId: string): Promise<number> {
  const blocks = await notion.blocks.children.list({ block_id: pageId });

  const textContent = blocks.results
    .map((block) => extractTextFromBlock(block as BlockObjectResponse))
    .join(" ");

  const wordCount = textContent.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(wordCount / 200));

  return minutes;
}

/**
 * Extrai texto plano de blocos suportados.
 */
function extractTextFromBlock(block: BlockObjectResponse): string {
  const type = block.type as keyof typeof block;
  const content = (block as any)[type];

  if (content?.rich_text) {
    return content.rich_text.map((rt: any) => rt.plain_text).join(" ");
  }

  return "";
}
