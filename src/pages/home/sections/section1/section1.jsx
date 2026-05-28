import { Link } from 'react-router-dom';

export default function Section1({ content }) {
  return (
    <section
      className="flex flex-col px-6 sm:px-10 md:px-30 w-full pt-10 sm:pt-12 md:pt-16 items-center min-h-screen box-border"
      style={{ backgroundColor: "#F0EEF5" }}
    >
      <div
        className="w-full px-0 sm:px-cv-lg py-cv-xl md:px-cv-4xl md:py-cv-3xl grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-cv-3xl items-center box-border"
      >


        <div className="flex flex-col items-start">

          <p
            className="mb-4 md:mb-cv-xl text-sm sm:text-base md:text-xl uppercase text-cv-label tracking-cv-wider font-cv-sans text-cv-purple"
            
          >
            {content.title[0]} &amp; {content.title[1]}
          </p>

          <h1
            className="m-0 mb-3 md:mb-4 leading-cv-tight tracking-cv-tight font-cv-serif font-cv-semibold text-cv-purple"
            style={{ fontSize: "clamp(28px, 7vw, 90px)" }}
          >
            {content.title[2]}<br />{content.title[3]}
          </h1>

          <h2
            className="m-0 mb-4 md:mb-cv-xl leading-cv-snug font-cv-serif font-cv-bold text-cv-gold"
            style={{ fontSize: "clamp(20px, 6vw, 70px)" }}
          >
            {content.title[4]}<br />{content.title[5]}
          </h2>

          <p
            className="mb-6 md:mb-cv-2xl text-sm sm:text-base md:text-cv-md leading-[1.7] md:leading-[1.85] font-cv-sans font-cv-light mt-2 md:mt-3"
            style={{ color: "#555555", maxWidth: "100%" }} // full width on mobile
          >
            {content.description}
          </p>

          <Link
            to={'/calligraphy-products'}
            className="border-none cursor-pointer text-xs sm:text-sm md:text-cv-sm font-cv-semibold tracking-cv-wider uppercase px-6 sm:px-cv-2xl py-3 md:py-cv-md font-cv-sans"
            style={{
              background: "linear-gradient(to right, #f5e6a5, #D4AF37, #D4AF37)",
              color: "var(--color-cv-black)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              transition: "all var(--duration-cv-base) ease",
            }}
          >
            {content.cta}
          </Link>
        </div>


        <div className="relative h-[260px] sm:h-[320px] md:h-full w-full flex items-center justify-center">

          {/* Replace fixed 500x500 with responsive sizing that respects parent height */}
          <div
            className="rounded-cv-md h-full w-full max-w-[600px] max-h-[600px] flex items-center justify-center z-cv-base overflow-hidden"
            style={{ backgroundColor: "#D8D8D8" }}
          >
            <img
              src="https://res.cloudinary.com/dvdmdowip/image/upload/q_auto/f_auto/v1779973806/WhatsApp_Image_2026-05-27_at_3.39.20_PM_1_zwae5u.jpg"
              alt={content.imgAlt}
              fetchPriority="high"
              width={600}
              height={600}
              className="w-full h-full object-cover object-bottom rounded-cv-md"
            />
          </div>

          <div className="absolute -bottom-10 left-3 md:bottom-cv-xs md:left-cv-sm md:-left-cv-lg bg-white rounded-cv-xs p-3 md:p-cv-lg z-cv-raised shadow-cv-lg max-w-[200px] md:max-w-[255px]">
            <p className="m-0 text-xs sm:text-lg md:text-cv-base italic leading-[1.6] md:leading-[1.65] font-cv-serif text-cv-purple">
              {content.imgDes}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}