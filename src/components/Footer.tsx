
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-portfolio-navy text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold font-montserrat">Gangidi Abhishek Reddy</h2>
            <p className="mt-2 text-gray-300 max-w-md">
              Aspiring Software Developer passionate about creating innovative solutions.
            </p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="mt-6 md:mt-0 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300">
              &copy; {currentYear} Gangidi Abhishek Reddy. All rights reserved.
            </p>
            
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a 
                    href="#home" 
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#portfolio" 
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
