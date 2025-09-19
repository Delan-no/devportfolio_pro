import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TimelineItem = ({ experience, index, isLast }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative flex items-start group">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-6 top-12 w-0.5 h-full bg-border group-hover:bg-accent transition-colors duration-300" />
      )}
      
      {/* Timeline Dot */}
      <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-background border-2 border-border rounded-full flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-300">
        <Icon 
          name="Briefcase" 
          size={20} 
          className="text-text-secondary group-hover:text-white transition-colors duration-300" 
        />
      </div>

      {/* Content */}
      <div className="ml-6 flex-1 pb-12">
        <div className="bg-card border border-border rounded-lg p-6 shadow-soft hover:shadow-elevated transition-all duration-300">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-1">
                {experience.position}
              </h3>
              <p className="text-lg text-accent font-medium">
                {experience.company}
              </p>
            </div>
            <div className="mt-2 sm:mt-0 flex items-center text-sm text-text-secondary">
              <Icon name="Calendar" size={16} className="mr-2" />
              <span>{experience.duration}</span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center text-sm text-text-secondary mb-4">
            <Icon name="MapPin" size={16} className="mr-2" />
            <span>{experience.location}</span>
          </div>

          {/* Short Description */}
          <p className="text-text-secondary mb-4 leading-relaxed">
            {experience.shortDescription}
          </p>

          {/* Technology Stack */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-primary mb-2">Technologies utilisées</h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20 hover:bg-accent/20 transition-colors duration-200 cursor-pointer"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Expand/Collapse Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleExpanded}
            iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
            iconPosition="right"
            className="text-accent hover:text-accent/80"
          >
            {isExpanded ? "Voir moins" : "Voir plus de détails"}
          </Button>

          {/* Expanded Content */}
          {isExpanded && (
            <div className="mt-6 pt-6 border-t border-border">
              {/* Detailed Missions */}
              <div className="mb-6">
                <h4 className="text-lg font-medium text-primary mb-3">Missions principales</h4>
                <ul className="space-y-3">
                  {experience.missions.map((mission, missionIndex) => (
                    <li key={missionIndex} className="flex items-start">
                      <Icon name="CheckCircle" size={16} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-text-secondary leading-relaxed">{mission}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Achievements */}
              <div className="mb-6">
                <h4 className="text-lg font-medium text-primary mb-3">Réalisations clés</h4>
                <ul className="space-y-3">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start">
                      <Icon name="Award" size={16} className="text-warning mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-text-secondary leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Developed */}
              <div>
                <h4 className="text-lg font-medium text-primary mb-3">Compétences développées</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.skillsDeveloped.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-success/10 text-success text-sm rounded-full border border-success/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;