# AssetLex Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the approved AssetLex one-page site (German copy verbatim, oa-design language, emerald accent) as a local Vite app.

**Architecture:** Single-page React app; oa-design tokens mirrored in Tailwind v4 `@theme`; ported recipe components (`ui/`); one component per landing section consuming centralized copy modules. No router, no server state.

**Tech Stack:** Vite 7 · React 19 · TypeScript · Tailwind v4 (`@tailwindcss/vite`) · `motion` · Fontsource Inter Tight / Geist Mono

**Spec:** `docs/superpowers/specs/2026-08-21-assetlex-oa-design-landing.md`
**Recipe source of truth:** cloned skill at `/var/folders/96/gmr4jj8n4f35k7l1f5y_zq440000gn/T/opencode/oa-design/skills/oa-design/`

---

### Task 1: Scaffold project

**Files:** Create via scaffold; modify `package.json`, `index.html`.

- [ ] Scaffold and install:

```bash
cd /Users/ezram/Sites/assetlex
npm create vite@latest . -- --template react-ts
npm i tailwindcss @tailwindcss/vite motion @fontsource-variable/inter-tight @fontsource/geist-mono clsx
```

- [ ] Replace `index.html` body: `<html lang="de">`, `<title>AssetLex — Betreiberpflichten. Endlich im Griff.</title>`, meta description from spec hero.
- [ ] Add `@tailwindcss/vite` plugin in `vite.config.ts`.
- [ ] Delete scaffold boilerplate (`App.css`, default `App.tsx` content).
- [ ] Run `npm run dev` → expect Vite ready on :5173. Stop it.
- [ ] Commit: `chore: scaffold vite react-ts + tailwind v4`

### Task 2: Tokens and base CSS

**Files:** Create `src/index.css`.

- [ ] Port `_root.css` tokens verbatim, override accent per approved brand:
  `--primary: #059669`, `--ring: #34d399`. Mirror under Tailwind v4 theme so utilities like `bg-card`, `text-muted-foreground`, `border-border`, `rounded-*` resolve:

```css
@import "tailwindcss";
@import "@fontsource-variable/inter-tight";
@import "@fontsource/geist-mono/400.css";
@import "@fontsource/geist-mono/500.css";

:root {
  --ink: #292929;
  --background: #f6f6f6;
  --card: #ffffff;
  --foreground: var(--ink);
  --card-foreground: var(--ink);
  --border: color-mix(in srgb, var(--ink) 12%, transparent);
  --input: color-mix(in srgb, var(--ink) 14%, transparent);
  --accent: color-mix(in srgb, var(--ink) 5%, transparent);
  --muted: color-mix(in srgb, var(--ink) 5%, transparent);
  --muted-foreground: #6d6d6d;
  --primary: #059669;
  --primary-foreground: #ffffff;
  --ring: #34d399;
  --secondary: #e9e9e9;
  --radius: 0.625rem;
  --shadow-resting: 0 1px 2px rgba(0,0,0,.06);
  --shadow-floating: 0 1px 2px rgba(0,0,0,.08), 0 8px 24px rgba(0,0,0,.08);
}
@theme inline {
  --font-sans: "Inter Tight Variable", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "Geist Mono", ui-monospace, monospace;
  --color-background: var(--background);
  --color-card: var(--card);
  --color-foreground: var(--foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-accent: var(--accent);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-ring: var(--ring);
  --color-secondary: var(--secondary);
  --shadow-resting: var(--shadow-resting);
  --shadow-floating: var(--shadow-floating);
  --radius-*: initial;
  --radius-sm: calc(var(--radius) * .6);
  --radius-md: calc(var(--radius) * .8);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) * 1.4);
  --radius-2xl: calc(var(--radius) * 1.8);
  --radius-3xl: calc(var(--radius) * 2.2);
  --radius-4xl: calc(var(--radius) * 2.6);
}
```

Plus base discipline from `_root.css`: white `body`, `overflow-x: clip`, Geist Mono on `code/kbd/samp/pre`, `.reveal/.is-inview` block, reduced-motion guards (copy verbatim from `_root.css` lines 84–173).

- [ ] Verify dev server shows emerald primary on a scratch button, then remove scratch. Commit: `feat: oa tokens + base discipline`

### Task 3: Springs and UI primitives

**Files:** Create `src/lib/cn.ts`, `src/lib/springs.ts`, `src/components/ui/{SquircleCard,Button,Reveal,HeaderMorph,AccordionRow,StatDot}.tsx`.

- [ ] `cn.ts`: standard clsx re-export.
- [ ] `springs.ts`: constants in `motion` format from SKILL.md table — `PANEL = { type:"spring", stiffness:550, damping:38 }`, `LAYOUT 550/40`, `POP 400/26`, `POP_EXIT 380/28`, `BANNER 400/30`, `FLICK 900/50`, `CHART 300/28`.
- [ ] Port `SquircleSurface` + `SquircleCard` + `SquircleCardRow` from recipe `01-squircle-card.md` (keep CARD_CLIP_PATH, tunables, classes verbatim; swap `../_lib/cn` → `../../lib/cn`).
- [ ] Port `HeaderMorph` from `11-header-morph.md` verbatim (data-scrolled pattern, threshold 8).
- [ ] `Button.tsx`: pill variants primary/secondary/ghost × sizes xs/md per `_tokens.md` + recipe `02-button.md`; focus-visible ring `ring-ring/50`; active scale 0.98 (100ms ease-out).
- [ ] `Reveal.tsx`: wrapper adding class `reveal`, IntersectionObserver `rootMargin:"0px 0px -10% 0px"`, unobserve after fire; prop `delay?: number` sets `--reveal-delay` in ms.
- [ ] `AccordionRow.tsx`: disclosure row using `AnimatePresence` + measured height with `LAYOUT` spring; chevron rotates with FLICK; button row `text-sm font-medium`, answer `text-sm text-muted-foreground leading-6`.
- [ ] `StatDot.tsx`: 8px dot, tones overdue/soon/ok mapped to `--destructive` / `--warning` / `--success`, always `aria-hidden`.
- [ ] `npx tsc --noEmit` passes. Commit: `feat: ported oa ui primitives + springs`

### Task 4: Copy and content modules

**Files:** Create `src/content/copy.ts`, `src/content/faq.ts`.

- [ ] `copy.ts`: typed exports for every string in spec §Page anatomy items 1–13 (hero, proof rows incl. legal meta strings, dashboard six Q&As, five features, seven city cards, three steps, blog card, comparison 5×3 grid, pricing tiers + feature list, closing CTA, footer). Source: spec doc (in repo).
- [ ] `faq.ts`: four groups; paste the twelve Q/A pairs extracted from the live site RSC payload (full answers recovered during brainstorming — see conversation record; CAFM answer includes „Für 5 bis 50 Immobilien ist das genau die richtige Flughöhe.“).

```ts
export interface FaqItem { q: string; a: string }
export interface FaqGroup { title: string; items: FaqItem[] }
export const faqGroups: FaqGroup[] = [ /* Verständnis & Vertrauen(5), Einrichtung & Daten(3), Preis & Vertrag(3), Datenschutz & Sicherheit(1) */ ];
```

- [ ] Sanity: `grep -c '„' src/content/faq.ts` ≥ 12 questions use German quotes where original does. Commit: `content: verbatim de copy + faq`

### Task 5: Images

**Files:** Create `public/images/building-{1..7}.jpg`.

- [ ] Download 7 Unsplash photos once (architecture/building subjects, w=1200 q=70) with stable photo IDs; verify each >30KB (`ls -la`). If any download fails, leave fallback logic to handle absence gracefully.
- [ ] `.gitignore` stays image-inclusive (commit images so repo runs offline). Commit: `assets: building photos`

