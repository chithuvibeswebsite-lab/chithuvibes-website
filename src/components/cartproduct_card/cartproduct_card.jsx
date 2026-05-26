import { useCart } from "../../context/cart.context";
import { Trash2 } from "lucide-react";
import { ProductImageCarousel } from "../product_card/product_card";


function CartProductCard({ item, isLast = false }) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (e) => {
    const newQty = parseInt(e.target.value);
    updateQuantity(item.id, newQty);
  };

  return (
    <div
      className={`flex flex-col sm:flex-row gap-4 sm:gap-cv-lg py-6 ${
        !isLast ? "border-b border-cv-border" : ""
      }`}
    >
      {/* Image */}
      <div className="w-full sm:max-w-[15rem]">
        <ProductImageCarousel images={item.images} />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="mb-1 font-cv-serif font-bold text-lg lg:text-2xl leading-snug">
            {item.name}
          </h3>

          <p className="mb-2 text-sm lg:text-lg font-light text-cv-mauve line-clamp-2">
            {item.description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-2">
          <span className="text-lg sm:text-3xl font-cv-sans font-semibold text-cv-gold">
            ₹<span className='ms-3 font-cv-sans'>{(item.price * item.quantity).toLocaleString("en-IN")}</span>
          </span>

          <div className="flex items-center justify-between sm:justify-end gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm text-cv-muted">Qty:</span>

              <select
                value={item.quantity}
                onChange={handleQuantityChange}
                className="appearance-none bg-cv-white border border-cv-border rounded-md 
                           px-2 py-1 pr-6
                           text-sm font-medium text-cv-charcoal 
                           focus:outline-none focus:border-cv-gold focus:ring-1 focus:ring-cv-gold
                           transition-all duration-300 cursor-pointer"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>

            {/* Trash */}
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-cv-muted hover:text-red-500 transition p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
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