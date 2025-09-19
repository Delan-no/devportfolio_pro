import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TechnologyFilter = ({ experiences, onFilterChange }) => {
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  // Extract all unique technologies
  const allTechnologies = [...new Set(experiences.flatMap(exp => exp.technologies))].sort();

  const handleTechnologyToggle = (technology) => {
    const newSelected = selectedTechnologies.includes(technology)
      ? selectedTechnologies.filter(tech => tech !== technology)
      : [...selectedTechnologies, technology];
    
    setSelectedTechnologies(newSelected);
    onFilterChange(newSelected);
  };

  const clearFilters = () => {
    setSelectedTechnologies([]);
    onFilterChange([]);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const displayedTechnologies = isExpanded ? allTechnologies : allTechnologies.slice(0, 8);

  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-primary flex items-center">
          <Icon name="Filter" size={20} className="mr-2" />
          Filtrer par technologie
        </h3>
        {selectedTechnologies.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            iconName="X"
            iconPosition="left"
            className="text-text-secondary hover:text-error"
          >
            Effacer ({selectedTechnologies.length})
          </Button>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {displayedTechnologies.map((technology) => (
          <button
            key={technology}
            onClick={() => handleTechnologyToggle(technology)}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedTechnologies.includes(technology)
                ? 'bg-accent text-white shadow-sm'
                : 'bg-muted text-text-secondary hover:bg-accent/10 hover:text-accent border border-border'
            }`}
          >
            {technology}
          </button>
        ))}
      </div>

      {allTechnologies.length > 8 && (
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleExpanded}
          iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
          iconPosition="right"
          className="text-accent hover:text-accent/80"
        >
          {isExpanded ? "Voir moins" : `Voir ${allTechnologies.length - 8} technologies de plus`}
        </Button>
      )}
    </div>
  );
};

export default TechnologyFilter;