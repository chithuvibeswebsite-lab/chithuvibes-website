import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/home'
import About from '../pages/about/about'
import Navbar from "../components/navbar/navbar";
import "./app.css"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}