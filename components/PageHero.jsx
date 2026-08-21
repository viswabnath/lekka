import Reveal from "./Reveal";

export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="border-b border-line-on-canvas bg-canvas">
      <div className="mx-auto max-w-4xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <span className="font-mono-figures text-xs uppercase tracking-[0.18em] text-brass">
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="font-display mt-5 text-4xl font-medium leading-tight text-cream sm:text-5xl">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream-muted">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
