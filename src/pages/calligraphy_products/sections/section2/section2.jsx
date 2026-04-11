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

// Image placeholder component
function ProductImage({ src, alt }) {
  return (
    <div
      className="w-full rounded-cv-md overflow-hidden"
      style={{ aspectRatio: "4/3", backgroundColor: "var(--color-cv-soft)" }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.style.display = "none";
          e.target.parentElement.style.display = "flex";
          e.target.parentElement.style.alignItems = "center";
          e.target.parentElement.style.justifyContent = "center";
        }}
      />
    </div>
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
            Each piece is hand-crafted with archival materials, celebrating the ancient rhythm of the quill and the beauty of the written word.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-cv-3xl">
          {calligraphyProducts.map((product) => (
            <div key={product.id} className="flex flex-col">

              {/* Image */}
              <ProductImage src={product.image} alt={product.name} />

              {/* Info */}
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
                <div className="flex items-center justify-between">
                  <span className="font-cv-sans text-cv-sm font-cv-semibold text-cv-gold">
                    ${product.price.toLocaleString()}
                  </span>
                  <button
                    className="bg-transparent border-none cursor-pointer font-cv-sans text-cv-label font-cv-medium tracking-cv-wider uppercase text-cv-muted transition py-cv-xs px-cv-xs"
                    style={{ transitionDuration: "var(--duration-cv-base)", minHeight: "44px" }}
                    onMouseEnter={(e) => (e.target.style.color = "var(--color-cv-gold)")}
                    onMouseLeave={(e) => (e.target.style.color = "var(--color-cv-muted)")}
                  >
                    Details
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}