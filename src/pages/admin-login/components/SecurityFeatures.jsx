import React from 'react';
import Icon from '../../../components/AppIcon';

const SecurityFeatures = () => {
  const securityFeatures = [
    {
      icon: 'Shield',
      title: 'Authentification JWT',
      description: 'Tokens sécurisés avec expiration automatique'
    },
    {
      icon: 'Lock',
      title: 'Chiffrement HTTPS',
      description: 'Toutes les communications sont chiffrées'
    },
    {
      icon: 'AlertTriangle',
      title: 'Protection Brute Force',
      description: 'Limitation des tentatives de connexion'
    },
    {
      icon: 'Eye',
      title: 'Surveillance Active',
      description: 'Monitoring des accès et activités'
    }
  ];

  return (
    <div className="bg-card rounded-lg shadow-soft border border-border p-6">
      <h2 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
        <Icon name="ShieldCheck" size={20} className="mr-2 text-success" />
        Sécurité Renforcée
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {securityFeatures.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name={feature.icon} size={16} className="text-primary" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-text-primary mb-1">
                {feature.title}
              </h3>
              <p className="text-xs text-text-secondary">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Security Status */}
      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-sm text-text-secondary">Système Sécurisé</span>
          </div>
          <div className="text-xs text-text-secondary">
            Dernière mise à jour: {new Date().toLocaleDateString('fr-FR')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityFeatures;