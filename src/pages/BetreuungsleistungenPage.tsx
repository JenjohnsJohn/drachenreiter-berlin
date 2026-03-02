import {
  Users, UserCheck, Home, Euro, FileText, Shield
} from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import ContactCard from '@/components/shared/ContactCard';
import SectionHeader from '@/components/shared/SectionHeader';
import InfoCard from '@/components/shared/InfoCard';
import CTABanner from '@/components/shared/CTABanner';

const BetreuungsleistungenPage = () => {
  const services = [
    {
      icon: UserCheck,
      title: 'Einzelbetreuung',
      description: 'Regelmäßige Hausbesuche, individuelle Freizeitgestaltung und Begleitung zu Terminen — stundenweise oder tageweise mit festen Ehrenamtlichen.',
      iconColor: 'text-dragon-green',
    },
    {
      icon: Users,
      title: 'Gruppenangebote',
      description: 'Vernetzungsmöglichkeiten, die soziale und gemeinschaftliche Kompetenzen stärken.',
      iconColor: 'text-deep-blue',
    },
    {
      icon: Home,
      title: 'Haushaltsnahe Leistungen',
      description: 'Unterstützung bei Haushaltsaufgaben zur Entlastung von Pflegebedürftigen und Familien.',
      iconColor: 'text-sage',
    },
  ];

  const pricing = [
    { service: 'Betreuungsgruppen', price: '10,00 €', unit: 'pro Teilnehmer / Stunde' },
    { service: 'Einzelbetreuung', price: '25,00 €', unit: 'pro Stunde' },
    { service: 'Haushaltsnahe Leistungen', price: '30,00 €', unit: 'pro Stunde' },
  ];

  const annualBudgets = [
    { law: '§ 45b SGB XI', amount: '1.500 €', label: 'Entlastungsbetrag' },
    { law: '§ 39 SGB XI', amount: '1.612 €', label: 'Verhinderungspflege' },
    { law: '§ 42 SGB XI', amount: '1.612 €', label: 'Kurzzeitpflege' },
  ];

  const volunteerBenefits = [
    'Schriftliche Vereinbarung',
    'Erweitertes Führungszeugnis',
    'Schulung und Supervision',
    'Regelmäßige Ehrenamtstreffen',
    'Pflichtfortbildungen',
    'Erste-Hilfe-Zertifikat',
    'Curriculum-Absolvierung',
    'Aufwandsentschädigung',
    'Ehrenamtspauschale',
    'Haftpflicht- und Unfallversicherung',
  ];

  return (
    <>
      <PageHero
        title="Zusätzliche Betreuungsleistungen"
        subtitle="Unterstützung für Familien nach § 45b SGB XI — für Kinder, Jugendliche und junge Erwachsene mit Behinderung oder chronischer Erkrankung."
        breadcrumbs={[
          { label: 'Angebote' },
          { label: 'Betreuungsleistungen' },
        ]}
      />

      {/* Angebote */}
      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <SectionHeader
            label="Unsere Angebote"
            title="Individuell und auf Augenhöhe"
            description="Wir gestalten unsere Angebote individuell und ressourcenorientiert — für Betroffene und ihre Familien."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((s) => (
              <InfoCard key={s.title} {...s} />
            ))}
          </div>

          {/* Ablauf */}
          <div className="bg-gradient-to-br from-sky-mist to-warm-white rounded-2xl p-8 mb-16">
            <h3 className="font-display text-2xl font-semibold text-berlin-charcoal mb-4">
              Ablauf — Was ist zu tun?
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { step: '1', title: 'Kontaktaufnahme', desc: 'Rufen Sie uns an oder schreiben Sie eine E-Mail.' },
                { step: '2', title: 'Erstgespräch', desc: 'Wir besprechen die Bedürfnisse Ihres Kindes.' },
                { step: '3', title: 'Vermittlung', desc: 'Passende Ehrenamtliche werden mit schriftlicher Vereinbarung vermittelt.' },
              ].map((s) => (
                <div key={s.step} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-dragon-green text-white flex items-center justify-center font-ui font-bold text-lg flex-shrink-0">
                    {s.step}
                  </div>
                  <div>
                    <h4 className="font-ui font-semibold text-berlin-charcoal mb-1">{s.title}</h4>
                    <p className="font-body text-sm text-berlin-light">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Kosten & Finanzierung */}
      <section className="section-padding bg-gradient-to-b from-warm-white to-sky-mist">
        <div className="container-custom">
          <SectionHeader
            label="Kosten & Finanzierung"
            title="Transparente Preise"
            description="Die Pflegekasse erstattet die Kosten. Pflegebedürftige Kinder und Jugendliche in häuslicher Pflege erhalten 125 Euro pro Monat nach § 45b SGB XI."
          />

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Pricing Table */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-card">
              <div className="bg-dragon-green px-6 py-4">
                <h3 className="font-ui font-semibold text-white flex items-center gap-2">
                  <Euro className="w-5 h-5" />
                  Preise
                </h3>
              </div>
              <div className="divide-y divide-gray-100">
                {pricing.map((p) => (
                  <div key={p.service} className="flex items-center justify-between px-6 py-4">
                    <div>
                      <p className="font-ui font-medium text-berlin-charcoal">{p.service}</p>
                      <p className="font-body text-xs text-berlin-light">{p.unit}</p>
                    </div>
                    <span className="font-display text-xl font-bold text-dragon-green">{p.price}</span>
                  </div>
                ))}
              </div>
              <div className="px-6 py-4 bg-sky-mist/50">
                <p className="font-body text-xs text-berlin-light">
                  Familien beteiligen sich an Aktivitätskosten (Essen, Eintritt, Transport).
                  Abrechnung direkt über Pflegekasse oder Elternvorleistung möglich.
                </p>
              </div>
            </div>

            {/* Annual Budgets */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-card">
              <div className="bg-deep-blue px-6 py-4">
                <h3 className="font-ui font-semibold text-white flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Jährlich verfügbare Beträge
                </h3>
              </div>
              <div className="divide-y divide-gray-100">
                {annualBudgets.map((b) => (
                  <div key={b.law} className="flex items-center justify-between px-6 py-4">
                    <div>
                      <p className="font-ui font-medium text-berlin-charcoal">{b.label}</p>
                      <p className="font-body text-xs text-berlin-light">{b.law}</p>
                    </div>
                    <span className="font-display text-xl font-bold text-deep-blue">{b.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ehrenamt */}
      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader
                label="Ehrenamt"
                title="Was bedeutet Ehrenamt bei uns?"
                description="Unsere ehrenamtlichen Helfer*innen werden umfassend vorbereitet und begleitet:"
              />
              <div className="grid sm:grid-cols-2 gap-2">
                {volunteerBenefits.map((b) => (
                  <div key={b} className="flex items-start gap-2 font-body text-sm text-berlin-light">
                    <Shield className="w-4 h-4 text-golden flex-shrink-0 mt-0.5" />
                    {b}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeader
                label="Kontakt"
                title="Betreuungsleistungen anfragen"
              />
              <ContactCard
                email="betreuungsleistungen2@drachenreiter.berlin"
                phone="+49 (0)30 28040 486"
                fax="+49 (0)30 83205 809"
              />
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Unterstützung anfragen"
        description="Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch zu unseren Betreuungsleistungen."
      />
    </>
  );
};

export default BetreuungsleistungenPage;
