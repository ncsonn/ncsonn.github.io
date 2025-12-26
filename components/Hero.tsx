import React from 'react';
import { RESUME_DATA } from '../constants';
import Typewriter from 'typewriter-effect';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen snap-start flex flex-col justify-center relative overflow-hidden bg-white">
      {/* Background Gradient Blob */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-gray-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full z-10 pt-20 md:pt-0">
        <div className="space-y-6 animate-fade-in-up max-w-4xl">
          <h2 className="text-xs font-semibold text-apple-subtext uppercase tracking-widest">
            {RESUME_DATA.title}
          </h2>
          
          <h1 className="text-5xl md:text-7xl lg:text-7xl font-semibold tracking-tighter text-apple-dark leading-[0.95]">
            I'm {RESUME_DATA.name}
          </h1>
          
          <div className="text-2xl md:text-4xl text-apple-subtext leading-relaxed font-light flex flex-wrap items-center gap-x-3">
            <span>A curious</span>
            <span className="text-apple-dark font-medium">
              <Typewriter
                options={{
                  strings: [
                    "Data Scientist",
                    "Data Engineer",
                    "AI & Machine Learning Engineer",
                    "Data Analyst",
                  ],
                  autoStart: true,
                  loop: true,
                  loopCount: Infinity,
                  deleteSpeed: "natural",
                  pauseFor: 1500,
                }}
              />
            </span>
          </div>
          
          <p className="max-w-xl text-lg md:text-xl text-apple-subtext leading-relaxed font-light">
            {RESUME_DATA.summary}
          </p>
          
          <div className="pt-6 flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="px-7 py-3.5 bg-apple-dark text-white rounded-full font-medium text-sm md:text-base transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-black/5"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-7 py-3.5 bg-gray-100 text-apple-dark rounded-full font-medium text-sm md:text-base hover:bg-gray-200 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;