import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./components/Header/AboutUs/About";
import Services from "./components/Header/Services/Services";
import RegionalOffice from "./components/RegionalOffice/RegionalOffice";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the routes here */}
        <Route path="/" element={<Header />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/regional-office" element={<RegionalOffice />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
