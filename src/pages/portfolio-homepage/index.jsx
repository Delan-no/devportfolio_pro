import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import QuickLinksSection from './components/QuickLinksSection';

const PortfolioHomepage = () => {
  useEffect(() => {
    document.title = 'Délanno KOTCHO - Développeur Fullstack Senior | DelkPortfolio';
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Portfolio professionnel d\'Délanno KOTCHO, développeur fullstack senior avec 5 ans d\'expérience en React, Node.js et technologies cloud. Découvrez mes projets et compétences.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Breadcrumb />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <QuickLinksSection />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Délanno KOTCHO</h3>
              <p className="text-slate-400 leading-relaxed">
                Développeur fullstack passionné, créateur de solutions web innovantes 
                et performantes pour transformer vos idées en réalité digitale.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#about" className="hover:text-white transition-colors">À propos</a></li>
                <li><a href="#skills" className="hover:text-white transition-colors">Compétences</a></li>
                <li><a href="/projects-gallery" className="hover:text-white transition-colors">Projets</a></li>
                <li><a href="/contact-form" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-slate-400">
                <p>📧 delanktc24@gmail.com</p>
                <p>📱 +229 0167514101</p>
                <p>📍 Cotonou, Cotonou</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} Délanno KOTCHO. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioHomepage;