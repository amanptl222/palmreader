export type Locale = 'en' | 'hi';

export type IntroSegment =
  | { kind: 'text'; value: string }
  | { kind: 'bold'; value: string; highlight?: boolean }
  | { kind: 'boldUnderline'; value: string };

/** Plain string or inline bold / underline segments (e.g. session details). */
export type RichBulletLine = string | IntroSegment[];

export type SessionSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: RichBulletLine[];
  checks?: string[];
  note?: string;
};

export type Messages = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    subtitle: string;
    intro: string;
    cta: string;
    whatsappSuffix: string;
  };
  session: {
    title: string;
    /** First paragraph plain; second paragraph as segments (bold / bold+underline). */
    intro: [string, IntroSegment[]];
    sessionDetails: SessionSection;
    guidelines: SessionSection;
    whatYouGet: SessionSection;
    personality: SessionSection;
    specialFacilities: SessionSection;
    financial: SessionSection;
    health: SessionSection;
  };
  feedback: { heading: string; subtitle: string };
  contact: {
    heading: string;
    whatsappLabel: string;
    cta: string;
  };
  footer: { line: string };
  lang: {
    label: string;
    en: string;
    hi: string;
  };
};
