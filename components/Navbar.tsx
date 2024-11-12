import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md dark:shadow-lg fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-3xl font-extrabold text-blue-600 dark:text-yellow-400">
                ReplyGen
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/">
              <span className="text-lg text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-yellow-400 transition-colors">
                Home
              </span>
            </Link>
            <Link href="/form">
              <span className="text-lg text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-yellow-400 transition-colors">
                ReplyGen
              </span>
            </Link>
            <Link href="/contact">
              <span className="text-lg text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-yellow-400 transition-colors">
                Contact Us
              </span>
            </Link>
            <button
              onClick={toggleDarkMode}
              className="text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-yellow-400 transition-all"
            >
              {darkMode ? <FiSun className="text-2xl" /> : <FiMoon className="text-2xl" />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className="text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-yellow-400 transition-all mr-2"
            >
              {darkMode ? <FiSun className="text-2xl" /> : <FiMoon className="text-2xl" />}
            </button>
            <button onClick={toggleMenu} className="text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-yellow-400 transition-all">
              {menuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link href="/">
              <span
                onClick={() => setMenuOpen(false)}
                className="block text-lg text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-yellow-400 transition-colors"
              >
                Home
              </span>
            </Link>
            <Link href="/form">
              <span
                onClick={() => setMenuOpen(false)}
                className="block text-lg text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-yellow-400 transition-colors"
              >
                ReplyGen
              </span>
            </Link>
            <Link href="/contact">
              <span
                onClick={() => setMenuOpen(false)}
                className="block text-lg text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-yellow-400 transition-colors"
              >
                Contact Us
              </span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
