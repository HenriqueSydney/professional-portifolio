import {
  Prisma,
  ProfileInformation,
  ProfileInformationType,
} from "@/generated/prisma";

export interface IProfileInformationRepository {
  create(
    data: Prisma.ProfileInformationUncheckedCreateInput
  ): Promise<ProfileInformation>;

  update(
    data: Prisma.ProfileInformationUncheckedUpdateInput & { id: number }
  ): Promise<ProfileInformation>;

  findProfileInformationByProfileType(
    profileType: ProfileInformationType
  ): Promise<ProfileInformation | null>;
}
