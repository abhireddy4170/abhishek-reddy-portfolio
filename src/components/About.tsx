
import { Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-portfolio-light-gray">
      <div className="container-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know my background, education, and professional journey.
          </p>
          
          <div className="space-y-12 mt-12">
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-semibold mb-4 font-montserrat">Personal Bio</h3>
              <p className="text-gray-700 leading-relaxed">
                I am a dedicated software developer with a strong passion for creating innovative solutions that solve real-world problems.
                My journey in technology began with a curiosity about how digital systems work, which has evolved into a deep commitment to mastering
                software development practices. I believe in continuous learning and pushing boundaries to achieve excellence in everything I do.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                My career aspirations involve growing into a team leadership role in a tech-driven environment, where I can combine my technical expertise
                with people management skills. I value effort-based growth, dedication, and strategic development in my professional life.
              </p>
            </div>
            
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-semibold mb-6 font-montserrat">Education Timeline</h3>
              
              <div className="space-y-8">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h4 className="font-montserrat font-semibold text-lg">B.Tech in Artificial Intelligence & Machine Learning</h4>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      <span>2022 - Present</span>
                    </div>
                  </div>
                  <p className="text-portfolio-teal font-medium">St. Peters Engineering College</p>
                  <p className="text-gray-600 mt-1">GPA: 8.49</p>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h4 className="font-montserrat font-semibold text-lg">Intermediate (MPC)</h4>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      <span>2020 - 2022</span>
                    </div>
                  </div>
                  <p className="text-portfolio-teal font-medium">St. Anthony's Junior College</p>
                  <p className="text-gray-600 mt-1">91.2%</p>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h4 className="font-montserrat font-semibold text-lg">SSC</h4>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      <span>2019</span>
                    </div>
                  </div>
                  <p className="text-portfolio-teal font-medium">ZPHS Kallakal</p>
                  <p className="text-gray-600 mt-1">GPA: 9.7</p>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-semibold mb-6 font-montserrat">Work Experience</h3>
              
              <div className="space-y-8">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h4 className="font-montserrat font-semibold text-lg">Tata Cybersecurity Analyst Simulation</h4>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      <span>May 2025</span>
                    </div>
                  </div>
                  <p className="text-portfolio-teal font-medium">Virtual Experience Program</p>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                    <li>Implemented Identity and Access Management (IAM) solutions</li>
                    <li>Developed comprehensive cybersecurity documentation</li>
                    <li>Honed communication skills through security briefings</li>
                  </ul>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h4 className="font-montserrat font-semibold text-lg">SAP USA Technical Consulting Simulation</h4>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      <span>July 2023</span>
                    </div>
                  </div>
                  <p className="text-portfolio-teal font-medium">Virtual Experience Program</p>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                    <li>Sourced and prepared data for analytics processing</li>
                    <li>Created interactive SAC dashboards for client metrics</li>
                    <li>Developed client presentation skills through deliverables</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
