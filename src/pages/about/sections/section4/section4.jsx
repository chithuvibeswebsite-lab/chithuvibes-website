import { PenTool } from "lucide-react";

const TrophyIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
    stroke="#b8972a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 21h8M12 17v4M7 4H4a1 1 0 0 0-1 1v3a4 4 0 0 0 4 4h1" />
    <path d="M17 4h3a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4h-1" />
    <path d="M7 4h10v8a5 5 0 0 1-10 0V4z" />
  </svg>
);

const ScrollIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
    stroke="#b8972a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
    stroke="#b8972a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const FounderIllustration = () => (
  <svg viewBox="0 0 220 270" xmlns="http://www.w3.org/2000/svg" className="w-full h-full block">
    <rect width="220" height="270" fill="#1a1520" />
    <ellipse cx="110" cy="245" rx="78" ry="60" fill="#c0420a" />
    <ellipse cx="110" cy="225" rx="65" ry="54" fill="#d4560e" />
    <path d="M44 255 Q110 205 176 255" stroke="#d4a017" strokeWidth="3.5" fill="none" />
    <ellipse cx="110" cy="185" rx="44" ry="22" fill="#c8845a" />
    <ellipse cx="110" cy="138" rx="40" ry="46" fill="#c8845a" />
    <ellipse cx="110" cy="102" rx="40" ry="28" fill="#1a0e08" />
  </svg>
);

const bioParas = [
  "Before the laser hummed in her studio, Jeya Chitra's world was shaped by the binary logic of code and the quiet stillness of archives. A Gold Medalist with an M.Phil in Computer Science, she mastered the digital architecture behind the modern world.",
  "Yet her soul was drawn to the stone. Through Archaeology & Epigraphy, she learned to read stories etched by ancient hands across Tamil Nadu—understanding the weight of a stroke carved for eternity.",
  "Her journey was not without fire. In 2017, she faced a life-altering challenge. Like the Phoenix she embodies, she didn't just recover—she rose with purpose. Chithu Vibes stands as that rebirth: a seamless fusion of technical brilliance and epigraphic wisdom.",
];

const cards = [
  { icon: <TrophyIcon />, label: "Award-Winning\nTech", desc: "M.Phil Gold Medalist\nbringing algorithmic\nprecision to artistic engraving." },
  { icon: <ScrollIcon />, label: "Heritage Expert", desc: "Ancient Tamil\nEpigraphy specialist\nensuring scriptural authenticity." },
  { icon: <ShieldIcon />, label: "Professional\nIntegrity", desc: "PGDLAL credentials\nensuring ethical\npractices in every commission." },
];

export default function FounderSection() {
  return (
    <section className="w-full flex flex-col items-center bg-white px-4 sm:px-6 md:px-cv-4xl py-12 md:py-cv-5xl font-cv-sans">

      <div className="w-full max-w-[1200px]">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-cv-4xl items-start mb-12 md:mb-cv-4xl">

          {/* IMAGE */}
          <div className="flex h-full justify-center items-center">
            <div className="relative">
              <div className="rounded-cv-xl overflow-hidden w-[220px] h-[260px] sm:w-[260px] sm:h-[310px] md:w-[340px] md:h-[400px] bg-[#1a1520]">
                <FounderIllustration />
              </div>

              <div className="absolute bottom-[-14px] right-[-14px] md:bottom-[-18px] md:right-[-18px] w-[52px] h-[52px] md:w-[64px] md:h-[64px] flex items-center justify-center rounded-cv-xl text-white text-xl md:text-2xl bg-cv-gold shadow-lg">
                ✦
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="mt-6 md:mt-0">

            <p className="uppercase font-cv-semibold tracking-cv-wider mb-4 md:mb-cv-lg text-sm md:text-cv-label text-cv-gold">
              The Founder
            </p>

            <h2
              className="font-cv-serif text-cv-plum leading-tight"
              style={{ fontSize: "clamp(32px, 8vw, 72px)" }}
            >
              The Gold<br />Medalist.
            </h2>

            <h3
              className="italic font-cv-serif text-cv-gold mb-4 md:mb-cv-lg"
              style={{ fontSize: "clamp(24px, 7vw, 62px)" }}
            >
              The Scholar. The<br />Phoenix.
            </h3>

            <span className="underline underline-offset-4 mb-6 md:mb-cv-xl block text-lg md:text-cv-2xl text-cv-gold">
              Jeya Chitra
            </span>

            <div className="space-y-4 md:space-y-cv-lg">
              {bioParas.map((para, i) => (
                <p
                  key={i}
                  className="text-sm sm:text-base md:text-cv-md leading-[1.7] md:leading-[1.85] text-cv-charcoal"
                >
                  {para}
                </p>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* CARDS */}
      <div className="w-full max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-cv-lg">
        {cards.map(({ icon, label, desc }, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center rounded-cv-xl bg-cv-soft px-5 py-6 md:px-cv-xl md:py-cv-2xl"
            style={{ borderLeft: "3px solid var(--color-cv-gold)" }}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-4 md:mb-cv-lg">
              {icon}
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