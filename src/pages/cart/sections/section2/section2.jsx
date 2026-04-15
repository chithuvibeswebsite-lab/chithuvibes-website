import { useCart } from "../../../../context/cart.context";
import { useNavigate } from "react-router-dom";
import CartProductCard from "../../../../components/cartproduct_card/cartproduct_card";
import ProductCard from "../../../../components/product_card/product_card";

const recommendedProducts = [
  {
    id: "CAL001",
    name: "Name Calligraphy Frame",
    description: "Handcrafted personalised name in black ink...",
    price: 850,
    images: ["https://www.google.com/url?q=https://cdn.cgdream.ai/_next/image?url%3Dhttps%253A%252F%252Fapi.cgdream.ai%252Frails%252Factive_storage%252Fblobs%252Fredirect%252FeyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeVJkMXc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ%253D%253D--b9f8b02b561a0947fa431fdabc38c6eb82fbe9e5%252Ffaeb13cf-2e99-49a0-8b3f-a42a0fb07c56_1.png%26w%3D1080%26q%3D95&sa=D&source=editors&ust=1776253061334755&usg=AOvVaw3CK-bzjcSy2E0SXwwRw8Zv"]
  },
  {
    id: "CAL005",
    name: "Wax Seal Stamp Kit",
    description: "Complete kit with custom calligraphy stamp",
    price: 1500,
    images: ["https://res.cloudinary.com/demo/image/upload/product5.jpg"]
  },
  {
    id: "CAL006",
    name: "Personalised Journal",
    description: "Leather journal with calligraphy name",
    price: 950,
    images: ["https://res.cloudinary.com/demo/image/upload/product6.jpg"]
  },
];





function EmptyCart({ onBrowse }) {
  return (
    <div className="flex flex-col items-center justify-center py-cv-5xl text-center">
      <div className="text-cv-border mb-cv-lg">
        <svg width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      </div>
      <h3 className="mb-cv-sm font-cv-serif italic font-cv-regular text-cv-black text-cv-xl md:text-cv-2xl">
        Your cart is empty
      </h3>
      <p className="mb-cv-2xl font-cv-sans text-cv-sm font-cv-light text-cv-muted leading-cv-relaxed max-w-xs">
        Explore our calligraphy and gift collections and add something beautiful to your selection.
      </p>
      <button
        onClick={onBrowse}
        className="border border-cv-gold bg-transparent cursor-pointer font-cv-sans text-cv-xs font-cv-semibold tracking-cv-wide uppercase text-cv-gold px-cv-2xl py-cv-md rounded-cv-xs transition duration-cv-base hover:bg-cv-gold hover:text-white"
      >
        Browse Collection
      </button>
    </div>
  );
}

