import { useCart } from "../../../../context/cart.context";

const giftProducts = [
  {
    id: 4,
    name: "Laser-Etched Keepsake Box",
    description: "Precision detailed patterns on solid maple",
    price: 780,
    image: "/images/products/box-1.jpg",
  },
  {
    id: 5,
    name: "Custom Wood Plaque",
    description: "Personalized walnut and cherry wood finish",
    price: 545,
    image: "/images/products/plaque-1.jpg",
  },
  {
    id: 6,
    name: "Acrylic Memory Block",
    description: "High-clarity optical grade acrylic prisms",
    price: 995,
    image: "/images/products/acrylic-1.jpg",
  },
  {
    id: 8,
    name: "Mini Engraved Token",
    description: "Compact engraved token perfect for gifting",
    price: 299,
    image: "/images/products/token-1.jpg",
  },
  {
    id: 12,
    name: "Engraved Name Plate",
    description: "Custom engraved rosewood nameplate",
    price: 620,
    image: "/images/products/nameplate.jpg",
  },
  {
    id: 14,
    name: "Mini Memory Frame",
    description: "Elegant acrylic and wood memory frame",
    price: 350,
    image: "/images/products/memory-frame.jpg",
  },
  {
    id: 16,
    name: "Custom Quote Engraving",
    description: "Personalized engraved quotes on maple board",
    price: 480,
    image: "/images/products/quote-engraving.jpg",
  },
  {
    id: 19,
    name: "Engraved Wooden Photo Block",
    description: "Photo block with engraved borders and artistic finish",
    price: 890,
    image: "/images/products/photo-block.jpg",
  },
];

// Cart icon SVG
function CartIcon() {
  return (
    <svg
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      />
    </svg>
  );
}

// Check icon for "Added" state
function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ProductImage({ src, alt }) {
  return (
    <div
      className="w-full rounded-cv-md overflow-hidden bg-cv-soft flex items-center justify-center"
      style={{ aspectRatio: "4/3" }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.style.display = "none";
        }}
      />
    </div>
  );
}

function AddToCartButton({ product }) {
  const { cartItems, addToCart } = useCart();
  const isInCart = cartItems.some((item) => item.id === product.id);

  return (
    <button
      onClick={() => addToCart(product)}
      title={isInCart ? "Added to cart" : "Add to cart"}
      className="flex items-center justify-center gap-cv-xs border cursor-pointer font-cv-sans text-cv-label font-cv-medium tracking-cv-wider uppercase px-cv-md py-cv-xs rounded-cv-xs transition"
      style={{
        transitionDuration: "var(--duration-cv-base)",
        minHeight: "36px",
        borderColor: isInCart
          ? "var(--color-cv-gold)"
          : "var(--color-cv-border)",
        backgroundColor: isInCart ? "var(--color-cv-gold)" : "transparent",
        color: isInCart ? "white" : "var(--color-cv-muted)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--color-cv-gold)";
        e.currentTarget.style.backgroundColor = "var(--color-cv-gold)";
        e.currentTarget.style.color = "white";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = isInCart
          ? "var(--color-cv-gold)"
          : "var(--color-cv-border)";
        e.currentTarget.style.backgroundColor = isInCart
          ? "var(--color-cv-gold)"
          : "transparent";
        e.currentTarget.style.color = isInCart ? "white" : "var(--color-cv-muted)";
      }}
    >
      {isInCart ? <CheckIcon /> : <CartIcon />}
    </button>
  );
}

export default function Section2() {
  return (
    <section className="bg-cv-white px-cv-lg py-cv-5xl md:px-cv-4xl">
      <div className="w-full mx-auto" style={{ maxWidth: "1200px" }}>

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-cv-3xl gap-cv-lg">
          <div>
            <h2
              className="m-0 mb-cv-sm font-cv-serif font-cv-regular text-cv-black"
              style={{ fontSize: "clamp(24px, 3vw, 38px)" }}
            >
              Gift Items
            </h2>
            <div className="w-cv-xl h-cv-pxsm bg-cv-gold" />
          </div>
          <p
            className="font-cv-sans text-cv-sm font-cv-light text-cv-muted leading-cv-relaxed md:text-right"
            style={{ maxWidth: "300px" }}
          >
            Modern precision meets sentimental value. Our laser-crafted gifts
            are designed to preserve your most cherished milestones.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-cv-3xl">
          {giftProducts.map((product) => (
            <div key={product.id} className="flex flex-col">

              <ProductImage src={product.image} alt={product.name} />

              <div className="pt-cv-md">
                <h3
                  className="m-0 mb-cv-xs font-cv-serif font-cv-semibold text-cv-black italic"
                  style={{ fontSize: "clamp(15px, 1.5vw, 18px)" }}
                >
                  {product.name}
                </h3>
                <p className="m-0 mb-cv-md font-cv-sans text-cv-xs font-cv-light text-cv-muted leading-cv-normal">
                  {product.description}
                </p>
                <div className="flex items-center justify-between gap-cv-sm">
                  <span className="font-cv-sans text-cv-sm font-cv-semibold text-cv-gold">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <AddToCartButton product={product} />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}