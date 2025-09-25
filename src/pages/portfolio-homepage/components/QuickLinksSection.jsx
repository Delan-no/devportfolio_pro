import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { useLanguage } from '../../../contexts/LanguageContext';

const QuickLinksSection = () => {
  const { t } = useLanguage();
  const quickLinks = [
    {
      title: t('navigation.projects'),
      description: "Découvrez mes réalisations et projets les plus récents avec détails techniques et démonstrations.",
      icon: "FolderOpen",
      color: "bg-blue-500",
      route: "/projects-gallery",
      cta: t('projects.viewProject')
    },
    {
      title: t('navigation.experience'),
      description: "Parcourez mon parcours professionnel et les missions que j'ai réalisées au fil des années.",
      icon: "Briefcase",
      color: "bg-emerald-500",
      route: "/professional-experience-timeline",
      cta: "Voir l'expérience"
    },
    {
      title: t('navigation.blog'),
      description: "Lisez mes articles sur les dernières technologies et bonnes pratiques de développement.",
      icon: "BookOpen",
      color: "bg-purple-500",
      route: "/technical-blog",
      cta: t('blog.readMore')
    },
    {
      title: t('navigation.contact'),
      description: "Vous avez un projet ? Une question ? N'hésitez pas à me contacter pour en discuter.",
      icon: "Mail",
      color: "bg-orange-500",
      route: "/contact-form",
      cta: t('hero.contactMe')
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Explorez Mon Portfolio
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Naviguez à travers les différentes sections pour en savoir plus sur mon travail et mon expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {quickLinks.map((link, index) => (
            <div 
              key={index}
              className="group bg-slate-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 ${link.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={link.icon} size={28} color="white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {link.description}
                  </p>
                  
                  <Link to={link.route}>
                    <Button 
                      variant="outline" 
                      iconName="ArrowRight"
                      iconPosition="right"
                      className="group-hover:bg-blue-50 group-hover:border-blue-300 group-hover:text-blue-600"
                    >
                      {link.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Prêt à Collaborer ?
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Je suis toujours ouvert aux nouvelles opportunités et aux projets passionnants. 
            Discutons de votre prochain projet ensemble !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-form">
              <Button 
                variant="secondary" 
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-white text-blue-600 hover:bg-slate-100"
              >
                Démarrer une conversation
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              className="border-white text-white hover:bg-white hover:text-blue-600"
              onClick={() => window.open('https://calendly.com/alexandre-martin', '_blank')}
            >
              Planifier un appel
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickLinksSection;