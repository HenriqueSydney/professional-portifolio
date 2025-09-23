import { ProfileInformationType } from "@/generated/prisma";

export const PROFILE_TYPE_BY_DATABASEID = {
  "26076eb72c6380c69043d529bf43cbb2": ProfileInformationType.STATS,
  "26076eb72c6380729e1ac813aeac905e": ProfileInformationType.SKILLS,
  "26076eb72c638048a967d8fa7f43e035": ProfileInformationType.CERTIFICATION,
  "26276eb72c6380a4a6b7f2232c28d5d5": ProfileInformationType.EXPERIENCE,
  "27476eb72c6380df8646cd4f63b15648": ProfileInformationType.GRADUATION,
  "27476eb72c6380d7af2ef48e8fc12fc6": ProfileInformationType.BASIC_INFO,
  "27476eb72c63803898fee6c4b7b2e5f9": ProfileInformationType.PROJECTS,
} as const;

export const PROFILE_TYPE_BY_TYPE: Record<ProfileInformationType, string> =
  Object.fromEntries(
    Object.entries(PROFILE_TYPE_BY_DATABASEID).map(([key, value]) => [
      value,
      key,
    ])
  ) as Record<ProfileInformationType, string>;
