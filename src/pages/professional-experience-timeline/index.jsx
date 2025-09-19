import React, { useState, useMemo } from 'react';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import ExperienceHeader from './components/ExperienceHeader';
import ExperienceStats from './components/ExperienceStats';
import TechnologyFilter from './components/TechnologyFilter';
import TimelineItem from './components/TimelineItem';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';



const ProfessionalExperienceTimeline = () => {
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);

  // Mock experience data
  const experiences = [
    {
      id: 1,
      position: "Développeur Fullstack Senior",
      company: "TechInnovate Solutions",
      duration: "Jan 2023 - Présent",
      location: "Cotonou, Cotonou",
      shortDescription: "Lead technique sur des projets d'envergure, encadrement d'équipe et architecture de solutions complexes utilisant React, Node.js et AWS.",
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL", "Redis", "GraphQL"],
      projectsCount: 8,
      missions: [
        "Architecture et développement d\'une plateforme SaaS multi-tenant servant plus de 10 000 utilisateurs",
        "Encadrement technique d\'une équipe de 4 développeurs junior et mid-level",
        "Mise en place de pipelines CI/CD avec GitHub Actions et déploiement automatisé sur AWS",
        "Optimisation des performances applicatives résultant en une amélioration de 40% du temps de chargement",
        "Implémentation de microservices avec Docker et orchestration Kubernetes"
      ],
      achievements: [
        "Réduction de 60% du temps de développement grâce à la création d\'une bibliothèque de composants réutilisables",
        "Mise en place d\'une architecture hexagonale permettant une meilleure testabilité et maintenabilité",
        "Formation de l'équipe aux bonnes pratiques DevOps et méthodologies agiles",
        "Contribution à l\'open source avec 3 packages NPM utilisés par la communauté"
      ],
      skillsDeveloped: ["Leadership technique", "Architecture microservices", "Mentoring", "DevOps", "Kubernetes"]
    },
    {
      id: 2,
      position: "Développeur Fullstack",
      company: "Digital Dynamics",
      duration: "Mar 2021 - Déc 2022",
      location: "Lyon, France",
      shortDescription: "Développement d'applications web modernes et d'APIs RESTful, collaboration étroite avec les équipes UX/UI et product management.",
      technologies: ["Vue.js", "Express.js", "MongoDB", "Firebase", "Tailwind CSS", "Jest", "Cypress"],
      projectsCount: 12,
      missions: [
        "Développement d'une application e-commerce complète avec panier, paiement et gestion des commandes",
        "Création d'APIs RESTful robustes avec authentification JWT et autorisation basée sur les rôles",
        "Intégration de services tiers (Stripe, SendGrid, Google Analytics) pour enrichir les fonctionnalités",
        "Mise en place de tests unitaires et d\'intégration avec couverture de code supérieure à 85%",
        "Collaboration avec l\'équipe design pour l\'implémentation pixel-perfect des maquettes"
      ],
      achievements: [
        "Développement d\'un système de recommandations personnalisées augmentant les ventes de 25%",
        "Optimisation SEO résultant en une amélioration de 150% du trafic organique",
        "Implémentation d\'un système de cache intelligent réduisant la charge serveur de 45%",
        "Création d\'un dashboard analytics temps réel pour le suivi des KPIs business"
      ],
      skillsDeveloped: ["Vue.js avancé", "Optimisation SEO", "Analytics", "E-commerce", "Tests automatisés"]
    },
    {
      id: 3,
      position: "Développeur Frontend",
      company: "StartupLab",
      duration: "Jun 2020 - Fév 2021",
      location: "Marseille, France",
      shortDescription: "Spécialisation dans le développement d'interfaces utilisateur modernes et responsives, focus sur l'expérience utilisateur et les performances.",
      technologies: ["React", "Redux", "Sass", "Webpack", "Babel", "Figma", "Storybook"],
      projectsCount: 6,
      missions: [
        "Développement d\'interfaces utilisateur complexes avec React et Redux pour la gestion d\'état",
        "Création de composants réutilisables documentés avec Storybook",
        "Optimisation des performances frontend avec lazy loading et code splitting",
        "Collaboration étroite avec les designers pour l\'implémentation des systèmes de design",
        "Mise en place d\'outils de build modernes avec Webpack et optimisation des bundles"
      ],
      achievements: [
        "Réduction de 50% de la taille des bundles JavaScript grâce à l\'optimisation Webpack",
        "Création d'une bibliothèque de composants utilisée par 3 équipes différentes",
        "Amélioration de l\'accessibilité web atteignant le niveau AA des WCAG 2.1",
        "Implémentation d\'un système de thèmes dynamiques avec support du mode sombre"
      ],
      skillsDeveloped: ["React avancé", "Optimisation performances", "Accessibilité web", "Design systems", "Build tools"]
    },
    {
      id: 4,
      position: "Développeur Web Junior",
      company: "WebCraft Agency",
      duration: "Sep 2019 - Mai 2020",
      location: "Nice, France",
      shortDescription: "Premiers pas dans le développement web professionnel, apprentissage des fondamentaux et contribution à des projets clients variés.",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "WordPress", "Bootstrap"],
      projectsCount: 15,
      missions: [
        "Développement de sites web vitrine et e-commerce pour des clients PME",
        "Intégration de maquettes PSD/Figma en HTML/CSS responsive",
        "Customisation et développement de thèmes WordPress sur mesure",
        "Maintenance et mise à jour de sites existants avec correction de bugs",
        "Formation aux bonnes pratiques de développement et méthodologies agiles"
      ],
      achievements: [
        "Livraison de 15 projets clients dans les délais avec un taux de satisfaction de 95%",
        "Développement d\'un thème WordPress réutilisable économisant 30h de développement par projet",
        "Amélioration des performances de sites existants avec un gain moyen de 40% sur le temps de chargement",
        "Obtention de la certification Google Analytics et Google Ads"
      ],
      skillsDeveloped: ["Fondamentaux web", "WordPress", "Relation client", "Gestion de projet", "SEO de base"]
    }
  ];

  // Filter experiences based on selected technologies
  const filteredExperiences = useMemo(() => {
    if (selectedTechnologies.length === 0) {
      return experiences;
    }
    
    return experiences.filter(experience =>
      selectedTechnologies.some(tech =>
        experience.technologies.includes(tech)
      )
    );
  }, [selectedTechnologies, experiences]);

  const handleFilterChange = (technologies) => {
    setSelectedTechnologies(technologies);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-6xl mx-auto px-6 py-8">
        <Breadcrumb />
        
        <ExperienceHeader />
        
        <ExperienceStats experiences={experiences} />
        
        <TechnologyFilter 
          experiences={experiences}
          onFilterChange={handleFilterChange}
        />
        
        {/* Timeline Container */}
        <div className="relative">
          {filteredExperiences.length > 0 ? (
            <div className="space-y-0">
              {filteredExperiences.map((experience, index) => (
                <TimelineItem
                  key={experience.id}
                  experience={experience}
                  index={index}
                  isLast={index === filteredExperiences.length - 1}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full mb-4">
                <Icon name="Search" size={32} className="text-text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                Aucune expérience trouvée
              </h3>
              <p className="text-text-secondary">
                Aucune expérience ne correspond aux technologies sélectionnées.
              </p>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-accent/10 to-success/10 rounded-lg p-8 border border-accent/20">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Intéressé par mon profil ?
            </h2>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Découvrez mes projets concrets et n'hésitez pas à me contacter pour discuter 
              de vos besoins en développement web.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="FolderOpen"
                iconPosition="left"
                onClick={() => window.location.href = '/projects-gallery'}
              >
                Voir mes projets
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Mail"
                iconPosition="left"
                onClick={() => window.location.href = '/contact-form'}
              >
                Me contacter
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfessionalExperienceTimeline;