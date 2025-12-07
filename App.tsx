import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import AIChat from './components/AIChat';
import { EXPERIENCE, PROJECTS, SKILLS, RESUME_DATA, EDUCATION, CERTIFICATIONS } from './constants';
import { Briefcase, Code, GraduationCap, MapPin, ExternalLink, Linkedin, Award, Mail } from 'lucide-react';
import { initGemini } from './services/geminiService';

const App: React.FC = () => {
  
  useEffect(() => {
    // Initialize Gemini when App mounts
    initGemini();
  }, []);

  return (
    <div className="min-h-screen bg-[#FDF4F5]">
      <Header />
      
      <main>
        <Hero />

        {/* Education Section */}
        <Section id="education" title="Education" bg="white">
           <div className="max-w-4xl mx-auto space-y-6">
             {EDUCATION.map((edu, idx) => (
               <div key={idx} className="flex flex-col md:flex-row gap-4 md:items-start p-6 rounded-xl border border-gray-100 hover:shadow-lg transition bg-white">
                  <div className="bg-purple-100 p-3 rounded-lg text-purple-600 shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                    <p className="text-purple-600 font-medium">{edu.school}</p>
                    <p className="text-gray-500 text-sm mb-2">{edu.duration}</p>
                    {edu.details && <p className="text-gray-600">{edu.details}</p>}
                  </div>
               </div>
             ))}
           </div>
        </Section>

        {/* Experience Section */}
        <Section id="experience" title="Experience" bg="light">
          <div className="max-w-4xl mx-auto relative border-l-2 border-purple-200 ml-4 md:ml-8 space-y-12">
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12">
                <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 ring-4 ring-purple-100"></span>
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                        {exp.role}
                      </h3>
                      <p className="text-purple-600 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-sm text-gray-500 mt-1 md:mt-0 text-right">
                       <p>{exp.duration}</p>
                       <p className="flex items-center justify-end gap-1 mt-0.5"><MapPin size={12}/> {exp.location}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mt-4">
                    {exp.description.map((point, i) => (
                      <li key={i} className="text-gray-600 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" title="Projects" bg="white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-purple-100 p-2 rounded-lg text-purple-600">
                    <Code size={20} />
                  </div>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                       <ExternalLink size={18} className="text-gray-400 hover:text-purple-500 cursor-pointer" />
                    </a>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-1 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="px-2 py-1 bg-white text-purple-600 text-xs font-medium rounded-full border border-purple-100">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Skills Section */}
        <Section id="skills" title="Technical Skills" bg="light">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
             {SKILLS.map((skillGroup, idx) => (
               <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-50 hover:border-purple-100 transition h-full">
                 <h3 className="text-base font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">{skillGroup.category}</h3>
                 <div className="flex flex-wrap gap-2">
                   {skillGroup.items.map((skill, sIdx) => (
                     <span key={sIdx} className="px-3 py-1 bg-gray-50 text-gray-700 rounded-md text-xs font-medium hover:bg-purple-50 hover:text-purple-600 transition">
                       {skill}
                     </span>
                   ))}
                 </div>
               </div>
             ))}
          </div>
        </Section>

        {/* Certifications Section */}
        <Section id="certifications" title="Certifications" bg="white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
               {CERTIFICATIONS.map((cert, idx) => (
                 <div key={idx} className="flex items-center gap-4 bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition">
                    <div className="bg-white p-2 rounded-full shadow-sm text-purple-600">
                      <Award size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{cert.name}</h4>
                      {cert.issuer && <p className="text-xs text-gray-500">{cert.issuer} {cert.year ? `• ${cert.year}` : ''}</p>}
                    </div>
                 </div>
               ))}
            </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" title="Get In Touch" bg="light">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-600 mb-8 text-lg">
              Feel free to reach out for opportunities, collaborations, or questions!
            </p>
            
            <div className="flex justify-center mb-10">
               <a href={RESUME_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-md hover:shadow-lg border border-purple-100 hover:border-purple-300 transition group text-gray-800 hover:text-purple-700">
                 <div className="bg-purple-100 p-2 rounded-full text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition">
                    <Linkedin size={24} />
                 </div>
                 <span className="font-semibold text-lg">Connect on LinkedIn</span>
               </a>
            </div>
            {/* Address removed as requested */}
          </div>
        </Section>

        <footer className="bg-white py-8 text-center text-gray-400 text-sm">
           <p>© {new Date().getFullYear()} {RESUME_DATA.name}. All rights reserved.</p>
        </footer>
      </main>

      {/* Floating AI Chat */}
      <AIChat />
    </div>
  );
};

export default App;