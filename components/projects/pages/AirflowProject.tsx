import React, { useEffect } from 'react';
import { PROJECTS } from '@/constants';

interface AirflowProjectProps {
  onBack: () => void;
}

const AirflowProject: React.FC<AirflowProjectProps> = ({ onBack }) => {
  const project = PROJECTS.find(p => p.id === 'p5');
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
              {project?.description}
            </p>

            {/* Author / Metadata Row */}
            <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
               <div className="w-10 h-10 rounded-full bg-apple-gray overflow-hidden flex-shrink-0">
                  <img src="https://ui-avatars.com/api/?name=Son+Nguyen&background=F5F5F7&color=1D1D1F" alt="Son Nguyen" className="w-full h-full object-cover" />
               </div>
              <div className="flex flex-col">
                 <span className="text-sm font-medium text-apple-dark">Son Nguyen</span>
                 <span className="text-sm text-apple-subtext">Mar 2025 · 3 min read</span>
              </div>
            </div>
          </header>

          {/* Hero Image - Fixed alignment */}
          <figure className="mb-10">
            <div className="aspect-video overflow-hidden relative">
               <img 
                src="/projects/airflow/logo.png" 
                alt="Apache Airflow" 
                className="w-full object-cover"
              />
            </div>
          </figure>

          {/* Content Body */}
          <div className="space-y-8">

            <section>
              <h2 className="text-2xl font-semibold text-apple-dark mb-8 tracking-tight">Why Apache Airflow with Docker?</h2>
              <p className="text-m leading-8 text-apple-dark mb-4">
                Airflow allows you to define, schedule, and monitor workflows as Directed Acyclic Graphs (DAGs). Using Docker for deployment provides:
              </p>
              <ul className="list-disc list-inside mb-8">
                <li><b>Portability:</b> Consistent environments across development, testing, and production.</li>
                <li><b>Simplified Dependencies:</b> Avoids system-wide package conflicts.</li>
                <li><b>Scalability:</b> Easily integrates with Docker Compose or Kubernetes.</li>
                <li><b>Rapid Setup:</b> Pre-configured containers reduce setup time.</li>
              </ul>
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

export default AirflowProject;