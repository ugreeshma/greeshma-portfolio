import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const GithubIcon = ({ size = 24, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = ({ size = 24, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const titles = ["AI/ML Developer", "Artist", "Electronics Engineer", "Mathematical Thinker"];

export default function Hero() {
  const { name, tagline, email, github, linkedin, profilePhoto } = portfolioData.personalInfo;
  
  // Rotating titles
  const [index, setIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const fullText = titles[index];

    if (isDeleting) {
      // Deleting characters
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      }, 50);
    } else {
      // Typing characters
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }, 100);
    }

    if (!isDeleting && currentText === fullText) {
      // Pause at full word
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, index]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-grid-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FAF8F5]/80 to-[#FAF8F5] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left: Introduction */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-3 py-1 bg-[#F4EFEA] border border-[#E5DFD9] rounded-full text-xs font-semibold uppercase tracking-wider text-[#C87A53] w-max"
          >
            <span>Welcome to my space</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-2"
          >
            <h2 className="text-sm uppercase tracking-widest font-semibold text-[#706C68] font-sans">Hello, I am</h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-display font-medium tracking-tight text-[#23211F] leading-[1.1] whitespace-nowrap overflow-visible">
              {name}
            </h1>
            <div className="h-10 flex items-center text-xl md:text-2xl font-sans font-bold text-[#C87A53] pt-1">
              <span>{currentText}</span>
              <span className="w-[3px] h-6 bg-[#C87A53] ml-1 animate-pulse" />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-[#706C68] max-w-xl leading-relaxed font-light font-sans"
          >
            {tagline} Specializing in machine learning systems, human-centered speech analytics, and responsive interface architectures.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 items-center pt-2 font-sans"
          >
            <a
              href="#projects"
              className="flex items-center space-x-2 px-6 py-3 bg-[#23211F] hover:bg-[#C87A53] text-white font-medium rounded-xl transition-all duration-300 shadow-sm group"
            >
              <span>Explore My Work</span>
              <ArrowRight size={18} className="transform transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="flex items-center space-x-2 px-6 py-3 bg-[#F4EFEA] hover:bg-[#E5DFD9] text-[#23211F] border border-[#E5DFD9] font-medium rounded-xl transition-all duration-300 shadow-sm"
            >
              <Mail size={18} />
              <span>Contact Me</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center space-x-5 pt-4 text-[#706C68]"
          >
            <a href={github} target="_blank" rel="noreferrer" className="hover:text-[#C87A53] transition-colors duration-200">
              <GithubIcon size={20} />
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer" className="hover:text-[#C87A53] transition-colors duration-200">
              <LinkedinIcon size={20} />
            </a>
            <a href={`mailto:${email}`} className="hover:text-[#C87A53] transition-colors duration-200">
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        {/* Right: Picture Container */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-[18rem] sm:w-[20rem] md:w-[22rem] lg:w-[26rem] aspect-[4/5] mx-auto"
          >
            {/* Clean Editorial Frame */}
            <div className="absolute inset-0 bg-white p-2 md:p-3 rounded-2xl shadow-sm border border-[#E5DFD9]">
              <div className="relative w-full h-full overflow-hidden rounded-xl bg-[#F4EFEA]">
                <img
                  src={profilePhoto}
                  alt={name}
                  className="w-full h-full object-cover object-[center_top] transform hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </div>

            {/* Subtle floating badge */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-2 md:-right-6 bg-white/95 backdrop-blur-sm border border-[#E5DFD9] py-2 px-3 md:py-3 md:px-5 rounded-xl shadow-lg flex items-center space-x-2 z-20"
            >
              <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-emerald-500 absolute left-2 md:left-3" />
              <span className="text-[10px] md:text-xs font-sans font-semibold text-[#23211F] uppercase tracking-wider">Available for Opportunities</span>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
