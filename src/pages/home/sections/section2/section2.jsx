export default function Section2({content}) {
  const items = content.cardData || [];

  return (
    <section
      className="box-border py-12 px-4 sm:px-6 md:px-cv-4xl md:py-cv-4xl"
      style={{ backgroundColor: "#faf4f4" }}
    >
      <div className="mx-auto max-w-[1400px]">

        
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 md:mb-cv-3xl gap-2">
          <h2
            className="m-0 leading-cv-tight italic font-cv-regular font-cv-serif text-cv-purple"
            style={{ fontSize: "clamp(26px, 6vw, 52px)" }} // smaller on mobile
          >
            {content.title[0]} 
          </h2>

          <p className="text-xs sm:text-sm md:mt-cv-md md:text-cv-label tracking-cv-wider uppercase font-cv-sans text-cv-muted">
            {content.title[1]} / {new Date().getFullYear()}
          </p>
        </div>

        
        <div
          className="grid grid-cols-1 lg:grid-cols-3 rounded-cv-md overflow-hidden border border-cv-border"
        >
          {items.map((item, index) => (
            <div
              key={item.title}
              className="bg-white flex flex-col cursor-pointer box-border p-5 sm:p-6 md:p-cv-xl pb-6 md:pb-cv-2xl border-b border-cv-border md:border-b-0"
              style={{
                borderRight: index < 2 ? "1px solid var(--color-cv-border)" : "none",
              }}
            >

              
              <div className='flex flex-col justify-center items-center'>
                <div
                  className="rounded-cv-xl h-[180px] sm:h-[220px] md:h-[320px] w-full max-w-[600px] flex items-center justify-center mb-5 md:mb-cv-xl shrink-0"
                  style={{ backgroundColor: "#DCDCDC" }}
                >
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#BBBBBB" strokeWidth="1">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
              </div>

              
              <h3
                className="italic text-xl sm:text-2xl md:text-3xl font-cv-regular leading-cv-snug mb-2 md:mb-cv-sm font-cv-serif text-cv-purple"
              >
                {item.title}
              </h3>

              
              <p className="text-sm sm:text-base md:text-lg text-cv-muted leading-relaxed md:leading-cv-relaxed mb-5 md:mb-cv-lg grow font-cv-sans">
                {item.desc}
              </p>

             
              <div className="flex items-center justify-between pt-4 md:pt-cv-lg border-t border-cv-border">
                <span className="text-sm md:text-cv-sm font-cv-medium font-cv-sans text-cv-gold">
                  {item.price}
                </span>
                <span className="text-lg md:text-cv-xl leading-none font-cv-light text-cv-gold">
                  ›
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}