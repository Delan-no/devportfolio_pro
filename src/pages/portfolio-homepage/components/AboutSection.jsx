import React from 'react';
import Icon from '../../../components/AppIcon';

const AboutSection = () => {
  const values = [
    {
      icon: "Code2",
      title: "Code Propre",
      description: "J'écris du code maintenable, testé et documenté pour assurer la pérennité des projets."
    },
    {
      icon: "Users",
      title: "Collaboration",
      description: "Je privilégie le travail d\'équipe et la communication transparente avec tous les stakeholders."
    },
    {
      icon: "Zap",
      title: "Performance",
      description: "J\'optimise chaque application pour offrir une expérience utilisateur fluide et rapide."
    },
    {
      icon: "Shield",
      title: "Sécurité",
      description: "La sécurité est au cœur de mes développements, de l'authentification au déploiement."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            À Propos de Moi
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Découvrez mon parcours, ma philosophie de développement et les valeurs qui guident mon travail
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-slate-900">Mon Parcours</h3>
              <p className="text-slate-600 leading-relaxed">
                Diplômé d'une école d'ingénieur en informatique, j'ai débuté ma carrière en tant que développeur frontend 
                avant d'évoluer vers le développement fullstack. Mes 5 années d'expérience m'ont permis de maîtriser l'ensemble de la chaîne de développement web moderne.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Passionné par les nouvelles technologies, je me forme continuellement aux dernières innovations 
                du secteur. J'ai eu l'opportunité de travailler sur des projets variés, des startups aux grandes 
                entreprises, ce qui m'a donné une vision complète des enjeux du développement web.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-slate-900">Ma Philosophie</h3>
              <p className="text-slate-600 leading-relaxed">
                Je crois fermement que la technologie doit servir l'humain. Chaque ligne de code que j'écris 
                a pour objectif d'améliorer l'expérience utilisateur tout en respectant les bonnes pratiques de développement. L'innovation technique n'a de sens que si elle apporte une réelle valeur ajoutée.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={value.icon} size={24} color="#3b82f6" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
            <div className="text-slate-600">Années d'expérience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-slate-600">Projets réalisés</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-slate-600">Technologies maîtrisées</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-slate-600">Clients satisfaits</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;