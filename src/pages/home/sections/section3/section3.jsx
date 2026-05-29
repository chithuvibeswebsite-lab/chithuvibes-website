import { Link } from 'react-router-dom';
import { buildCloudinaryUrl } from '../../../../utils/cloudinary.util';

export default function HeritageSection({ content }) {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 min-h-[520px]"
      style={{ backgroundColor: "#DCDCDC" }}
    >
      {/* Image column — stretch to fill grid cell, image fills it absolutely */}
      <div className="relative min-h-[300px] md:min-h-0" style={{ backgroundColor: "#CCCCCC" }}>
        <img
          src={buildCloudinaryUrl("v1779800712/products/thamizhi_calligraphy/img9.jpg")}
          alt="Heritage craftsmanship in Tamil calligraphy - traditional script meets modern laser precision"
          width={800}
          height={600}
          className="absolute inset-0 w-full h-full object-cover object-top rounded-cv-lg"
        />
      </div>

      {/* Text column */}
      <div
        className="flex items-center box-border px-cv-lg py-cv-3xl md:px-cv-4xl md:py-cv-4xl"
        style={{ backgroundColor: "#EDEAF2" }}
      >
        <div className="w-full">
          <div className="inline-block mb-cv-xl px-cv-md py-cv-xs bg-cv-purple">
            <span className="text-cv-label tracking-cv-wider uppercase text-white font-cv-sans">
              {content.title[0]}
            </span>
          </div>

          <h2
            className="italic font-cv-regular leading-cv-snug mb-cv-3xl font-cv-serif text-cv-purple"
            style={{ fontSize: "clamp(36px, 6vw, 70px)" }}
          >
            {content.title[1]}<br />{content.title[2]}
          </h2>

          <p
            className="text-cv-md leading-[1.85] mb-cv-xl w-full md:max-w-[480px] font-cv-sans"
            style={{ color: "#444444" }}
          >
            {content.description[0]}
          </p>

          <p
            className="text-cv-md leading-[1.85] mb-cv-3xl w-full md:max-w-[480px] font-cv-sans"
            style={{ color: "#444444" }}
          >
            {content.description[1]}
          </p>

          <Link
            to="/about"
            className="bg-transparent border-none text-cv-xs font-cv-bold tracking-cv-wider uppercase pb-cv-xs cursor-pointer font-cv-sans text-cv-gold"
            style={{ borderBottom: "2px solid var(--color-cv-gold)" }}
          >
            {content.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}