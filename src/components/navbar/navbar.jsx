import { useState } from "react";

const GOLD = "#C9A84C";
const DARK = "#2D2152";
const SERIF = "'Cormorant Garamond', serif";
const SANS = "'Jost', sans-serif";

const navLinks = [
  { label: "OUR STORY", id: "hero" },
  { label: "GALLERY", id: "gallery" },
  { label: "SERVICES", id: "services" },
  { label: "WORKSHOPS", id: "workshops" },
  { label: "CONTACT", id: "contact" },
];

const CartIcon = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("OUR STORY");

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Jost:wght@300;400;500;600&display=swap');
      `}</style>

      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e8e8e8",
          height: "64px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            padding: "0 48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxSizing: "border-box",
          }}
        >
          {/* Logo — far left */}
          <button
            onClick={() => scrollTo("hero")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              fontFamily: SERIF,
              fontSize: "22px",
              fontWeight: 600,
              fontStyle: "italic",
              color: GOLD,
              letterSpacing: "0.01em",
            }}
          >
            Chithu Vibes
          </button>

          {/* Nav Links — center */}
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              alignItems: "center",
              gap: "40px",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            {navLinks.map(({ label, id }) => {
              const isActive = activeLink === label;
              return (
                <li key={label} style={{ position: "relative" }}>
                  <button
                    onClick={() => { setActiveLink(label); scrollTo(id); }}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "4px 0",
                      fontFamily: SANS,
                      fontSize: "11px",
                      fontWeight: 500,
                      letterSpacing: "0.12em",
                      color: isActive ? GOLD : DARK,
                      textTransform: "uppercase",
                      position: "relative",
                    }}
                  >
                    {label}
                    {isActive && (
                      <span
                        style={{
                          position: "absolute",
                          bottom: "-2px",
                          left: 0,
                          right: 0,
                          height: "2px",
                          backgroundColor: GOLD,
                          borderRadius: "1px",
                        }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Cart — far right */}
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: DARK,
              display: "flex",
              alignItems: "center",
              padding: 0,
            }}
          >
            <CartIcon />
          </button>
        </div>
      </nav>
    </>
  );
}