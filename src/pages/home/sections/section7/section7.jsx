// BespokeSection.jsx
export default function BespokeSection() {
  return (
    <section
      style={{
        backgroundColor: "#EDEAF2",
        padding: "100px 72px",
        textAlign: "center",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* Heading */}
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "72px",
            fontWeight: 400,
            color: "#3D3566",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          Begin Your Bespoke Journey
        </h2>
 
        {/* Sub */}
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "15px",
            color: "#AAAAAA",
            marginBottom: "48px",
            lineHeight: 1.7,
          }}
        >
          Custom requests, bulk orders, or personal engravings. We are just a message away.
        </p>
 
        {/* WhatsApp button */}
        <button
  style={{
    background: "linear-gradient(to right, #f5e6a5, #e3c15b, #d4af37)",
    color: "#3D3566",
    fontFamily: "'Jost', sans-serif",
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    padding: "18px 48px",
    border: "none",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: "12px",
    boxShadow: "0 6px 24px rgba(201,168,76,0.3)",
  }}
>
          {/* Chat bubble icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          Order via WhatsApp
        </button>
      </div>
    </section>
  );
}