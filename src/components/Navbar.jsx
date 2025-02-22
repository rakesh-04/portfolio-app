import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

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
          <div className="text-4xl font-bold text-gray-900">Portfolio</div> {/* Increased font size */}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <HashLink to="/#home" className="text-gray-700 hover:text-gray-900 text-2xl">Home</HashLink> {/* Increased font size */}
            <HashLink to="/#Ht" className="text-gray-700 hover:text-gray-900 text-2xl">About</HashLink> {/* Increased font size */}
            <HashLink to="/projects" className="text-gray-700 hover:text-gray-900 text-2xl">Projects</HashLink> {/* Increased font size */}
            <HashLink to="/#contact" className="text-gray-700 hover:text-gray-900 text-2xl">Contact</HashLink> {/* Increased font size */}
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
              <HashLink to="/#home" className="text-gray-700 hover:text-gray-900 text-2xl">Home</HashLink> {/* Increased font size */}
              <HashLink to="/#Ht" className="text-gray-700 hover:text-gray-900 text-2xl">About</HashLink> {/* Increased font size */}
              <HashLink to="/projects" className="text-gray-700 hover:text-gray-900 text-2xl">Projects</HashLink> {/* Increased font size */}
              <HashLink to="/#contact" className="text-gray-700 hover:text-gray-900 text-2xl">Contact</HashLink> {/* Increased font size */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
