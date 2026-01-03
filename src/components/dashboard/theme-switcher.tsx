"use client";

import { useEffect, useState } from "react";

const themes = {
  obsidian: {
    "--primary": "#18181b",
    "--primary-light": "#f4f4f5",
    "--primary-glow": "rgba(0, 0, 0, 0.15)",
  },
  sunset: {
    "--primary": "#ea580c",
    "--primary-light": "#fff7ed",
    "--primary-glow": "rgba(234, 88, 12, 0.25)",
  },
  lavender: {
    "--primary": "#7c3aed",
    "--primary-light": "#f5f3ff",
    "--primary-glow": "rgba(124, 58, 237, 0.25)",
  },
  ocean: {
    "--primary": "#0284c7",
    "--primary-light": "#f0f9ff",
    "--primary-glow": "rgba(2, 132, 199, 0.25)",
  },
  forest: {
    "--primary": "#059669",
    "--primary-light": "#ecfdf5",
    "--primary-glow": "rgba(5, 150, 105, 0.25)",
  },
  berry: {
    "--primary": "#db2777",
    "--primary-light": "#fdf2f8",
    "--primary-glow": "rgba(219, 39, 119, 0.25)",
  },
} as const;

type ThemeName = keyof typeof themes;

export function ThemeSwitcher() {
  const [activeTheme, setActiveTheme] = useState<ThemeName>("obsidian");

  useEffect(() => {
    // Load theme from localStorage or default to obsidian
    const savedTheme = (localStorage.getItem("acumen-theme") ||
      "obsidian") as ThemeName;
    applyTheme(savedTheme);
    setActiveTheme(savedTheme);
  }, []);

  const applyTheme = (themeName: ThemeName) => {
    const root = document.documentElement;
    const theme = themes[themeName];
    for (const [key, value] of Object.entries(theme)) {
      root.style.setProperty(key, value);
    }
    localStorage.setItem("acumen-theme", themeName);
    setActiveTheme(themeName);
  };

  return (
    <div className="flex items-center gap-2 bg-white border border-border rounded-full px-3 py-1.5 shadow-sm">
      <span className="text-[10px] uppercase font-bold text-txt-muted mr-1 tracking-wider">
        Accent
      </span>
      {(Object.keys(themes) as ThemeName[]).map((themeName) => (
        <button
          key={themeName}
          onClick={() => {
            applyTheme(themeName);
            setActiveTheme(themeName);
          }}
          className={`theme-dot w-3.5 h-3.5 rounded-full border border-neutral-200 transition-all ${
            activeTheme === themeName
              ? "ring-2 ring-offset-1 ring-gray-300 scale-110"
              : ""
          }`}
          style={{
            backgroundColor:
              themeName === "obsidian"
                ? "#18181b"
                : themeName === "sunset"
                  ? "#ea580c"
                  : themeName === "lavender"
                    ? "#7c3aed"
                    : themeName === "ocean"
                      ? "#0284c7"
                      : themeName === "forest"
                        ? "#059669"
                        : "#db2777",
          }}
          title={themeName.charAt(0).toUpperCase() + themeName.slice(1)}
        />
      ))}
    </div>
  );
}
