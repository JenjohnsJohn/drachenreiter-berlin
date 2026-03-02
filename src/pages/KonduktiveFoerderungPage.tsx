import {
  Target, Music, Users, Clock, Calendar, GraduationCap, CheckCircle
} from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import ContactCard from '@/components/shared/ContactCard';
import SectionHeader from '@/components/shared/SectionHeader';
import CTABanner from '@/components/shared/CTABanner';

const KonduktiveFoerderungPage = () => {
  const diagnoses = [
    'Spastische Bewegungsstörungen (Zerebralparese)',
    'Spina bifida',
    'Schlaganfall',
    'Probleme durch Frühgeburt',
    'Schädel-Hirn-Trauma',
    'Weitere motorische Beeinträchtigungen',
  ];

  return (
    <>
      <PageHero
        title="Konduktive Förderung nach Petö"
        subtitle="Intensive Förderwochen für Kinder und Erwachsene mit Hirnschädigungen und körperlichen Beeinträchtigungen."
        breadcrumbs={[
          { label: 'Angebote' },
          { label: 'Konduktive Förderung' },
        ]}
      />

      {/* Was ist KF */}
      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeader
                label="Die Methode"
                title="Konduktive Pädagogik"
              />
              <div className="space-y-4 font-body text-berlin-light leading-relaxed">
                <p>
                  Die konduktive Förderung ist eine inklusiv ausgerichtete Methode für Kinder und
                  Erwachsene mit Hirnschädigungen und körperlichen Beeinträchtigungen. Sie wurde
                  in den 1940er Jahren vom ungarischen Neurologen Prof. Dr. András Petö entwickelt.
                </p>
                <p>
                  In Ungarn gibt es einen vierjährigen Studiengang; seit Oktober 2017 auch einen
                  BA-Studiengang in Deutschland an der Ev. Hochschule Nürnberg.
                </p>
                <p>
                  Das Ziel ist die Entwicklung von Fähigkeiten für größtmögliche Selbstständigkeit
                  im Alltag. Durch speziell angefertigte Möbel und individualisierte Unterstützung
                  werden spielerische Übungen mit Gesang und Rhythmus durchgeführt.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-sky-mist to-warm-white rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-dragon-green" />
                <h3 className="font-display text-xl font-semibold text-berlin-charcoal">Geeignete Diagnosen</h3>
              </div>
              <ul className="space-y-3">
                {diagnoses.map((d) => (
                  <li key={d} className="flex items-start gap-2 font-body text-sm text-berlin-light">
                    <CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Kursstruktur */}
      <section className="section-padding bg-gradient-to-b from-warm-white to-sky-mist">
        <div className="container-custom">
          <SectionHeader
            label="Programmstruktur"
            title="Intensivwochen"
            description="Die Drachenreiter gGmbH hat in den Jahren 2017, 2018, 2019 und 2021 konduktive Förderwochen während der Berliner Sommerferien angeboten. Weitere Intensiv-Förderwochen sind in Planung."
            centered
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Calendar, title: 'Dauer', desc: '2 Wochen, Mo–Fr vormittags' },
              { icon: Clock, title: 'Tagesumfang', desc: '4–5 Stunden pro Tag' },
              { icon: Users, title: 'Betreuung', desc: '1 Konduktor*in für 4 Kinder' },
              { icon: Music, title: 'Methode', desc: 'Spielerische Übungen mit Gesang & Rhythmus' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-card text-center">
                <div className="w-12 h-12 rounded-xl bg-sky-mist flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-dragon-green" />
                </div>
                <h3 className="font-ui font-semibold text-berlin-charcoal mb-2">{item.title}</h3>
                <p className="font-body text-sm text-berlin-light">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-card max-w-2xl mx-auto">
            <h3 className="font-display text-xl font-semibold text-berlin-charcoal mb-4 text-center">Kursformate</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-6 h-6 text-golden flex-shrink-0" />
                <div>
                  <p className="font-ui font-medium text-berlin-charcoal">Eltern-Kind-Kurse</p>
                  <p className="font-body text-sm text-berlin-light">Gemeinsame Teilnahme von Eltern und Kindern</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-golden flex-shrink-0" />
                <div>
                  <p className="font-ui font-medium text-berlin-charcoal">Kinderkurse</p>
                  <p className="font-body text-sm text-berlin-light">Kurse ohne Eltern für ältere Kinder</p>
                </div>
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
              name="Maike Dieckmann"
              role="Koordinatorin Eingliederungshilfe"
              phone="+49 (0)30 83205 804"
              fax="+49 (0)30 83205 809"
              email="m.dieckmann@drachenreiter.berlin"
            />
            <p className="mt-6 text-center">
              <a
                href="http://bkf-petoe.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-dragon-green hover:underline"
              >
                Weitere Informationen: bkf-petoe.de
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Interesse an einer Intensivwoche?"
        description="Kontaktieren Sie uns für Informationen zu kommenden Konduktive-Förderung-Programmen."
      />
    </>
  );
};

export default KonduktiveFoerderungPage;