### Task 6: Shell — App frame, HeaderMorph wiring, Hero, Footer

**Files:** Modify `src/App.tsx`; create `src/sections/{Hero,Footer}.tsx`.

- [ ] `App.tsx`: `<HeaderMorph>` + `<main className="mx-auto max-w-[76rem] px-4 sm:px-6 pb-12 sm:pb-20 flex flex-col gap-12 sm:gap-20">` + sections in spec order + Footer.
- [ ] Hero per preview approved: eyebrow uppercase `tracking-[0.12em] text-xs`, H1 `font-medium tracking-tight text-wrap:balance` clamp size with muted second half, CTAs (`Kostenlos testen` primary md, `So funktioniert’s` secondary md → `#funktionen`), microcopy. Reveals 80/160/320.
- [ ] Footer: three columns Produkt/Rechtliches/Kontakt per spec item 13.
- [ ] Visual check vs approved preview. Commit: `feat: shell + hero + footer`

### Task 7: Proof shot + Dashboard grid

**Files:** Create `src/sections/{ProofShot,DashboardGrid}.tsx`.

- [ ] ProofShot: SquircleCard title „Portfolio-Status“, chip „87 Anlagen · 11 Gebäude“; custom inset content (not fixed h-44): score block `8,4 /10` tabular-nums + stat list + three obligation rows (StatDot + name medium + meta muted truncated + status tint word). Springier entrance: wrap panel in reveal variant with spring `{type:"spring",stiffness:420,damping:32}`. Caption below.
- [ ] DashboardGrid: heading „AssetLex Dashboard. Alles sofort im Blick.“ + six Q&A cards (title strip = name; inset = question muted, answer). Handlungsbedarf card carries dot legend row.
- [ ] Commit: `feat: proof shot + dashboard grid`

### Task 8: Features, Portfolio, Steps, Blog teaser

**Files:** Create `src/sections/{Features,Portfolio,Steps,BlogTeaser}.tsx`.

- [ ] Features: five plates, 2-col desktop grid (KI-Import card spans both columns).
- [ ] Portfolio: stats strip (3 numbers tabular) + horizontal scroll-free responsive grid of 7 city cards (image top rounded by inset radii, status line tinted per state), disclaimer line.
- [ ] Steps: numbered 01/02/03 plates (sequence markers justified here).
- [ ] BlogTeaser: single card, date · read-time meta, title, „Weiterlesen ›“.
- [ ] Commit: `feat: features/portfolio/steps/blog sections`

### Task 9: Comparison, Pricing, FAQ, Closing CTA

**Files:** Create `src/sections/{Comparison,Pricing,Faq,ClosingCta}.tsx`.

- [ ] Comparison: semantic table; AssetLex header cell + column framed with `ring-1 ring-primary` inside squircle plate (no scale transform).
- [ ] Pricing: featured card with stepper (buttons −/+ around count, min 1 max 99) computing monthly total from tier math {≤1:6.99, ≤5:24.99→5.00/unit shown, ≤20:59.99, ≤50:149}; tier table with per-unit column; footnote zzgl. MwSt; mailto link. Recommended = Objekt via accent border.
- [ ] Faq: group headings `text-xs uppercase tracking-[0.12em]`; AccordionRow lists.
- [ ] ClosingCta centered plate + primary md button.
- [ ] Commit: `feat: comparison/pricing/faq/cta`

### Task 10: Verification pass

- [ ] `npx tsc --noEmit` → clean.
- [ ] `npm run build` → succeeds; note bundle size.
- [ ] `npm run dev` manual checklist: morph engages >8px scroll; reveals fire once; accordion springs; stepper math matches table; 375px width no horizontal scroll; keyboard tab shows rings; macOS reduce-motion toggle kills reveals/morph transitions.
- [ ] Fix findings, commit: `polish: verification fixes`
