import { unescapeXml } from "./unescapeXml";

/**
 * Converte o XML gerado pelo DeepL de volta para o JSON do perfil.
 * @param xml XML gerado pela função profileJsonToDeeplXml
 * @param type Tipo do dado (STATS, EXPERIENCE, SKILLS, CERTIFICATIONS)
 * @param isSingleObject Indica se é um objeto único (Certifications) ou um array
 */
export function deeplXmlToProfileJson<T>(
  xml: string,
  isSingleObject = false
): T[] | T {
  const regex =
    /<field\s+type="([^"]+)"\s+item="(\d+)"\s+key="([^"]+)"(?:\s+subKey="([^"]+)")?(?:\s+subIndex="(\d+)")?>([\s\S]*?)<\/field>/g;

  const itemsMap: Record<number, any> = {};

  let match;
  while ((match = regex.exec(xml)) !== null) {
    const [, , itemIndexStr, key, subKey, subIndexStr, value] = match;
    const itemIndex = parseInt(itemIndexStr, 10);

    if (!itemsMap[itemIndex]) {
      itemsMap[itemIndex] = {};
    }

    if (subKey !== undefined && subIndexStr !== undefined) {
      const subIndex = parseInt(subIndexStr, 10);
      if (!Array.isArray(itemsMap[itemIndex][key])) {
        itemsMap[itemIndex][key] = [];
      }
      if (!itemsMap[itemIndex][key][subIndex]) {
        itemsMap[itemIndex][key][subIndex] = {};
      }
      itemsMap[itemIndex][key][subIndex][subKey] = unescapeXml(value);
    } else {
      itemsMap[itemIndex][key] = unescapeXml(value);
    }
  }

  const result: T[] = Object.keys(itemsMap)
    .sort((a, b) => parseInt(a) - parseInt(b))
    .map((k) => itemsMap[parseInt(k, 10)]);

  // Se for um objeto único (Certifications), retorna só o objeto
  if (isSingleObject) {
    return result[0] ?? ({} as T);
  }

  return result;
}
