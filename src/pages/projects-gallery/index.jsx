import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import ProjectCard from './components/ProjectCard';
import ProjectFilter from './components/ProjectFilter';
import ProjectModal from './components/ProjectModal';
import ProjectSkeleton from './components/ProjectSkeleton';
import EmptyState from './components/EmptyState';

const ProjectsGallery = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    technology: '',
    type: '',
    status: '',
    sort: 'recent'
  });

  // Mock projects data
  const mockProjects = [
    {
      id: 1,
      title: "Plateforme E-commerce Moderne",
      description: "Application e-commerce complète avec panier, paiement et gestion des commandes",
      fullDescription: `Une plateforme e-commerce moderne développée avec React et Node.js, offrant une expérience utilisateur fluide et intuitive.\n\nLe projet inclut un système de gestion des produits, un panier d'achat dynamique, l'intégration de moyens de paiement sécurisés, et un tableau de bord administrateur complet.\n\nL'architecture microservices permet une scalabilité optimale et une maintenance facilitée.`,
      type: "E-commerce",
      status: "Terminé",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "TailwindCSS", "Express"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
      ],
      githubUrl: "https://github.com/example/ecommerce-platform",
      demoUrl: "https://demo-ecommerce.example.com",
      completedDate: "Décembre 2024",
      duration: "4 mois",
      teamSize: 3,
      client: "StartupTech",
      features: [
        "Catalogue produits avec recherche avancée",
        "Panier d\'achat temps réel",
        "Système de paiement sécurisé",
        "Gestion des commandes et livraisons",
        "Dashboard administrateur",
        "Notifications email automatiques"
      ],
      challenges: "L\'intégration de multiples moyens de paiement et l\'optimisation des performances pour gérer un grand volume de transactions simultanées."
    },
    {
      id: 2,
      title: "Dashboard Analytics Avancé",
      description: "Interface de visualisation de données avec graphiques interactifs et rapports personnalisés",
      fullDescription: `Un tableau de bord analytics sophistiqué développé pour analyser et visualiser des données complexes en temps réel.\n\nL'application propose des graphiques interactifs, des filtres avancés, et la génération de rapports personnalisés au format PDF.\n\nL'architecture optimisée permet de traiter de gros volumes de données avec des temps de réponse excellents.`,
      type: "Dashboard",
      status: "Terminé",
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "PostgreSQL", "Redis"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop"
      ],
      githubUrl: "https://github.com/example/analytics-dashboard",
      demoUrl: "https://demo-analytics.example.com",
      completedDate: "Novembre 2024",
      duration: "3 mois",
      teamSize: 2,
      client: "DataCorp",
      features: [
        "Visualisations interactives avec D3.js",
        "Filtres et segments personnalisables",
        "Export de rapports PDF",
        "Alertes et notifications",
        "API REST pour intégrations",
        "Mise à jour temps réel"
      ],
      challenges: "Optimisation des requêtes pour traiter des millions d\'enregistrements et création de visualisations performantes."
    },
    {
      id: 3,
      title: "Application Mobile React Native",
      description: "App mobile cross-platform pour la gestion de tâches avec synchronisation cloud",
      fullDescription: `Application mobile développée en React Native pour iOS et Android, permettant la gestion collaborative de tâches et projets.\n\nL'app inclut la synchronisation cloud, les notifications push, et fonctionne en mode hors-ligne avec synchronisation automatique.\n\nInterface utilisateur moderne suivant les guidelines Material Design et Human Interface.`,
      type: "Application Mobile",
      status: "En cours",
      technologies: ["React Native", "Firebase", "Redux", "Expo", "TypeScript"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop"
      ],
      githubUrl: "https://github.com/example/task-manager-mobile",
      demoUrl: null,
      completedDate: "En développement",
      duration: "2 mois",
      teamSize: 1,
      features: [
        "Gestion de tâches et projets",
        "Collaboration en équipe",
        "Synchronisation cloud",
        "Mode hors-ligne",
        "Notifications push",
        "Interface adaptive"
      ],
      challenges: "Gestion de la synchronisation offline/online et optimisation des performances sur différents appareils."
    },
    {
      id: 4,
      title: "Site Vitrine Corporate",
      description: "Site web moderne et responsive pour une entreprise de consulting",
      fullDescription: `Site vitrine professionnel développé pour une entreprise de consulting, mettant l'accent sur l'expérience utilisateur et le référencement.\n\nLe site inclut un CMS personnalisé, un système de blog, et des formulaires de contact avancés.\n\nOptimisé pour les performances et le SEO avec un score Lighthouse de 95+.`,
      type: "Site Vitrine",
      status: "Terminé",
      technologies: ["Next.js", "Strapi", "TailwindCSS", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
      ],
      githubUrl: "https://github.com/example/corporate-website",
      demoUrl: "https://demo-corporate.example.com",
      completedDate: "Octobre 2024",
      duration: "6 semaines",
      teamSize: 2,
      client: "ConsultPro",
      features: [
        "Design responsive moderne",
        "CMS intégré pour le contenu",
        "Blog avec système de commentaires",
        "Formulaires de contact avancés",
        "Optimisation SEO complète",
        "Animations fluides"
      ],
      challenges: "Atteindre des performances optimales tout en maintenant des animations fluides et un design riche."
    },
    {
      id: 5,
      title: "API REST Microservices",
      description: "Architecture microservices scalable avec authentification JWT et documentation Swagger",
      fullDescription: `API REST robuste développée avec une architecture microservices, conçue pour supporter une montée en charge importante.\n\nL'API inclut un système d'authentification JWT, une documentation Swagger complète, et des tests automatisés.\n\nDéployée sur AWS avec monitoring et logging avancés.`,
      type: "API REST",
      status: "Terminé",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger", "Docker", "AWS"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop"
      ],
      githubUrl: "https://github.com/example/microservices-api",
      demoUrl: "https://api-demo.example.com/docs",
      completedDate: "Septembre 2024",
      duration: "2 mois",
      teamSize: 2,
      features: [
        "Architecture microservices",
        "Authentification JWT sécurisée",
        "Documentation Swagger interactive",
        "Tests automatisés complets",
        "Monitoring et logging",
        "Déploiement containerisé"
      ],
      challenges: "Conception d\'une architecture scalable et mise en place d\'un système de monitoring efficace."
    },
    {
      id: 6,
      title: "CMS Personnalisé",
      description: "Système de gestion de contenu sur mesure avec éditeur WYSIWYG et gestion des médias",
      fullDescription: `CMS développé sur mesure pour répondre aux besoins spécifiques de gestion de contenu d'une agence digitale.\n\nLe système inclut un éditeur WYSIWYG avancé, la gestion des médias, et un système de rôles granulaire.\n\nInterface intuitive permettant aux non-techniciens de gérer facilement le contenu.`,
      type: "CMS",
      status: "Terminé",
      technologies: ["Laravel", "Vue.js", "MySQL", "TinyMCE", "AWS S3"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
      ],
      githubUrl: "https://github.com/example/custom-cms",
      demoUrl: "https://demo-cms.example.com",
      completedDate: "Août 2024",
      duration: "3 mois",
      teamSize: 1,
      client: "DigitalAgency",
      features: [
        "Éditeur WYSIWYG avancé",
        "Gestion des médias et images",
        "Système de rôles et permissions",
        "Prévisualisation en temps réel",
        "Sauvegarde automatique",
        "Interface responsive"
      ],
      challenges: "Développement d\'un éditeur performant et création d\'une interface utilisateur intuitive pour les non-techniciens."
    }
  ];

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setProjects(mockProjects);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Filter and search logic
  const filteredProjects = useMemo(() => {
    let filtered = [...projects];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => 
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Technology filter
    if (filters.technology) {
      filtered = filtered.filter(project =>
        project.technologies.includes(filters.technology)
      );
    }

    // Type filter
    if (filters.type) {
      filtered = filtered.filter(project => project.type === filters.type);
    }

    // Status filter
    if (filters.status) {
      filtered = filtered.filter(project => project.status === filters.status);
    }

    // Sort
    switch (filters.sort) {
      case 'recent':
        filtered.sort((a, b) => b.id - a.id);
        break;
      case 'oldest':
        filtered.sort((a, b) => a.id - b.id);
        break;
      case 'name':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'name-desc':
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }

    return filtered;
  }, [projects, searchTerm, filters]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const handleClearFilters = () => {
    setFilters({
      technology: '',
      type: '',
      status: '',
      sort: 'recent'
    });
    setSearchTerm('');
  };

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const hasActiveFilters = filters.technology || filters.type || filters.status || searchTerm;

  return (
    <>
      <Helmet>
        <title>Galerie de Projets - DelkPortfolio</title>
        <meta name="description" content="Découvrez mes projets de développement web et mobile. Applications React, Node.js, API REST et plus encore." />
        <meta name="keywords" content="projets web, développement, React, Node.js, portfolio, applications" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="max-w-7xl mx-auto px-6 py-8">
          <Breadcrumb />
          
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Galerie de Projets
            </h1>
            <p className="text-lg text-text-secondary max-w-3xl">
              Découvrez mes réalisations techniques à travers une sélection de projets web et mobile. 
              Chaque projet reflète mon expertise en développement fullstack et ma passion pour créer 
              des solutions innovantes.
            </p>
          </div>

          {/* Filter Section */}
          <ProjectFilter
            filters={filters}
            onFilterChange={handleFilterChange}
            onSearchChange={handleSearchChange}
            onClearFilters={handleClearFilters}
            searchTerm={searchTerm}
            projectsCount={filteredProjects.length}
          />

          {/* Projects Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, index) => (
                <ProjectSkeleton key={index} />
              ))}
            </div>
          ) : filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          ) : (
            <EmptyState
              hasFilters={hasActiveFilters}
              onClearFilters={handleClearFilters}
            />
          )}
        </main>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </>
  );
};

export default ProjectsGallery;