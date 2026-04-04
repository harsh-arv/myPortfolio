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

  return (
    <div
      className={`flex justify-between items-center w-full h-20 px-4 text-t-text fixed z-50 transition-all duration-300 ${
        scrolled ? "bg-t-nav-scroll shadow-lg" : "bg-t-nav"
      }`}
    >
      <div>
        <BrandLogo />
      </div>

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

      <div onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-t-text-secondary md:hidden hover:text-t-accent transition-colors">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-t-nav text-t-text-secondary">
          {links.map(({ id, link, label }) => (
            <li key={id}
              className="px-4 cursor-pointer py-6 text-3xl hover:text-t-accent transition-colors">
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500} spy={true}
                activeClass="!text-t-accent font-bold">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
