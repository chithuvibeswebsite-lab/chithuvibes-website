/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { FOOTER } from "../../data/data";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialIcons = [
  { icon: FaFacebook,  label: "Facebook",  color: "#1877F2" },
  { icon: FaInstagram, label: "Instagram", color: "#E1306C" },
  { icon: FaXTwitter,  label: "X / Twitter", color: "#000000" },
  { icon: FaLinkedin,  label: "LinkedIn",  color: "#0A66C2" },
  { icon: FaYoutube,   label: "YouTube",   color: "#FF0000" },
];

export default function Footer() {
  return (
    <footer className="w-full box-border font-cv-sans px-cv-xl pt-cv-xl pb-cv-lg bg-[#F5F2EE]">

      {/* ── Main card ── */}
      <div
        className="rounded-cv-xl mb-cv-lg overflow-hidden"
style={{ background: "linear-gradient(135deg, #e8c96a 0%, #C9A84C 35%, #8B5A2B  100%)" }}     >
        {/* Subtle noise overlay for depth */}
        <div
          className="relative"
          style={{ backdropFilter: "none" }}
        >
          {/* Top micro-strip */}
          <div className="h-[2px] w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)" }} />

          <div
            className="flex flex-col gap-cv-3xl px-cv-xl py-cv-3xl md:grid md:gap-cv-3xl md:items-start md:px-cv-4xl md:py-cv-3xl"
            style={{ gridTemplateColumns: "1fr auto" }}
          >
            {/* ── Left: brand + contact ── */}
            <div className="w-full md:max-w-[460px]">

              {/* Eyebrow */}
              <p className="font-cv-serif text-cv-2xl tracking-cv-widest uppercase mb-cv-xs " style={{ color: "rgba(255,255,255,1)" }}>
                {FOOTER.tagline[0]}
              </p>

              <h2
                className="font-cv-serif font-cv-regular leading-cv-snug mb-cv-lg text-white"
                style={{ fontSize: "clamp(32px, 5vw, 64px)", textShadow: "0 2px 24px rgba(0,0,0,0.18)" }}
              >
                {FOOTER.tagline[1]}
              </h2>

              {/* Divider */}
              <div className="w-10 h-[1px] mb-cv-lg" style={{ background: "rgba(255,255,255,0.3)" }} />

              <p
                className="font-cv-sans text-cv-sm leading-cv-relaxed mb-cv-xl"
                style={{ color: "rgba(255,255,255,0.7)", maxWidth: 380 }}
              >
                {FOOTER.description}
              </p>

              {/* Contact */}
              <ul className="list-none p-0 m-0 flex flex-col gap-cv-sm">
                {[
                  { Icon: MapPin, content: FOOTER.address, href: null },
                  { Icon: Phone, content: FOOTER.phone, href: FOOTER.whatsappLink, external: true },
                  { Icon: Mail, content: FOOTER.email, href: `mailto:${FOOTER.email}` },
                ].map(({ Icon, content, href, external }, i) => (
                  <li key={i} className="flex items-start gap-cv-sm group">
                    <span className="mt-[3px] shrink-0 transition-transform duration-200 group-hover:scale-110">
                      <Icon width={13} height={13} stroke="rgba(255,255,255,0.6)" strokeWidth={2} fill="none" />
                    </span>
                    {href ? (
                      <a
                        href={href}
                        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                        className="font-cv-sans text-cv-xs leading-cv-normal transition-colors duration-200"
                        style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}
                        onMouseEnter={e => e.target.style.color = "rgba(255,255,255,1)"}
                        onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.7)"}
                      >
                        {content}
                      </a>
                    ) : (
                      <span className="font-cv-sans text-cv-xs leading-cv-normal" style={{ color: "rgba(255,255,255,0.7)" }}>
                        {content}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Right: nav + socials ── */}
            <div className="flex flex-col gap-cv-xl md:items-end md:gap-cv-3xl">

              {/* Nav links */}
              <ul className="list-none p-0 m-0 flex flex-col gap-cv-sm md:gap-cv-md md:items-end">
                {FOOTER.links.map(({ label, path }) => (
                  <li key={label}>
                    <Link
                      to={path}
                      className="relative font-cv-sans text-cv-sm font-cv-regular text-white hover:text-white/90 transition-colors duration-200 leading-none group"
                      style={{ textDecoration: "none" }}
                    >
                      <span className="relative">
                        {label}
                        <span
                          className="absolute -bottom-[2px] left-0 h-[1px] w-0 group-hover:w-full transition-all duration-300"
                          style={{ background: "rgba(255,255,255,0.7)" }}
                        />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Socials */}
              <div className="flex items-center gap-cv-sm">
                {FOOTER.socials.map((s, i) => {
                  const Icon = socialIcons[i].icon;
                  return (
                    <a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={socialIcons[i].label}
                      className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
                      style={{ background: "rgba(255,255,255,1)", border: "1px solid rgba(255,255,255,0.15)" }}
                      onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.22)"}
                      onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,1)"}
                    >
<Icon size={18} color={socialIcons[i].color} />                    </a>
                  );
                })}
              </div>

            </div>
          </div>

          {/* Bottom micro-strip */}
          <div className="h-[1px] w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)" }} />
        </div>
      </div>

      {/* ── Copyright bar ── */}
      <div className="flex flex-col gap-cv-xs px-cv-pxsm sm:flex-row sm:items-center sm:justify-between">
        <p className="m-0 font-cv-sans text-cv-xs text-cv-charcoal">
          {FOOTER.copyright}
        </p>
        <p className="m-0 font-cv-sans text-cv-xs text-cv-charcoal/80">
          Crafted with care in Chennai
        </p>
      </div>

    </footer>
  );
}