import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../../contexts/LanguageContext';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navigationItems = [
    { label: t('navigation.home'), path: '/portfolio-homepage', icon: 'Home' },
    { label: t('navigation.projects'), path: '/projects-gallery', icon: 'FolderOpen' },
    { label: t('navigation.experience'), path: '/professional-experience-timeline', icon: 'Briefcase' },
    { label: t('navigation.blog'), path: '/technical-blog', icon: 'BookOpen' },
    { label: t('navigation.contact'), path: '/contact-form', icon: 'Mail' }
  ];

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link 
              to="/portfolio-homepage" 
              className="flex items-center space-x-3 transition-smooth hover:opacity-80"
            >
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Code2" size={20} color="white" />
              </div>
              <span className="text-xl font-semibold text-primary">DelkPortfolio</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-smooth ${
                    isActivePath(item.path)
                      ? 'text-accent bg-accent/10' :'text-text-secondary hover:text-primary hover:bg-muted'
                  }`}
                >
                  <Icon name={item.icon} size={16} />
                  <span>{item.label}</span>
                </Link>
              ))}
              
              {/* Language Selector */}
              <LanguageSelector />
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={closeMobileMenu} />
          <div className="fixed top-16 left-0 right-0 bottom-0 bg-background border-t border-border">
            <nav className="p-6">
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeMobileMenu}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-smooth ${
                      isActivePath(item.path)
                        ? 'text-accent bg-accent/10' :'text-text-secondary hover:text-primary hover:bg-muted'
                    }`}
                  >
                    <Icon name={item.icon} size={20} />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
              
              {/* Language Selector Mobile */}
              <div className="mt-6 pt-6 border-t border-border">
                <div className="px-4">
                  <LanguageSelector variant="simple" />
                </div>
              </div>
              
              {/* Admin Access */}
              <div className="mt-6 pt-6 border-t border-border">
                <Link
                  to="/admin-login"
                  onClick={closeMobileMenu}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium text-text-secondary hover:text-primary hover:bg-muted transition-smooth"
                >
                  <Icon name="Settings" size={20} />
                  <span>{t('navigation.administration')}</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Spacer for fixed header */}
      <div className="h-16" />
    </>
  );
};

export default Header;