import { useState } from "react";
import { useCart } from "../../../../context/cart.context";

// Mock recommended additions
const recommended = [
  {
    id: "rec-1",
    name: "Matching Calligraphic Miniature",
    description: "Fridge magnet version of your bespoke design",
    price: 850,
    image: "/images/products/tamil-inscription-1.jpg",
  },
  {
    id: "rec-2",
    name: "Matching Calligraphic Miniature",
    description: "Fridge magnet version of your bespoke design",
    price: 850,
    image: "/images/products/tamil-inscription-1.jpg",
  },
];

// Icons
function CustomizableIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  );
}

function ScissorsIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.293-.regenerate" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 2 L13.5 10 L22 12 L13.5 14 L12 22 L10.5 14 L2 12 L10.5 10 Z" fill="var(--color-cv-gold)" opacity="0.85" />
      <path d="M18 4 L18.8 7.2 L22 8 L18.8 8.8 L18 12 L17.2 8.8 L14 8 L17.2 7.2 Z" fill="var(--color-cv-gold)" opacity="0.5" />
    </svg>
  );
}

// Fallback cart items for when cart is empty (demo purposes)
const demoItems = [
  {
    id: 1,
    name: "The Golden Script - Hand-Drawn Inscription",
    description: "A bespoke calligraphic piece tailored to your story, using archival inks and gold leaf accents.",
    tag: "Customizable Text",
    tagIcon: "pen",
    price: 8500,
    image: "/images/products/tamil-inscription-1.jpg",
    quantity: 1,
  },
  {
    id: 4,
    name: "The Heirloom Crate - Laser-Etched",
    description: "Solid teak wood box featuring intricate traditional motifs, perfect for preserving precious memories.",
    tag: "Teak Wood Finish",
    tagIcon: "grid",
    price: 12200,
    image: "/images/products/box-1.jpg",
    quantity: 1,
  },
];

