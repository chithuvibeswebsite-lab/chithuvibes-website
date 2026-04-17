import { useCart } from "../../context/cart.context";
import { useState, useEffect } from "react";
import { ShoppingCart, Check } from "lucide-react";


export function ProductImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const imageList = Array.isArray(images) ? images : [images];

  const goTo = (idx) => {
    setFading(true);
    setTimeout(() => {
      setCurrentIndex(idx);
      setFading(false);
    }, 200);
  };

  const next = () => goTo((currentIndex + 1) % imageList.length);
  const prev = () => goTo((currentIndex - 1 + imageList.length) % imageList.length);

  useEffect(() => {
    if (imageList.length <= 1) return;
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [imageList.length, currentIndex]);

  return (
    <div className="relative w-full rounded-cv-md overflow-hidden bg-cv-soft aspect-7/8 group">
      <div className="w-full aspect-4/5 overflow-hidden">
        <img
          src={imageList[currentIndex]}
          alt="product"
          style={{ opacity: fading ? 0 : 1, transition: "opacity 200ms ease" }}
          className="w-full h-full object-cover"
          onError={(e) => (e.target.style.display = "none")}
        />
      </div>

      {imageList.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 
              bg-white/80 hover:bg-white 
              w-9 h-9 flex items-center justify-center rounded-full
              opacity-0 group-hover:opacity-100 
              -translate-x-2 group-hover:translate-x-0
              scale-90 group-hover:scale-100
              shadow-md hover:shadow-lg
              transition-all duration-300"
          >
            ←
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 
              bg-white/80 hover:bg-white 
              w-9 h-9 flex items-center justify-center rounded-full
              opacity-0 group-hover:opacity-100 
              translate-x-2 group-hover:translate-x-0
              scale-90 group-hover:scale-100
              shadow-md hover:shadow-lg
              transition-all duration-300"
          >
            →
          </button>
          <div className="absolute bottom-cv-xs left-1/2 -translate-x-1/2 flex gap-cv-px">
            {imageList.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`h-1 rounded transition-all duration-300 ${
                  idx === currentIndex ? "bg-cv-gold w-cv-sm" : "bg-white/70 w-10"
                }`}
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
      className={`group flex items-center justify-center gap-2 border rounded-cv-xs cursor-pointer 
      transition-all duration-300 font-cv-sans text-cv-label font-cv-medium tracking-cv-wider uppercase 
      px-cv-md py-cv-xs min-h-9
      ${isInCart
          ? "bg-cv-gold border-cv-gold text-white"
          : "bg-transparent border-cv-border text-cv-muted hover:bg-cv-gold hover:border-cv-gold hover:text-white"
        }`}
    >
      {isInCart ? (
        <Check className="text-white w-4 h-4" />
      ) : (
        <ShoppingCart className="text-cv-muted group-hover:text-white w-4 h-4 transition-colors duration-300" />
      )}
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
          <span className="font-cv-sans text-cv-sm font-cv-semibold text-[#735C00]">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}