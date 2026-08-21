/**
 * A very low-opacity scatter of hand-drawn ledger marks (rupee glyphs,
 * checkmarks, tally ticks, a stitched line) behind a plain paper section —
 * texture, not decoration. Pointer-events-none so it never intercepts the
 * custom cursor's link/text detection. Positioned by the parent, which
 * needs `relative overflow-hidden`.
 */
export default function BackgroundDoodle({ className = "" }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 -z-10 h-full w-full text-ink-subtle/[0.07] ${className}`}
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
    >
      {/* rupee glyphs */}
      <text x="90" y="150" fontSize="64" fontFamily="var(--font-display)" fill="currentColor">
        &#8377;
      </text>
      <text x="1290" y="720" fontSize="88" fontFamily="var(--font-display)" fill="currentColor">
        &#8377;
      </text>
      <text x="1180" y="140" fontSize="40" fontFamily="var(--font-display)" fill="currentColor">
        &#8377;
      </text>

      {/* checkmarks-in-circle */}
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="150" cy="620" r="26" />
        <path d="M139 620l8 8 16-16" />

        <circle cx="1330" cy="330" r="18" />
        <path d="M1323 330l5 5 10-10" />
      </g>

      {/* tally ticks */}
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M60 380v34M72 380v34M84 380v34M96 380v34" />
        <path d="M1220 560v26M1230 560v26M1240 560v26" />
      </g>

      {/* a loose ledger-rule stitch */}
      <path
        d="M980 60 C1040 100 1080 40 1140 80 S1220 60 1260 100"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="1 10"
        strokeLinecap="round"
      />
      <path
        d="M40 760 C100 800 140 740 200 780 S280 760 320 800"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="1 10"
        strokeLinecap="round"
      />

      {/* small ascending trend */}
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M1070 830 l24 -18 l20 10 l30 -34" />
      </g>

      {/* scattered dot grid */}
      <g fill="currentColor">
        {Array.from({ length: 4 }).map((_, row) =>
          Array.from({ length: 4 }).map((_, col) => (
            <circle key={`${row}-${col}`} cx={1100 + col * 16} cy={470 + row * 16} r="1.6" />
          ))
        )}
      </g>
    </svg>
  );
}
