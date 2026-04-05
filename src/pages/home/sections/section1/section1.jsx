export default function Section1() {
  return (
    <section style={{ backgroundColor: "#F0EEF5", minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "64px", boxSizing: "border-box" }}>
      <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "60px 72px", display: "grid", gridTemplateColumns: "55% 45%", gap: "48px", alignItems: "center", boxSizing: "border-box" }}>

        {/* LEFT */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#3D3566", margin: "0 0 32px 0", textDecoration: "underline", textDecorationStyle: "wavy", textDecorationColor: "#3D3566", textUnderlineOffset: "5px" }}>
            Heritage &amp; Technology
          </p>

          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "76px", fontWeight: 600, fontStyle: "normal", color: "#3D3566", lineHeight: 1.0, margin: "0 0 8px 0", letterSpacing: "-0.01em" }}>
            The Soul of<br />Tamil Calligraphy.
          </h1>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "50px", fontWeight: 700, color: "#C9A84C", lineHeight: 1.2, margin: "0 0 32px 0" }}>
            ழகரம் பேசும்<br />எழுத்தின் கலை.
          </h2>

          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "14px", color: "#555555", lineHeight: 1.85, maxWidth: "380px", margin: "0 0 36px 0", fontWeight: 300 }}>
            Where ancient script meets avant-garde technology. We immortalize the fluid beauty of Tamil letters into timeless materials with microscopic accuracy.
          </p>

          <button
  style={{
    background: "linear-gradient(to right, #f5e6a5, #e3c15b, #d4af37)",
    color: "#1a1a1a",
    fontFamily: "'Jost', sans-serif",
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    padding: "16px 36px",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "all 0.25s ease"
  }}
>
  Explore Collection
</button>
        </div>

        {/* RIGHT */}
        <div style={{ position: "relative", paddingBottom: "40px" }}>
          <div style={{ backgroundColor: "#D8D8D8", borderRadius: "10px", height: "500px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#BBBBBB" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>

          <div style={{ position: "absolute", bottom: "15px", left: "-25px", backgroundColor: "#ffffff", boxShadow: "0 8px 32px rgba(0,0,0,0.10)", padding: "20px 24px", maxWidth: "255px", borderRadius: "3px", zIndex: 2 }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "15px", fontStyle: "italic", color: "#3D3566", lineHeight: 1.65, margin: 0 }}>
              "A celebration of my roots, etched for eternity."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}