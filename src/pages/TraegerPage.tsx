import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import ContactCard from '@/components/shared/ContactCard';
import SectionHeader from '@/components/shared/SectionHeader';
import CTABanner from '@/components/shared/CTABanner';
import { ROUTES } from '@/lib/routes';

const TraegerPage = () => {
  return (
    <>
      <PageHero
        title="Der Träger stellt sich vor!"
        subtitle="Die Drachenreiter gGmbH — Eigenart, Gestaltung, Einklang und Lebenslust seit 2012."
        breadcrumbs={[{ label: 'Träger' }]}
      />

      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeader
                label="Geschäftsführung"
                title="André Schumacher"
              />
              <div className="space-y-4 font-body text-berlin-light leading-relaxed">
                <p>
                  Die Drachenreiter gGmbH hat es sich zur Aufgabe gemacht, Menschen in ihrer
                  Entwicklung individuell und ressourcenorientiert zu unterstützen. Unsere Angebote
                  richten sich vor allem an Menschen in schwierigen Lebenssituationen, Menschen mit
                  Behinderung sowie Kinder und Jugendliche.
                </p>
                <p>
                  Gegründet 2012, arbeiten wir heute mit einem engagierten Team aus Fachkräften,
                  Freiwilligen und Ehrenamtlichen in verschiedenen Bereichen der sozialen Arbeit
                  in Berlin.
                </p>
                <p>
                  Wir stehen Ihnen gerne bei allen Fragen zu unseren Geschäftsbereichen zur
                  Verfügung!
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to={ROUTES.TRANSPARENZ}
                  className="inline-flex items-center gap-2 font-ui font-semibold text-sm text-dragon-green hover:text-dragon-dark transition-colors"
                >
                  Transparenz
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to={ROUTES.HOME + '#services'}
                  className="inline-flex items-center gap-2 font-ui font-semibold text-sm text-dragon-green hover:text-dragon-dark transition-colors"
                >
                  Unsere Angebote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <ContactCard
                name="André Schumacher"
                role="Geschäftsführer"
                address="Langhansstr. 97, 13086 Berlin"
                phone="+49 (0)30 83205 801"
                mobile="+49 (0)176 30737421"
                email="a.schumacher@drachenreiter.berlin"
              />
              <ContactCard
                name="Drachenreiter gGmbH"
                role="Geschäftsstelle"
                address="Langhansstr. 97, 13086 Berlin"
                phone="+49 (0)30 83205 800"
                fax="+49 (0)30 83205 809"
                email="info@drachenreiter.berlin"
              />
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default TraegerPage;
