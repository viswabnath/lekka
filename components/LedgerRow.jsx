/**
 * A feature presented as a ledger line-item: account code, icon, description,
 * and a right-aligned figure — because each module genuinely is a category
 * in the business's operations, not a step in a sequence. No 01/02/03s.
 */
export default function LedgerRow({ code, icon, title, description, stat }) {
  return (
    <div className="group grid grid-cols-[auto_1fr_auto] items-start gap-5 border-b border-line-on-paper py-8 transition-colors sm:gap-8">
      <div className="font-mono-figures pt-1 text-xs tracking-[0.15em] text-accent">
        {code}
      </div>

      <div className="flex gap-5">
        <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-line-on-paper text-accent transition-colors group-hover:border-accent/50">
          {icon}
        </div>
        <div>
          <h3 className="font-display text-xl font-medium text-ink sm:text-2xl">
            {title}
          </h3>
          <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-ink-muted">
            {description}
          </p>
        </div>
      </div>

      <div className="font-mono-figures hidden pt-1 text-right text-sm text-ink-subtle sm:block">
        {stat}
      </div>
    </div>
  );
}
