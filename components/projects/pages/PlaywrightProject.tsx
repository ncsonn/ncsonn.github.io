import React, { useEffect } from 'react';
import { PROJECTS } from '@/constants';

interface PlaywrightProjectProps {
  onBack: () => void;
}

const PlaywrightProject: React.FC<PlaywrightProjectProps> = ({ onBack }) => {
  const project = PROJECTS.find(p => p.id === 'p4');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-apple-text antialiased pt-32">
      <main className="pb-24 px-6">
        <article className="max-w-[680px] mx-auto">
          
          {/* Internal Back Navigation */}
          <button 
            onClick={onBack}
            className="group mb-10 flex items-center text-sm font-medium text-apple-subtext hover:text-apple-dark transition-colors"
          >
            <span className="mr-2 transition-transform group-hover:-translate-x-1">←</span> Back
          </button>
          
          {/* Header */}
          <header className="mb-10">
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tighter text-apple-dark leading-[1.1] mb-6">
              {project?.title}
            </h1>
            <p className="text-m md:text-m text-apple-subtext leading-relaxed font-light italic mb-8">
              Playwright is a popular browser automation toolkit that can be used in web scraping to scrape dynamic web content or web apps. In this guide, we’ll build an efficient, high-performance web scraper using FastAPI and Playwright to fetch web content. We’ll cover the essential steps, from setting up the project and configuring Playwright to deploying a FastAPI-powered API that operates browser interactions.
            </p>

            {/* Author / Metadata Row */}
            <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
               <div className="w-10 h-10 rounded-full bg-apple-gray overflow-hidden flex-shrink-0">
                  <img src="https://ui-avatars.com/api/?name=Son+Nguyen&background=F5F5F7&color=1D1D1F" alt="Son Nguyen" className="w-full h-full object-cover" />
               </div>
              <div className="flex flex-col">
                 <span className="text-sm font-medium text-apple-dark">Son Nguyen</span>
                 <span className="text-sm text-apple-subtext">Mar 2025 · 4 min read</span>
              </div>
            </div>
          </header>

          {/* Hero Image - Fixed alignment */}
          <figure className="mb-10">
            <div className="aspect-video overflow-hidden relative">
               <img 
                src="./projects/data-scraping/logo.webp"
                alt="Playwright" 
                className="w-full object-cover"
              />
            </div>
          </figure>

          {/* Content Body */}
          <div className="space-y-8">

            <section>
              <h2 className="text-2xl font-semibold text-apple-dark mb-8 tracking-tight">Ethical Web Scraping</h2>
              <p className="text-m leading-8 text-apple-dark mb-8">
                Web scraping should be conducted responsibly. Always check a website’s robots.txt file and terms of service before scraping. Avoid excessive requests to prevent server overload, and never scrape sensitive or private data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-apple-dark mb-8 tracking-tight">About Playwright</h2>
              <p className="text-m leading-8 text-apple-dark mb-8">
                Playwright is a cross-platform, cross-language browser automation toolkit developed by Microsoft. Although it was primarily designed for website testing, it is also highly effective for general browser automation and web scraping. With its powerful API for interacting with web pages, Playwright is an ideal tool for tasks like scraping, testing, and automating browser actions. It supports multiple browsers, including Chromium, Firefox, and WebKit, providing seamless control over browser instances. Using Playwright, we can automate headless browsers such as Firefox or Chrome to navigate the web like a human — visiting URLs, clicking buttons, entering text, and executing JavaScript.
              </p>
              <p className="text-m leading-8 text-apple-dark mb-8">
                Playwright is particularly well-suited for scraping modern websites, especially those with dynamic content or requiring user interaction. It allows for efficient extraction of data from JavaScript-driven websites without needing to reverse-engineer their behavior. Moreover, by running a full browser instance, Playwright mimics human browsing patterns, making it more effective at bypassing anti-scraping mechanisms that typically detect automated requests.
              </p>
            </section>

            <div className="mt-auto flex items-center text-l font-bold text-apple-dark group-hover:text-apple-blue transition-colors">
              <a 
                href={project?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-5 border-b border-white/10 hover:border-white/30 transition-all"
              >
                <span className="text-apple-dark hover:text-apple-blue transition-colors flex items-center">
                Continue reading on Medium
                  <svg 
                    className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
            </div>



          </div>

          {/* Footer Navigation */}
          <div className="mt-4 pt-10 border-t border-gray-100 flex justify-between items-center">
             <button onClick={onBack} className="text-apple-subtext hover:text-apple-dark font-medium text-sm transition-colors flex items-center">
               <span className="mr-2">←</span> Back
             </button>
             <div className="flex gap-6">
               <a href="https://github.com/ncsonn/spark-server" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-apple-blue hover:text-blue-700 underline-offset-4 hover:underline">GitHub Repository</a>
             </div>
          </div>

        </article>
      </main>
    </div>
  );
};

export default PlaywrightProject;