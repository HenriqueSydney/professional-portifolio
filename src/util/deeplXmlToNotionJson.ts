import { unescapeXml } from "./unescapeXml";

type Block = { type: string; text: string };
type NotionDoc = { id: string; blocks: Block[] };

export function deeplXmlToNotionJson(
  original: NotionDoc,
  translatedXml: string
): NotionDoc {
  // regex simples para pegar cada tag
  const regex = /<(\w+)\s+id="(\d+)">([\s\S]*?)<\/\1>/g;

  const translatedBlocks: Block[] = [];
  let match;

  while ((match = regex.exec(translatedXml)) !== null) {
    const [, type, id, text] = match;
    const index = parseInt(id, 10);

    translatedBlocks[index] = {
      type,
      text: unescapeXml(text.trim()),
    };
  }

  return { ...original, blocks: translatedBlocks };
}
