
import { Code, Database, Globe, Cloud, Settings, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code className="h-8 w-8 text-white" />,
      iconBg: "bg-gradient-to-br from-portfolio-navy to-blue-700",
      skills: ["C", "C++", "Java", "Python"],
    },
    {
      title: "Web Development",
      icon: <Globe className="h-8 w-8 text-white" />,
      iconBg: "bg-gradient-to-br from-portfolio-teal to-emerald-500",
      skills: ["HTML", "CSS", "JavaScript", "React", "Spring Boot"],
    },
    {
      title: "Databases",
      icon: <Database className="h-8 w-8 text-white" />,
      iconBg: "bg-gradient-to-br from-indigo-600 to-portfolio-navy",
      skills: ["SQL"],
    },
    {
      title: "Concepts",
      icon: <Settings className="h-8 w-8 text-white" />,
      iconBg: "bg-gradient-to-br from-portfolio-orange to-amber-500",
      skills: [
        "Testing & Debugging", 
        "Design Principles", 
        "Data Structures", 
        "Cloud Computing", 
        "IoT"
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-8 w-8 text-white" />,
      iconBg: "bg-gradient-to-br from-sky-500 to-portfolio-teal",
      skills: ["Cloud Computing", "Version Control"],
    },
    {
      title: "Soft Skills",
      icon: <MessageSquare className="h-8 w-8 text-white" />,
      iconBg: "bg-gradient-to-br from-violet-600 to-purple-700",
      skills: [
        "Communication", 
        "Logical Thinking", 
        "Aptitude & Reasoning"
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="skills" className="py-24 bg-[#FEF7CD] relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#FDE1D3]/30 -z-10 rounded-bl-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#F2FCE2]/50 -z-10 rounded-tr-[80px]"></div>
      
      <div className="container-section relative z-10">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My technical skills and areas of expertise that I bring to projects.
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              variants={item}
            >
              <div className="h-3 bg-gradient-to-r from-portfolio-navy via-portfolio-teal to-portfolio-orange"></div>
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-lg shadow-lg ${category.iconBg}`}>
                    {category.icon}
                  </div>
                  <h3 className="ml-4 text-xl font-semibold font-montserrat">{category.title}</h3>
                </div>
                
                <div className="mt-6 grid grid-cols-2 gap-2">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill} 
                      className="flex items-center bg-gray-50 p-2 rounded-lg border border-gray-100 hover:bg-gray-100 transition-colors"
                    >
                      <span className="h-2 w-2 rounded-full bg-portfolio-teal mr-2"></span>
                      <span className="text-gray-700 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
