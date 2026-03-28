'use client';

import type { ReactNode } from 'react';
import { useLocale } from '@/contexts/LocaleContext';
import { IconCheck } from '@/components/icons';
import type { SessionSection } from '@/locales/types';

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5" role="list">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-sm sm:text-[15px] text-text-muted leading-relaxed">
          <span className="mt-0.5 shrink-0">
            <IconCheck />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5" role="list">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex gap-3 text-sm sm:text-[15px] text-text-muted leading-relaxed"
        >
          <span className="text-accent-gold-bright font-bold shrink-0" aria-hidden>
            ✔
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SectionBlock({
  section,
  children,
}: {
  section: SessionSection;
  children: ReactNode;
}) {
  return (
    <div className="scroll-mt-8">
      <h3 className="text-base sm:text-lg font-semibold text-brand-forest mb-3 sm:mb-4">
        {section.heading}
      </h3>
      {children}
    </div>
  );
}

export function SessionSections() {
  const { t } = useLocale();
  const s = t.session;

  const details = s.sessionDetails;
  const [durationLine, chargesLabel] = details.paragraphs ?? [];

  return (
    <section
      id="palmistry-session"
      className="px-4 py-10 sm:py-14 bg-warm-gradient border-y border-brand-forest/10"
      aria-labelledby="session-main-title"
    >
      <div className="max-w-3xl mx-auto space-y-10 sm:space-y-12">
        <div>
          <h2
            id="session-main-title"
            className="text-xl sm:text-2xl font-serif font-semibold text-brand-forest mb-4 sm:mb-6"
          >
            {s.title}
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-text-muted leading-relaxed">
            {s.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <SectionBlock section={details}>
          <div className="rounded-2xl border-2 border-brand-forest/15 bg-white/90 p-4 sm:p-6 space-y-4 shadow-card">
            {durationLine ? (
              <p className="text-sm sm:text-[15px] text-brand-forest font-semibold">
                {durationLine}
              </p>
            ) : null}
            {chargesLabel ? (
              <p className="text-sm sm:text-[15px] text-brand-forest font-semibold pt-1">
                {chargesLabel}
              </p>
            ) : null}
            {details.bullets?.length ? <BulletList items={details.bullets} /> : null}
          </div>
        </SectionBlock>

        <SectionBlock section={s.guidelines}>
          {s.guidelines.bullets ? <BulletList items={s.guidelines.bullets} /> : null}
        </SectionBlock>

        <SectionBlock section={s.whatYouGet}>
          {s.whatYouGet.checks ? <CheckList items={s.whatYouGet.checks} /> : null}
        </SectionBlock>

        <SectionBlock section={s.personality}>
          {s.personality.bullets ? <BulletList items={s.personality.bullets} /> : null}
          {s.personality.note ? (
            <p className="mt-4 text-sm sm:text-[15px] text-brand-forest-muted leading-relaxed border-l-4 border-accent-gold-bright pl-4 py-2 bg-brand-peach/50 rounded-r-lg">
              {s.personality.note}
            </p>
          ) : null}
        </SectionBlock>

        <SectionBlock section={s.specialFacilities}>
          {s.specialFacilities.bullets ? (
            <BulletList items={s.specialFacilities.bullets} />
          ) : null}
        </SectionBlock>

        <div className="grid sm:grid-cols-2 gap-8 sm:gap-10 pt-2 border-t border-brand-forest/15">
          <SectionBlock section={s.financial}>
            {s.financial.bullets ? <BulletList items={s.financial.bullets} /> : null}
          </SectionBlock>
          <SectionBlock section={s.health}>
            {s.health.bullets ? <BulletList items={s.health.bullets} /> : null}
          </SectionBlock>
        </div>
      </div>
    </section>
  );
}
