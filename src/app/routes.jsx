import { Routes, Route, Outlet } from "react-router-dom";

import Home from "../pages/home/home";
import About from "../pages/about/about";
import CalligraphyProducts from "../pages/calligraphy_products/calligraphy_products";
import GiftProducts from "../pages/gift_products/gift_products";
import Cart from "../pages/cart/cart";
import Contact from "../pages/contact/contact";
import NotFound404 from "../pages/404/404";

import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import WhatsAppFloat from "../components/whatsappfloat/whatsappfloat";


function MainLayout() {
    return (
        <>
            <Navbar />

            <main className="pt-16">
                <Outlet />
            </main>

            <Footer />
            <WhatsAppFloat />
        </>
    );
}


export default function AppRoutes() {
    return (
        <Routes>

            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/calligraphy-products" element={<CalligraphyProducts />} />
                <Route path="/gift-products" element={<GiftProducts />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/contact" element={<Contact />} />
            </Route>

            <Route path="*" element={<NotFound404 />} />

        </Routes>
    );
}