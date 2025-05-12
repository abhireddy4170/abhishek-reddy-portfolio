
import { Code, Database, Globe, Cloud, Settings, MessageSquare } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code className="h-8 w-8 text-portfolio-navy" />,
      skills: ["C", "C++", "Java", "Python"],
    },
    {
      title: "Web Development",
      icon: <Globe className="h-8 w-8 text-portfolio-navy" />,
      skills: ["HTML", "CSS", "JavaScript", "React", "Spring Boot"],
    },
    {
      title: "Databases",
      icon: <Database className="h-8 w-8 text-portfolio-navy" />,
      skills: ["SQL"],
    },
    {
      title: "Concepts",
      icon: <Settings className="h-8 w-8 text-portfolio-navy" />,
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
      icon: <Cloud className="h-8 w-8 text-portfolio-navy" />,
      skills: ["Cloud Computing", "Version Control"],
    },
    {
      title: "Soft Skills",
      icon: <MessageSquare className="h-8 w-8 text-portfolio-navy" />,
      skills: [
        "Communication", 
        "Logical Thinking", 
        "Aptitude & Reasoning"
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container-section">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">
          My technical skills and areas of expertise that I bring to projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-100 card-hover animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-portfolio-light-gray rounded-lg">
                  {category.icon}
                </div>
                <h3 className="ml-4 text-xl font-semibold font-montserrat">{category.title}</h3>
              </div>
              
              <div className="mt-4">
                {category.skills.map((skill) => (
                  <div key={skill} className="mb-2 flex items-center">
                    <span className="h-2 w-2 rounded-full bg-portfolio-teal mr-2"></span>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
