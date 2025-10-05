import { describe, it, expect } from "vitest";
import { skillLevels, skillLevelsMapper } from "./skillsMapper";
describe("skillLevelsMapper", () => {
  it("should map values to beginner correctly", () => {
    expect(skillLevelsMapper(0)).toEqual(skillLevels.beginner);
    expect(skillLevelsMapper(30)).toEqual(skillLevels.beginner);
  });

  it("should map values to intermediate correctly", () => {
    expect(skillLevelsMapper(31)).toEqual(skillLevels.intermediate);
    expect(skillLevelsMapper(70)).toEqual(skillLevels.intermediate);
  });

  it("should map values to advanced correctly", () => {
    expect(skillLevelsMapper(71)).toEqual(skillLevels.advanced);
    expect(skillLevelsMapper(90)).toEqual(skillLevels.advanced);
  });

  it("should map values to expert correctly", () => {
    expect(skillLevelsMapper(91)).toEqual(skillLevels.expert);
    expect(skillLevelsMapper(100)).toEqual(skillLevels.expert);
  });

  it("should throw an error for values out of range", () => {
    expect(() => skillLevelsMapper(-1)).toThrowError(
      "O valor precisa estar entre 0 e 100"
    );
    expect(() => skillLevelsMapper(101)).toThrowError(
      "O valor precisa estar entre 0 e 100"
    );
  });
});
