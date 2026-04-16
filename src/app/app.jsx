import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "../context/cart.context";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Home from "../pages/home/home";
import About from "../pages/about/about";
import CalligraphyProducts from "../pages/calligraphy_products/calligraphy_products";
import GiftProducts from "../pages/gift_products/gift_products";
import Cart from "../pages/cart/cart";
// import ContactUs from "../pages/contact_us/contact_us";
import "./app.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/home'
import About from '../pages/about/about'
import Contact from '../pages/contact/contact'
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import WhatsAppFloat from "../components/whatsappfloat/whatsappfloat"
import "./app.css"
import NotFound404 from '../pages/404/404'

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/"                     element={<Home />} />
            <Route path="/about"                element={<About />} />
            <Route path="/calligraphy-products" element={<CalligraphyProducts />} />
            <Route path="/gift-products"        element={<GiftProducts />} />
            <Route path="/cart"                 element={<Cart />} />
            {/* <Route path="/contact"              element={<ContactUs />} /> */}
          </Routes>
        </main>
        <Footer />
      </CartProvider>
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound404/>} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </BrowserRouter>
  );
}