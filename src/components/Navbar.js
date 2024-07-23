import Link from 'next/link';
import { useState } from 'react';

export default function Navbar({ darkMode, setDarkMode}) {

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link href="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 dark:text-white text-lg">Logo</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/" className="py-4 px-2 text-gray-500 dark:text-white hover:text-green-500 transition duration-300">Home</Link>
            <Link href="/about" className="py-4 px-2 text-gray-500 dark:text-white hover:text-green-500 transition duration-300">About</Link>
            <Link href="/services" className="py-4 px-2 text-gray-500 dark:text-white hover:text-green-500 transition duration-300">Services</Link>
            <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-600">
              {darkMode ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
