import React, { useState, useLayoutEffect } from 'react';
import {
  HashRouter,
  Routes,
  Route,
  useNavigate,
  useParams,
  useLocation,
  Navigate
} from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/projects/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import AllProjects from './components/projects/pages/AllProjects';
import { PROJECTS } from './constants';

const HomePage: React.FC<{
  onProjectClick: (slug: string) => void;
  onViewAllClick: () => void;
}> = ({ onProjectClick, onViewAllClick }) => (
  <>
    <Hero />
    <Projects
      onProjectClick={onProjectClick}
      onViewAllClick={onViewAllClick}
    />
    <Experience />
    <Skills />
  </>
);

const ProjectRouter: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const ProjectComponent = project.Component;
  document.title = `Portfolio | ${project.title}`;

  return <ProjectComponent onBack={() => navigate(-1)} />;
};

const AppLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Enable scroll snap ONLY on home
  useLayoutEffect(() => {
    const html = document.documentElement;

    if (location.pathname === '/') {
      html.classList.add('snap-y', 'snap-mandatory');
    } else {
      html.classList.remove('snap-y', 'snap-mandatory');
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

  }, [location.pathname]);

  // Navigation helpers
  const navigateToProject = (slug: string) => {
    navigate(`/projects/${slug}`);
  };

  const navigateToAllProjects = () => {
    navigate('/projects');
  };

  const handleNavClick = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(sectionId);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header onNavClick={handleNavClick} onLetsTalk={() => setIsContactOpen(true)}/>

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage onProjectClick={navigateToProject} onViewAllClick={navigateToAllProjects}/>}/>
          <Route path="/projects" element={<AllProjects onProjectClick={navigateToProject} onBack={() => navigate(-1)}/>}/>
          <Route path="/projects/:slug" element={<ProjectRouter />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
      <ContactForm isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
};

const App: React.FC = () => (
  <HashRouter>
    <AppLayout />
  </HashRouter>
);

export default App;
