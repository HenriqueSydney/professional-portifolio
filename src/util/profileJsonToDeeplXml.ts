import { ProfileStats } from "@/services/notion/getProfileStatsFromNotion";
import { escapeXml } from "./escapeXml";
import { Experience } from "@/services/notion/getExperienceFromNotion";
import { Certifications } from "@/services/notion/getCertificationsFromNotion";
import { Skills } from "@/services/notion/getSkillsFromNotion";

export type ProfileData =
  | ProfileStats[]
  | Experience[]
  | Certifications
  | Skills[];

export function profileJsonToDeeplXml(data: ProfileData, type: string): string {
  const parts: string[] = [];
  const items: any[] = Array.isArray(data) ? data : [data];
  items.forEach((item: any, index: number) => {
    // percorre chaves do objeto
    Object.entries(item).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        // arrays internos, exemplo: achievements, stack, certifications
        value.forEach((v, subIndex) => {
          if (typeof v === "object") {
            Object.entries(v).forEach(([subKey, subValue]) => {
              parts.push(
                `<field type="${type}" item="${index}" key="${key}" subKey="${subKey}" subIndex="${subIndex}">${escapeXml(
                  String(subValue)
                )}</field>`
              );
            });
          } else {
            parts.push(
              `<field type="${type}" item="${index}" key="${key}" subIndex="${subIndex}">${escapeXml(
                String(v)
              )}</field>`
            );
          }
        });
      } else {
        // campos simples
        parts.push(
          `<field type="${type}" item="${index}" key="${key}">${escapeXml(
            String(value)
          )}</field>`
        );
      }
    });
  });

  return `<document>\n${parts.join("\n")}\n</document>`;
}
