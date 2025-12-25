import React, { useEffect } from 'react';

interface SparkProjectProps {
  onBack: () => void;
}

const SparkProject: React.FC<SparkProjectProps> = ({ onBack }) => {
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
              Interactive Apache Spark Environment with Livy and Jupyter Notebook
            </h1>
            <p className="text-m md:text-m text-apple-subtext leading-relaxed font-light italic mb-8">
              Working with large datasets often requires both distributed processing power and an interactive development environment. This project sets up a containerized Spark cluster with one master node and multiple worker nodes, allowing you to scale processing across machines. It includes Apache Livy, which provides a REST API for submitting Spark jobs, and Jupyter Notebook, which offers a user-friendly interface for writing and running code. This setup makes it easier to work with Spark by providing a flexible and reproducible environment for data exploration, workflow testing, and distributed application development.
            </p>

            {/* Author / Metadata Row */}
            <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
               <div className="w-10 h-10 rounded-full bg-apple-gray overflow-hidden flex-shrink-0">
                  <img src="https://ui-avatars.com/api/?name=Son+Nguyen&background=F5F5F7&color=1D1D1F" alt="Son Nguyen" className="w-full h-full object-cover" />
               </div>
              <div className="flex flex-col">
                 <span className="text-sm font-medium text-apple-dark">Son Nguyen</span>
                 <span className="text-sm text-apple-subtext">Jul 2025 · 7 min read</span>
              </div>
            </div>
          </header>

          {/* Hero Image - Fixed alignment */}
          <figure className="mb-10">
            <div className="aspect-video overflow-hidden relative">
               <img 
                src="./projects/spark/logo.png" 
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
              The architecture consists of a Spark master node that coordinates tasks and manages cluster resources, along with one or more worker nodes that execute the distributed computations. Apache Livy serves as a REST interface to submit and manage Spark jobs remotely, while the Jupyter Notebook server can act as the development front end or be connected to a preferred IDE such as VS Code.
              </p>
              <figure className="mb-8">
                <div className="bg-apple-gray overflow-hidden relative">
                  <img 
                    src="./projects/spark/fig1.png" 
                    alt="EcoStream Dashboard" 
                    className="w-full object-cover"
                  />
                </div>
                <figcaption className="text-center text-xs font-medium text-apple-subtext mt-4">
                  Figure 1: Project Architecture
                </figcaption>
              </figure>
              <p className="text-m leading-8 text-apple-dark mb-8">
              Functionally, this setup resembles cloud-based platforms like AWS EMR (Elastic MapReduce) or Databricks. AWS EMR is a cloud service for running big data frameworks like Spark and Hadoop, integration with AWS tools, and EMR Notebooks for interactive Spark development. Databricks is a unified advenced analytics platform built on Spark, also providing Databricks Notebooks to write and run code, visualize data, collaborate in real time, and manage Spark jobs in cloud-based environment. This project setup offers similar core capabilities, with interactive notebooks (via Jupyter), distributed Spark processing, and job submission through Apache Livy, making it a lightweight open-source alternative to these managed platforms.
              </p>
            </section>

            <div className="mt-auto flex items-center text-l font-bold text-apple-dark group-hover:text-apple-blue transition-colors">
              <a 
                href="https://medium.com/@ncsonn/interactive-apache-spark-environment-with-livy-and-jupyter-notebook-15937e00d763"
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

export default SparkProject;