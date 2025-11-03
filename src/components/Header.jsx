import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react"; 
import profileLight from "../assets/profile-light.jpeg";
import profileDark from "../assets/profile-dark.jpeg";

const navItems = ["home", "about", "skills", "projects", "contact"];

const Header = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const [menuOpen, setMenuOpen] = useState(false);

  // Apply dark/light theme 
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
        <div className="flex items-center space-x-3">
          <img
            src={darkMode ? profileDark : profileLight}
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover border-2 border-gray-300 dark:border-gray-600
             cursor-pointer"
          />
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white cursor-pointer">
            Soman Abbasi
          </h1>
        </div>

        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="capitalize text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition font-medium"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-3">
          {/* --- Dark Mode Toggle --- */}
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition shadow-sm"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <Sun size={22} strokeWidth={2} className="text-yellow-400 cursor-pointer" />
            ) : (
              <Moon size={22} strokeWidth={2} className="text-blue-400 cursor-pointer" />
            )}
          </button>

          {/* --- Mobile Menu Toggle --- */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* === Mobile Navigation Dropdown === */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center space-y-3 bg-white dark:bg-gray-900 py-4 shadow-md border-t border-gray-200 dark:border-gray-700">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              className="capitalize text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition font-medium"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
