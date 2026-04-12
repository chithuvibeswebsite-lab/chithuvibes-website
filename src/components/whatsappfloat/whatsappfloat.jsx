import { useState, useRef, useEffect } from "react";

const WHATSAPP_NUMBER = "919876543210"; // ← your number

const WhatsAppIcon = () => (
  <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 4C13 4 4 13 4 24c0 3.6 1 7 2.7 9.9L4 44l10.4-2.7C17.2 43 20.5 44 24 44c11 0 20-9 20-20S35 4 24 4z"
      fill="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 7.2C14.8 7.2 7.2 14.8 7.2 24c0 3.3.9 6.4 2.6 9.1l.4.6-1.6 5.8 6-.6.6.3C17.8 40.8 20.8 41.6 24 41.6c9.2 0 16.8-7.6 16.8-16.8S33.2 7.2 24 7.2z"
      fill="#25D366"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.2 15.6c-.4-.9-.8-.9-1.2-.9h-1c-.3 0-.9.1-1.4.6s-1.8 1.8-1.8 4.3 1.9 5 2.1 5.3c.3.4 3.7 5.9 9 8 1.3.5 2.3.8 3 1 1.3.4 2.5.3 3.4.2 1-.2 3.2-1.3 3.6-2.6.4-1.3.4-2.3.3-2.6-.2-.3-.5-.4-1-.7s-3.2-1.6-3.7-1.8c-.5-.2-.8-.3-1.2.3s-1.3 1.8-1.6 2.1c-.3.4-.6.4-1.1.2s-2.1-.8-4-2.5c-1.5-1.3-2.5-3-2.7-3.5-.3-.5 0-.7.2-1l.9-1.1c.2-.3.3-.5.5-.9s.1-.7 0-1l-1.3-3.4z"
      fill="#fff"
    />
  </svg>
);

export default function WhatsAppFloat() {
  const btnRef = useRef(null);
  const SIZE = 56;
  const MARGIN = 20;

  const [pos, setPos] = useState({ x: null, y: null });
  const [showTooltip, setShowTooltip] = useState(false);
  const dragging = useRef(false);
  const moved = useRef(false);
  const startMouse = useRef({ x: 0, y: 0 });
  const startPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Safe initial position — bottom-right with margin, respects small screens
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPos({
      x: window.innerWidth - SIZE - MARGIN,
      y: window.innerHeight - SIZE - MARGIN,
    });

    // Re-clamp position on resize so button never goes offscreen
    const onResize = () => {
      setPos((prev) => ({
        x: Math.min(prev.x, window.innerWidth - SIZE - MARGIN),
        y: Math.min(prev.y, window.innerHeight - SIZE - MARGIN),
      }));
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const clamp = (val, min, max) => Math.max(min, Math.min(max, val));

  const onMouseDown = (e) => {
    dragging.current = true;
    moved.current = false;
    setShowTooltip(false);
    startMouse.current = { x: e.clientX, y: e.clientY };
    startPos.current = { ...pos };
    e.preventDefault();
  };

  const onTouchStart = (e) => {
    const t = e.touches[0];
    dragging.current = true;
    moved.current = false;
    setShowTooltip(false);
    startMouse.current = { x: t.clientX, y: t.clientY };
    startPos.current = { ...pos };
    // Don't call preventDefault here — allows scroll when not dragging
  };

  useEffect(() => {
    const onMouseMove = (e) => {
      if (!dragging.current) return;
      const dx = e.clientX - startMouse.current.x;
      const dy = e.clientY - startMouse.current.y;
      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) moved.current = true;
      setPos({
        x: clamp(startPos.current.x + dx, MARGIN, window.innerWidth - SIZE - MARGIN),
        y: clamp(startPos.current.y + dy, MARGIN, window.innerHeight - SIZE - MARGIN),
      });
    };

    const onTouchMove = (e) => {
      if (!dragging.current) return;
      const t = e.touches[0];
      const dx = t.clientX - startMouse.current.x;
      const dy = t.clientY - startMouse.current.y;
      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) moved.current = true;
      e.preventDefault(); // prevent page scroll only while dragging button
      setPos({
        x: clamp(startPos.current.x + dx, MARGIN, window.innerWidth - SIZE - MARGIN),
        y: clamp(startPos.current.y + dy, MARGIN, window.innerHeight - SIZE - MARGIN),
      });
    };

    const onMouseUp = () => {
      if (!dragging.current) return;
      dragging.current = false;
      if (!moved.current) {
        window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank");
      }
    };

    const onTouchEnd = () => {
      if (!dragging.current) return;
      dragging.current = false;
      if (!moved.current) {
        window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank");
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [pos]);

  if (pos.x === null) return null;

  return (
    <div
      ref={btnRef}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      style={{
        position: "fixed",   // ← key: fixed to viewport, not page
        left: pos.x,
        top: pos.y,
        width: SIZE,
        height: SIZE,
        zIndex: 9999,
      }}
      className="rounded-full bg-[#25D366] flex items-center justify-center cursor-grab active:cursor-grabbing select-none touch-none"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon />

      {showTooltip && (
        <span
          className="absolute whitespace-nowrap bg-[#25D366] text-white text-xs font-medium px-3 py-1 rounded-full pointer-events-none"
          style={{ top: "-36px", left: "50%", transform: "translateX(-50%)" }}
        >
          Chat on WhatsApp
        </span>
      )}
    </div>
  );
}