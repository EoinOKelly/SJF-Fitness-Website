# DESIGN.md · SJF Fitness "Atelier of the Body"

## Direction contract

**THESIS.** SJF is a private atelier for the body: high-end, invitation-only coaching, not a gym. The page refuses the fitness-category defaults (neon energy, stock barbells, hype, loud gradients) and reads clean, confident and corporate.

**OWN-WORLD.** Obsidian black canvas (`#0a0a0b`) under low warm light. Red hairlines and small, wide-tracked uppercase labels. A confident corporate grotesque (Archivo) for headlines, set against a clean humanist sans (IBM Plex Sans) for everything functional. Sharp corners, 1px hairline rules, generous negative space. Red appears as line, label and single CTA, never as a fill flood.

**STORY.** Visitor lands in a cinematic, hushed, premium world, understands this is exclusive private 1:1 training, believes it is high quality and bespoke, then books a session or contacts Sandra.

**FIRST VIEWPORT.** Full-bleed muted looping video, darkened with a vertical obsidian gradient. Top-left wordmark, red eyebrow ("Private Personal Training · Portlaoise"), a very large Archivo display headline with one red accent line, a one-line premium tagline, and two actions: solid red **Book Your Session** plus hairline-outline **Enquire**. Thin red rule plus scroll cue at the base.

**FORM.** Corporate editorial brochure translated to web. Brief-pinned world (dark plus red), rendered at full material range, not its softest tint.

## Tokens

Colors (Tailwind v4 `@theme`, so `bg-obsidian`, `text-brand`, etc. exist):
- `obsidian #0a0a0b`, page ground
- `onyx #111114`, raised surface / alt sections
- `graphite #17171b`, cards, inputs
- `brand #fb2e01`, primary accent (SJF logo red: line, labels, CTA)
- `brand-light #ff6a45`, highlight / hover
- `brand-dark #c41f00`, deeper accent / hover-on-fill
- `ivory #f4f1ea`, primary text (warm off-white, never pure #fff)
- `ash #a7a199`, secondary text
- `ash-dim #8b857b`, tertiary / meta

Type:
- Display: **Archivo** (corporate grotesque), headings, brand moments.
- Sans: **IBM Plex Sans** (clean humanist sans), body, UI, nav, labels, buttons.
- (Bodoni Moda / Jost removed in favor of a cleaner, more corporate pairing.)

## Rules
- Corners are sharp (`rounded-none`); the only round things are true circles (avatars, step dots).
- Borders are hairlines: `border-white/10`, red as `border-brand/40`.
- Eyebrows/labels: IBM Plex Sans, uppercase, `tracking-[0.25em]`, small, red or ash.
- One spacing rhythm; sections breathe (`py-24`+). More space above a heading than below.
- Red is precious: line, label, one CTA. No red flood, no glow, no neon.
- No prices anywhere on the site.
- Motion: quiet, slow fades / reveals; never bouncy. Respect `prefers-reduced-motion`.
