"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Menu, X, Moon, Sun } from "lucide-react";
import Image from "next/image";
import Logo from "../assets/logo.jpg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" aria-label="Home">
          <Image
            src={Logo}
            alt="Geeky Techh Logo"
            width={150} 
            height={20} 
          />
        </a>
        <div className="flex items-center">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 mr-4"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-800" />
            )}
          </button>
          <nav className="hidden md:flex space-x-4">
            <a
              href="#services"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Services
            </a>
            <a
              href="#skills"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Contact
            </a>
          </nav>
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 py-2">
          <a
            href="#services"
            className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Services
          </a>
          <a
            href="#skills"
            className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
