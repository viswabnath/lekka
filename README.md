# Lekka — marketing website

Marketing site for **Lekka, by OneMark** (name is provisional — revisit
before launch). Next.js 16 (App Router), Tailwind v4, GSAP (scroll reveals +
page transitions), and React Three Fiber (hero visualization).

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Design system

Rooted in "Lekka" (Telugu for account/reckoning) and OneMark's Kakinada,
coastal-Andhra origin — see the full palette/type rationale in
`app/globals.css`. Deep indigo-ink canvas, ledger-paper cards, brass/gold and
oxblood accents, tabular-figure numerals (IBM Plex Mono) for anything that's
actually a number.

- `components/Reveal.jsx` — scroll-triggered fade/lift, used everywhere instead of one-off animations
- `components/PageTransition.jsx` — the brass-rule route-change sweep
- `components/hero/` — the 3D hero (three converging data streams → one core); client-only via `LedgerHeroLoader`
- `components/LedgerRow.jsx` — the feature-as-ledger-line-item structural motif
- `components/mockups/` — stylized dashboard mockups standing in for real product screenshots

## Before this goes live

1. **Name.** "Lekka" is a working name, not finalized — check domain/trademark availability before committing.
2. **Real screenshots.** `components/mockups/*` are stylized placeholders, not actual product screenshots. Swap them for real captures of the OneMark portal (with realistic-but-non-sensitive demo data) once ready.
3. **Contact form isn't wired to anything yet.** `app/api/contact/route.js` validates and `console.log`s submissions — it does not send an email or hit a CRM. Connect it to a real destination (e.g. Resend, or a webhook) before publishing.
4. **`hello@onemark.co.in`** in `app/contact/page.js` is a placeholder based on your domain — confirm that inbox actually exists before launch.
5. **No real pricing numbers** — pricing page intentionally has no public price list (talk-to-us model), matching the fork-and-deploy-per-customer approach.
