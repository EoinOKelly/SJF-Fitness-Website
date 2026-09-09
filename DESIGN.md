# DESIGN.md · SJF Fitness "Atelier of the Body"

## Direction contract

**THESIS.** SJF is a private atelier for the body: high-end, invitation-only coaching, not a gym. The page refuses the fitness-category defaults (neon energy, stock barbells, hype, loud gradients) and reads clean, confident and corporate.

**OWN-WORLD.** Warm obsidian canvas (`#0e0c0c`) under low light. Blacks carry a tiny red undertone so the brand red sits with the ground, not against it. Deeper red for labels and large text; logo red for CTAs and emphasis. A confident corporate grotesque (Archivo) for headlines, set against a clean humanist sans (IBM Plex Sans) for everything functional. Sharp corners, 1px hairline rules, generous negative space. Red appears as line, label and single CTA, never as a fill flood.

**STORY.** Visitor lands in a cinematic, hushed, premium world, understands this is exclusive private 1:1 training, believes it is high quality and bespoke, then books a session or contacts Sandra.

**FIRST VIEWPORT.** Full-bleed muted looping video, darkened with a vertical obsidian gradient. Top-left wordmark, red eyebrow ("Private Personal Training · Portlaoise"), a very large Archivo display headline with one red accent line, a one-line premium tagline, and two actions: solid red **Book Your Session** plus hairline-outline **Enquire**. Thin red rule plus scroll cue at the base.

**FORM.** Corporate editorial brochure translated to web. Brief-pinned world (dark plus red), rendered at full material range, not its softest tint.

## Tokens

Colors (Tailwind v4 `@theme`, so `bg-obsidian`, `text-brand`, etc. exist):
- `obsidian #0e0c0c`, page ground (warm black)
- `onyx #161313`, raised surface / alt sections
- `graphite #1d1919`, cards, inputs
- `brand #fb2e01`, logo red (CTA hover / emphasis)
- `brand-light #ff5c3a`, soft highlight
- `brand-dark #c92f12`, labels, large accent text, primary CTA fill
- `ivory #f3efe8`, primary text (warm off-white, never pure #fff)
- `ash #a8a19a`, secondary text
- `ash-dim #8a837c`, tertiary / meta

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
