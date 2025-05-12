
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

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
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="font-montserrat font-bold text-lg text-portfolio-navy">
          Abhishek<span className="text-portfolio-teal">.</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 items-center">
            {navigationLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="font-medium text-gray-600 hover:text-portfolio-teal transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a 
                href="/resume.pdf" 
                className="bg-portfolio-teal text-white px-4 py-2 rounded hover:bg-portfolio-navy transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4">
            <nav>
              <ul className="space-y-4">
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="block font-medium text-gray-600 hover:text-portfolio-teal transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li>
                  <a 
                    href="/resume.pdf" 
                    className="block bg-portfolio-teal text-white px-4 py-2 rounded text-center hover:bg-portfolio-navy transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
