import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 py-4 text-center text-gray-800 dark:text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm sm:text-base">
          © {currentYear} ReplyGen | All rights reserved
        </p>
        <p className="mt-2 text-sm sm:text-base">
          Made by: Wilfredo Aaron Sosa Ramos
        </p>
      </div>
    </footer>
  );
}
