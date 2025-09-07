import {
  Prisma,
  ProfileInformation,
  ProfileInformationType,
} from "@/generated/prisma";
import { IProfileInformationRepository } from "../IProfileInformationRepository";
import { prisma } from "@/lib/prisma";

export class PrismaProfileInformationRepository
  implements IProfileInformationRepository
{
  async create(
    data: Prisma.ProfileInformationUncheckedCreateInput
  ): Promise<ProfileInformation> {
    const profileInformation = await prisma.profileInformation.create({
      data,
    });

    return profileInformation;
  }

  async update(
    data: Prisma.ProfileInformationUncheckedUpdateInput & { id: number }
  ): Promise<ProfileInformation> {
    const profileInformation = await prisma.profileInformation.update({
      data,
      where: {
        id: data.id,
      },
    });

    return profileInformation;
  }

  async findProfileInformationByProfileType(
    profileType: ProfileInformationType
  ): Promise<ProfileInformation | null> {
    const profileInformation = await prisma.profileInformation.findUnique({
      where: {
        profileInformationType: profileType,
      },
    });

    return profileInformation;
  }
}
