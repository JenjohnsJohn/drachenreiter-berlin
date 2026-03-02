import { Link } from 'react-router-dom';
import { School, HeartHandshake, Users, Sparkles, Target, ArrowRight } from 'lucide-react';
import { ROUTES } from '@/lib/routes';

const Services = () => {
  const services = [
    {
      icon: School,
      title: 'KiTas',
      subtitle: 'Drachenhöhle & Drachen Kids',
      description: 'Ganzheitliche frühe Bildung mit Herz und Konzept. Naturverbundene Pädagogik für Ihr Kind.',
      image: '/service-kita.jpg',
      features: ['Ganzheitliche frühe Bildung', 'Naturverbundene Pädagogik', 'Inklusive Betreuung', 'Platz für 50+ Kinder'],
      cta: 'Platz anfragen',
      to: ROUTES.DRACHENHOEHLE,
    },
    {
      icon: HeartHandshake,
      title: 'Eingliederungshilfe',
      subtitle: 'Einzelfallhilfe',
      description: 'Individuelle Unterstützung für Menschen mit Behinderung auf dem Weg zur Selbstständigkeit.',
      image: '/service-eingliederung.jpg',
      features: ['Individuelle Betreuungspläne', 'Alltagskompetenz-Training', 'Soziale Teilhabe', 'Familienunterstützung'],
      cta: 'Beratungstermin',
      to: ROUTES.EINGLIEDERUNGSHILFE,
    },
    {
      icon: Users,
      title: 'Betreuung',
      subtitle: 'Zusätzliche Betreuungsleistungen',
      description: 'Flexible, bedarfsgerechte Unterstützung da, wo Sie uns brauchen.',
      image: '/service-tst.jpg',
      features: ['Flexible Terminierung', 'Bedarfsgerechte Planung', 'Verlässliche Begleitung', 'Koordination mit Ämtern'],
      cta: 'Mehr erfahren',
      to: ROUTES.BETREUUNGSLEISTUNGEN,
    },
    {
      icon: Sparkles,
      title: 'TST',
      subtitle: 'Scotson Technique',
      description: 'Sanfte, nicht-invasive Methode zur Förderung der neurologischen Entwicklung.',
      image: '/service-tst.jpg',
      features: ['Sanfte, berührungsbasierte Technik', 'Individuell angepasste Programme', 'Wissenschaftlich fundiert', 'Für alle Altersgruppen'],
      cta: 'Beratung vereinbaren',
      to: ROUTES.SCOTSON_THERAPIE,
    },
    {
      icon: Target,
      title: 'Konduktive Förderung',
      subtitle: 'Intensivwochen nach Petö',
      description: 'Konzentrierte Förderung in kleinen Gruppen oder individuell für maximale Fortschritte.',
      image: '/service-konduktiv.jpg',
      features: ['Intensive, ganztägige Betreuung', 'Konduktive Pädagogik', 'Kleine Gruppen', 'Eltern-Kind-Programme'],
      cta: 'Termin anfragen',
      to: ROUTES.KONDUKTIVE_FOERDERUNG,
    },
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-warm-white to-sky-mist">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block font-ui font-semibold text-sm tracking-wider text-dragon-green uppercase mb-4">
            Was wir anbieten
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-berlin-charcoal mb-6">
            Unsere Angebote
          </h2>
          <p className="font-body text-lg text-berlin-light leading-relaxed">
            Von Kinderbetreuung bis zur individuellen Förderung — wir begleiten Menschen auf ihrem Weg.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-400 hover:-translate-y-2 flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                  <service.icon className="w-6 h-6 text-dragon-green" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <h3 className="font-display text-2xl font-semibold text-berlin-charcoal mb-1">
                    {service.title}
                  </h3>
                  <p className="font-ui text-sm text-dragon-green">
                    {service.subtitle}
                  </p>
                </div>

                <p className="font-body text-berlin-light text-sm leading-relaxed mb-4 flex-1">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-berlin-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-golden flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to={service.to}
                  className="inline-flex items-center gap-2 font-ui font-semibold text-sm text-dragon-green hover:text-dragon-dark transition-colors group/link"
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
