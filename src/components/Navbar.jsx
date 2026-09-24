import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Code } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Creative Corner', href: '#creative' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-4 glass-header shadow-sm' : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Personal Brand */}
        <a href="#" className="flex items-center space-x-2 text-[#23211F] group">
          <div className="w-8 h-8 rounded-lg bg-[#C87A53] flex items-center justify-center text-white font-display font-medium text-lg shadow-sm">
            L
          </div>
          <span className="font-sans font-bold tracking-tight text-lg group-hover:text-[#C87A53] transition-colors duration-200">
            Labdhi Mandovara
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#706C68] hover:text-[#23211F] transition-colors duration-200 relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C87A53] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#23211F] hover:bg-[#C87A53] rounded-lg transition-all duration-300 shadow-sm"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#23211F] hover:text-[#C87A53] transition-colors focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-[#FAF8F5] border-b border-[#E5DFD9] shadow-lg py-6 px-6 md:hidden flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold text-[#706C68] hover:text-[#23211F] transition-colors py-2 border-b border-[#FAF8F5] hover:border-[#E5DFD9]"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center px-4 py-3 text-sm font-semibold text-white bg-[#23211F] hover:bg-[#C87A53] rounded-lg transition-all duration-300"
            >
              Let's Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
