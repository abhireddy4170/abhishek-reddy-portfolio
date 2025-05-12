
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 bg-portfolio-light-gray relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent"></div>
        <div className="absolute top-1/4 right-0 w-40 h-40 bg-portfolio-teal/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-section relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get to know my background, education, and professional journey.
          </motion.p>
          
          <div className="space-y-12 mt-12">
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4 font-montserrat text-portfolio-navy">Personal Bio</h3>
              <div className="prose text-gray-700 leading-relaxed">
                <p>
                  I am a dedicated software developer with a strong passion for creating innovative solutions that solve real-world problems.
                  My journey in technology began with a curiosity about how digital systems work, which has evolved into a deep commitment to mastering
                  software development practices. I believe in continuous learning and pushing boundaries to achieve excellence in everything I do.
                </p>
                <p className="mt-3">
                  My career aspirations involve growing into a team leadership role in a tech-driven environment, where I can combine my technical expertise
                  with people management skills. I value effort-based growth, dedication, and strategic development in my professional life.
                </p>
              </div>
            </motion.div>
            
            <div>
              <motion.h3 
                className="text-2xl font-semibold mb-6 font-montserrat text-portfolio-navy"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Education Timeline
              </motion.h3>
              
              <div className="space-y-8">
                {[
                  {
                    title: "B.Tech in Artificial Intelligence & Machine Learning",
                    institution: "St. Peters Engineering College",
                    period: "2022 - Present",
                    grade: "GPA: 8.49",
                    delay: 0.2
                  },
                  {
                    title: "Intermediate (MPC)",
                    institution: "St. Anthony's Junior College",
                    period: "2020 - 2022",
                    grade: "91.2%",
                    delay: 0.3
                  },
                  {
                    title: "SSC",
                    institution: "ZPHS Kallakal",
                    period: "2019",
                    grade: "GPA: 9.7",
                    delay: 0.4
                  }
                ].map((education, index) => (
                  <motion.div 
                    key={education.title}
                    className="timeline-item" 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: education.delay }}
                  >
                    <div className="timeline-dot bg-gradient-to-r from-portfolio-teal to-portfolio-navy"></div>
                    <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-portfolio-teal ml-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                        <h4 className="font-montserrat font-semibold text-lg">{education.title}</h4>
                        <div className="flex items-center text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                          <Calendar size={14} className="mr-1 text-portfolio-navy" />
                          <span>{education.period}</span>
                        </div>
                      </div>
                      <p className="text-portfolio-teal font-medium">{education.institution}</p>
                      <p className="text-gray-600 mt-1 bg-gray-50 inline-block px-2 py-1 rounded">{education.grade}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <motion.h3 
                className="text-2xl font-semibold mb-6 font-montserrat text-portfolio-navy"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Work Experience
              </motion.h3>
              
              <div className="space-y-8">
                {[
                  {
                    title: "Tata Cybersecurity Analyst Simulation",
                    company: "Virtual Experience Program",
                    period: "May 2025",
                    highlights: [
                      "Implemented Identity and Access Management (IAM) solutions",
                      "Developed comprehensive cybersecurity documentation",
                      "Honed communication skills through security briefings"
                    ],
                    delay: 0.2
                  },
                  {
                    title: "SAP USA Technical Consulting Simulation",
                    company: "Virtual Experience Program",
                    period: "July 2023",
                    highlights: [
                      "Sourced and prepared data for analytics processing",
                      "Created interactive SAC dashboards for client metrics",
                      "Developed client presentation skills through deliverables"
                    ],
                    delay: 0.3
                  }
                ].map((work, index) => (
                  <motion.div 
                    key={work.title}
                    className="timeline-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: work.delay }}
                  >
                    <div className="timeline-dot bg-gradient-to-r from-portfolio-orange to-portfolio-navy"></div>
                    <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-portfolio-orange ml-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                        <h4 className="font-montserrat font-semibold text-lg">{work.title}</h4>
                        <div className="flex items-center text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                          <Calendar size={14} className="mr-1 text-portfolio-orange" />
                          <span>{work.period}</span>
                        </div>
                      </div>
                      <p className="text-portfolio-orange font-medium">{work.company}</p>
                      <ul className="list-none text-gray-700 mt-2 space-y-2">
                        {work.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center">
                            <span className="h-2 w-2 rounded-full bg-portfolio-orange mr-2"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
