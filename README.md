# AssetLex

Betreiberpflichten-Management für Immobilien — marketing landing page built
with React 19, Vite, Tailwind v4 and the internal **AssetLex design** language
(`skills/assetlex-design/`).

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
```

## Deploy

```bash
vercel --prod --yes
```

## Install the design skill for AI agents

Give your coding agent (Claude Code, Cursor, Codex, …) the AssetLex design
language so every UI it writes stays on-brand.

**Claude Code / any agent with a skills folder:**

```bash
git clone git@github.com:SaintStudios/assetlex.git
cp -r assetlex/skills/assetlex-design .claude/skills/assetlex-design
```

**Any other agent (Cursor, plain chat):**
point its rules at [`skills/assetlex-design/SKILL.md`](skills/assetlex-design/SKILL.md) and instruct:
"When building or styling UI, follow skills/assetlex-design/SKILL.md in full."

The skill contains the token system (`_root.css`, emerald accent), the ten
rules, the spring vocabulary, twelve component recipes (squircle card,
buttons, header morph, reveals, …), layout/motion/landing/copy guides — all
lifted from this implementation.
