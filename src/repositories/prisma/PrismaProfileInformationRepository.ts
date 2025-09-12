import {
  Prisma,
  ProfileInformation,
  ProfileInformationType,
} from "@/generated/prisma";
import {
  FindProfileInformationByProfileTypeResponse,
  IProfileInformationRepository,
} from "../IProfileInformationRepository";
import { prisma } from "@/lib/prisma";

export class PrismaProfileInformationRepository
  implements IProfileInformationRepository
{
  async upsert(
    data: Prisma.ProfileInformationUncheckedCreateInput & { id: number }
  ): Promise<ProfileInformation> {
    const profileInformation = await prisma.profileInformation.upsert({
      create: {
        ...data,
      },
      update: {
        ...data,
      },
      where: {
        profileInformationType: data.profileInformationType,
      },
    });

    return profileInformation;
  }

  async findProfileInformationByProfileType(
    profileType: ProfileInformationType,
    locale: "pt" | "en"
  ): Promise<FindProfileInformationByProfileTypeResponse | null> {
    const profileInformation = await prisma.profileInformation.findUnique({
      select: {
        id: true,
        ptBr: locale === "pt",
        en: locale === "en",
      },
      where: {
        profileInformationType: profileType,
      },
    });

    return profileInformation;
  }
}
