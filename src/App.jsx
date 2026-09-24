import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import HackathonProjects from './components/HackathonProjects';
import Timeline from './components/Timeline';
import CreativeCorner from './components/CreativeCorner';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="bg-[#FAF8F5] min-h-screen text-[#23211F]">
      <Navbar />
      <Hero />

      <main className="max-w-7xl mx-auto">
        <About />
        <Skills />
        <Projects />

        {/* Divider to separate projects and hackathons distinctly */}
        <div className="w-full flex justify-center py-8">
           <div className="w-32 h-[1px] bg-[#C87A53]/30" />
        </div>

        <HackathonProjects />
        <Timeline />
        <CreativeCorner />
        <Contact />
      </main>

      <Chatbot />
    </div>
  );
}

export default App;
