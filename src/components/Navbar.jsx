import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20"> {/* Increased height */}
          {/* Logo */}
          <div className="text-3xl font-bold text-gray-900">Portfolio</div> {/* Increased font size */}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 text-2xl">Home</a> {/* Increased font size */}
            <a href="#" className="text-gray-700 hover:text-gray-900 text-2xl">About</a> {/* Increased font size */}
            <a href="#" className="text-gray-700 hover:text-gray-900 text-2xl">Projects</a> {/* Increased font size */}
            <a href="#" className="text-gray-700 hover:text-gray-900 text-2xl">Contact</a> {/* Increased font size */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 text-gray-700"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-gray-900 text-lg">Home</a> {/* Increased font size */}
              <a href="#" className="text-gray-700 hover:text-gray-900 text-lg">About</a> {/* Increased font size */}
              <a href="#" className="text-gray-700 hover:text-gray-900 text-lg">Projects</a> {/* Increased font size */}
              <a href="#" className="text-gray-700 hover:text-gray-900 text-lg">Contact</a> {/* Increased font size */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
