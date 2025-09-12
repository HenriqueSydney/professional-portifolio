import { unescapeXml } from "./unescapeXml";

type NotionDoc = { blocks: any[] };

export function deeplXmlToNotionJson(
  original: NotionDoc,
  translatedXml: string
): NotionDoc {
  const regex =
    /<block\s+type="([^"]+)"\s+block="(\d+)"\s+rt="(\d+)">([\s\S]*?)<\/block>/g;

  const updated = JSON.parse(JSON.stringify(original)); // clone

  let match;
  while ((match = regex.exec(translatedXml)) !== null) {
    const [, type, blockIndex, rtIndex, text] = match;
    const bi = parseInt(blockIndex, 10);
    const ri = parseInt(rtIndex, 10);

    if (updated.blocks[bi]?.[type]?.rich_text?.[ri]) {
      updated.blocks[bi][type].rich_text[ri].text.content = unescapeXml(
        text.trim()
      );
      updated.blocks[bi][type].rich_text[ri].plain_text = unescapeXml(
        text.trim()
      );
    }
  }

  return updated;
}
