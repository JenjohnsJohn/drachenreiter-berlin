import { Link } from 'react-router-dom';
import {
  Users, Clock, Leaf, Heart, Palette, Dumbbell,
  ArrowRight, Apple, Theater
} from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import ContactCard from '@/components/shared/ContactCard';
import SectionHeader from '@/components/shared/SectionHeader';
import InfoCard from '@/components/shared/InfoCard';
import CTABanner from '@/components/shared/CTABanner';
import { ROUTES } from '@/lib/routes';

const DrachenkidsPage = () => {
  const features = [
    {
      icon: Heart,
      title: 'Situationsansatz',
      description: 'Bedürfnisorientierte Arbeit mit einem ganzheitlichen pädagogischen Ansatz.',
      iconColor: 'text-dragon-green',
    },
    {
      icon: Apple,
      title: 'Gesundheit & Ernährung',
      description: 'Gesunde Ernährung und Gesundheitsbewusstsein als Grundpfeiler des Alltags.',
      iconColor: 'text-sage',
    },
    {
      icon: Dumbbell,
      title: 'Bewegungsförderung',
      description: 'Vielfältige Bewegungsräume für aktive und selbstbestimmte Entwicklung.',
      iconColor: 'text-deep-blue',
    },
    {
      icon: Leaf,
      title: 'Nachhaltigkeit',
      description: 'Nachhaltige Materialien statt Plastik — Verantwortung gegenüber der Umwelt.',
      iconColor: 'text-sage',
    },
    {
      icon: Heart,
      title: 'Emotionale Kompetenzen',
      description: 'Liebevolle und achtsame Haltung als Grundlage sozialer und emotionaler Entwicklung.',
      iconColor: 'text-coral',
    },
    {
      icon: Palette,
      title: 'Kreativ & Theater',
      description: 'Kreativ- und Theaterräume, Bauecken und Planschräume für freies Spielen.',
      iconColor: 'text-lavender',
    },
  ];

  return (
    <>
      <PageHero
        title="KiTa Drachen Kids"
        subtitle="Ganzheitliche Betreuung für 85 Kinder in Berlin-Hellersdorf — seit Sommer 2020 mit nachhaltigem Konzept."
        breadcrumbs={[
          { label: 'Angebote' },
          { label: 'KiTa Drachen Kids' },
        ]}
      />

      {/* Key Facts */}
      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Users, label: 'Plätze', value: '85 Kinder', sub: '24 Nestbereich + 61 Elementar' },
              { icon: Users, label: 'Team', value: 'Multiprofessionell', sub: 'ErzieherInnen, FacherzieherInnen, HEP' },
              { icon: Clock, label: 'Öffnungszeiten', value: '8:00–17:00', sub: 'Montag bis Freitag' },
              { icon: Theater, label: 'Eröffnet', value: 'Sommer 2020', sub: 'Berlin-Hellersdorf' },
            ].map((fact) => (
              <div key={fact.label} className="bg-white rounded-2xl p-6 shadow-card text-center">
                <div className="w-12 h-12 rounded-xl bg-sky-mist flex items-center justify-center mx-auto mb-3">
                  <fact.icon className="w-6 h-6 text-dragon-green" />
                </div>
                <p className="font-ui text-xs uppercase tracking-wider text-berlin-light mb-1">{fact.label}</p>
                <p className="font-display text-xl font-bold text-berlin-charcoal">{fact.value}</p>
                <p className="font-body text-xs text-berlin-light mt-1">{fact.sub}</p>
              </div>
            ))}
          </div>

          <SectionHeader
            label="Unser Ansatz"
            title="Ganzheitlich. Bedürfnisorientiert. Nachhaltig."
            description="In der KiTa Drachen Kids steht die liebevolle und achtsame Haltung im Mittelpunkt. Kinder entwickeln sich selbstbestimmt in verschiedenen Funktionsräumen."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <InfoCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* Räume & Integrationskinder */}
      <section className="section-padding bg-gradient-to-b from-warm-white to-sky-mist">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader
                label="Unsere Räume"
                title="Vielfältige Funktionsbereiche"
              />
              <p className="font-body text-berlin-light leading-relaxed mb-6">
                Die Kinder können sich in verschiedenen Räumen selbstbestimmt ausprobieren
                und ihre Fähigkeiten entdecken:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Bewegungsräume für aktives Spiel',
                  'Bauecken für kreatives Konstruieren',
                  'Planschräume für Wasserexperimente',
                  'Kreativ- und Theaterräume',
                  'Kinderrestaurant für gemeinsame Mahlzeiten',
                  'Nestbereich für die Jüngsten',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 font-body text-sm text-berlin-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-golden mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-warm-cream/50 rounded-xl p-6 border border-golden/20">
                <h4 className="font-display text-lg font-semibold text-berlin-charcoal mb-2">
                  Integrationskinder
                </h4>
                <p className="font-body text-sm text-berlin-light leading-relaxed">
                  Anfragen für Integrationskinder bitte so früh wie möglich stellen, damit die
                  notwendige Betreuung und Infrastruktur organisiert werden kann.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <SectionHeader
                label="Kontakt"
                title="Drachen Kids erreichen"
              />
              <ContactCard
                name="Maria Schwarze"
                role="Kitaleitung"
                address="Cottbusser Platz 12, 12627 Berlin-Hellersdorf"
                phone="+49 (0)30 99285 925"
                email="kita-dk@drachenreiter.berlin"
                hours="Mo 9:00–10:30, Mi 13:00–14:30"
              />
              <Link
                to={ROUTES.KITA_ANMELDUNG}
                className="inline-flex items-center gap-2 px-6 py-3 bg-dragon-green text-white font-ui font-semibold rounded-lg hover:bg-dragon-dark transition-all"
              >
                Platz anfragen
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Platz sichern"
        description="Melden Sie Ihr Kind jetzt für die KiTa Drachen Kids an — wir freuen uns auf Sie!"
      />
    </>
  );
};

export default DrachenkidsPage;
