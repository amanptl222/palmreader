'use client';

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type { Locale, Messages } from '@/locales/types';
import { defaultLocale, getMessages } from '@/locales';

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Messages;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const t = useMemo(() => getMessages(locale), [locale]);

  useEffect(() => {
    document.documentElement.lang = locale === 'hi' ? 'hi' : 'en';
  }, [locale]);

  useEffect(() => {
    document.title = t.meta.title;
    let el = document.querySelector('meta[name="description"]');
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('name', 'description');
      document.head.appendChild(el);
    }
    el.setAttribute('content', t.meta.description);
  }, [t]);

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, t]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error('useLocale must be used within LocaleProvider');
  }
  return ctx;
}
