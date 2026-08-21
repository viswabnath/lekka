import Reveal from "./Reveal";
import LedgerHeroLoader from "./hero/LedgerHeroLoader";

export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden border-b border-line-on-canvas bg-canvas">
      <LedgerHeroLoader compact />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-canvas/50 via-transparent to-canvas" />

      <div className="relative mx-auto max-w-4xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <span className="font-mono-figures text-xs uppercase tracking-[0.18em] text-accent">
            {eyebrow}
          </span>
          <h1 className="font-display mt-5 text-4xl font-medium leading-tight text-cream sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream-muted">
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
