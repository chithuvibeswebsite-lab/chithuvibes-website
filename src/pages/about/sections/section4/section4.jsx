import { PenTool, Trophy, FileText, ShieldCheck, GraduationCap } from "lucide-react";

const icons = [
  <Trophy width={26} height={26} stroke="#b8972a" strokeWidth={1.6} fill="none" />,
  <FileText width={26} height={26} stroke="#b8972a" strokeWidth={1.6} fill="none" />,
  <ShieldCheck width={26} height={26} stroke="#b8972a" strokeWidth={1.6} fill="none" />,
<GraduationCap width={26} height={26} stroke="#b8972a" strokeWidth={1.6} fill="none" />
];

export default function FounderSection({ content }) {
  return (
    <section className="w-full flex flex-col items-center bg-white px-4 sm:px-6 md:px-cv-4xl py-12 md:py-cv-5xl font-cv-sans">

      <div className="w-full max-w-[1200px]">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-cv-4xl items-start mb-12 md:mb-cv-4xl">

          <div className="flex h-full justify-center items-center">
            <div className="relative">
              <div className="rounded-cv-xl overflow-hidden w-[220px] h-[260px] sm:w-[260px] sm:h-[310px] md:w-[400px] md:h-[500px] bg-[#1a1520]">
  <img
    src={content.image}
    alt="Jeya Chitra - Gold Medalist, M.Phil Computer Science, Tamil epigraphy scholar, and founder of Chithu Vibes laser calligraphy studio"
    width={400}
    height={500}
    className="w-full h-full object-cover object-top"
  />
</div>
              <div className="absolute bottom-[-14px] right-[-14px] md:bottom-[-18px] md:right-[-18px] w-[52px] h-[52px] md:w-[64px] md:h-[64px] flex items-center justify-center rounded-cv-xl text-white text-xl md:text-2xl bg-cv-gold shadow-lg animate-pulse">
                ✦
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-0">

            <p className="uppercase font-cv-semibold tracking-cv-wider mb-4 md:mb-cv-lg text-sm md:text-cv-label text-cv-gold">
              {content.label}
            </p>

            <h2
              className="font-cv-serif text-cv-plum leading-tight"
              style={{ fontSize: "clamp(32px, 8vw, 72px)" }}
            >
              {content.title[0]}<br />{content.title[1]}
            </h2>

            <h3
              className="italic font-cv-serif text-cv-gold mb-4 md:mb-cv-lg"
              style={{ fontSize: "clamp(24px, 7vw, 62px)" }}
            >
              {content.title[2]}<br />{content.title[3]}
            </h3>

            <span className="underline underline-offset-4 mb-6 md:mb-cv-xl block text-lg md:text-cv-2xl text-cv-gold">
              {content.founderName}
            </span>

            <div className="space-y-4 md:space-y-cv-lg">
              {content.bio.map((para, i) => (
                <p key={i} className="text-sm sm:text-base md:text-cv-md leading-[1.7] md:leading-[1.85] text-cv-charcoal">
                  {para}
                </p>
              ))}
            </div>

          </div>
        </div>
      </div>

      <div className="w-full max-w-[1500px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-cv-lg">
        {content.cards.map(({ label, desc }, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center rounded-cv-xl bg-cv-soft px-5 py-6 md:px-cv-xl md:py-cv-2xl"
            style={{ borderLeft: "3px solid var(--color-cv-gold)" }}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-4 md:mb-cv-lg">
              {icons[i]}
            </div>
            <p className="uppercase font-cv-bold tracking-cv-wider whitespace-pre-line mb-2 md:mb-cv-md text-sm md:text-cv-label text-cv-plum">
              {label}
            </p>
            <p className="text-xs sm:text-sm md:text-cv-xs whitespace-pre-line text-cv-charcoal">
              {desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}