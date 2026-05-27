import { useCart } from "../../../../context/cart.context";

export default function BespokeSection({content}) {
  const { homePageWhatsapp } = useCart();
  return (
    <section
      className="box-border text-center px-cv-lg py-cv-3xl md:px-cv-4xl md:py-cv-section"
      style={{ backgroundColor: "#EDEAF2" }}
    >
      <div className="mx-auto" style={{ maxWidth: "800px" }}>


        <h2
          className="font-cv-regular leading-cv-tight mb-cv-lg font-cv-serif text-cv-purple"
          style={{ fontSize: "clamp(36px, 5vw, 72px)" }}
        >
          {content.title}
        </h2>


        <p className="text-cv-sm leading-cv-relaxed mb-cv-3xl font-cv-sans text-shadow-cv-charcoal">
          {content.description}
        </p>

        <button
          onClick={() => homePageWhatsapp("Hello Chithu Vibes! I am interested in placing a custom order.")}
          className="
    inline-flex items-center gap-cv-lg
    px-cv-2xl py-cv-md
    border-0
    text-cv-xs font-cv-bold tracking-cv-wider uppercase font-cv-sans text-cv-purple
    cursor-pointer
    bg-[linear-gradient(130deg,_#F8E9A1_0%,_#D4AF37_100%)]
    shadow-[0_8px_24px_rgba(212,175,55,0.35)]
    transition-all duration-300
    hover:scale-[1.03]
    hover:shadow-[0_12px_32px_rgba(212,175,55,0.5)]
    active:scale-[0.98]
  "
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>

          {content.cta}
        </button>

      </div>
    </section>
  );
}