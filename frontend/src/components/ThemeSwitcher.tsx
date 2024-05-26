"use client";
import { useEffect, useState } from "react";
import Sun from "./icons/Sun";
import Moon from "./icons/Moon";

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    console.log(isDarkMode);
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode as boolean);
    localStorage.setItem("darkMode", darkMode + "");
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="">
      <div className="flex flex-col justify-center">
        <input type="checkbox" name="light-switch" className="hidden" />
        <label
          className="relative cursor-pointer p-2"
          htmlFor="light-switch"
          onClick={toggleDarkMode}
        >
          <Sun className="hidden dark:block" />
          <Moon className="dark:hidden" />
        </label>
      </div>
    </div>
  );
};
export default ThemeSwitcher;
