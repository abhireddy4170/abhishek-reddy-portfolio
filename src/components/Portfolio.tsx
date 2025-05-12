
import { ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "TravelTherapy",
      category: "Web Development",
      description: "A self-designed webpage exploring the therapeutic effects of travel. Built with HTML, CSS, and JavaScript. It blends technical skills with personal storytelling and demonstrates foundational front-end development expertise.",
      image: "/placeholder.svg",
      link: "#",
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container-section">
        <h2 className="section-title">Portfolio</h2>
        <p className="section-subtitle">
          Featured projects that showcase my technical skills and creativity.
        </p>

        <div className="grid grid-cols-1 gap-12 mt-12">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 animate-on-scroll"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-64 md:h-auto">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-sm text-portfolio-teal font-medium">{project.category}</span>
                    <h3 className="text-2xl font-bold mt-2 mb-4 font-montserrat">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                  
                  <a 
                    href={project.link}
                    className="inline-flex items-center text-portfolio-navy mt-6 group"
                  >
                    View Project 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-on-scroll">
          <p className="text-gray-600 mb-6">Looking forward to building more innovative projects in the future!</p>
          <div className="flex justify-center space-x-1">
            <span className="h-2 w-2 rounded-full bg-portfolio-orange animate-bounce-small" style={{animationDelay: "0s"}}></span>
            <span className="h-2 w-2 rounded-full bg-portfolio-teal animate-bounce-small" style={{animationDelay: "0.2s"}}></span>
            <span className="h-2 w-2 rounded-full bg-portfolio-navy animate-bounce-small" style={{animationDelay: "0.4s"}}></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
