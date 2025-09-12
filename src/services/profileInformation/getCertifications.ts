import { getCertificationsFromNotion } from "../notion/getCertificationsFromNotion";
import { ProfileInformationType } from "@/generated/prisma";
import { repositoryClient } from "@/lib/repositoryClient";
import { makeProfileInformationRepository } from "@/repositories/factories/makeProfileInformationRepository";
import { getLocale } from "next-intl/server";

export type Certifications = {
  id: string;
  certifications: {
    id: string;
    description: string;
  }[];
  courses: {
    id: string;
    description: string;
  }[];
};

type GetCertificationsResponse = [Error, null] | [null, Certifications];

export async function getCertifications(): Promise<GetCertificationsResponse> {
  const locale = await getLocale();

  const profileInformationRepository = makeProfileInformationRepository();
  const cacheTag = ["certifications"];

  const [certificationsError, certificationsSuccess] = await repositoryClient(
    "profileInformationRepository.findProfileInformationByProfileType",
    () =>
      profileInformationRepository.findProfileInformationByProfileType(
        ProfileInformationType.CERTIFICATION,
        locale
      ),
    {
      cache: "no-cache",
      tags: cacheTag,
      params: "profileInformationType=certifications",
    }
  );

  if (!certificationsError && certificationsSuccess) {
    const language = locale === "pt" ? "ptBr" : "en";

    let raw = certificationsSuccess[language];

    if (!raw && locale === "en") {
      raw = certificationsSuccess["ptBr"];
    }

    if (!raw && locale === "pt") {
      return [new Error("Idioma não encontrado"), null];
    }

    const certifications = raw as unknown as Certifications;

    return [null, certifications];
  }

  return await getCertificationsFromNotion(cacheTag);
}
