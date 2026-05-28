export default function StudioLocation({ content }) {
    return (
        <section className="flex flex-col lg:flex-row bg-cv-soft font-cv-sans min-h-[520px]">

            <div className="lg:w-[42%] px-cv-2xl py-cv-3xl flex flex-col justify-center gap-cv-xl">
                <p className="tracking-cv-wider text-cv-label text-cv-muted font-cv-semibold uppercase">
                    {content.overline}
                </p>
                <h2 className="font-cv-serif italic font-cv-regular text-cv-plum leading-cv-snug m-0"
                    style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
                    {content.title}
                </h2>
                <div className="w-[52px] h-cv-px bg-cv-gold" />
                {content.details.map((d, i) => (
                    <div key={i} className="flex items-start gap-cv-sm text-[16px] text-cv-plum font-cv-regular">
                        <i className={`ti ${d.icon} text-cv-gold mt-[2px]`} aria-hidden="true" />
                        <p className="m-0 whitespace-pre-line">{d.text}</p>
                    </div>
                ))}
                <a href={content.directionsUrl}
                    className="mt-cv-sm inline-flex items-center gap-3 px-cv-2xl py-cv-md text-cv-label font-cv-semibold tracking-cv-wider uppercase text-cv-purple border border-[#f5e6a5]/40 bg-[linear-gradient(135deg,_#F8E9A1_0%,_#D4AF37_40%,_#B8962E_60%,_#F2D57E_100%)] shadow-[0_8px_24px_rgba(212,175,55,0.35)] hover:brightness-110 transition-all">
                    Get Directions
                </a>
            </div>

            <div className="flex-1 relative min-h-[300px] p-3">
                <span className="absolute top-6 right-5 z-10 bg-cv-plum text-cv-gold text-[11px] tracking-cv-wider uppercase font-cv-semibold px-cv-md py-cv-sm pointer-events-none">
                    Chithu Vibes
                </span>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.23372354216!2d80.1849862!3d12.956890699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f00538b072f%3A0x55edfc5adaf45498!2sCHITHU%20VIBES!5e0!3m2!1sen!2sin!4v1780011486091!5m2!1sen!2sin"
                    className="w-full h-full min-h-[300px] border-0"
                    allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </section>
    );
}