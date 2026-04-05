import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { FaPalette, FaTimes, FaFacebook, FaAmazon, FaSpotify } from "react-icons/fa";
import { MdMovie } from "react-icons/md";

const brandData = {
  default: {
    name: "Classic",
    description: "Clean & minimal portfolio",
    icon: () => (
      <div className="w-full h-full flex items-center justify-center text-xl font-bold">
        H
      </div>
    ),
  },
  netflix: {
    name: "Netflix",
    description: "Browse like streaming shows",
    icon: MdMovie,
  },
  facebook: {
    name: "Facebook",
    description: "Social profile experience",
    icon: FaFacebook,
  },
  amazon: {
    name: "Amazon",
    description: "Shop for talent, product style",
    icon: FaAmazon,
  },
  spotify: {
    name: "Spotify",
    description: "Listen to my career playlist",
    icon: FaSpotify,
  },
};

const ThemeSwitcher = () => {
  const { theme, setTheme, themes } = useTheme();
  const [open, setOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    // Show hint after user scrolls down
    const handleScroll = () => {
      if (window.scrollY > 300 && !showHint) {
        setShowHint(true);
        // Hide hint after 5 seconds
        setTimeout(() => setShowHint(false), 5000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showHint]);

  const dismissHint = () => {
    setShowHint(false);
    localStorage.setItem("themeHintDismissed", "true");
  };

  // Check if hint was already dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem("themeHintDismissed");
    if (dismissed) {
      setShowHint(false);
    }
  }, []);

  return (
    <div className="fixed bottom-4 left-4 sm:bottom-8 sm:left-8 z-50">
      {/* Theme Selector Panel */}
      {open && (
        <div className="mb-3 sm:mb-4 bg-t-card border-2 border-t-border rounded-2xl shadow-2xl p-4 sm:p-5 w-72 sm:w-80 animate-fade-in-up">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-t-text font-bold text-base uppercase tracking-wider">
              Choose Experience
            </h3>
            <button
              onClick={() => setOpen(false)}
              className="text-t-text-secondary hover:text-t-text transition-colors p-1"
            >
              <FaTimes size={16} />
            </button>
          </div>
          <div className="space-y-2">
            {Object.values(themes).map((t) => {
              const BrandIcon = brandData[t.id]?.icon;
              const isActive = theme === t.id;

              return (
                <button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id);
                    setOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-left relative overflow-hidden group ${
                    isActive
                      ? "bg-t-primary text-white font-semibold shadow-lg scale-105"
                      : "text-t-text-secondary hover:bg-t-alt hover:text-t-text border border-transparent hover:border-t-border"
                  }`}
                  style={{
                    backgroundColor: isActive ? t.color : undefined,
                  }}
                >
                  {/* Brand Icon */}
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-t-alt group-hover:bg-t-card"
                    }`}
                    style={{
                      color: !isActive ? t.color : undefined,
                    }}
                  >
                    {BrandIcon && <BrandIcon className="w-5 h-5" />}
                  </div>

                  {/* Brand Info */}
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-semibold block truncate">
                      {brandData[t.id]?.name || t.name}
                    </span>
                    <span
                      className={`text-xs block truncate ${
                        isActive ? "text-white/80" : "text-t-text-muted"
                      }`}
                    >
                      {brandData[t.id]?.description}
                    </span>
                  </div>

                  {/* Active Indicator */}
                  {isActive && (
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4"
                        style={{ color: t.color }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Hint Tooltip */}
      {showHint && !open && (
        <div className="mb-3 animate-fade-in-left relative">
          <div className="bg-t-primary text-white px-4 py-3 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap flex items-center gap-2">
            <span>Try different themes!</span>
            <button
              onClick={dismissHint}
              className="text-white/80 hover:text-white ml-1"
            >
              <FaTimes size={12} />
            </button>
          </div>
          {/* Arrow pointing down */}
          <div
            className="absolute -bottom-2 left-8 w-4 h-4 bg-t-primary transform rotate-45"
          ></div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 text-white relative ${
          showHint ? "animate-pulse" : ""
        }`}
        style={{ backgroundColor: "var(--c-primary)" }}
        aria-label="Switch theme"
      >
        <FaPalette size={20} />
        
        {/* Pulse ring effect when hint is shown */}
        {showHint && (
          <span className="absolute inset-0 rounded-full animate-ping opacity-75" style={{ backgroundColor: "var(--c-primary)" }}></span>
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
