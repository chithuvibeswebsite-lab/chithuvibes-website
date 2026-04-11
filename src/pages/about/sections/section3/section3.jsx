export default function SpotlightSection() {
  const cornerWidths = [92, 74, 56, 38, 22];

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-cv-lg py-cv-3xl bg-cv-soft font-cv-sans">

      {/* Card */}
      <div className="relative w-full max-w-[820px] overflow-hidden rounded-cv-xl px-cv-lg pt-cv-3xl pb-cv-xl md:px-cv-4xl md:pt-cv-4xl md:pb-cv-3xl bg-white shadow-cv-sm">

        {/* Corner diagonal lines */}
        <div className="absolute top-cv-lg right-cv-lg opacity-cv-subtle pointer-events-none">
          {cornerWidths.map((w, i) => (
            <div
              key={i}
              className="h-cv-pxsm rounded-cv-xs mb-cv-sm origin-right"
              style={{
                width: `${w}px`,
                backgroundColor: "#b0a8b8",
                transform: `rotate(-45deg) translateX(${i * 12}px)`,
              }}
            />
          ))}
        </div>

        {/* Eyebrow */}
        <p className="text-center uppercase tracking-cv-wider mb-cv-xl text-cv-label font-cv-medium font-cv-sans text-cv-gold">
          Spotlight Block
        </p>

        {/* Title */}
        <h2
          className="text-center italic font-cv-serif font-cv-regular text-cv-plum leading-cv-tight tracking-cv-tight mb-cv-xl md:mb-cv-2xl"
          style={{ fontSize: "clamp(34px, 5vw, 62px)" }}
        >
          A Legacy of Lines
        </h2>

        {/* Body text */}
        <p className="text-center mx-auto font-cv-sans text-cv-xs font-cv-regular leading-[1.82] max-w-[580px] mb-cv-2xl text-cv-mauve">
          Our studio stands at the intersection of roots and radiance. Drawing from deep Tamil
          artistic heartbeats, every stroke is informed by a lifetime of devotion to the curve of
          the alphabet and the logic of the layout.
        </p>

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-cv-sm md:gap-cv-md">
          {["Heritage-First", "Mastery Since 2023"].map((label) => (
            <span
              key={label}
              className="uppercase tracking-cv-wider border border-cv-gold rounded-cv-full px-cv-lg py-cv-sm md:px-cv-xl md:py-cv-sm text-cv-label font-cv-semibold font-cv-sans text-cv-gold"
            >
              {label}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}