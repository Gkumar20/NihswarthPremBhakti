'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`sticky top-8 px-12 sm:w-fit flex sm:mx-auto sm:rounded-full z-50 bg-gradient-to-r  from-purple-900 via-blue-500 to-indigo-500 text-white p-4 shadow-lg shadow-gray-500 transition-all duration-300 ${scrolling ? 'bg-opacity-90' : 'bg-opacity-100'}`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo and Channel Name (Only on Mobile) */}
        <div className="flex items-center space-x-4 lg:hidden justify-center w-full">
          <Image src="/logo.png" alt="Channel Logo" width={40} height={40} className="rounded-full" />
          <Link href="/" className="text-xl font-bold hover:text-yellow-400 transition duration-300">
            Nihswarth Prem Bhakti
          </Link>
        </div>

        <div className="flex items-center space-x-8">
          <div className="hidden lg:flex space-x-8">
            <Link href="/" className="text-lg font-semibold hover:text-yellow-400 transition duration-300">
              Home
            </Link>
            <Link href="/contact" className="text-lg font-semibold hover:text-yellow-400 transition duration-300">
              Contact
            </Link>
            <Link href="/ads-promotion" className="text-lg font-semibold hover:text-yellow-400 transition duration-300">
              Ads & Promotion
            </Link>
            <Link href="/popularvideos" className="text-lg font-semibold hover:text-yellow-400 transition duration-300">
              Popular Videos
            </Link>
            <Link href="/about" className="text-lg font-semibold hover:text-yellow-400 transition duration-300">
              About Us
            </Link>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col items-center bg-gradient-to-r from-green-500 via-blue-500 to-red-500 text-white p-4 space-y-4">
          <Link href="/" className="text-lg font-semibold hover:text-yellow-400 transition duration-300">
            Home
          </Link>
          <Link href="/contact" className="text-lg font-semibold hover:text-yellow-400 transition duration-300">
            Contact
          </Link>
          <Link href="/ads-promotion" className="text-lg font-semibold hover:text-yellow-400 transition duration-300">
            Ads & Promotion
          </Link>
          <Link href="/popular-videos" className="text-lg font-semibold hover:text-yellow-400 transition duration-300">
            Popular Videos
          </Link>
          <Link href="/popularvideos" className="text-lg font-semibold hover:text-yellow-400 transition duration-300">
            All Videos
          </Link>
          <Link href="/about-us" className="text-lg font-semibold hover:text-yellow-400 transition duration-300">
            About Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
