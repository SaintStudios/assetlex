export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqGroup {
  title: string;
  items: FaqItem[];
}

/** Verbatim Q&A from assetlex.de. */
export const faqGroups: FaqGroup[] = [
  {
    title: "Verständnis & Vertrauen",
    items: [
      {
        q: "Woher weiß AssetLex, welche Prüfpflichten für mein konkretes Gebäude gelten?",
        a: "AssetLex gleicht Bundesland, Nutzungsart und Gebäudetyp Ihrer Immobilie automatisch mit einem kuratierten Pflichtenkatalog ab, 99 bundesweite und 195 landesrechtliche Pflichten über alle 16 Bundesländer. Sie müssen keine Verordnungen recherchieren: Die relevanten Prüfungen werden Ihnen direkt zugewiesen, inklusive Intervall und Rechtsgrundlage.",
      },
      {
        q: "Was passiert, wenn eine Pflicht bei mir noch gar nicht dokumentiert ist?",
        a: "Genau dafür gibt es die Lückenanalyse. AssetLex zeigt Ihnen aktiv, welche gesetzlichen Pflichten für Ihre Immobilie gelten, aber bisher kein einziger Nachweis vorliegt. So erkennen Sie blinde Flecken sofort, nicht erst bei der nächsten Begehung oder im Schadensfall.",
      },
      {
        q: "Kann AssetLex garantieren, dass ich keine Pflicht übersehe?",
        a: "AssetLex ist ein Software-Werkzeug, keine Rechtsberatung, die Verantwortung für die Einhaltung Ihrer Betreiberpflichten bleibt bei Ihnen. Was AssetLex leistet: ein vollständiger, regelmäßig aktualisierter Pflichtenkatalog, automatische Fristüberwachung und eine klare Lückenanalyse. Damit haben Sie eine deutlich belastbarere Grundlage als jede Excel-Liste.",
      },
      {
        q: "Wir haben schon einen Property Manager, brauchen wir AssetLex trotzdem?",
        a: "Ja, gerade dann. AssetLex ersetzt nicht Ihre Dienstleister, sondern gibt Ihnen als Eigentümer oder Asset Manager die Kontrolle darüber, ob Pflichten tatsächlich erfüllt werden. Die Ampel und der AssetLex Score zeigen auf einen Blick, wo Ihr Property Manager liefert und wo Handlungsbedarf besteht, über das gesamte Portfolio.",
      },
      {
        q: "Was unterscheidet AssetLex von einem CAFM-System?",
        a: "CAFM-Systeme sind umfangreiche Plattformen mit langen Implementierungsprojekten und hohen Kosten, sinnvoll ab mehreren Hundert Liegenschaften. AssetLex ist in einer Stunde einsatzbereit und konzentriert sich auf die drei Kernfragen: Sind meine Betreiberpflichten erfüllt? Wo bestehen Lücken? Wie ist der Zustand meines Portfolios? Für 5 bis 50 Immobilien ist das genau die richtige Flughöhe.",
      },
    ],
  },
  {
    title: "Einrichtung & Daten",
    items: [
      {
        q: "Brauche ich technisches Wissen, um AssetLex einzurichten?",
        a: "Nein. Sie legen Ihre Gebäude an, wählen Bundesland und Nutzungsart, den Rest erledigt AssetLex. Pflichten werden automatisch zugeordnet, Fristen berechnet und die Ampel zeigt sofort, wo Sie stehen.",
      },
      {
        q: "Wie funktioniert der KI-Dokumentenimport?",
        a: "Laden Sie ein Prüfprotokoll oder einen Wartungsbericht hoch, die KI erkennt automatisch Prüfdatum, Anlage und Prüfart und ordnet den Nachweis dem richtigen Gebäude zu. Falls das Dokument nicht zur gewählten Anlage passt, werden Sie gewarnt. Kein manuelles Abtippen mehr.",
      },
      {
        q: "Kann ich meine vorhandenen Excel-Listen übernehmen?",
        a: "Sie können Ihre bestehenden Daten beim Onboarding importieren. AssetLex ist bewusst so konzipiert, dass der Umstieg von Excel möglichst reibungslos gelingt, das ist schließlich die Ausgangslage der meisten unserer Kunden.",
      },
    ],
  },
  {
    title: "Preis & Vertrag",
    items: [
      {
        q: "Was kostet AssetLex, und wie wird abgerechnet?",
        a: "Ab 6,99 € netto pro Monat, monatlich kündbar. Die Abrechnung richtet sich nach der Anzahl Ihrer Immobilien, nicht nach Nutzern oder Anlagen. Alle Funktionen sind in jedem Tarif enthalten, inklusive unbegrenzter Nutzer.",
      },
      {
        q: "Brauche ich eine Kreditkarte für die Testphase?",
        a: "Nein. Sie starten mit zwei Monaten kostenlosem Zugang, ohne Zahlungsdaten zu hinterlegen. Erst wenn Sie sich danach aktiv für ein Abo entscheiden, wird eine Zahlungsmethode nötig.",
      },
      {
        q: "Was passiert mit meinen Daten, wenn ich kündige?",
        a: "Nach der Kündigung haben Sie noch 30 Tage Zugriff auf Ihre Daten und können alles exportieren. Danach werden Ihre Daten vollständig gelöscht, es gibt keine versteckte Weiterverwendung.",
      },
    ],
  },
  {
    title: "Datenschutz & Sicherheit",
    items: [
      {
        q: "Ist AssetLex DSGVO-konform?",
        a: "Ja. Alle Daten werden in der EU gehostet, die Übertragung ist durchgehend verschlüsselt, und der Zugriff ist rollenbasiert geregelt. Jede Änderung wird in einem Audit-Trail protokolliert, so haben Sie jederzeit einen lückenlosen Nachweis, wer wann was dokumentiert hat.",
      },
    ],
  },
];
