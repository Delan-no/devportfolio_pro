import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const BlogSidebar = () => {
  const recentArticles = [
    {
      id: 1,
      title: "Les hooks React avancés que vous devez connaître",
      publishedAt: "2025-01-20",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Optimisation des performances avec Next.js 14",
      publishedAt: "2025-01-18",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?w=400&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Architecture microservices avec Node.js",
      publishedAt: "2025-01-15",
      image: "https://images.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg?w=400&h=200&fit=crop"
    }
  ];

  const popularTags = [
    { name: 'React', count: 12 },
    { name: 'JavaScript', count: 10 },
    { name: 'Node.js', count: 8 },
    { name: 'TypeScript', count: 6 },
    { name: 'Next.js', count: 5 },
    { name: 'MongoDB', count: 4 },
    { name: 'DevOps', count: 3 },
    { name: 'GraphQL', count: 3 }
  ];

  const archives = [
    { month: 'Janvier 2025', count: 4 },
    { month: 'Décembre 2024', count: 6 },
    { month: 'Novembre 2024', count: 3 },
    { month: 'Octobre 2024', count: 5 },
    { month: 'Septembre 2024', count: 2 }
  ];

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long'
    }).format(new Date(date));
  };

  return (
    <aside className="space-y-8">
      {/* Author Bio */}
      <div className="bg-card rounded-xl p-6 shadow-soft">
        <div className="text-center mb-4">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="User" size={32} color="white" />
          </div>
          <h3 className="text-xl font-semibold text-primary mb-2">Délanno KOTCHO</h3>
          <p className="text-text-secondary text-sm">Développeur Fullstack</p>
        </div>
        <p className="text-sm text-text-secondary text-center leading-relaxed mb-4">
          Passionné par les technologies web modernes, je partage mes expériences et découvertes à travers ce blog.
        </p>
        <div className="flex justify-center gap-3">
          <a href="#" className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-smooth">
            <Icon name="Github" size={16} />
          </a>
          <a href="#" className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-smooth">
            <Icon name="Linkedin" size={16} />
          </a>
          <a href="#" className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-smooth">
            <Icon name="Twitter" size={16} />
          </a>
        </div>
      </div>

      {/* Recent Articles */}
      <div className="bg-card rounded-xl p-6 shadow-soft">
        <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
          <Icon name="Clock" size={20} />
          Articles récents
        </h3>
        <div className="space-y-4">
          {recentArticles.map((article) => (
            <div key={article.id} className="flex gap-3 group cursor-pointer">
              <div className="w-16 h-12 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-layout"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-primary line-clamp-2 group-hover:text-accent transition-smooth">
                  {article.title}
                </h4>
                <p className="text-xs text-text-secondary mt-1">
                  {formatDate(article.publishedAt)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="bg-card rounded-xl p-6 shadow-soft">
        <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
          <Icon name="Tag" size={20} />
          Tags populaires
        </h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <button
              key={tag.name}
              className="bg-muted hover:bg-accent hover:text-white text-text-secondary px-3 py-1 rounded-full text-sm transition-smooth"
            >
              #{tag.name} ({tag.count})
            </button>
          ))}
        </div>
      </div>

      {/* Archives */}
      <div className="bg-card rounded-xl p-6 shadow-soft">
        <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
          <Icon name="Archive" size={20} />
          Archives
        </h3>
        <div className="space-y-2">
          {archives.map((archive, index) => (
            <button
              key={index}
              className="w-full flex items-center justify-between text-left text-text-secondary hover:text-primary transition-smooth py-2 px-3 rounded-lg hover:bg-muted"
            >
              <span className="text-sm">{archive.month}</span>
              <span className="text-xs bg-muted px-2 py-1 rounded-full">
                {archive.count}
              </span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default BlogSidebar;