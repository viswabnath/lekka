import Reveal from "./Reveal";

/**
 * A feature presented as a ledger line-item: account code, icon, description,
 * and a right-aligned figure — because each module genuinely is a category
 * in the business's operations, not a step in a sequence. No 01/02/03s.
 */
export default function LedgerRow({ code, icon, title, description, stat, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="group grid grid-cols-[auto_1fr_auto] items-start gap-5 border-b border-line-on-canvas py-8 transition-colors sm:gap-8">
        <div className="font-mono-figures pt-1 text-xs tracking-[0.15em] text-brass">
          {code}
        </div>

        <div className="flex gap-5">
          <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-line-on-canvas text-brass transition-colors group-hover:border-brass/50">
            {icon}
          </div>
          <div>
            <h3 className="font-display text-xl font-medium text-cream sm:text-2xl">
              {title}
            </h3>
            <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-cream-muted">
              {description}
            </p>
          </div>
        </div>

        <div className="font-mono-figures hidden pt-1 text-right text-sm text-cream-muted sm:block">
          {stat}
        </div>
      </div>
    </Reveal>
  );
}
