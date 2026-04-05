// HeritageSection.jsx
export default function HeritageSection() {
  return (
    <section
      style={{
        backgroundColor: "#DCDCDC",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: "520px",
      }}
    >
      {/* ── LEFT — image placeholder ── */}
      <div
        style={{
          backgroundColor: "#CCCCCC",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="100"
          height="100"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#AAAAAA"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      </div>
 
      {/* ── RIGHT — content ── */}
      <div
        style={{
          backgroundColor: "#EDEAF2",
          display: "flex",
          alignItems: "center",
          padding: "80px 72px",
          boxSizing: "border-box",
        }}
      >
        <div>
          {/* Badge */}
          <div
            style={{
              display: "inline-block",
              backgroundColor: "#3D3566",
              padding: "6px 14px",
              marginBottom: "28px",
            }}
          >
            <span
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#ffffff",
              }}
            >
              The Heritage
            </span>
          </div>
 
          {/* Heading */}
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "64px",
              fontStyle: "italic",
              fontWeight: 400,
              color: "#3D3566",
              lineHeight: 1.15,
              marginBottom: "40px",
            }}
          >
            Evolving the<br />Eternal Script
          </h2>
 
          {/* Para 1 */}
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "15px",
              color: "#444444",
              lineHeight: 1.85,
              marginBottom: "28px",
              maxWidth: "480px",
            }}
          >
            Chithu Vibes was born from a singular vision: to ensure that the exquisite flow of Tamil calligraphy survives the digital age by carving it into the physical world.
          </p>
 
          {/* Para 2 */}
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "15px",
              color: "#444444",
              lineHeight: 1.85,
              marginBottom: "48px",
              maxWidth: "480px",
            }}
          >
            Our process combines the meditative patience of a traditional scribe with the uncompromising power of industrial lasers. Every piece is a dialogue between the old and the new.
          </p>
 
          {/* Link */}
          <button
            style={{
              background: "none",
              border: "none",
              borderBottom: "2px solid #C9A84C",
              color: "#C9A84C",
              fontFamily: "'Jost', sans-serif",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              paddingBottom: "4px",
              cursor: "pointer",
            }}
          >
            Learn Our Process
          </button>
        </div>
      </div>
    </section>
  );
}