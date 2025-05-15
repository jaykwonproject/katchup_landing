// src/components/Header.js
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-katchup-red">
            Katchup
          </div>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="block md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#features" className="text-gray-600 hover:text-katchup-red font-medium">Features</a></li>
            <li><a href="#waitlist" className="text-gray-600 hover:text-katchup-red font-medium">Join Waitlist</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-katchup-red font-medium">Contact</a></li>
          </ul>
        </nav>
      </div>
      
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col py-4">
            <li className="border-b border-gray-100">
              <a 
                href="#features" 
                className="block px-6 py-3 text-gray-600 hover:text-katchup-red"
                onClick={() => setMenuOpen(false)}
              >
                Features
              </a>
            </li>
            <li className="border-b border-gray-100">
              <a 
                href="#waitlist" 
                className="block px-6 py-3 text-gray-600 hover:text-katchup-red"
                onClick={() => setMenuOpen(false)}
              >
                Join Waitlist
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="block px-6 py-3 text-gray-600 hover:text-katchup-red"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}