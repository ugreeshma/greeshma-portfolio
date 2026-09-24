import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, GraduationCap, ShieldCheck, CheckCircle2, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Timeline() {
  const experiences = portfolioData.experience;
  const educations = portfolioData.education;
  const certifications = portfolioData.certifications;

  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="experience" className="py-24 bg-[#FAF8F5] border-t border-[#E5DFD9]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-left mb-16 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C87A53]">Journey</span>
          <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-[#23211F]">
            Experience & Achievements
          </h2>
          <div className="w-16 h-1 bg-[#C87A53] mt-2 rounded-full" />
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-[#E5DFD9] mb-12 overflow-x-auto whitespace-nowrap">
          <button
            onClick={() => setActiveTab('experience')}
            className={`pb-4 px-6 text-sm font-sans font-bold uppercase tracking-wider transition-colors duration-200 relative ${
              activeTab === 'experience' ? 'text-[#C87A53]' : 'text-[#706C68] hover:text-[#23211F]'
            }`}
          >
            Experience & Education
            {activeTab === 'experience' && (
              <motion.div layoutId="timelineActiveLine" className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C87A53]" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('certifications')}
            className={`pb-4 px-6 text-sm font-sans font-bold uppercase tracking-wider transition-colors duration-200 relative ${
              activeTab === 'certifications' ? 'text-[#C87A53]' : 'text-[#706C68] hover:text-[#23211F]'
            }`}
          >
            Certifications
            {activeTab === 'certifications' && (
              <motion.div layoutId="timelineActiveLine" className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C87A53]" />
            )}
          </button>
        </div>

        {/* Tab Contents */}
        <div>
          {/* Work & Leadership Timeline */}
          {activeTab === 'experience' && (
            <div className="max-w-4xl mx-auto text-left relative pl-8 border-l border-[#E5DFD9] space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-[#FAF8F5] border-2 border-[#E5DFD9] group-hover:border-[#C87A53] flex items-center justify-center transition-colors">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#E5DFD9] group-hover:bg-[#C87A53] transition-colors" />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 bg-white border border-[#E5DFD9] rounded-2xl shadow-sm hover:shadow-md transition-shadow group-hover:border-[#C87A53]/30">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-[#23211F]">{exp.role}</h3>
                        <p className="text-sm font-semibold text-[#C87A53]">{exp.company}</p>
                      </div>
                      <div className="flex items-center space-x-2 text-xs font-semibold text-[#706C68] px-3 py-1 bg-[#F4EFEA] border border-[#E5DFD9] rounded-lg">
                        <Calendar size={12} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-sm text-[#706C68] font-light leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Education Sub-Section */}
              <div className="pt-8">
                <h3 className="text-lg font-bold text-[#23211F] mb-6 flex items-center">
                  <GraduationCap size={20} className="mr-2 text-[#C87A53]" />
                  Education Details
                </h3>
                <div className="space-y-6">
                  {educations.map((edu, index) => (
                    <div key={index} className="p-6 bg-white/50 border border-dashed border-[#E5DFD9] rounded-xl">
                      <div className="flex justify-between items-start flex-wrap gap-2">
                        <div>
                          <h4 className="font-bold text-[#23211F]">{edu.degree}</h4>
                          <p className="text-xs text-[#706C68]">{edu.institution} | {edu.period}</p>
                        </div>
                        <span className="text-xs font-bold text-white bg-[#23211F] px-2.5 py-1 rounded-md">
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}



          {/* Certifications Elegant Cards */}
          {activeTab === 'certifications' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -4, borderColor: '#C87A53' }}
                  className="p-6 bg-white border border-[#E5DFD9] rounded-2xl text-left flex flex-col justify-between space-y-6 hover:shadow-md cursor-default group"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <h4 className="font-bold text-base text-[#23211F] group-hover:text-[#C87A53] transition-colors leading-tight">
                        {cert.name}
                      </h4>
                      <ShieldCheck size={20} className="text-[#C87A53] flex-shrink-0 ml-4" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#706C68] bg-[#F4EFEA] border border-[#E5DFD9] px-2 py-0.5 rounded-md">
                      {cert.issuer}
                    </span>
                  </div>

                  <p className="text-xs text-[#706C68] font-light leading-relaxed border-t border-[#E5DFD9] pt-4">
                    {cert.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
