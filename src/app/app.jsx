import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "../context/cart.context";
import AppRoutes from "./routes";
import ScrollToTop from "../hooks/scroll_to_top";
import './app.css'
export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <AppRoutes />
      </CartProvider>
    </BrowserRouter>
  );
}