import React from 'react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, className = "" }) => {
  return (
    <div 
      onClick={onClick}
      className={`group cursor-pointer ${className}`}
    >
      {/* Image Container - Portrait Aspect Ratio (4:5) */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 mb-6 rounded-sm">
        <img 
          src={`${project.imagePlaceholder}`} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
      </div>
      
      {/* Content - Frameless, Minimalist */}
      <div className="flex flex-col pr-4">
        <h3 className="text-2xl font-semibold text-apple-dark mb-2 tracking-tight group-hover:text-apple-blue transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-apple-subtext text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="mt-auto flex items-center text-sm font-medium text-apple-dark group-hover:text-apple-blue transition-colors">
          Read more
          <svg 
            className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;