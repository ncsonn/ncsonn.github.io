import React from 'react';
import { RESUME_DATA } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="snap-start bg-[#050507] text-white py-20 border-t border-white/10 min-h-screen flex flex-col justify-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="space-y-8">
            <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
              Get in touch
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-white">
              Let's build <br />
              something <br />
              <span className="text-gray-600">meaningful</span> <br />
              together.
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-md leading-relaxed">
              I'm currently available for freelance work and open to full-time opportunities. 
              If you have a project that needs some creative touch, drop me a line.
            </p>
            <div className="pt-2">
              <a 
                href={`mailto:${RESUME_DATA.email}`}
                className="text-xl md:text-2xl font-medium text-white hover:text-gray-300 transition-colors border-b border-gray-700 hover:border-white pb-1"
              >
                {RESUME_DATA.email}
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-end lg:pl-12">
            <div className="w-full">
              {[
                { name: 'GitHub', url: `${RESUME_DATA.github}` },
                { name: 'LinkedIn', url: `${RESUME_DATA.linkedin}` },
                { name: 'Medium', url: `${RESUME_DATA.medium}` },
                { name: 'Email', url: `mailto:${RESUME_DATA.email}` }
              ].map((link) => (
                <a 
                  key={link.name} 
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-5 border-b border-white/10 hover:border-white/30 transition-all"
                >
                  <span className="text-lg text-gray-400 group-hover:text-white transition-colors">
                    {link.name}
                  </span>
                  <svg 
                    className="w-4 h-4 text-gray-600 group-hover:text-white transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-600 border-t border-white/10">
          <p>© {new Date().getFullYear()} {RESUME_DATA.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;