export default function HeritageSection() {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 min-h-[520px]"
      style={{ backgroundColor: "#DCDCDC" }}
    >
      
      <div
        className="flex items-center justify-center min-h-[300px] md:min-h-[520px]"
        style={{ backgroundColor: "#CCCCCC" }}
      >
        <svg
          width="100"
          height="100"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#AAAAAA"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      </div>

      <div
        className="flex items-center box-border px-cv-lg py-cv-3xl md:px-cv-4xl md:py-cv-4xl"
        style={{ backgroundColor: "#EDEAF2" }}
      >
        <div className="w-full">

          
          <div className="inline-block mb-cv-xl px-cv-md py-cv-xs bg-cv-purple">
            <span className="text-cv-label tracking-cv-wider uppercase text-white font-cv-sans">
              The Heritage
            </span>
          </div>

        
          <h2
            className="italic font-cv-regular leading-cv-snug mb-cv-3xl font-cv-serif text-cv-purple"
            style={{ fontSize: "clamp(36px, 6vw, 70px)" }}
          >
            Evolving the<br />Eternal Script
          </h2>

       
          <p
            className="text-cv-md leading-[1.85] mb-cv-xl w-full md:max-w-[480px] font-cv-sans"
            style={{ color: "#444444" }}
          >
            Chithu Vibes was born from a singular vision: to ensure that the exquisite flow of Tamil calligraphy survives the digital age by carving it into the physical world.
          </p>

        
          <p
            className="text-cv-md leading-[1.85] mb-cv-3xl w-full md:max-w-[480px] font-cv-sans"
            style={{ color: "#444444" }}
          >
            Our process combines the meditative patience of a traditional scribe with the uncompromising power of industrial lasers. Every piece is a dialogue between the old and the new.
          </p>

          
          <button
            className="bg-transparent border-none text-cv-xs font-cv-bold tracking-cv-wider uppercase pb-cv-xs cursor-pointer font-cv-sans text-cv-gold"
            style={{ borderBottom: "2px solid var(--color-cv-gold)" }}
          >
            Learn Our Process
          </button>

        </div>
      </div>
    </section>
  );
}