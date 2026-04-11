import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  { label: "OUR STORY",  path: "/about" },
  { label: "GALLERY",    path: "/gallery" },
  { label: "SERVICES",   path: "/services" },
  { label: "WORKSHOPS",  path: "/workshops" },
  { label: "CONTACT",    path: "/contact" },
];

const CartIcon = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

const MenuIcon = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Jost:wght@300;400;500;600&display=swap');
      `}</style>

      <nav className="fixed top-0 left-0 right-0 z-cv-top bg-white border-b border-cv-border h-16">
        <div className="w-full h-full px-cv-lg md:px-cv-3xl flex items-center justify-between box-border">

          {/* Logo */}
          <button
            onClick={() => navigate("/")}
            className="bg-transparent border-none cursor-pointer p-0 font-cv-serif text-cv-gold italic font-cv-semibold"
            style={{ fontSize: "22px", letterSpacing: "0.01em" }}
          >
            Chithu Vibes
          </button>

          {/* Desktop Nav Links */}
          <ul
            className="hidden md:flex list-none m-0 p-0 items-center gap-cv-3xl absolute left-1/2"
            style={{ transform: "translateX(-50%)" }}
          >
            {navLinks.map(({ label, path }) => {
              const active = isActive(path);
              return (
                <li key={label} className="relative">
                  <button
                    onClick={() => navigate(path)}
                    className={`bg-transparent border-none cursor-pointer py-cv-xs px-0 relative font-cv-sans text-cv-label font-cv-medium uppercase tracking-cv-wide ${active ? "text-cv-gold" : "text-cv-purple"}`}
                  >
                    {label}
                    <span
                      className="absolute left-0 h-cv-pxsm bg-cv-gold"
                      style={{
                        bottom: "-2px",
                        width: active ? "100%" : "0%",
                        transition: "width 0.3s ease",
                      }}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right: Cart + Hamburger */}
          <div className="flex items-center gap-cv-md">
            <button className="bg-transparent border-none cursor-pointer flex items-center p-0 text-cv-purple">
              <CartIcon />
            </button>

            <button
              className="md:hidden bg-transparent border-none cursor-pointer flex items-center p-0 text-cv-purple"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-cv-border px-cv-lg py-cv-md flex flex-col gap-cv-md">
            {navLinks.map(({ label, path }) => {
              const active = isActive(path);
              return (
                <button
                  key={label}
                  onClick={() => { navigate(path); setMenuOpen(false); }}
                  className={`bg-transparent border-none cursor-pointer text-left py-cv-xs font-cv-sans text-cv-xs font-cv-medium uppercase tracking-cv-wide ${active ? "text-cv-gold" : "text-cv-purple"}`}
                  style={{
                    borderLeft: active ? "3px solid var(--color-cv-gold)" : "3px solid transparent",
                    paddingLeft: "10px",
                    transition: "color 0.2s ease",
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>
        )}
      </nav>
    </>
  );
}