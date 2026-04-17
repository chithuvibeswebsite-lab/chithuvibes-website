import { useState, useEffect } from "react";
import { openWhatsApp } from "../../utils/whatsapp.util";

const SCROLL_THRESHOLD = 0.75; 


function WhatsAppIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 3C8.82 3 3 8.82 3 16c0 2.41.66 4.67 1.8 6.61L3 29l6.55-1.77A12.93 12.93 0 0016 29c7.18 0 13-5.82 13-13S23.18 3 16 3z"
        fill="var(--color-cv-mauve)" />
      <path d="M16 5.2A10.8 10.8 0 0126.8 16 10.8 10.8 0 0116 26.8a10.74 10.74 0 01-5.5-1.51l-.39-.23-4.03 1.09 1.1-3.93-.26-.41A10.74 10.74 0 015.2 16 10.8 10.8 0 0116 5.2z"
        fill="var(--color-cv-plum)" />
      <path d="M12.37 10.27c-.22-.5-.46-.51-.67-.52l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.05 3.25 5.04 4.43 2.49.98 3 .79 3.54.74.54-.05 1.74-.71 1.99-1.4.24-.68.24-1.27.17-1.39-.07-.12-.27-.19-.57-.34-.3-.15-1.74-.86-2.01-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.14-.14.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.65-1.62-.9-2.21z"
        fill="var(--color-cv-white)" />
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 19V5M5 12l7-7 7 7"
        stroke="var(--color-cv-white)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function SmartFAB() {
  const [isScrollMode, setIsScrollMode] = useState(false);
  const [showTooltip, setShowTooltip]   = useState(false);
  const [isHovered, setIsHovered]       = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled  = window.scrollY + window.innerHeight;
      const total     = document.documentElement.scrollHeight;
      setIsScrollMode(scrolled >= total * SCROLL_THRESHOLD);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    if (isScrollMode) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      openWhatsApp("Hello Chithu Vibes! I have a question about your products.");
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        onMouseEnter={() => { setShowTooltip(true);  setIsHovered(true);  }}
        onMouseLeave={() => { setShowTooltip(false); setIsHovered(false); }}
        aria-label={isScrollMode ? "Scroll to top" : "Chat on WhatsApp"}
        style={{
          position      : "fixed",
          bottom        : "var(--spacing-cv-md)",
          right         : "var(--spacing-cv-md)",
          width         : "60px",
          height        : "60px",
          borderRadius  : "var(--radius-cv-full)",
          border        : `var(--border-cv-base) solid var(--color-cv-border)`,
          background    : isScrollMode
            ? "var(--color-cv-plum)"
            : "var(--color-cv-white)",
          boxShadow     : isHovered
            ? "var(--shadow-cv-lg)"
            : "var(--shadow-cv-md)",
          display       : "flex",
          alignItems    : "center",
          justifyContent: "center",
          cursor        : "pointer",
          zIndex        : "var(--z-cv-top)",
          transition    : [
            "background var(--duration-cv-base) ease",
            "box-shadow var(--duration-cv-base) ease",
            "transform  var(--duration-cv-base) cubic-bezier(.34,1.56,.64,1)",
            "border-color var(--duration-cv-base) ease",
          ].join(", "),
          transform     : isHovered ? "scale(1.1)" : "scale(1)",
          borderColor   : isHovered
            ? "var(--color-cv-mauve)"
            : "var(--color-cv-border)",
        }}
      >
        {/* WhatsApp icon */}
        <span style={{
          position   : "absolute",
          opacity    : isScrollMode ? 0 : 1,
          transform  : isScrollMode
            ? "rotate(-180deg) scale(0.5)"
            : "rotate(0deg) scale(1)",
          transition : "opacity var(--duration-cv-base) ease, transform var(--duration-cv-slow) cubic-bezier(.34,1.56,.64,1)",
          display    : "flex",
        }}>
          <WhatsAppIcon />
        </span>

        {/* Arrow up icon */}
        <span style={{
          position   : "absolute",
          opacity    : isScrollMode ? 1 : 0,
          transform  : isScrollMode
            ? "rotate(0deg) scale(1)"
            : "rotate(180deg) scale(0.5)",
          transition : "opacity var(--duration-cv-base) ease, transform var(--duration-cv-slow) cubic-bezier(.34,1.56,.64,1)",
          display    : "flex",
        }}>
          <ArrowUpIcon />
        </span>
      </button>

      {/* Tooltip */}
      {showTooltip && (
        <div
          style={{
            position      : "fixed",
            bottom        : "calc(var(--spacing-cv-md) + 60px)",
            right         : "var(--spacing-cv-md)",
            background    : "var(--color-cv-plum)",
            color         : "var(--color-cv-white)",
            borderRadius  : "var(--radius-cv-full)",
            fontSize      : "var(--text-cv-xs)",
            fontFamily    : "var(--font-cv-sans)",
            fontWeight    : "var(--font-weight-cv-medium)",
            letterSpacing : "var(--tracking-cv-wide)",
            padding       : "var(--spacing-cv-xs) var(--spacing-cv-md)",
            whiteSpace    : "nowrap",
            pointerEvents : "none",
            zIndex        : "var(--z-cv-top)",
            animation     : "fab-tooltip-in var(--duration-cv-fast) ease forwards",
          }}
        >
          {isScrollMode ? "Back to top" : "Chat on WhatsApp"}
        </div>
      )}

      <style>{`
        @keyframes fab-tooltip-in {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0);   }
        }
      `}</style>
    </>
  );
}