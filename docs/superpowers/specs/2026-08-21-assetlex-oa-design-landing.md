# AssetLex landing page — design spec

Date: 2026-08-21
Status: approved (user approved in chat; proceeding on explicit "go")

## Goal

A modern one-page marketing site for AssetLex (Betreiberpflichten-Management für
Immobilien), restyled with the [oa-design](https://github.com/OpenLabs-so/oa-design)
language. Copy is verbatim German from assetlex.de; the look is entirely new.
Runs locally.

## Decisions (user-approved)

- Brand name: **AssetLex** (kept), fully restyled identity
- Accent: **emerald** — `--primary: #059669`, `--ring: #34d399`
  (user picked via live accent switcher preview)
- Stack: **Vite + React 19 + TypeScript + Tailwind v4 + `motion`**
- Scope: **landing page only**; nav anchors scroll to sections; Login/CTA are
  non-navigating stubs (`#`)
- Language of content: German, verbatim from assetlex.de

## Design language rules (oa-design, binding)

- One ink `#292929`; all neutrals derived by color-mix percentages
  (borders 12%, inputs 14%, washes 5%). No second grey.
- White body; sections are plates; stage `#f6f6f6` for insets only.
- Squircle surfaces (continuous curvature) for cards; pills for actions.
- Weight ceiling **500** (Inter Tight 300–500). Hierarchy = size/color/space.
  Geist Mono for numerals where code-like; tabular-nums for data columns.
- Two shadows only: resting `0 1px 2px rgba(0,0,0,.06)` and floating
  `0 1px 2px rgba(0,0,0,.08), 0 8px 24px rgba(0,0,0,.08)`.
- One accent spent in one place (CTAs + Score highlight); semantic colors
  (red/amber/emerald) as text tints and 8px dots, never panel fills.
- Radius scale from `--radius: 0.625rem`; squircle clip values per recipe:
  frame 26→50px, inset 22→44px at `sm:`.
- Springs: PANEL 550/38 (accordions, toggles), FLICK 900/50 (chevrons),
  hero-shot reveal springier (420/30-34). Micro fades ≤0.2s.
- Header morph per recipe 11 (700ms cubic-bezier(0.32,0.72,0,1), noise overlay).
- Reveals: 14px travel, 0.7s ease-out, stagger beats 80ms, max 3 children,
  IntersectionObserver `0px 0px -10% 0px`, fire once.
- Quality floor: focus-visible rings, prefers-reduced-motion honored,
  aria-hidden decorations, role="status" on async-feeling regions,
  overflow-x clip, no lorem (real copy everywhere).

## Page anatomy (order per _landing.md)

1. **HeaderMorph**: logo "AssetLex"; links Produkt/Funktionen/Vergleich/
   Preise/FAQ (anchor scroll); Login ghost pill + "Kostenlos testen" primary pill.
2. **Hero**: eyebrow „Betreiberpflichten · Endlich im Griff“; H1 „Betreiberpflichten
   für Immobilien — “ + muted half „alles an einem Ort verwaltet.“; subline
   „Alle Prüfpflichten gebündelt in einer Kennzahl.“; CTAs [Kostenlos testen]
   [So funktioniert’s]; microcopy „2 Monate kostenlos · keine Kreditkarte“.
3. **Product proof**: Portfolio-Status squircle panel — Score 8,4 /10,
   stats (134 Pflichten; 110 gültig / 9 überfällig / 15 ohne Nachweis;
   Fristgerechtigkeit · Art der Prüfung · Zustand nach Prüfung),
   chip „87 Anlagen · 11 Gebäude“, 3 obligation rows (Aufzug Ost overdue red;
   Brandmeldeanlage amber; Heizungsanlage emerald) with full meta strings;
   caption „Beispielhafter Ausschnitt aus einem Portfolio mit elf Gebäuden.“
4. **Dashboard grid** („AssetLex Dashboard. Alles sofort im Blick.“): six Q&A
   cards — Portfolio-Status, Verantwortlichkeit, Datenerfassung, Landesrecht,
   Handlungsbedarf (with dot legend), Details.
5. **„AssetLex: mehr als eine Fristenliste.“**: five plates — Lückenanalyse
   statt Fristenliste; Automatischer Wartungskalender; Reports auf Knopfdruck;
   Nachweis- & Vertragsarchiv; KI-Dokumentenimport.
6. **Beispielportfolio** („So sieht Ihr Portfolio mit AssetLex aus.“): stats strip
   Gebäude 11 / Anlagen 87 / Fristen eingehalten 93 %; seven city cards
   (München Aufzug Ost, Berlin BMA, Hamburg Heizung, Frankfurt RLT,
   Düsseldorf Sprinkler, Wien Blitzschutz, Stuttgart Notstrom) with status lines;
   disclaimer „Beispielhafte Darstellung · Keine echten Kundendaten“.
7. **Drei Schritte bis zur grünen Ampel.** — 01 anlegen, 02 ableiten lassen,
   03 Dashboard zeigt den Status.
8. **Blog teaser**: card „Wartung von Brandmeldeanlagen…“, 18. Aug. 2026 ·
   5 Min. Lesezeit, Weiterlesen.
9. **Vergleich** („Kein CAFM-System. Keine Excel-Tabelle.“): table Einrichtung /
   Kosten / Prüffristen / Nachweise / Einarbeitung × Excel / CAFM / AssetLex;
   AssetLex column framed by accent border, no scale transform.
10. **Preise** („Ab 6,99 € im Monat.“): featured card with Immobilien stepper
    (1–20+, price math per tier shown live), feature list „Alles inklusive“;
    tier table Objekt 6,99 € / Bestand 24,99 € / Portfolio 59,99 € / Fonds 149 €
    with per-Immobilie math; „Mehr als 50 Immobilien? Sprechen Sie mit uns“
    (mailto:office@endo5.de). zzgl. MwSt · monatlich kündbar.
11. **FAQ**: four groups — Verständnis & Vertrauen (5), Einrichtung & Daten (3),
    Preis & Vertrag (3), Datenschutz & Sicherheit (1) — disclosure rows,
    measured-height animation (PANEL), chevron FLICK; answers verbatim
    (extracted from live site RSC payload, stored in `src/content/faq.ts`).
12. **Closing CTA**: „Bereit für den Überblick über Ihr Portfolio?“ + „2 Monate
    kostenlos testen, keine Kreditkarte nötig.“ + button.
13. **Footer**: Produkt anchors; Rechtliches Impressum/Datenschutz (#);
    Kontakt hallo@assetlex.de + LinkedIn; „© 2026 AssetLex, Hosting in der EU“.

## Architecture

```
assetlex/
├── index.html                 # lang=de, meta, title
├── public/images/             # 7 building photos (Unsplash, downloaded once)
├── src/
│   ├── main.tsx               # entry
│   ├── index.css              # tokens (@theme inline), base discipline, reveal CSS
│   ├── content/copy.ts        # ALL German copy centralized
│   ├── content/faq.ts         # FAQ groups verbatim
│   ├── lib/springs.ts         # PANEL/POP/BANNER/FLICK constants (motion format)
│   ├── components/ui/         # ported oa recipes: SquircleCard, Button,
│   │                          # HeaderMorph, Reveal, AccordionRow, StatDot
│   └── sections/              # Hero, ProofShot, DashboardGrid, Features,
│                              # Portfolio, Steps, BlogTeaser, Comparison,
│                              # Pricing, Faq, ClosingCta, Footer
```

- Tailwind v4 via `@tailwindcss/vite`; tokens mirrored under `@theme inline`.
- Fonts self-hosted via Fontsource (`@fontsource-variable/inter-tight`,
  `geist-mono` package or woff2 vendored).
- Images downloaded once at build-setup into `public/images/` so the site runs
  offline afterwards; graceful fallback (stage-colored block) if a file is missing.
- Pricing stepper: local state only; price math matches tier table exactly.

## Error handling

- Static page; no async data → no loading/error UI needed beyond image fallbacks.
- Missing image → parent div keeps stage background + alt text (no broken icon).

## Testing / verification

- `tsc --noEmit` clean; `vite build` succeeds.
- Manual dev-server pass: header morph, reveals fire once, accordion springs,
  reduced-motion mode, mobile 375px layout, no horizontal scroll.
- No unit tests (pure static marketing markup; TDD not applied per scope).

## Out of scope

Login/signup routes, Impressum/Datenschutz pages, blog articles, CMS, analytics,
dark theme toggle (tokens included but light-only surface shipped).
