
import { Code, Pen, File, Briefcase } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "UI/UX Design",
      icon: <Pen className="h-10 w-10 text-white" />,
      description: "Information architecture, content writing, and feedback on visual decisions for effective user experiences.",
      color: "bg-portfolio-navy",
    },
    {
      title: "Web Design",
      icon: <Code className="h-10 w-10 text-white" />,
      description: "Content ideas, layout strategy, and conceptual code examples to bring your web presence to life.",
      color: "bg-portfolio-teal",
    },
    {
      title: "Software Development",
      icon: <File className="h-10 w-10 text-white" />,
      description: "Project generation, technical write-ups, and detailed documentation for software solutions.",
      color: "bg-portfolio-orange",
    },
    {
      title: "Consulting",
      icon: <Briefcase className="h-10 w-10 text-white" />,
      description: "Portfolio strategy, resume alignment, and skills identification to advance your career goals.",
      color: "bg-portfolio-navy",
    },
  ];

  return (
    <section id="services" className="py-24 bg-portfolio-light-gray">
      <div className="container-section">
        <h2 className="section-title">Services</h2>
        <p className="section-subtitle">
          Expert services I offer to help businesses and individuals achieve their technology goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="rounded-lg overflow-hidden shadow-md card-hover animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`p-6 ${service.color}`}>
                <div className="flex justify-center">
                  {service.icon}
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-3 font-montserrat">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
