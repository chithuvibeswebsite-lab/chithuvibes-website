export default function Section1() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "340px" }}>
      {/* Background image placeholder */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundColor: "var(--color-cv-black)",
          backgroundImage: "url('/images/hero-calligraphy-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(26,26,26,0.55)" }}
      />

      {/* Content */}
      <div className="relative z-cv-raised flex flex-col items-center justify-center text-center px-cv-lg py-cv-5xl" style={{ minHeight: "340px" }}>

        {/* Badge */}
        <div
          className="mb-cv-xl px-cv-lg py-cv-xs rounded-cv-full border border-cv-gold"
          style={{ backgroundColor: "rgba(201,168,76,0.18)" }}
        >
          <p className="m-0 font-cv-sans text-cv-label font-cv-semibold tracking-cv-widest uppercase text-cv-gold">
            Premium Boutique
          </p>
        </div>

        {/* Heading */}
        <h1
          className="m-0 font-cv-serif font-cv-semibold leading-cv-snug text-white"
          style={{ fontSize: "clamp(32px, 5vw, 68px)" }}
        >
          The Collection.
        </h1>
        <h2
          className="m-0 font-cv-serif italic font-cv-regular leading-cv-snug"
          style={{ fontSize: "clamp(32px, 5vw, 68px)", color: "var(--color-cv-gold)" }}
        >
          Artistry in Every Stroke,
        </h2>
        <h2
          className="m-0 font-cv-serif italic font-cv-regular leading-cv-snug"
          style={{ fontSize: "clamp(28px, 4.5vw, 60px)", color: "var(--color-cv-gold)" }}
        >
          Precision in{" "}
          <span className="font-cv-bold" style={{ color: "var(--color-cv-gold)" }}>
            Every Laser.
          </span>
        </h2>

      </div>
    </section>
  );
}