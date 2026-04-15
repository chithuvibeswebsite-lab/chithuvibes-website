import { useCart } from "../../../../context/cart.context";

function SparkleIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M12 2 L13.5 10 L22 12 L13.5 14 L12 22 L10.5 14 L2 12 L10.5 10 Z" fill="#C9A84C" opacity="0.85" />
      <path d="M18 4 L18.8 7.2 L22 8 L18.8 8.8 L18 12 L17.2 8.8 L14 8 L17.2 7.2 Z" fill="#C9A84C" opacity="0.5" />
    </svg>
  );
}

export default function Section3() {
  const { inquireBespoke } = useCart();

  return (
    <section className="bg-cv-white px-cv-lg py-cv-5xl md:px-cv-4xl">
      <div className="mx-auto flex flex-col items-center text-center max-w-[640px]">
        <div className="mb-cv-lg">
          <SparkleIcon />
        </div>

        <blockquote className="mb-cv-xl font-cv-serif italic font-cv-regular leading-cv-relaxed text-cv-black text-cv-lg md:text-cv-xl">
          "True art is the bridge between the transient moment and eternal memory. We don't just craft items; we etch soul into matter."
        </blockquote>

        <p className="mb-cv-2xl font-cv-sans text-cv-label font-cv-medium tracking-cv-widest uppercase text-cv-muted">
          The Artisan's Touch
        </p>

        <button
          onClick={inquireBespoke}
          className="w-full md:w-auto flex items-center justify-center gap-cv-sm px-cv-xl py-cv-md md:px-cv-2xl rounded-cv-full font-cv-sans text-cv-xs font-cv-semibold tracking-cv-wide uppercase text-white bg-cv-plum hover:bg-cv-purple transition duration-cv-base"
        >
          <span>Inquire via WhatsApp for Bespoke Keepsakes</span>
          <span>→</span>
        </button>
      </div>
    </section>
  );
}