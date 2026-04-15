import ProductCard from "../../../../components/product_card/product_card";
import { useCart } from "../../../../context/cart.context";

export default function Section2() {
  const { calligraphyProducts, loading } = useCart();

  if (loading) {
    return (
      <section className="bg-cv-white px-cv-lg py-cv-5xl md:px-cv-4xl">
        <div className="w-full max-w-screen-xl mx-auto text-center py-cv-4xl">
          <div className="inline-block w-8 h-8 border-4 border-cv-gold border-t-transparent rounded-full animate-spin" />
          <p className="mt-cv-md font-cv-sans text-cv-sm text-cv-muted">Loading beautiful calligraphy pieces...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-cv-white px-cv-lg py-cv-5xl md:px-cv-4xl">
      <div className="w-full max-w-screen-xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-cv-3xl gap-cv-lg">
          <div>
            <h2 className="m-0 mb-cv-sm font-cv-serif font-cv-regular text-cv-black text-cv-2xl md:text-cv-3xl">
              Calligraphic Items
            </h2>
            <div className="w-cv-xl h-cv-pxsm bg-cv-gold" />
          </div>
          <p className="font-cv-sans text-cv-sm font-cv-light text-cv-muted leading-cv-relaxed md:text-right max-w-xs">
            Each piece is hand-crafted with archival materials, celebrating
            the ancient rhythm of the quill and the beauty of the written word.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-cv-3xl">
          {calligraphyProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {calligraphyProducts.length === 0 && (
          <p className="text-center font-cv-sans text-cv-muted py-cv-2xl">
            No calligraphy products available at the moment.
          </p>
        )}

      </div>
    </section>
  );
}