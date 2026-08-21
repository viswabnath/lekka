@AGENTS.md

# CLAUDE.md — Lekka marketing site

Public marketing site for Lekka (by OneMark). Not the product itself —
see `../onemark-internal` for that. Full architecture/route/component
reference lives in `README.md`; this file is behavioral guidance for
working in this specific repo.

## Commands

```bash
npm run dev / build / start / lint
```

Always run `npm run lint` and `npm run build` after changes — the build
catches JSX/import errors lint doesn't, and this repo has no test suite,
so a clean build is the actual quality gate.

## Hard rules for this repo

- **No emojis, ever.** Stroke SVG icons only (`components/icons.jsx`,
  `base` style object: `fill: none, stroke: currentColor, strokeWidth: 1.5`).
  Add new icons in that same style, don't reach for an icon library.
- **No fabricated testimonials, client names, logos, or numbers.**
  Real numbers only (OneMark's own usage data, explicitly labeled as
  such). If asked for social proof and none is available, say so and
  propose an honest alternative (the founder's-note pattern already on
  `/`) rather than inventing one.
- **Sequential `01/02/03` numbering only for genuine sequences** (a real
  process with an order the reader needs — quote→deliver→invoice→collect,
  a numbered onboarding flow). Never as decoration on a set of parallel
  items (features, team values, FAQ). Question it before adding it.
- **Every section gets a `Reveal`**, with a deliberate `direction` — text
  and its paired visual enter from opposite sides, headings fall from
  above. Don't add a bare unanimated section; don't default everything to
  the same direction either (defeats the "orchestrated sequence" intent
  — see `Reveal.jsx`'s own doc comment).
- **Every route gets Next's file-based metadata treatment**, not just the
  6 "real" pages — `not-found.js`, `terms`, `privacy` all have Reveal
  transitions and proper `metadata` exports too. If you add a new route,
  match that.

## Design tokens (don't hardcode colors)

Defined in `app/globals.css` under `:root` / `@theme inline`. Use the
Tailwind utility names (`bg-paper`, `text-ink-muted`, `border-line-on-paper`,
etc.), not raw hex, so a future palette tweak is a one-file change.

- Surfaces: `paper` (#f5f6f6) / `paper-2` (#fff) / `paper-3` — alternate
  these between adjacent sections (zebra-striping) so section boundaries
  read without needing a visible divider every time.
- Text: `ink` / `ink-muted` / `ink-subtle` (subtle = `#6b6f77`, ~4.7:1 on
  paper — do not lighten this back toward its old `#8a8f98`, that failed
  WCAG AA).
- Accent: `accent` (#5e6ad2) for backgrounds/borders/icons/large headline
  text; `accent-bright` (#4a55be) for small text specifically (buttons'
  own contrast against `bg-accent` is unaffected either way — this is
  only about `text-accent` on a light background). See README's gotchas
  section for the exact contrast math if this needs revisiting.
- `danger` / `success` used sparingly and meaningfully — `danger` for the
  "here's what this costs you" framing, `success` for reconciled/complete
  states, not as generic emphasis colors.

## Before recommending a page is "done"

Check it against the same bar the existing pages were built to:
1. Directional `Reveal` on every section, not just the hero.
2. If it has a stat/number, does it need `StatCounter` (count-up) or is a
   static figure genuinely more honest here (e.g. a price, which
   shouldn't animate)?
3. Screenshots go through `ScreenshotImage` (gets the magnifier lens for
   free), never a raw `next/image`, unless there's a specific reason not
   to (e.g. it's a decorative illustration, not a product screenshot —
   those stay as plain `<img>` from `public/illustrations/`).
4. `metadata` export with a real `title`/`description` — Next's fallback
   means you don't need to duplicate them into `openGraph`/`twitter`
   unless the share-card copy should genuinely differ from the page copy.
5. Lint + build clean. Contrast-check any new small colored text against
   its actual background before shipping (see README gotchas) — don't
   assume `text-accent` is safe everywhere just because it looks fine on
   one background.

## Where things went wrong before (so it doesn't happen again)

- Mobile nav overlay nested inside `<header>` → sized to the header's own
  64px bar, not the viewport, because `backdrop-blur-md` establishes a
  containing block for `position: fixed` descendants. Fixed by making the
  overlay a sibling of `<header>`.
- `BackgroundDoodle` initially either vanished or painted over the text
  it was supposed to sit behind — `position: absolute` + `z-index: auto`
  paints *after* static in-flow siblings per the CSS spec unless the
  container has its own stacking context. Fixed with `isolate` on the
  host section.
- Screenshot count via the "5 tools" copy went stale after the module
  ledger was expanded to the real 12 — when changing a real count
  anywhere on the site, grep for the old number across the whole repo,
  not just the section you're editing.
