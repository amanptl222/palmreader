import {
  hero,
  about,
  palmistryBenefits,
  approach,
  services,
  whyChooseUs,
  contact,
  site,
} from '@/config/content';
import {
  IconHand,
  IconLeaf,
  IconCompass,
  IconMeditation,
  IconCheck,
  ApproachIcon,
} from '@/components/icons';

const WHATSAPP_BASE = 'https://wa.me/91';

function WhatsAppLink({
  number,
  children,
  className = '',
}: {
  number: string;
  children: React.ReactNode;
  className?: string;
}) {
  const num = number.replace(/\D/g, '');
  const href = `${WHATSAPP_BASE}${num}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={`Chat on WhatsApp: ${number}`}
    >
      {children}
    </a>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero */}
      <header className="px-4 py-12 sm:py-16 md:py-20 max-w-3xl mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-accent-green mb-3">
          {hero.title}
        </h1>
        <p className="text-lg sm:text-xl text-accent-brown font-medium mb-4">
          {hero.subtitle}
        </p>
        <p className="text-text-muted text-base sm:text-lg leading-relaxed mb-8">
          {hero.intro}
        </p>
        <WhatsAppLink
          number={contact.whatsappNumber}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-green text-white font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-accent-green focus:ring-offset-2"
        >
          <IconHand aria-hidden />
          {hero.ctaText} (WhatsApp)
        </WhatsAppLink>
      </header>

      {/* 2. About */}
      <section
        id="about"
        className="px-4 py-12 sm:py-16 bg-white/50 border-y border-accent-brown/10"
        aria-labelledby="about-heading"
      >
        <div className="max-w-2xl mx-auto">
          <h2 id="about-heading" className="text-xl sm:text-2xl font-serif font-semibold text-accent-green mb-6">
            {about.heading}
          </h2>
          <div className="space-y-4 text-text-muted leading-relaxed">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What Palmistry Can Help */}
      <section
        id="benefits"
        className="px-4 py-12 sm:py-16"
        aria-labelledby="benefits-heading"
      >
        <div className="max-w-2xl mx-auto">
          <h2 id="benefits-heading" className="text-xl sm:text-2xl font-serif font-semibold text-accent-green mb-8">
            {palmistryBenefits.heading}
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3 mb-8" role="list">
            {palmistryBenefits.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <IconCheck />
                <span className="text-text-primary">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-accent-brown font-medium italic border-l-4 border-accent-gold pl-4 py-2">
            &ldquo;{palmistryBenefits.note}&rdquo;
          </p>
        </div>
      </section>

      {/* 4. Our Professional Approach */}
      <section
        id="approach"
        className="px-4 py-12 sm:py-16 bg-white/50 border-y border-accent-brown/10"
        aria-labelledby="approach-heading"
      >
        <div className="max-w-2xl mx-auto">
          <h2 id="approach-heading" className="text-xl sm:text-2xl font-serif font-semibold text-accent-green mb-8">
            {approach.heading}
          </h2>
          <ul className="space-y-4" role="list">
            {approach.points.map((point, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-0.5">
                  <ApproachIcon icon={point.icon} />
                </span>
                <span className="text-text-muted">{point.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Services */}
      <section
        id="services"
        className="px-4 py-12 sm:py-16"
        aria-labelledby="services-heading"
      >
        <div className="max-w-4xl mx-auto">
          <h2 id="services-heading" className="text-xl sm:text-2xl font-serif font-semibold text-accent-green mb-8 text-center">
            {services.heading}
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {services.cards.map((card, i) => (
              <article
                key={i}
                className="p-6 rounded-lg border border-accent-brown/20 bg-white/70 transition-colors hover:border-accent-brown/30"
              >
                <div className="flex items-start gap-3">
                  <IconCheck />
                  <div>
                    <h3 className="font-semibold text-accent-green mb-1">
                      {card.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us */}
      <section
        id="why-choose-us"
        className="px-4 py-12 sm:py-16 bg-white/50 border-y border-accent-brown/10"
        aria-labelledby="why-heading"
      >
        <div className="max-w-2xl mx-auto">
          <h2 id="why-heading" className="text-xl sm:text-2xl font-serif font-semibold text-accent-green mb-8">
            {whyChooseUs.heading}
          </h2>
          <ul className="space-y-3" role="list">
            {whyChooseUs.points.map((point, i) => (
              <li key={i} className="flex items-center gap-3">
                <IconCheck />
                <span className="text-text-muted">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. Contact */}
      <section
        id="contact"
        className="px-4 py-12 sm:py-16"
        aria-labelledby="contact-heading"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 id="contact-heading" className="text-xl sm:text-2xl font-serif font-semibold text-accent-green mb-4">
            {contact.heading}
          </h2>
          <p className="text-text-muted mb-6">
            WhatsApp: <span className="text-text-primary font-medium">{contact.whatsappDisplay}</span>
          </p>
          <WhatsAppLink
            number={contact.whatsappNumber}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-green text-white font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-accent-green focus:ring-offset-2"
          >
            {contact.ctaText}
          </WhatsAppLink>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="px-4 py-8 border-t border-accent-brown/10 text-center">
        <p className="text-text-muted text-sm max-w-md mx-auto">
          {site.footerLine}
        </p>
      </footer>
    </main>
  );
}
