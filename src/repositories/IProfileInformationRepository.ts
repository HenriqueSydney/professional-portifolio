import {
  Prisma,
  ProfileInformation,
  ProfileInformationType,
} from "@/generated/prisma";

export type FindProfileInformationByProfileTypeResponse = {
  en?: Prisma.JsonValue;
  id: number;
  ptBr?: Prisma.JsonValue;
};

export interface IProfileInformationRepository {
  upsert(
    data: Prisma.ProfileInformationUncheckedCreateInput
  ): Promise<ProfileInformation>;

  findProfileInformationByProfileType(
    profileType: ProfileInformationType,
    locale: "pt" | "en"
  ): Promise<FindProfileInformationByProfileTypeResponse | null>;
}
