import { describe, expect, it } from "vitest";
import { formatMinutesToHour } from "./formatMinutesToHour"; // ajuste o caminho

describe("formatMinutesToHour", () => {
  it("should format only hours when minutes is multiple of 60", () => {
    expect(formatMinutesToHour(120)).toBe("2h");
  });

  it("should format only minutes when less than 60", () => {
    expect(formatMinutesToHour(45)).toBe("45m");
  });

  it("should format hours and minutes when not multiple of 60", () => {
    expect(formatMinutesToHour(125)).toBe("2h 5m");
  });

  it("should return empty string when minutes is 0", () => {
    expect(formatMinutesToHour(0)).toBe("");
  });
});
