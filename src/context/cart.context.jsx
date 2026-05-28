import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { transformProduct } from "../utils/transform.util";
import Cookies from "js-cookie";
import Papa from "papaparse";
import { openWhatsApp } from "../utils/whatsapp.util";

const CartContext = createContext(null);

const SHEET_ID = import.meta.env.VITE_EXCEL_SHEET_ID;
const CALLIGRAPHY_PRODUCTS_GID = import.meta.env.VITE_EXCEL_CALLIGRAPHY_PRODUCTS_GID;
const GIFT_PRODUCTS_GID = import.meta.env.VITE_EXCEL_GIFT_PRODUCTS_GID;
const TESTIMONIALS_GID = import.meta.env.VITE_EXCEL_TESTIMONIALS_GID;
const CLIENT_PHONE_NUMBER = import.meta.env.VITE_CLIENT_PHONE_NUMBER;


const parseUrl = (gid) => `https://docs.google.com/spreadsheets/d/e/${SHEET_ID}/pub?output=csv&gid=${gid}&t=${Date.now()}`;

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = Cookies.get("chithuCart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isGift, setIsGift] = useState(false);
  const [note, setNote] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const [calligraphyProducts, setCalligraphyProducts] = useState([]);
  const [giftProducts, setGiftProducts] = useState([]);
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Cookies.set("chithuCart", JSON.stringify(cartItems), {
      expires: 30,
      path: "/",
    });
  }, [cartItems]);



  const PRODUCT_SHEETS = [
    {
      url: parseUrl(CALLIGRAPHY_PRODUCTS_GID),
      setter: setCalligraphyProducts,
      name: "Calligraphy",
      isProducts: true,
    },
    {
      url: parseUrl(GIFT_PRODUCTS_GID),
      setter: setGiftProducts,
      name: "Gift",
      isProducts: true,
    },
    {
      url: parseUrl(TESTIMONIALS_GID),
      setter: setTestimonials,
      name: "Testimonials",
      isProducts: false,
    },
  ];

  useEffect(() => {
    let completed = 0;
    const total = PRODUCT_SHEETS.length;
    const allProducts = {};

    const handleComplete = (results, setter, name, isProducts) => {
      let formatted = results.data;
      formatted = isProducts ? formatted.map(transformProduct) : formatted;
      setter(formatted);

      if (isProducts) {
        allProducts[name] = formatted;
      }

      completed++;

      if (completed === total) {
        // Collect trending from all product sheets once both are done
        const trending = [
          ...(allProducts["Calligraphy"] ?? []),
          ...(allProducts["Gift"] ?? []),
        ].filter((p) => p.trending === true);

        setTrendingProducts(trending);
        setLoading(false);
      }
    };

    const fetchProducts = () => {
      setLoading(true);
      PRODUCT_SHEETS.forEach(({ url, setter, name, isProducts }) => {
        Papa.parse(url, {
          download: true,
          header: true,
          skipEmptyLines: true,
          complete: (results) => handleComplete(results, setter, name, isProducts),
          error: (err) => {
            console.error(`Error parsing ${name} sheet:`, err);
            setter([]);
            completed++;
            if (completed === total) setLoading(false);
          },
        });
      });
    };

    fetchProducts();
  }, []);

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
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const increaseQuantity = (productId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCartItems((prev) => {
      const item = prev.find((i) => i.id === productId);
      if (!item) return prev;
      if (item.quantity <= 1) return prev.filter((i) => i.id !== productId);
      return prev.map((i) =>
        i.id === productId ? { ...i, quantity: i.quantity - 1 } : i
      );
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => setCartItems([]);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleOrderWhatsApp = () => {
    setShowThankYou(true);
  };


  const handleThankYouDone = useCallback(() => {
    setShowThankYou(false);

    const itemsList = cartItems
      .map((i) => `  • ${i.name} × ${i.quantity}  —  ₹${(i.price * i.quantity).toLocaleString("en-IN")}`)
      .join("\n");

    const giftLine = isGift ? "\n*Gift Order:* Please package this as a gift.\n" : "";
    const noteLine = note ? `\n*Note for the Artist:*\n_${note}_\n` : "";

    const message =
      `*Chithu Vibes — Order Inquiry*\n` +
      `————————————————\n\n` +
      `Dear Chithu,\n\n` +
      `I would like to place an order for the following:\n\n` +
      `*Items:*\n${itemsList}\n\n` +
      `*Total:* ₹${subtotal.toLocaleString("en-IN")}\n\n` +
      `————————————————\n` +
      `${giftLine}${noteLine}` +
      `\nKindly confirm availability and the next steps.\n\n` +
      `Warm regards`;

    openWhatsApp(message);
    clearCart();
  }, [cartItems, isGift, note, subtotal]);

  const homePageWhatsapp = (message) => openWhatsApp(message);

  const inquireBespoke = () =>
    openWhatsApp("Hi! I'm interested in a bespoke keepsake from Chithu Vibes.");

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        updateQuantity,
        clearCart,
        subtotal,
        totalItems,
        openWhatsApp: handleOrderWhatsApp,
        handleThankYouDone,
        showThankYou,
        homePageWhatsapp,
        inquireBespoke,
        isGift,
        setIsGift,
        note,
        setNote,
        testimonials,
        calligraphyProducts,
        giftProducts,
        trendingProducts,
        loading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside a CartProvider");
  }
  return context;
}