import React from 'react';
import { FiMail, FiSettings, FiArrowRight } from 'react-icons/fi';
import { FaRobot, FaEnvelopeOpenText, FaUserTie } from 'react-icons/fa';
import Link from 'next/link';

export default function MainScreen() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-500 via-blue-600 to-indigo-700 dark:from-gray-800 dark:via-gray-900 dark:to-black transition-all duration-300 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-70 dark:opacity-40 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-2xl opacity-70 dark:opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-70 dark:opacity-40 animate-blob animation-delay-4000"></div>

      <div className="z-10 text-center space-y-10">
        <h1 className="text-7xl font-extrabold text-white drop-shadow-lg tracking-wide">
          ReplyGen
          <FaRobot className="inline-block ml-3 animate-spin-slow text-yellow-500" />
          <FiMail className="inline-block ml-3 animate-spin-slow text-red-500" />
        </h1>
        <p className="text-2xl text-white dark:text-gray-300 transition-all">
          Automate your email replies with AI-powered intelligence.
        </p>

        <div className="flex space-x-6 justify-center">
          <Link href="/form">
            <button className="flex items-center space-x-2 px-8 py-4 bg-white text-blue-900 dark:bg-gray-800 dark:text-gray-100 font-bold text-lg rounded-full shadow-2xl hover:bg-blue-200 dark:hover:bg-gray-700 transition-transform transform hover:scale-110">
              <span>Get Started</span>
              <FiArrowRight className="text-2xl" />
            </button>
          </Link>
          <Link href="/settings">
            <button className="flex items-center space-x-2 px-8 py-4 bg-yellow-500 text-blue-900 dark:bg-yellow-400 dark:text-gray-900 font-bold text-lg rounded-full shadow-2xl hover:bg-yellow-400 dark:hover:bg-yellow-500 transition-transform transform hover:scale-110">
              <span>Settings</span>
              <FiSettings className="text-2xl" />
            </button>
          </Link>
        </div>

        <div className="mt-12 flex justify-center space-x-8">
          <a
            href="https://www.linkedin.com/"
            className="text-white dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-600 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaUserTie className="text-5xl" />
          </a>
          <a
            href="https://www.github.com/"
            className="text-white dark:text-gray-400 hover:text-green-400 dark:hover:text-green-500 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaRobot className="text-5xl" />
          </a>
          <a
            href="mailto:support@replygen.com"
            className="text-white dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-600 transition-all"
          >
            <FaEnvelopeOpenText className="text-5xl" />
          </a>
        </div>
      </div>

      <footer className="mt-20 text-center text-white">
        <p className="text-lg">Join the email revolution with AI-driven replies.</p>
      </footer>
    </div>
  );
}
