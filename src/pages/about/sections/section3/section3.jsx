import { PenTool } from "lucide-react";

export default function SpotlightSection({ content }) {
  return (
    <div className="w-full lg:h-screen flex items-center justify-center px-4 sm:px-cv-lg py-12 sm:py-cv-3xl bg-cv-soft font-cv-sans">

      <div className="relative w-full sm:w-[90%] md:w-[80%] h-auto md:h-[70%] overflow-hidden rounded-cv-xl px-5 sm:px-cv-lg md:px-cv-4xl pt-10 sm:pt-cv-3xl md:pt-cv-4xl pb-8 sm:pb-cv-xl md:pb-cv-3xl bg-white shadow-cv-sm flex flex-col items-center justify-center">

        <div className="absolute -top-[10px] -right-[10px] md:-top-[20px] md:-right-[20px] opacity-20 md:opacity-30 pointer-events-none">
          <PenTool
            className="w-80 h-80 lg:w-[120px] lg:h-[120px] sm:w-[160px] sm:h-[160px] rotate-[-100deg] text-[#b0a8b8]"
            strokeWidth={1.2}
          />
        </div>

        <p className="text-center uppercase tracking-cv-wider mb-4 sm:mb-cv-xl text-xs sm:text-sm md:text-cv-md font-cv-medium font-cv-sans text-cv-gold">
          {content.label}
        </p>

        <h2
          className="text-center italic font-cv-serif font-cv-regular text-cv-plum leading-cv-tight tracking-cv-tight mb-4 sm:mb-cv-xl md:mb-cv-2xl"
          style={{ fontSize: "clamp(26px, 6vw, 75px)" }}
        >
          {content.title}
        </h2>

        <p className="text-center mx-auto font-cv-sans text-sm sm:text-base md:text-cv-lg font-cv-regular leading-[1.7] md:leading-[1.82] max-w-full sm:max-w-[600px] mb-6 sm:mb-cv-2xl text-cv-mauve">
          {content.description}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-cv-sm md:gap-cv-md">
          {content.tags.map((label) => (
            <span
              key={label}
              className="uppercase tracking-cv-wider border border-cv-gold rounded-full px-4 sm:px-cv-lg md:px-cv-xl py-1.5 sm:py-cv-sm text-xs sm:text-sm md:text-cv-sm font-cv-semibold font-cv-sans text-cv-gold"
            >
              {label}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}