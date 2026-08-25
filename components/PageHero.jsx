import Reveal from "./Reveal";
import BackgroundDoodle from "./BackgroundDoodle";

export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-line-on-paper/80 bg-gradient-to-b from-paper-2 via-paper-2 to-paper">
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-accent/10 blur-3xl opacity-70" />
      <BackgroundDoodle />
      <div className="relative mx-auto max-w-4xl px-6 py-20 lg:px-10 lg:py-28 text-center sm:text-left">
        <Reveal direction="down">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3.5 py-1 text-xs font-semibold text-accent shadow-sm">
            <span className="font-mono-figures uppercase tracking-widest text-[10px]">
              {eyebrow}
            </span>
          </div>
          <h1 className="font-display mt-5 text-4xl font-extrabold tracking-tight leading-tight text-ink sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
