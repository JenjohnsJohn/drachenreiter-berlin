export const SITE_URL = 'https://drachenreiter.bizbrew.dev';
export const SITE_NAME = 'Drachenreiter Berlin';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/hero-main.jpg`;

export interface SEOData {
  title: string;
  description: string;
}

export const SEO_DATA: Record<string, SEOData> = {
  '/': {
    title: 'Drachenreiter Berlin | Kinder- & Jugendhilfe, Eingliederungshilfe',
    description:
      'Die Drachenreiter gGmbH ist Ihr Partner für Kinder- und Jugendhilfe, Eingliederungshilfe sowie ganzheitliche Förderangebote in Berlin. Seit 2012.',
  },
  '/drachenhoehle': {
    title: 'KiTa Drachenhöhle | Drachenreiter Berlin',
    description:
      'Ganzheitliche KiTa für 25 Kinder in Berlin-Prenzlauer Berg mit Pikler, Montessori, Sauna und Salzraum. Mo–Fr 8–17 Uhr.',
  },
  '/drachenkids': {
    title: 'KiTa Drachen Kids | Drachenreiter Berlin',
    description:
      'Nachhaltige KiTa für 85 Kinder in Berlin-Hellersdorf. Situationsansatz, Bewegungsförderung und Bio-Ernährung seit 2020.',
  },
  '/eingliederungshilfe': {
    title: 'Eingliederungshilfe | Drachenreiter Berlin',
    description:
      'Individuelle Einzelfallhilfe nach §§ 112, 113 SGB IX für Kinder, Jugendliche und junge Erwachsene in Berlin.',
  },
  '/betreuungsleistungen': {
    title: 'Zusätzliche Betreuungsleistungen | Drachenreiter Berlin',
    description:
      'Unterstützung für Familien nach § 45b SGB XI — Einzelbetreuung, Gruppenangebote und haushaltsnahe Leistungen in Berlin.',
  },
  '/scotson-therapie': {
    title: 'Scotson Technique (TST) | Drachenreiter Berlin',
    description:
      'Sanfte Atemtherapie für Kinder mit Behinderung nach der Scotson Technique. Workshops und Ersteinschätzungen in Berlin.',
  },
  '/konduktive-foerderung': {
    title: 'Konduktive Förderung nach Petö | Drachenreiter Berlin',
    description:
      'Intensive Förderwochen für Kinder und Erwachsene mit Hirnschädigungen. Konduktive Pädagogik in Berlin.',
  },
  '/neuigkeiten': {
    title: 'Neuigkeiten & Blog | Drachenreiter Berlin',
    description:
      'Aktuelle Nachrichten, Events und Rückblicke der Drachenreiter gGmbH aus unseren KiTas und inklusiven Projekten.',
  },
  '/freiwilligenbereich': {
    title: 'Freiwilligenbereich | Drachenreiter Berlin',
    description:
      'BFD, FSJ und Ehrenamt bei den Drachenreitern. Freiwilligenarbeit mit Fortbildungen und Supervision in Berlin.',
  },
  '/spielstrasse': {
    title: 'Spielstraße | Drachenreiter Berlin',
    description:
      'Temporäre Spielstraßen auf der Gudvanger Straße in Berlin-Prenzlauer Berg. Seit 2015 jeden 1. Mittwoch im Monat.',
  },
  '/spenden': {
    title: 'Spenden | Drachenreiter Berlin',
    description:
      'Unterstützen Sie die Drachenreiter gGmbH mit Ihrer Spende. Steuerlich absetzbar, transparente Mittelverwendung.',
  },
  '/traeger': {
    title: 'Der Träger | Drachenreiter Berlin',
    description:
      'Die Drachenreiter gGmbH — Eigenart, Gestaltung, Einklang und Lebenslust. Soziale Arbeit in Berlin seit 2012.',
  },
  '/transparenz': {
    title: 'Transparenz | Drachenreiter Berlin',
    description:
      'Offenlegung von Organisation, Personalstruktur und Finanzen. Mitglied der Initiative Transparente Zivilgesellschaft.',
  },
  '/impressum': {
    title: 'Impressum & Datenschutz | Drachenreiter Berlin',
    description:
      'Impressum und Datenschutzerklärung der Drachenreiter gGmbH, Langhansstr. 97, 13086 Berlin.',
  },
  '/kita-anmeldung': {
    title: 'KiTa-Platzanfrage | Drachenreiter Berlin',
    description:
      'Online-Platzanfrage für die KiTa Drachenhöhle und KiTa Drachen Kids. Formular für Eltern.',
  },
};

export const NOT_FOUND_SEO: SEOData = {
  title: 'Seite nicht gefunden | Drachenreiter Berlin',
  description:
    'Die gesuchte Seite existiert leider nicht. Zurück zur Startseite der Drachenreiter gGmbH.',
};
