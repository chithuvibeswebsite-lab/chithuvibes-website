import { useCart } from "../../context/cart.context";
import { useState } from "react";

function CartIcon() {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ProductImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageList = Array.isArray(images) ? images : [images];
  // const imageList=images.split(",").map((url) => url.trim());

  const next = () => setCurrentIndex((prev) => (prev + 1) % imageList.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + imageList.length) % imageList.length);

  return (
    <div className="relative w-full rounded-cv-md overflow-hidden bg-cv-soft aspect-[4/3] group">
      <img
        src={imageList[currentIndex]}
        alt="product"
        className="w-full h-full object-cover transition-all duration-cv-base"
        onError={(e) => (e.target.style.display = "none")}
      />

      {imageList.length > 1 && (
        <>
          <button onClick={prev} className="absolute left-cv-xs top-1/2 -translate-y-1/2 bg-cv-white/80 hover:bg-cv-white w-8 h-8 flex items-center justify-center rounded-cv-full opacity-0 group-hover:opacity-100 transition duration-cv-base">←</button>
          <button onClick={next} className="absolute right-cv-xs top-1/2 -translate-y-1/2 bg-cv-white/80 hover:bg-cv-white w-8 h-8 flex items-center justify-center rounded-cv-full opacity-0 group-hover:opacity-100 transition duration-cv-base">→</button>

          <div className="absolute bottom-cv-xs left-1/2 -translate-x-1/2 flex gap-cv-px">
            {imageList.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-cv-px h-cv-px rounded-cv-full transition-all ${idx === currentIndex ? "bg-cv-gold w-cv-sm" : "bg-cv-white/70"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function AddToCartButton({ product }) {
  const { cartItems, addToCart } = useCart();
  const isInCart = cartItems.some((item) => item.id === product.id);

  return (
    <button
      onClick={() => addToCart(product)}
      className={`flex items-center justify-center border rounded-cv-xs cursor-pointer transition duration-cv-base font-cv-sans text-cv-label font-cv-medium tracking-cv-wider uppercase px-cv-md py-cv-xs min-h-9 ${
        isInCart
          ? "bg-cv-gold border-cv-gold text-white"
          : "bg-transparent border-cv-border text-cv-muted hover:bg-cv-gold hover:border-cv-gold hover:text-white"
      }`}
    >
      {isInCart ? <CheckIcon /> : <CartIcon />}
    </button>
  );
}

export default function ProductCard({ product }) {

  return (
    <div className="flex flex-col h-full">
      <ProductImageCarousel images={product.images} />

      <div className="flex-1 flex flex-col pt-cv-md">
        <h3 className="mb-cv-xs font-cv-serif font-cv-semibold text-cv-black italic text-cv-base leading-cv-snug">
          {product.name}
        </h3>
        <p className="mb-cv-md font-cv-sans text-cv-xs font-cv-light text-cv-muted leading-cv-normal flex-1">
          {product.description}
        </p>

        <div className="flex items-center justify-between gap-cv-sm mt-auto">
          <span className="font-cv-sans text-cv-sm font-cv-semibold text-cv-gold">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}