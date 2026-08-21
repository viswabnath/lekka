# Lekka — marketing website

Marketing site for **Lekka, by OneMark** — a business management platform
(payroll, invoices, timesheets, clients) built by OneMark in Kakinada,
Andhra Pradesh. This repo is the public-facing site only; it does not
contain the product itself.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production build/serve
npm run lint
```

## Stack

Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS v4, GSAP
(`ScrollTrigger` for reveals, plain tweens for float/cursor motion). No
CSS-in-JS, no UI kit — plain Tailwind + a handful of custom CSS rules in
`app/globals.css`.

## Routes

| Route | Purpose |
|---|---|
| `/` | Hero, problem statement, module ledger (12 tools), screenshot walkthrough, real usage numbers, founder's note, CTA |
| `/product` | One section per module (FIN, RPT, DOC, HR, OPS, APR, CRM, SEC), each with a real screenshot |
| `/industries` | Who it's built for, the quote→deliver→invoice→collect loop, honest about fit |
| `/pricing` | Tiers (talk-to-us model, no public price list), why deployment-based pricing, FAQ |
| `/about` | OneMark's story, "this is literally our own dashboard" |
| `/contact` | Demo request form + WhatsApp CTA |
| `/terms`, `/privacy` | Legal pages, written in the site's own voice |
| `/not-found` (404) | On-brand "this entry doesn't exist in the ledger" |
| `/sitemap.xml`, `/robots.txt`, `/opengraph-image`, `/twitter-image` | Generated via Next's file-based metadata conventions — see `app/sitemap.js`, `app/robots.js`, `app/opengraph-image.jsx` |

## Design system

Rooted in "Lekka" (account/reckoning) and OneMark's own internal app's
actual Linear-derived design system — **not** a generic template. Light-first
palette (paper/paper-2/paper-3, ink/ink-muted/ink-subtle), accent `#5e6ad2`,
Plus Jakarta Sans (display + body) + IBM Plex Mono (figures/data). Full
token list in `app/globals.css`.

Content and copy conventions (see also `CLAUDE.md`):

- No emojis anywhere — stroke SVG icons only (`components/icons.jsx`).
- Sequential `01/02/03` numbering only where the content is a genuine
  sequence (e.g. the Industries "quote → deliver → invoice → collect"
  loop, the Contact "what happens next" steps) — never as decoration.
- No fabricated testimonials, client names, or invented numbers. The
  "Real numbers" section and founder's note are OneMark's own, real
  usage data and an honest self-quote, not marketing copy.

## Key components

| Component | What it does |
|---|---|
| `Reveal.jsx` | Scroll-triggered fade/slide-in with a `direction` prop (up/down/left/right), used for every section instead of one-off animations |
| `PageTransition.jsx` | The accent-bar sweep on route change, wraps `{children}` in the root layout |
| `CustomCursor.jsx` | Replaces the system pointer (real-mouse devices only) with a dot + a blend-inverted ring that grows over links/buttons and further over headline text |
| `ScreenshotImage.jsx` | Product screenshots with a Flipkart-style hover magnifier (a lens tracking the cursor, not a whole-image scale) — see gotcha below |
| `hero/ProductShowcase.jsx` | The two stacked hero screenshots with an independent GSAP float loop, built on top of `ScreenshotImage` |
| `BackgroundDoodle.jsx` | A ~7%-opacity scatter of hand-drawn ledger marks (₹ glyphs, checkmarks, tally ticks) behind plain paper sections |
| `StatCounter.jsx` | Counts a stat figure up from 0 once scrolled into view, keeping any non-digit suffix (e.g. `+`) fixed |
| `LedgerRow.jsx` | A feature presented as an account-ledger line item (code, icon, description, right-aligned figure) — the module-ledger motif on `/` |
| `Header.jsx` | Desktop nav + a true full-screen mobile overlay (not a small dropdown) — see gotcha below |
| `PageHero.jsx` | The shared eyebrow/title/subtitle banner used by every inner page |

## Known gotchas (read before touching these areas)

- **`backdrop-blur` + `position: fixed` children.** A `backdrop-filter`
  establishes a CSS containing block for `position: fixed` descendants
  (same as `transform`/`filter`). The mobile nav overlay in `Header.jsx`
  must be a **sibling** of `<header>`, not nested inside it — nesting it
  broke `inset-0` sizing to the header's own 64px bar instead of the
  viewport.
- **Absolutely-positioned decorative layers need `isolate`.** A
  `position: absolute` element with `z-index: auto` (like
  `BackgroundDoodle`) paints *in front of* static in-flow siblings per the
  CSS painting algorithm, unless its container establishes its own
  stacking context. Every host section adds `relative isolate` for this
  reason — don't drop it when adding the doodle somewhere new.
- **`text-accent` vs `text-accent-bright` for small text.** The brand
  accent `#5e6ad2` is ~4.34:1 against the `paper` background — just under
  WCAG AA's 4.5:1 minimum for normal-size text. Small text (eyebrows, step
  numbers, stat figures) uses `text-accent-bright` (`#4a55be`, ~5.8:1)
  instead. Large heading text and non-text uses (icons, borders,
  backgrounds) keep the real `text-accent`/`bg-accent`/`border-accent`
  since the 3:1 threshold there already passes. Don't "fix" this by
  reverting to `text-accent` on small text.
- **`ScreenshotImage`'s magnifier math is based on rendered size, not
  intrinsic size.** `width`/`height` props are only for Next Image's
  aspect ratio/srcset; the lens's `background-size`/`background-position`
  are computed from `getBoundingClientRect()` at mousemove time, so they
  stay correct across responsive breakpoints. It's a client component for
  this reason — don't convert it back to server-only.
- **`ink-subtle` was previously too light.** It was `#8a8f98`
  (~3.1:1 on `paper`, fails AA); now `#6b6f77` (~4.7:1). If you need
  something visually lighter than that for a genuinely decorative use
  (not real text), use an opacity modifier instead of introducing a new,
  lighter token.

## Before this goes live

1. **Contact form isn't wired to a real destination.**
   `app/api/contact/route.js` validates and `console.log`s submissions —
   it does not send an email or hit a CRM. Connect it (e.g. Resend, or a
   webhook) before publishing.
2. **`hello@onemark.co.in`** in `app/contact/page.js` and the footer — confirm
   that inbox exists and is monitored.
3. **WhatsApp number** (`+91 83319 78532`) is wired via `wa.me` links on
   the Contact page and footer — confirm this is the correct, monitored
   number before launch. The number is deliberately not printed as
   visible text anywhere, only used as the link target.
4. **`NEXT_PUBLIC_SITE_URL`** — `lib/site.js` falls back to
   `https://lekka.onemark.co.in` if this env var isn't set. The OG/Twitter
   share images, `sitemap.xml`, and `robots.txt` all resolve absolute
   URLs from it — set it to the real production domain once confirmed.
5. **No public price list** — intentional (talk-to-us model, matching the
   fork-and-deploy-per-customer approach described on `/pricing`), not a
   TODO.
