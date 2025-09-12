import { escapeXml } from "./escapeXml";

type NotionDoc = { blocks: any[] };

export function notionJsonToDeeplXml(doc: NotionDoc): string {
  const parts: string[] = [];
  doc.blocks.forEach((block, blockIndex) => {
    const richTexts = block[block.type]?.rich_text ?? [];

    richTexts.forEach((rt: any, rtIndex: number) => {
      parts.push(
        `<block type="${block.type}" block="${blockIndex}" rt="${rtIndex}">${escapeXml(
          rt.plain_text
        )}</block>`
      );
    });
  });

  return `<document>\n${parts.join("\n")}\n</document>`;
}
