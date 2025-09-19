import React from 'react';
import Select from '../../../components/ui/Select';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';


const ProjectFilter = ({ 
  filters, 
  onFilterChange, 
  onSearchChange, 
  onClearFilters, 
  searchTerm,
  projectsCount 
}) => {
  const technologyOptions = [
    { value: '', label: 'Toutes les technologies' },
    { value: 'React', label: 'React' },
    { value: 'Vue.js', label: 'Vue.js' },
    { value: 'Angular', label: 'Angular' },
    { value: 'Node.js', label: 'Node.js' },
    { value: 'Python', label: 'Python' },
    { value: 'PHP', label: 'PHP' },
    { value: 'Laravel', label: 'Laravel' },
    { value: 'Django', label: 'Django' },
    { value: 'MongoDB', label: 'MongoDB' },
    { value: 'PostgreSQL', label: 'PostgreSQL' },
    { value: 'MySQL', label: 'MySQL' }
  ];

  const typeOptions = [
    { value: '', label: 'Tous les types' },
    { value: 'Application Web', label: 'Application Web' },
    { value: 'Site Vitrine', label: 'Site Vitrine' },
    { value: 'E-commerce', label: 'E-commerce' },
    { value: 'API REST', label: 'API REST' },
    { value: 'Application Mobile', label: 'Application Mobile' },
    { value: 'Dashboard', label: 'Dashboard' },
    { value: 'CMS', label: 'CMS' }
  ];

  const statusOptions = [
    { value: '', label: 'Tous les statuts' },
    { value: 'Terminé', label: 'Terminé' },
    { value: 'En cours', label: 'En cours' },
    { value: 'En pause', label: 'En pause' }
  ];

  const sortOptions = [
    { value: 'recent', label: 'Plus récents' },
    { value: 'oldest', label: 'Plus anciens' },
    { value: 'name', label: 'Nom A-Z' },
    { value: 'name-desc', label: 'Nom Z-A' }
  ];

  const hasActiveFilters = filters.technology || filters.type || filters.status || searchTerm;

  return (
    <div className="bg-card rounded-xl border border-border p-6 mb-8">
      {/* Search Bar */}
      <div className="mb-6">
        <Input
          type="search"
          placeholder="Rechercher un projet ou une technologie..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="max-w-md"
        />
      </div>

      {/* Filter Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Select
          label="Technologie"
          options={technologyOptions}
          value={filters.technology}
          onChange={(value) => onFilterChange('technology', value)}
        />

        <Select
          label="Type de projet"
          options={typeOptions}
          value={filters.type}
          onChange={(value) => onFilterChange('type', value)}
        />

        <Select
          label="Statut"
          options={statusOptions}
          value={filters.status}
          onChange={(value) => onFilterChange('status', value)}
        />

        <Select
          label="Trier par"
          options={sortOptions}
          value={filters.sort}
          onChange={(value) => onFilterChange('sort', value)}
        />
      </div>

      {/* Results Summary and Clear Filters */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-text-secondary">
          <span className="font-medium text-text-primary">{projectsCount}</span> projet{projectsCount !== 1 ? 's' : ''} trouvé{projectsCount !== 1 ? 's' : ''}
        </div>

        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            iconName="X"
            iconPosition="left"
            iconSize={16}
          >
            Effacer les filtres
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProjectFilter;