import { escapeXml } from "./escapeXml";

type Block = { type: string; text: string };
type NotionDoc = { id: string; blocks: Block[] };

export function notionJsonToDeeplXml(doc: NotionDoc): string {
  const parts = doc.blocks.map((block, i) => {
    return `<${block.type} id="${i}">${escapeXml(block.text)}</${block.type}>`;
  });

  return `<document>\n${parts.join("\n")}\n</document>`;
}
