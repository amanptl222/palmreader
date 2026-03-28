export type { Locale, Messages } from './types';
export { en } from './en';
export { hi } from './hi';

import type { Locale, Messages } from './types';
import { en } from './en';
import { hi } from './hi';

export const messages: Record<Locale, Messages> = {
  en,
  hi,
};

export const defaultLocale: Locale = 'en';

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}
