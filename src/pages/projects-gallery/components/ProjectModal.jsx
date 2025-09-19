import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="bg-card rounded-2xl border border-border max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-2xl font-semibold text-text-primary mb-1">
              {project.title}
            </h2>
            <div className="flex items-center space-x-3">
              <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                {project.type}
              </span>
              <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                project.status === 'Terminé' ?'bg-success text-success-foreground'
                  : project.status === 'En cours' ?'bg-warning text-warning-foreground' :'bg-muted text-text-secondary'
              }`}>
                {project.status}
              </span>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Fermer"
          >
            <Icon name="X" size={24} />
          </Button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {/* Image Carousel */}
          <div className="relative mb-8">
            <div className="aspect-video rounded-xl overflow-hidden bg-muted">
              <Image
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Carousel Controls */}
            {project.images.length > 1 && (
              <>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2"
                  onClick={prevImage}
                  aria-label="Image précédente"
                >
                  <Icon name="ChevronLeft" size={20} />
                </Button>
                
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                  onClick={nextImage}
                  aria-label="Image suivante"
                >
                  <Icon name="ChevronRight" size={20} />
                </Button>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                      aria-label={`Aller à l'image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  Description du projet
                </h3>
                <div className="prose prose-sm max-w-none text-text-secondary">
                  {project.fullDescription.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-3 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Features */}
              {project.features && (
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">
                    Fonctionnalités principales
                  </h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                        <span className="text-text-secondary text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Challenges */}
              {project.challenges && (
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">
                    Défis techniques
                  </h3>
                  <div className="text-text-secondary text-sm leading-relaxed">
                    {project.challenges}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Info */}
              <div className="bg-muted rounded-xl p-4">
                <h3 className="text-lg font-semibold text-text-primary mb-4">
                  Informations
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary text-sm">Durée</span>
                    <span className="text-text-primary text-sm font-medium">{project.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary text-sm">Équipe</span>
                    <span className="text-text-primary text-sm font-medium">{project.teamSize} développeur{project.teamSize > 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary text-sm">Terminé</span>
                    <span className="text-text-primary text-sm font-medium">{project.completedDate}</span>
                  </div>
                  {project.client && (
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary text-sm">Client</span>
                      <span className="text-text-primary text-sm font-medium">{project.client}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  Technologies utilisées
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="space-y-3">
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    fullWidth
                    iconName="Github"
                    iconPosition="left"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    Code source
                  </Button>
                )}
                
                {project.demoUrl && (
                  <Button
                    variant="default"
                    fullWidth
                    iconName="ExternalLink"
                    iconPosition="left"
                    onClick={() => window.open(project.demoUrl, '_blank')}
                  >
                    Voir la démo
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;