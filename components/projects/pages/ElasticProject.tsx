import React, { useEffect } from 'react';
import { PROJECTS } from '@/constants';

interface ElasticProjectProps {
  onBack: () => void;
}

const ElasticProject: React.FC<ElasticProjectProps> = ({ onBack }) => {
  const project = PROJECTS.find(p => p.id === 'p3');
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
            Monitoring logs efficiently is crucial for maintaining system reliability and performance, and the ELK stack (Elasticsearch, Logstash, and Kibana) provides a powerful solution for centralized log management. Elasticsearch enables fast searching and indexing, Logstash processes and transforms log data, and Kibana offers intuitive visualization and monitoring tools. In this guide, we’ll set up the ELK stack for log monitoring and test it using a basic Python script to show how logs can be collected and analyzed in a real-world scenario.
            </p>

            {/* Author / Metadata Row */}
            <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
               <div className="w-10 h-10 rounded-full bg-apple-gray overflow-hidden flex-shrink-0">
                  <img src="https://ui-avatars.com/api/?name=Son+Nguyen&background=F5F5F7&color=1D1D1F" alt="Son Nguyen" className="w-full h-full object-cover" />
               </div>
              <div className="flex flex-col">
                 <span className="text-sm font-medium text-apple-dark">Son Nguyen</span>
                 <span className="text-sm text-apple-subtext">Apr 2025 · 6 min read</span>
              </div>
            </div>
          </header>

          {/* Hero Image - Fixed alignment */}
          <figure className="mb-10">
            <div className="aspect-video overflow-hidden relative">
               <img 
                src="./projects/elasticsearch/logo.png"
                alt="Apache Spark" 
                className="w-full object-cover"
              />
            </div>
          </figure>

          {/* Content Body */}
          <div className="space-y-8">

            <section>
              <h2 className="text-2xl font-semibold text-apple-dark mb-8 tracking-tight">Components Overview</h2>
              <p className="text-m leading-8 text-apple-dark mb-8">
              The ELK stack — comprising Elasticsearch, Logstash, and Kibana — is a powerful set of tools widely used for log monitoring, analysis, and visualization. It provides a centralized logging solution that helps organizations collect, process, and analyze log data from various sources, making troubleshooting and performance monitoring more efficient.
              </p>
              <figure className="mb-8">
                <div className="bg-apple-gray overflow-hidden relative">
                  <img 
                    src="./projects/elasticsearch/components-overview.png" 
                    alt="EcoStream Dashboard" 
                    className="w-full object-cover"
                  />
                </div>
                <figcaption className="text-center text-xs font-medium text-apple-subtext mt-4">
                  Figure 1: Project Architecture
                </figcaption>
              </figure>
              <p className="text-m leading-8 text-apple-dark mb-8">
                <b>Elasticsearch</b> is a fast, open-source search engine built on Apache Lucene. It indexes and searches large volumes of data in near real-time. With support for full-text search, structured queries, and aggregations, it’s ideal for log data. Its distributed design allows for easy scaling, high availability, and fault tolerance.
              </p>
              <p className="text-m leading-8 text-apple-dark mb-8">
                <b>Kibana</b> is the GUI for visualizing data in Elasticsearch. It offers dashboards, real-time search, and customizable charts. Features like alerting, anomaly detection, and security monitoring make it a powerful tool for observability and quick issue resolution.
              </p>
              <p className="text-m leading-8 text-apple-dark mb-8">
                <b>Logstash</b> is a log processing tool that collects, transforms, and sends data to Elasticsearch. It supports multiple input/output plugins and provides filters to parse and enrich logs, ensuring structured, high-quality data.
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

export default ElasticProject;