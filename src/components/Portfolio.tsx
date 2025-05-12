import { ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "TravelTherapy",
      category: "Web Development",
      description: "A self-designed webpage exploring the therapeutic effects of travel. Built with HTML, CSS, and JavaScript. It blends technical skills with personal storytelling and demonstrates foundational front-end development expertise.",
      image: "/lovable-uploads/af3b45c3-06d1-4485-9ac4-b384fe3e3b9e.png",
      link: "#",
      tags: ["HTML", "CSS", "JavaScript"]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section id="portfolio" className="py-24 bg-[#FFDEE2] relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#F2FCE2] to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#FEC6A1] to-transparent"></div>
      </div>
      
      <div className="container-section relative z-10">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Portfolio
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Featured projects that showcase my technical skills and creativity.
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 gap-16 mt-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100"
              variants={item}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-64 md:h-auto relative group overflow-hidden bg-white flex items-center justify-center p-8">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6 z-10">
                    <a 
                      href={project.link} 
                      className="inline-flex items-center gap-2 bg-white text-portfolio-navy px-4 py-2 rounded-md text-sm font-medium hover:bg-portfolio-navy hover:text-white transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="max-w-[80%] max-h-[80%] object-contain transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm text-white font-medium bg-portfolio-teal px-3 py-1 rounded-full">{project.category}</span>
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">{tag}</span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold mt-2 mb-4 font-montserrat">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                  
                  <div className="mt-8">
                    <a 
                      href={project.link}
                      className="inline-flex items-center text-portfolio-navy group/link border-b border-portfolio-navy/30 pb-1 hover:border-portfolio-navy transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-portfolio-light-gray via-white to-portfolio-light-gray py-8 px-4 rounded-xl">
            <p className="text-gray-600 mb-6">Looking forward to building more innovative projects in the future!</p>
            <div className="flex justify-center space-x-3">
              <motion.span 
                className="h-3 w-3 rounded-full bg-portfolio-orange" 
                animate={{ 
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 1.5, 
                  delay: 0
                }}
              ></motion.span>
              <motion.span 
                className="h-3 w-3 rounded-full bg-portfolio-teal" 
                animate={{ 
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 1.5, 
                  delay: 0.2
                }}
              ></motion.span>
              <motion.span 
                className="h-3 w-3 rounded-full bg-portfolio-navy" 
                animate={{ 
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 1.5, 
                  delay: 0.4
                }}
              ></motion.span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
