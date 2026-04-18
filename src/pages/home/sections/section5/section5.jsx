export default function FounderSection({content}) {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 min-h-[520px]"
      style={{ backgroundColor: "#EDEAF2" }}
    >
      
      <div className="flex items-stretch px-cv-lg py-cv-xl lg:pl-cv-3xl md:pr-cv-xl md:py-cv-xl">
        <div
          className="rounded-cv-md w-full flex items-center justify-center min-h-[280px] md:min-h-0"
          style={{ backgroundColor: "#D5D5D5" }}
        >
          <svg
            width="90"
            height="90"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#BBBBBB"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </div>
      </div>

      
      <div className="flex items-center box-border px-cv-lg py-cv-3xl md:pl-cv-2xl md:pr-cv-4xl md:py-cv-4xl">
        <div className="w-full">

          
          <div className="w-14 h-cv-pxsm mb-cv-xl bg-cv-gold" />

      
          <h2
            className="font-cv-regular leading-cv-snug mb-cv-xl font-cv-serif text-cv-purple"
            style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
          >
            {content.title}
          </h2>

         
          <p
            className="italic leading-[1.75] mb-cv-xl font-cv-serif text-cv-purple w-full"
            style={{
              fontSize: "clamp(17px, 2vw, 22px)",
              maxWidth: "520px",
            }}
          >
            {content.description}
          </p>

          
          <p className="text-cv-xs font-cv-bold tracking-cv-wider uppercase mb-cv-xs font-cv-sans text-cv-gold">
            {content.founder[0]}
          </p>

          
          <p className="text-cv-label tracking-cv-wide uppercase font-cv-sans text-cv-muted">
            {content.founder[1]} &amp; {content.founder[2]}
          </p>

        </div>
      </div>
    </section>
  );
}