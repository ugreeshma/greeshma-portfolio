import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Code, Terminal, Cpu, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  const categories = portfolioData.skills;

  const categoryIcons = [
    <Brain size={18} />,
    <Code size={18} />,
    <Terminal size={18} />,
    <Cpu size={18} />,
    <Cpu size={18} /> // Fallback icon for core concepts
  ];

  return (
    <section id="skills" className="py-24 bg-[#FAF8F5] border-t border-[#E5DFD9]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-left mb-16 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C87A53]">Skills Directory</span>
          <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-[#23211F]">
            Interactive Technical Skills
          </h2>
          <p className="text-sm text-[#706C68] max-w-lg font-light leading-relaxed">
            Select a category to view specialized skills, concepts, and tools in detail.
          </p>
          <div className="w-16 h-1 bg-[#C87A53] mt-2 rounded-full" />
        </div>

        {/* Tab Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Tab Selectors (Left / Top) */}
          <div className="lg:col-span-4 flex flex-col space-y-2">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-xl text-left font-medium transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-[#23211F] text-white shadow-md transform translate-x-2'
                    : 'bg-[#F4EFEA]/40 border border-[#E5DFD9] text-[#706C68] hover:bg-[#F4EFEA] hover:text-[#23211F]'
                }`}
              >
                <div className={`${activeTab === index ? 'text-[#C87A53]' : 'text-[#706C68]'}`}>
                  {categoryIcons[index % categoryIcons.length]}
                </div>
                <span className="text-sm uppercase tracking-wider font-sans font-bold">{cat.category}</span>
              </button>
            ))}
          </div>

          {/* Tab Content Display (Right / Bottom) */}
          <div className="lg:col-span-8 min-h-[350px] bg-white border border-[#E5DFD9] p-8 rounded-3xl shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F4EFEA] rounded-full blur-3xl opacity-50" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {categories[activeTab].items.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: sIdx * 0.05 }}
                    whileHover={{ scale: 1.02, borderColor: '#C87A53' }}
                    className="p-5 border border-[#E5DFD9] rounded-xl flex items-center justify-between text-left bg-[#FAF8F5] cursor-default group transition-all duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-[#C87A53] group-hover:scale-125 transition-transform" />
                      <span className="font-sans font-bold text-sm text-[#23211F]">{skill.name}</span>
                    </div>
                    
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#F4EFEA] text-[#C87A53] border border-[#E5DFD9]">
                      <CheckCircle size={10} className="mr-1.5" />
                      {skill.level}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
