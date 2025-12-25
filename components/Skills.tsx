import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="min-h-screen snap-start flex flex-col justify-center py-32 bg-apple-gray">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-apple-subtext mb-16">
          Technical Expertise
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {SKILLS.map((category) => (
            <div key={category.category} className="space-y-6">
              <h4 className="text-2xl font-medium text-apple-dark pb-4 border-b border-gray-200">
                {category.category}
              </h4>
              <ul className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <li 
                    key={skill} 
                    className="px-5 py-2.5 bg-white rounded-full text-sm font-medium text-apple-text shadow-sm border border-gray-100/50 hover:border-gray-200 transition-colors"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;