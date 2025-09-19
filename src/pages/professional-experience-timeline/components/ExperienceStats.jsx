import React from 'react';
import Icon from '../../../components/AppIcon';

const ExperienceStats = ({ experiences }) => {
  const totalYears = 5;
  const totalProjects = experiences.reduce((sum, exp) => sum + (exp.projectsCount || 0), 0);
  const totalTechnologies = [...new Set(experiences.flatMap(exp => exp.technologies))].length;
  const totalCompanies = experiences.length;

  const stats = [
    {
      icon: 'Calendar',
      value: `${totalYears}+`,
      label: 'Années d\'expérience',
      color: 'text-accent'
    },
    {
      icon: 'Building2',
      value: totalCompanies,
      label: 'Entreprises',
      color: 'text-success'
    },
    {
      icon: 'FolderOpen',
      value: `${totalProjects}+`,
      label: 'Projets réalisés',
      color: 'text-warning'
    },
    {
      icon: 'Code2',
      value: `${totalTechnologies}+`,
      label: 'Technologies maîtrisées',
      color: 'text-error'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-elevated transition-all duration-300 group"
        >
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted mb-4 group-hover:scale-110 transition-transform duration-300`}>
            <Icon name={stat.icon} size={24} className={stat.color} />
          </div>
          <div className="text-2xl font-bold text-primary mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-text-secondary">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceStats;