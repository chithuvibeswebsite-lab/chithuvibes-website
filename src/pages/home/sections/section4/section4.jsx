// TrendingSection.jsx
// Drop-in section component — matches the testimonial section's visual language.
// Props:
//   content  — { title: ["Main heading", "Sub-heading"] }
//   products — array of product objects (same shape used by ProductCard)
//   onAddToCart — optional callback(product)

import { useState, useEffect } from "react";
import ProductCard from "../../../../components/product_card/product_card";

// ─── Main section ─────────────────────────────────────────────────────────────
// Mirrors the testimonial section layout exactly:
//   • same bg-white + padding tokens
//   • same serif gold headline
//   • same dot-navigation row at the bottom
// Shows 2 products at a time; dots paginate through groups of 2.

const PAGE_SIZE = 2;
import { useCart } from "../../../../context/cart.context";

export default function Section4({ content }) {
  const { trendingProducts } = useCart();
    const [activePage, setActivePage] = useState(0);
    const [visible, setVisible] = useState(true);
    const totalPages = Math.ceil(trendingProducts.length / PAGE_SIZE);

    const goTo = (page) => {
        setVisible(false);
        setTimeout(() => {
            setActivePage(page);
            setVisible(true);
        }, 400);
    };

    // Auto-rotate pages every 6 s (longer than testimonials — products need more reading time)
    useEffect(() => {
        if (totalPages <= 1) return;
        const id = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setActivePage((p) => (p + 1) % totalPages);
                setVisible(true);
            }, 400);
        }, 6000);
        return () => clearInterval(id);
    }, [totalPages]);

    const pageProducts = trendingProducts.slice(
        activePage * PAGE_SIZE,
        activePage * PAGE_SIZE + PAGE_SIZE
    );

    

    return (
        <section className="bg-white box-border px-cv-lg py-cv-3xl md:px-cv-4xl md:py-cv-5xl">
            <div className="w-full mx-auto" style={{ maxWidth: "1200px" }}>

                {/* Heading — identical structure to testimonial */}
                <h2
                    className="font-cv-regular text-center leading-cv-tight mb-cv-md font-cv-serif text-cv-gold"
                    style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
                >
                    {content?.title?.[0] ?? "Trending Now"}
                </h2>

                <p className="text-cv-sm text-center mb-cv-3xl font-cv-sans text-cv-muted">
                    {content?.title?.[1] ?? "Our most-loved pieces this season"}
                </p>

                {/* Product grid */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-cv-3xl mb-cv-3xl"
                    style={{
                        opacity: visible ? 1 : 0,
                        transition: "opacity var(--duration-cv-slow, 400ms) ease",
                    }}
                >
                    {pageProducts.map((product) => (
                        <div key={product.id} className="w-full max-w-[430px] max-h-[600px]">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>

                {/* Dot navigation — same style as testimonial */}
                {totalPages > 1 && (
                    <div className="flex justify-center gap-cv-sm">
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                aria-label={`Page ${i + 1} of ${totalPages}`}
                                aria-current={i === activePage}
                                className="border-none cursor-pointer p-0 h-3 rounded-cv-full"
                                style={{
                                    width: i === activePage ? "32px" : "12px",
                                    backgroundColor:
                                        i === activePage
                                            ? "var(--color-cv-gold, #B8860B)"
                                            : "#CCCCCC",
                                    transition: "all var(--duration-cv-base, 200ms) ease",
                                    minHeight: "24px",
                                    padding: "6px",
                                }}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}