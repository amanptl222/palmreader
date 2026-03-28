'use client';

import { useLocale } from '@/contexts/LocaleContext';
import type { Locale } from '@/locales/types';

type Variant = 'hero' | 'light';

export function LanguageSwitcher({ variant = 'light' }: { variant?: Variant }) {
  const { locale, setLocale, t } = useLocale();
  const onHero = variant === 'hero';

  const btn = (loc: Locale) => (
    <button
      key={loc}
      type="button"
      onClick={() => setLocale(loc)}
      className={`px-3 py-1.5 text-sm font-semibold rounded-md transition-colors ${
        locale === loc
          ? onHero
            ? 'bg-cta-gradient text-white shadow-md'
            : 'bg-brand-forest text-white shadow-sm'
          : onHero
            ? 'text-white/85 hover:text-white hover:bg-white/10'
            : 'text-text-muted hover:text-brand-forest'
      }`}
      aria-pressed={locale === loc}
      aria-label={loc === 'en' ? t.lang.en : t.lang.hi}
    >
      {loc === 'en' ? t.lang.en : t.lang.hi}
    </button>
  );

  return (
    <div
      className={`inline-flex rounded-lg p-1 shadow-md ${
        onHero
          ? 'border border-white/20 bg-brand-hero/80 backdrop-blur-md'
          : 'border border-brand-forest/20 bg-white/95 backdrop-blur-sm'
      }`}
      role="group"
      aria-label={t.lang.label}
    >
      {btn('en')}
      {btn('hi')}
    </div>
  );
}
