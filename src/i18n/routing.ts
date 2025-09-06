import { defineRouting } from 'next-intl/routing';

export const SUPPORTED_LOCALES = ['pt', 'en'] as const
export const DEFAULT_LOCALE = 'pt'

export const routing = defineRouting({
  locales: SUPPORTED_LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  localePrefix: 'as-needed'
});