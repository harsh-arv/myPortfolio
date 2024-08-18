import React from "react";
import Contact from "./Contact";
import Experience from "./Experience";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import SocialLinks from "./SocialLinks";
import Skill from "./Skill";

function NavigationRouter() {
  console.log("Navigation Router");

  return (
    <Routes path="/myPortfolio">
      {/* <Route path="/home" element={App} /> */}
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Portfolio /> */}
      <Route path="/Skill" element={<Skill />} />
      {/* <Contact /> */}
      <Route path="/SocialLinks" element={<SocialLinks />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/" exact component={Experience} /> */}
    </Routes>
  );
}

export default NavigationRouter;
