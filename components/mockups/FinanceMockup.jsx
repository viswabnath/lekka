const rows = [
  { name: "Aarav Consulting", ref: "OM/ARC/08/2026/014", amount: "48,500", status: "Paid" },
  { name: "Northwind Studio", ref: "OM/NWS/08/2026/013", amount: "1,20,000", status: "Partial" },
  { name: "Sundar & Co.", ref: "OM/SDC/08/2026/012", amount: "76,200", status: "Paid" },
  { name: "Blue Anchor Media", ref: "OM/BAM/08/2026/011", amount: "33,000", status: "Due" },
];

const statusColor = {
  Paid: "text-harbor",
  Partial: "text-brass",
  Due: "text-oxblood",
};

export default function FinanceMockup() {
  return (
    <div className="p-5 sm:p-8">
      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {[
          { label: "Total Purse", value: "8,42,650" },
          { label: "Outstanding", value: "1,53,200" },
          { label: "This month", value: "2,90,400" },
        ].map((card) => (
          <div
            key={card.label}
            className="rounded-sm border border-line-on-paper bg-paper-2/60 p-3 sm:p-4"
          >
            <div className="font-mono-figures text-[9px] uppercase tracking-[0.14em] text-ink-muted sm:text-[10px]">
              {card.label}
            </div>
            <div className="font-mono-figures mt-2 text-base font-medium text-ink sm:text-xl">
              ₹{card.value}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 overflow-hidden rounded-sm border border-line-on-paper sm:mt-6">
        <div className="grid grid-cols-[1fr_auto_auto] gap-3 border-b border-line-on-paper bg-paper-2/60 px-4 py-2 font-mono-figures text-[10px] uppercase tracking-[0.1em] text-ink-muted">
          <span>Client</span>
          <span>Amount</span>
          <span className="text-right">Status</span>
        </div>
        {rows.map((r) => (
          <div
            key={r.ref}
            className="grid grid-cols-[1fr_auto_auto] items-center gap-3 border-b border-line-on-paper px-4 py-3 last:border-0"
          >
            <div>
              <div className="text-sm text-ink">{r.name}</div>
              <div className="font-mono-figures text-[10px] text-ink-muted">{r.ref}</div>
            </div>
            <div className="font-mono-figures text-sm text-ink">₹{r.amount}</div>
            <div
              className={`text-right font-mono-figures text-xs font-medium ${statusColor[r.status]}`}
            >
              {r.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
