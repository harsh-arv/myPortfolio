import React from "react";
import { useTheme } from "../context/ThemeContext";

const NetflixLogo = () => (
  <div className="flex items-center gap-2">
    <span className="text-3xl md:text-4xl font-black tracking-tighter" style={{ color: "#e50914", fontFamily: "'Arial Black', sans-serif", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
      HARSHFLIX
    </span>
  </div>
);

const FacebookLogo = () => (
  <div className="flex items-center gap-2">
    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-black text-2xl" style={{ backgroundColor: "#1877f2" }}>
      h
    </div>
    <span className="text-2xl md:text-3xl font-bold text-t-primary tracking-tight">
      harshbook
    </span>
  </div>
);

const AmazonLogo = () => (
  <div className="flex flex-col items-start leading-none">
    <span className="text-2xl md:text-3xl font-bold text-t-text tracking-tight">
      harsh<span className="text-t-primary">zon</span>
    </span>
    <svg viewBox="0 0 100 15" className="w-20 md:w-24 -mt-1" fill="none">
      <path d="M5 10 Q50 20 95 10" stroke="#ff9900" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <polygon points="90,6 98,10 90,14" fill="#ff9900"/>
    </svg>
  </div>
);

const SpotifyLogo = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#1db954" }}>
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
      </svg>
    </div>
    <span className="text-2xl md:text-3xl font-bold text-t-text">
      Harsh<span className="text-t-primary">ify</span>
    </span>
  </div>
);

const DefaultLogo = () => (
  <h1 className="text-4xl md:text-5xl font-signature ml-2 text-t-primary">
    Harsh Gandharv
  </h1>
);

const BrandLogo = () => {
  const { theme } = useTheme();

  switch (theme) {
    case "netflix": return <NetflixLogo />;
    case "facebook": return <FacebookLogo />;
    case "amazon": return <AmazonLogo />;
    case "spotify": return <SpotifyLogo />;
    default: return <DefaultLogo />;
  }
};

export default BrandLogo;
