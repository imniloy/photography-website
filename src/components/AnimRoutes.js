import React from "react";
// import pages
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
// import route...
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const AnimRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;
