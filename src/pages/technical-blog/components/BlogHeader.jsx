import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const BlogHeader = ({ onSearch, onCategoryFilter, selectedCategory }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'Tous les articles', count: 24 },
    { id: 'react', label: 'React', count: 8 },
    { id: 'nodejs', label: 'Node.js', count: 6 },
    { id: 'javascript', label: 'JavaScript', count: 5 },
    { id: 'devops', label: 'DevOps', count: 3 },
    { id: 'database', label: 'Base de données', count: 2 }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleCategoryClick = (categoryId) => {
    onCategoryFilter(categoryId);
  };

  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-white py-16 mb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Blog Technique
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Découvrez mes réflexions sur le développement web, les nouvelles technologies et les meilleures pratiques du secteur
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="search"
              placeholder="Rechercher des articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-20 py-4 text-lg bg-white/10 border-white/20 text-white placeholder-white/70"
            />
            <Icon 
              name="Search" 
              size={20} 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70" 
            />
            <Button
              type="submit"
              variant="secondary"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              <Icon name="Search" size={16} />
            </Button>
          </form>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "secondary" : "ghost"}
              onClick={() => handleCategoryClick(category.id)}
              className={`${
                selectedCategory === category.id 
                  ? "bg-white text-primary" :"text-white border-white/30 hover:bg-white/10"
              }`}
            >
              {category.label}
              <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;