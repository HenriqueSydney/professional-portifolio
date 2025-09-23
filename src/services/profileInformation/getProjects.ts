import { ProfileInformationType } from "@/generated/prisma";
import { repositoryClient } from "@/lib/repositoryClient";
import { makeProfileInformationRepository } from "@/repositories/factories/makeProfileInformationRepository";
import { getLocale } from "next-intl/server";
import {
  getProjectsFromNotion,
  Projects,
} from "../notion/getProjectsFromNotion";

type GetProjectsResponse = [Error, null] | [null, Projects[]];

export async function getProjects(): Promise<GetProjectsResponse> {
  const locale = await getLocale();

  const profileInformationRepository = makeProfileInformationRepository();
  const cacheTag = ["projects"];

  const [profileProjectsError, profileProjectsSuccess] = await repositoryClient(
    "profileInformationRepository.findProfileInformationByProfileType",
    () =>
      profileInformationRepository.findProfileInformationByProfileType(
        ProfileInformationType.PROJECTS,
        locale
      ),
    {
      cache: "no-cache",
      tags: cacheTag,
      params: "profileInformationType=projects",
    }
  );

  if (!profileProjectsError && profileProjectsSuccess) {
    const language = locale === "pt" ? "ptBr" : "en";

    let raw = profileProjectsSuccess[language];

    if (!raw && locale === "en") {
      raw = profileProjectsSuccess["ptBr"];
    }

    if (!raw && locale === "pt") {
      return [new Error("Idioma não encontrado"), null];
    }

    const profileProjects = raw as unknown as Projects[];

    return [null, profileProjects];
  }

  return await getProjectsFromNotion(cacheTag);
}
