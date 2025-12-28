import React, { useState, useEffect } from 'react';
import { RESUME_DATA } from '../constants';

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
  onLetsTalk?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavClick, onLetsTalk }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onNavClick(id);
  };

  const handleLetsTalkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onLetsTalk) {
      onLetsTalk();
    } else {
      onNavClick('contact');
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 py-4' : 'bg-white/90 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => handleLinkClick(e, 'home')}
          className="text-lg font-semibold tracking-tight text-apple-dark hover:opacity-70 transition-opacity"
        >
          Son Nguyen
        </a>
        
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-apple-subtext">
          <a href="#" onClick={(e) => handleLinkClick(e, 'home')} className="hover:text-apple-dark transition-colors">Home</a>
          <a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')} className="hover:text-apple-dark transition-colors">Projects</a>
          <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-apple-dark transition-colors">Experience</a>
          <a href="#skills" onClick={(e) => handleLinkClick(e, 'skills')} className="hover:text-apple-dark transition-colors">Skills</a>
          <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="hover:text-apple-dark transition-colors">Contact</a>
        </nav>

        <a 
          href="#contact" 
          onClick={handleLetsTalkClick}
          className={`text-sm font-medium px-5 py-2 rounded-full transition-all cursor-pointer ${
            isScrolled 
              ? 'bg-apple-dark text-white hover:bg-zinc-800' 
              : 'bg-white text-apple-subtext border border-gray-200 hover:bg-gray-200'
          }`}
        >
          Message
        </a>
      </div>
    </header>
  );
};

export default Header;
