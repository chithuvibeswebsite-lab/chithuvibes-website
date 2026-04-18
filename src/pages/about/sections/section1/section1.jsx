export default function AboutHero({ content }) {
  return (
    <section className="min-h-screen bg-cv-white flex flex-col items-center justify-center text-center px-cv-lg py-cv-3xl md:px-cv-xl md:py-cv-4xl">

      <p className="text-cv-label tracking-cv-widest text-cv-gold uppercase mb-cv-xl font-cv-medium font-cv-sans">
        {content.label}
      </p>

      <h1
        className="leading-cv-tight text-cv-purple mb-cv-pxsm font-cv-serif italic font-cv-regular"
        style={{ fontSize: "clamp(44px, 8vw, 90px)" }}
      >
        {content.title[0]}<br />{content.title[1]}
      </h1>

      <h2
        className="leading-cv-tight text-cv-gold mb-cv-xl font-cv-serif font-cv-semibold"
        style={{ fontSize: "clamp(44px, 8vw, 90px)" }}
      >
        {content.title[2]}
      </h2>

      <div className="w-16 h-cv-px bg-cv-gold mb-cv-xl" />

      <p className="text-cv-md text-cv-muted leading-cv-normal max-w-sm sm:max-w-md text-center mb-cv-lg font-cv-sans font-cv-light">
        {content.description}
      </p>

      <span className="text-cv-gold text-cv-xl animate-bounce">&#8964;</span>

    </section>
  );
}