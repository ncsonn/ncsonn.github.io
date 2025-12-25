import React, { useEffect } from 'react';

interface EcoStreamProjectProps {
  onBack: () => void;
}

const EcoStreamProject: React.FC<EcoStreamProjectProps> = ({ onBack }) => {
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
              EcoStream: Predicting Renewable Energy Output with Transformers
            </h1>
            <p className="text-xl md:text-2xl text-apple-subtext leading-relaxed font-light mb-8">
              Optimizing smart grid load balancing by forecasting solar and wind energy production 48 hours in advance.
            </p>

            {/* Author / Metadata Row */}
            <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
               <div className="w-10 h-10 rounded-full bg-apple-gray overflow-hidden flex-shrink-0">
                  <img src="https://ui-avatars.com/api/?name=Son+Nguyen&background=F5F5F7&color=1D1D1F" alt="Son Nguyen" className="w-full h-full object-cover" />
               </div>
              <div className="flex flex-col">
                 <span className="text-sm font-medium text-apple-dark">Son Nguyen</span>
                 <span className="text-sm text-apple-subtext">Aug 2023 · 4 min read</span>
              </div>
            </div>
          </header>

          {/* Hero Image - Fixed alignment */}
          <figure className="mb-14">
            <div className="aspect-video bg-apple-gray md:rounded-lg overflow-hidden relative">
               <img 
                src="https://picsum.photos/1200/800" 
                alt="EcoStream Dashboard" 
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="text-center text-xs font-medium text-apple-subtext mt-4">
              Figure 1: Real-time energy forecasting dashboard.
            </figcaption>
          </figure>

          {/* Content Body */}
          <div className="space-y-12">
            
            <section>
              <h2 className="text-2xl font-semibold text-apple-dark mb-4 tracking-tight">The Challenge</h2>
              <p className="text-lg leading-8 text-apple-subtext font-light">
                Renewable energy sources like wind and solar are notoriously volatile. For grid operators, this unpredictability creates massive inefficiencies—leading to either wasted energy or the need to fire up expensive, dirty peaker plants at the last minute. The goal was to build a system that could predict output with high accuracy, allowing for better load balancing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-apple-dark mb-4 tracking-tight">The Solution</h2>
              <p className="text-lg leading-8 text-apple-subtext font-light mb-8">
                We moved away from traditional ARIMA models and implemented a <strong className="text-apple-dark font-semibold">Temporal Fusion Transformer (TFT)</strong> architecture. This allowed us to ingest heterogenous data sources—historical output, satellite imagery, and weather forecasts—and learn complex temporal dependencies across different horizons.
              </p>
              
              {/* Highlight Box */}
              <div className="bg-apple-gray p-8 rounded-2xl mb-8 border border-gray-100">
                <h3 className="text-xs font-bold uppercase tracking-widest text-apple-dark mb-3">Key Outcome</h3>
                <p className="text-base text-apple-subtext m-0 leading-relaxed">
                  The model achieved <span className="text-apple-dark font-semibold">94% accuracy</span> in 48-hour forecasts, directly contributing to a 30% reduction in query costs and stabilizing grid operations during peak load.
                </p>
              </div>

               <p className="text-lg leading-8 text-apple-subtext font-light">
                One specific challenge was handling missing weather sensor data. We implemented a denoising autoencoder to reconstruct missing inputs before they reached the forecasting model, which improved robustness significantly during sensor outages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-apple-dark mb-4 tracking-tight">Tech Stack & Implementation</h2>
              <p className="text-lg leading-8 text-apple-subtext font-light mb-8">
                The pipeline was built on Google Cloud Platform. Data ingestion was handled by Kafka, feeding into a Spark preprocessing job. The model itself was trained using PyTorch Lightning, leveraging its built-in support for distributed training.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {["PyTorch", "Python", "GCP", "FastAPI", "React", "Docker", "Kafka"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-apple-gray text-apple-subtext rounded-full text-sm font-medium border border-gray-200/50">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

          </div>

          {/* Footer Navigation */}
          <div className="mt-20 pt-10 border-t border-gray-100 flex justify-between items-center">
             <button onClick={onBack} className="text-apple-subtext hover:text-apple-dark font-medium text-sm transition-colors flex items-center">
               <span className="mr-2">←</span> Back
             </button>
             <div className="flex gap-6">
               <a href="#" className="text-sm font-medium text-apple-blue hover:text-blue-700 underline-offset-4 hover:underline">View on GitHub</a>
               <a href="#" className="text-sm font-medium text-apple-blue hover:text-blue-700 underline-offset-4 hover:underline">Live Demo</a>
             </div>
          </div>

        </article>
      </main>
    </div>
  );
};

export default EcoStreamProject;