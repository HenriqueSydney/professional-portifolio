import { Prisma, ProfileInformationType } from "@/generated/prisma";
import { makeProfileInformationRepository } from "@/repositories/factories/makeProfileInformationRepository";
import { checkDeeplUsage } from "@/services/internacionalization/checkDeeplUsage";
import { translateTextWithDeepl } from "@/services/internacionalization/translateTextWithDeepl";
import { getBasicInfoFromNotion } from "@/services/notion/getBasicInfoFromNotion";
import { getCertificationsFromNotion } from "@/services/notion/getCertificationsFromNotion";
import { getExperienceFromNotion } from "@/services/notion/getExperienceFromNotion";
import { getGraduationFromNotion } from "@/services/notion/getGraduationFromNotion";
import { getProfileStatsFromNotion } from "@/services/notion/getProfileStatsFromNotion";
import { getProjectsFromNotion } from "@/services/notion/getProjectsFromNotion";
import { getSkillsFromNotion } from "@/services/notion/getSkillsFromNotion";
import { deeplXmlToProfileJson } from "@/util/deeplXmlToProfileJson";
import {
  ProfileData,
  profileJsonToDeeplXml,
} from "@/util/profileJsonToDeeplXml";

interface ICreateAndUpdateProfileInfo {
  profileType: ProfileInformationType;
}

interface ITranslateData {
  profileData: ProfileData;
  profileType: ProfileInformationType;
}

const SAFE_CHAR_SUM = 500;

export class CreateAndUpdateProfileInfoUseCase {
  constructor(
    private profileInformationRepository = makeProfileInformationRepository()
  ) {}

  async execute({ profileType }: ICreateAndUpdateProfileInfo) {
    let data = null;
    switch (profileType) {
      case "STATS":
        data = await getProfileStatsFromNotion(["profile-stats"]);
        break;
      case "SKILLS":
        data = await getSkillsFromNotion(["skills"]);
        break;
      case "CERTIFICATION":
        data = await getCertificationsFromNotion(["certifiations"]);
        break;
      case "EXPERIENCE":
        data = await getExperienceFromNotion(["experience"]);
        break;
      case "GRADUATION":
        data = await getGraduationFromNotion(["graduations"]);
        break;
      case "PROJECTS":
        data = await getProjectsFromNotion(["projects"]);
        break;
      case "BASIC_INFO":
        data = await getBasicInfoFromNotion(["basic-info"]);
        break;
    }

    if (!data) {
      throw new Error(`No data returned for profileType: ${profileType}`);
    }

    const [dataError, dataSuccess] = data;

    if (dataError) {
      throw new Error(`Fail to get Profile Information: ${profileType}`);
    }

    const { translatedProfileData } = await this.translateData({
      profileData: dataSuccess,
      profileType,
    });

    await this.profileInformationRepository.upsert({
      ptBr: dataSuccess as Prisma.InputJsonValue,
      en: translatedProfileData as Prisma.InputJsonValue,
      profileInformationType: profileType,
    });
  }

  private async translateData({ profileData, profileType }: ITranslateData) {
    const [usageCheckError, doesStillHaveCreditsInDeepL] =
      await checkDeeplUsage();

    const contentToDeepl = profileJsonToDeeplXml(profileData, profileType);
    let translatedProfileData = null;
    if (
      !usageCheckError &&
      doesStillHaveCreditsInDeepL.remainingQuota >
        contentToDeepl.length + SAFE_CHAR_SUM
    ) {
      const translatedXml = await translateTextWithDeepl({
        content: contentToDeepl,
      });

      if (translatedXml) {
        translatedProfileData = deeplXmlToProfileJson(
          translatedXml,
          profileType === "CERTIFICATION"
        );
      }
    }

    return { translatedProfileData };
  }
}
