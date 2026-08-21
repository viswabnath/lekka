export default function ScreenshotFrame({ label = "lekka.app", children, className = "" }) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-line-on-canvas bg-canvas-2 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-line-on-canvas bg-canvas-3 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-oxblood/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-brass/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-harbor/70" />
        <div className="ml-3 font-mono-figures rounded-sm bg-canvas px-3 py-1 text-[11px] text-cream-muted">
          {label}
        </div>
      </div>
      <div className="bg-paper">{children}</div>
    </div>
  );
}
