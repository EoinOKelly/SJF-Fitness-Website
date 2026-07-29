# DESIGN.md — SJF Fitness "Atelier of the Body"

## Direction contract

**THESIS** — SJF is a private *atelier for the body*: couture-grade, invitation-only coaching, not a gym. The page refuses the fitness-category defaults (neon energy, stock barbells, hype, loud gradients) and the generic AI-luxury cliché (cream ground + terracotta serif).

**OWN-WORLD** — Obsidian black canvas (`#0a0a0b`) under low warm light. Champagne-gold hairlines and small, wide-tracked uppercase labels. Dramatic high-contrast Didone display (Bodoni Moda) for headlines, set against a quiet geometric sans (Jost) for everything functional. Sharp corners, 1px hairline rules, editorial section numerals (01 · 02), enormous negative space. Gold appears as line, numeral, and single italic accent word — never as a fill flood.

**STORY** — Visitor lands in a cinematic, hushed, expensive-feeling world → understands this is exclusive private 1:1 training → believes it is high quality and bespoke → books a session or contacts Sandra.

**FIRST VIEWPORT** — Full-bleed muted looping video, darkened with a vertical obsidian gradient. Top-left wordmark, gold eyebrow ("Private Personal Training · Portlaoise"), a very large Bodoni display headline with one gold italic word, a one-line premium tagline, and two actions: solid gold **Book Your Session** + hairline-outline **Enquire**. Thin gold rule + scroll cue at the base.

**FORM** — Editorial fashion-house / luxury-watch brochure translated to web. Brief-pinned world (dark + gold), rendered at full material range, not its softest tint.

## Tokens

Colors (Tailwind v4 `@theme`, so `bg-obsidian`, `text-gold`, etc. exist):
- `obsidian #0a0a0b` — page ground
- `onyx #111114` — raised surface / alt sections
- `graphite #17171b` — cards, inputs
- `brand #fb2e01` — primary accent (SJF logo red: line, numerals, CTA)
- `brand-light #ff6a45` — highlight / hover
- `brand-dark #c41f00` — deeper accent / hover-on-fill
- `ivory #f4f1ea` — primary text (warm off-white, never pure #fff)
- `ash #a7a199` — secondary text
- `ash-dim #8b857b` — tertiary / meta

Type:
- Display: **Bodoni Moda** (serif, high contrast) — headings, prices, brand moments.
- Sans: **Jost** — body, UI, nav, labels, buttons.
- (Playfair Display / DM Sans removed — training-data defaults.)

## Rules
- Corners are sharp (`rounded-none`); the only round things are true circles (avatars, step dots).
- Borders are hairlines: `border-white/10`, gold as `border-gold/40`.
- Eyebrows/labels: Jost, uppercase, `tracking-[0.25em]`, small, gold or ash.
- One spacing rhythm; sections breathe (`py-24`+). More space above a heading than below.
- Gold is precious: line, numeral, one accent word, one CTA. No gold flood, no glow, no neon.
- Motion: quiet, slow fades / reveals; never bouncy. Respect `prefers-reduced-motion`.
