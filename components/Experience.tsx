import React from 'react';
import { EXPERIENCES, RESUME_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="about" className="min-h-screen snap-start flex flex-col justify-center py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column: Photo & Bio - Thinner (col-span-4) */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32 space-y-8 animate-fade-in">
              {/* Photo - No radius */}
              <div className="aspect-[9/16] w-full overflow-hidden bg-white shadow-sm relative group">
                <img 
                  src={RESUME_DATA.avatarUrl} 
                  alt={RESUME_DATA.name}
                  className="w-full h-full object-cover transition-all duration-700 filter grayscale group-hover:grayscale-0 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              {/* Bio - No Title, Single Paragraph */}
              <div className="space-y-4">
                <p className="text-apple-subtext text-m leading-relaxed font-regular italic">
                  {RESUME_DATA.about}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Experience Timeline - Wider (col-span-8) */}
          <div className="lg:col-span-8 pt-8 lg:pt-0">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-apple-subtext mb-12">
              Professional Journey
            </h3>

            <div className="space-y-12">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="group relative pl-8 border-l border-gray-300/50 hover:border-apple-blue/30 transition-colors duration-500">
                  {/* Timeline Dot */}
                  <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-gray-300 rounded-full border-2 border-apple-gray group-hover:bg-apple-blue transition-colors duration-300" />
                  
                  <div className="space-y-3">
                    <span className="text-sm font-medium text-apple-subtext block">
                      {exp.period}
                    </span>
                    
                    <div>
                      <h4 className="text-2xl font-semibold text-apple-dark tracking-tight">
                        {exp.role}
                      </h4>
                      <h5 className="text-lg text-gray-500 font-medium mt-1">
                        {exp.company}
                      </h5>
                    </div>

                    <ul className="pt-2 space-y-2">
                      {exp.description.map((point, idx) => (
                        <li key={idx} className="text-apple-subtext text-base leading-relaxed">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Experience;