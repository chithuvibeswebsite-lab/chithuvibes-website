export default function AuthenticitySection() {
  return (
    <section className="bg-white box-border px-cv-lg py-cv-3xl md:px-cv-4xl md:py-cv-section">
      <div className="mx-auto text-center" style={{ maxWidth: "860px" }}>

        
        <div className="flex justify-center mb-cv-xl">
          <svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="18" y1="4" x2="6" y2="38" stroke="var(--color-cv-gold)" strokeWidth="2" strokeLinecap="round" />
            <line x1="18" y1="4" x2="30" y2="38" stroke="var(--color-cv-gold)" strokeWidth="2" strokeLinecap="round" />
            <line x1="10" y1="22" x2="26" y2="22" stroke="var(--color-cv-gold)" strokeWidth="2" strokeLinecap="round" />
            <circle cx="18" cy="4" r="2.5" fill="var(--color-cv-gold)" />
          </svg>
        </div>

        
        <h2
          className="italic font-cv-regular leading-cv-snug mb-cv-2xl font-cv-serif text-cv-purple"
          style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
        >
          The Edge of Authenticity
        </h2>

        
        <p
          className="text-cv-base leading-[1.85] mx-auto mb-cv-3xl md:mb-cv-3xl w-full font-cv-sans"
          style={{ color: "#555555", maxWidth: "700px" }}
        >
          Unlike generic fonts, our designs are based on hand-drawn calligraphy by Tamil masters. We then vectorize these unique strokes to maintain the "human touch" even after the laser has done its work.
        </p>

       
        <div
          className="grid grid-cols-3 gap-cv-lg md:gap-cv-xl mx-auto"
          style={{ maxWidth: "600px" }}
        >
          {[
            { value: "100%",   label: "Original Script" },
            { value: "0.01mm", label: "Laser Accuracy"  },
            { value: "Global", label: "Shipping"         },
          ].map((s) => (
            <div key={s.label}>
              <p
                className="font-cv-light leading-none mb-cv-sm font-cv-sans text-cv-gold"
                style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
              >
                {s.value}
              </p>
              <p className="text-cv-label tracking-cv-wider uppercase font-cv-sans text-cv-muted">
                {s.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}