import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/home'
import About from '../pages/about/about'
import Navbar from "../components/navbar/navbar";
import CalligraphyProducts from '../pages/calligraphy_products/calligraphy_products'
import GiftProducts from "../pages/gift_products/gift_products";
import Cart from "../pages/cart/cart";
import "./app.css"
import { CartProvider } from '../context/cart.context';

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
      <Navbar />
      <main className="pt-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/calligraphy-products" element={<CalligraphyProducts />} />
          <Route path="/gift-products" element={<GiftProducts />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      </CartProvider>
    </BrowserRouter>
  )
}