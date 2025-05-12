
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-white">
      <div className="container mx-auto px-6 py-12 md:py-0 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <span className="inline-block px-3 py-1 bg-portfolio-light-gray text-portfolio-teal font-medium rounded-full text-sm">
              Welcome to my portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat leading-tight">
              Gangidi Abhishek Reddy
            </h1>
            <p className="text-xl text-gray-600 max-w-xl">
              Aspiring Software Developer | Future Team Leader | Passionate About Code & Innovation
            </p>
            <p className="text-gray-700 max-w-lg">
              A passionate and highly motivated software developer, eager to contribute meaningfully to reputable companies. 
              With a strong foundation in web development, cloud computing, and data analytics, 
              Abhishek aims to grow into a leadership role while solving real-world challenges through technology.
            </p>
            <div className="pt-4">
              <a 
                href="#contact" 
                className="inline-flex items-center bg-portfolio-navy text-white px-6 py-3 rounded-md hover:bg-portfolio-teal transition-colors"
              >
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end animate-fade-in" style={{animationDelay: "0.3s"}}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-portfolio-orange opacity-20 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-portfolio-teal opacity-20 rounded-full"></div>
              <div className="h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10">
                <img 
                  src="/placeholder.svg" 
                  alt="Gangidi Abhishek Reddy" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
