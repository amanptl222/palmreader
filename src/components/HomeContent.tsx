'use client';

import type { ReactNode } from 'react';
import { WHATSAPP_NUMBER } from '@/config/constants';
import { feedbackImages } from '@/assets/images/feedback';
import { IconHand } from '@/components/icons';
import { FeedbackSlider } from '@/components/FeedbackSlider';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { SessionSections } from '@/components/SessionSections';
import { useLocale } from '@/contexts/LocaleContext';

const WHATSAPP_BASE = 'https://wa.me/91';

function WhatsAppLink({
  children,
  className = '',
  ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  ariaLabel: string;
}) {
  const num = WHATSAPP_NUMBER.replace(/\D/g, '');
  const href = `${WHATSAPP_BASE}${num}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}

export function HomeContent() {
  const { t } = useLocale();

  return (
    <main className="min-h-screen">
      <div className="fixed top-3 right-3 z-50 sm:top-4 sm:right-4">
        <LanguageSwitcher variant="hero" />
      </div>

      <header className="relative bg-hero-gradient text-text-on-hero shadow-hero">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          aria-hidden
        />
        <div className="relative px-4 pt-16 pb-16 sm:pt-20 sm:pb-20 max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <img
              src="/logo.png"
              alt=""
              className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 object-contain rounded-[25%] ring-2 ring-white/25 shadow-lg bg-white/5"
              role="presentation"
            />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-white mb-3 drop-shadow-sm">
            {t.hero.title}
          </h1>
          <p className="text-lg sm:text-xl text-brand-apricot/95 font-medium mb-4">
            {t.hero.subtitle}
          </p>
          <p className="text-white/88 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            {t.hero.intro}
          </p>
          <WhatsAppLink
            ariaLabel={`${t.hero.cta} — ${t.hero.whatsappSuffix}`}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-cta-gradient text-white font-semibold shadow-cta-glow hover:brightness-110 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-accent-gold-bright focus:ring-offset-2 focus:ring-offset-brand-hero"
          >
            <IconHand aria-hidden />
            {t.hero.cta} ({t.hero.whatsappSuffix})
          </WhatsAppLink>
        </div>
      </header>

      <SessionSections />

      <section
        id="feedback"
        className="px-4 py-12 sm:py-16 bg-brand-hero text-text-on-hero border-y border-brand-forest-muted/40"
        aria-labelledby="feedback-heading"
      >
        <div className="max-w-4xl mx-auto">
          <h2
            id="feedback-heading"
            className="text-xl sm:text-2xl font-serif font-semibold text-center mb-2 text-white"
          >
            {t.feedback.heading}
          </h2>
          <p className="text-center text-white/75 text-sm mb-8 max-w-lg mx-auto">
            {t.feedback.subtitle}
          </p>
          <div className="rounded-2xl border-2 border-white/15 bg-white p-2 sm:p-3 shadow-card">
            <FeedbackSlider images={feedbackImages} />
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="px-4 py-12 sm:py-16 bg-warm-gradient border-t border-brand-forest/10"
        aria-labelledby="contact-heading"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2
            id="contact-heading"
            className="text-xl sm:text-2xl font-serif font-semibold text-brand-forest mb-4"
          >
            {t.contact.heading}
          </h2>
          <p className="text-text-muted mb-6">
            {t.contact.whatsappLabel}:{' '}
            <span className="text-brand-forest font-semibold">{WHATSAPP_NUMBER}</span>
          </p>
          <WhatsAppLink
            ariaLabel={t.contact.cta}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-cta-gradient text-white font-semibold shadow-cta-glow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-accent-gold-bright focus:ring-offset-2 focus:ring-offset-brand-cream"
          >
            {t.contact.cta}
          </WhatsAppLink>
        </div>
      </section>

      <footer className="px-4 py-10 bg-brand-hero-dark text-text-on-hero/90 text-center border-t border-brand-forest-muted/30">
        <p className="text-sm max-w-md mx-auto leading-relaxed">
          {t.footer.line}
        </p>
      </footer>
    </main>
  );
}
