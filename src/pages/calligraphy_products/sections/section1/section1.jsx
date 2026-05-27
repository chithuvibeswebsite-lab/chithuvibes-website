export default function Section1({content}) {
  return (
    <section className="relative w-full overflow-hidden bg-cv-muted min-h-[340px] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        role="img"
        aria-label="Calligraphy products collection background"
        style={{ backgroundImage: "url('/images/bg-image.jpeg')" }}
      />
      <div className="absolute inset-0 bg-white/0" />

      <div className="relative z-cv-raised w-full max-w-screen-xl mx-auto px-cv-lg py-cv-5xl text-center">
        <div className="mb-cv-xl inline-block px-cv-lg py-cv-xs --radius-cv-none: 0px; border border-cv-gold/50 bg-[#735C00]">
          <p className="font-cv-sans text-cv-label font-cv-bold tracking-cv-widest uppercase text-cv-gold">
            {content.title[0]}
          </p>
        </div>

        <h1 className="font-cv-serif italic font-cv-regular leading-cv-tight text-cv-plum text-cv-4xl md:text-cv-5xl"
        style={{ fontSize: "clamp(40px, 6vw, 76px)" }}>
          {content.title[1]}
        </h1>
        
        <h2 className="font-cv-serif italic font-cv-regular leading-cv-tight text-cv-gold text-cv-4xl md:text-cv-5xl"
        style={{ fontSize: "clamp(40px, 6vw, 76px)" }}>
          {content.title[2]} <span className="font-cv-regular text-cv-plum">{content.title[3]}</span>
        </h2>
        <h2 className="font-cv-serif italic font-cv-regular leading-cv-tight text-cv-plum text-cv-3xl md:text-cv-4xl"
        style={{ fontSize: "clamp(40px, 6vw, 76px)" }}>
          {content.title[4]} <span className="font-cv-regular text-cv-gold">{content.title[5]}</span>
        </h2>
      </div>
    </section>
  );
}