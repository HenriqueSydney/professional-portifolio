import { ProfileInformationType } from "@/generated/prisma";
import { repositoryClient } from "@/lib/repositoryClient";
import { makeProfileInformationRepository } from "@/repositories/factories/makeProfileInformationRepository";
import { getLocale } from "next-intl/server";
import {
  getGraduationFromNotion,
  Graduation,
} from "../notion/getGraduationFromNotion";

type GetGraduationsResponse = [Error, null] | [null, Graduation[]];

export async function getGraduations(): Promise<GetGraduationsResponse> {
  const locale = await getLocale();

  const profileInformationRepository = makeProfileInformationRepository();
  const cacheTag = ["graduations"];

  const [profileGraduationsError, profileGraduationsSuccess] =
    await repositoryClient(
      "profileInformationRepository.findProfileInformationByProfileType",
      () =>
        profileInformationRepository.findProfileInformationByProfileType(
          ProfileInformationType.GRADUATION,
          locale
        ),
      {
        cache: "no-cache",
        tags: cacheTag,
        params: "profileInformationType=graduations",
      }
    );

  if (!profileGraduationsError && profileGraduationsSuccess) {
    const language = locale === "pt" ? "ptBr" : "en";

    let raw = profileGraduationsSuccess[language];

    if (!raw && locale === "en") {
      raw = profileGraduationsSuccess["ptBr"];
    }

    if (!raw && locale === "pt") {
      return [new Error("Idioma não encontrado"), null];
    }

    const profileGraduations = raw as unknown as Graduation[];

    return [null, profileGraduations];
  }

  return await getGraduationFromNotion(cacheTag);
}
