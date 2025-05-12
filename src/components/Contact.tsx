
import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Instagram } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. I'll get back to you soon!",
        duration: 5000,
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "abhishekreddygangidi@gmail.com",
      link: "mailto:abhishekreddygangidi@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 7995514903",
      link: "tel:+917995514903"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "abhishek-reddy-gangidi",
      link: "https://linkedin.com/in/abhishek-reddy-gangidi"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "abhireddy4170",
      link: "https://github.com/abhireddy4170"
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      label: "Instagram",
      value: "@abhi_reddy_0329",
      link: "https://instagram.com/abhi_reddy_0329"
    },
  ];

  return (
    <section id="contact" className="py-24 bg-portfolio-light-gray">
      <div className="container-section">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">
          Have a question or want to work together? Feel free to reach out.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="bg-white rounded-lg shadow-md p-8 animate-on-scroll">
            <h3 className="text-2xl font-semibold mb-6 font-montserrat">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-teal"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-teal"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-teal"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-portfolio-navy text-white py-3 rounded-md hover:bg-portfolio-teal transition-colors flex items-center justify-center"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          
          <div className="animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-semibold mb-6 font-montserrat">Get in Touch</h3>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start">
                    <div className="p-2 bg-portfolio-light-gray rounded-full">
                      {item.icon}
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-500">{item.label}</p>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-portfolio-navy hover:text-portfolio-teal transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-portfolio-navy to-portfolio-teal p-8 rounded-lg text-white">
              <h4 className="text-xl font-semibold mb-4 font-montserrat">Let's Collaborate</h4>
              <p>
                I'm always open to discussing product design work or partnership opportunities. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
