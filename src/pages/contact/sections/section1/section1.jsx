import { useState } from "react";

const penImageUrl = "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80";

export default function BespokeJourney() {
  const [form, setForm] = useState({ name: "", mobile: "", email: "", vision: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="bg-cv-soft min-h-screen font-cv-sans pb-cv-3xl">

      {/* Header */}
      <div className="text-center pt-cv-3xl pb-cv-2xl px-cv-lg">
        <h1
          className="italic font-cv-light font-cv-serif text-cv-plum leading-cv-snug mb-cv-sm"
          style={{ fontSize: "clamp(32px, 5vw, 58px)" }}
        >
          Begin Your Bespoke Journey
        </h1>
        <p className="tracking-cv-wider text-cv-label text-cv-muted font-cv-medium font-cv-sans">
          PRIVATE CONSULTATION &amp; STUDIO ACCESS
        </p>
      </div>

      {/* Content Row */}
      <div className="flex flex-col md:flex-row items-start gap-cv-2xl max-w-[1020px] mx-auto px-cv-lg">

        {/* Left: Image */}
        <div className="w-full md:w-[380px] shrink-0">
          <img
            src={penImageUrl}
            alt="Fountain pen"
            className="w-full object-cover block rounded-cv-xs"
            style={{ height: "320px" }}
          />
        </div>

        {/* Right: Form */}
        <div className="flex-1 pt-cv-xs w-full">
          <p className="tracking-cv-wider text-cv-label text-cv-muted font-cv-medium font-cv-sans mb-cv-xl">
            SUBMIT AN INQUIRY
          </p>

          {/* Name + Mobile */}
          <div className="flex flex-col sm:flex-row gap-cv-xl">
            {[
              { name: "name",   label: "NAME",          placeholder: "E.g. Elena Varma"    },
              { name: "mobile", label: "MOBILE NUMBER",  placeholder: "+91 00000 00000"     },
            ].map(({ name, label, placeholder }) => (
              <div key={name} className="flex-1 flex flex-col">
                <label className="tracking-cv-wide text-cv-label font-cv-bold text-cv-plum font-cv-sans mb-cv-sm">
                  {label}
                </label>
                <input
                  name={name}
                  value={form[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="border-none bg-transparent outline-none text-cv-base text-cv-charcoal py-cv-xs font-cv-serif italic w-full"
                />
                <div className="h-cv-px bg-cv-border mt-cv-sm" />
              </div>
            ))}
          </div>

          {/* Email */}
          <div className="flex flex-col mt-cv-xl">
            <label className="tracking-cv-wide text-cv-label font-cv-bold text-cv-plum font-cv-sans mb-cv-sm">
              EMAIL ADDRESS
            </label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="email@address.com"
              className="border-none bg-transparent outline-none text-cv-base text-cv-charcoal py-cv-xs font-cv-serif italic w-full"
            />
            <div className="h-cv-px bg-cv-border mt-cv-sm" />
          </div>

          {/* Textarea */}
          <div className="flex flex-col mt-cv-xl">
            <label className="tracking-cv-wide text-cv-label font-cv-bold text-cv-plum font-cv-sans mb-cv-sm">
              SPECIFIC NEEDS &amp; VISION
            </label>
            <textarea
              name="vision"
              value={form.vision}
              onChange={handleChange}
              placeholder="Tell us about the project, dimensions, or sentiments you wish to capture.."
              className="border-none bg-transparent outline-none text-cv-base text-cv-charcoal py-cv-xs font-cv-serif italic resize-none w-full leading-cv-relaxed"
              style={{ minHeight: "90px" }}
            />
            <div className="h-cv-px bg-cv-border mt-cv-sm" />
          </div>

          {/* Button */}
          <button className="mt-cv-2xl bg-cv-gold text-white border-none px-cv-2xl py-cv-md text-cv-label tracking-cv-wider font-cv-semibold cursor-pointer font-cv-sans rounded-cv-xs">
            SEND INQUIRY &nbsp;&rarr;
          </button>

        </div>
      </div>
    </div>
  );
}