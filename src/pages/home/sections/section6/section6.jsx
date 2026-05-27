import { useState, useEffect } from "react";
import { useCart } from "../../../../context/cart.context";



export default function OrderSection({content}) {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);
  const { testimonials } = useCart();

  function getInitials(name) {
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
    return name.slice(0, 2).toUpperCase();
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setActive((prev) => (prev + 2) % testimonials.length);
        setVisible(true);
      }, 400);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleDot = (i) => {
    setVisible(false);
    setTimeout(() => {
      setActive(i);
      setVisible(true);
    }, 400);
  };

  const cleanTestimonials =   testimonials?.filter((item) => item && item.person_testimonial)


  const left  = cleanTestimonials[active % testimonials.length];
  const right = cleanTestimonials[(active + 1) % testimonials.length];

  if (!left || !right) return null;

  return (
    <section className="bg-white box-border px-cv-lg py-cv-3xl md:px-cv-4xl md:py-cv-5xl">
      <div className="w-full mx-auto" style={{ maxWidth: "1200px" }}>
        <h2
          className="font-cv-regular text-center leading-cv-tight mb-cv-md font-cv-serif text-cv-gold"
          style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
        >
          {content.title[0]}
        </h2>

        <p className="text-cv-sm text-center mb-cv-3xl font-cv-sans text-cv-muted">
          {content.title[1]}
        </p>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-cv-3xl mb-cv-3xl"
          style={{ opacity: visible ? 1 : 0, transition: `opacity var(--duration-cv-slow) ease` }}
        >
          {[left, right].map((t, i) => (
            <div key={i} className="flex flex-col text-center">
              
              <div className="flex-1 mb-cv-2xl">
                <p
                  className="leading-[1.75] font-cv-serif"
                  style={{ fontSize: "clamp(17px, 2vw, 22px)", color: "#333333" }}
                >
                  "{t.person_testimonial}"
                </p>
              </div>

              
              <div className="flex flex-col items-center gap-cv-sm">
                <div
                  className="w-12 h-12 rounded-cv-full flex items-center justify-center"
                  style={{ backgroundColor: "#EEEDFE" }}
                >
                  <span
                    className="font-cv-sans font-cv-semibold text-cv-purple"
                    style={{ fontSize: "15px" }}
                  >
                    {getInitials(t.person_name)}
                  </span>
                </div>

                <p className="text-cv-sm mt-3 font-cv-semibold tracking-cv-normal font-cv-sans text-cv-purple">
                  {t.person_name}
                </p>

                <p className="text-cv-sm font-cv-sans text-cv-muted">
                  {t.person_designation}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-cv-sm">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDot(i)}
              aria-label={`View testimonial ${i + 1} of ${testimonials.length}`}
              aria-current={i === active}
              className="border-none cursor-pointer p-0 h-3 rounded-cv-full"
              style={{
                width: i === active ? "32px" : "12px",
                backgroundColor: i === active ? "var(--color-cv-purple)" : "#CCCCCC",
                transition: `all var(--duration-cv-base) ease`,
                minHeight: "24px",
                padding: "6px"
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}