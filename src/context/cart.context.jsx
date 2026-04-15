import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import Papa from "papaparse";

const CartContext = createContext(null);

const SHEET_ID = "2PACX-1vSyUN6eOAjpL9aaEY8NuJB5FKO_7IxDQ3bO4Y0DyhMKuV_gDZwP6xqmDhMgWSfGaWA3Vj2QXrONq5mX";

export function CartProvider({ children }) {
  // 🛒 Cart state
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = Cookies.get("chithuCart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isGift, setIsGift] = useState(false);
  const [note, setNote] = useState("");

  // 📦 Product state
  const [calligraphyProducts, setCalligraphyProducts] = useState([]);
  const [giftProducts, setGiftProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 💾 Save cart to cookies
  useEffect(() => {
    Cookies.set("chithuCart", JSON.stringify(cartItems), {
      expires: 30,
      path: "/",
    });
  }, [cartItems]);

  // 🔄 Transform function (single source of truth)
  const transformProduct = (item) => ({
    id: item.id || item.product_id || "",
    name: item.name || item.product_name || "",
    description: item.description || item.product_description || "",
    type: item.type || item.product_type || "",
    price: Number(item.price || item.product_price) || 0,
    images: item.images || item.product_images
      ? (item.images || item.product_images)
          .split(",")
          .map((img) => img.trim())
          .filter(Boolean)
      : [],
  });

  // 🌐 Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const baseUrl = `https://docs.google.com/spreadsheets/d/e/${SHEET_ID}/pub?output=csv`;

        const [calligraphyRes, giftRes] = await Promise.all([
          fetch(`${baseUrl}&gid=0`),
          fetch(`${baseUrl}&gid=2069942511`),
        ]);

        // ❗ Validate response
        if (!calligraphyRes.ok || !giftRes.ok) {
          throw new Error("Failed to fetch product data");
        }

        const calligraphyText = await calligraphyRes.text();
        const giftText = await giftRes.text();

        // 📄 Parse CSV → JSON
        const parsedCalligraphy = Papa.parse(calligraphyText, {
          header: true,
          skipEmptyLines: true,
        }).data;

        const parsedGift = Papa.parse(giftText, {
          header: true,
          skipEmptyLines: true,
        }).data;

        // 🔥 Transform data
        const formattedCalligraphy = parsedCalligraphy
          .map(transformProduct)
          .filter((p) => p.id && p.name);

        const formattedGift = parsedGift
          .map(transformProduct)
          .filter((p) => p.id && p.name);

        // 📦 Set state
        setCalligraphyProducts(formattedCalligraphy);
        setGiftProducts(formattedGift);
      } catch (error) {
        console.error("Error fetching products:", error);

        // Optional fallback
        setCalligraphyProducts([]);
        setGiftProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // 🛒 Cart functions

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) =>
      prev.filter((item) => item.id !== productId)
    );
  };

  const increaseQuantity = (productId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCartItems((prev) => {
      const item = prev.find((i) => i.id === productId);
      if (!item) return prev;

      if (item.quantity <= 1) {
        return prev.filter((i) => i.id !== productId);
      }

      return prev.map((i) =>
        i.id === productId
          ? { ...i, quantity: i.quantity - 1 }
          : i
      );
    });
  };

  const clearCart = () => setCartItems([]);

  // 💰 Calculations
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  // 📲 WhatsApp integration
  const openWhatsApp = () => {
    const itemsList = cartItems
      .map(
        (i) =>
          `${i.name} x${i.quantity} — ₹${(
            i.price * i.quantity
          ).toLocaleString("en-IN")}`
      )
      .join("\n");

    const giftNote = isGift
      ? "\n\n🎁 This is a gift order."
      : "";

    const artistNote = note
      ? `\n\nNote for artist: ${note}`
      : "";

    const message = `Hi! I'd like to finalize my Chithu Vibes order:\n\n${itemsList}\n\nEstimated Total: ₹${subtotal.toLocaleString(
      "en-IN"
    )}${giftNote}${artistNote}`;

    window.open(
      `https://wa.me/919884923998?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  const inquireBespoke = () => {
    window.open(
      "https://wa.me/919884923998?text=" +
        encodeURIComponent(
          "Hi! I'm interested in a bespoke keepsake from Chithu Vibes."
        ),
      "_blank"
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        subtotal,
        totalItems,
        openWhatsApp,
        inquireBespoke,
        isGift,
        setIsGift,
        note,
        setNote,
        calligraphyProducts,
        giftProducts,
        loading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// 🪝 Custom hook
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside a CartProvider");
  }
  return context;
}