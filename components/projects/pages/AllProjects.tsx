import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../../../constants';
import ProjectCard from '../ProjectCard';

// Using the same categories as the main page
const CATEGORIES = ["AI", "Machine Learning", "Engineering"];

interface AllProjectsProps {
  onProjectClick: (id: string) => void;
  onBack: () => void;
}

const AllProjects: React.FC<AllProjectsProps> = ({ onProjectClick, onBack }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const filteredProjects = PROJECTS.filter((project) => {
    if (selectedCategories.length === 0) return true;
    
    const projectCategory = project.category.toLowerCase();
    const projectTech = project.tech.map(t => t.toLowerCase());
    const projectDesc = project.description.toLowerCase();

    return selectedCategories.some(selected => {
      if (selected === "Engineering") {
        return projectCategory.includes("engineering") || projectTech.includes("kafka") || projectTech.includes("spark") || projectTech.includes("redis");
      }
      if (selected === "AI") {
        return projectCategory.includes("genai") || projectCategory.includes("nlp") || projectCategory.includes("llm") || projectTech.includes("openai") || projectTech.includes("langchain");
      }
      if (selected === "Machine Learning") {
        return projectCategory.includes("time series") || projectCategory.includes("machine learning") || projectCategory.includes("nlp") || projectDesc.includes("model");
      }
      return false;
    });
  });

  return (
    <div className="bg-white text-apple-text pt-32 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Back Navigation */}
        <button 
          onClick={onBack}
          className="group mb-8 inline-flex items-center text-sm font-medium text-apple-subtext hover:text-apple-dark transition-colors"
        >
          <span className="mr-2 transition-transform group-hover:-translate-x-1">←</span> Back
        </button>

        <header className="mb-12 md:mb-16">
           <span className="text-xs font-semibold uppercase tracking-widest text-apple-subtext block mb-4">
              Archive
           </span>
           <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-apple-dark leading-[0.95] mb-6">
             All Projects
           </h1>
           <p className="text-lg text-apple-subtext font-light leading-relaxed max-w-2xl mb-8">
             A comprehensive list of experiments, open-source contributions, and commercial applications.
           </p>

           {/* Filter Buttons */}
           <div className="flex flex-wrap gap-2">
             {CATEGORIES.map((cat) => {
               const isSelected = selectedCategories.includes(cat);
               return (
                <button
                  key={cat}
                  onClick={() => toggleCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 border ${
                    isSelected
                      ? 'bg-apple-dark text-white border-apple-dark shadow-md'
                      : 'bg-gray-50 text-apple-subtext border-gray-200 hover:border-apple-dark hover:text-apple-dark'
                  }`}
                >
                  {cat}
                </button>
               );
             })}
          </div>
        </header>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12 pb-24">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => onProjectClick(project.id)}
              className="w-full"
            />
          ))}
          
          {filteredProjects.length === 0 && (
             <div className="col-span-full py-20 text-center text-apple-subtext bg-gray-50 rounded-lg border border-dashed border-gray-200">
               No projects found matching the selected filters.
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;