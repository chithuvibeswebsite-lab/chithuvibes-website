// AuthenticitySection.jsx
export default function AuthenticitySection() {
  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        padding: "100px 72px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Gold compass icon */}
        <div style={{ marginBottom: "32px", display: "flex", justifyContent: "center" }}>
          <svg
            width="36"
            height="44"
            viewBox="0 0 36 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="18" y1="4" x2="6" y2="38" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" />
            <line x1="18" y1="4" x2="30" y2="38" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" />
            <line x1="10" y1="22" x2="26" y2="22" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" />
            <circle cx="18" cy="4" r="2.5" fill="#C9A84C" />
          </svg>
        </div>

        {/* Heading */}
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "52px",
            fontStyle: "italic",
            fontWeight: 400,
            color: "#3D3566",
            marginBottom: "36px",
            lineHeight: 1.2,
          }}
        >
          The Edge of Authenticity
        </h2>

        {/* Description */}
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "16px",
            color: "#555555",
            lineHeight: 1.85,
            maxWidth: "700px",
            margin: "0 auto 64px",
          }}
        >
          Unlike generic fonts, our designs are based on hand-drawn calligraphy by Tamil masters. We then vectorize these unique strokes to maintain the "human touch" even after the laser has done its work.
        </p>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "32px",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          {[
            { value: "100%", label: "Original Script" },
            { value: "0.01mm", label: "Laser Accuracy" },
            { value: "Global", label: "Shipping" },
          ].map((s) => (
            <div key={s.label}>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "48px",
                  fontWeight: 500,
                  color: "#C9A84C",
                  marginBottom: "8px",
                  lineHeight: 1,
                }}
              >
                {s.value}
              </p>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#999999",
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}