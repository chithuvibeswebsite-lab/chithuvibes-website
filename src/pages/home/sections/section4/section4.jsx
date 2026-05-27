import { WifiPen } from 'lucide-react';


export default function AuthenticitySection({content}) {
  return (
    <section className="bg-white box-border px-cv-lg py-cv-3xl md:px-cv-4xl md:py-cv-section">
      <div className="mx-auto text-center" style={{ maxWidth: "860px" }}>

        
        <div className="flex justify-center mb-cv-xl">
              <WifiPen className="w-9 h-11 text-cv-gold" />

        </div>

        
        <h2
          className="italic font-cv-regular leading-cv-snug mb-cv-2xl font-cv-serif text-cv-purple"
          style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
        >
          {content.title[0]}
        </h2>

        
        <p
          className="text-cv-base leading-[1.85] mx-auto mb-cv-3xl md:mb-cv-3xl w-full font-cv-sans"
          style={{ color: "#555555", maxWidth: "700px" }}
        >
          {content.description}
        </p>

       
        <div
          className="grid grid-cols-3 gap-cv-lg md:gap-cv-xl mx-auto"
          style={{ maxWidth: "600px" }}
        >
          {content.stats.map((s) => (
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