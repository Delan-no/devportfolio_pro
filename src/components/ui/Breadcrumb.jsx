import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Breadcrumb = () => {
  const location = useLocation();
  
  const pathMap = {
    '/portfolio-homepage': 'Accueil',
    '/projects-gallery': 'Projets',
    '/professional-experience-timeline': 'Expérience',
    '/technical-blog': 'Blog',
    '/contact-form': 'Contact',
    '/admin-login': 'Administration'
  };

  const getCurrentPageTitle = () => {
    return pathMap[location.pathname] || 'Page';
  };

  const isHomePage = location.pathname === '/portfolio-homepage';

  if (isHomePage) {
    return null;
  }

  return (
    <nav className="flex items-center space-x-2 text-sm text-text-secondary mb-6" aria-label="Breadcrumb">
      <Link
        to="/portfolio-homepage"
        className="flex items-center hover:text-primary transition-smooth"
      >
        <Icon name="Home" size={16} className="mr-1" />
        Accueil
      </Link>
      
      <Icon name="ChevronRight" size={16} className="text-border" />
      
      <span className="text-primary font-medium">
        {getCurrentPageTitle()}
      </span>
    </nav>
  );
};

export default Breadcrumb;