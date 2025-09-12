import { ProfileInformationType } from "@/generated/prisma";
import { repositoryClient } from "@/lib/repositoryClient";
import { makeProfileInformationRepository } from "@/repositories/factories/makeProfileInformationRepository";
import { getLocale } from "next-intl/server";
import { getSkillsFromNotion } from "../notion/getSkillsFromNotion";

export type Skills = {
  category: string;
  iconName: string;
  id: string;
  stack: {
    id: string;
    label: string;
    level: number;
  }[];
};

type GetProfileSkillsResponse = [Error, null] | [null, Skills[]];

export async function getSkills(): Promise<GetProfileSkillsResponse> {
  const locale = await getLocale();

  const profileInformationRepository = makeProfileInformationRepository();
  const cacheTag = ["skills"];

  const [profileSkillsError, profileSkillsSuccess] = await repositoryClient(
    "profileInformationRepository.findProfileInformationByProfileType",
    () =>
      profileInformationRepository.findProfileInformationByProfileType(
        ProfileInformationType.SKILLS,
        locale
      ),
    {
      cache: "no-cache",
      tags: cacheTag,
      params: "profileInformationType=skills",
    }
  );

  if (!profileSkillsError && profileSkillsSuccess) {
    const language = locale === "pt" ? "ptBr" : "en";

    let raw = profileSkillsSuccess[language];

    if (!raw && locale === "en") {
      raw = profileSkillsSuccess["ptBr"];
    }

    if (!raw && locale === "pt") {
      return [new Error("Idioma não encontrado"), null];
    }

    const profileSkills = raw as unknown as Skills[];

    return [null, profileSkills];
  }

  return await getSkillsFromNotion(cacheTag);
}
