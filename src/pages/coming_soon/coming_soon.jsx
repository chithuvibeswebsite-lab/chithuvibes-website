import { COMING_SOON } from "../../data/data";
import { openWhatsApp } from "../../utils/whatsapp.util";

export default function ComingSoon() {
  const { section1 } = COMING_SOON;

  return (
    <div className="bg-cv-white min-h-screen flex flex-col items-center justify-center px-cv-lg py-cv-3xl">
      <div className="w-full max-w-[720px] mb-cv-lg">
        <svg viewBox="0 0 720 320" width="100%" xmlns="http://www.w3.org/2000/svg">
          <path d="M60,160 Q220,110 360,150 Q520,190 660,140" fill="none" stroke="#c8c0d0" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
          <path d="M90,95 Q115,70 150,85 Q125,105 90,95 Z" fill="none" stroke="#C9A84C" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
          <path d="M90,95 Q70,75 85,55 Q105,70 90,95 Z" fill="none" stroke="#C9A84C" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
          <path d="M630,95 Q605,70 570,85 Q595,105 630,95 Z" fill="none" stroke="#C9A84C" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
          <path d="M630,95 Q650,75 635,55 Q615,70 630,95 Z" fill="none" stroke="#C9A84C" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
          <text x="360" y="225" fontFamily="'Cormorant Garamond', Georgia, serif" fontStyle="italic" fontWeight="300" fontSize="170" fill="#3D3566" opacity="0.08" textAnchor="middle">COMING</text>
          <text x="360" y="210" fontFamily="'Cormorant Garamond', Georgia, serif" fontStyle="italic" fontWeight="300" fontSize="140" fill="#3D3566" textAnchor="middle">SOON</text>
          <path d="M190,242 Q270,258 360,247 Q450,236 530,247" fill="none" stroke="#C9A84C" strokeWidth="1.2" strokeLinecap="round" />
          <polygon points="360,260 366,267 360,274 354,267" fill="#C9A84C" opacity="0.7" />
          <line x1="40" y1="267" x2="348" y2="267" stroke="#D9D3E0" strokeWidth="0.5" />
          <line x1="372" y1="267" x2="680" y2="267" stroke="#D9D3E0" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="text-center max-w-[560px] w-full">
        <p className="font-cv-sans text-cv-label tracking-cv-widest uppercase text-cv-gold font-cv-medium mb-cv-lg">
          {section1.label}
        </p>

        <p className="font-cv-serif italic font-cv-light text-cv-3xl leading-cv-snug text-cv-purple mb-cv-lg">
          {section1.title[0]}<br />{section1.title[1]}
        </p>

        <p className="font-cv-sans text-cv-sm font-cv-light leading-cv-relaxed text-cv-muted mb-cv-xl">
          {section1.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-cv-md mb-cv-2xl">
          <button
            className="bg-cv-gold text-cv-white font-cv-sans text-cv-label tracking-cv-wider font-cv-bold px-cv-xl py-cv-md rounded-cv-xs uppercase cursor-pointer transition duration-cv-base hover:opacity-90 w-full sm:w-auto"
            onClick={() => openWhatsApp(section1.cta.message)}
          >
            {section1.cta.primary}
          </button>
        </div>

        <div className="flex items-center justify-center gap-cv-sm">
          <span className="text-cv-label text-cv-mauve">✦</span>
          <span className="font-cv-sans text-cv-label tracking-cv-wider text-cv-muted font-cv-medium uppercase">
            {section1.badge}
          </span>
          <span className="text-cv-label text-cv-mauve">✦</span>
        </div>
      </div>
    </div>
  );
}
