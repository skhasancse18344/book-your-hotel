import React, { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "./useDarkSide";

export default function DarkModeToggle() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(localStorage.theme === "dark");

  const toggleDarkMode = (checked) => {
    const newTheme = checked ? "dark" : "light";
    setTheme(newTheme);
    setDarkSide(checked);
    localStorage.setItem("theme", newTheme); // Save theme to local storage
    console.log("New Theme:", newTheme); // Log the new theme
  };

  useEffect(() => {
    // Apply the theme class to the root element
    const root = window.document.documentElement;
    root.classList.remove(darkSide ? "light" : "dark");
    root.classList.add(colorTheme);

    // Log to check if classes are being applied correctly
    console.log("Current Theme Class:", colorTheme);
  }, [colorTheme, darkSide]);

  return (
    <div>
      <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={56} />
    </div>
  );
}
