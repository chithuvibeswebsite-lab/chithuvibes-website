import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "../context/cart.context";
import AppRoutes from "./routes";
import ScrollToTop from "../hooks/scroll_to_top";
import './app.css'
export default function App() {
  const isComingSoon = import.meta.env.VITE_COMING_SOON === "true";

  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <AppRoutes isComingSoon={isComingSoon} />
      </CartProvider>
    </BrowserRouter>
  );
}