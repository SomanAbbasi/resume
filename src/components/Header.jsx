import React, { useState, useEffect } from "react";
import profileLight from "../assets/profile-light.jpeg";
import profileDark from "../assets/profile-dark.jpeg";
const navItems = ["home", "skills", "projects", "about", "experience", "contact"];

const Header = () => {
  // Initialize dark mode from localStorage
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 w-full z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo / Name */}
         <div className="flex items-center space-x-3">
          {/* Light Mode Profile */}
          <img
            src={profileLight}
            alt="Profile Light"
            className="block dark:hidden w-14 h-14 rounded-full object-cover border-2 border-gray-300 cursor-pointer"
          />

          {/* Dark Mode Profile */}
          <img
            src={profileDark}
            alt="Profile Dark"
            className="hidden dark:block w-14 h-14 rounded-full object-cover border-2 border-gray-600 cursor-pointer"
          />

          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Soman Abbasi
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="capitalize text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              {item}
            </a>
          ))}
        </nav>

       


        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="ml-4 px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 shadow transition"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </header>
  );
};

export default Header;
