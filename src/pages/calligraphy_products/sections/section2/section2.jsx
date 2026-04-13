import { useCart } from "../../../../context/cart.context";

const calligraphyProducts = [
  {
    id: 1,
    name: "Hand-Drawn Tamil Inscription",
    description: "Custom archival ink on handmade parchment",
    price: 420,
    image: "/images/products/tamil-inscription-1.jpg",
  },
  {
    id: 2,
    name: "Masterpiece Scroll",
    description: "Large format wall installations",
    price: 1200,
    image: "/images/products/scroll-1.jpg",
  },
  {
    id: 3,
    name: "Engraved Manuscript Panel",
    description: "Solid brass with etched classical poetry",
    price: 450,
    image: "/images/products/panel-1.jpg",
  },
  {
    id: 7,
    name: "Traditional Script Artwork",
    description: "Beautifully stylized script on handmade paper",
    price: 650,
    image: "/images/products/script-art-1.jpg",
  },
  {
    id: 10,
    name: "Personalized Wedding Scroll",
    description: "Luxury scroll for wedding vows and invitations",
    price: 1800,
    image: "/images/products/wedding-scroll.jpg",
  },
  {
    id: 11,
    name: "Gold Foil Calligraphy Frame",
    description: "Calligraphy artwork enhanced with gold foil detailing",
    price: 1350,
    image: "/images/products/gold-foil-frame.jpg",
  },
  {
    id: 13,
    name: "Heritage Script Canvas",
    description: "Canvas artwork inspired by ancient scripts",
    price: 980,
    image: "/images/products/script-canvas.jpg",
  },
  {
    id: 15,
    name: "Luxury Scroll Box Set",
    description: "Premium scroll stored in a handcrafted wooden box",
    price: 2100,
    image: "/images/products/scroll-box.jpg",
  },
  {
    id: 18,
    name: "Signature Style Artwork",
    description: "Stylized signature art crafted uniquely for individuals",
    price: 1100,
    image: "/images/products/signature-art.jpg",
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
              Calligraphic Items
            </h2>
            <div className="w-cv-xl h-cv-pxsm bg-cv-gold" />
          </div>
          <p
            className="font-cv-sans text-cv-sm font-cv-light text-cv-muted leading-cv-relaxed md:text-right"
            style={{ maxWidth: "280px" }}
          >
            Each piece is hand-crafted with archival materials, celebrating
            the ancient rhythm of the quill and the beauty of the written word.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-cv-3xl">
          {calligraphyProducts.map((product) => (
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