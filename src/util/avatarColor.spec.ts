import { describe, expect, it } from "vitest";
import { getAvatarColor } from "./avatarColor";

describe("Get Avatar Color", () => {
  it("should get the right color based on string value", () => {
    expect(getAvatarColor("Teste String")).toBe("bg-purple-600");
  });
});
