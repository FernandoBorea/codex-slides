import { useState } from "react";

export type SlideTheme = "dark" | "light";

/** The deck's projection preference never changes the application theme. */
export function useSlideTheme(deckSlug: string) {
  const key = `devday-slides:theme:${deckSlug}`;
  const [theme, setTheme] = useState<SlideTheme>(() => {
    try {
      return localStorage.getItem(key) === "dark" ? "dark" : "light";
    } catch {
      return "light";
    }
  });

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem(key, next);
    } catch {
      // The control still works when browser storage is unavailable.
    }
  }

  return { theme, toggleTheme };
}
