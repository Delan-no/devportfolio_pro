import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EmptyState = ({ hasFilters, onClearFilters }) => {
  if (hasFilters) {
    return (
      <div className="text-center py-16">
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="Search" size={32} className="text-text-secondary" />
        </div>
        <h3 className="text-xl font-semibold text-text-primary mb-2">
          Aucun projet trouvé
        </h3>
        <p className="text-text-secondary mb-6 max-w-md mx-auto">
          Aucun projet ne correspond à vos critères de recherche. Essayez de modifier vos filtres ou votre terme de recherche.
        </p>
        <Button
          variant="outline"
          onClick={onClearFilters}
          iconName="RotateCcw"
          iconPosition="left"
        >
          Effacer les filtres
        </Button>
      </div>
    );
  }

  return (
    <div className="text-center py-16">
      <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
        <Icon name="FolderOpen" size={32} className="text-text-secondary" />
      </div>
      <h3 className="text-xl font-semibold text-text-primary mb-2">
        Aucun projet disponible
      </h3>
      <p className="text-text-secondary max-w-md mx-auto">
        Les projets seront bientôt disponibles. Revenez plus tard pour découvrir mes réalisations techniques.
      </p>
    </div>
  );
};

export default EmptyState;