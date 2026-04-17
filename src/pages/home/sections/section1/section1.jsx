export default function Section1() {
  return (
    <section
      className="flex flex-col px-6 sm:px-10 md:px-20 w-full pt-10 sm:pt-12 md:pt-16 items-center min-h-screen box-border"
      style={{ backgroundColor: "#F0EEF5" }}
    >
      <div
        className="w-full px-0 sm:px-cv-lg py-cv-xl md:px-cv-4xl md:py-cv-3xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-cv-3xl items-center box-border"
      >

        {/* LEFT */}
        <div className="flex flex-col items-start">
          <p
            className="mb-4 md:mb-cv-xl text-sm sm:text-base md:text-xl uppercase text-cv-label tracking-cv-wider font-cv-sans text-cv-purple"
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
            className="m-0 mb-3 md:mb-4 leading-cv-tight tracking-cv-tight font-cv-serif font-cv-semibold text-cv-purple"
            style={{ fontSize: "clamp(28px, 7vw, 90px)" }} // smaller on mobile
          >
            The Soul of<br />Tamil Calligraphy.
          </h1>

          <h2
            className="m-0 mb-4 md:mb-cv-xl leading-cv-snug font-cv-serif font-cv-bold text-cv-gold"
            style={{ fontSize: "clamp(20px, 6vw, 70px)" }}
          >
            ழகரம் பேசும்<br />எழுத்தின் கலை.
          </h2>

          <p
            className="mb-6 md:mb-cv-2xl text-sm sm:text-base md:text-cv-md leading-[1.7] md:leading-[1.85] font-cv-sans font-cv-light mt-2 md:mt-3"
            style={{ color: "#555555", maxWidth: "100%" }} // full width on mobile
          >
            Where ancient script meets avant-garde technology. We immortalize the fluid beauty of Tamil letters into timeless materials with microscopic accuracy.
          </p>

          <button
            className="border-none cursor-pointer text-xs sm:text-sm md:text-cv-sm font-cv-semibold tracking-cv-wider uppercase px-6 sm:px-cv-2xl py-3 md:py-cv-md font-cv-sans"
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

        {/* RIGHT */}
        <div className="relative h-[260px] sm:h-[320px] md:h-full w-full">
          <div
            className="rounded-cv-md h-full w-full flex items-center justify-center z-cv-base"
            style={{ backgroundColor: "#D8D8D8" }}
          >
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#BBBBBB" strokeWidth="1">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>

          <div
            className="absolute bottom-3 left-3 md:bottom-cv-xs md:left-cv-sm md:-left-cv-lg bg-white rounded-cv-xs p-3 md:p-cv-lg z-cv-raised shadow-cv-lg max-w-[200px] md:max-w-[255px]"
          >
            <p className="m-0 text-xs sm:text-sm md:text-cv-base italic leading-[1.6] md:leading-[1.65] font-cv-serif text-cv-purple">
              "A celebration of my roots, etched for eternity."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}