export default function BespokeSection() {
  return (
    <section
      className="box-border text-center px-cv-lg py-cv-3xl md:px-cv-4xl md:py-cv-section"
      style={{ backgroundColor: "#EDEAF2" }}
    >
      <div className="mx-auto" style={{ maxWidth: "800px" }}>

        {/* Heading */}
        <h2
          className="font-cv-regular leading-cv-tight mb-cv-lg font-cv-serif text-cv-purple"
          style={{ fontSize: "clamp(36px, 5vw, 72px)" }}
        >
          Begin Your Bespoke Journey
        </h2>

        {/* Sub */}
        <p className="text-cv-sm leading-cv-relaxed mb-cv-3xl font-cv-sans text-cv-muted">
          Custom requests, bulk orders, or personal engravings. We are just a message away.
        </p>

        {/* WhatsApp Button */}
        <button
          className="border-none cursor-pointer inline-flex items-center gap-cv-lg text-cv-xs font-cv-bold tracking-cv-wider uppercase px-cv-2xl py-cv-md font-cv-sans text-cv-purple"
          style={{
            background: "linear-gradient(to right, #f5e6a5, #D4AF37, #D4AF37)",
            boxShadow: "0 6px 24px rgba(201,168,76,0.3)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          Order via WhatsApp
        </button>

      </div>
    </section>
  );
}