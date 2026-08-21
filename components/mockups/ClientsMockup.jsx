const clients = [
  { name: "Northwind Studio", sector: "Branding", status: "Active", services: 3 },
  { name: "Aarav Consulting", sector: "Advisory", status: "Active", services: 2 },
  { name: "Blue Anchor Media", sector: "Marketing", status: "Lead", services: 1 },
  { name: "Sundar & Co.", sector: "Legal", status: "Active", services: 4 },
];

const statusColor = {
  Active: "text-harbor",
  Lead: "text-brass",
};

export default function ClientsMockup() {
  return (
    <div className="p-5 sm:p-8">
      <div className="flex items-center justify-between">
        <div className="font-mono-figures text-[10px] uppercase tracking-[0.14em] text-ink-muted">
          Clients · 34 onboarded · 6 leads
        </div>
      </div>

      <div className="mt-5 space-y-3">
        {clients.map((c) => (
          <div
            key={c.name}
            className="flex items-center justify-between rounded-sm border border-line-on-paper bg-paper-2/40 px-4 py-3"
          >
            <div>
              <div className="text-sm text-ink">{c.name}</div>
              <div className="text-xs text-ink-muted">{c.sector} · {c.services} services</div>
            </div>
            <div className={`font-mono-figures text-xs font-medium ${statusColor[c.status]}`}>
              {c.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
