import PageHero from '@/components/shared/PageHero';

const ImpressumPage = () => {
  return (
    <>
      <PageHero
        title="Impressum & Datenschutz"
        breadcrumbs={[{ label: 'Impressum & Datenschutz' }]}
      />

      <section className="section-padding bg-warm-white">
        <div className="container-custom max-w-3xl">
          {/* Impressum */}
          <div className="mb-16">
            <h2 className="font-display text-3xl font-bold text-berlin-charcoal mb-8">
              Impressum
            </h2>
            <div className="prose-custom space-y-6 font-body text-berlin-light leading-relaxed">
              <div>
                <h3 className="font-display text-xl font-semibold text-berlin-charcoal mb-2">Angaben gemäß § 5 TMG</h3>
                <p>
                  Drachenreiter gGmbH<br />
                  Langhansstr. 97<br />
                  13086 Berlin<br />
                  Deutschland
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-berlin-charcoal mb-2">Vertreten durch</h3>
                <p>André Schumacher (Geschäftsführer)</p>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-berlin-charcoal mb-2">Kontakt</h3>
                <p>
                  Telefon: +49 (0)30 83205 800<br />
                  Fax: +49 (0)30 83205 809<br />
                  E-Mail: info@drachenreiter.berlin
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-berlin-charcoal mb-2">Registereintrag</h3>
                <p>
                  Amtsgericht Charlottenburg<br />
                  HRB 140416 B
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-berlin-charcoal mb-2">Steuernummer</h3>
                <p>27/601/54546</p>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-berlin-charcoal mb-2">Bildnachweise</h3>
                <p>
                  ©Erich Saar (www.suki-pix.de)<br />
                  ©Marcus Ebener (www.marcus-ebener.de)
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-berlin-charcoal mb-2">Haftung für Inhalte</h3>
                <p>
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
                  Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch
                  keine Gewähr übernehmen.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-berlin-charcoal mb-2">Haftung für Links</h3>
                <p>
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte
                  wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets
                  der jeweilige Anbieter verantwortlich. Die verlinkten Seiten wurden zum
                  Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Eine
                  permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
                  konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
                  Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend
                  entfernen.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-berlin-charcoal mb-2">Urheberrecht</h3>
                <p>
                  Sollten Sie auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir
                  um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
                  werden wir derartige Inhalte umgehend entfernen.
                </p>
              </div>
            </div>
          </div>

          {/* Datenschutz */}
          <div id="datenschutz">
            <h2 className="font-display text-3xl font-bold text-berlin-charcoal mb-8">
              Datenschutzerklärung
            </h2>
            <div className="space-y-6 font-body text-berlin-light leading-relaxed">
              <div>
                <h3 className="font-display text-xl font-semibold text-berlin-charcoal mb-2">Verantwortlicher</h3>
                <p>
                  André Schumacher, Geschäftsführer<br />
                  Drachenreiter gGmbH<br />
                  Langhansstr. 97, 13086 Berlin<br />
                  info@drachenreiter.berlin
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-berlin-charcoal mb-2">Erhobene Daten</h3>
                <p>
                  Bei Ihrem Besuch auf unserer Webseite werden automatisch Informationen
                  erfasst: IP-Adressen, Zugriffszeitstempel, Browserinformationen und
                  Referrer-URLs (Server-Logfiles).
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-berlin-charcoal mb-2">Kontaktformulare</h3>
                <p>
                  Kontaktformulare erfordern eine gültige E-Mail-Adresse. Die Daten werden
                  nach Erledigung der Anfrage gelöscht.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-berlin-charcoal mb-2">Cookies & Analyse</h3>
                <p>
                  Unsere Webseite verwendet Session-Cookies. Die durch Cookies verarbeiteten
                  Daten sind für die genannten Zwecke zur Wahrung unserer berechtigten
                  Interessen erforderlich.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-berlin-charcoal mb-2">SSL-Verschlüsselung</h3>
                <p>
                  Diese Seite nutzt aus Sicherheitsgründen eine SSL-Verschlüsselung (256-Bit
                  bzw. 128-Bit).
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-berlin-charcoal mb-2">Ihre Rechte (DSGVO)</h3>
                <p>
                  Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO),
                  Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO)
                  und Datenübertragbarkeit (Art. 20 DSGVO). Eine erteilte Einwilligung können
                  Sie jederzeit widerrufen: info@drachenreiter.berlin
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImpressumPage;
