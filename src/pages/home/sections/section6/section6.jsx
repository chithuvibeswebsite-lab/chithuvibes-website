// OrderSection.jsx
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "The precision of the laser married with the soul of our script—it felt like watching centuries speak in the present moment.",
    name: "Priya Krishnan",
    title: "Collector, Chennai",
  },
  {
    quote: "What arrived was not merely an engraving. It was a conversation between my heritage and my home, rendered in wood and light.",
    name: "Arjun Iyer",
    title: "Architect, Bangalore",
  },
  {
    quote: "Every curve, every stroke — it felt like the letters had always lived in that wood, waiting to be revealed.",
    name: "Meena Sundaram",
    title: "Interior Designer, Coimbatore",
  },
  {
    quote: "I gifted this to my father for his 60th birthday. He wept. That says everything.",
    name: "Karthik Rajan",
    title: "Entrepreneur, Mumbai",
  },
];

export default function OrderSection() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);

  // Auto-rotate every 4 seconds with fade
  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
        setVisible(true);
      }, 400);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleDot = (i) => {
    setVisible(false);
    setTimeout(() => {
      setActive(i);
      setVisible(true);
    }, 400);
  };

  const left = testimonials[active % testimonials.length];
  const right = testimonials[(active + 1) % testimonials.length];

  return (
    <section style={{ backgroundColor: "#ffffff", padding: "96px 72px", boxSizing: "border-box" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "56px", fontWeight: 400, color: "#3D3566", textAlign: "center", marginBottom: "16px", lineHeight: 1.1 }}>
          Order directly with us
        </h2>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "15px", color: "#AAAAAA", textAlign: "center", marginBottom: "72px" }}>
          Discuss your vision and place your order through WhatsApp.
        </p>

        {/* Two testimonials with fade */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            marginBottom: "56px",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        >
          {[left, right].map((t, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", color: "#333333", lineHeight: 1.75, marginBottom: "36px" }}>
                "{t.quote}"
              </p>
              <div style={{ width: "56px", height: "56px", borderRadius: "50%", backgroundColor: "#CCCCCC", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#999999" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "13px", fontWeight: 600, color: "#3D3566", marginBottom: "4px", letterSpacing: "0.03em" }}>
                {t.name}
              </p>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "13px", color: "#999999" }}>
                {t.title}
              </p>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDot(i)}
              style={{
                width: i === active ? "28px" : "10px",
                height: "10px",
                borderRadius: "5px",
                backgroundColor: i === active ? "#3D3566" : "#CCCCCC",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}