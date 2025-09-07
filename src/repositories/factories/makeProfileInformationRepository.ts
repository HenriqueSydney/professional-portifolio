import { IProfileInformationRepository } from "../IProfileInformationRepository";
import { PrismaProfileInformationRepository } from "../prisma/PrismaProfileInformationRepository";

let profileInformationRepo: IProfileInformationRepository | null = null;

export function makeProfileInformationRepository() {
  if (!profileInformationRepo) {
    profileInformationRepo = new PrismaProfileInformationRepository();
  }
  return profileInformationRepo;
}
