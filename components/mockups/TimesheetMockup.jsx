const days = ["M", "T", "W", "T", "F", "S", "S"];
const pattern = [1, 1, 1, 1, 1, 0.3, 0];

export default function TimesheetMockup() {
  return (
    <div className="p-5 sm:p-8">
      <div className="flex items-center justify-between">
        <div className="font-mono-figures text-[10px] uppercase tracking-[0.14em] text-ink-muted">
          Timesheet · Week 34
        </div>
        <div className="font-mono-figures text-sm text-harbor-deep">38.5 hrs logged</div>
      </div>

      <div className="mt-6 grid grid-cols-7 gap-2">
        {days.map((d, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className="font-mono-figures text-[10px] text-ink-muted">{d}</div>
            <div className="relative h-24 w-full overflow-hidden rounded-sm bg-paper-2/60">
              <div
                className="absolute bottom-0 left-0 right-0 bg-brass"
                style={{ height: `${pattern[i] * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-2 border-t border-line-on-paper pt-4">
        {[
          ["Client servicing", "12.0 hrs"],
          ["Internal — Lekka onboarding", "8.5 hrs"],
          ["Design review", "6.0 hrs"],
        ].map(([label, hrs]) => (
          <div key={label} className="flex items-center justify-between text-sm">
            <span className="text-ink-muted">{label}</span>
            <span className="font-mono-figures text-ink">{hrs}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
