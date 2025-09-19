import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedArticle = ({ article }) => {
  const formatDate = (date) => {
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(new Date(date));
  };

  return (
    <div className="bg-card rounded-2xl shadow-elevated overflow-hidden mb-12">
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Image Section */}
        <div className="relative h-64 lg:h-full overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
              Article en vedette
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <div className="flex items-center gap-4 text-sm text-text-secondary mb-4">
            <div className="flex items-center gap-2">
              <Icon name="Calendar" size={16} />
              <span>{formatDate(article.publishedAt)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={16} />
              <span>{article.readingTime} min de lecture</span>
            </div>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 leading-tight">
            {article.title}
          </h2>

          <p className="text-lg text-text-secondary mb-6 leading-relaxed">
            {article.excerpt}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="bg-muted text-text-secondary px-3 py-1 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Icon name="User" size={20} color="white" />
              </div>
              <div>
                <p className="font-medium text-primary">{article.author}</p>
                <p className="text-sm text-text-secondary">Développeur Fullstack</p>
              </div>
            </div>

            <Button variant="default" iconName="ArrowRight" iconPosition="right">
              Lire l'article
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;