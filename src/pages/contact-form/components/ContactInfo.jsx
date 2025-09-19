import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: 'Mail',
      label: 'Email',
      value: 'delanktc24@gmail.com',
      href: 'mailto:delanktc24@gmail.com'
    },
    {
      icon: 'Phone',
      label: 'Téléphone',
      value: '+229 0167514101',
      href: 'tel:+33123456789'
    },
    {
      icon: 'MapPin',
      label: 'Localisation',
      value: 'Cotonou, Cotonou',
      href: null
    },
    {
      icon: 'Clock',
      label: 'Disponibilité',
      value: 'Lun - Sam, 9h - 18h',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: 'Linkedin',
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/devportfolio',
      color: 'text-blue-600'
    },
    {
      icon: 'Github',
      label: 'GitHub',
      href: 'https://github.com/devportfolio',
      color: 'text-gray-800'
    },
    {
      icon: 'Twitter',
      label: 'X (Twitter)',
      href: 'https://x.com/devportfolio',
      color: 'text-gray-900'
    }
  ];

  return (
    <div className="bg-card rounded-xl p-8 border border-border h-fit">
      <h3 className="text-xl font-semibold text-primary mb-6">
        Informations de contact
      </h3>
      
      <div className="space-y-6">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name={detail.icon} size={20} className="text-accent" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-text-secondary mb-1">
                {detail.label}
              </p>
              {detail.href ? (
                <a
                  href={detail.href}
                  className="text-primary hover:text-accent transition-smooth"
                >
                  {detail.value}
                </a>
              ) : (
                <p className="text-primary">{detail.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-border">
        <h4 className="text-lg font-medium text-primary mb-4">
          Suivez-moi
        </h4>
        <div className="flex space-x-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-smooth ${social.color}`}
              aria-label={social.label}
            >
              <Icon name={social.icon} size={20} />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-8 p-4 bg-success/10 rounded-lg border border-success/20">
        <div className="flex items-start space-x-3">
          <Icon name="CheckCircle" size={20} className="text-success flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-success mb-1">
              Disponible pour de nouveaux projets
            </p>
            <p className="text-xs text-text-secondary">
              Réponse garantie sous 24h
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;