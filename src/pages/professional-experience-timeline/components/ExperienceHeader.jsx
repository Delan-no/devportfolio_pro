import React from 'react';
import Icon from '../../../components/AppIcon';

const ExperienceHeader = () => {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
        <Icon name="Briefcase" size={32} className="text-accent" />
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
        Parcours Professionnel
      </h1>
      
      <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
        Découvrez mon évolution professionnelle à travers 5 années d'expérience en développement fullstack, 
        des projets innovants aux technologies de pointe qui façonnent l'avenir du web.
      </p>
      
      <div className="flex items-center justify-center mt-6 text-sm text-text-secondary">
        <Icon name="TrendingUp" size={16} className="mr-2" />
        <span>Progression continue depuis 2019</span>
      </div>
    </div>
  );
};

export default ExperienceHeader;