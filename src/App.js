import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Element } from "react-scroll";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Hero from "../src/components/Hero";
import Services from "../src/components/Services";
import Booking from "../src/components/Booking";
import Contact from "../src/components/Contact";
import Feedback from "./components/Feedback";
import GlobalStyles from "./GlobalStyles";
import Offers from "./components/Offers";
import NossaHistoria from "./pages/NossaHistoria";
import EquipeCabelereiros from "./pages/EquipeCabelereiros";
import FAQ from "./components/FAQ";
import TermsOfUse from "./components/Terms";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Routes>
        {/* Página principal */}
        <Route
          path="/"
          element={
            <>
              <Element id="hero" name="hero">
                <Hero />
              </Element>
              <Element id="services" name="services">
                <Services />
              </Element>
              <Element id="offers" name="offers">
                <Offers />
              </Element>
              <Element id="feedback" name="feedback">
                <Feedback />
              </Element>
              <Element id="booking" name="booking">
                <Booking />
              </Element>
              <Element id="contact" name="contact">
                <Contact />
              </Element>
            </>
          }
        />
        {/* Página separada "Nossa História" */}
        <Route path="/nossa-historia" element={<NossaHistoria />} />
        <Route path="/equipe" element={<EquipeCabelereiros />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/termos-de-uso" element={<TermsOfUse />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
