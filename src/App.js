import { Route, Routes } from "react-router-dom";
import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import GetAQuote from './pages/GetAQuote';
import Testimonials from './pages/Testimonials';
import {Container} from 'react-bootstrap';

function App() {
  return (
      <div className="App">
        <Container>
          <Routes>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Gallery" element={<Gallery/>}/>
            <Route path="/Services" element={<Services/>}/>
            <Route path="/GetAQuote" element={<GetAQuote/>}/>
            <Route path="/Testimonials" element={<Testimonials/>}/>
          </Routes>
          <Home/>
        </Container>
      </div>
  );
}

export default App;
