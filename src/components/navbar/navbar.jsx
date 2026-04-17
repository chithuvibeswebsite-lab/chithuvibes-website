import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../../context/cart.context";
import { ShoppingCart } from "lucide-react";

const navLinks = [
  { label: "OUR STORY",            path: "/about" },
  { label: "CALLIGRAPHY PRODUCTS", path: "/calligraphy-products" },
  { label: "GIFT PRODUCTS",        path: "/gift-products" },
  { label: "CONTACT",              path: "/contact" },
];

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
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMenuOpen(false), [location]);

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Jost:wght@300;400;500;600&display=swap');

        .nav-mobile-drawer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, opacity 0.3s ease;
          opacity: 0;
        }
        .nav-mobile-drawer.open {
          max-height: 400px;
          opacity: 1;
        }
      `}</style>

      <nav className="fixed top-0 left-0 right-0 z-[1000] bg-white border-b border-cv-border h-16">
        <div className="w-full h-full px-cv-lg lg:px-cv-3xl flex items-center justify-between box-border">

          {/* Logo */}
          <button
            onClick={() => navigate("/")}
            className="bg-transparent border-none cursor-pointer p-0 font-cv-serif text-cv-gold italic font-cv-semibold"
            style={{ fontSize: "22px", letterSpacing: "0.01em" }}
          >
            Chithu Vibes
          </button>

          {/* Desktop nav links — centered */}
          <ul
            className="hidden md:flex list-none m-0 p-0 items-center gap-cv-2xl lg:gap-cv-3xl absolute left-1/2"
            style={{ transform: "translateX(-50%)" }}
          >
            {navLinks.map(({ label, path }) => {
              const active = isActive(path);
              return (
                <li key={label} className="relative">
                  <button
                    onClick={() => navigate(path)}
                    className={`bg-transparent border-none cursor-pointer py-cv-xs px-0 relative font-cv-sans font-cv-medium uppercase tracking-cv-wide transition duration-cv-base hover:text-cv-gold ${active ? "text-cv-gold" : "text-cv-purple"}`}
                    style={{ fontSize: "clamp(9px, 1vw,12px)" }}  
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

          {/* Right — cart + hamburger */}
          <div className="flex items-center gap-cv-md">

            {/* Cart */}
            <button
              onClick={() => navigate("/cart")}
              className="bg-transparent border-none cursor-pointer flex items-center p-0 text-cv-purple relative transition"
              style={{ transitionDuration: "var(--duration-cv-base)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-cv-gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-cv-purple)")}
              aria-label="View cart"
            >
              <ShoppingCart size={22} color="currentColor" />
              {totalItems > 0 && (
                <span
                  className="absolute bg-cv-gold text-white font-cv-sans font-cv-semibold rounded-cv-full flex items-center justify-center"
                  style={{
                    fontSize: "9px",
                    width: "16px",
                    height: "16px",
                    top: "-6px",
                    right: "-6px",
                    pointerEvents: "none",
                  }}
                >
                  {totalItems > 9 ? "9+" : totalItems}
                </span>
              )}
            </button>

            {/* Hamburger */}
            <button
              className="md:hidden bg-transparent border-none cursor-pointer flex items-center p-0 text-cv-purple"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile drawer — animated */}
        <div className={`md:hidden bg-white border-t border-cv-border nav-mobile-drawer ${menuOpen ? "open" : ""}`}>
          <div className="px-cv-lg py-cv-md flex flex-col gap-cv-sm">
            {navLinks.map(({ label, path }) => {
              const active = isActive(path);
              return (
                <button
                  key={label}
                  onClick={() => { navigate(path); setMenuOpen(false); }}
                  className={`bg-transparent border-none cursor-pointer text-left py-cv-sm font-cv-sans text-cv-xs font-cv-medium uppercase tracking-cv-wide transition duration-cv-base hover:text-cv-gold ${active ? "text-cv-gold" : "text-cv-purple"}`}
                  style={{
                    borderLeft: active ? "2px solid var(--color-cv-gold)" : "2px solid transparent",
                    paddingLeft: "12px",
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}