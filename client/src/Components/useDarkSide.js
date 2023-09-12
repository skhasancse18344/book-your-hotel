import { useEffect, useState } from "react";

export default function useDarkSide() {
  // Get the initial theme from local storage or use "light" as a default
  const initialTheme = localStorage.theme || "light";

  // Initialize the theme state
  const [theme, setTheme] = useState(initialTheme);

  // Log to check if the theme is being updated
  console.log("Current Theme inside useDarkSide:", theme);
  // Function to toggle between "dark" and "light" themes
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };
  // Apply theme classes and update local storage when the theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === "dark" ? "light" : "dark");
    root.classList.add(theme);

    // Save theme to local storage
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, toggleTheme];
}
