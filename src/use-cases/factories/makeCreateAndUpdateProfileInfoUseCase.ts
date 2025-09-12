import { makeProfileInformationRepository } from "@/repositories/factories/makeProfileInformationRepository";
import { CreateAndUpdateProfileInfoUseCase } from "../CreateAndUpdateProfileInfoUseCase";

export function makeCreateAndUpdateProfileInfoUseCase() {
  const profileInformationRepository = makeProfileInformationRepository();
  const createAndUpdateProfileInfo = new CreateAndUpdateProfileInfoUseCase(
    profileInformationRepository
  );
  return createAndUpdateProfileInfo;
}
