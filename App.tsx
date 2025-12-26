import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/projects/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import KubernetesProject from './components/projects/pages/KubernetesProject';
import SparkProject from './components/projects/pages/SparkProject';
import ElasticProject from './components/projects/pages/ElasticProject';
import PlaywrightProject from './components/projects/pages/PlaywrightProject';
import AirflowProject from './components/projects/pages/AirflowProject';
import AllProjects from './components/projects/pages/AllProjects';

// Define available views
type View = 'home' | 'all-projects' | 'project-p1' | 'project-p2' | 'project-p3' | 'project-p4' | 'project-p5';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [viewHistory, setViewHistory] = useState<View[]>([]);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Manage scroll snapping on the html element
  useEffect(() => {
    const html = document.documentElement;
    if (currentView === 'home') {
      html.classList.add('snap-y', 'snap-mandatory');
    } else {
      html.classList.remove('snap-y', 'snap-mandatory');
    }
  }, [currentView]);

  // Helper to change view and push to history
  const changeView = (newView: View) => {
    setViewHistory(prev => [...prev, currentView]);
    setCurrentView(newView);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    if (viewHistory.length === 0) {
      setCurrentView('home');
      window.scrollTo(0, 0);
      return;
    }
    
    const previousView = viewHistory[viewHistory.length - 1];
    setViewHistory(prev => prev.slice(0, -1));
    setCurrentView(previousView);
    
    // If going back to home, scrolling to top is standard behavior for now.
    window.scrollTo(0, 0);
  };

  // Handle navigation to details
  const navigateToProject = (id: string) => {
    changeView(`project-${id}`);
  };

  const navigateToAllProjects = () => {
    changeView('all-projects');
  };

  // Handle main navigation (resetting to home sections)
  const handleNavClick = (sectionId: string) => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setViewHistory([]); // Reset history when navigating via main menu
      
      // Allow time for render before scrolling
      setTimeout(() => {
        if (sectionId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
    } else {
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const handleLetsTalk = () => {
    // Directly open the contact form without scrolling
    setIsContactOpen(true);
  };

  // Render content based on view
  const projectViewMap: Record<string, React.ReactNode> = {
    'all-projects': <AllProjects onProjectClick={navigateToProject} onBack={handleBack}/>,
    'project-p1': <KubernetesProject onBack={handleBack} />,
    'project-p2': <SparkProject onBack={handleBack} />,
    'project-p3': <ElasticProject onBack={handleBack} />,
    'project-p4': <PlaywrightProject onBack={handleBack} />,
    'project-p5': <AirflowProject onBack={handleBack} />,
  };
  
  const renderMainContent = () => {
    return projectViewMap[currentView] ?? (
      <>
        <Hero />
        <Projects onProjectClick={navigateToProject} onViewAllClick={navigateToAllProjects} />
        <Experience />
        <Skills />
      </>
    );
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header onNavClick={handleNavClick} onLetsTalk={handleLetsTalk} />
      
      <main className="flex-grow">
        {renderMainContent()}
      </main>

      <Footer />
      <ContactForm isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
};

export default App;
