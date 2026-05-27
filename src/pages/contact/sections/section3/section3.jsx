export default function ArtistryQuote({ content }) {
  return (
    <div className="bg-cv-soft min-h-[340px] flex items-center justify-center py-cv-2xl px-cv-lg">
      <p className="font-cv-serif italic text-cv-2xl leading-cv-normal text-cv-purple text-center max-w-[560px] m-0">
        {content.quote}
      </p>
    </div>
  );
}