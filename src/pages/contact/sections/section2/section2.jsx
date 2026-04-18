export default function StudioSection({ content }) {
  return (
    <div className="flex flex-col sm:flex-row w-full font-cv-sans py-cv-4xl bg-cv-white">

      <div className="sm:w-[44%] px-cv-2xl flex flex-col justify-center">

        <h2 className="font-cv-serif text-cv-3xl font-cv-regular text-cv-black tracking-cv-tight leading-cv-snug m-0 mb-3">
          {content.title}
        </h2>

        <p className="font-cv-sans text-cv-md font-cv-regular text-cv-muted leading-cv-relaxed m-0 mb-10 max-w-[500px]">
          {content.description}
        </p>

        <div className="w-full max-w-[420px] border-t border-cv-border mb-cv-lg" />

        <div className="flex items-center gap-cv-md">
          <div className="w-cv-xl h-cv-xl rounded-cv-full animate-pulse bg-cv-soft flex items-center justify-center shrink-0">
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L9.2 5.4H13.8L10.1 7.9L11.4 12.3L8 9.8L4.6 12.3L5.9 7.9L2.2 5.4H6.8L8 1Z"
                stroke="#b8a5cb" strokeWidth="1.1" strokeLinejoin="round" fill="none"/>
              <line x1="8" y1="0" x2="8" y2="1.5" stroke="#9B84B2" strokeWidth="1" strokeLinecap="round"/>
              <line x1="8" y1="14.5" x2="8" y2="16" stroke="#9B84B2" strokeWidth="1" strokeLinecap="round"/>
              <line x1="0" y1="8" x2="1.5" y2="8" stroke="#9B84B2" strokeWidth="1" strokeLinecap="round"/>
              <line x1="14.5" y1="8" x2="16" y2="8" stroke="#9B84B2" strokeWidth="1" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="font-cv-sans text-cv-label tracking-cv-wide text-cv-muted uppercase font-cv-regular">
            {content.availability}
          </span>
        </div>
      </div>

      <div className="hidden sm:block w-cv-px bg-cv-border self-stretch shrink-0" />

      <div className="flex-1 px-cv-2xl flex flex-col justify-start mt-cv-xl sm:mt-0">

        <p className="font-cv-sans text-cv-lg tracking-cv-widest text-cv-muted uppercase font-cv-regular m-0 mb-cv-lg">
          {content.processLabel}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-cv-xl gap-x-cv-2xl mt-10">
          {content.steps.map((step) => (
            <div key={step.num}>
              <h3 className="font-cv-serif italic font-cv-regular text-cv-xl text-cv-gold m-0 mb-cv-sm">
                {step.num} {step.title}
              </h3>
              <p className="font-cv-sans text-cv-xs tracking-cv-wide uppercase text-cv-muted leading-cv-relaxed m-0 font-cv-regular">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}