import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const GithubIcon = ({ size = 24, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function Projects() {
  const projects = portfolioData.projects;

  return (
    <section id="projects" className="py-24 bg-[#FAF8F5] border-t border-[#E5DFD9]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-left mb-20 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C87A53]">Case Studies</span>
          <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-[#23211F]">
            Featured Projects
          </h2>
          <p className="text-sm text-[#706C68] max-w-lg font-light leading-relaxed">
            Detailed walkthroughs of AI models, public safety frameworks, and multilingual dialog systems built for global challenges.
          </p>
          <div className="w-16 h-1 bg-[#C87A53] mt-2 rounded-full" />
        </div>

        {/* Alternate Layout Projects */}
        <div className="space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center`}
              >
                
                {/* Image Section */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <motion.div
                    whileHover={{ scale: 1.015 }}
                    transition={{ duration: 0.4 }}
                    className="relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-[#E5DFD9] bg-[#F4EFEA] group aspect-[4/3] flex items-center justify-center cursor-pointer"
                  >
                    {/* Visual Overlay Grid */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#C87A53]/10 to-transparent z-10 opacity-60 group-hover:opacity-0 transition-opacity duration-300" />
                    
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain p-4 transform scale-100 group-hover:scale-[1.02] transition-transform duration-700"
                    />
                  </motion.div>
                </div>

                {/* Information Section */}
                <div className={`lg:col-span-6 text-left space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  
                  {/* Category Tag */}
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C87A53] px-3 py-1 bg-[#F4EFEA] rounded-full border border-[#C87A53]/15">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-[#23211F]">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-[#706C68] font-light leading-relaxed">
                    {project.description}
                  </p>

                  {/* Achievements List */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs uppercase tracking-widest font-bold text-[#23211F] flex items-center">
                      <Award size={14} className="mr-2 text-[#C87A53]" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {project.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="text-sm text-[#706C68] font-light flex items-start">
                          <CheckCircle size={14} className="mr-2.5 mt-0.5 text-emerald-600 flex-shrink-0" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tag) => (
                      <span key={tag} className="text-xs font-semibold font-mono text-[#23211F] bg-[#F4EFEA] border border-[#E5DFD9] px-2.5 py-1 rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* External Links */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-[#E5DFD9]">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center space-x-2 text-sm font-semibold text-[#23211F] hover:text-[#C87A53] transition-colors"
                    >
                      <GithubIcon size={16} />
                      <span>Codebase</span>
                    </a>
                    {project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center space-x-2 text-sm font-semibold text-[#23211F] hover:text-[#C87A53] transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
