import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/home'
import About from '../pages/about/about'
import Contact_us from '../pages/contact_us/contact_us'
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import WhatsAppFloat from "../components/whatsappfloat/whatsappfloat"
import "./app.css"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact_us" element={<Contact_us />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </BrowserRouter>
  )
}