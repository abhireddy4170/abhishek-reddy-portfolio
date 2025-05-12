
import { Code, Pen, File, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "UI/UX Design",
      icon: <Pen className="h-10 w-10 text-white" />,
      description: "Information architecture, content writing, and feedback on visual decisions for effective user experiences.",
      color: "from-portfolio-navy to-indigo-800",
    },
    {
      title: "Web Design",
      icon: <Code className="h-10 w-10 text-white" />,
      description: "Content ideas, layout strategy, and conceptual code examples to bring your web presence to life.",
      color: "from-portfolio-teal to-emerald-600",
    },
    {
      title: "Software Development",
      icon: <File className="h-10 w-10 text-white" />,
      description: "Project generation, technical write-ups, and detailed documentation for software solutions.",
      color: "from-portfolio-orange to-amber-600",
    },
    {
      title: "Consulting",
      icon: <Briefcase className="h-10 w-10 text-white" />,
      description: "Portfolio strategy, resume alignment, and skills identification to advance your career goals.",
      color: "from-blue-600 to-portfolio-navy",
    },
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
    <section id="services" className="py-24 bg-portfolio-light-gray relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-60 h-60 bg-portfolio-teal opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-portfolio-orange opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container-section relative z-10">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Services
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Expert services I offer to help businesses and individuals achieve their technology goals.
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2"
              variants={item}
            >
              <div className={`p-8 bg-gradient-to-br ${service.color}`}>
                <div className="flex justify-center items-center">
                  <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-3 font-montserrat">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                
                <div className="mt-6 flex justify-center">
                  <a 
                    href="#contact" 
                    className="inline-block text-sm font-medium text-portfolio-navy hover:text-portfolio-teal transition-colors px-4 py-2 border-t border-gray-100 w-full text-center"
                  >
                    Inquire
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
