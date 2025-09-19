import React from 'react';
import ArticleCard from './ArticleCard';
import Icon from '../../../components/AppIcon';


const ArticleGrid = ({ articles, loading }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-card rounded-xl shadow-soft overflow-hidden animate-pulse">
            <div className="h-48 bg-muted"></div>
            <div className="p-6">
              <div className="flex gap-4 mb-3">
                <div className="h-3 bg-muted rounded w-20"></div>
                <div className="h-3 bg-muted rounded w-16"></div>
              </div>
              <div className="h-6 bg-muted rounded mb-3"></div>
              <div className="space-y-2 mb-4">
                <div className="h-4 bg-muted rounded"></div>
                <div className="h-4 bg-muted rounded w-3/4"></div>
              </div>
              <div className="flex gap-2 mb-4">
                <div className="h-6 bg-muted rounded w-16"></div>
                <div className="h-6 bg-muted rounded w-20"></div>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-muted rounded-full"></div>
                  <div className="h-4 bg-muted rounded w-20"></div>
                </div>
                <div className="h-8 bg-muted rounded w-16"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="FileText" size={32} className="text-text-secondary" />
        </div>
        <h3 className="text-xl font-semibold text-primary mb-2">
          Aucun article trouvé
        </h3>
        <p className="text-text-secondary max-w-md mx-auto">
          Aucun article ne correspond à vos critères de recherche. Essayez de modifier vos filtres ou votre terme de recherche.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleGrid;