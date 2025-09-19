import React from 'react';
import Icon from '../../../components/AppIcon';

const LoginStats = () => {
  const stats = [
    {
      icon: 'Users',
      label: 'Sessions Actives',
      value: '1',
      color: 'text-success'
    },
    {
      icon: 'Clock',
      label: 'Dernière Connexion',
      value: '2 heures',
      color: 'text-accent'
    },
    {
      icon: 'Shield',
      label: 'Tentatives Bloquées',
      value: '0',
      color: 'text-warning'
    },
    {
      icon: 'Activity',
      label: 'Uptime Système',
      value: '99.9%',
      color: 'text-success'
    }
  ];

  return (
    <div className="bg-card rounded-lg shadow-soft border border-border p-6">
      <h2 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
        <Icon name="BarChart3" size={20} className="mr-2 text-accent" />
        Statistiques de Sécurité
      </h2>
      
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center p-4 bg-muted/30 rounded-lg">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
              <Icon name={stat.icon} size={18} className="text-primary" />
            </div>
            <div className={`text-xl font-semibold ${stat.color} mb-1`}>
              {stat.value}
            </div>
            <div className="text-xs text-text-secondary">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* System Status */}
      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-success rounded-full"></div>
            <span className="text-text-secondary">Tous les systèmes opérationnels</span>
          </div>
          <span className="text-text-secondary">
            {new Date().toLocaleTimeString('fr-FR', { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginStats;