"use client";

import { useState } from "react";

const themes = ["ocean", "sunset", "forest"] as const;
type Theme = (typeof themes)[number];

const themeLabels: Record<Theme, string> = {
  ocean: "🌊 Ocean",
  sunset: "🌅 Sunset",
  forest: "🌿 Forest",
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("ocean");

  function cycleTheme() {
    const nextIndex = (themes.indexOf(theme) + 1) % themes.length;
    const next = themes[nextIndex];
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
  }

  return (
    <button
      onClick={cycleTheme}
      className="text-sm text-white bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors"
    >
      {themeLabels[theme]}
    </button>
  );
}