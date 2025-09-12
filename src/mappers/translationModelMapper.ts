import { TranslatedModel } from "@/generated/prisma";

export const translationModelMapper: Record<string, string> = {
  [TranslatedModel.DEEPL]: "DeepL",
  [TranslatedModel.AMAZON_TRANSLATE]: "Amazon Translate",
  [TranslatedModel.GOOGLE_CLOUD_TRANSLATE]: "Google Cloud Translation",
  [TranslatedModel.MICROSOFT_TRANSLATOR]: "Microsoft Translator",
} as const;
