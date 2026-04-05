import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import BrandLogo from "./BrandLogo";
import { useTheme } from "../context/ThemeContext";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { brand } = useTheme();

  const links = [
    { id: 1, link: "home", label: "Home" },
    { id: 2, link: "about", label: brand.sections.about },
    { id: 3, link: "experience", label: brand.sections.experience },
    { id: 4, link: "portfolio", label: brand.sections.portfolio },
    { id: 5, link: "education", label: brand.sections.education },
    { id: 6, link: "contact", label: brand.sections.contact },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.pageYOffset > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = nav ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [nav]);

  return (
    <nav
      className={`flex justify-between items-center w-full h-16 sm:h-20 px-4 sm:px-6 text-t-text fixed z-50 transition-all duration-300 ${
        scrolled ? "bg-t-nav-scroll shadow-lg" : "bg-t-nav"
      }`}
    >
      <div className="flex-shrink-0">
        <BrandLogo />
      </div>

      {/* Desktop nav */}
      <ul className="hidden md:flex">
        {links.map(({ id, link, label }) => (
          <li key={id}
            className="px-4 cursor-pointer font-medium text-t-text-secondary hover:text-t-accent hover:scale-105 duration-200 text-sm">
            <Link to={link} smooth duration={500} spy={true} activeClass="!text-t-accent font-bold">
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button onClick={() => setNav(!nav)} aria-label="Toggle menu"
        className="cursor-pointer pr-2 z-[60] text-t-text-secondary md:hidden hover:text-t-accent transition-colors">
        {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Mobile slide-in menu */}
      <div className={`fixed inset-0 z-[55] md:hidden transition-all duration-300 ${nav ? "visible" : "invisible"}`}>
        {/* Backdrop */}
        <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${nav ? "opacity-100" : "opacity-0"}`}
          onClick={() => setNav(false)} />
        {/* Slide panel */}
        <div className={`absolute top-0 right-0 w-72 h-full bg-t-nav shadow-2xl transform transition-transform duration-300 ${nav ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex flex-col pt-20 px-6">
            {links.map(({ id, link, label }) => (
              <Link key={id} onClick={() => setNav(false)} to={link} smooth duration={500} spy={true}
                activeClass="!text-t-accent !border-t-accent"
                className="py-4 text-lg font-medium text-t-text-secondary hover:text-t-accent border-b border-t-border/30 transition-colors cursor-pointer">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
