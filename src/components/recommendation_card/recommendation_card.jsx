import { useCart } from "../../context/cart.context";
import { Check } from "lucide-react";
import { UI_COPY } from "../../data/data";

const formatTemplate = (template, values) =>
  template.replace(/\{(\w+)\}/g, (_, key) => values[key]);

export default function RecommendationCard({ product }) {
  const { cartItems, addToCart } = useCart();

  const isInCart = cartItems.some((item) => item.id === product.id);
  const imageSrc = Array.isArray(product.images)
    ? product.images[0]
    : product.images;

  return (
    <div className="
  bg-cv-white rounded-xl border border-cv-border
  shadow-sm hover:shadow-md transition-all duration-300
  flex flex-col sm:flex-row gap-3 sm:gap-4 p-3 sm:p-4
  w-full max-w-[560px] mx-auto
">

  {/* Image */}
  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0 rounded-lg overflow-hidden bg-cv-black/5">
    <img
      src={imageSrc}
      alt={formatTemplate(UI_COPY.recommendationCard.imageAlt, { name: product.name })}
      width={96}
      height={96}
      className="w-full h-full object-cover"
    />
  </div>

  {/* Content + CTA */}
  <div className="flex w-full justify-between items-start sm:items-center gap-3">

    {/* Content */}
    <div className="flex-1 min-w-0">
      <h3 className="text-sm font-cv-serif sm:text-base md:text-lg font-medium line-clamp-1">
        {product.name}
      </h3>

      <p className="text-xs font-cv-sans sm:text-sm text-cv-muted mt-1 line-clamp-2">
        {product.description}
      </p>

      {/* Mobile price */}
      <p className="mt-2 font-cv-sans text-sm font-semibold text-cv-gold sm:hidden">
        ₹{product.price?.toLocaleString("en-IN")}
      </p>
    </div>

    {/* CTA */}
    <button
      onClick={() => addToCart(product)}
      className={`
        flex-shrink-0
        px-3 sm:px-4 py-2 sm:py-2.5
        rounded-md text-xs sm:text-sm font-medium
        flex items-center gap-1.5
        ${isInCart
          ? "bg-cv-gold text-white"
          : "border border-cv-gold text-cv-gold hover:bg-cv-gold hover:text-white"}
      `}
    >
      {isInCart ? (
        <>
          <Check size={14} />
          <span className="hidden sm:inline">{UI_COPY.recommendationCard.addedLabel}</span>
        </>
      ) : (
        <>
          {UI_COPY.recommendationCard.addLabel}
          <span className="hidden sm:inline font-semibold">
            {UI_COPY.recommendationCard.priceSeparator} ₹{product.price?.toLocaleString("en-IN")}
          </span>
        </>
      )}
    </button>

  </div>
</div>
  );
}