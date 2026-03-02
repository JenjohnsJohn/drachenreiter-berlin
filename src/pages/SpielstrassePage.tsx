import {
  CalendarDays, Users, Music, ExternalLink
} from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import ContactCard from '@/components/shared/ContactCard';
import SectionHeader from '@/components/shared/SectionHeader';
import CTABanner from '@/components/shared/CTABanner';

const SpielstrassePage = () => {
  const schedule = [
    { month: 'Mai', date: '7. Mai', day: 'Mittwoch' },
    { month: 'Juni', date: '4. Juni', day: 'Mittwoch' },
    { month: 'Juli', date: '2. Juli', day: 'Mittwoch' },
    { month: 'August', date: '6. August', day: 'Mittwoch' },
    { month: 'September', date: '3. September', day: 'Mittwoch' },
    { month: 'Oktober', date: '1. Oktober', day: 'Mittwoch' },
  ];

  const partners = [
    'Drachenreiter gGmbH',
    'KiTa Drachenhöhle (Gudvanger Str. 12)',
    'KiTa Freche Fledermäuse (Wichertstr. 57)',
    'KiTa Libelle (Erich-Weinert-Str. 64)',
    'Cornelia Dittrich (Bündnis-Kontakt)',
    'Anwohner*innen und Eltern',
    'Eltern der Wilhelm-von-Humboldt-Schule',
  ];

  const bringAlong = [
    'Stelzen', 'Inlineskates', 'Bobbycar', 'Straßenkreide',
    'Dreiräder', 'Springseile', 'Kreisel', 'Fußbälle',
    'Federballspiele', 'Waveboards', 'Spielzeugautos', 'Klappstühle',
  ];

  return (
    <>
      <PageHero
        title="Auf der Straße spielen!"
        subtitle="Temporäre Spielstraßen auf der Gudvanger Straße — seit 2015 ein fester Bestandteil des Nachbarschaftslebens."
        breadcrumbs={[{ label: 'Spielstraße' }]}
      />

      {/* About */}
      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeader
                label="Die Initiative"
                title="Spielstraße seit 2015"
              />
              <div className="space-y-4 font-body text-berlin-light leading-relaxed">
                <p>
                  Seit 2015 wird die Gudvanger Straße regelmäßig für den Autoverkehr gesperrt,
                  damit Kinder und Erwachsene die Straße zum Begegnen, Austauschen und Spielen
                  nutzen können.
                </p>
                <p>
                  Seit August 2019 gibt es eine weitere Spielstraße im Graefekiez. Seit März
                  2019 arbeitet das „Bündnis Temporäre Spielstraßen" daran, diese berlinweit
                  zu etablieren.
                </p>
              </div>

              {/* Highlights */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <Music className="w-6 h-6 text-golden flex-shrink-0" />
                  <div>
                    <h4 className="font-ui font-semibold text-berlin-charcoal">Puppentheater „Fingerleicht"</h4>
                    <p className="font-body text-sm text-berlin-light">
                      Musiker*innen der Wilhelm-von-Humboldt-Gemeinschaftsschule und professionelle Gäste.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-golden flex-shrink-0" />
                  <div>
                    <h4 className="font-ui font-semibold text-berlin-charcoal">Förderung</h4>
                    <p className="font-body text-sm text-berlin-light">
                      Gefördert durch das Deutsche Kinderhilfswerk e.V.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div>
              <SectionHeader
                label="Termine"
                title="Spielstraßen-Kalender"
              />
              <div className="bg-white rounded-2xl overflow-hidden shadow-card">
                <div className="bg-dragon-green px-6 py-4">
                  <h3 className="font-ui font-semibold text-warm-white flex items-center gap-2">
                    <CalendarDays className="w-5 h-5" />
                    Gudvanger Straße — 1. Mittwoch im Monat
                  </h3>
                </div>
                <div className="divide-y divide-gray-100">
                  {schedule.map((s) => (
                    <div key={s.month} className="flex items-center justify-between px-6 py-3">
                      <div className="flex items-center gap-3">
                        <span className="w-10 h-10 rounded-lg bg-sky-mist flex items-center justify-center font-ui font-bold text-sm text-dragon-green">
                          {s.month.slice(0, 3)}
                        </span>
                        <span className="font-body text-berlin-charcoal">{s.date}</span>
                      </div>
                      <span className="font-body text-sm text-berlin-light">{s.day}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Was mitbringen & Partner */}
      <section className="section-padding bg-gradient-to-b from-warm-white to-sky-mist">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader
                label="Mitmachen"
                title="Was Sie mitbringen können"
                as="h3"
              />
              <div className="flex flex-wrap gap-2">
                {bringAlong.map((item) => (
                  <span
                    key={item}
                    className="inline-block px-4 py-2 bg-white rounded-full font-body text-sm text-berlin-charcoal shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <SectionHeader
                label="Netzwerk"
                title="Beteiligte der Initiative"
                as="h3"
              />
              <ul className="space-y-2">
                {partners.map((p) => (
                  <li key={p} className="flex items-start gap-2 font-body text-sm text-berlin-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-golden mt-2 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-8 space-y-2">
                {[
                  { label: 'Facebook', href: 'https://facebook.com/play.on.gudvanger.street' },
                  { label: 'Graefekiez Spielstraße', href: 'https://graefespielstr.de' },
                  { label: 'Bündnis Spielstraßen', href: 'https://www.spielstrassen.de' },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-body text-sm text-dragon-green hover:text-dragon-dark transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <div className="max-w-md mx-auto">
            <SectionHeader
              label="Kontakt"
              title="Ansprechpartnerin"
              centered
              as="h3"
            />
            <ContactCard
              name="Katrin Stähler"
              address="Gudvanger Straße, Berlin-Prenzlauer Berg"
              phone="+49 (0)30 12029 698"
              fax="+49 (0)30 12029 699"
              email="kita-dh@drachenreiter.berlin"
              hours="Di 13–14 Uhr, Do 13–14 Uhr"
            />
          </div>
        </div>
      </section>

      <CTABanner
        title="Kommen Sie vorbei!"
        description="Erleben Sie die Spielstraße und werden Sie Teil unserer Nachbarschaftsgemeinschaft."
      />
    </>
  );
};

export default SpielstrassePage;
