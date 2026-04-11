export default function AboutHero() {
  return (
    <section className="min-h-screen bg-cv-white flex flex-col items-center justify-center text-center px-cv-lg py-cv-3xl md:px-cv-xl md:py-cv-4xl">

      {/* Label */}
      <p className="text-cv-label tracking-cv-widest text-cv-gold uppercase mb-cv-xl font-cv-medium font-cv-sans">
        A Master's Legacy
      </p>

      {/* H1 — italic purple */}
      <h1
        className="leading-cv-tight text-cv-purple mb-cv-pxsm font-cv-serif italic font-cv-regular"
        style={{ fontSize: "clamp(44px, 8vw, 90px)" }}
      >
        The Soul of Tamil<br />Calligraphy.
      </h1>

      {/* H2 — gold */}
      <h2
        className="leading-cv-tight text-cv-gold mb-cv-xl font-cv-serif font-cv-semibold"
        style={{ fontSize: "clamp(44px, 8vw, 90px)" }}
      >
        The Precision of the Laser.
      </h2>

      {/* Divider line */}
      <div className="w-16 h-cv-px bg-cv-gold mb-cv-xl" />

      {/* Subtext */}
      <p className="text-cv-sm text-cv-muted leading-cv-normal max-w-xs sm:max-w-sm text-center mb-cv-lg font-cv-sans font-cv-light">
        Where ancient scripts meet modern radiance. Founded in 2023, Chithu Vibes is the convergence of scholarly heritage and laser engineering.
      </p>

      {/* Down arrow */}
      <span className="text-cv-gold text-cv-md">&#8964;</span>

    </section>
  );
}