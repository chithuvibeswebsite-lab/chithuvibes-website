export default function OriginStorySection({ content }) {
  return (
    <section className="bg-white py-cv-3xl px-cv-lg md:py-cv-4xl md:px-cv-xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-cv-3xl md:gap-cv-4xl items-center">

        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-[320px] md:max-w-[420px] h-[380px] md:h-[520px] rotate-[-4deg]">
            <div className="absolute inset-0 rounded-cv-xl border-3 p-30 border-cv-gold -rotate-5" />
            <div className="absolute inset-0 rounded-cv-xl overflow-hidden" style={{ backgroundColor: "#1a2a1a" }}>
              <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: "#1C2B1C" }}>
                <img
                  src="https://res.cloudinary.com/dvdmdowip/image/upload/q_auto/f_auto/v1779887420/WhatsApp_Image_2026-05-27_at_6.39.26_PM_1_dp0oqk.jpg"
                  alt="Jeya Chitra - Founder and master calligrapher of Chithu Vibes, Tamil epigraphy scholar"
                  width={420}
                  height={520}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-cv-lg">

          <h2
            className="text-cv-purple leading-cv-snug mb-cv-pxsm font-cv-serif italic font-cv-regular"
            style={{ fontSize: "clamp(34px, 4vw, 70px)" }}
          >
            {content.title}
          </h2>

          <p className="text-cv-md text-cv-charcoal leading-cv-relaxed font-cv-sans font-cv-light">
            {content.description[0]}
          </p>

          <p className="text-cv-md text-cv-charcoal leading-cv-relaxed font-cv-sans font-cv-light">
            {content.description[1]}
          </p>

          <div className="border-l-6 border-cv-gold pl-cv-lg py-cv-xs my-cv-xs">
            <p
              className="text-cv-gold leading-cv-relaxed font-cv-serif italic font-cv-regular"
              style={{ fontSize: "clamp(17px, 2vw, 30px)" }}
            >
              {content.quote}
            </p>
          </div>

          <p className="text-cv-md text-cv-charcoal leading-cv-relaxed font-cv-sans font-cv-light">
            {content.description[2]}
          </p>

        </div>
      </div>
    </section>
  );
}