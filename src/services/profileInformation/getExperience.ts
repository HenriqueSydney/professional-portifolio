import { notion } from "@/lib/notion/notion";
import { notionClient } from "@/lib/notion/notionClient";
import { getExperienceFromNotion } from "../notion/getExperienceFromNotion";
import { makeProfileInformationRepository } from "@/repositories/factories/makeProfileInformationRepository";
import { getLocale } from "next-intl/server";
import { repositoryClient } from "@/lib/repositoryClient";
import { ProfileInformationType } from "@/generated/prisma";

export type Experience = {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
};

type NotionDatabaseInfoOfSkills = {
  id: string;
  created_time: string;
  last_edited_time: string;
  properties: {
    Title: {
      type: "title";
      title: {
        plain_text: string;
        text: { content: string };
      }[];
    };
    Order: {
      type: "number";
      number: number | null;
    };
    Company: {
      type: "rich_text";
      rich_text: {
        plain_text: string;
        text: { content: string };
      }[];
    };
    Period: {
      type: "rich_text";
      rich_text: {
        plain_text: string;
        text: { content: string };
      }[];
    };
    Location: {
      type: "rich_text";
      rich_text: {
        plain_text: string;
        text: { content: string };
      }[];
    };
    Description: {
      type: "rich_text";
      rich_text: {
        plain_text: string;
        text: { content: string };
      }[];
    };
    Achievements: {
      type: "multi_select";
      multi_select: {
        id: string;
        name: string;
        color: string;
      }[];
    };
  };
};

type GetExperienceResponse = [Error, null] | [null, Experience[]];

export async function getExperience(): Promise<GetExperienceResponse> {
  const locale = await getLocale();

  const profileInformationRepository = makeProfileInformationRepository();
  const cacheTag = ["experience"];

  const [experienceError, experienceSuccess] = await repositoryClient(
    "profileInformationRepository.findProfileInformationByProfileType",
    () =>
      profileInformationRepository.findProfileInformationByProfileType(
        ProfileInformationType.EXPERIENCE,
        locale
      ),
    {
      cache: "no-cache",
      tags: cacheTag,
      params: "profileInformationType=experience",
    }
  );

  if (!experienceError && experienceSuccess) {
    const language = locale === "pt" ? "ptBr" : "en";

    let raw = experienceSuccess[language];

    if (!raw && locale === "en") {
      raw = experienceSuccess["ptBr"];
    }

    if (!raw && locale === "pt") {
      return [new Error("Idioma não encontrado"), null];
    }

    const experience = raw as unknown as Experience[];

    return [null, experience];
  }

  return await getExperienceFromNotion(cacheTag);
}
