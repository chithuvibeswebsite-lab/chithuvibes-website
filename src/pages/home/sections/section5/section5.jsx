import {ScrollText} from 'lucide-react'

export default function FounderSection({ content }) {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 min-h-[520px]"
      style={{ backgroundColor: "#EDEAF2" }}
    >
      {/* Image column — padding creates the inset look, inner div is the relative anchor */}
      <div className="flex items-stretch px-cv-lg py-cv-xl lg:pl-cv-3xl md:pr-cv-xl md:py-cv-xl">
        <div
          className="relative rounded-cv-md w-full overflow-hidden min-h-[280px] md:min-h-0"
          style={{ backgroundColor: "#D5D5D5" }}
        >
          <img
            src="https://res.cloudinary.com/dvdmdowip/image/upload/q_auto/f_auto/v1779800556/products/handwritten_letters/img5.jpg"
            alt="Founder of Chithu Vibes - Master calligrapher with expertise in Tamil epigraphy"
            width={600}
            height={600}
            className="absolute inset-0 w-full h-full object-cover object-[center_60%] rounded-cv-lg"
          />
        </div>
      </div>

      {/* Text column */}
      <div className="flex items-center box-border px-cv-lg py-cv-3xl md:pl-cv-2xl md:pr-cv-4xl md:py-cv-4xl">
        <div className="w-full">
        <ScrollText className="w-9 h-11 text-cv-gold mb-3" />

          <h2
            className="font-cv-regular leading-cv-snug mb-cv-xl font-cv-serif text-cv-purple"
            style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
          >
            {content.title}
          </h2>

          <p
            className="italic leading-[1.75] mb-cv-xl font-cv-serif text-cv-purple w-full"
            style={{ fontSize: "clamp(17px, 2vw, 22px)", maxWidth: "520px" }}
          >
            {content.description}
          </p>

          <p className="text-cv-xs font-cv-bold tracking-cv-wider uppercase mb-cv-xs font-cv-sans text-cv-gold">
            {content.founder[0]}
          </p>

          <p className="text-cv-label tracking-cv-wide uppercase font-cv-sans text-cv-muted">
            {content.founder[1]} &amp; {content.founder[2]}
          </p>
        </div>
      </div>
    </section>
  );
}