import { Link } from 'react-router-dom';
import {
  CreditCard, Receipt, ArrowRight, CheckCircle, Gift
} from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import ContactCard from '@/components/shared/ContactCard';
import SectionHeader from '@/components/shared/SectionHeader';
import { ROUTES } from '@/lib/routes';

const SpendenPage = () => {
  return (
    <>
      <PageHero
        title="Spenden. Projekte realisieren."
        subtitle="Ihre finanzielle Unterstützung ermöglicht den ganzheitlichen Ausbau unserer KiTas und mehr Unabhängigkeit von öffentlichen Zuschüssen."
        breadcrumbs={[{ label: 'Spenden' }]}
      />

      {/* Warum spenden */}
      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeader
                label="Ihre Spende zählt"
                title="Zukunft gestalten"
              />
              <div className="space-y-4 font-body text-berlin-light leading-relaxed">
                <p>
                  Wir benötigen finanzielle Unterstützung für den ganzheitlichen Ausbau unserer
                  KiTas auf kostendeckendem Niveau und mit mehr Unabhängigkeit von den
                  öffentlichen Zuschüssen.
                </p>
                <p>
                  Jede Spende ist ein Beitrag zur zeitgemäßen Förderung unserer wichtigsten
                  Zukunftsressource — unsere Kinder.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  'Steuerlich absetzbar',
                  'Spendenbestätigung ab 100 € automatisch',
                  'Transparente Verwendung',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-sage flex-shrink-0" />
                    <span className="font-body text-berlin-charcoal">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bank Details Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-card-hover">
              <div className="bg-gradient-to-r from-dragon-green to-dragon-dark px-8 py-6">
                <div className="flex items-center gap-3">
                  <CreditCard className="w-8 h-8 text-warm-white" />
                  <h3 className="font-display text-2xl font-bold text-warm-white">Bankverbindung</h3>
                </div>
              </div>
              <div className="p-8 space-y-4">
                {[
                  { label: 'Empfänger', value: 'Drachenreiter gGmbH' },
                  { label: 'IBAN', value: 'DE12 4306 0967 1120 1502 00' },
                  { label: 'BIC', value: 'GENODEM1GLS' },
                  { label: 'Bank', value: 'GLS Bank' },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="font-ui text-xs uppercase tracking-wider text-berlin-light">{item.label}</p>
                    <p className="font-body text-lg text-berlin-charcoal font-medium">{item.value}</p>
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-100">
                  <p className="font-ui text-xs uppercase tracking-wider text-berlin-light">Verwendungszweck</p>
                  <p className="font-body text-sm text-berlin-light">
                    Bitte geben Sie Ihren vollständigen Namen und Ihre Adresse an.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aktuelle Projekte & Kontakt */}
      <section className="section-padding bg-gradient-to-b from-warm-white to-sky-mist">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader
                label="Aktuelle Projekte"
                title="Um- und Ausbau der Kindertagesstätten"
              />
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <div className="flex items-center gap-3 mb-4">
                  <Gift className="w-6 h-6 text-golden" />
                  <h3 className="font-display text-lg font-semibold text-berlin-charcoal">
                    Ihre Spende ermöglicht
                  </h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Renovierung und Erweiterung der KiTa-Räume',
                    'Anschaffung pädagogischer Materialien',
                    'Ausbau des Gesundheitskonzepts',
                    'Weiterbildung der Fachkräfte',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 font-body text-sm text-berlin-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-golden mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <SectionHeader
                label="Kontakt"
                title="Fragen zu Spenden?"
                as="h3"
              />
              <ContactCard
                name="André Schumacher"
                role="Geschäftsführer"
                address="Langhansstr. 97, 13086 Berlin"
                phone="+49 (0)30 83205 801"
                fax="+49 (0)30 83205 809"
                email="a.schumacher@drachenreiter.berlin"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tax Info Banner */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-cta" />
        <div className="container-custom relative z-10 text-center">
          <Receipt className="w-12 h-12 text-warm-white mx-auto mb-6" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-warm-white mb-4">
            Steuerlich absetzbar
          </h2>
          <p className="font-body text-lg text-warm-white/80 max-w-xl mx-auto mb-8">
            Spenden an uns sind steuerlich abzugsfähig. Bei Spenden über 100,– € erhalten
            Sie von uns automatisch eine Spendenbestätigung.
          </p>
          <Link
            to={ROUTES.TRANSPARENZ}
            className="inline-flex items-center gap-2 px-6 py-3 bg-warm-white text-dragon-green font-ui font-semibold rounded-lg hover:bg-warm-cream transition-all"
          >
            Transparenz einsehen
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default SpendenPage;
