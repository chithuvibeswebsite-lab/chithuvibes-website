export default function Section1() {
  return (
    <section
      className="flex items-center min-h-screen box-border"
      style={{ backgroundColor: "#F0EEF5" }}
    >
      <div
        className="w-full mx-auto px-cv-lg py-cv-xl md:px-cv-4xl md:py-cv-3xl grid grid-cols-1 md:grid-cols-2 gap-cv-3xl items-center box-border"
        style={{ maxWidth: "1200px" }}
      >

       
        <div className="flex flex-col items-start">
          <p
            className="mb-cv-xl uppercase text-cv-label tracking-cv-wider font-cv-sans text-cv-purple"
            style={{
              textDecoration: "underline",
              textDecorationStyle: "wavy",
              textDecorationColor: "var(--color-cv-purple)",
              textUnderlineOffset: "5px",
            }}
          >
            Heritage &amp; Technology
          </p>

          <h1
  className="m-0 mb-4 leading-cv-tight tracking-cv-tight font-cv-serif font-cv-semibold text-cv-purple"
  style={{ fontSize: "clamp(40px, 6vw, 76px)" }}
>
  The Soul of<br />Tamil Calligraphy.
</h1>

<h2
  className="m-0 mb-cv-xl leading-cv-snug font-cv-serif font-cv-bold text-cv-gold"
  style={{ fontSize: "clamp(28px, 4vw, 50px)" }}
>
  ழகரம் பேசும்<br />எழுத்தின் கலை.
</h2>
          <p
            className="mb-cv-2xl text-cv-sm leading-[1.85] font-cv-sans font-cv-light"
            style={{ color: "#555555", maxWidth: "380px" }}
          >
            Where ancient script meets avant-garde technology. We immortalize the fluid beauty of Tamil letters into timeless materials with microscopic accuracy.
          </p>

          <button
            className="border-none cursor-pointer text-cv-label font-cv-semibold tracking-cv-wider uppercase px-cv-2xl py-cv-md font-cv-sans"
            style={{
              background: "linear-gradient(to right, #f5e6a5, #D4AF37, #D4AF37)",
              color: "var(--color-cv-black)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              transition: "all var(--duration-cv-base) ease",
            }}
          >
            Explore Collection
          </button>
        </div>

        
        <div className="relative pb-cv-3xl">
          <div
            className="rounded-cv-md h-[300px] md:h-[500px] w-full flex items-center justify-center z-cv-base"
            style={{ backgroundColor: "#D8D8D8" }}
          >
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#BBBBBB" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>

          <div
            className="absolute bottom-cv-xs left-cv-sm md:-left-cv-lg bg-white rounded-cv-xs p-cv-lg z-cv-raised shadow-cv-lg"
            style={{ maxWidth: "255px" }}
          >
            <p className="m-0 text-cv-base italic leading-[1.65] font-cv-serif text-cv-purple">
              "A celebration of my roots, etched for eternity."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}