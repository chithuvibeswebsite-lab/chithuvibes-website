import { useState } from "react";

const penImageUrl =
  "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=90";

export default function BespokeJourney() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    vision: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section className="bg-cv-soft min-h-screen font-cv-sans py-cv-xl">

      {/* Header */}
      <div className="text-center mb-cv-3xl px-cv-lg">
        <h1
          className="italic font-cv-light font-cv-serif text-cv-plum leading-cv-snug mb-cv-md"
          style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
        >
          Begin Your Bespoke Journey
        </h1>

        <p className="tracking-cv-wider text-cv-label text-cv-muted font-cv-medium">
          PRIVATE CONSULTATION &amp; STUDIO ACCESS
        </p>
      </div>

      {/* Container */}
      <div className="container mx-auto px-cv-xl md:px-cv-3xl">

        {/* Content */}
        <div className="flex flex-col md:flex-row items-start gap-cv-3xl lg:gap-cv-4xl">

          {/* Image */}
          <div className="w-full md:w-[480px] lg:w-[560px] shrink-0">
            <img
              src={penImageUrl}
              alt="Fountain pen"
              className="w-full h-[320px] md:h-[600px] object-cover  shadow-lg"
            />
          </div>

          {/* Form */}
          <div className="flex-1 w-full max-w-[620px]">

            <p className="tracking-cv-wider text-cv-md text-cv-muted font-cv-medium mb-cv-2xl">
              SUBMIT AN INQUIRY
            </p>

            {/* Name + Mobile */}
            <div className="flex flex-col sm:flex-row gap-cv-xl">
              {[
                {
                  name: "name",
                  label: "NAME",
                  placeholder: "E.g. Elena Varma",
                },
                {
                  name: "mobile",
                  label: "MOBILE NUMBER",
                  placeholder: "+91 00000 00000",
                },
              ].map(({ name, label, placeholder }) => (
                <div key={name} className="flex-1 flex flex-col min-w-0">
                  <label className="tracking-cv-wide text-cv-sm font-cv-bold text-cv-plum mb-cv-sm">
                    {label}
                  </label>

                  <input
                    name={name}
                    value={form[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="bg-transparent outline-none text-cv-md text-cv-muted py-cv-sm font-cv-serif italic w-full placeholder:text-cv-muted focus:placeholder:opacity-50"
                  />

                  <div className="h-cv-px bg-cv-border mt-cv-sm transition-all duration-300 focus-within:bg-cv-gold" />
                </div>
              ))}
            </div>

            {/* Email */}
            <div className="flex flex-col mt-cv-2xl">
              <label className="tracking-cv-wide text-cv-sm font-cv-bold text-cv-plum mb-cv-sm">
                EMAIL ADDRESS
              </label>

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="email@address.com"
                className="bg-transparent outline-none text-cv-md text-cv-muted py-cv-sm font-cv-serif italic placeholder:text-cv-muted"
              />

              <div className="h-cv-px bg-cv-border mt-cv-sm transition-all duration-300 focus-within:bg-cv-gold" />
            </div>

            {/* Vision */}
            <div className="flex flex-col mt-cv-2xl">
              <label className="tracking-cv-wide text-cv-sm font-cv-bold text-cv-plum mb-cv-sm">
                SPECIFIC NEEDS &amp; VISION
              </label>

              <textarea
                name="vision"
                value={form.vision}
                onChange={handleChange}
                placeholder="Tell us about the project, dimensions, or sentiments you wish to capture..."
                className="bg-transparent outline-none text-cv-md text-cv-muted py-cv-sm font-cv-serif italic resize-none leading-cv-relaxed placeholder:text-cv-muted"
                rows={4}
              />

              <div className="h-cv-px bg-cv-border mt-cv-sm transition-all duration-300 focus-within:bg-cv-gold" />
            </div>

            {/* Button */}
            <button
              className="
                mt-cv-3xl
                inline-flex items-center gap-3
                px-cv-2xl py-cv-md
                text-cv-label font-cv-semibold tracking-cv-wider uppercase
                text-cv-purple
                border border-[#f5e6a5]/40
                bg-[linear-gradient(135deg,_#F8E9A1_0%,_#D4AF37_40%,_#B8962E_60%,_#F2D57E_100%)]
                shadow-[0_8px_24px_rgba(212,175,55,0.35)]
                transition-all duration-300
                hover:scale-[1.03] hover:brightness-110
                hover:shadow-[0_12px_32px_rgba(212,175,55,0.5)]
                active:scale-[0.98]
              "
            >
              SEND INQUIRY →
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}