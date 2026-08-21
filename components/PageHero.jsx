import Reveal from "./Reveal";
import BackgroundDoodle from "./BackgroundDoodle";

export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-line-on-paper bg-paper-2">
      <BackgroundDoodle />
      <div className="relative mx-auto max-w-4xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal direction="down">
          <span className="font-mono-figures text-xs uppercase tracking-[0.18em] text-accent-bright">
            {eyebrow}
          </span>
          <h1 className="font-display mt-5 text-4xl font-medium leading-tight text-ink sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
