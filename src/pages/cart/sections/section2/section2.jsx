import { useState } from "react";
import { useCart } from "../../../../context/cart.context";
import { useNavigate } from "react-router-dom";
import CartProductCard from "../../../../components/cartproduct_card/cartproduct_card";
import ProductCard from "../../../../components/product_card/product_card";
import RecommendationCard from "../../../../components/recommendation_card/recommendation_card";
import { ShoppingCart, } from "lucide-react";

function EmptyCart({ onBrowse, content }) {
  return (
    <div className="flex flex-col items-center justify-center py-cv-5xl text-center">
      <div className="text-cv-border mb-cv-lg">
        <ShoppingCart size={120} />
      </div>
      <h3 className="mb-cv-sm font-cv-serif italic font-cv-regular text-cv-black text-cv-xl md:text-cv-2xl">
        {content.emptyCartTitle} 
      </h3>
      <p className="mb-cv-2xl font-cv-sans text-cv-sm font-cv-light text-cv-muted leading-cv-relaxed max-w-xs">
        {content.emptyCartDescription}
      </p>
      <button
        onClick={onBrowse}
        className="border border-cv-gold bg-transparent cursor-pointer font-cv-sans text-cv-xs font-cv-semibold tracking-cv-wide uppercase text-cv-gold px-cv-2xl py-cv-md rounded-cv-xs transition duration-cv-base hover:bg-cv-gold hover:text-white"
      >
        {content.emptyCartcta}
      </button>
    </div>
  );
}


function CartItems({ cartItems, clearCart, content }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-cv-2xl">
        <p className="font-cv-sans text-cv-sm font-cv-medium text-cv-charcoal">
          {cartItems.length} {cartItems.length === 1 ? "item" : "items"} {content.cartItemTitle[0]}
        </p>
        <button
          onClick={clearCart}
          className="bg-transparent border-none cursor-pointer font-cv-sans text-cv-xs font-cv-medium text-cv-muted underline underline-offset-4 transition duration-cv-base hover:text-cv-gold"
        >
          {content.cartItemcta}
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

  
      <div className="flex gap-cv-md items-start mt-cv-3xl pt-cv-3xl border-t border-cv-border">
        <div className="shrink-0 mt-cv-xs">
          <svg width="25" height="25" viewBox="0 0 24 24" fill="none">
            <path d="M12 2 L13.5 10 L22 12 L13.5 14 L12 22 L10.5 14 L2 12 L10.5 10 Z" fill="#C9A84C" opacity="0.85" />
            <path d="M18 4 L18.8 7.2 L22 8 L18.8 8.8 L18 12 L17.2 8.8 L14 8 L17.2 7.2 Z" fill="#C9A84C" opacity="0.5" />
          </svg>
        </div>
        <div>
          <h4 className="mb-cv-xs font-cv-sans text-cv-xl font-cv-semibold text-cv-black">
            {content.cartItemTitle[1]}
          </h4>
          <p className="font-cv-sans text-cv-md font-cv-light text-cv-charcoal leading-cv-relaxed">
            {content.cartItemDescription[0]} <span className="font-cv-semibold text-cv-black">{content.cartItemDescription[1]}</span> {content.cartItemDescription[2]}
          </p>
        </div>
      </div>
    </div>
  );
}


