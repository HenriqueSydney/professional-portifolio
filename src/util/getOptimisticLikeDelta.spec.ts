import { describe, expect, it, beforeAll, afterAll, vi } from "vitest";
import { getOptimisticLikeDelta } from "./getOptimisticLikeDelta"; // ajuste o caminho
import { date } from "@/lib/dayjs";

describe("getOptimisticLikeDelta", () => {
  const NOW = new Date("2025-09-14T12:00:00Z");

  beforeAll(() => {
    vi.useFakeTimers();
    vi.setSystemTime(NOW);
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it("should return +1 if alreadyLiked is null", () => {
    expect(getOptimisticLikeDelta(null)).toBe(1);
    expect(getOptimisticLikeDelta(undefined)).toBe(1);
  });

  it("should return -1 if alreadyLiked is less than 30 minutes ago", () => {
    const twentyMinutesAgo = date(NOW).subtract(20, "minute").toDate();
    expect(getOptimisticLikeDelta(twentyMinutesAgo)).toBe(-1);
  });

  it("should return +1 if alreadyLiked is 30 minutes ago or more", () => {
    const thirtyMinutesAgo = date(NOW).subtract(30, "minute").toDate();
    const oneHourAgo = date(NOW).subtract(1, "hour").toDate();

    expect(getOptimisticLikeDelta(thirtyMinutesAgo)).toBe(1);
    expect(getOptimisticLikeDelta(oneHourAgo)).toBe(1);
  });
});
