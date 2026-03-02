import {
  HeartHandshake, Target, Users, Brain, Hand, Languages
} from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import ContactCard from '@/components/shared/ContactCard';
import SectionHeader from '@/components/shared/SectionHeader';
import InfoCard from '@/components/shared/InfoCard';
import CTABanner from '@/components/shared/CTABanner';

const EingliederungshilfePage = () => {
  const specializations = [
    {
      icon: Brain,
      title: 'Autismus',
      description: 'Spezialisierte Betreuung und individuelle Förderkonzepte für Menschen im Autismus-Spektrum.',
      iconColor: 'text-deep-blue',
    },
    {
      icon: Hand,
      title: 'Infantile Cerebralparese',
      description: 'Erfahrene Fachkräfte für die Begleitung von Kindern und Jugendlichen mit Cerebralparese.',
      iconColor: 'text-dragon-green',
    },
    {
      icon: Languages,
      title: 'Deutsche Gebärdensprache',
      description: 'Kommunikation in DGS — barrierefreie Verständigung für gehörlose und schwerhörige Menschen.',
      iconColor: 'text-golden',
    },
    {
      icon: Target,
      title: 'Konduktive Förderung nach Petö',
      description: 'Ganzheitliche Förderung nach dem Petö-Konzept für größtmögliche Selbstständigkeit im Alltag.',
      iconColor: 'text-sage',
    },
  ];

  return (
    <>
      <PageHero
        title="Eingliederungshilfe"
        subtitle="Individuelle Einzelfallhilfe nach §§ 112, 113 SGB IX für Kinder, Jugendliche und junge Erwachsene."
        breadcrumbs={[
          { label: 'Angebote' },
          { label: 'Eingliederungshilfe' },
        ]}
      />

      {/* Ausrichtung */}
      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeader
                label="Unsere Ausrichtung"
                title="Inklusiv. Ressourcenorientiert. Systemisch."
              />
              <div className="space-y-4 font-body text-berlin-light leading-relaxed">
                <p>
                  Alle Einzelfallhilfen der Drachenreiter gGmbH haben einen inklusiven Ansatz,
                  der sich an den Stärken und Ressourcen der Klient*innen orientiert. Die
                  individuellen Bedürfnisse stehen im Mittelpunkt unserer Arbeit.
                </p>
                <p>
                  In enger Zusammenarbeit mit allen Beteiligten — Klient*innen, Angehörigen,
                  Assistent*innen, KiTas, Schulen, Ausbildungsstätten und Arbeitgebern —
                  entwickeln wir maßgeschneiderte Förderpläne mit konkreten Zielen.
                </p>
                <p>
                  Langfristige Planung sichert Entwicklungsgarantien und wahrt dabei die
                  Selbstbestimmung der betreuten Menschen.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-sky-mist to-warm-white rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <HeartHandshake className="w-8 h-8 text-dragon-green" />
                <h3 className="font-display text-xl font-semibold text-berlin-charcoal">Ziel unserer Arbeit</h3>
              </div>
              <p className="font-body text-berlin-light leading-relaxed mb-4">
                Eine drohende Behinderung zu verhüten, frühzeitig zu erkennen und durch
                geeignete Unterstützung deren Folgen zu mildern — und die Teilhabe am
                gesellschaftlichen Leben zu ermöglichen.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-golden" />
                <span className="font-ui text-berlin-light">
                  Kooperation mit „Kinder brauchen Matsch" — integrative Freizeitangebote & Ferienreisen
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schwerpunkte */}
      <section className="section-padding bg-gradient-to-b from-warm-white to-sky-mist">
        <div className="container-custom">
          <SectionHeader
            label="Unsere Schwerpunkte"
            title="Fachliche Expertise"
            description="Unser Team bringt besondere Erfahrung in folgenden Bereichen mit:"
            centered
            as="h3"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializations.map((s) => (
              <InfoCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <SectionHeader
            label="Kontakt"
            title="Ihre Ansprechpartnerinnen"
            description="Unsere Koordinatorinnen beraten Sie gerne zu allen Fragen der Eingliederungshilfe."
            centered
            as="h3"
          />
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <ContactCard
              name="Julia Fischer"
              role="Koordinatorin Eingliederungshilfe"
              phone="+49 (0)30 67068 560"
              email="efh@drachenreiter.berlin"
            />
            <ContactCard
              name="Kerstin Ciensky"
              role="Koordinatorin Eingliederungshilfe"
              phone="+49 (0)155 60394772"
              email="efh2@drachenreiter.berlin"
            />
          </div>
        </div>
      </section>

      <CTABanner
        title="Beratung vereinbaren"
        description="Kontaktieren Sie uns für ein unverbindliches Erstgespräch zu unseren Eingliederungshilfe-Leistungen."
      />
    </>
  );
};

export default EingliederungshilfePage;
