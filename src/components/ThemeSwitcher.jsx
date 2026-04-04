import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { FaPalette, FaTimes } from "react-icons/fa";

const brandDescriptions = {
  default: "Clean & minimal portfolio",
  netflix: "Browse like streaming shows",
  facebook: "Social profile experience",
  amazon: "Shop for talent, product style",
  spotify: "Listen to my career playlist",
};

const ThemeSwitcher = () => {
  const { theme, setTheme, themes } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-8 left-8 z-50">
      {open && (
        <div className="mb-4 bg-t-card border border-t-border rounded-xl shadow-2xl p-5 w-64">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-t-text font-bold text-sm uppercase tracking-wider">
              Choose Experience
            </h3>
            <button
              onClick={() => setOpen(false)}
              className="text-t-text-secondary hover:text-t-text transition-colors"
            >
              <FaTimes size={14} />
            </button>
          </div>
          <div className="space-y-2">
            {Object.values(themes).map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 text-left ${
                  theme === t.id
                    ? "bg-t-primary text-white font-semibold"
                    : "text-t-text-secondary hover:bg-t-alt hover:text-t-text"
                }`}
              >
                <span
                  className="w-5 h-5 rounded-full flex-shrink-0 border-2 border-white/20"
                  style={{ backgroundColor: t.color }}
                />
                <div>
                  <span className="text-sm block">{t.name}</span>
                  <span className={`text-xs block ${theme === t.id ? "text-white/70" : "text-t-text-muted"}`}>
                    {brandDescriptions[t.id]}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 text-white"
        style={{ backgroundColor: "var(--c-primary)" }}
        aria-label="Switch theme"
      >
        <FaPalette size={20} />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
