// HeroSection.jsx
export default function HeroSection() {
  return (
    <section
      style={{
        backgroundColor: "#F0EEF5",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "80px 72px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}
      >
        {/* ── LEFT ── */}
        <div>
          {/* Label */}
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#3D3566",
              textDecoration: "underline",
              textUnderlineOffset: "4px",
              marginBottom: "28px",
            }}
          >
            Heritage &amp; Technology
          </p>
 
          {/* H1 */}
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "76px",
              fontWeight: 400,
              color: "#3D3566",
              lineHeight: 1.08,
              marginBottom: "12px",
              letterSpacing: "-0.01em",
            }}
          >
            The Soul of<br />Tamil Calligraphy.
          </h1>
 
          {/* Tamil */}
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "68px",
              fontWeight: 700,
              color: "#C9A84C",
              lineHeight: 1.15,
              marginBottom: "40px",
            }}
          >
            ழகரம் பேசும்<br />எழுத்தின் கலை.
          </h2>
 
          {/* Description */}
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "15px",
              color: "#555555",
              lineHeight: 1.8,
              maxWidth: "400px",
              marginBottom: "40px",
            }}
          >
            Where ancient script meets avant-garde technology.
            We immortalize the fluid beauty of Tamil letters into
            timeless materials with microscopic accuracy.
          </p>
 
          {/* CTA Button */}
          <button
            style={{
              backgroundColor: "#C9A84C",
              color: "#ffffff",
              fontFamily: "'Jost', sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              padding: "16px 36px",
              border: "none",
              cursor: "pointer",
              display: "inline-block",
            }}
          >
            Explore Collection
          </button>
        </div>
 
        {/* ── RIGHT ── */}
        <div style={{ position: "relative" }}>
          {/* Image placeholder */}
          <div
            style={{
              backgroundColor: "#DCDCDC",
              borderRadius: "8px",
              height: "580px",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="72"
              height="72"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#AAAAAA"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
 
          {/* Quote card */}
          <div
            style={{
              position: "absolute",
              bottom: "-24px",
              left: "24px",
              backgroundColor: "#ffffff",
              boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
              padding: "24px 28px",
              maxWidth: "280px",
              borderRadius: "2px",
            }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "16px",
                fontStyle: "italic",
                color: "#444444",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              "A celebration of my roots, etched for eternity."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}