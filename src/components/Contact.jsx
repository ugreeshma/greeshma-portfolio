import React from 'react';
import { Mail, Phone } from 'lucide-react';
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

export default function Contact() {
  const { email, phone, github, linkedin, resumeUrl, name } = portfolioData.personalInfo;

  return (
    <section id="contact" className="py-24 bg-[#FAF8F5] border-t border-[#E5DFD9] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-left mb-16 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C87A53]">Get in Touch</span>
          <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-[#23211F]">
            Let's Collaborate
          </h2>
          <p className="text-sm text-[#706C68] max-w-lg font-light leading-relaxed">
            Interested in software engineering, AI pipelines, or marketing initiatives? Drop a line and let's build something impactful.
          </p>
          <div className="w-16 h-1 bg-[#C87A53] mt-2 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Info & Channels */}
          <div className="lg:col-span-5 text-left space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-medium text-[#23211F]">Direct Channels</h3>
              <p className="text-sm text-[#706C68] font-light">Feel free to reach out directly via email, phone, or connect on professional socials.</p>
            </div>

            <div className="space-y-4">
              {/* Email */}
              <a
                href={`mailto:${email}`}
                className="flex items-center space-x-4 p-4 bg-white border border-[#E5DFD9] rounded-xl hover:border-[#C87A53]/30 transition-colors group"
              >
                <div className="p-3 bg-[#FAF8F5] text-[#C87A53] rounded-lg group-hover:bg-[#F4EFEA] transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#706C68]">Email Me</p>
                  <p className="text-sm font-bold text-[#23211F]">{email}</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${phone}`}
                className="flex items-center space-x-4 p-4 bg-white border border-[#E5DFD9] rounded-xl hover:border-[#C87A53]/30 transition-colors group"
              >
                <div className="p-3 bg-[#FAF8F5] text-[#C87A53] rounded-lg group-hover:bg-[#F4EFEA] transition-colors">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#706C68]">Call Me</p>
                  <p className="text-sm font-bold text-[#23211F]">{phone}</p>
                </div>
              </a>
            </div>

            {/* Social Cards */}
            <div className="flex space-x-4">
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center p-3 bg-white border border-[#E5DFD9] text-[#706C68] hover:text-[#C87A53] hover:border-[#C87A53]/30 rounded-xl transition-all w-12 h-12"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center p-3 bg-white border border-[#E5DFD9] text-[#706C68] hover:text-[#C87A53] hover:border-[#C87A53]/30 rounded-xl transition-all w-12 h-12"
              >
                <GithubIcon size={20} />
              </a>
            </div>
          </div>

          {/* Right: Professional Profiles */}
          <div className="lg:col-span-7 bg-white border border-[#E5DFD9] p-8 rounded-3xl shadow-sm relative overflow-hidden flex items-center">
            <div className="w-full text-left space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-display font-medium text-[#23211F]">Professional Profiles</h3>
                <p className="text-sm text-[#706C68] font-light leading-relaxed max-w-xl">
                  Connect with me on LinkedIn or check my GitHub to see my work and projects.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-4 p-4 bg-[#FAF8F5] border border-[#E5DFD9] rounded-xl hover:border-[#C87A53]/30 transition-colors group"
                >
                  <div className="p-3 bg-white text-[#C87A53] rounded-lg border border-[#E5DFD9] group-hover:border-[#C87A53]/20 transition-colors">
                    <LinkedinIcon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#706C68]">LinkedIn</p>
                    <p className="text-sm font-bold text-[#23211F]">View Profile</p>
                  </div>
                </a>

                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-4 p-4 bg-[#FAF8F5] border border-[#E5DFD9] rounded-xl hover:border-[#C87A53]/30 transition-colors group"
                >
                  <div className="p-3 bg-white text-[#C87A53] rounded-lg border border-[#E5DFD9] group-hover:border-[#C87A53]/20 transition-colors">
                    <GithubIcon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#706C68]">GitHub</p>
                    <p className="text-sm font-bold text-[#23211F]">View Repositories</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer info */}
        <div className="mt-24 pt-8 border-t border-[#E5DFD9] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#706C68] font-light text-center sm:text-left">
          <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
          <div className="flex space-x-4">
            <span className="font-semibold uppercase tracking-wider">Creativity × Technology</span>
          </div>
        </div>

      </div>
    </section>
  );
}
