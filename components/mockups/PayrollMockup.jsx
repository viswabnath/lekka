const people = [
  { name: "Meher Reddy", role: "Design Lead", amount: "68,000" },
  { name: "Anil Kumar", role: "Accounts", amount: "52,500" },
  { name: "Sowmya Rao", role: "Client Servicing", amount: "45,000" },
  { name: "Farhan Sheikh", role: "Developer", amount: "71,200" },
];

export default function PayrollMockup() {
  return (
    <div className="p-5 sm:p-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-mono-figures text-[10px] uppercase tracking-[0.14em] text-ink-muted">
            Payroll · August 2026
          </div>
          <div className="font-mono-figures mt-1 text-xl font-medium text-ink sm:text-2xl">
            ₹2,36,700
          </div>
        </div>
        <div className="rounded-sm bg-harbor/10 px-3 py-1.5 text-xs font-medium text-harbor-deep">
          Ready to disburse
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {people.map((p) => (
          <div
            key={p.name}
            className="flex items-center justify-between rounded-sm border border-line-on-paper bg-paper-2/40 px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brass/20 font-mono-figures text-xs font-medium text-ink">
                {p.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <div className="text-sm text-ink">{p.name}</div>
                <div className="text-xs text-ink-muted">{p.role}</div>
              </div>
            </div>
            <div className="font-mono-figures text-sm text-ink">₹{p.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
