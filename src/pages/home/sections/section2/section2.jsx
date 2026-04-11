export default function Section2() {
  const items = [
    { title: "Wooden Engravings", desc: "Sustainable teak and walnut infused with classical Tamil literature.", price: "From ₹4,500" },
    { title: "Acrylic Masterpieces", desc: "Modern luminosity meeting traditional script for contemporary spaces.", price: "From ₹3,200" },
    { title: "Metal Art", desc: "Brass and copper plates etched with surgical precision for lifelong endurance.", price: "From ₹7,800" },
  ];

  return (
    <section
      className="box-border py-cv-4xl px-cv-lg pb-cv-4xl md:px-cv-4xl md:py-cv-4xl md:pb-cv-4xl"
      style={{ backgroundColor: "#faf4f4" }}
    >
      <div className="w-full mx-auto" style={{ maxWidth: "1200px" }}>

        {/* Header */}
        <div className="flex items-start justify-between mb-cv-3xl">
          <h2
            className="m-0 leading-cv-tight italic font-cv-regular font-cv-serif text-cv-purple"
            style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
          >
            The Masterpieces
          </h2>
          <p className="mt-cv-md text-cv-label tracking-cv-wider uppercase font-cv-sans text-cv-muted">
            Curated Selection / 2024
          </p>
        </div>

        {/* Cards Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 rounded-cv-md overflow-hidden border border-cv-border"
          style={{ gap: "0px" }}
        >
          {items.map((item, index) => (
            <div
              key={item.title}
              className="bg-white flex flex-col cursor-pointer box-border p-cv-xl pb-cv-2xl border-b border-cv-border md:border-b-0"
              style={{
                borderRight: index < 2 ? "1px solid var(--color-cv-border)" : "none",
              }}
            >
              {/* Image placeholder */}
              <div
                className="rounded-cv-xl h-[220px] md:h-[320px] w-full flex items-center justify-center mb-cv-xl shrink-0"
                style={{ backgroundColor: "#DCDCDC" }}
              >
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#BBBBBB" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>

              {/* Title */}
              <h3
                className="italic font-cv-regular leading-cv-snug mb-cv-sm font-cv-serif text-cv-purple"
                style={{ fontSize: "26px" }}
              >
                {item.title}
              </h3>

              {/* Desc */}
              <p className="text-cv-xs leading-cv-relaxed mb-cv-lg grow font-cv-sans" style={{ color: "#111111" }}>
                {item.desc}
              </p>

              {/* Price + Arrow */}
              <div className="flex items-center justify-between pt-cv-lg border-t border-cv-border">
                <span className="text-cv-sm font-cv-medium font-cv-sans text-cv-gold">
                  {item.price}
                </span>
                <span className="text-cv-xl leading-none font-cv-light text-cv-gold">
                  ›
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}