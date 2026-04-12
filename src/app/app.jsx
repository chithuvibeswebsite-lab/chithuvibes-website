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
  )
}