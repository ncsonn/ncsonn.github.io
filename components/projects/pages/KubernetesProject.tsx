import React, { useEffect } from 'react';
import { PROJECTS } from '@/constants';

interface KubernetesProjectProps {
  onBack: () => void;
}

const KubernetesProject: React.FC<KubernetesProjectProps> = ({ onBack }) => {
  const project = PROJECTS.find(p => p.id === 'p1');
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
              Many modern data platforms rely on Kafka to move events between services in real time. As traffic grows or becomes bursty, Kafka consumers can easily fall behind, creating backlogs that impact downstream systems. Traffic spikes, uneven partitions, and slow downstream services can quickly lead to growing consumer lag. In this article, we will walk through a practical example of autoscaling Kafka consumers on Kubernetes using KEDA and consumer lag. We will deploy the Confluent Platform, simulate producer pressure, observe consumer lag, and watch KEDA scale our consumers dynamically. The result is an architecture that scales efficiently, responds directly to streaming demand.
            </p>

            {/* Author / Metadata Row */}
            <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
               <div className="w-10 h-10 rounded-full bg-apple-gray overflow-hidden flex-shrink-0">
                  <img src="https://ui-avatars.com/api/?name=Son+Nguyen&background=F5F5F7&color=1D1D1F" alt="Son Nguyen" className="w-full h-full object-cover" />
               </div>
              <div className="flex flex-col">
                 <span className="text-sm font-medium text-apple-dark">Son Nguyen</span>
                 <span className="text-sm text-apple-subtext">Dec 2025 · 7 min read</span>
              </div>
            </div>
          </header>

          {/* Hero Image - Fixed alignment */}
          <figure className="mb-10">
            <div className="aspect-video overflow-hidden relative">
               <img 
                src="/projects/kubernetes/logo.png" 
                alt="Confluent for Kubernetes and KEDA" 
                className="w-full object-cover"
              />
            </div>
          </figure>

          {/* Content Body */}
          <div className="space-y-8">

            <section>
              <h2 className="text-2xl font-semibold text-apple-dark mb-8 tracking-tight">Components Overview</h2>
              <p className="text-m leading-8 text-apple-dark mb-4">
                <b>Confluent for Kubernetes</b> is a Kubernetes-native platform for deploying and operating Apache Kafka and its ecosystem in a consistent, production-ready manner. It is built around the Confluent Operator, which manages the full lifecycle of Kafka components, including:
              </p>
              <ul className="list-disc list-inside mb-8">
                <li>Kafka brokers and controllers</li>
                <li>ZooKeeper or KRaft-based metadata management</li>
                <li>Control Center</li>
                <li>(Optional) Schema Registry, Kafka Connect, ksqlDB and REST Proxy</li>
              </ul>
              <p className="text-m leading-8 text-apple-dark mb-8">
                <b>KEDA</b> is an open-source component that extends Kubernetes autoscaling capabilities beyond CPU and memory metrics. It enables workloads to scale based on event sources such as message queues, streams, or external systems. For Kafka workloads, KEDA can monitor consumer group lag and expose it as an external metric to Kubernetes. This makes Kafka-aware autoscaling possible without embedding scaling logic directly into application code.
              </p>
              <p className="text-m leading-8 text-apple-dark mb-8">
                While Kubernetes users may already be familiar with autoscaling mechanisms such as the Horizontal Pod Autoscaler (HPA) or Vertical Pod Autoscaler (VPA), these tools traditionally rely on CPU and memory utilization to trigger scaling decisions. Although this can work for many stateless services, Kafka consumers behave differently. A consumer group may appear underutilized from a resource perspective while still falling behind due to increased message volume or uneven partition load.
              </p>
              <p className="text-m leading-8 text-apple-dark mb-8">
                Consumer lag provides a more accurate signal for Kafka workloads. Lag represents the number of messages that have been produced to Kafka but not yet processed by a consumer group. When producers publish messages faster than consumers can handle them, backlog accumulates and lag grows. By using lag as a scaling indicator, KEDA integrates with the Kubernetes HPA to scale consumer replicas in response to real streaming pressure, ensuring that consumption throughput keeps pace with production rates.
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
          </div>

        </article>
      </main>
    </div>
  );
};

export default KubernetesProject;