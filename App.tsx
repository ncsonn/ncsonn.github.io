import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/projects/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import EcoStreamProject from './components/projects/pages/EcoStreamProject';
import SparkProject from './components/projects/pages/SparkProject';
import KubernetesProject from './components/projects/pages/KubernetesProject';
import AllProjects from './components/projects/pages/AllProjects';

// Define available views
type View = 'home' | 'all-projects' | 'project-p1' | 'project-p2' | 'project-p3' | 'project-p4';

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
    if (id === 'p1') {
      changeView('project-p1');
    } else if (id === 'p2') {
      changeView('project-p2');
    } else if (id === 'p3') {
      changeView('project-p3');
    } else if (id === 'p4') {
      changeView('project-p4');
    } else {
      console.log(`Navigate to project ${id}`);
      changeView('project-p1');
    }
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
  const renderMainContent = () => {
    switch (currentView) {
      case 'all-projects':
        return <AllProjects onProjectClick={navigateToProject} onBack={handleBack} />;
      case 'project-p1':
        return <KubernetesProject onBack={handleBack} />;
      case 'project-p2':
        return <SparkProject onBack={handleBack} />;
      case 'project-p3':
        return <SparkProject onBack={handleBack} />;
      case 'project-p4':
        return <SparkProject onBack={handleBack} />;
      default:
        return (
          <>
            <Hero />
            <Projects onProjectClick={navigateToProject} onViewAllClick={navigateToAllProjects} />
            <Experience />
            <Skills />
          </>
        );
    }
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
