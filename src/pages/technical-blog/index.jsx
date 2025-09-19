import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import BlogHeader from './components/BlogHeader';
import FeaturedArticle from './components/FeaturedArticle';
import ArticleGrid from './components/ArticleGrid';
import BlogSidebar from './components/BlogSidebar';
import BlogPagination from './components/BlogPagination';

const TechnicalBlog = () => {
  const [articles, setArticles] = useState([]);
  const [featuredArticle, setFeaturedArticle] = useState(null);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const articlesPerPage = 9;

  // Mock articles data
  const mockArticles = [
    {
      id: 1,
      title: "Guide complet de React 18 : Nouvelles fonctionnalités et migration",
      excerpt: `React 18 apporte des améliorations significatives en termes de performances et d'expérience utilisateur. Découvrez les nouvelles fonctionnalités comme le Concurrent Rendering, les Suspense boundaries automatiques, et les nouveaux hooks.\n\nCet article couvre également les stratégies de migration depuis React 17 et les meilleures pratiques pour tirer parti de ces nouveautés.`,content: `React 18 marque une étape importante dans l'évolution de cette bibliothèque...`,
      author: "Délanno KOTCHO",
      publishedAt: "2025-01-22",
      readingTime: 12,
      views: 1247,
      tags: ["react", "javascript", "frontend"],
      category: "react",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
      isNew: true,
      isFeatured: true
    },
    {
      id: 2,
      title: "Architecture microservices avec Node.js et Docker",
      excerpt: `Apprenez à concevoir et déployer une architecture microservices robuste en utilisant Node.js, Express, et Docker. Ce guide pratique couvre la communication inter-services, la gestion des données distribuées, et les patterns de résilience.`,
      author: "Délanno KOTCHO",
      publishedAt: "2025-01-20",
      readingTime: 15,
      views: 892,
      tags: ["nodejs", "docker", "microservices", "devops"],
      category: "nodejs",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?w=800&h=400&fit=crop",
      isNew: true
    },
    {
      id: 3,
      title: "Optimisation des performances avec Next.js 14",
      excerpt: `Next.js 14 introduit de nouvelles optimisations qui révolutionnent les performances web. Explorez les Server Components, le nouveau App Router, et les techniques d'optimisation avancées pour créer des applications ultra-rapides.`,
      author: "Délanno KOTCHO",
      publishedAt: "2025-01-18",
      readingTime: 10,
      views: 1156,
      tags: ["nextjs", "react", "performance", "seo"],
      category: "react",
      image: "https://images.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg?w=800&h=400&fit=crop"
    },
    {
      id: 4,
      title: "TypeScript avancé : Types utilitaires et patterns",
      excerpt: `Maîtrisez les aspects avancés de TypeScript avec les types utilitaires, les types conditionnels, et les patterns de design. Ce guide approfondi vous aidera à écrire du code plus robuste et maintenable.`,
      author: "Délanno KOTCHO",
      publishedAt: "2025-01-15",
      readingTime: 18,
      views: 743,
      tags: ["typescript", "javascript", "patterns"],
      category: "javascript",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop"
    },
    {
      id: 5,
      title: "GraphQL vs REST : Quand utiliser chaque approche",
      excerpt: `Comparaison détaillée entre GraphQL et REST API. Analysons les avantages, inconvénients, et cas d'usage de chaque approche pour vous aider à faire le bon choix architectural.`,
      author: "Délanno KOTCHO",
      publishedAt: "2025-01-12",
      readingTime: 8,
      views: 654,
      tags: ["graphql", "rest", "api", "backend"],
      category: "nodejs",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?w=800&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Sécurité des applications web : Guide des bonnes pratiques",
      excerpt: `La sécurité web est cruciale dans le développement moderne. Découvrez les vulnérabilités communes (XSS, CSRF, injection SQL) et les techniques de protection à implémenter dans vos applications.`,
      author: "Délanno KOTCHO",
      publishedAt: "2025-01-10",
      readingTime: 14,
      views: 987,
      tags: ["security", "web", "backend", "frontend"],
      category: "devops",
      image: "https://images.pixabay.com/photo/2018/07/14/11/33/cyber-security-3537380_1280.jpg?w=800&h=400&fit=crop"
    },
    {
      id: 7,
      title: "MongoDB vs PostgreSQL : Choisir la bonne base de données",
      excerpt: `Analyse comparative entre MongoDB et PostgreSQL. Explorez les différences architecturales, les cas d'usage optimaux, et les critères de performance pour faire le meilleur choix pour votre projet.`,
      author: "Délanno KOTCHO",
      publishedAt: "2025-01-08",
      readingTime: 11,
      views: 521,
      tags: ["mongodb", "postgresql", "database", "backend"],
      category: "database",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=400&fit=crop"
    },
    {
      id: 8,
      title: "CI/CD avec GitHub Actions : Automatisation complète",
      excerpt: `Mettez en place une pipeline CI/CD robuste avec GitHub Actions. De l'intégration continue au déploiement automatisé, découvrez comment automatiser votre workflow de développement.`,
      author: "Délanno KOTCHO",
      publishedAt: "2025-01-05",
      readingTime: 16,
      views: 834,
      tags: ["cicd", "github", "devops", "automation"],
      category: "devops",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?w=800&h=400&fit=crop"
    },
    {
      id: 9,
      title: "Hooks React personnalisés : Créer des abstractions réutilisables",
      excerpt: `Apprenez à créer des hooks React personnalisés pour encapsuler la logique métier et créer des abstractions réutilisables. Exemples pratiques et patterns avancés inclus.`,
      author: "Délanno KOTCHO",
      publishedAt: "2025-01-03",
      readingTime: 9,
      views: 692,
      tags: ["react", "hooks", "javascript", "patterns"],
      category: "react",
      image: "https://images.pixabay.com/photo/2017/06/23/10/48/code-2434271_1280.jpg?w=800&h=400&fit=crop"
    },
    {
      id: 10,
      title: "Gestion d\'état avec Redux Toolkit : Guide moderne",
      excerpt: `Redux Toolkit simplifie considérablement la gestion d'état dans React. Découvrez les meilleures pratiques, les nouveaux patterns, et comment migrer depuis Redux classique.`,
      author: "Délanno KOTCHO",
      publishedAt: "2024-12-28",
      readingTime: 13,
      views: 758,
      tags: ["redux", "react", "state-management", "javascript"],
      category: "react",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop"
    }
  ];

  useEffect(() => {
    // Simulate API call
    const loadArticles = async () => {
      setLoading(true);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const featured = mockArticles.find(article => article.isFeatured);
      const regular = mockArticles.filter(article => !article.isFeatured);
      
      setFeaturedArticle(featured);
      setArticles(regular);
      setFilteredArticles(regular);
      setLoading(false);
    };

    loadArticles();
  }, []);

  useEffect(() => {
    let filtered = articles;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredArticles(filtered);
    setCurrentPage(1);
  }, [articles, selectedCategory, searchTerm]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const paginatedArticles = filteredArticles.slice(startIndex, startIndex + articlesPerPage);

  return (
    <>
      <Helmet>
        <title>Blog Technique - DelkPortfolio</title>
        <meta name="description" content="Découvrez mes articles sur le développement web, les nouvelles technologies et les meilleures pratiques du secteur. React, Node.js, JavaScript et plus encore." />
        <meta name="keywords" content="blog technique, développement web, React, Node.js, JavaScript, TypeScript, DevOps" />
        <meta property="og:title" content="Blog Technique - DelkPortfolio" />
        <meta property="og:description" content="Articles techniques sur le développement web moderne" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/technical-blog" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="max-w-7xl mx-auto px-6 py-8">
          <Breadcrumb />
          
          <BlogHeader
            onSearch={handleSearch}
            onCategoryFilter={handleCategoryFilter}
            selectedCategory={selectedCategory}
          />

          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Article */}
              {featuredArticle && !loading && (
                <FeaturedArticle article={featuredArticle} />
              )}

              {/* Articles Grid */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-semibold text-primary">
                    {selectedCategory === 'all' ? 'Tous les articles' : `Articles - ${selectedCategory}`}
                  </h2>
                  <div className="text-sm text-text-secondary">
                    {filteredArticles.length} article{filteredArticles.length > 1 ? 's' : ''} trouvé{filteredArticles.length > 1 ? 's' : ''}
                  </div>
                </div>

                <ArticleGrid articles={paginatedArticles} loading={loading} />
              </div>

              {/* Pagination */}
              {!loading && filteredArticles.length > articlesPerPage && (
                <BlogPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <BlogSidebar />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default TechnicalBlog;