export default function Section2() {
  const { cartItems, updateQuantity, addToCart, subtotal } = useCart();
  const [isGift, setIsGift] = useState(true);
  const [note, setNote] = useState("");

  // Use real cart items if available, else demo
  const displayItems = cartItems.length > 0 ? cartItems : demoItems;
  const displaySubtotal = cartItems.length > 0 ? subtotal : demoItems.reduce((s, i) => s + i.price * i.quantity, 0);

  function openWhatsApp() {
    const itemsList = displayItems
      .map((i) => `${i.name} x${i.quantity} — ₹${(i.price * i.quantity).toLocaleString()}`)
      .join("\n");
    const giftNote = isGift ? "\n\n🎁 This is a gift order." : "";
    const artistNote = note ? `\n\nNote for artist: ${note}` : "";
    window.open(
      "https://wa.me/919876543210?text=" +
        encodeURIComponent(
          `Hi! I'd like to finalize my Chithu Vibes order:\n\n${itemsList}\n\nEstimated Total: ₹${displaySubtotal.toLocaleString()}${giftNote}${artistNote}`
        ),
      "_blank"
    );
  }

  return (
    <section className="bg-cv-white px-cv-lg py-cv-2xl md:px-cv-4xl pb-cv-5xl">
      <div
        className="w-full mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-cv-3xl items-start"
        style={{ maxWidth: "1100px" }}
      >

        {/* ── LEFT COLUMN ── */}
        <div>

          {/* Cart Items */}
          <div className="flex flex-col gap-cv-2xl mb-cv-3xl">
            {displayItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-cv-lg border-b border-cv-border pb-cv-2xl"
              >
                {/* Product image */}
                <div
                  className="shrink-0 rounded-cv-md overflow-hidden bg-cv-soft"
                  style={{ width: "110px", height: "110px" }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                </div>

                {/* Product details */}
                <div className="flex-1 min-w-0">
                  <h3
                    className="m-0 mb-cv-xs font-cv-serif font-cv-semibold text-cv-black leading-cv-snug"
                    style={{ fontSize: "clamp(15px, 1.8vw, 19px)" }}
                  >
                    {item.name}
                  </h3>
                  <p className="m-0 mb-cv-sm font-cv-sans text-cv-xs font-cv-light text-cv-muted leading-cv-normal">
                    {item.description}
                  </p>

                  {/* Tag */}
                  {item.tag && (
                    <div className="flex items-center gap-cv-xs mb-cv-md">
                      <span className="text-cv-muted">
                        {item.tagIcon === "pen" ? <CustomizableIcon /> : <GridIcon />}
                      </span>
                      <span className="font-cv-sans text-cv-label font-cv-medium tracking-cv-wide uppercase text-cv-muted">
                        {item.tag}
                      </span>
                    </div>
                  )}

                  {/* Price + QTY */}
                  <div className="flex items-center justify-between gap-cv-sm flex-wrap">
                    <span className="font-cv-sans text-cv-base font-cv-semibold text-cv-gold">
                      ₹ {(item.price * item.quantity).toLocaleString()}
                    </span>

                    {/* Quantity selector */}
                    <div
                      className="flex items-center border border-cv-border rounded-cv-xs overflow-hidden"
                      style={{ height: "34px" }}
                    >
                      <button
                        onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                        className="px-cv-sm bg-transparent border-none cursor-pointer font-cv-sans text-cv-base text-cv-charcoal font-cv-light transition"
                        style={{ transitionDuration: "var(--duration-cv-fast)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--color-cv-soft)")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                      >
                        −
                      </button>
                      <span className="px-cv-sm font-cv-sans text-cv-sm font-cv-medium text-cv-black">
                        {item.quantity || 1}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                        className="px-cv-sm bg-transparent border-none cursor-pointer font-cv-sans text-cv-base text-cv-charcoal font-cv-light transition"
                        style={{ transitionDuration: "var(--duration-cv-fast)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--color-cv-soft)")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* A Personal Touch */}
          <div className="flex gap-cv-md items-start">
            <div className="shrink-0 mt-cv-xs">
              <SparkleIcon />
            </div>
            <div>
              <h4 className="m-0 mb-cv-xs font-cv-sans text-cv-base font-cv-semibold text-cv-black">
                A Personal Touch
              </h4>
              <p className="m-0 font-cv-sans text-cv-sm font-cv-light text-cv-charcoal leading-cv-relaxed">
                Once you inquire,{" "}
                <strong className="font-cv-semibold text-cv-black">
                  Jeya Chitra will personally connect with you
                </strong>{" "}
                via WhatsApp to discuss customization and finalize your bespoke order. Each piece is crafted specifically for your vision.
              </p>
            </div>
          </div>

        </div>

        {/* ── RIGHT COLUMN — Summary Card ── */}
        <div
          className="bg-white rounded-cv-lg shadow-cv-md p-cv-xl border border-cv-border"
          style={{ position: "sticky", top: "88px" }}
        >
          <h3 className="m-0 mb-cv-xl font-cv-serif font-cv-regular text-cv-black" style={{ fontSize: "clamp(22px, 2.5vw, 28px)" }}>
            Summary
          </h3>

          {/* Subtotal row */}
          <div className="flex items-center justify-between mb-cv-sm">
            <span className="font-cv-sans text-cv-sm font-cv-light text-cv-charcoal">Subtotal</span>
            <span className="font-cv-sans text-cv-sm font-cv-semibold text-cv-black">
              ₹ {displaySubtotal.toLocaleString()}
            </span>
          </div>

          {/* Studio processing */}
          <div className="flex items-center justify-between pb-cv-lg border-b border-cv-border mb-cv-lg">
            <span className="font-cv-sans text-cv-sm font-cv-light text-cv-charcoal">Studio Processing</span>
            <span className="font-cv-sans text-cv-xs font-cv-medium text-cv-muted italic">Complimentary</span>
          </div>

          {/* Gift checkbox */}
          <div className="flex items-start gap-cv-sm mb-cv-lg">
            <div className="shrink-0 mt-cv-xs">
              <input
                type="checkbox"
                id="is-gift"
                checked={isGift}
                onChange={(e) => setIsGift(e.target.checked)}
                className="cursor-pointer"
                style={{
                  accentColor: "var(--color-cv-gold)",
                  width: "16px",
                  height: "16px",
                }}
              />
            </div>
            <div>
              <label
                htmlFor="is-gift"
                className="font-cv-sans text-cv-sm font-cv-medium text-cv-black cursor-pointer"
              >
                Is this a gift ?
              </label>
              <p className="m-0 font-cv-sans text-cv-xs font-cv-light text-cv-muted leading-cv-normal mt-cv-xs">
                Include a hand-written calligraphic note by Chithuvibes (+₹200-500)
              </p>
            </div>
          </div>

          {/* Estimated Total */}
          <div className="flex items-end justify-between mb-cv-xl">
            <span className="font-cv-sans text-cv-base font-cv-medium text-cv-black">Estimated Total</span>
            <div className="text-right">
              <p className="m-0 font-cv-serif font-cv-semibold text-cv-gold" style={{ fontSize: "clamp(20px, 2vw, 26px)" }}>
                ₹ {displaySubtotal.toLocaleString()}
              </p>
              <p className="m-0 font-cv-sans text-cv-label font-cv-regular tracking-cv-wide uppercase text-cv-muted">
                Final price on consultation
              </p>
            </div>
          </div>

          {/* Note for artist */}
          <p className="m-0 mb-cv-sm font-cv-sans text-cv-xs font-cv-medium tracking-cv-wide uppercase text-cv-muted">
            A Note for the Artist
          </p>
          <div className="relative mb-cv-lg">
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Share your personalization details or special requests..."
              rows={4}
              className="w-full font-cv-sans text-cv-xs font-cv-light text-cv-charcoal leading-cv-relaxed border border-cv-border rounded-cv-md p-cv-md resize-none outline-none transition"
              style={{
                transitionDuration: "var(--duration-cv-base)",
                backgroundColor: "var(--color-cv-white)",
              }}
              onFocus={(e) => (e.target.style.borderColor = "var(--color-cv-gold)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--color-cv-border)")}
            />
            {/* Watermark */}
            <span
              className="absolute bottom-cv-sm right-cv-md font-cv-serif italic text-cv-border pointer-events-none select-none"
              style={{ fontSize: "22px", opacity: 0.5 }}
            >
              Artistry in Motion
            </span>
          </div>

          {/* Finalize button */}
          <button
            onClick={openWhatsApp}
            className="w-full flex items-center justify-center gap-cv-sm py-cv-md px-cv-lg rounded-cv-sm font-cv-sans text-cv-sm font-cv-semibold tracking-cv-wide uppercase text-white border-none cursor-pointer transition mb-cv-lg"
            style={{
              backgroundColor: "var(--color-cv-gold)",
              transitionDuration: "var(--duration-cv-base)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--color-cv-plum)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--color-cv-gold)")
            }
          >
            <ChatIcon />
            Finalize Design via WhatsApp
          </button>

          {/* Trust badges */}
          <div className="flex flex-col gap-cv-sm mb-cv-lg">
            {[
              { icon: <ShieldIcon />, label: "Secure Professional Handling" },
              { icon: <TruckIcon />, label: "Insured Premium Shipping" },
              { icon: <CustomizableIcon />, label: "100% Artist-Certified Original" },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-cv-sm">
                <span className="text-cv-muted">{icon}</span>
                <span className="font-cv-sans text-cv-xs font-cv-light tracking-cv-wide uppercase text-cv-muted">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Continue browsing */}
          <div className="text-center">
            <button className="bg-transparent border-none cursor-pointer font-cv-sans text-cv-xs font-cv-medium tracking-cv-wide uppercase text-cv-muted underline underline-offset-4 transition"
              style={{ transitionDuration: "var(--duration-cv-base)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-cv-gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-cv-muted)")}
            >
              Continue Browsing Collection
            </button>
          </div>

        </div>
      </div>

      {/* ── RECOMMENDED ADDITIONS ── */}
      <div className="w-full mx-auto mt-cv-5xl" style={{ maxWidth: "1100px" }}>
        <p className="m-0 mb-cv-xl font-cv-sans text-cv-label font-cv-medium tracking-cv-widest uppercase text-cv-muted">
          Recommended Additions
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-cv-lg">
          {recommended.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-cv-md border border-cv-border rounded-cv-md p-cv-md bg-white"
            >
              {/* Image */}
              <div
                className="shrink-0 rounded-cv-sm overflow-hidden bg-cv-soft"
                style={{ width: "64px", height: "64px" }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  onError={(e) => (e.target.style.display = "none")}
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h4 className="m-0 mb-cv-xs font-cv-sans text-cv-sm font-cv-medium text-cv-black leading-cv-snug">
                  {item.name}
                </h4>
                <p className="m-0 font-cv-sans text-cv-xs font-cv-light text-cv-muted">
                  {item.description}
                </p>
              </div>

              {/* Add button */}
              <button
                onClick={() => addToCart(item)}
                className="shrink-0 border border-cv-gold bg-transparent cursor-pointer font-cv-sans text-cv-xs font-cv-semibold tracking-cv-wide uppercase text-cv-gold px-cv-md py-cv-xs rounded-cv-xs transition"
                style={{
                  transitionDuration: "var(--duration-cv-base)",
                  whiteSpace: "nowrap",
                  minHeight: "36px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-cv-gold)";
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "var(--color-cv-gold)";
                }}
              >
                Add + ₹{item.price}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}