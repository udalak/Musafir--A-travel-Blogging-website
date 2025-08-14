import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

export default function App() {
  const location = useLocation();

  // simple page transition class toggling
  useEffect(() => {
    const el = document.querySelector("#page");
    if (!el) return;
    el.classList.add("page-enter");
    // force reflow then activate
    requestAnimationFrame(() => el.classList.add("page-enter-active"));
    return () => el.classList.remove("page-enter", "page-enter-active");
  }, [location.pathname]);

  return (
    <div className="app">
      <Navbar />
      <main id="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
