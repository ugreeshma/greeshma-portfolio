import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function CreativeCorner() {
  const artworks = portfolioData.artworks;
  const [selectedArt, setSelectedArt] = useState(null);

  return (
    <section id="creative" className="py-24 bg-[#FAF8F5] border-t border-[#E5DFD9]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-left mb-16 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C87A53]">The Creative Side</span>
          <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-[#23211F] flex items-center">
            Creative Corner
          </h2>
          <p className="text-sm text-[#706C68] max-w-lg font-light leading-relaxed">
            A visual showcase of my drawings, portraits, and sketching. A testament to my focus on visual layouts and human expression.
          </p>
          <div className="w-16 h-1 bg-[#C87A53] mt-2 rounded-full" />
        </div>

        {/* Polaroid Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {artworks.map((art, index) => {
            // Apply slight random initial rotation to give a manual "Polaroid pile" aesthetic
            const rotations = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2', '-rotate-3', 'rotate-3'];
            const initialRotation = rotations[index % rotations.length];

            return (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.03, 
                  rotate: 0,
                  y: -8,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                onClick={() => setSelectedArt(art)}
                className={`bg-white p-4 pb-8 border border-[#E5DFD9] shadow-sm rounded-sm cursor-pointer transform ${initialRotation} hover:z-20 transition-shadow duration-300`}
              >
                {/* Image Wrapper */}
                <div className="relative aspect-square w-full bg-[#F4EFEA] overflow-hidden border border-[#E5DFD9] group p-2">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  {/* Hover magnifying glass indicator */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="p-2 bg-white/95 backdrop-blur-sm rounded-full text-[#23211F] shadow-sm transform scale-90 group-hover:scale-100 transition-transform">
                      <Maximize2 size={16} />
                    </div>
                  </div>
                </div>

                {/* Polaroid Caption */}
                <div className="text-left mt-5 space-y-1.5 font-display">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-base text-[#23211F] leading-tight truncate w-[75%]">
                      {art.title}
                    </h3>
                    <span className="text-[10px] uppercase font-sans font-bold tracking-wider text-[#C87A53] px-2 py-0.5 bg-[#F4EFEA] rounded border border-[#C87A53]/10">
                      {art.tag}
                    </span>
                  </div>
                  <p className="text-xs text-[#706C68] font-sans font-light leading-normal line-clamp-2">
                    {art.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Polaroid Lightbox Modal */}
        <AnimatePresence>
          {selectedArt && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArt(null)}
              className="fixed inset-0 bg-[#23211F]/90 backdrop-blur-sm z-50 flex items-center justify-center p-6 cursor-zoom-out"
            >
              <button 
                onClick={() => setSelectedArt(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
              >
                <X size={24} />
              </button>

              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                onClick={(e) => e.stopPropagation()} // Prevent close when clicking card
                className="bg-white p-5 pb-10 border border-[#E5DFD9] rounded-sm max-w-xl w-full shadow-2xl cursor-default"
              >
                {/* Full Resolution Image */}
                <div className="relative w-full aspect-square bg-[#F4EFEA] overflow-hidden border border-[#E5DFD9] p-3">
                  <img
                    src={selectedArt.image}
                    alt={selectedArt.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Caption details */}
                <div className="text-left mt-6 space-y-2 font-display">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-xl text-[#23211F]">
                      {selectedArt.title}
                    </h3>
                    <span className="text-xs uppercase font-sans font-bold tracking-wider text-white bg-[#C87A53] px-3 py-1 rounded-full">
                      {selectedArt.tag}
                    </span>
                  </div>
                  <p className="text-sm text-[#706C68] font-sans font-light leading-relaxed">
                    {selectedArt.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
