import {
  Building2, Users, FileText
} from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import SectionHeader from '@/components/shared/SectionHeader';
import CTABanner from '@/components/shared/CTABanner';

const TransparenzPage = () => {
  const staffStructure = [
    { label: 'Vollzeitbeschäftigte', value: '11' },
    { label: 'Teilzeitbeschäftigte', value: '2' },
    { label: 'Bundesfreiwillige (BFD)', value: '2' },
    { label: 'Freie Mitarbeiter*innen', value: '20' },
    { label: 'Praktikant*innen', value: '2' },
    { label: 'Ehrenamtliche', value: '0' },
    { label: 'Geringfügig Beschäftigte', value: '1' },
  ];

  const documents = [
    { category: 'Gesellschaftsverträge', years: '2012–2013' },
    { category: 'Tätigkeitsberichte', years: '2012–2021' },
    { category: 'Jahresabschlüsse', years: '2012–2021' },
  ];

  return (
    <>
      <PageHero
        title="Transparenz ist uns wichtig!"
        subtitle="Die Drachenreiter gGmbH ist aktives Mitglied der Initiative Transparente Zivilgesellschaft."
        breadcrumbs={[
          { label: 'Träger', to: '/traeger' },
          { label: 'Transparenz' },
        ]}
      />

      {/* Intro */}
      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <SectionHeader
              label="Initiative Transparente Zivilgesellschaft"
              title="Offenlegung unserer Organisation"
              description="Wir legen Ziele, Mittelherkunft, Mittelverwendung und Entscheidungsträger offen, damit Spender*innen und Unterstützer*innen unserer Arbeit vertrauen können."
            />
          </div>

          {/* Organization Details */}
          <div className="grid lg:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-2xl p-8 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-6 h-6 text-dragon-green" />
                <h3 className="font-display text-xl font-semibold text-berlin-charcoal">Organisation</h3>
              </div>
              <dl className="space-y-4">
                {[
                  { dt: 'Vollständiger Name', dd: 'Drachenreiter gGmbH — Eigenart Gestaltung Einklang Lebenslust' },
                  { dt: 'Sitz', dd: 'Berlin, Langhansstr. 97, 13086 Berlin' },
                  { dt: 'Gründung', dd: '2012' },
                  { dt: 'Steuernummer', dd: '27/611/03826' },
                  { dt: 'Gesellschafter', dd: 'André Schumacher' },
                  { dt: 'Geschäftsführer', dd: 'André Schumacher' },
                ].map((item) => (
                  <div key={item.dt}>
                    <dt className="font-ui text-xs uppercase tracking-wider text-berlin-light">{item.dt}</dt>
                    <dd className="font-body text-berlin-charcoal">{item.dd}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Staff Structure */}
            <div className="bg-white rounded-2xl p-8 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-dragon-green" />
                <h3 className="font-display text-xl font-semibold text-berlin-charcoal">Personalstruktur</h3>
              </div>
              <div className="space-y-3">
                {staffStructure.map((s) => (
                  <div key={s.label} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                    <span className="font-body text-sm text-berlin-light">{s.label}</span>
                    <span className="font-display text-lg font-bold text-berlin-charcoal">{s.value}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between py-2 pt-4 border-t-2 border-berlin-charcoal">
                  <span className="font-ui font-semibold text-berlin-charcoal">Gesamt</span>
                  <span className="font-display text-xl font-bold text-dragon-green">38</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dokumente */}
      <section className="section-padding bg-gradient-to-b from-warm-white to-sky-mist">
        <div className="container-custom">
          <SectionHeader
            label="Dokumente"
            title="Öffentlich verfügbare Unterlagen"
            description="Folgende Dokumente sind zur Einsichtnahme verfügbar:"
            centered
          />
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {documents.map((doc) => (
              <div key={doc.category} className="bg-white rounded-2xl p-6 shadow-card text-center">
                <FileText className="w-8 h-8 text-dragon-green mx-auto mb-3" />
                <h3 className="font-ui font-semibold text-berlin-charcoal mb-1">{doc.category}</h3>
                <p className="font-body text-sm text-berlin-light">{doc.years}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 font-body text-sm text-berlin-light">
            Stand: 24.03.2023
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default TransparenzPage;
