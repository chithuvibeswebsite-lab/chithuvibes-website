import { Link } from "react-router-dom";



const FacebookIcon  = () => <svg width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>;
const InstagramIcon = () => <svg width="20" height="20" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" /></svg>;
const XIcon         = () => <svg width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>;
const LinkedInIcon  = () => <svg width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>;
const YouTubeIcon   = () => <svg width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#C9A84C" /></svg>;

export default function Footer() {

  const col1 = [
    { label: "Home",       id: "hero", path: "/"   },
    { label: "About",      id: "heritage" , path: "/about" },
    { label: "Calligraphy Products",    id: "collection", path: "/calligraphy-products" },
    { label: "Gift Products", id: "masterpieces", path: "/gift-products" },
    {label: "Contact",     id: "contact", path: "/contact" },
  ];


  const socials = [
    { icon: <FacebookIcon />,  href: "#" },
    { icon: <InstagramIcon />, href: "#" },
    { icon: <XIcon />,         href: "#" },
    { icon: <LinkedInIcon />,  href: "#" },
    { icon: <YouTubeIcon />,   href: "#" },
  ];

  return (
    <footer className="w-full box-border font-cv-sans px-cv-xl pt-cv-xl pb-cv-lg"
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
              Craft your story<br />with us
            </h2>
            <p
              className="font-cv-sans text-cv-sm leading-cv-normal"
              style={{ color: "rgba(255,255,255,0.85)", maxWidth: 380 }}
            >
              Connect with CHITHU VIBES for bespoke laser engraving and Tamil calligraphy
            </p>
          </div>

          
          <div className="flex flex-col gap-cv-xl md:items-end md:gap-cv-3xl">

            
            <div className="flex gap-cv-3xl md:gap-cv-4xl">
              {[col1].map((col, ci) => (
                <ul key={ci} className="list-none p-0 m-0 flex flex-col gap-cv-md md:gap-cv-lg">
                  {col.map(({ label, path }) => (
                    <li key={label}>
                      <Link 
                        to={path}
                        className="bg-transparent border-none cursor-pointer p-0 text-left font-cv-sans text-cv-base font-cv-regular text-white leading-none"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>

           
            <div className="flex items-center gap-cv-md md:gap-cv-lg">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center opacity-cv-soft"
                >
                  {s.icon}
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>

      
      <div className="flex flex-col gap-cv-sm px-cv-pxsm pt-cv-pxsm sm:flex-row sm:items-center sm:justify-between sm:gap-0">

        <p className="m-0 font-cv-sans text-cv-xs text-cv-gold">
          © 2026 CHITHU VIBES. All rights reserved.
        </p>

        {/* <div className="flex flex-wrap gap-cv-md md:gap-cv-lg">
          {["Privacy policy", "Terms of service", "Cookie settings"].map((t) => (
            <button
              key={t}
              className="bg-transparent border-none cursor-pointer p-0 underline underline-offset-[3px] font-cv-sans text-cv-xs text-cv-gold"
            >
              {t}
            </button>
          ))}
        </div> */}

      </div>

    </footer>
  );
}