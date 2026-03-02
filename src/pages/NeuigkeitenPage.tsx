import { Calendar, ArrowRight, MapPin } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import SectionHeader from '@/components/shared/SectionHeader';

const NeuigkeitenPage = () => {
  const categories = [
    { name: 'Geschäftsstelle', color: 'bg-dragon-green' },
    { name: 'KiTa Drachenhöhle', color: 'bg-golden' },
    { name: 'KiTa Drachen Kids', color: 'bg-sage' },
    { name: 'Einzelfallhilfe', color: 'bg-deep-blue' },
    { name: 'Zusätzliche Betreuungsleistungen', color: 'bg-lavender' },
    { name: 'Integrative & inklusive Projekte', color: 'bg-coral' },
  ];

  const articles = [
    {
      title: 'Spielstraße im Mai',
      excerpt: 'Gemeinsam die Straße zum Spielplatz machen! Kommen Sie vorbei und erleben Sie einen Tag voller Spaß und Gemeinschaft.',
      date: '12. Mai 2025',
      location: 'Gudvanger Straße, Berlin',
      category: 'Event',
      image: '/news-spielstrasse.jpg',
    },
    {
      title: 'Sommerfest Drachenhöhle',
      excerpt: 'Ein Tag voller Spaß, Musik und Gemeinschaft im Garten der KiTa Drachenhöhle. Für alle Familien und Freunde.',
      date: '15. Juni 2025',
      location: 'KiTa Drachenhöhle',
      category: 'Event',
      image: '/news-sommerfest.jpg',
    },
    {
      title: 'Neue Mitarbeiter gesucht!',
      excerpt: 'Werde Teil unseres Drachenreiter-Teams. Wir suchen engagierte Fachkräfte für verschiedene Bereiche.',
      date: 'Stellenausschreibung',
      location: 'Berlin',
      category: 'Jobs',
      image: '/news-jobs.jpg',
    },
    {
      title: 'Wir lieben Grün',
      excerpt: 'Unser Gartenprojekt in der Drachenhöhle — gemeinsam pflanzen, pflegen und ernten mit unseren Kindern.',
      date: 'März 2025',
      location: 'KiTa Drachenhöhle',
      category: 'KiTa Drachenhöhle',
      image: '/news-spielstrasse.jpg',
    },
    {
      title: 'Kreativ sein',
      excerpt: 'Spaß im Schnee — kreative Winteraktionen mit unseren Kindern in den KiTas und bei der Spielstraße.',
      date: 'Februar 2025',
      location: 'Berlin',
      category: 'KiTa Drachen Kids',
      image: '/news-sommerfest.jpg',
    },
  ];

  return (
    <>
      <PageHero
        title="Neuigkeiten & Blog"
        subtitle="Willkommen zu unserem Drachenreiter News Blog — Events, Rückblicke, Bilder und Berichte aus allen Bereichen."
        breadcrumbs={[{ label: 'Neuigkeiten' }]}
      />

      {/* Categories */}
      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <SectionHeader
            label="Bereiche"
            title="Neuigkeiten nach Kategorien"
            centered
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-16">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="group relative bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all cursor-pointer hover:-translate-y-1"
              >
                <div className={`w-3 h-3 rounded-full ${cat.color} mb-3`} />
                <h3 className="font-ui font-semibold text-berlin-charcoal group-hover:text-dragon-green transition-colors">
                  {cat.name}
                </h3>
              </div>
            ))}
          </div>

          {/* Articles */}
          <SectionHeader
            label="Aktuelle Beiträge"
            title="Neueste Artikel"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.title}
                className="group bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-400 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full font-ui font-semibold text-xs text-dragon-green">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-berlin-light">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-golden" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-golden" />
                      <span>{article.location}</span>
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-berlin-charcoal mb-3 group-hover:text-dragon-green transition-colors">
                    {article.title}
                  </h3>
                  <p className="font-body text-sm text-berlin-light leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 font-ui font-semibold text-sm text-dragon-green group-hover:text-dragon-dark transition-colors">
                    Mehr erfahren
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NeuigkeitenPage;
