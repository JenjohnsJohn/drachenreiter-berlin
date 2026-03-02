import { Link } from 'react-router-dom';
import {
  Droplets, Flame, Wind, TreePine, Baby,
  Users, Clock, Euro, ArrowRight, Utensils, Eye
} from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import ContactCard from '@/components/shared/ContactCard';
import SectionHeader from '@/components/shared/SectionHeader';
import InfoCard from '@/components/shared/InfoCard';
import CTABanner from '@/components/shared/CTABanner';
import { ROUTES } from '@/lib/routes';

const DrachenhoehlePage = () => {
  const features = [
    {
      icon: Baby,
      title: 'Pikler & Montessori',
      description: 'Autonome Bewegungsentwicklung nach Emmi Pikler, ergänzt durch Montessori- und Juul-Ansätze.',
      iconColor: 'text-dragon-green',
    },
    {
      icon: Utensils,
      title: 'Bio-Ernährung',
      description: 'Überwiegend vegetarische Mahlzeiten mit hohem Anteil biologisch-vollwertiger Nahrungsmittel.',
      iconColor: 'text-sage',
    },
    {
      icon: Droplets,
      title: 'Wasserangebote',
      description: 'Wasserrinne, Planschbecken, Erlebnisdusche und Kneipp-Fußbäder für spielerisches Erleben.',
      iconColor: 'text-deep-blue',
    },
    {
      icon: Flame,
      title: 'Sauna',
      description: 'Kindgerechte Sauna ab 2–3 Jahren mit angepassten Temperaturen und Aufenthaltsdauern.',
      iconColor: 'text-coral',
    },
    {
      icon: Wind,
      title: 'Salzraum',
      description: 'Therapeutischer Salzraum mit Salzzerstäuber — wohltuend bei Allergien, Atemwegs- und Hautproblemen.',
      iconColor: 'text-lavender',
    },
    {
      icon: TreePine,
      title: 'Naturerfahrung',
      description: 'Regelmäßige Ausflüge in die Natur mit saisonalen Aktivitäten und Erkundungsprojekten.',
      iconColor: 'text-sage',
    },
  ];

  return (
    <>
      <PageHero
        title="KiTa Drachenhöhle"
        subtitle="Ganzheitliche Betreuung für bis zu 25 Kinder in Berlin-Prenzlauer Berg — mit Pikler, Montessori, Sauna und Salzraum."
        breadcrumbs={[
          { label: 'Angebote' },
          { label: 'KiTa Drachenhöhle' },
        ]}
      />

      {/* Key Facts */}
      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Users, label: 'Plätze', value: '25 Kinder', sub: '~10 Krippe, 15 Elementar' },
              { icon: Users, label: 'Team', value: '6 Fachkräfte', sub: 'plus Praktikanten & FSJ' },
              { icon: Clock, label: 'Öffnungszeiten', value: '8:00–17:00', sub: 'Mo–Fr, 3 Wochen Sommerpause' },
              { icon: Euro, label: 'Elternbeitrag', value: '70,00 € / Monat', sub: '23 € Essen + 47 € Ausstattung' },
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
            label="Unser Konzept"
            title="Gesundheit — Praktiken und spielerische Vermittlung"
            description="Die KiTa Drachenhöhle verbindet bewährte pädagogische Ansätze mit einem einzigartigen Gesundheitskonzept. Auf 200 m² bieten wir Kindern eine naturnahe, achtsame Umgebung."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <InfoCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* Eingewöhnung */}
      <section className="section-padding bg-gradient-to-b from-warm-white to-sky-mist">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                label="Ankommen"
                title="Berliner Eingewöhnungsmodell"
                description="Wir arbeiten nach dem Berliner Eingewöhnungsmodell mit individuellen, behutsamen Übergängen. Vertrauen, verlässliche Strukturen und eine enge Beziehung zur Bezugsperson stehen im Mittelpunkt."
              />
              <div className="space-y-4 font-body text-berlin-light leading-relaxed">
                <p>
                  Unsere Gruppenräume sind durch Durchgänge verbunden, so dass Kinder flexibel zwischen
                  individuellen und gemeinschaftlichen Aktivitäten wechseln können. „Nest"-Strukturen
                  bieten Sicherheit, während offene Bereiche zum Entdecken einladen.
                </p>
                <p>
                  Natürliche Materialien, multifunktionale Elemente und Sichtfenster auf Kinderhöhe
                  schaffen eine Umgebung, die Sinneserfahrung, Phantasiespiel und soziale Interaktion fördert.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-6 h-6 text-dragon-green" />
                <h3 className="font-display text-xl font-semibold text-berlin-charcoal">Raumgestaltung</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Geräumiger Eingangs- und Garderobenbereich',
                  'Verbundene Gruppenräume für flexible Nutzung',
                  'Hengstenberg- und Biber-Kletterelemente',
                  'Snoezelen-Raum für sensorische Erfahrungen',
                  'Raumteiler und Podeste mit thematischen Ecken',
                  'Sichtfenster auf Augenhöhe der Kinder',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 font-body text-sm text-berlin-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-golden mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integrationskinder & Anmeldung */}
      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader
                label="Inklusion"
                title="Integrationskinder"
              />
              <p className="font-body text-berlin-light leading-relaxed mb-6">
                Anfragen für Integrationskinder-Plätze sollten möglichst frühzeitig gestellt werden,
                damit die notwendige Betreuung und Infrastruktur rechtzeitig geplant werden kann.
              </p>
              <Link
                to={ROUTES.KITA_ANMELDUNG}
                className="inline-flex items-center gap-2 px-6 py-3 bg-dragon-green text-white font-ui font-semibold rounded-lg hover:bg-dragon-dark transition-all"
              >
                Platz anfragen
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div>
              <SectionHeader
                label="Kontakt"
                title="Drachenhöhle erreichen"
                as="h3"
              />
              <ContactCard
                name="KiTa Drachenhöhle"
                role="Drachenreiter gGmbH"
                address="Gudvanger Straße 12, 10439 Berlin-Prenzlauer Berg"
                phone="+49 (0)30 83205 800"
                email="kita-dh@drachenreiter.berlin"
                hours="Mo–Fr, 8:00–17:00 Uhr"
              />
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Platz sichern"
        description="Melden Sie Ihr Kind jetzt für die KiTa Drachenhöhle an — wir freuen uns auf Sie!"
      />
    </>
  );
};

export default DrachenhoehlePage;
