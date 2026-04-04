// MasterpiecesSection.jsx
export default function MasterpiecesSection() {
  const items = [
    {
      title: "Wooden Engravings",
      desc: "Sustainable teak and walnut infused with classical Tamil literature.",
      price: "From ₹4,500",
    },
    {
      title: "Acrylic Masterpieces",
      desc: "Modern luminosity meeting traditional script for contemporary spaces.",
      price: "From ₹3,200",
    },
    {
      title: "Metal Art",
      desc: "Brass and copper plates etched with surgical precision for lifelong endurance.",
      price: "From ₹7,800",
    },
  ];
 
  return (
    <section
      style={{
        backgroundColor: "#F0EEF5",
        padding: "72px 72px 80px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* ── Header row ── */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: "40px",
          }}
        >
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "52px",
              fontStyle: "italic",
              fontWeight: 400,
              color: "#3D3566",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            The Masterpieces
          </h2>
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#999999",
              marginTop: "16px",
            }}
          >
            Curated Selection / 2024
          </p>
        </div>
 
        {/* ── Cards row ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "20px",
          }}
        >
          {items.map((item) => (
            <div
              key={item.title}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "4px",
                padding: "20px 20px 24px",
                cursor: "pointer",
                boxSizing: "border-box",
              }}
            >
              {/* Image placeholder */}
              <div
                style={{
                  backgroundColor: "#DCDCDC",
                  borderRadius: "8px",
                  height: "280px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                }}
              >
                <svg
                  width="48"
                  height="48"
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
 
              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "26px",
                  fontWeight: 500,
                  color: "#3D3566",
                  marginBottom: "10px",
                  lineHeight: 1.2,
                }}
              >
                {item.title}
              </h3>
 
              {/* Description */}
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "13px",
                  color: "#777777",
                  lineHeight: 1.7,
                  marginBottom: "24px",
                  minHeight: "44px",
                }}
              >
                {item.desc}
              </p>
 
              {/* Price + arrow */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderTop: "1px solid #F0EEF5",
                  paddingTop: "16px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "14px",
                    color: "#3D3566",
                    fontWeight: 500,
                  }}
                >
                  {item.price}
                </span>
                <span
                  style={{
                    color: "#3D3566",
                    fontSize: "22px",
                    lineHeight: 1,
                    fontWeight: 300,
                  }}
                >
                  ›
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}