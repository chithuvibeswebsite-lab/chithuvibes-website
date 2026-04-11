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

  const left  = testimonials[active % testimonials.length];
  const right = testimonials[(active + 1) % testimonials.length];

  return (
    <section className="bg-white box-border px-cv-lg py-cv-3xl md:px-cv-4xl md:py-cv-5xl">
      <div className="w-full mx-auto" style={{ maxWidth: "1200px" }}>

        {/* Heading */}
        <h2
          className="font-cv-regular text-center leading-cv-tight mb-cv-md font-cv-serif text-cv-purple"
          style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
        >
          Order directly with us
        </h2>

        {/* Sub heading */}
        <p className="text-cv-sm text-center mb-cv-3xl md:mb-cv-3xl font-cv-sans text-cv-muted">
          Discuss your vision and place your order through WhatsApp.
        </p>

        {/* Testimonials */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-cv-3xl md:gap-cv-3xl mb-cv-3xl"
          style={{ opacity: visible ? 1 : 0, transition: `opacity var(--duration-cv-slow) ease` }}
        >
          {[left, right].map((t, i) => (
            <div key={i} className="text-center">
              <p
                className="leading-[1.75] mb-cv-2xl font-cv-serif"
                style={{
                  fontSize: "clamp(17px, 2vw, 22px)",
                  color: "#333333",
                }}
              >
                "{t.quote}"
              </p>

              {/* Avatar */}
              <div
                className="w-14 h-14 rounded-cv-full flex items-center justify-center mx-auto mb-cv-md"
                style={{ backgroundColor: "#CCCCCC" }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#999999" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>

              {/* Name */}
              <p className="text-cv-xs font-cv-semibold tracking-cv-normal mb-cv-xs font-cv-sans text-cv-purple">
                {t.name}
              </p>

              {/* Title */}
              <p className="text-cv-xs font-cv-sans text-cv-muted">
                {t.title}
              </p>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-cv-sm">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDot(i)}
              className="border-none cursor-pointer p-0 h-cv-sm rounded-cv-full"
              style={{
                width: i === active ? "28px" : "10px",
                backgroundColor: i === active ? "var(--color-cv-purple)" : "#CCCCCC",
                transition: `all var(--duration-cv-base) ease`,
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}