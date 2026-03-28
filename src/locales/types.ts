export type Locale = 'en' | 'hi';

export type SessionSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
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
    intro: string[];
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
