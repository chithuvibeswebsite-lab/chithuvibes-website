export default function ManuscriptQuote({ content }) {
  return (
    <section className="flex flex-col items-center justify-center text-center px-cv-lg py-cv-section bg-cv-mauve">

      <p className="mb-cv-lg font-cv-bold leading-cv-tight text-cv-3xl md:text-cv-4xl font-cv-serif text-cv-gold">
        {content.number}
      </p>

      <blockquote className="max-w-xl md:max-w-3xl mx-auto mb-cv-2xl italic font-cv-regular leading-cv-normal text-cv-2xl md:text-cv-3xl font-cv-serif text-cv-white">
        {content.quote}
      </blockquote>

      <div className="mb-cv-2xl bg-cv-gold opacity-cv-soft w-cv-px h-cv-3xl" />

      <button onClick={() => window.location.href = '/contact'} className="uppercase font-cv-medium tracking-cv-wider rounded-cv-full cursor-pointer px-cv-xl py-cv-md font-cv-sans text-cv-label bg-cv-gold text-cv-white">
        {content.cta}
      </button>

    </section>
  );
}