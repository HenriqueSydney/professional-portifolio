import { ProfileInformationType } from "@/generated/prisma";
import { repositoryClient } from "@/lib/repositoryClient";
import { makeProfileInformationRepository } from "@/repositories/factories/makeProfileInformationRepository";
import { getLocale } from "next-intl/server";
import { getProfileStatsFromNotion } from "../notion/getProfileStatsFromNotion";

export type ProfileStats = {
  id: string;
  label: string;
  value: string;
  iconName: string;
};

type GetProfileStatsResponse = [Error, null] | [null, ProfileStats[]];

export async function getProfileStats(): Promise<GetProfileStatsResponse> {
  const locale = await getLocale();

  const profileInformationRepository = makeProfileInformationRepository();
  const cacheTag = ["profile-stats"];

  const [profileStatsError, profileStatsSuccess] = await repositoryClient(
    "profileInformationRepository.findProfileInformationByProfileType",
    () =>
      profileInformationRepository.findProfileInformationByProfileType(
        ProfileInformationType.STATS,
        locale
      ),
    {
      cache: "no-cache",
      tags: cacheTag,
      params: "profileInformationType=stats",
    }
  );

  if (!profileStatsError && profileStatsSuccess) {
    const language = locale === "pt" ? "ptBr" : "en";

    let raw = profileStatsSuccess[language];

    if (!raw && locale === "en") {
      raw = profileStatsSuccess["ptBr"];
    }

    if (!raw && locale === "pt") {
      return [new Error("Idioma não encontrado"), null];
    }

    const profileStats = raw as unknown as ProfileStats[];

    return [null, profileStats];
  }

  return await getProfileStatsFromNotion(cacheTag);
}
