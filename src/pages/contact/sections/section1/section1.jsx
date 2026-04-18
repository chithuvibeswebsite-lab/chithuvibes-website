import { useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_w1ccqt4";
const EMAILJS_TEMPLATE_ID = "template_0obwdow";
const EMAILJS_PUBLIC_KEY = "tZ6uCr0jgGzlfsL97";

export default function BespokeJourney({ content }) {
  const [form, setForm] = useState({ name: "", mobile: "", email: "", vision: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.name || !form.email) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
      return;
    }
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          name: form.name,
          email: form.email,
          mobile: form.mobile,
          reply_to: form.email,
          message: form.vision,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("success");
      setForm({ name: "", mobile: "", email: "", vision: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const isSending = status === "sending";

  return (
    <section className="bg-cv-soft min-h-screen font-cv-sans py-cv-xl">

      <div className="text-center mb-cv-3xl px-cv-lg">
        <h1
          className="italic font-cv-light font-cv-serif text-cv-plum leading-cv-snug mb-cv-md"
          style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
        >
          {content.title}
        </h1>
        <p className="tracking-cv-wider text-cv-label text-cv-muted font-cv-medium">
          {content.subtitle}
        </p>
      </div>

      <div className="container mx-auto px-cv-xl md:px-cv-3xl">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-cv-3xl lg:gap-cv-4xl">

          <div className="w-full md:w-[480px] lg:w-[560px] shrink-0">
            <img
              src={content.image}
              alt="Fountain pen"
              className="w-full h-[320px] md:h-[600px] object-cover shadow-lg"
            />
          </div>

          <div className="flex-1 w-full max-w-[620px]">

            <div className="mb-cv-2xl">
              <p className="tracking-cv-wider text-cv-md text-cv-muted font-cv-medium">
                {content.formLabel}
              </p>

              {status !== "idle" && (
                <p
                  className={`mt-cv-sm font-cv-serif italic text-cv-md transition-all duration-500 ${
                    status === "success"
                      ? "text-cv-gold"
                      : status === "error"
                      ? "text-red-400"
                      : "text-cv-muted opacity-60"
                  }`}
                >
                  {status === "success" && content.statusMessages.success}
                  {status === "error" && content.statusMessages.error}
                  {status === "sending" && content.statusMessages.sending}
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-cv-xl">
              {content.fields.map(({ name, label, placeholder }) => (
                <div key={name} className="flex-1 flex flex-col min-w-0">
                  <label className="tracking-cv-wide text-cv-sm font-cv-bold text-cv-plum mb-cv-sm">
                    {label}
                  </label>
                  <input
                    name={name}
                    value={form[name]}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder={placeholder}
                    className="bg-transparent outline-none text-cv-md text-cv-muted py-cv-sm font-cv-serif italic w-full placeholder:text-cv-muted"
                  />
                  <div className="h-cv-px bg-cv-border mt-cv-sm" />
                </div>
              ))}
            </div>

            <div className="flex flex-col mt-cv-2xl">
              <label className="tracking-cv-wide text-cv-sm font-cv-bold text-cv-plum mb-cv-sm">
                {content.emailField.label}
              </label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                autoComplete="off"
                placeholder={content.emailField.placeholder}
                className="bg-transparent outline-none text-cv-md text-cv-muted py-cv-sm font-cv-serif italic placeholder:text-cv-muted"
              />
              <div className="h-cv-px bg-cv-border mt-cv-sm" />
            </div>

            <div className="flex flex-col mt-cv-2xl">
              <label className="tracking-cv-wide text-cv-sm font-cv-bold text-cv-plum mb-cv-sm">
                {content.visionField.label}
              </label>
              <textarea
                name="vision"
                value={form.vision}
                onChange={handleChange}
                autoComplete="off"
                placeholder={content.visionField.placeholder}
                className="bg-transparent outline-none text-cv-md text-cv-muted py-cv-sm font-cv-serif italic resize-none leading-cv-relaxed placeholder:text-cv-muted"
                rows={4}
              />
              <div className="h-cv-px bg-cv-border mt-cv-sm" />
            </div>

            <button
              disabled={isSending}
              onClick={handleSubmit}
              className="mt-cv-3xl inline-flex items-center gap-3 px-cv-2xl py-cv-md text-cv-label font-cv-semibold tracking-cv-wider uppercase text-cv-purple border border-[#f5e6a5]/40 bg-[linear-gradient(135deg,_#F8E9A1_0%,_#D4AF37_40%,_#B8962E_60%,_#F2D57E_100%)] shadow-[0_8px_24px_rgba(212,175,55,0.35)] transition-all duration-300 hover:scale-[1.03] hover:brightness-110 hover:shadow-[0_12px_32px_rgba(212,175,55,0.5)] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSending ? content.cta.sending : content.cta.default}
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}