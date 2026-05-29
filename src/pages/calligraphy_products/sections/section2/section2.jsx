import ProductCard from "../../../../components/product_card/product_card";
import { useCart } from "../../../../context/cart.context";
import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";

export default function Section2({ content }) {
  const { calligraphyProducts, loading } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const debounceTimer = useRef(null);

  // Debounce search query
  useEffect(() => {
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, [searchQuery]);

  // Filter products
  const filteredProducts = calligraphyProducts.filter((product) => {
    const matchesSearch =
      debouncedQuery === "" ||
      product.name.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
      product.description
        .toLowerCase()
        .includes(debouncedQuery.toLowerCase());
    return matchesSearch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "price-low-to-high":
        return a.price - b.price;
      case "price-high-to-low":
        return b.price - a.price;
      case "name-a-z":
        return a.name.localeCompare(b.name);
      case "name-z-a":
        return b.name.localeCompare(a.name);
      case "default":
      default:
        return 0;
    }
  });

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setDebouncedQuery("");
    setSortOption("default");
  };

  const hasActiveFilters =
    searchQuery !== "" || sortOption !== "default";

  if (loading) {
    return (
      <section className="bg-cv-white px-cv-lg py-cv-5xl md:px-cv-4xl">
        <div className="w-full max-w-screen-xl mx-auto text-center py-cv-4xl">
          <div className="inline-block w-8 h-8 border-4 border-cv-gold border-t-transparent rounded-full animate-spin" />
          <p className="mt-cv-md font-cv-sans text-cv-sm text-cv-muted">
            {content.title[1]}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-cv-white  px-cv-lg py-cv-5xl md:px-cv-4xl">
      <div className="w-full max-w-screen-xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-cv-3xl gap-cv-lg">
          <div>
            <h2 className="m-0 mb-cv-sm font-cv-serif italic font-cv-regular text-cv-plum text-cv-2xl md:text-cv-3xl">
              {content.title[0]}
            </h2>
            <div className="w-cv-xl h-cv-pxsm bg-cv-gold" />
          </div>
          <p className="font-cv-sans text-cv-sm font-cv-light text-[#735C00] leading-cv-relaxed md:text-right max-w-xs">
            {content.description}
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-cv-2xl">
          <div className="relative">
            <Search className="absolute left-cv-md top-1/2 -translate-y-1/2 w-4 h-4 text-cv-muted pointer-events-none" />
            <input
              type="text"
              placeholder={content.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-cv-3xl pr-cv-lg py-cv-md border border-cv-border rounded-cv-xs 
                font-cv-sans text-cv-sm text-cv-black placeholder-cv-muted
                focus:outline-none focus:ring-1 focus:ring-cv-gold focus:border-cv-gold
                bg-cv-white transition-all duration-300"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-cv-md top-1/2 -translate-y-1/2 text-cv-muted hover:text-cv-black transition-colors p-1"
                aria-label={content.clearSearchLabel}
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Sort Segmented Control */}
        <div className="mb-cv-3xl flex flex-wrap items-center gap-cv-lg">
          <div className="flex flex-wrap items-center gap-cv-sm">
            <span className="font-cv-sans text-cv-xs font-cv-semibold text-cv-black uppercase tracking-cv-wider">
              {content.sortLabel}
            </span>
            {content.sortOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setSortOption(option.value)}
                className={`px-cv-md py-cv-xs rounded-full border font-cv-sans text-cv-xs font-cv-medium transition-all duration-300 ${
                  sortOption === option.value
                    ? "bg-cv-gold border-cv-gold text-white"
                    : "border-cv-border text-cv-muted hover:border-cv-gold hover:text-cv-black"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          {/* Clear All Button */}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="px-cv-md py-cv-xs text-cv-xs font-cv-semibold text-cv-muted hover:text-cv-black transition-colors underline"
            >
              {content.clearAllLabel}
            </button>
          )}
        </div>

        {/* Results Counter */}
        {hasActiveFilters && (
          <p className="font-cv-sans text-cv-xs text-cv-muted mb-cv-3xl">
            {content.resultsLabel
              .replace("{shown}", sortedProducts.length)
              .replace("{total}", calligraphyProducts.length)}
          </p>
        )}

        {/* Products Grid */}
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-cv-3xl">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-cv-3xl">
            <p className="font-cv-sans text-cv-muted mb-cv-md">
              {content.noResultsLabel}
            </p>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="px-cv-md py-cv-xs border border-cv-border rounded-cv-xs 
                  font-cv-sans text-cv-sm font-cv-medium text-cv-black
                  hover:bg-cv-gold hover:border-cv-gold hover:text-white
                  transition-all duration-300"
              >
                {content.clearFiltersLabel}
              </button>
            )}
          </div>
        )}

        {sortedProducts.length === 0 && !hasActiveFilters && (
          <p className="text-center font-cv-sans text-cv-muted py-cv-2xl">
            {content.sectionStatus}
          </p>
        )}
      </div>
    </section>
  );
}