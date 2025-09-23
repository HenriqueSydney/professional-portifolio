import { describe, it, expect } from "vitest";
import { ProfileInformationType } from "@/generated/prisma";
import {
  PROFILE_TYPE_BY_DATABASEID,
  PROFILE_TYPE_BY_TYPE,
} from "./ProfileDatabaseMapper";

describe("PROFILE_TYPE_BY_DATABASEID", () => {
  it("should map database IDs to ProfileInformationType correctly", () => {
    expect(PROFILE_TYPE_BY_DATABASEID["26076eb72c6380c69043d529bf43cbb2"]).toBe(
      ProfileInformationType.STATS
    );
    expect(PROFILE_TYPE_BY_DATABASEID["26076eb72c6380729e1ac813aeac905e"]).toBe(
      ProfileInformationType.SKILLS
    );
    expect(PROFILE_TYPE_BY_DATABASEID["26076eb72c638048a967d8fa7f43e035"]).toBe(
      ProfileInformationType.CERTIFICATION
    );
    expect(PROFILE_TYPE_BY_DATABASEID["26276eb72c6380a4a6b7f2232c28d5d5"]).toBe(
      ProfileInformationType.EXPERIENCE
    );
    expect(PROFILE_TYPE_BY_DATABASEID["27476eb72c6380df8646cd4f63b15648"]).toBe(
      ProfileInformationType.GRADUATION
    );
    expect(PROFILE_TYPE_BY_DATABASEID["27476eb72c6380d7af2ef48e8fc12fc6"]).toBe(
      ProfileInformationType.BASIC_INFO
    );
    expect(PROFILE_TYPE_BY_DATABASEID["27476eb72c63803898fee6c4b7b2e5f9"]).toBe(
      ProfileInformationType.PROJECTS
    );
  });

  it("should have all database IDs defined", () => {
    const keys = Object.keys(PROFILE_TYPE_BY_DATABASEID);
    expect(keys.length).toBe(7); // total de IDs que você definiu
  });
});

describe("PROFILE_TYPE_BY_TYPE", () => {
  it("should map ProfileInformationType to database IDs correctly", () => {
    expect(PROFILE_TYPE_BY_TYPE[ProfileInformationType.STATS]).toBe(
      "26076eb72c6380c69043d529bf43cbb2"
    );
    expect(PROFILE_TYPE_BY_TYPE[ProfileInformationType.SKILLS]).toBe(
      "26076eb72c6380729e1ac813aeac905e"
    );
    expect(PROFILE_TYPE_BY_TYPE[ProfileInformationType.CERTIFICATION]).toBe(
      "26076eb72c638048a967d8fa7f43e035"
    );
    expect(PROFILE_TYPE_BY_TYPE[ProfileInformationType.EXPERIENCE]).toBe(
      "26276eb72c6380a4a6b7f2232c28d5d5"
    );
    expect(PROFILE_TYPE_BY_TYPE[ProfileInformationType.GRADUATION]).toBe(
      "27476eb72c6380df8646cd4f63b15648"
    );
    expect(PROFILE_TYPE_BY_TYPE[ProfileInformationType.BASIC_INFO]).toBe(
      "27476eb72c6380d7af2ef48e8fc12fc6"
    );
    expect(PROFILE_TYPE_BY_TYPE[ProfileInformationType.PROJECTS]).toBe(
      "27476eb72c63803898fee6c4b7b2e5f9"
    );
  });

  it("should have all ProfileInformationType keys defined", () => {
    const keys = Object.keys(PROFILE_TYPE_BY_TYPE);
    const profileTypeKeys = Object.values(ProfileInformationType);
    profileTypeKeys.forEach((key) => {
      expect(keys).toContain(key);
    });
  });
});
