import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ArticleCard = ({ article }) => {
  const formatDate = (date) => {
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(new Date(date));
  };

  return (
    <article className="bg-card rounded-xl shadow-soft overflow-hidden hover:shadow-elevated transition-smooth group">
      {/* Article Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-layout"
        />
        {article.isNew && (
          <div className="absolute top-3 left-3">
            <span className="bg-success text-white px-2 py-1 rounded-full text-xs font-medium">
              Nouveau
            </span>
          </div>
        )}
      </div>

      {/* Article Content */}
      <div className="p-6">
        {/* Meta Information */}
        <div className="flex items-center gap-4 text-xs text-text-secondary mb-3">
          <div className="flex items-center gap-1">
            <Icon name="Calendar" size={14} />
            <span>{formatDate(article.publishedAt)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="Clock" size={14} />
            <span>{article.readingTime} min</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="Eye" size={14} />
            <span>{article.views}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-primary mb-3 line-clamp-2 group-hover:text-accent transition-smooth">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
          {article.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="bg-muted text-text-secondary px-2 py-1 rounded text-xs"
            >
              #{tag}
            </span>
          ))}
          {article.tags.length > 3 && (
            <span className="text-xs text-text-secondary">
              +{article.tags.length - 3} autres
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Icon name="User" size={14} color="white" />
            </div>
            <span className="text-sm font-medium text-primary">{article.author}</span>
          </div>

          <Button 
            variant="ghost" 
            size="sm" 
            iconName="ArrowRight" 
            iconPosition="right"
            className="text-accent hover:text-accent"
          >
            Lire
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;