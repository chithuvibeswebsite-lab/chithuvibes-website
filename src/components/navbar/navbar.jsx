import { useState } from "react";
 
const GOLD = "#C9A84C";
const DARK = "#2D2152";
const SERIF = "'Cormorant Garamond', serif";
const SANS = "'Jost', sans-serif";
 
const navLinks = [
  { label: "OUR STORY", id: "hero", active: true },
  { label: "GALLERY", id: "gallery" },
  { label: "SERVICES", id: "services" },
  { label: "WORKSHOPS", id: "workshops" },
  { label: "CONTACT", id: "contact" },
];
 
const CartIcon = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 10a4 4 0 01-8 0" />
  </svg>
);
 
export default function Navbar() {
  const [activeLink, setActiveLink] = useState("OUR STORY");
 
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
 
  return (
    <>
      {/* Google Fonts */}
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
            maxWidth: "1320px",
            margin: "0 auto",
            padding: "0 40px",
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
          }}
        >
          {/* Logo — left */}
          <div>
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
          </div>
 
          {/* Nav Links — center */}
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              alignItems: "center",
              gap: "40px",
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
                    {/* Active underline */}
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
 
          {/* Cart Icon — right */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
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
        </div>
      </nav>
    </>
  );
}