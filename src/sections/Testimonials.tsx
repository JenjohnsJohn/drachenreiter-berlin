import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: 'Die Drachenreiter haben unsere Familie wirklich gesehen und verstanden. Endlich fühlen wir uns nicht mehr allein. Die Betreuung unserer Tochter in der Drachenhöhle ist einfach herausragend.',
      author: 'Mutter einer KiTa-Drachenhöhle',
      role: 'Berlin-Wedding',
      rating: 5
    },
    {
      quote: 'Die Fortschritte unseres Sohnes nach den Intensivwochen waren beeindruckend. Das Team geht mit so viel Herzblut an die Arbeit. Wir sind unendlich dankbar.',
      author: 'Vater eines TST-Teilnehmers',
      role: 'Berlin-Pankow',
      rating: 5
    },
    {
      quote: 'Als alleinerziehende Mutter war ich oft überfordert. Die Eingliederungshilfe der Drachenreiter hat mir und meinem Sohn den Rücken gestärkt. Sie sind wirklich da, wenn man sie braucht.',
      author: 'Mutter eines Betreuungskindes',
      role: 'Berlin-Mitte',
      rating: 5
    },
    {
      quote: 'Professionell, herzlich und immer mit dem Fokus auf das Individuum. Die Konduktive Förderung hat meiner Tochter enorm geholfen. Ein tolles Team!',
      author: 'Eltern eines Intensivwochen-Teilnehmers',
      role: 'Berlin-Charlottenburg',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-warm-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block font-ui font-semibold text-sm tracking-wider text-dragon-green uppercase mb-4">
            Stimmen
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-berlin-charcoal mb-6">
            Das sagen Familien
          </h2>
          <p className="font-body text-lg text-berlin-light leading-relaxed">
            Erfahren Sie, was Eltern und Betreute über ihre Erfahrungen mit den Drachenreitern sagen.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-card-hover p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 md:left-12 w-12 h-12 bg-dragon-green rounded-xl flex items-center justify-center shadow-lg">
              <Quote className="w-6 h-6 text-white" />
            </div>

            {/* Content */}
            <div className="pt-4">
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-golden text-golden" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-display text-xl md:text-2xl text-berlin-charcoal leading-relaxed mb-8">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-ui font-semibold text-berlin-charcoal">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="font-body text-sm text-berlin-light">
                    {testimonials[currentIndex].role}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full bg-sky-mist flex items-center justify-center hover:bg-dragon-green hover:text-white transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full bg-sky-mist flex items-center justify-center hover:bg-dragon-green hover:text-white transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-dragon-green w-8' 
                      : 'bg-sky-mist hover:bg-dragon-green/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
