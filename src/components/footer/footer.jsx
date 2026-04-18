import { Link } from "react-router-dom";
import { FOOTER } from "../../data/data";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialIcons = [
  <FaFacebook size={20} color="white" />,
  <FaInstagram size={20} color="white" />,
  <FaXTwitter size={20} color="white" />,
  <FaLinkedin size={20} color="white" />,
  <FaYoutube size={20} color="white" />,
];

export default function Footer() {
  return (
    <footer
      className="w-full box-border font-cv-sans px-cv-xl pt-cv-xl pb-cv-lg"
      style={{ backgroundColor: "#EDEAEA" }}
    >
      <div className="bg-cv-gold rounded-cv-xl mb-cv-lg">
        <div
          className="flex flex-col gap-cv-3xl px-cv-xl py-cv-3xl md:grid md:gap-cv-3xl md:items-start md:px-cv-4xl md:py-cv-3xl"
          style={{ gridTemplateColumns: "1fr auto" }}
        >

          <div className="w-full md:max-w-[460px]">
            <h2
              className="font-cv-serif font-cv-regular leading-cv-snug mb-cv-lg text-white"
              style={{ fontSize: "clamp(32px, 5vw, 64px)" }}
            >
              {FOOTER.tagline[0]}<br />{FOOTER.tagline[1]}
            </h2>
            <p
              className="font-cv-sans text-cv-sm leading-cv-normal mb-cv-lg"
              style={{ color: "rgba(255,255,255,0.85)", maxWidth: 380 }}
            >
              {FOOTER.description}
            </p>

            <ul className="list-none p-0 m-0 flex flex-col gap-cv-sm mb-cv-xl">
              <li className="flex items-start gap-cv-sm">
                <span className="mt-[2px]">
                  <MapPin width={14} height={14} stroke="rgba(255,255,255,0.85)" strokeWidth={2} fill="none" />
                </span>
                <span className="font-cv-sans text-cv-xs leading-cv-normal" style={{ color: "rgba(255,255,255,0.85)" }}>
                  {FOOTER.address}
                </span>
              </li>
              <li className="flex items-center gap-cv-sm">
                <Phone width={14} height={14} stroke="rgba(255,255,255,0.85)" strokeWidth={2} fill="none" />
                <a href={FOOTER.whatsappLink} target="_blank" rel="noreferrer" className="font-cv-sans text-cv-xs" style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none" }}>
                  {FOOTER.phone}
                </a>
              </li>
              <li className="flex items-center gap-cv-sm">
                <Mail width={14} height={14} stroke="rgba(255,255,255,0.85)" strokeWidth={2} fill="none" />
                <a href={`mailto:${FOOTER.email}`} className="font-cv-sans text-cv-xs" style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none" }}>
                  {FOOTER.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-cv-xl md:items-end md:gap-cv-3xl">
            <ul className="list-none p-0 m-0 flex flex-col gap-cv-md md:gap-cv-lg">
              {FOOTER.links.map(({ label, path }) => (
                <li className="text-start md:text-end" key={label}>
                  <Link to={path} className="bg-transparent border-none cursor-pointer p-0 font-cv-sans text-cv-base font-cv-regular text-white leading-none">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-cv-md">
              {FOOTER.socials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="flex items-center justify-center opacity-cv-soft">
                  {socialIcons[i]}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="flex flex-col gap-cv-sm px-cv-pxsm pt-cv-pxsm sm:flex-row sm:items-center sm:justify-between sm:gap-0">
        <p className="m-0 font-cv-sans text-cv-xs text-cv-gold">
          {FOOTER.copyright}
        </p>
      </div>
    </footer>
  );
}