function CartSummary({ subtotal, isGift, setIsGift, note, setNote, openWhatsApp, navigate,content }) {
  return (
    <div className="bg-white rounded-cv-lg shadow-cv-md p-cv-xl border border-cv-border w-full">
      <h3 className="mb-cv-xl font-cv-serif font-cv-regular text-cv-black text-cv-xl md:text-cv-2xl">
        {content.cartSummaryTitle[0]}
      </h3>

      <div className="flex items-center justify-between mb-cv-sm">
        <span className="font-cv-sans text-cv-sm font-cv-light text-cv-charcoal">{content.cartSummaryTitle[1]}</span>
        <span className="font-cv-sans text-cv-sm font-cv-semibold text-cv-black">
          ₹{subtotal.toLocaleString("en-IN")}
        </span>
      </div>

      <div className="flex items-center justify-between pb-cv-lg border-b border-cv-border mb-cv-lg">
        <span className="font-cv-sans text-cv-sm font-cv-light text-cv-charcoal">{content.cartSummaryTitle[2]}</span>
        <span className="font-cv-sans text-cv-xs font-cv-medium text-cv-muted italic">{content.cartSummaryTitle[3]}</span>
      </div>

     
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
            {content.cartSummaryTitle[4]}
          </label>
          <p className="mt-cv-xs font-cv-sans text-cv-xs font-cv-light text-cv-muted leading-cv-normal">
            {content.cartSummaryTitle[5]}
          </p>
        </div>
      </div>

      
      <div className="flex items-end justify-between mb-cv-xl">
        <span className="font-cv-sans text-cv-base font-cv-medium text-cv-black">Estimated Total</span>
        <div className="text-right">
          <p className="font-cv-serif font-cv-semibold text-cv-gold text-cv-xl md:text-cv-2xl">
            ₹{subtotal.toLocaleString("en-IN")}
          </p>
          <p className="font-cv-sans text-cv-label font-cv-regular tracking-cv-wide uppercase text-cv-muted">
            {content.cartSummaryTitle[6]}
          </p>
        </div>
      </div>

      
      <p className="mb-cv-sm font-cv-sans text-cv-xs font-cv-medium tracking-cv-wide uppercase text-cv-muted">
        {content.cartSummaryDescription[0]}
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
          {content.cartSummaryDescription[1]}
        </span>
      </div>

      
      <button
        onClick={openWhatsApp}
        className="w-full flex items-center justify-center gap-cv-sm py-cv-md px-cv-lg rounded-cv-sm font-cv-sans text-cv-sm font-cv-semibold tracking-cv-wide uppercase text-white bg-cv-gold hover:bg-cv-plum transition duration-cv-base mb-cv-lg"
      >
        {content.cartSummarycta}
      </button>

      
      <div className="flex flex-col gap-cv-sm mb-cv-lg">
        <div className="flex items-center gap-cv-sm">
          <span className="text-cv-muted">🛡️</span>
          <span className="font-cv-sans text-cv-xs font-cv-light tracking-cv-wide uppercase text-cv-muted">{content.cartSummaryTrustBadges[0]}</span>
        </div>
        <div className="flex items-center gap-cv-sm">
          <span className="text-cv-muted">🚚</span>
          <span className="font-cv-sans text-cv-xs font-cv-light tracking-cv-wide uppercase text-cv-muted">{content.cartSummaryTrustBadges[1]}</span>
        </div>
        <div className="flex items-center gap-cv-sm">
          <span className="text-cv-muted">⭐</span>
          <span className="font-cv-sans text-cv-xs font-cv-light tracking-cv-wide uppercase text-cv-muted">{content.cartSummaryTrustBadges[2]}</span>
        </div>
      </div>

      
      <div className="text-center">
        <button
          onClick={() => navigate("/calligraphy-products")}
          className="bg-transparent border-none cursor-pointer font-cv-sans text-cv-xs font-cv-medium tracking-cv-wide uppercase text-cv-muted underline underline-offset-4 transition duration-cv-base hover:text-cv-gold"
        >
          {content.cartSummarycta[1]}
        </button>
      </div>
    </div>
  );
}


function MobileSummaryBar({ subtotal, onOpen,content }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-cv-white border-t border-cv-border px-cv-lg py-cv-sm flex justify-between items-center lg:hidden z-40 shadow-cv-md">
      <div>
        <p className="font-cv-sans text-cv-xs font-cv-light text-cv-muted uppercase tracking-cv-wide">{content.mobileSummaryBarTitle[0]}</p>
        <p className="font-cv-serif font-cv-semibold text-cv-gold text-cv-xl">
          ₹{subtotal.toLocaleString("en-IN")}
        </p>
      </div>
      <button
        onClick={onOpen}
        className="bg-cv-gold text-white font-cv-sans text-cv-xs font-cv-semibold tracking-cv-wide uppercase px-cv-xl py-cv-md rounded-cv-sm hover:bg-cv-plum transition duration-cv-base"
      >
        {content.mobileSummaryBarcta[0]}
      </button>
    </div>
  );
}


