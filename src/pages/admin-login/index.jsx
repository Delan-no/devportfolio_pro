import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import LoginForm from './components/LoginForm';
import SecurityFeatures from './components/SecurityFeatures';
import LoginStats from './components/LoginStats';
import Icon from '../../components/AppIcon';

const AdminLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const adminToken = localStorage.getItem('adminToken');
    if (adminToken) {
      navigate('/admin-dashboard');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        <Breadcrumb />
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="ShieldCheck" size={40} color="white" />
          </div>
          <h1 className="text-4xl font-bold text-text-primary mb-4">
            Administration Sécurisée
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Accédez au panneau d'administration pour gérer le contenu de votre portfolio professionnel avec des mesures de sécurité avancées.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Login Form - Main Content */}
          <div className="lg:col-span-2">
            <LoginForm />
          </div>

          {/* Sidebar - Security Info */}
          <div className="space-y-6">
            <SecurityFeatures />
            <LoginStats />
            
            {/* Help Section */}
            <div className="bg-card rounded-lg shadow-soft border border-border p-6">
              <h2 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
                <Icon name="HelpCircle" size={20} className="mr-2 text-accent" />
                Besoin d'Aide ?
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Mail" size={16} className="text-text-secondary mt-1" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">Support Technique</p>
                    <p className="text-xs text-text-secondary">support@devportfolio.fr</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="Phone" size={16} className="text-text-secondary mt-1" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">Assistance Urgente</p>
                    <p className="text-xs text-text-secondary">+229 0167514101</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="Clock" size={16} className="text-text-secondary mt-1" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">Disponibilité</p>
                    <p className="text-xs text-text-secondary">Lun-Sam 9h-18h CET</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Notice Footer */}
        <div className="mt-12 bg-muted/50 rounded-lg p-6 border border-border">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Icon name="AlertTriangle" size={24} className="text-warning" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                Avertissement de Sécurité
              </h3>
              <p className="text-text-secondary mb-4">
                Cette zone est réservée aux administrateurs autorisés. Toutes les activités sont surveillées et enregistrées. 
                L'accès non autorisé est strictement interdit et peut entraîner des poursuites légales.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={14} />
                  <span>Chiffrement SSL/TLS</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Eye" size={14} />
                  <span>Surveillance 24/7</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Lock" size={14} />
                  <span>Authentification Multi-Facteurs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Database" size={14} />
                  <span>Sauvegarde Automatique</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminLogin;