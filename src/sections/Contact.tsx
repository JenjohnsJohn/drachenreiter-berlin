import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      lines: ['Langhansstr. 97', '13086 Berlin']
    },
    {
      icon: Phone,
      title: 'Telefon',
      lines: ['+49 (0)30 83205 800'],
      href: 'tel:+493083205800'
    },
    {
      icon: Mail,
      title: 'E-Mail',
      lines: ['info@drachenreiter.berlin'],
      href: 'mailto:info@drachenreiter.berlin'
    },
    {
      icon: Clock,
      title: 'Öffnungszeiten',
      lines: ['Montag–Freitag: 8:00–17:00 Uhr']
    }
  ];

  return (
    <section id="contact" className="section-padding bg-warm-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block font-ui font-semibold text-sm tracking-wider text-dragon-green uppercase mb-4">
            Kontakt
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-berlin-charcoal mb-6">
            Wir freuen uns auf Sie
          </h2>
          <p className="font-body text-lg text-berlin-light leading-relaxed">
            Haben Sie Fragen oder möchten Sie mehr über unsere Angebote erfahren? 
            Kontaktieren Sie uns — wir melden uns schnellstmöglich bei Ihnen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-card-hover p-8 md:p-10">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-sage/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-semibold text-berlin-charcoal mb-2">
                  Vielen Dank!
                </h3>
                <p className="font-body text-berlin-light">
                  Ihre Nachricht wurde erfolgreich versendet. Wir melden uns bald bei Ihnen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-ui font-medium text-sm text-berlin-charcoal mb-2">
                    Ihr Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Max Mustermann"
                    required
                    className="form-input"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-ui font-medium text-sm text-berlin-charcoal mb-2">
                    Ihre E-Mail-Adresse
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="max@beispiel.de"
                    required
                    className="form-input"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block font-ui font-medium text-sm text-berlin-charcoal mb-2">
                    Betreff
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Wie können wir helfen?"
                    required
                    className="form-input"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-ui font-medium text-sm text-berlin-charcoal mb-2">
                    Ihre Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Ihre Nachricht an uns..."
                    className="form-input resize-y min-h-[120px]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-dragon-green text-white font-ui font-semibold rounded-xl hover:bg-dragon-dark transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Wird gesendet...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Nachricht senden
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="bg-white rounded-3xl shadow-card-hover p-8">
              <h3 className="font-display text-xl font-semibold text-berlin-charcoal mb-6 pb-4 border-b-2 border-sky-mist">
                Drachenreiter gGmbH
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-sky-mist flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-dragon-green" />
                    </div>
                    <div>
                      <h4 className="font-ui font-semibold text-sm text-berlin-charcoal mb-1">
                        {info.title}
                      </h4>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="font-body text-berlin-light hover:text-dragon-green transition-colors"
                        >
                          {info.lines.map((line, i) => (
                            <span key={i} className="block">{line}</span>
                          ))}
                        </a>
                      ) : (
                        <div className="font-body text-berlin-light">
                          {info.lines.map((line, i) => (
                            <span key={i} className="block">{line}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden shadow-card-hover">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2424.1234567890123!2d13.3834567890123!3d52.5434567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDMyJzM2LjQiTiAxM8KwMjMnMDAuNCJF!5e0!3m2!1sde!2sde!4v1234567890123"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Drachenreiter Berlin Standort"
                className="grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
