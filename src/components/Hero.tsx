
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-[#D3E4FD] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-portfolio-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-portfolio-orange/5 rounded-full blur-3xl"></div>
        <div className="hidden md:block absolute top-1/3 left-1/3 w-40 h-40 bg-portfolio-navy/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 py-12 md:py-0 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span 
              className="inline-block px-3 py-1 bg-gradient-to-r from-portfolio-teal/10 to-portfolio-navy/10 text-portfolio-teal font-medium rounded-full text-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Welcome to my portfolio
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat leading-tight bg-clip-text text-transparent bg-gradient-to-r from-portfolio-navy via-portfolio-navy to-portfolio-teal">
              Gangidi Abhishek Reddy
            </h1>
            <p className="text-xl text-gray-600 max-w-xl">
              Aspiring Software Developer | Future Team Leader | Passionate About Code & Innovation
            </p>
            <p className="text-gray-700 max-w-lg backdrop-blur-sm bg-white/50 p-4 rounded-lg border border-gray-100 shadow-sm">
              A passionate and highly motivated software developer, eager to contribute meaningfully to reputable companies. 
              With a strong foundation in web development, cloud computing, and data analytics, 
              Abhishek aims to grow into a leadership role while solving real-world challenges through technology.
            </p>
            <div className="pt-4">
              <motion.a 
                href="#contact" 
                className="inline-flex items-center bg-gradient-to-r from-portfolio-navy to-portfolio-teal text-white px-6 py-3 rounded-md hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-portfolio-orange opacity-20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-portfolio-teal opacity-20 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
              <div className="h-64 w-64 md:h-80 md:w-80 rounded-3xl overflow-hidden border-4 border-white shadow-2xl relative z-10 transform rotate-3 transition-transform duration-300 hover:rotate-0">
                <img 
                  src="/lovable-uploads/a62c7ac9-a6d5-4174-afe5-868a09537ca9.png" 
                  alt="Gangidi Abhishek Reddy" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
