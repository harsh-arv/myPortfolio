import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeProvider } from "./context/ThemeContext";
import About from "./components/About";
import Contact from "./components/Contact";
import Skill from "./components/Skill";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Testimonials from "./components/Testimonials";
import BackToTop from "./components/BackToTop";
import ThemeSwitcher from "./components/ThemeSwitcher";
import SEO from "./components/SEO";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <ThemeProvider>
      <div>
        <SEO />
        <NavBar />
        <Home />
        <About />
        <Experience />
        <Skill />
        <Portfolio />
        <Education />
        <Testimonials />
        <Contact />
        <SocialLinks />
        <Footer />
        <BackToTop />
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
}

export default App;
