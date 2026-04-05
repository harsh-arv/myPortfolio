import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import BrandLogo from "./BrandLogo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full bg-t-nav text-t-text border-t border-t-border">
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <BrandLogo />
            </div>
            <p className="text-t-text-secondary text-sm">
              Full Stack Developer passionate about building scalable web applications and microservices.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-t-accent mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-t-text-secondary hover:text-t-accent transition-colors">Home</a>
              </li>
              <li>
                <a href="#portfolio" className="text-t-text-secondary hover:text-t-accent transition-colors">Projects</a>
              </li>
              <li>
                <a href="#experience" className="text-t-text-secondary hover:text-t-accent transition-colors">Experience</a>
              </li>
              <li>
                <a href="#contact" className="text-t-text-secondary hover:text-t-accent transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-t-accent mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center text-t-text-secondary">
                <FaEnvelope className="mr-2 text-t-accent" />
                <a href="mailto:harshgandharav680@gmail.com" className="hover:text-t-accent transition-colors">
                  harshgandharav680@gmail.com
                </a>
              </li>
              <li className="flex items-center text-t-text-secondary">
                <FaPhone className="mr-2 text-t-accent" />
                <a href="tel:+919911556706" className="hover:text-t-accent transition-colors">
                  +91-9911556706
                </a>
              </li>
            </ul>

            <div className="flex gap-4 mt-4">
              <a href="https://www.linkedin.com/in/harsh-gandharv/" target="_blank" rel="noreferrer"
                className="text-t-text-secondary hover:text-t-accent transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/harsh-arv" target="_blank" rel="noreferrer"
                className="text-t-text-secondary hover:text-t-accent transition-colors">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-t-border pt-6 text-center">
          <p className="text-t-text-secondary text-sm flex items-center justify-center gap-2">
            &copy; {currentYear} Harsh Gandharv. Built with React & Tailwind CSS
          </p>
          <p className="text-t-text-muted text-xs mt-2">
            All rights reserved. Built with passion and dedication.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
  