import { useCart } from "../../../../context/cart.context";
import { Sparkles } from "lucide-react";




export default function Section3({ content }) {
  const { inquireBespoke } = useCart();

  return (
    <section className="bg-cv-white px-cv-lg py-cv-5xl md:px-cv-4xl">
      <div className="mx-auto flex flex-col items-center text-center max-w-[640px]">
        <div className="mb-cv-xl ">
          <Sparkles size={32} color="#735C00" />
        </div>

        <blockquote className="mb-cv-xl font-cv-serif italic font-cv-semibold leading-cv-relaxed text-cv-black text-cv-lg md:text-cv-xl">
          {content.title}
        </blockquote>

        <p className="mb-cv-2xl font-cv-sans text-cv-label font-cv-medium tracking-cv-widest uppercase text-cv-muted">
          {content.description}
        </p>

        <button
          onClick={inquireBespoke}
          className="w-full md:w-auto flex items-center justify-center gap-cv-sm px-cv-xl py-cv-md md:px-cv-2xl rounded-cv-full font-cv-sans text-cv-xs font-cv-semibold tracking-cv-wide uppercase text-white bg-[#735C00] hover:bg-cv-purple transition duration-cv-base"
        >
          <span>{content.cta}</span>
          <span>→</span>
        </button>
      </div>
    </section>
  );
}