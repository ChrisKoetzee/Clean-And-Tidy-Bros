import { Route, Routes } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import GetAQuote from "./pages/GetAQuote";
import { ToastContainer } from 'react-toastify';
// import Gallery from "./pages/Gallery";
// import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <div className="App">
    <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/gallery" element={<Gallery />} /> */}
        <Route path="/services" element={<Services />} />
        <Route path="/getAQuote" element={<GetAQuote />} />
        {/* <Route path="/testimonials" element={<Testimonials />} /> */}
      </Routes>
    </div>
  );
}

export default App;
