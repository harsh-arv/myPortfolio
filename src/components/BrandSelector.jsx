import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { FaFacebook, FaAmazon, FaSpotify } from "react-icons/fa";
import { MdMovie } from "react-icons/md";

const brandOptions = [
  {
    id: "netflix",
    name: "Netflix",
    icon: MdMovie,
    color: "#e50914",
    description: "Browse like streaming shows",
  },
  {
    id: "facebook",
    name: "Facebook",
    icon: FaFacebook,
    color: "#1877f2",
    description: "Social profile experience",
  },
  {
    id: "amazon",
    name: "Amazon",
    icon: FaAmazon,
    color: "#ff9900",
    description: "Shop for talent, product style",
  },
  {
    id: "spotify",
    name: "Spotify",
    icon: FaSpotify,
    color: "#1db954",
    description: "Listen to my career playlist",
  },
  {
    id: "default",
    name: "Classic",
    icon: () => (
      <div className="w-full h-full flex items-center justify-center text-3xl font-bold">
        H
      </div>
    ),
    color: "#06b6d4",
    description: "Clean & minimal portfolio",
  },
];

const BrandSelector = () => {
  const { setTheme } = useTheme();
  const [show, setShow] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);

  useEffect(() => {
    // Check if user has already selected a brand
    const hasSelectedBrand = localStorage.getItem("portfolioThemeSelected");
    if (!hasSelectedBrand) {
      // Show the selector after a short delay for smooth appearance
      setTimeout(() => setShow(true), 500);
    }
  }, []);

  const handleBrandSelect = (brandId) => {
    setSelectedBrand(brandId);
    // Animate selection
    setTimeout(() => {
      setTheme(brandId);
      localStorage.setItem("portfolioThemeSelected", "true");
      localStorage.setItem("portfolioTheme", brandId);
      setShow(false);
    }, 300);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in">
      <div className="text-center px-6 py-8 max-w-4xl w-full animate-fade-in-up">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your Experience
          </h1>
          <p className="text-gray-400 text-lg md:text-xl">
            Select your favorite brand to personalize your browsing experience
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-8">
          {brandOptions.map((brand) => {
            const Icon = brand.icon;
            const isSelected = selectedBrand === brand.id;

            return (
              <button
                key={brand.id}
                onClick={() => handleBrandSelect(brand.id)}
                className={`group relative p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${
                  isSelected
                    ? "scale-105 -translate-y-1"
                    : ""
                }`}
                style={{
                  backgroundColor: isSelected
                    ? brand.color
                    : "rgba(255, 255, 255, 0.05)",
                  boxShadow: isSelected
                    ? `0 20px 60px ${brand.color}80`
                    : "none",
                  border: `2px solid ${
                    isSelected ? brand.color : "rgba(255, 255, 255, 0.1)"
                  }`,
                }}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isSelected
                      ? "text-white"
                      : "text-gray-400 group-hover:text-white"
                  }`}
                  style={{
                    color: isSelected ? "white" : brand.color,
                  }}
                >
                  <Icon className="w-10 h-10 md:w-12 md:h-12" />
                </div>

                {/* Name */}
                <h3
                  className={`text-base md:text-lg font-bold mb-1 ${
                    isSelected
                      ? "text-white"
                      : "text-gray-300 group-hover:text-white"
                  }`}
                >
                  {brand.name}
                </h3>

                {/* Description */}
                <p
                  className={`text-xs md:text-sm ${
                    isSelected
                      ? "text-white/80"
                      : "text-gray-500 group-hover:text-gray-400"
                  }`}
                >
                  {brand.description}
                </p>

                {/* Selection Indicator */}
                {isSelected && (
                  <div className="absolute top-3 right-3 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4"
                      style={{ color: brand.color }}
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

        {/* Footer Note */}
        <p className="text-gray-500 text-sm">
          Don't worry, you can always change this later using the theme switcher
          button
        </p>
      </div>
    </div>
  );
};

export default BrandSelector;
