import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails }) => {
  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-elevated transition-all duration-300 group">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Project Type Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
            {project.type}
          </span>
        </div>

        {/* Status Badge */}
        {project.status === 'En cours' && (
          <div className="absolute top-3 right-3">
            <span className="px-2 py-1 bg-warning text-warning-foreground text-xs font-medium rounded-full flex items-center space-x-1">
              <Icon name="Clock" size={12} />
              <span>En cours</span>
            </span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Title and Description */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-text-primary mb-2 line-clamp-1">
            {project.title}
          </h3>
          <p className="text-text-secondary text-sm line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Technology Stack */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-muted text-text-secondary text-xs rounded-md font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 bg-muted text-text-secondary text-xs rounded-md font-medium">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Project Links and Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors"
                aria-label="Voir le code source"
              >
                <Icon name="Github" size={18} />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors"
                aria-label="Voir la démo"
              >
                <Icon name="ExternalLink" size={18} />
              </a>
            )}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(project)}
            iconName="Eye"
            iconPosition="left"
            iconSize={16}
          >
            Détails
          </Button>
        </div>

        {/* Project Stats */}
        <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-xs text-text-secondary">
          <div className="flex items-center space-x-1">
            <Icon name="Calendar" size={12} />
            <span>{project.completedDate}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Users" size={12} />
            <span>{project.teamSize} développeur{project.teamSize > 1 ? 's' : ''}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;