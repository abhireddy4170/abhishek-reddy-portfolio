
import { ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  const footerAnimation = {
    hidden: {
      opacity: 0,
      y: 20
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <footer className="bg-portfolio-navy text-white overflow-hidden relative">
      {/* Background graphics */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-portfolio-teal via-portfolio-orange to-portfolio-teal"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-portfolio-teal/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-portfolio-orange/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div variants={footerAnimation} initial="hidden" whileInView="show" viewport={{
          once: true
        }}>
            <h2 className="text-2xl font-bold font-montserrat flex items-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Gangidi Abhishek Reddy</span>
            </h2>
            <p className="mt-2 text-gray-300 max-w-md">
              Aspiring Software Developer passionate about creating innovative solutions.
            </p>
          </motion.div>
          
          <motion.button onClick={scrollToTop} aria-label="Scroll to top" variants={footerAnimation} initial="hidden" whileInView="show" viewport={{
          once: true
        }} whileHover={{
          y: -5
        }} whileTap={{
          scale: 0.95
        }} className="mt-6 md:mt-0 p-4 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:shadow-lg border border-white/10 backdrop-blur-sm group">
            <ArrowUp className="h-5 w-5 group-hover:text-portfolio-teal transition-colors" />
          </motion.button>
        </div>
        
        <motion.div className="border-t border-white/10 mt-8 pt-8" variants={footerAnimation} initial="hidden" whileInView="show" viewport={{
        once: true
      }} transition={{
        delay: 0.2
      }}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300">
              &copy; {currentYear} Gangidi Abhishek Reddy. All rights reserved.
            </p>
            
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                {[{
                name: "Home",
                href: "#home"
              }, {
                name: "About",
                href: "#about"
              }, {
                name: "Portfolio",
                href: "#portfolio"
              }, {
                name: "Contact",
                href: "#contact"
              }].map((link, index) => <li key={link.name}>
                    <a href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white hover:after:w-full after:transition-all after:duration-300">
                      {link.name}
                    </a>
                  </li>)}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
