import {
  Heart, GraduationCap, Calendar, Gift
} from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import ContactCard from '@/components/shared/ContactCard';
import SectionHeader from '@/components/shared/SectionHeader';
import InfoCard from '@/components/shared/InfoCard';
import CTABanner from '@/components/shared/CTABanner';

const FreiwilligenbereichPage = () => {
  const benefits = [
    {
      icon: Calendar,
      title: 'Regelmäßiger Jour-fixe',
      description: 'Treffen für die gesamte Freiwilligenabteilung zum Netzwerken und Erfahrungsaustausch.',
      iconColor: 'text-dragon-green',
    },
    {
      icon: Gift,
      title: 'Feiern & Feste',
      description: 'Einladungen zu allen internen Feiern und Festivitäten der Drachenreiter.',
      iconColor: 'text-golden',
    },
    {
      icon: GraduationCap,
      title: 'Kostenlose Fortbildungen',
      description: 'Teilnahme an internen Schulungsprogrammen — inklusive Finanzierung externer Weiterbildungen.',
      iconColor: 'text-deep-blue',
    },
    {
      icon: Heart,
      title: 'Individuelle Anerkennung',
      description: 'Persönliche Gespräche und zusätzliche Anerkennungsmöglichkeiten wie Konferenzbesuche.',
      iconColor: 'text-coral',
    },
  ];

  return (
    <>
      <PageHero
        title="Freiwilligenbereich"
        subtitle="Vielfältig und reich an Kompetenzen — Freiwillige und Fachkräfte aus unterschiedlichen Berufsfeldern und Altersgruppen."
        breadcrumbs={[{ label: 'Freiwilligenbereich' }]}
      />

      {/* Intro */}
      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeader
                label="Engagement"
                title="Freiwilligenarbeit bei den Drachenreitern"
              />
              <div className="space-y-4 font-body text-berlin-light leading-relaxed">
                <p>
                  Unser Freiwilligenbereich ist sehr vielfältig und reich an Kompetenzen.
                  Freiwillige und Fachkräfte aus unterschiedlichen Berufsfeldern und
                  Altersgruppen tragen durch formellen Freiwilligendienst (BFD/FSJ)
                  oder informelles Ehrenamt bei.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="bg-sky-mist/50 rounded-xl p-6">
                  <h3 className="font-display text-lg font-semibold text-berlin-charcoal mb-2">
                    Bundesfreiwilligendienst (BFD)
                  </h3>
                  <p className="font-body text-sm text-berlin-light">
                    Formeller Freiwilligendienst mit strukturierter Begleitung und Seminartagen.
                  </p>
                </div>
                <div className="bg-sky-mist/50 rounded-xl p-6">
                  <h3 className="font-display text-lg font-semibold text-berlin-charcoal mb-2">
                    Freiwilliges Soziales Jahr (FSJ)
                  </h3>
                  <p className="font-body text-sm text-berlin-light">
                    Jahresprogramm für junge Menschen mit pädagogischer Begleitung.
                  </p>
                </div>
                <div className="bg-sky-mist/50 rounded-xl p-6">
                  <h3 className="font-display text-lg font-semibold text-berlin-charcoal mb-2">
                    Ehrenamtliches Engagement
                  </h3>
                  <p className="font-body text-sm text-berlin-light">
                    Flexibles ehrenamtliches Engagement in verschiedenen Bereichen.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <SectionHeader
                label="Kontakt"
                title="Interesse?"
              />
              <ContactCard
                name="André Schumacher"
                role="Geschäftsführer"
                address="Langhansstr. 97, 13086 Berlin"
                phone="+49 (0)30 83205 801"
                mobile="+49 (0)176 307 374 21"
                fax="+49 (0)30 83205 809"
                email="a.schumacher@drachenreiter.berlin"
                hours="Di–Fr, 10:00–17:00 Uhr"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gradient-to-b from-warm-white to-sky-mist">
        <div className="container-custom">
          <SectionHeader
            label="Vorteile"
            title="Was wir unseren Freiwilligen bieten"
            centered
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <InfoCard key={b.title} {...b} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Werden Sie Teil unseres Teams"
        description="Wir freuen uns auf Ihre Bewerbung als Freiwillige*r bei den Drachenreitern."
      />
    </>
  );
};

export default FreiwilligenbereichPage;
