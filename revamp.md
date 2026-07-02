# Portfolio Revamp Brief

Design + structure spec for revamping this portfolio. All decisions below are
locked. Content copy is handled separately by the owner; this brief covers the
design system, page structure, and the migration plan against the existing code.

## Stack (unchanged)

Next.js 16 (App Router) · React 19 · Tailwind v4 · framer-motion · TypeScript.
Keep the stack. Content stays centralized in `src/content/site.ts`; pages remain
thin shells that read from it.

## Locked design decisions

- **Structure:** single scrolling page (not the current 4-route layout).
- **Layout:** single centered column with a slim sticky top nav. Remove the
  two-column sidebar layout.
- **Base:** warm off-white ("ink on paper"), with a dark-mode toggle (keep the
  existing `data-theme` + localStorage approach).
- **Accent:** teal, used sparingly (links, one hover state, section markers).
- **Headings:** EB Garamond (thin, classic serif). Body stays Albert Sans.
  Monospace for metadata (dates, tech tags, section numbers).
- **Personality:** considered minimalism. Richness comes from typography and
  spacing, not effects. Precise and understated, not flashy.

## Design tokens

Replace the black/white `--color-*` tokens in `src/styles/globals.css`.

### Light mode

| Token | Value | Use |
|---|---|---|
| `--color-background` | `#F8F5EF` | page (warm off-white) |
| `--color-surface` | `#FCFAF5` | cards |
| `--color-surface-2` | `#F3EFE6` | footer / alt band |
| `--color-foreground` | `#23201A` | primary text / headings (warm ink) |
| `--color-secondary` | `#5F5A4E` | body / secondary text |
| `--color-muted` | `#9C9684` | metadata, captions |
| `--color-border` | `rgba(0,0,0,0.09)` | hairlines |
| `--color-accent` | `#0F6E56` | links, accent text (teal 600) |
| `--color-accent-soft-bg` | `#E1F5EE` | chip / tag background (teal 50) |
| `--color-accent-soft-fg` | `#085041` | text on soft accent bg (teal 800) |
| `--color-accent-bright` | `#1D9E75` | small accents, section numbers (teal 400) |

### Dark mode (`[data-theme="dark"]`)

| Token | Value | Use |
|---|---|---|
| `--color-background` | `#17150F` | page (warm charcoal) |
| `--color-surface` | `#201D17` | cards |
| `--color-surface-2` | `#1C1913` | footer / alt band |
| `--color-foreground` | `#F2EEE4` | primary text / headings |
| `--color-secondary` | `#B8B2A4` | body / secondary text |
| `--color-muted` | `#7A7466` | metadata, captions |
| `--color-border` | `rgba(255,255,255,0.10)` | hairlines |
| `--color-accent` | `#5DCAA5` | links, accent text (lighter teal for contrast) |
| `--color-accent-soft-bg` | `#123A30` | chip / tag background |
| `--color-accent-soft-fg` | `#9FE1CB` | text on soft accent bg |
| `--color-accent-bright` | `#1D9E75` | small accents, section numbers |

## Typography

- **Headings:** EB Garamond, weights 400 and 500 only. Self-host woff2 in
  `public/fonts` to match the existing Albert Sans approach (or use
  `next/font/google` if simpler). Add `--font-family-serif`.
- **Body:** keep Albert Sans (`--font-family-default`). Good clean sans; no reason
  to replace.
- **Mono:** add JetBrains Mono or IBM Plex Mono for dates, tech tags, and section
  numbers. Add `--font-family-mono`.
- Retire the dotted `angled-separator` utility; use a simple hairline
  (`--color-border`) rule instead — the dotted separator is a strong template tell.

## Page structure (single page, top to bottom)

1. **Sticky top nav** — name (EB Garamond) left; anchor links Work / About /
   Skills / Contact (smooth-scroll) + Résumé button + theme toggle right. Add
   `scroll-margin-top` to sections to offset the sticky bar.
