import {
  Wind, Baby, Stethoscope, BookOpen, CheckCircle
} from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import ContactCard from '@/components/shared/ContactCard';
import SectionHeader from '@/components/shared/SectionHeader';
import CTABanner from '@/components/shared/CTABanner';

const ScotsonTherapiePage = () => {
  const diagnoses = [
    'Zerebralparese',
    'Autismus',
    'Epilepsie',
    'Entwicklungsverzögerungen',
    'Genetische Störungen',
    'Lernschwierigkeiten',
    'Verhaltensauffälligkeiten',
    'Komplikationen durch Frühgeburt',
  ];

  const benefits = [
    'Verbesserte Hirnentwicklung und Bewegung',
    'Besserer Blutdruck und Haltung',
    'Verbesserte Schlafqualität',
    'Bessere Sprach-, Kau- und Schluckfähigkeit',
    'Verbesserte Verdauung und Ausdauer',
    'Stärkeres Immunsystem',
  ];

  return (
    <>
      <PageHero
        title="Die Scotson Technique (TST)"
        subtitle="Sanfte Atemtherapie für Kinder mit Behinderung — entwickelt von Linda Scotson am Advance Centre in England."
        breadcrumbs={[
          { label: 'Angebote' },
          { label: 'Scotson Technique' },
        ]}
      />

      {/* Was ist TST */}
      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeader
                label="Die Methode"
                title="Atemtherapie durch sanfte Druckmassage"
              />
              <div className="space-y-4 font-body text-berlin-light leading-relaxed">
                <p>
                  Die Scotson Technique ist eine Atemtherapie, bei der Eltern von Kindern mit
                  Behinderung lernen, sanfte Druckmassagen anzuwenden. Diese verbessern die Blut-
                  und Sauerstoffzirkulation und stärken das Zwerchfell.
                </p>
                <p className="italic border-l-4 border-dragon-green pl-4 text-berlin-charcoal">
                  „We attempt not to treat the individual illness/disability, but to restore
                  the dynamics of normal processes that depend on normal breathing."
                </p>
                <p>
                  Der Fokus liegt auf der Erkennung unregelmäßiger, versteckter oder abnormaler
                  Atemmuster. Die sanfte Druckmassage fördert einen gesunden Stoffwechsel und
                  unterstützt die Entwicklung von Gehirn und Zwerchfell.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-sky-mist to-warm-white rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Wind className="w-8 h-8 text-dragon-green" />
                  <h3 className="font-display text-xl font-semibold text-berlin-charcoal">Ergebnisse</h3>
                </div>
                <p className="font-body text-sm text-berlin-light mb-4">
                  Verbesserungen sind oft schon innerhalb von 2 Wochen spürbar. Eltern berichten
                  von Fortschritten, die medizinische Prognosen übertreffen.
                </p>
                <ul className="space-y-2">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 font-body text-sm text-berlin-light">
                      <CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zielgruppen */}
      <section className="section-padding bg-gradient-to-b from-warm-white to-sky-mist">
        <div className="container-custom">
          <SectionHeader
            label="Zielgruppe"
            title="Geeignete Diagnosen"
            description="Die Scotson Technique eignet sich für Kinder und Jugendliche mit folgenden Diagnosen:"
            centered
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {diagnoses.map((d) => (
              <div key={d} className="bg-white rounded-xl p-4 shadow-card text-center">
                <p className="font-ui font-medium text-sm text-berlin-charcoal">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops & Kontakt */}
      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader
                label="Therapie in Berlin"
                title="Workshops und Kurse"
              />
              <div className="space-y-4 font-body text-berlin-light leading-relaxed">
                <p>
                  Workshops und Vorträge werden von Linda und Lili Scotson aus East Grinstead,
                  England, durchgeführt. Linda leitet das Advance Centre und hat bereits
                  Hunderten von Kindern geholfen.
                </p>
                <div className="bg-warm-cream/50 rounded-xl p-6 border border-golden/20 space-y-3">
                  <div className="flex items-start gap-3">
                    <Stethoscope className="w-5 h-5 text-dragon-green flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-ui font-medium text-berlin-charcoal">Ersteinschätzung</p>
                      <p className="text-sm">1 Stunde verfügbar</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-dragon-green flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-ui font-medium text-berlin-charcoal">Erstes Behandlungsset</p>
                      <p className="text-sm">2–5 Tage (insgesamt 10 Stunden)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Baby className="w-5 h-5 text-dragon-green flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-ui font-medium text-berlin-charcoal">Für Familien</p>
                      <p className="text-sm">Einzelfamilien oder Gruppen (max. 3 Familien)</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm">
                  Die meisten Kinder empfinden die Massage als angenehm. Elternberichte finden Sie auf{' '}
                  <a
                    href="https://www.advancecentres.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dragon-green hover:underline"
                  >
                    www.advancecentres.com
                  </a>
                </p>
              </div>
            </div>
            <div>
              <SectionHeader
                label="Kontakt"
                title="Ansprechpartnerin"
                as="h3"
              />
              <ContactCard
                name="Maike Dieckmann"
                role="Koordinatorin Eingliederungshilfe"
                phone="+49 (0)30 83205 804"
                fax="+49 (0)30 83205 809"
                email="m.dieckmann@drachenreiter.berlin"
              />
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Beratung zur Scotson Technique"
        description="Kontaktieren Sie uns für eine Ersteinschätzung oder Informationen zu kommenden Workshops."
      />
    </>
  );
};

export default ScotsonTherapiePage;
