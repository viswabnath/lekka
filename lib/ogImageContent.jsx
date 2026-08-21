// Shared JSX tree for the OG/Twitter share card. Satori (which ImageResponse
// uses) only understands inline styles and a flexbox subset of CSS — no
// Tailwind classes, no external fonts without fetching bytes — so this stays
// deliberately simple: brand colors and shapes only, no custom font, no
// network fetch, so image generation never depends on the outside internet
// being reachable at request time.
export function OgImageContent() {
  const paper = "#f5f6f6";
  const ink = "#0d0e10";
  const inkMuted = "#4a4d54";
  const accent = "#5e6ad2";
  const line = "#e4e5e9";

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: paper,
        fontFamily: "sans-serif",
      }}
    >
      {/* Left: wordmark + tagline */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "58%",
          height: "100%",
          padding: "0 0 0 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 4,
              background: accent,
            }}
          />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              color: inkMuted,
              textTransform: "uppercase",
            }}
          >
            by OneMark
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 108,
            fontWeight: 700,
            color: ink,
            marginTop: 18,
            letterSpacing: -2,
          }}
        >
          Lekka
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: inkMuted,
            marginTop: 20,
            maxWidth: 560,
            lineHeight: 1.4,
          }}
        >
          One ledger for your whole business.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            width: 120,
            height: 4,
            background: accent,
            borderRadius: 2,
          }}
        />
      </div>

      {/* Right: a simplified ledger-card motif */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "42%",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 360,
            borderRadius: 16,
            border: `1px solid ${line}`,
            background: "#ffffff",
            padding: 28,
            boxShadow: "0 30px 80px -30px rgba(0,0,0,0.25)",
            gap: 16,
          }}
        >
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                paddingBottom: 16,
                borderBottom: i < 3 ? `1px solid ${line}` : "none",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  border: `1px solid ${line}`,
                  background: i === 1 ? `${accent}1a` : paper,
                }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    width: i === 0 ? "70%" : i === 2 ? "55%" : "62%",
                    height: 10,
                    borderRadius: 3,
                    background: line,
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    width: "40%",
                    height: 8,
                    borderRadius: 3,
                    background: line,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