function MobileSummaryDrawer({ show, onClose, children, content }) {
  return (
    <div className={`fixed inset-0 z-50 ${show ? "visible" : "invisible"}`}>
      
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${show ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />
      
      <div
        className={`absolute bottom-0 left-0 right-0 top-30 bg-cv-white rounded-t-2xl max-h-[90vh] overflow-y-auto transition-transform duration-300 ${show ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="sticky top-0 bg-cv-white flex justify-between items-center px-cv-lg pt-cv-lg pb-cv-md border-b border-cv-border">
          <h3 className="font-cv-serif font-cv-regular text-cv-black text-cv-xl">{content.mobileDrawerTitle[0]}</h3>
          <button
            onClick={onClose}
            className="bg-transparent border-none cursor-pointer font-cv-sans text-cv-muted text-cv-lg hover:text-cv-black transition"
          >
            ✕
          </button>
        </div>
        <div className="p-cv-lg">
          {children}
        </div>
      </div>
    </div>
  );
}


export default function CartPage({content}) {
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
    giftProducts,
  } = useCart();

  const [showSummary, setShowSummary] = useState(false);
  const navigate = useNavigate();

  const hasItems = cartItems.length > 0;

const getFilteredProducts = (products) => {
  if (!Array.isArray(products)) return [];

  const cartIds = new Set(cartItems.map((item) => item.id));

  return products.filter((product) => !cartIds.has(product.id));
};

const getRandomProducts = (products, count = 3) => {
  const filtered = getFilteredProducts(products);

  console.log(products, filtered)

  const result = [];
  const usedIndexes = new Set();

  while (result.length < count && usedIndexes.size < filtered.length) {
    // eslint-disable-next-line react-hooks/purity
    const randomIndex = Math.floor(Math.random() * filtered.length);

    if (!usedIndexes.has(randomIndex)) {
      result.push(filtered[randomIndex]);
      usedIndexes.add(randomIndex);
    }
  }

  return result;
};

  const randomGiftProducts = getRandomProducts(giftProducts, 3);
  const randomCalligraphyProducts = getRandomProducts(calligraphyProducts, 3);

  const summaryProps = { subtotal, isGift, setIsGift, note, setNote, openWhatsApp, navigate };

  return (
    <section className="bg-cv-white px-cv-lg py-cv-2xl pb-cv-5xl md:px-cv-4xl">
      <div className="w-full max-w-screen-2xl mx-auto">

        
        {!hasItems && (
          <EmptyCart onBrowse={() => navigate("/calligraphy-products")} content={content} />
        )}

        
        {hasItems && (
          <>
            
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_500px] gap-cv-3xl xl:gap-cv-4xl items-start">

              
              <CartItems cartItems={cartItems} clearCart={clearCart} navigate={navigate} content={content}/>

              
              <div className="hidden lg:block sticky top-24">
                <CartSummary {...summaryProps} content={content}/>
              </div>
            </div>

            
            <MobileSummaryBar subtotal={subtotal} onOpen={() => setShowSummary(true)} content={content}/>

            
            <MobileSummaryDrawer show={showSummary} onClose={() => setShowSummary(false)} content={content}>
              <CartSummary {...summaryProps} content={content}/>
            </MobileSummaryDrawer>
          </>
        )}

        
        <div className="mt-cv-4xl">
          <p className="mb-cv-xl font-cv-sans text-cv-label font-cv-medium tracking-cv-widest uppercase text-cv-muted">
            {content.title[0]}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-cv-3xl">
            {randomGiftProducts.map((product) => (
              <RecommendationCard key={product.id} product={product} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-cv-3xl mt-3">
            {randomCalligraphyProducts.map((product) => (
              <RecommendationCard key={product.id} product={product} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}