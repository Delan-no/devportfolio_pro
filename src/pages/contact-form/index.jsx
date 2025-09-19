import React from 'react';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import ContactHero from './components/ContactHero';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import Icon from '../../components/AppIcon';


const ContactFormPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        <Breadcrumb />
        
        <ContactHero />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
        </div>
        
        {/* Additional Information Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-card rounded-xl p-8 border border-border">
            <h3 className="text-xl font-semibold text-primary mb-6 text-center">
              Pourquoi travailler ensemble ?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Code2" size={24} className="text-accent" />
                </div>
                <h4 className="font-medium text-primary mb-2">Expertise technique</h4>
                <p className="text-sm text-text-secondary">
                  5 ans d'expérience en développement fullstack avec les dernières technologies
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={24} className="text-success" />
                </div>
                <h4 className="font-medium text-primary mb-2">Approche collaborative</h4>
                <p className="text-sm text-text-secondary">
                  Communication transparente et implication dans chaque étape du projet
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Rocket" size={24} className="text-warning" />
                </div>
                <h4 className="font-medium text-primary mb-2">Livraison rapide</h4>
                <p className="text-sm text-text-secondary">
                  Méthodologie agile pour des résultats concrets et mesurables
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-text-secondary">
              © {new Date().getFullYear()} DelkPortfolio. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactFormPage;