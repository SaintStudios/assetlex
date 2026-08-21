export const nav = {
  links: [
    { label: "Produkt", href: "#produkt" },
    { label: "Funktionen", href: "#funktionen" },
    { label: "Vergleich", href: "#vergleich" },
    { label: "Preise", href: "#preise" },
    { label: "FAQ", href: "#faq" },
  ],
  login: "Login",
  cta: "Kostenlos testen",
};

export const hero = {
  eyebrow: "Betreiberpflichten · Endlich im Griff",
  titleLead: "Betreiberpflichten für Immobilien —",
  titleMuted: "alles an einem Ort verwaltet.",
  sub: "Alle Prüfpflichten gebündelt in einer Kennzahl.",
  ctaPrimary: "Kostenlos testen",
  ctaSecondary: "So funktioniert’s",
  microcopy: "2 Monate kostenlos · keine Kreditkarte",
};

export const proof = {
  title: "Portfolio-Status",
  chip: "87 Anlagen · 11 Gebäude",
  score: "8,4",
  scoreLabel: "AssetLex Score",
  stats: [
    { strong: "134", rest: "Prüfpflichten im Portfolio" },
    { strong: "110", rest: "gültig · 9 überfällig · 15 ohne Nachweis" },
  ],
  dimensions: "Fristgerechtigkeit · Art der Prüfung · Zustand nach Prüfung",
  caption: "Beispielhafter Ausschnitt aus einem Portfolio mit elf Gebäuden.",
};

export interface Obligation {
  name: string;
  meta: string;
  status: string;
  tone: "overdue" | "soon" | "ok";
}

export const obligations: Obligation[] = [
  {
    name: "Aufzug Ost",
    meta: "Lindenstr. 12, München · PrüfVO-Prüfung (SV) · 12 Mon. · BayBO Art. 77, SPrüfV BY",
    status: "13 Tage überfällig",
    tone: "overdue",
  },
  {
    name: "Brandmeldeanlage",
    meta: "Hauptstr. 4, Berlin · Wartung (SK) · 12 Mon. · DIN 14675-1, VDE 0833-1",
    status: "in 19 Tagen",
    tone: "soon",
  },
  {
    name: "Heizungsanlage",
    meta: "Werkstr. 9, Hamburg · Abgasmessung · 12 Mon. · 1. BImSchV § 14 Abs. 2",
    status: "gültig",
    tone: "ok",
  },
];

export const dashboardGrid = {
  heading: "AssetLex Dashboard. Alles sofort im Blick.",
  cards: [
    {
      title: "Portfolio-Status",
      q: "„Wie ist der technische Zustand meines Portfolios?“",
      a: "Ein Score von 1 bis 10. Alles auf einen Blick.",
    },
    {
      title: "Verantwortlichkeit",
      q: "„Wer ist dafür verantwortlich?“",
      a: "Direkte Zuständigkeiten aller Wartungen/Prüfungen samt vertraglich geschuldeter Leistung.",
    },
    {
      title: "Datenerfassung",
      q: "„Wie kommen die Daten rein?“",
      a: "Prüfbericht hochladen — AssetLex erkennt Datum, Anlage und Prüfart automatisch.",
    },
    {
      title: "Landesrecht",
      q: "„Gilt das in meinem Bundesland?“",
      a: "294 Prüfpflichten, automatisch nach Bundesland und Gebäudetyp zugeordnet.",
      num: "294",
    },
    {
      title: "Handlungsbedarf",
      q: "„Wo muss ich handeln?“",
      a: "Rot heißt: überfällig. Gelb: bald fällig. Sie scrollen nicht, Sie filtern nicht — Sie sehen es.",
    },
    {
      title: "Details",
      q: "„Was genau ist fällig?“",
      a: "Anlage, Standort, Prüfart, Frist und Rechtsgrundlage — alles in einer Zeile.",
    },
  ],
};

export const features = {
  heading: "AssetLex: mehr als eine Fristenliste.",
  items: [
    {
      title: "Lückenanalyse statt Fristenliste",
      body: "AssetLex kennt Prüfpflichten nach Bundes- und Landesrecht und zeigt, welche Pflichten nicht dokumentiert sind — und wo kein Wartungsvertrag hinterlegt ist.",
    },
    {
      title: "Automatischer Wartungskalender",
      body: "Termine werden direkt aus den Prüfpflichten abgeleitet — und die zuständige Person automatisch erinnert. Kein manuelles Nachhalten, kein Durchrutschen.",
    },
    {
      title: "Reports auf Knopfdruck",
      body: "Jahresreport, Gebäudeakte, Wartungscheckliste, fertig formatiert als Excel, sofort weiterleitbar.",
    },
    {
      title: "Nachweis- & Vertragsarchiv",
      body: "Alle Prüfnachweise, Verträge und Zuständigkeiten je Prüfart – auditfest dokumentiert und über alle Anlagen eines Gebäudes hinweg einsehbar.",
    },
    {
      title: "KI-Dokumentenimport — Nachweis hochladen, fertig",
      body: "AssetLex erkennt beim Upload automatisch Prüfdatum, Anlage und Prüfart. Stimmt ein Nachweis nicht zum Objekt, wird sofort gewarnt. Kein manuelles Abtippen, kein Zuordnen.",
    },
  ],
};

export const portfolio = {
  chip: "Beispielportfolio",
  heading: "So sieht Ihr Portfolio mit AssetLex aus.",
  sub: "Alle Anlagen, Fristen und Nachweise — auf einen Blick.",
  stats: [
    { value: "11", label: "Gebäude" },
    { value: "87", label: "Anlagen" },
    { value: "93 %", label: "Fristen eingehalten" },
  ],
  disclaimer: "Beispielhafte Darstellung · Keine echten Kundendaten",
};

export interface CityCard {
  city: string;
  system: string;
  address: string;
  status: string;
  tone: "overdue" | "soon" | "ok";
  image: string;
}

export const cityCards: CityCard[] = [
  { city: "München", system: "Aufzug Ost", address: "Lindenstr. 12, München", status: "PrüfVO bestanden · 12.03.2026", tone: "ok", image: "/images/building-1.jpg" },
  { city: "Berlin", system: "Brandmeldeanlage", address: "Hauptstr. 4, Berlin", status: "Wartung fällig in 28 Tagen", tone: "soon", image: "/images/building-2.jpg" },
  { city: "Hamburg", system: "Heizungsanlage", address: "Werkstr. 9, Hamburg", status: "Abgasmessung überfällig", tone: "overdue", image: "/images/building-3.jpg" },
  { city: "Frankfurt", system: "RLT-Anlage", address: "Kaiserstr. 21, Frankfurt", status: "Hygieneinspektion bestanden · 01.06.2026", tone: "ok", image: "/images/building-4.jpg" },
  { city: "Düsseldorf", system: "Sprinkleranlage", address: "Königsallee 8, Düsseldorf", status: "Nachweis fehlt · fällig 15.09.2026", tone: "overdue", image: "/images/building-5.jpg" },
  { city: "Wien", system: "Blitzschutzanlage", address: "Mariahilfer Str. 45, Wien", status: "Prüfung bestanden · 22.04.2026", tone: "ok", image: "/images/building-6.jpg" },
  { city: "Stuttgart", system: "Notstromanlage", address: "Königstr. 30, Stuttgart", status: "Noch kein Nachweis hinterlegt", tone: "soon", image: "/images/building-7.jpg" },
];

export const steps = {
  heading: "Drei Schritte bis zur grünen Ampel.",
  items: [
    {
      nr: "01",
      title: "Gebäude und Anlagen anlegen",
      body: "Portfoliostruktur in Minuten erfasst, kein Berater, kein Einführungsprojekt.",
    },
    {
      nr: "02",
      title: "Prüfpflichten automatisch ableiten lassen",
      body: "AssetLex kennt die Pflichten nach Bundes- und Landesrecht, differenziert nach Gebäudetyp und Nutzung.",
    },
    {
      nr: "03",
      title: "Ihr Dashboard zeigt den Status",
      body: "Vom einzelnen Aufzug bis zum Gesamtportfolio: eine Ampel pro Gebäude, ein Score fürs ganze Portfolio, direkt mit Frist und verantwortlichem Dienstleister.",
    },
  ],
};

export const blogTeaser = {
  date: "18. Aug. 2026 · 5 Min. Lesezeit",
  title:
    "Wartung von Brandmeldeanlagen: Welche Prüfpflichten gelten wann, wie und durch wen?",
  excerpt:
    "Brandmeldeanlagen unterliegen einer doppelten Prüfpflicht: bundesweite Wartung nach DIN VDE 0833-1 plus landesrechtliche Sachverständigenprüfung alle drei Jahre. Der Überblick nach Prüfart, Frist, Qualifikation und Nachweis.",
  more: "Weiterlesen",
  image: "/images/blog-brandmeldeanlage.jpg",
};

