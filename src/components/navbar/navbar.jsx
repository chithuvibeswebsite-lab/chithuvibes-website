import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../context/cart.context";
import { ShoppingCart, Menu, X } from "lucide-react";
import { NAVBAR } from "../../data/data";
import { buildCloudinaryUrl } from "../../utils/cloudinary.util";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Jost:wght@300;400;500;600&display=swap');
        .nav-mobile-drawer { max-height: 0; overflow: hidden; transition: max-height 0.3s ease, opacity 0.3s ease; opacity: 0; }
        .nav-mobile-drawer.open { max-height: 400px; opacity: 1; }
      `}</style>

      <nav className="fixed top-0 left-0 right-0 z-1000 bg-white border-b border-cv-border h-16">
        <div className="w-full h-full px-cv-lg lg:px-cv-3xl flex items-center justify-between box-border">
          {/* Logo */}
          <div className="flex items-center gap-2 lg:gap-cv-md">
            <img
              src={buildCloudinaryUrl("v1779566057/Chithuvibes_Logo_1_zleupw.png", { transformations: null })}
              alt={NAVBAR.logoAlt}
              className="h-8 w-auto cursor-pointer"
              onClick={() => navigate("/")}
            />
            <button
              onClick={() => navigate("/")}
              className="bg-transparent border-none cursor-pointer p-0 font-cv-serif text-cv-gold italic font-cv-semibold"
              style={{ fontSize: "22px", letterSpacing: "0.01em" }}
            >
              {NAVBAR.logo}
            </button>
          </div>

          {/* Nav links — centered */}
          <ul
            className="hidden md:flex list-none m-0 p-0 items-center gap-cv-2xl lg:gap-cv-3xl absolute left-1/2"
            style={{ transform: "translateX(-50%)" }}
          >
            {NAVBAR.links.map(({ label, path }) => {
              const active = isActive(path);
              return (
                <li key={label} className="relative">
                  <button
                    onClick={() => navigate(path)}
                    className={`bg-transparent border-none cursor-pointer py-cv-xs px-0 relative font-cv-sans font-cv-medium uppercase tracking-cv-wide transition duration-cv-base hover:text-cv-gold ${active ? "text-cv-gold" : "text-cv-purple"}`}
                    style={{ fontSize: "clamp(9px, 1vw, 12px)" }}
                  >
                    {label}
                    <span
                      className="absolute left-0 h-cv-pxsm bg-cv-gold"
                      style={{ bottom: "-2px", width: active ? "100%" : "0%", transition: "width 0.3s ease" }}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right side actions */}
          <div className="flex items-center gap-cv-md">
            {/* Cart button with icon + label */}
            <button
              onClick={() => navigate("/cart")}
              className="bg-transparent border-none cursor-pointer flex items-center gap-1.5 py-2 px-cv-sm text-cv-purple relative transition min-h-[44px] justify-center group"
              style={{ transitionDuration: "var(--duration-cv-base)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-cv-gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-cv-purple)")}
              aria-label={NAVBAR.cartLabel}
            >
              {/* Icon + badge wrapper */}
              <span className="relative flex items-center">
                <ShoppingCart size={20} strokeWidth={1.5} color="currentColor" />
                {totalItems > 0 && (
                  <span
                    className="absolute bg-cv-gold text-white font-cv-sans font-cv-semibold rounded-cv-full flex items-center justify-center"
                    style={{
                      fontSize: "9px",
                      width: "15px",
                      height: "15px",
                      top: "-7px",
                      right: "-7px",
                      pointerEvents: "none",
                    }}
                  >
                    {totalItems > 9 ? NAVBAR.cartMax : totalItems}
                  </span>
                )}
              </span>

              {/* "Cart" label — hidden on small screens, visible md+ */}
              <span
                className="hidden md:inline font-cv-sans font-cv-medium uppercase tracking-cv-wide"
                style={{ fontSize: "clamp(9px, 1vw, 12px)" }}
              >
                Cart
              </span>
            </button>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden bg-transparent border-none cursor-pointer flex items-center p-2 text-cv-purple min-w-[44px] min-h-[44px] justify-center"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={NAVBAR.menuLabel}
            >
              {menuOpen
                ? <X size={22} strokeWidth={1.5} color="currentColor" />
                : <Menu size={22} strokeWidth={1.5} color="currentColor" />
              }
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div className={`md:hidden bg-white border-t border-cv-border nav-mobile-drawer ${menuOpen ? "open" : ""}`}>
          <div className="px-cv-lg py-cv-md flex flex-col gap-cv-sm">
            {NAVBAR.links.map(({ label, path }) => {
              const active = isActive(path);
              return (
                <button
                  key={label}
                  onClick={() => { navigate(path); setMenuOpen(false); }}
                  className={`bg-transparent border-none cursor-pointer text-left py-3 px-cv-lg font-cv-sans text-cv-xs font-cv-medium uppercase tracking-cv-wide transition duration-cv-base hover:text-cv-gold min-h-[44px] flex items-center ${active ? "text-cv-gold" : "text-cv-purple"}`}
                  style={{ borderLeft: active ? "2px solid var(--color-cv-gold)" : "2px solid transparent", paddingLeft: "12px" }}
                >
                  {label}
                </button>
              );
            })}

            {/* Cart row in mobile drawer too */}
            <button
              onClick={() => { navigate("/cart"); setMenuOpen(false); }}
              className={`bg-transparent border-none cursor-pointer text-left py-3 font-cv-sans text-cv-xs font-cv-medium uppercase tracking-cv-wide transition duration-cv-base hover:text-cv-gold min-h-[44px] flex items-center gap-2 ${isActive("/cart") ? "text-cv-gold" : "text-cv-purple"}`}
              style={{ borderLeft: isActive("/cart") ? "2px solid var(--color-cv-gold)" : "2px solid transparent", paddingLeft: "12px" }}
            >
              <span className="relative flex items-center">
                <ShoppingCart size={16} strokeWidth={1.5} color="currentColor" />
                {totalItems > 0 && (
                  <span
                    className="absolute bg-cv-gold text-white font-cv-sans font-cv-semibold rounded-cv-full flex items-center justify-center"
                    style={{ fontSize: "8px", width: "13px", height: "13px", top: "-6px", right: "-6px", pointerEvents: "none" }}
                  >
                    {totalItems > 9 ? NAVBAR.cartMax : totalItems}
                  </span>
                )}
              </span>
              Cart
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}