export default function Section2() {
  const {
    cartItems,
    clearCart,
    subtotal,
    openWhatsApp,
    setIsGift,
    setNote,
    isGift,
    note,
    calligraphyProducts,
    giftProducts
  } = useCart();


  const getRandomProducts = (products, count = 3) => {
    if (!Array.isArray(products)) return [];

    const result = [];
    const usedIndexes = new Set();

    while (result.length < count && usedIndexes.size < products.length) {
      const randomIndex = Math.floor(Math.random() * products.length);

      if (!usedIndexes.has(randomIndex)) {
        result.push(products[randomIndex]);
        usedIndexes.add(randomIndex);
      }
    }

    return result;
  };
  const randomGiftProducts = getRandomProducts(giftProducts, 3);
  const randomCalligraphyProducts = getRandomProducts(calligraphyProducts, 3);

  const navigate = useNavigate();

  const hasItems = cartItems.length > 0;

  return (
    <section className="bg-cv-white px-cv-lg py-cv-2xl pb-cv-5xl md:px-cv-4xl">
      <div className="w-full max-w-screen-lg mx-auto">

        {/* Empty Cart State */}
        {!hasItems && (
          <EmptyCart onBrowse={() => navigate("/calligraphy-products")} />
        )}

        {/* Filled Cart Layout */}
        {hasItems && (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-cv-3xl items-start">

            {/* Left Column - Cart Items */}
            <div>
              <div className="flex items-center justify-between mb-cv-2xl">
                <p className="font-cv-sans text-cv-sm font-cv-medium text-cv-charcoal">
                  {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your selection
                </p>
                <button
                  onClick={clearCart}
                  className="bg-transparent border-none cursor-pointer font-cv-sans text-cv-xs font-cv-medium text-cv-muted underline underline-offset-4 transition duration-cv-base hover:text-cv-gold"
                >
                  Clear all
                </button>
              </div>

              <div className="flex flex-col">
                {cartItems.map((item, index) => (
                  <CartProductCard
                    key={item.id}
                    item={item}
                    isLast={index === cartItems.length - 1}
                  />
                ))}
              </div>

              {/* Personal Touch Note */}
              <div className="flex gap-cv-md items-start mt-cv-3xl pt-cv-3xl border-t border-cv-border">
                <div className="shrink-0 mt-cv-xs">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2 L13.5 10 L22 12 L13.5 14 L12 22 L10.5 14 L2 12 L10.5 10 Z" fill="#C9A84C" opacity="0.85" />
                    <path d="M18 4 L18.8 7.2 L22 8 L18.8 8.8 L18 12 L17.2 8.8 L14 8 L17.2 7.2 Z" fill="#C9A84C" opacity="0.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-cv-xs font-cv-sans text-cv-base font-cv-semibold text-cv-black">
                    A Personal Touch
                  </h4>
                  <p className="font-cv-sans text-cv-sm font-cv-light text-cv-charcoal leading-cv-relaxed">
                    Once you inquire, <span className="font-cv-semibold text-cv-black">Jeya Chitra</span> will personally connect with you via WhatsApp to discuss customization and finalize your bespoke order.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Summary */}
            <div className="bg-cv-white rounded-cv-lg shadow-cv-md p-cv-xl border border-cv-border w-full mx-auto sticky top-24">
              <h3 className="mb-cv-xl font-cv-serif font-cv-regular text-cv-black text-cv-xl md:text-cv-2xl">
                Summary
              </h3>

              <div className="flex items-center justify-between mb-cv-sm">
                <span className="font-cv-sans text-cv-sm font-cv-light text-cv-charcoal">Subtotal</span>
                <span className="font-cv-sans text-cv-sm font-cv-semibold text-cv-black">
                  ₹{subtotal.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="flex items-center justify-between pb-cv-lg border-b border-cv-border mb-cv-lg">
                <span className="font-cv-sans text-cv-sm font-cv-light text-cv-charcoal">Studio Processing</span>
                <span className="font-cv-sans text-cv-xs font-cv-medium text-cv-muted italic">Complimentary</span>
              </div>

              {/* Gift Checkbox */}
              <div className="flex items-start gap-cv-sm mb-cv-lg">
                <input
                  type="checkbox"
                  id="is-gift"
                  checked={isGift}
                  onChange={(e) => setIsGift(e.target.checked)}
                  className="cursor-pointer w-cv-md h-cv-md accent-cv-gold mt-cv-xs"
                />
                <div>
                  <label htmlFor="is-gift" className="font-cv-sans text-cv-sm font-cv-medium text-cv-black cursor-pointer">
                    Is this a gift?
                  </label>
                  <p className="mt-cv-xs font-cv-sans text-cv-xs font-cv-light text-cv-muted leading-cv-normal">
                    Include a hand-written calligraphic note by Chithuvibes (+₹200–500)
                  </p>
                </div>
              </div>

              {/* Estimated Total */}
              <div className="flex items-end justify-between mb-cv-xl">
                <span className="font-cv-sans text-cv-base font-cv-medium text-cv-black">Estimated Total</span>
                <div className="text-right">
                  <p className="font-cv-serif font-cv-semibold text-cv-gold text-cv-xl md:text-cv-2xl">
                    ₹{subtotal.toLocaleString("en-IN")}
                  </p>
                  <p className="font-cv-sans text-cv-label font-cv-regular tracking-cv-wide uppercase text-cv-muted">
                    Final price on consultation
                  </p>
                </div>
              </div>

              {/* Note for Artist */}
              <p className="mb-cv-sm font-cv-sans text-cv-xs font-cv-medium tracking-cv-wide uppercase text-cv-muted">
                A Note for the Artist
              </p>
              <div className="relative mb-cv-lg">
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Share your personalization details or special requests..."
                  rows={4}
                  className="w-full font-cv-sans text-cv-xs font-cv-light text-cv-charcoal leading-cv-relaxed border border-cv-border rounded-cv-md p-cv-md resize-none outline-none transition duration-cv-base bg-cv-white focus:border-cv-gold"
                />
                <span className="absolute bottom-cv-sm right-cv-md font-cv-serif italic pointer-events-none select-none text-cv-border text-cv-md opacity-cv-soft">
                  Artistry in Motion
                </span>
              </div>

              {/* WhatsApp Button */}
              <button
                onClick={openWhatsApp}
                className="w-full flex items-center justify-center gap-cv-sm py-cv-md px-cv-lg rounded-cv-sm font-cv-sans text-cv-sm font-cv-semibold tracking-cv-wide uppercase text-white bg-cv-gold hover:bg-cv-plum transition duration-cv-base mb-cv-lg"
              >
                Finalize Design via WhatsApp
              </button>

              {/* Trust Badges */}
              <div className="flex flex-col gap-cv-sm mb-cv-lg">
                <div className="flex items-center gap-cv-sm">
                  <span className="text-cv-muted">🛡️</span>
                  <span className="font-cv-sans text-cv-xs font-cv-light tracking-cv-wide uppercase text-cv-muted">Secure Professional Handling</span>
                </div>
                <div className="flex items-center gap-cv-sm">
                  <span className="text-cv-muted">🚚</span>
                  <span className="font-cv-sans text-cv-xs font-cv-light tracking-cv-wide uppercase text-cv-muted">Insured Premium Shipping</span>
                </div>
                <div className="flex items-center gap-cv-sm">
                  <span className="text-cv-muted">⭐</span>
                  <span className="font-cv-sans text-cv-xs font-cv-light tracking-cv-wide uppercase text-cv-muted">100% Artist-Certified Original</span>
                </div>
              </div>

              {/* Continue Shopping */}
              <div className="text-center">
                <button
                  onClick={() => navigate("/calligraphy-products")}
                  className="bg-transparent border-none cursor-pointer font-cv-sans text-cv-xs font-cv-medium tracking-cv-wide uppercase text-cv-muted underline underline-offset-4 transition duration-cv-base hover:text-cv-gold"
                >
                  Continue Browsing Collection
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Recommended Products - Always Visible */}
        <div className="mt-cv-4xl">
          <p className="mb-cv-xl font-cv-sans text-cv-label font-cv-medium tracking-cv-widest uppercase text-cv-muted">
            You Might Also Like
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-cv-3xl">
            {randomGiftProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-cv-3xl mt-3">
            {randomCalligraphyProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}