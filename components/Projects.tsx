import React, { useState, useRef, useEffect } from 'react';
import { PROJECTS } from '../constants';

const CATEGORIES = ["All", "Engineering", "AI", "Machine Learning"];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeCategory === "All") return true;
    
    const category = project.category.toLowerCase();
    const description = project.description.toLowerCase();
    const tech = project.tech.map(t => t.toLowerCase());

    if (activeCategory === "Engineering") {
      return category.includes("engineering") || tech.includes("kafka") || tech.includes("spark") || tech.includes("redis");
    }
    if (activeCategory === "AI") {
      return category.includes("genai") || category.includes("nlp") || category.includes("llm") || tech.includes("openai") || tech.includes("langchain");
    }
    if (activeCategory === "Machine Learning") {
      return category.includes("time series") || category.includes("machine learning") || category.includes("nlp") || description.includes("model") || description.includes("t-sne");
    }
    return false;
  });

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10); // buffer of 10px
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      // Check initially
      checkScroll();
    }
    return () => {
      if (el) el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [filteredProjects, activeCategory]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-32 bg-apple-gray overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-xl space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-apple-subtext">
              Selected Work
            </h3>
            <h2 className="text-3xl md:text-4xl font-semibold text-apple-dark tracking-tight">
              Impact at scale.
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4">
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border ${
                    activeCategory === cat
                      ? 'bg-apple-dark text-white border-apple-dark shadow-md'
                      : 'bg-white text-apple-subtext border-transparent hover:border-gray-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Container with Hover Controls */}
        <div className="relative group">
          {/* Left Button - Visible only if canScrollLeft AND group hover */}
          <button 
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute left-4 xl:-left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md text-apple-dark shadow-lg border border-gray-100 flex items-center justify-center transition-all duration-300 hover:scale-110 
              ${canScrollLeft ? 'opacity-0 group-hover:opacity-100 cursor-pointer' : 'opacity-0 pointer-events-none scale-90'}`}
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>

          {/* Right Button - Visible only if canScrollRight AND group hover */}
          <button 
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute right-4 xl:-right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md text-apple-dark shadow-lg border border-gray-100 flex items-center justify-center transition-all duration-300 hover:scale-110
              ${canScrollRight ? 'opacity-0 group-hover:opacity-100 cursor-pointer' : 'opacity-0 pointer-events-none scale-90'}`}
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>

          {/* Horizontal Scrollable Carousel */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-12 -mx-6 px-6 snap-x snap-mandatory no-scrollbar scroll-smooth relative z-10"
          >
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="flex-shrink-0 w-[85vw] md:w-[380px] snap-center group/card flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
              >
                <div className="h-52 overflow-hidden bg-gray-100 relative">
                  <img 
                    src={`https://picsum.photos/${project.imagePlaceholder}`} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/5 transition-colors duration-300" />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <span className="text-[10px] font-bold uppercase text-apple-blue mb-2 block tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-semibold text-apple-dark mb-2 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-apple-subtext text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-gray-50">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map(t => (
                        <span key={t} className="text-[10px] font-medium text-gray-500 bg-gray-50 border border-gray-100 px-2 py-1 rounded-full uppercase tracking-wide">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {filteredProjects.length === 0 && (
              <div className="w-full text-center py-20 text-apple-subtext bg-white/50 rounded-3xl border border-dashed border-gray-300 mx-6">
                No projects found in this category.
              </div>
            )}
            
            {/* Spacer to ensure last item has right padding in scroll view */}
            <div className="w-2 flex-shrink-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;