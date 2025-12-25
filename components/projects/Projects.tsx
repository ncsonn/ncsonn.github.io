import React, { useState } from 'react';
import { PROJECTS } from '../../constants';
import ProjectCard from './ProjectCard';

// Reordered as requested
export const CATEGORIES = ["AI", "Machine Learning", "Engineering"];

interface ProjectsProps {
  onProjectClick: (projectId: string) => void;
  onViewAllClick: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectClick, onViewAllClick }) => {
  // State for multiple selections. Empty array means "Show All".
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

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
    // If no categories selected, show all
    if (selectedCategories.length === 0) return true;
    
    // Check if project matches ANY of the selected categories
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
    <section id="projects" className="min-h-screen snap-start flex flex-col justify-center py-24 md:py-32 bg-apple-gray">
      <div className="max-w-[1400px] mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* LEFT COLUMN: Sticky Header & Filters */}
          <div className="lg:w-1/4 flex-shrink-0">
            <div className="lg:sticky lg:top-32">
              <div className="space-y-4 mb-8">
                 <span className="text-xs font-semibold uppercase tracking-widest text-apple-subtext">
                  Selected Work
                </span>
                 <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-apple-dark leading-[1.1]">
                  Impact <br className="hidden lg:block" /> at scale.
                </h2>
                 <p className="text-apple-subtext text-sm leading-relaxed max-w-xs">
                   A curated collection of projects defining the intersection of data science, engineering, and product.
                 </p>
                 
                 <div className="pt-1">
                   <button 
                     onClick={onViewAllClick}
                     className="group flex items-center text-sm font-medium text-apple-blue hover:text-blue-700 transition-colors"
                   >
                     View all projects 
                     <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">→</span>
                   </button>
                 </div>
              </div>

              {/* Filters - Button Style */}
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
                          : 'bg-gray-100 text-apple-subtext border-gray-200 hover:border-apple-dark hover:text-apple-dark'
                      }`}
                    >
                      {cat}
                    </button>
                   );
                 })}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Carousel */}
          <div className="lg:w-3/4 min-w-0">
             <div 
               className="flex overflow-x-auto gap-8 pb-8 -mx-6 px-6 lg:mx-0 lg:px-0 snap-x snap-mandatory no-scrollbar scroll-smooth"
             >
               {filteredProjects.map((project) => (
                 <ProjectCard 
                    key={project.id} 
                    project={project} 
                    onClick={() => onProjectClick(project.id)}
                    className="flex-shrink-0 w-[85vw] md:w-[360px] snap-center"
                 />
               ))}
               
               {filteredProjects.length === 0 && (
                 <div className="w-full text-center py-20 text-apple-subtext border border-dashed border-gray-300 rounded-lg">
                   No projects found matching these filters.
                 </div>
               )}
               
               {/* Spacer */}
               <div className="w-1 flex-shrink-0" />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;