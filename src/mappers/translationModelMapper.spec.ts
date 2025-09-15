import { describe, it, expect } from "vitest";
import { translationModelMapper } from "@/mappers/translationModelMapper";
import { TranslatedModel } from "@/generated/prisma";

describe("translationModelMapper", () => {
  it("should map TranslatedModel keys to human-readable strings", () => {
    expect(translationModelMapper[TranslatedModel.DEEPL]).toBe("DeepL");
    expect(translationModelMapper[TranslatedModel.AMAZON_TRANSLATE]).toBe(
      "Amazon Translate"
    );
    expect(translationModelMapper[TranslatedModel.GOOGLE_CLOUD_TRANSLATE]).toBe(
      "Google Cloud Translation"
    );
    expect(translationModelMapper[TranslatedModel.MICROSOFT_TRANSLATOR]).toBe(
      "Microsoft Translator"
    );
  });

  it("should have all TranslatedModel keys defined in the mapper", () => {
    const keys = Object.keys(translationModelMapper);
    const translatedModelKeys = Object.values(TranslatedModel);
    translatedModelKeys.forEach((key) => {
      expect(keys).toContain(key);
    });
  });
});
