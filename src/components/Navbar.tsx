import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-panel py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <motion.div
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-32 h-8 text-white flex items-center"
          >
            <svg width="100%" height="100%" viewBox="0 0 108 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
              <path d="M10.5966 11.9593V0L6.96333 2.0507V9.90948L0 5.98009V10.0673L10.5966 16.0465V27.9978L14.229 25.948V18.0963L21.1861 22.0222L21.1923 22.0257V17.9385L10.5966 11.9593Z" fill="currentColor"/>
              <path d="M0 22.0186L6.96333 18.0901V14.0029L0 17.9323V22.0186Z" fill="currentColor"/>
              <path d="M21.1923 5.98009L14.229 9.90948V13.9967L21.1923 10.0673V5.98009Z" fill="currentColor"/>
            </svg>
          </motion.div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/60 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary px-8 py-3"
          >
            Talk to Aiden
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-300 hover:text-white p-2"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass-panel py-6 px-6 flex flex-col gap-4 shadow-2xl md:hidden border-b border-white/5"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-white/80 hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary px-6 py-3 text-center font-semibold mt-4"
            >
              Talk to Aiden
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
