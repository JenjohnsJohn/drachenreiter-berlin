import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, MapPin } from 'lucide-react';
import { ROUTES } from '@/lib/routes';

const News = () => {
  const newsItems = [
    {
      image: '/news-spielstrasse.jpg',
      title: 'Spielstraße im Mai',
      excerpt: 'Gemeinsam die Straße zum Spielplatz machen! Kommen Sie vorbei und erleben Sie einen Tag voller Spaß und Gemeinschaft.',
      date: '12. Mai 2025',
      location: 'Langhansstraße, Berlin-Wedding',
      category: 'Event'
    },
    {
      image: '/news-sommerfest.jpg',
      title: 'Sommerfest Drachenhöhle',
      excerpt: 'Ein Tag voller Spaß, Musik und Gemeinschaft im Garten der KiTa Drachenhöhle. Für alle Familien und Freunde.',
      date: '15. Juni 2025',
      location: 'KiTa Drachenhöhle',
      category: 'Event'
    },
    {
      image: '/news-jobs.jpg',
      title: 'Neue Mitarbeiter gesucht!',
      excerpt: 'Werde Teil unseres Drachenreiter-Teams. Wir suchen engagierte Fachkräfte für verschiedene Bereiche.',
      date: 'Stellenausschreibung',
      location: 'Berlin',
      category: 'Jobs'
    }
  ];

  return (
    <section id="news" className="section-padding bg-gradient-to-b from-sky-mist to-warm-white">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block font-ui font-semibold text-sm tracking-wider text-dragon-green uppercase mb-4">
              Aktuelles
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-berlin-charcoal">
              Neuigkeiten & Termine
            </h2>
          </div>
          <Link
            to={ROUTES.NEUIGKEITEN}
            className="inline-flex items-center gap-2 font-ui font-semibold text-dragon-green hover:text-dragon-dark transition-colors group"
          >
            Alle Neuigkeiten
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article
              key={item.title}
              className="group bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-400 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full font-ui font-semibold text-xs text-dragon-green">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-berlin-light">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-golden" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-golden" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-semibold text-berlin-charcoal mb-3 group-hover:text-dragon-green transition-colors">
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p className="font-body text-sm text-berlin-light leading-relaxed mb-4">
                  {item.excerpt}
                </p>

                {/* Link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-ui font-semibold text-sm text-dragon-green hover:text-dragon-dark transition-colors group/link"
                >
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
