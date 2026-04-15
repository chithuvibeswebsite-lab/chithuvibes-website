import { useCart } from "../../context/cart.context";
import { useState } from "react";
import { Trash2 } from "lucide-react";

function CartProductImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageList = Array.isArray(images) ? images : [images];

  return (
    <div className="relative shrink-0 rounded-cv-md overflow-hidden bg-cv-soft w-cv-4xl h-cv-4xl">
      <img
        src={imageList[currentIndex]}
        alt="product"
        className="w-full h-full object-cover"
        onError={(e) => (e.target.style.display = "none")}
      />
      {imageList.length > 1 && (
        <div className="absolute bottom-cv-px left-1/2 -translate-x-1/2 flex gap-cv-px">
          {imageList.map((_, idx) => (
            <div
              key={idx}
              className={`w-cv-px h-cv-px rounded-cv-full ${idx === currentIndex ? "bg-cv-gold" : "bg-cv-white/60"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function CartProductCard({ item, isLast = false }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <div className={`flex gap-cv-lg py-cv-2xl ${!isLast ? "border-b border-cv-border" : ""}`}>
      <CartProductImageCarousel images={item.images} />

      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <div>
          <h3 className="mb-cv-xs font-cv-serif font-cv-semibold text-cv-black text-cv-base leading-cv-snug">
            {item.name}
          </h3>
          <p className="mb-cv-sm font-cv-sans text-cv-xs font-cv-light text-cv-muted leading-cv-normal line-clamp-2">
            {item.description}
          </p>
        </div>

        <div className="flex items-center justify-between gap-cv-sm flex-wrap mt-cv-sm">
          <span className="font-cv-sans text-cv-base font-cv-semibold text-cv-gold">
            ₹{(item.price * item.quantity).toLocaleString("en-IN")}
          </span>

          <div className="flex items-center gap-cv-md">
            <div className="flex items-center border border-cv-border rounded-cv-xs overflow-hidden h-9">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="px-cv-sm h-full bg-transparent border-none cursor-pointer font-cv-sans text-cv-md text-cv-charcoal transition duration-cv-fast hover:bg-cv-soft flex items-center justify-center min-w-[32px]"
              >
                −
              </button>
              <span className="px-cv-xs font-cv-sans text-cv-sm font-cv-medium text-cv-black text-center min-w-[28px]">
                {item.quantity}
              </span>
              <button
                onClick={() => increaseQuantity(item.id)}
                className="px-cv-sm h-full bg-transparent border-none cursor-pointer font-cv-sans text-cv-md text-cv-charcoal transition duration-cv-fast hover:bg-cv-soft flex items-center justify-center min-w-[32px]"
              >
                +
              </button>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-transparent border-none cursor-pointer text-cv-muted hover:text-cv-gold transition duration-cv-base p-cv-xs rounded-cv-xs flex items-center justify-center"
            >
              <Trash2 className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProductCard;