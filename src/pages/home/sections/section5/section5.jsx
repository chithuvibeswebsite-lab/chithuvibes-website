// FounderSection.jsx
export default function FounderSection() {
  return (
    <section
      style={{
        backgroundColor: "#EDEAF2",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: "520px",
      }}
    >
      {/* ── LEFT — image placeholder ── */}
      <div
        style={{
          padding: "40px 40px 40px 60px",
          display: "flex",
          alignItems: "stretch",
        }}
      >
        <div
          style={{
            backgroundColor: "#D5D5D5",
            borderRadius: "8px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="90"
            height="90"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#BBBBBB"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </div>
      </div>
 
      {/* ── RIGHT — content ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "80px 72px 80px 48px",
          boxSizing: "border-box",
        }}
      >
        <div>
          {/* Gold line */}
          <div
            style={{
              width: "56px",
              height: "3px",
              backgroundColor: "#C9A84C",
              marginBottom: "28px",
            }}
          />
 
          {/* Heading */}
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "52px",
              fontWeight: 400,
              color: "#3D3566",
              marginBottom: "28px",
              lineHeight: 1.2,
            }}
          >
            A Note from the Founder
          </h2>
 
          {/* Quote */}
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "22px",
              fontStyle: "italic",
              color: "#3D3566",
              lineHeight: 1.75,
              marginBottom: "32px",
              maxWidth: "520px",
            }}
          >
            "In every stroke of Tamil script, there is a rhythm. My goal was to capture that rhythm and make it permanent. Each piece we create is more than decor—it's a piece of our shared identity."
          </p>
 
          {/* Name */}
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#C9A84C",
              marginBottom: "6px",
            }}
          >
            Chithu Vibes
          </p>
 
          {/* Title */}
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#999999",
            }}
          >
            Master Calligrapher &amp; Founder
          </p>
        </div>
      </div>
    </section>
  );
}
