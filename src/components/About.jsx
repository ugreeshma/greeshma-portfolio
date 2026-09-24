import React from 'react';
import { motion } from 'framer-motion';
import { Brain, BookOpen, Palette, Compass, Users } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { intro, story, interests } = portfolioData.personalInfo.bio;

  const cardIcons = [
    <Brain key="brain" className="text-[#C87A53]" size={22} />,
    <Palette key="palette" className="text-[#C87A53]" size={22} />,
    <Compass key="compass" className="text-[#C87A53]" size={22} />,
    <Users key="users" className="text-[#C87A53]" size={22} />
  ];

  return (
    <section id="about" className="py-24 bg-[#FAF8F5] border-t border-[#E5DFD9]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-left mb-16 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C87A53]">My Story</span>
          <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-[#23211F]">
            Authentic & Approachable
          </h2>
          <div className="w-16 h-1 bg-[#C87A53] mt-2 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Biography Story */}
          <div className="lg:col-span-7 text-left space-y-6">
            <p className="text-xl font-light text-[#23211F] leading-relaxed">
              {intro}
            </p>
            <p className="text-base text-[#706C68] font-normal leading-relaxed">
              {story}
            </p>
            
            <div className="p-5 border-l-2 border-[#C87A53] bg-[#F4EFEA]/40 rounded-r-xl space-y-2">
              <h4 className="font-display font-medium text-[#23211F] text-base flex items-center">
                <BookOpen size={16} className="mr-2 text-[#C87A53]" />
                Philosophy: Creativity Meets Technology
              </h4>
              <p className="text-sm text-[#706C68] leading-relaxed font-light">
                I believe that AI shouldn't just be about high-dimensional vector spaces and model checkpoints; it should be about human translation. My creative layout designs and structured mathematical thinking work together to build technologies that make a real difference in people's lives.
              </p>
            </div>
          </div>

          {/* Right: Key Traits & Interests (Bento Style Cards) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4, borderColor: '#C87A53' }}
                transition={{ duration: 0.2 }}
                className="p-6 bg-white border border-[#E5DFD9] rounded-2xl flex flex-col justify-between text-left space-y-6 shadow-sm hover:shadow-md cursor-default group"
              >
                <div className="p-3 bg-[#FAF8F5] border border-[#E5DFD9] group-hover:bg-[#F4EFEA] group-hover:border-[#C87A53]/20 rounded-xl w-max transition-colors">
                  {cardIcons[index % cardIcons.length]}
                </div>
                <div>
                  <h3 className="font-sans font-bold text-sm text-[#23211F] tracking-tight">
                    {interest}
                  </h3>
                  <p className="text-xs text-[#706C68] mt-1 font-light leading-normal">
                    {index === 0 && "I like structured thinking, puzzles, and solving problems carefully before building."}
                    {index === 1 && "I sketch, paint, and enjoy turning ideas into visual forms with color and detail."}
                    {index === 2 && "I enjoy exploring AI ideas, experiments, and the way models can help people."}
                    {index === 3 && "I value teamwork, student outreach, and making learning feel approachable."}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
