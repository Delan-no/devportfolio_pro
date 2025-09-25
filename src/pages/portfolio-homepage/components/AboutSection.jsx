import React from 'react';
import Icon from '../../../components/AppIcon';
import { useLanguage } from '../../../contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();
  
  const values = [
    {
      icon: "Code2",
      title: t('about.values.cleanCode.title'),
      description: t('about.values.cleanCode.description')
    },
    {
      icon: "Users",
      title: t('about.values.collaboration.title'),
      description: t('about.values.collaboration.description')
    },
    {
      icon: "Zap",
      title: t('about.values.performance.title'),
      description: t('about.values.performance.description')
    },
    {
      icon: "Shield",
      title: t('about.values.security.title'),
      description: t('about.values.security.description')
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t('about.title')}
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-slate-900">{t('about.myJourney')}</h3>
              <p className="text-slate-600 leading-relaxed">
                {t('about.journeyDescription1')}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {t('about.journeyDescription2')}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-slate-900">{t('about.myPhilosophy')}</h3>
              <p className="text-slate-600 leading-relaxed">
                {t('about.philosophyDescription')}
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
            <div className="text-slate-600">{t('about.stats.experience')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-slate-600">{t('about.stats.projects')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-slate-600">{t('about.stats.technologies')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-slate-600">{t('about.stats.satisfiedClients')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;