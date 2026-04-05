const GOLD = "#C9A84C";
const SERIF = "'Cormorant Garamond', serif";
const SANS = "'Jost', sans-serif";
 
function openWhatsApp() {
  window.open(
    "https://wa.me/919876543210?text=" +
      encodeURIComponent("Hi! I'm interested in ordering a custom Tamil calligraphy piece from Chithu Vibes."),
    "_blank"
  );
}
 
const FacebookIcon = () => (
  <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);
 
const InstagramIcon = () => (
  <svg width="20" height="20" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
  </svg>
);
 
const XIcon = () => (
  <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
 
const LinkedInIcon = () => (
  <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
 
const YouTubeIcon = () => (
  <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#C9A84C" />
  </svg>
);
 
export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
 
  const col1 = [
    { label: "Home", id: "hero" },
    { label: "About", id: "heritage" },
    { label: "Product", id: "collection" },
    { label: "Engravings", id: "masterpieces" },
  ];
 
  const col2 = [
    { label: "Calligraphy", id: "collection" },
    { label: "Custom orders", action: openWhatsApp },
    { label: "Gift sets", id: "collection" },
    { label: "Contact", action: openWhatsApp },
  ];
 
  const linkStyle = {
    background: "none",
    border: "none",
    fontFamily: SANS,
    fontSize: "15px",
    fontWeight: 400,
    color: "white",
    cursor: "pointer",
    padding: 0,
    textAlign: "left",
    lineHeight: 1,
  };
 
  return (
    <footer style={{ backgroundColor: "#ffffff", fontFamily: SANS, padding: "32px 24px 24px" }}>
 
      {/* ── MAIN GOLD CARD ── */}
      <div
        style={{
          backgroundColor: GOLD,
          borderRadius: "16px",
          padding: "48px 56px",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "48px",
          alignItems: "start",
          marginBottom: "24px",
        }}
      >
        {/* Left — headline + tagline */}
        <div style={{ maxWidth: "460px" }}>
          <h2
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(40px, 5vw, 64px)",
              fontWeight: 400,
              color: "#ffffff",
              lineHeight: 1.15,
              marginBottom: "28px",
            }}
          >
            Craft your story<br />with us
          </h2>
          <p
            style={{
              fontFamily: SANS,
              fontSize: "14px",
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.6,
              maxWidth: "380px",
            }}
          >
            Connect with CHITHU VIBES for bespoke laser engraving and Tamil calligraphy
          </p>
        </div>
 
        {/* Right — nav columns + social */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "40px" }}>
 
          {/* Nav links */}
          <div style={{ display: "flex", gap: "80px" }}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "20px" }}>
              {col1.map(({ label, id, action }) => (
                <li key={label}>
                  <button onClick={action ?? (() => scrollTo(id))} style={linkStyle}>{label}</button>
                </li>
              ))}
            </ul>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "20px" }}>
              {col2.map(({ label, id, action }) => (
                <li key={label}>
                  <button onClick={action ?? (() => scrollTo(id))} style={linkStyle}>{label}</button>
                </li>
              ))}
            </ul>
          </div>
 
          {/* Social icons */}
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            {[
              { icon: <FacebookIcon />, href: "#" },
              { icon: <InstagramIcon />, href: "#" },
              { icon: <XIcon />, href: "#" },
              { icon: <LinkedInIcon />, href: "#" },
              { icon: <YouTubeIcon />, href: "#" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.9 }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
 
      {/* ── BOTTOM BAR ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 8px 0",
        }}
      >
        <p style={{ fontFamily: SANS, fontSize: "13px", color: "#333", margin: 0 }}>
          © 2026 CHITHU VIBES. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: "24px" }}>
          {["Privacy policy", "Terms of service", "Cookie settings"].map((t) => (
            <button
              key={t}
              style={{
                background: "none",
                border: "none",
                fontFamily: SANS,
                fontSize: "13px",
                color: GOLD,
                cursor: "pointer",
                padding: 0,
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
 
    </footer>
  );
}