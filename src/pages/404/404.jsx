
 
export default function NotFound404() {
  return (
    <div className="bg-cv-white min-h-screen flex flex-col items-center justify-center px-cv-lg py-cv-2xl">
 
      {/* Calligraphy SVG — large decorative 404 with ink strokes */}
      <div className="w-full max-w-[700px] mb-cv-sm">
        <svg viewBox="0 0 700 320" width="100%" xmlns="http://www.w3.org/2000/svg">
 
          {/* Ink brush stroke behind — horizontal swash */}
          <path
            d="M60,160 Q200,120 350,155 Q500,190 640,148"
            fill="none" stroke="#c8c0d0" strokeWidth="1" strokeLinecap="round" opacity="0.6"
          />
 
          {/* Decorative flourish left */}
          <path d="M80,80 Q100,50 130,70 Q110,90 80,80 Z" fill="none" stroke="#C9A84C" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
          <path d="M80,80 Q60,60 75,40 Q95,55 80,80 Z"   fill="none" stroke="#C9A84C" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
          <path d="M80,80 L80,110" fill="none" stroke="#C9A84C" strokeWidth="0.8" opacity="0.5" />
 
          {/* Decorative flourish right */}
          <path d="M620,80 Q600,50 570,70 Q590,90 620,80 Z" fill="none" stroke="#C9A84C" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
          <path d="M620,80 Q640,60 625,40 Q605,55 620,80 Z"  fill="none" stroke="#C9A84C" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
          <path d="M620,80 L620,110" fill="none" stroke="#C9A84C" strokeWidth="0.8" opacity="0.5" />
 
          {/* Ghost large 404 behind */}
          <text
            x="350" y="230"
            fontFamily="'Cormorant Garamond', Georgia, serif"
            fontStyle="italic" fontWeight="300"
            fontSize="200" fill="#3D3566" opacity="0.07"
            textAnchor="middle"
          >404</text>
 
          {/* Crisp 404 */}
          <text
            x="350" y="220"
            fontFamily="'Cormorant Garamond', Georgia, serif"
            fontStyle="italic" fontWeight="300"
            fontSize="170" fill="#3D3566"
            textAnchor="middle"
          >404</text>
 
          {/* Gold underline swash */}
          <path
            d="M180,242 Q260,258 350,247 Q440,236 520,247"
            fill="none" stroke="#C9A84C" strokeWidth="1.2" strokeLinecap="round"
          />
 
          {/* Small diamond ornament center */}
          <polygon points="350,260 356,267 350,274 344,267" fill="#C9A84C" opacity="0.7" />
 
          {/* Side lines */}
          <line x1="40"  y1="267" x2="338" y2="267" stroke="#D9D3E0" strokeWidth="0.5" />
          <line x1="362" y1="267" x2="660" y2="267" stroke="#D9D3E0" strokeWidth="0.5" />
 
          {/* Pen-nib lines — bottom left */}
          <g transform="translate(44,282) rotate(-8)">
            <line x1="0" y1="0"  x2="60" y2="0"  stroke="#D9D3E0" strokeWidth="0.7" strokeLinecap="round" />
            <line x1="0" y1="9"  x2="48" y2="9"  stroke="#D9D3E0" strokeWidth="0.7" strokeLinecap="round" />
            <line x1="0" y1="18" x2="36" y2="18" stroke="#D9D3E0" strokeWidth="0.7" strokeLinecap="round" />
          </g>
 
          {/* Pen-nib lines — bottom right */}
          <g transform="translate(656,282) rotate(172)">
            <line x1="0" y1="0"  x2="60" y2="0"  stroke="#D9D3E0" strokeWidth="0.7" strokeLinecap="round" />
            <line x1="0" y1="9"  x2="48" y2="9"  stroke="#D9D3E0" strokeWidth="0.7" strokeLinecap="round" />
            <line x1="0" y1="18" x2="36" y2="18" stroke="#D9D3E0" strokeWidth="0.7" strokeLinecap="round" />
          </g>
        </svg>
      </div>
 
      {/* Text Content */}
      <div className="text-center max-w-[520px] w-full">
 
        {/* Overline label */}
        <p className="font-cv-sans text-cv-label tracking-cv-widest uppercase text-cv-gold font-cv-medium mb-cv-lg">
          PAGE NOT FOUND
        </p>
 
        {/* Italic serif quote */}
        <p className="font-cv-serif italic font-cv-light text-cv-xl leading-cv-relaxed text-cv-purple mb-cv-lg">
          "The stroke you seek has drifted<br />beyond the canvas."
        </p>
 
        {/* Body copy */}
        <p className="font-cv-sans text-cv-sm font-cv-light leading-cv-relaxed text-cv-muted mb-cv-xl">
          The page wandered off — much like ink on an uncharted surface.
          Let us guide you back to where the artistry begins.
        </p>
 
        {/* Buttons — stack on mobile, row on sm+ */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-cv-md mb-cv-2xl">
          <button
            className="bg-cv-gold text-cv-white font-cv-sans text-cv-label tracking-cv-wider font-cv-bold px-cv-xl py-cv-md rounded-cv-xs uppercase cursor-pointer transition duration-cv-base hover:opacity-90 w-full sm:w-auto"
            onClick={() => window.history.back()}
          >
            GO BACK &nbsp;→
          </button>
          <button
            className="bg-transparent text-cv-gold border border-cv-gold font-cv-sans text-cv-label tracking-cv-wider font-cv-bold px-cv-xl py-cv-md rounded-cv-full uppercase cursor-pointer transition duration-cv-base hover:bg-cv-soft w-full sm:w-auto"
            onClick={() => (window.location.href = "/")}
          >
            RETURN HOME
          </button>
        </div>
 
        {/* Badge */}
        <div className="flex items-center justify-center gap-cv-sm">
          <span className="text-cv-label text-cv-mauve">✦</span>
          <span className="font-cv-sans text-cv-label tracking-cv-wider text-cv-muted font-cv-medium uppercase">
            HERITAGE-FIRST &nbsp;·&nbsp; MASTERY SINCE 2023
          </span>
          <span className="text-cv-label text-cv-mauve">✦</span>
        </div>
 
      </div>
    </div>
  );
}