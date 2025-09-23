import { ProfileInformationType } from "@/generated/prisma";
import { repositoryClient } from "@/lib/repositoryClient";
import { makeProfileInformationRepository } from "@/repositories/factories/makeProfileInformationRepository";
import { getLocale } from "next-intl/server";
import {
  getGraduationFromNotion,
  Graduation,
} from "../notion/getGraduationFromNotion";
import {
  BasicInfo,
  getBasicInfoFromNotion,
} from "../notion/getBasicInfoFromNotion";

type GetBasicInfoResponse = [Error, null] | [null, BasicInfo];

export async function getBasicInfo(): Promise<GetBasicInfoResponse> {
  const locale = await getLocale();

  const profileInformationRepository = makeProfileInformationRepository();
  const cacheTag = ["basic-info"];

  const [profileBasicInfoError, profileBasicInfoSuccess] =
    await repositoryClient(
      "profileInformationRepository.findProfileInformationByProfileType",
      () =>
        profileInformationRepository.findProfileInformationByProfileType(
          ProfileInformationType.BASIC_INFO,
          locale
        ),
      {
        cache: "no-cache",
        tags: cacheTag,
        params: "profileInformationType=basic-info",
      }
    );

  if (!profileBasicInfoError && profileBasicInfoSuccess) {
    const language = locale === "pt" ? "ptBr" : "en";

    let raw = profileBasicInfoSuccess[language];

    if (!raw && locale === "en") {
      raw = profileBasicInfoSuccess["ptBr"];
    }

    if (!raw && locale === "pt") {
      return [new Error("Idioma não encontrado"), null];
    }

    const profileBasicInfo = raw as unknown as BasicInfo;

    return [null, profileBasicInfo];
  }

  return await getBasicInfoFromNotion(cacheTag);
}
