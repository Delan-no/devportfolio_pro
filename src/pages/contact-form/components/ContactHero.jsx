import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactHero = () => {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
        <Icon name="MessageSquare" size={32} className="text-accent" />
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
        Contactez-moi
      </h1>
      
      <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
        Vous avez un projet en tête ? Une question technique ? 
        Ou simplement envie de discuter de développement web ? 
        Je serais ravi d'échanger avec vous.
      </p>
      
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <div className="flex items-center space-x-2 px-4 py-2 bg-success/10 rounded-full">
          <Icon name="Clock" size={16} className="text-success" />
          <span className="text-sm font-medium text-success">Réponse sous 24h</span>
        </div>
        
        <div className="flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full">
          <Icon name="Shield" size={16} className="text-accent" />
          <span className="text-sm font-medium text-accent">Confidentialité garantie</span>
        </div>
        
        <div className="flex items-center space-x-2 px-4 py-2 bg-warning/10 rounded-full">
          <Icon name="Zap" size={16} className="text-warning" />
          <span className="text-sm font-medium text-warning">Consultation gratuite</span>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;