2. **Hero** — mono eyebrow (`founder · ai engineer · sunnyvale`), large serif name,
   a one-line positioning statement, a 2–3 line intro, and a link row
   (Email / GitHub / LinkedIn). Type-only, no photo (headshot optional).
3. **Selected work** — the centerpiece. Briefing rendered as a wide **flagship**
   card (room for an app screenshot, "live on App Store" tag, one-line pitch,
   stack chips, links). Below it, a 3-up grid: NBA Win-Probability, MailFind,
   Rampart AI. Section header uses a mono `01 —` marker.
4. **Experience** — compact vertical timeline (role · company, mono dates, one
   line each). Lighter weight than Work so it doesn't compete.
5. **Skills** — grouped rows: Languages / Frameworks / Tools, styled as mono
   text or understated chips.
6. **Contact + footer** — one CTA line + email + social links.

Section headers share a `SectionHeading` component: mono number in accent-bright
+ EB Garamond title.

## Migration plan (file by file)

**Rework**
- `src/styles/globals.css` — new color tokens (above), add serif + mono font
  vars, EB Garamond `@font-face`, retire dotted separator.
- `src/app/layout.tsx` — replace two-column flex (sidebar 23% + main) with a
  single centered column (max content width ~820–900px) + new `TopNav`. Keep
  `ThemeProvider` and the inline theme-restore script.
- `src/app/page.tsx` — compose all sections from small components reading
  `site.ts`. Keep framer-motion `fadeUp`, gated behind `prefers-reduced-motion`.
- `Button.tsx`, `Footer.tsx` — restyle to new tokens (solid-teal primary + ghost
  secondary, softer radius).

**Add** (`src/components/`)
- `layout/TopNav.tsx` (replaces `Sidebar` + `MobileHeader`; responsive).
- `sections/Hero.tsx`, `Work.tsx`, `Experience.tsx`, `Skills.tsx`, `Contact.tsx`.
- `ui/ProjectCard.tsx`, `ui/Chip.tsx`, `ui/SectionHeading.tsx`.

**Delete**
- `src/app/about/page.tsx`, `src/app/contact/page.tsx`, `src/app/projects/page.tsx`
  (redundant once single-page).
- `featuredItems` in `site.ts` and `public/images/illustrations/feature-*.{svg,png}`
  (generic template art).
- `components/layout/Sidebar.tsx`, `components/layout/MobileHeader.tsx`,
  `components/ui/AngledSeparator.tsx`.

**Keep**
- `src/app/projects/[slug]/page.tsx` — restyle and repurpose as optional
  "case study" deep-dives linked from each project card. Adds depth cheaply.
- `ThemeProvider`, `ThemeToggle`, the dark-mode script.

## Content model changes (`src/content/site.ts`)

Design-driven shape changes (copy filled in separately):
- `hero` — add a positioning `headline` and optional `status` (e.g. "Currently
  building Briefing").
- `projects` — mark Briefing as `featured: true` (or rely on order) so Work
  renders it as the flagship; add optional `image` (Briefing app screenshot) and
  optional `year`/`category` for mono metadata.
- `skills` — change from a flat array to grouped:
  `{ languages: [...], frameworks: [...], tools: [...] }`.
- `experience` — add Briefing (Founder & Engineer) as the current role; reconcile
  entries with the resume (the resume does not list MyAIChef).
- `links` — add a GitHub profile link; order Email / GitHub / LinkedIn / Résumé.
- Add a résumé PDF to `public/` and link it from nav + hero.

## Avoid

Particle/three.js backgrounds, gradient or neon text, skill percentage bars,
autoplaying carousels, heavy glassmorphism, cursor-follower effects, terminal-
emulator homepages. The site itself is a demo of the owner's work, so it should
score well on Lighthouse.

## Quality checklist

- Respect `prefers-reduced-motion` (disable the fade-up).
- Semantic landmarks (`nav`, `main`, `section` with headings), alt text on any
  screenshots, visible focus states, sufficient contrast in both modes.
- `scroll-behavior: smooth` + `scroll-margin-top` on anchored sections.
- Verify every token works in both light and dark mode.