
import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Instagram, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { motion } from 'framer-motion';

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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  const formContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const formItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="contact" className="py-24 bg-portfolio-light-gray relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-portfolio-teal/5 blur-3xl"></div>
        <div className="absolute bottom-10 left-0 w-80 h-80 rounded-full bg-portfolio-orange/5 blur-3xl"></div>
      </div>
      
      <div className="container-section relative z-10">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Have a question or want to work together? Feel free to reach out.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <motion.div 
            className="bg-white rounded-xl shadow-xl p-8 border border-gray-100"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 font-montserrat bg-clip-text text-transparent bg-gradient-to-r from-portfolio-navy to-portfolio-teal">Send a Message</h3>
            
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-6"
              variants={formContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div variants={formItem}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-portfolio-teal focus:border-transparent transition-all duration-200"
                  required
                  placeholder="Your name"
                />
              </motion.div>
              
              <motion.div variants={formItem}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-portfolio-teal focus:border-transparent transition-all duration-200"
                  required
                  placeholder="your.email@example.com"
                />
              </motion.div>
              
              <motion.div variants={formItem}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-portfolio-teal focus:border-transparent transition-all duration-200 resize-none"
                  required
                  placeholder="Your message here..."
                ></textarea>
              </motion.div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-portfolio-navy to-portfolio-teal text-white py-3 rounded-lg hover:shadow-lg transition-all flex items-center justify-center space-x-2 group"
                variants={formItem}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <Send className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.form>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 font-montserrat bg-clip-text text-transparent bg-gradient-to-r from-portfolio-navy to-portfolio-teal">Get in Touch</h3>
            
            <motion.div 
              className="bg-white rounded-xl shadow-xl p-8 border border-gray-100"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <motion.div key={item.label} className="flex items-start group" variants={item}>
                    <div className="p-3 bg-portfolio-light-gray rounded-lg group-hover:bg-portfolio-navy/5 transition-colors">
                      {item.icon}
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-500">{item.label}</p>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-portfolio-navy hover:text-portfolio-teal transition-colors font-medium"
                      >
                        {item.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="mt-8 bg-gradient-to-r from-portfolio-navy to-portfolio-teal p-8 rounded-xl text-white shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-xl font-semibold mb-4 font-montserrat">Let's Collaborate</h4>
              <p className="text-white/90 leading-relaxed">
                I'm always open to discussing product design work or partnership opportunities. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <div className="mt-6">
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-white text-portfolio-navy rounded-lg hover:bg-portfolio-light-gray transition-colors"
                >
                  <span className="mr-2">View Resume</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
