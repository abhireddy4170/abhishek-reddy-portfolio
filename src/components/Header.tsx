
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.a 
          href="#home" 
          className="font-montserrat font-bold text-xl text-portfolio-navy group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-portfolio-navy to-portfolio-teal">Abhishek</span>
          <span className="text-portfolio-teal group-hover:text-portfolio-orange transition-colors duration-300">.</span>
        </motion.a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-2 items-center">
            {navigationLinks.map((link, index) => (
              <motion.li 
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
              >
                <a 
                  href={link.href} 
                  className={cn(
                    "font-medium px-4 py-2 rounded-full transition-all duration-300",
                    isScrolled 
                      ? "text-gray-700 hover:text-portfolio-teal hover:bg-gray-100" 
                      : "text-gray-800 hover:text-portfolio-teal hover:bg-white/30 backdrop-blur-sm"
                  )}
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <a 
                href="/resume.pdf" 
                className="bg-gradient-to-r from-portfolio-navy to-portfolio-teal text-white px-5 py-2 rounded-full hover:shadow-lg transition-all duration-300"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </motion.li>
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden text-gray-600 z-50" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="md:hidden fixed inset-0 bg-white z-40 flex flex-col justify-center"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <nav className="container mx-auto px-6">
                <ul className="space-y-4 text-center">
                  {navigationLinks.map((link, index) => (
                    <motion.li 
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <a 
                        href={link.href} 
                        className="block font-medium text-lg text-gray-800 hover:text-portfolio-teal py-3 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: navigationLinks.length * 0.1 }}
                  >
                    <a 
                      href="/resume.pdf" 
                      className="block bg-gradient-to-r from-portfolio-navy to-portfolio-teal text-white py-3 px-6 rounded-lg shadow-md mx-auto max-w-xs hover:shadow-lg transition-all"
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Resume
                    </a>
                  </motion.li>
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
