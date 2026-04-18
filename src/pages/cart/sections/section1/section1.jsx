export default function Section1({content}) {
  return (
    <section className="bg-cv-white pt-cv-7xl pb-cv-2xl px-cv-lg md:px-cv-4xl text-center">
      <h1 className="mb-cv-md font-cv-serif italic font-cv-regular text-cv-plum text-[clamp(42px,6vw,72px)] tracking-tight">
        {content.title}
      </h1>

      <p className="font-cv-sans text-cv-label font-cv-medium tracking-[0.125em] uppercase text-cv-muted text-base">
        {content.description}
      </p>
    </section>
  );
}