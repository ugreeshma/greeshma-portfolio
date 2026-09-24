import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Calendar, CheckCircle2, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function HackathonProjects() {
  const hackathonProjects = portfolioData.hackathonProjects;
  
  const [activeProject, setActiveProject] = useState(null);

  const openProject = (project) => {
    setActiveProject(project);
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setActiveProject(null);
    // Restore background scrolling
    document.body.style.overflow = 'unset';
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <section id="hackathon-projects" className="py-24 bg-[#FAF8F5] border-t border-[#E5DFD9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-left mb-20 space-y-2">
          <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-[#23211F]">
            Hackathons
          </h2>
          <p className="text-sm text-[#706C68] max-w-lg font-light leading-relaxed font-sans">
            Recognition highlights from the contests I reached, with the key rounds and outcomes shown first.
          </p>
          <div className="w-16 h-1 bg-[#C87A53] mt-2 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {hackathonProjects.map((project, index) => (
            <motion.div
              key={project.title}
              onClick={() => openProject(project)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="bg-white border border-[#E5DFD9] overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col h-full group"
            >
              <div className="p-7 pb-5 text-left space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center px-3.5 py-1 bg-[#C87A53] text-white text-xs font-bold uppercase tracking-wider shadow-sm font-sans">
                    <Award size={12} className="mr-1.5" />
                    {project.title === 'Cortex' ? 'National Finalist' : 'Global Finalist'}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 bg-[#F4EFEA] border border-[#E5DFD9] text-xs font-semibold text-[#706C68] font-sans">
                    <Calendar size={12} className="mr-1.5" />
                    {project.period}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-display font-medium tracking-tight text-[#23211F] group-hover:text-[#C87A53] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#706C68] font-sans">
                    {project.event}
                  </p>
                </div>
              </div>

              <div className="relative aspect-[16/10] bg-[#F4EFEA] overflow-hidden border-y border-[#E5DFD9]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain p-6 transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-7 text-left space-y-5 flex-grow flex flex-col">
                <ul className="space-y-2 text-base text-[#706C68] font-light leading-relaxed mb-6 flex-grow font-sans">
                  {project.highlights.map((point) => (
                    <li key={point} className="flex items-start">
                      <CheckCircle2 size={16} className="mr-2 mt-1 text-[#23211F] flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tech.map((tag) => (
                    <span key={tag} className="text-xs font-semibold font-sans text-[#23211F] bg-[#F4EFEA] border border-[#E5DFD9] px-2.5 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pure Visual Editorial Case-Study Spread */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
            className="fixed inset-0 z-[99999] bg-white overflow-y-auto cursor-pointer"
          >
            {/* Sticky Header with Close Button */}
            <div className="sticky top-0 w-full flex justify-between items-center p-6 md:p-8 bg-white/90 backdrop-blur-sm z-50 pointer-events-none">
              <div className="pointer-events-auto">
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#706C68] block">
                  {activeProject.event}
                </span>
                <h2 className="text-2xl font-display font-medium text-[#23211F]">
                  {activeProject.title}
                </h2>
              </div>
              <button
                onClick={closeProject}
                className="pointer-events-auto text-[#23211F] hover:text-[#C87A53] transition-colors p-2"
              >
                <X size={32} strokeWidth={1.5} />
              </button>
            </div>

            <div 
              className="px-6 pb-24 md:px-12 pt-8 flex flex-col items-center max-w-6xl mx-auto cursor-default space-y-12 w-full min-h-screen"
              onClick={(e) => e.stopPropagation()}
            >
              {activeProject.gallery && activeProject.gallery.length >= 3 ? (
                /* 3-Image Spread (e.g. Nomura) - True Editorial Hierarchy */
                <div className="w-full max-w-4xl mx-auto flex flex-col items-center mt-4">
                  
                  {/* Primary Large Image (Top Center) */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-[90%] md:w-[75%] z-10 p-2 bg-white shadow-sm border border-[#E5DFD9]"
                  >
                    <img 
                      src={activeProject.gallery[0]} 
                      alt="Primary showcase" 
                      className="w-full h-auto max-h-[45vh] object-contain"
                    />
                  </motion.div>

                  {/* Secondary Photo & Certificate Row (Bottom) */}
                  <div className="w-full flex justify-between items-start -mt-8 md:-mt-16 px-2 md:px-8">
                    
                    {/* Secondary Image (Left Middle) */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                      className="w-[45%] md:w-[40%] z-20 p-2 bg-white shadow-sm border border-[#E5DFD9] rotate-1 md:rotate-2"
                    >
                      <img 
                        src={activeProject.gallery[1]} 
                        alt="Secondary showcase" 
                        className="w-full h-auto max-h-[35vh] object-contain"
                      />
                    </motion.div>

                    {/* Certificate (Right Bottom) */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                      className="w-[50%] md:w-[45%] z-30 p-2 bg-white shadow-md border border-[#E5DFD9] mt-12 md:mt-24 -rotate-1 md:-rotate-2"
                    >
                      <img 
                        src={activeProject.gallery[2]} 
                        alt="Certificate" 
                        className="w-full h-auto max-h-[40vh] object-contain"
                      />
                    </motion.div>

                  </div>
                </div>
              ) : activeProject.gallery && activeProject.gallery.length > 0 ? (
                /* 1-Image Spread (e.g. Emodio) */
                <div className="w-full flex items-center justify-center mt-8">
                  {activeProject.gallery.map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="w-full max-w-3xl p-2 md:p-3 bg-white shadow-md border border-[#E5DFD9]"
                    >
                      <img 
                        src={img} 
                        alt="Project showcase" 
                        className="w-full h-auto max-h-[75vh] object-contain"
                      />
                    </motion.div>
                  ))}
                </div>
              ) : (
                /* Fallback if no images */
                <div className="flex flex-col items-center justify-center text-center h-[50vh]">
                  <Award size={48} className="text-[#E5DFD9] mb-6" strokeWidth={1} />
                  <p className="font-sans text-[#706C68] max-w-sm font-light">
                    Archival photography for this event is currently being curated for the portfolio.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}