'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Work', href: '/work' },
    { name: 'Fiction', href: '/fiction' },
    { name: 'Services', href: '/#services' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center text-off-white transition-colors duration-300 ${
          isScrolled ? 'bg-bg-dark/95 backdrop-blur-md border-b border-muted-grey/10' : 'bg-transparent'
        }`}
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : '-100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <Link href="/" className="font-bebas text-3xl tracking-wider flex items-baseline">
          ONIMISON<span className="text-rust text-4xl leading-none">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 font-space-mono text-sm uppercase tracking-widest">
          {navLinks.map((link) => {
            const isPageActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`hover:text-rust transition-colors ${isPageActive ? 'text-rust' : ''}`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-off-white hover:text-rust transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-rust flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-6 right-6 text-bg-dark hover:text-off-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={36} />
            </button>
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-bebas text-6xl text-bg-dark hover:text-off-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