export const comparison = {
  heading: "Kein CAFM-System. Keine Excel-Tabelle.",
  sub: "AssetLex ist eigens für Eigentümer und Verwalter gebaut: verständlich, schnell startklar und eine sofortige Hilfe.",
  columns: ["Excel", "CAFM", "AssetLex"],
  rows: [
    {
      label: "Einrichtung",
      cells: [
        "Wochen mit eigenen Vorlagen und Formeln",
        "Wochen bis Monate mit Beratern und Schulungen",
        "5 Minuten, ohne Einführungsprojekt",
      ],
    },
    {
      label: "Kosten",
      cells: [
        "Scheinbar kostenlos, hoher Pflegeaufwand",
        "Hohe Anfangsinvestition plus laufende Beraterkosten",
        "ab 6,99 € im Monat, monatlich kündbar",
      ],
    },
    {
      label: "Prüffristen",
      cells: [
        "Müssen Sie selbst recherchieren und pflegen",
        "Meist nicht hinterlegt, externe Beratung nötig",
        "Bundes- und Landesrecht automatisch hinterlegt",
      ],
    },
    {
      label: "Nachweise",
      cells: [
        "Verteilt über Mail, Ordner und Chats",
        "Dokumentenmodul oft teures Zusatzmodul",
        "Ein durchsuchbares Nachweisarchiv",
      ],
    },
    {
      label: "Einarbeitung",
      cells: [
        "Nur verständlich für die Person, die es gebaut hat",
        "Aufwendige Softwareschulung nötig",
        "Keine Schulung nötig, intuitiv bedienbar",
      ],
    },
  ],
};

export const pricing = {
  heading: "Ab 6,99 € im Monat.",
  badge: "2 Monate gratis",
  cardTitle: "Objekt-Tarif",
  perMonth: "/ Monat",
  vatNote: "zzgl. MwSt. · monatlich kündbar",
  stepperLabel: "Anzahl Immobilien",
  cta: "Kostenlos testen",
  includedTitle: "Alles inklusive, in jeder Stufe",
  included: [
    "Unbegrenzte Nutzer",
    "Unbegrenzte Anlagen",
    "KI-Dokumentenimport",
    "Alle Reports",
    "Pflichtenkatalog mit Lückenanalyse",
    "Nachweisarchiv",
    "Monatlich kündbar",
    "Kostenloser Support",
    "Keine Einrichtungsgebühr",
  ],
  tiers: [
    { name: "Objekt", range: "1 Immobilie", total: "6,99 €", perUnit: "6,99 € / Immobilie" },
    { name: "Bestand", range: "bis 5 Immobilien", total: "24,99 €", perUnit: "5,00 € / Immobilie" },
    { name: "Portfolio", range: "bis 20 Immobilien", total: "59,99 €", perUnit: "3,00 € / Immobilie" },
    { name: "Fonds", range: "bis 50 Immobilien", total: "149 €", perUnit: "2,98 € / Immobilien" },
  ],
  moreLine: "Mehr als 50 Immobilien?",
  moreLink: "Sprechen Sie mit uns",
  moreHref: "mailto:office@endo5.de",
};

/** Total monthly price by property count; mirrors the tier table exactly. */
export function tierFor(count: number) {
  if (count <= 1) return { name: "Objekt-Tarif", total: "6,99 €", index: 0 };
  if (count <= 5) return { name: "Bestand-Tarif", total: "24,99 €", index: 1 };
  if (count <= 20) return { name: "Portfolio-Tarif", total: "59,99 €", index: 2 };
  return { name: "Fonds-Tarif", total: "149 €", index: 3 };
}

export const faqHeading = "Häufige Fragen";
export const closingCta = {
  heading: "Bereit für den Überblick über Ihr Portfolio?",
  sub: "2 Monate kostenlos testen, keine Kreditkarte nötig.",
  button: "Kostenlos testen",
};

export const footer = {
  produktTitle: "Produkt",
  produktLinks: [
    { label: "Funktionen", href: "#funktionen" },
    { label: "Vergleich", href: "#vergleich" },
    { label: "Preise", href: "#preise" },
    { label: "FAQ", href: "#faq" },
  ],
  rechtlichesTitle: "Rechtliches",
  rechtlichesLinks: [
    { label: "Impressum", href: "#" },
    { label: "Datenschutz", href: "#" },
  ],
  kontaktTitle: "Kontakt",
  email: "hallo@assetlex.de",
  linkedin: "LinkedIn",
  linkedinHref: "https://www.linkedin.com/company/assetlex/",
  copyright: "© 2026 AssetLex, Hosting in der EU",
};
