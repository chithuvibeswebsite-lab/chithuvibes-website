import Cookies from "js-cookie";
import { useEffect } from "react";
import { useCart } from "../context/cart.context";

export function useCartPersistence() {
  const { cartItems, setCartItems } = useCart();
  // Cookie persistence for cart
  useEffect(() => {
    const savedCart = Cookies.get("chithuCart");
    if (savedCart) setCartItems(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    Cookies.set("chithuCart", JSON.stringify(cartItems), { expires: 30 });
  }, [cartItems]);
}