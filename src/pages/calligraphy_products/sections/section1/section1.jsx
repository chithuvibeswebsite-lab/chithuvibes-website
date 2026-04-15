export default function Section1() {
  return (
    <section className="relative w-full overflow-hidden bg-cv-black min-h-[340px] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-calligraphy-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-cv-raised w-full max-w-screen-xl mx-auto px-cv-lg py-cv-5xl text-center">
        <div className="mb-cv-xl inline-block px-cv-lg py-cv-xs rounded-cv-full border border-cv-gold bg-cv-gold/10">
          <p className="font-cv-sans text-cv-label font-cv-semibold tracking-cv-widest uppercase text-cv-gold">
            Premium Boutique
          </p>
        </div>

        <h1 className="font-cv-serif font-cv-semibold leading-cv-tight text-cv-white text-cv-4xl md:text-cv-5xl">
          The Collection.
        </h1>
        <h2 className="font-cv-serif italic font-cv-regular leading-cv-tight text-cv-gold text-cv-4xl md:text-cv-5xl">
          Artistry in Every Stroke,
        </h2>
        <h2 className="font-cv-serif italic font-cv-regular leading-cv-tight text-cv-gold text-cv-3xl md:text-cv-4xl">
          Precision in <span className="font-cv-bold">Every Laser.</span>
        </h2>
      </div>
    </section>
  );
}