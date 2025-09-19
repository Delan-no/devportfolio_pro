import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const handleDownloadCV = () => {
    // Mock CV download functionality
    const link = document.createElement('a');
    link.href = '/assets/cv/alexandre-martin-cv.pdf';
    link.download = 'Alexandre-Martin-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 px-6 py-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Délanno KOTCHO
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 font-medium">
              Développeur Fullstack Senior
            </p>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Passionné par la création d'applications web modernes et performantes, 
              je transforme vos idées en solutions digitales innovantes avec 5 ans 
              d'expérience en développement React, Node.js et technologies cloud.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              variant="default" 
              size="lg"
              iconName="Download"
              iconPosition="left"
              onClick={handleDownloadCV}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Télécharger CV
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              iconName="Mail"
              iconPosition="left"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Me Contacter
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href="https://linkedin.com/in/alexandre-martin-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-105"
              aria-label="LinkedIn Profile"
            >
              <Icon name="Linkedin" size={20} color="#0077B5" />
            </a>
            <a
              href="https://github.com/alexandre-martin"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-105"
              aria-label="GitHub Profile"
            >
              <Icon name="Github" size={20} color="#333" />
            </a>
            <a
              href="https://x.com/alex_martin_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-105"
              aria-label="X Profile"
            >
              <Icon name="Twitter" size={20} color="#1DA1F2" />
            </a>
          </div>
        </div>

        {/* Professional Photo */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="Délanno KOTCHO - Développeur Fullstack"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-emerald-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} color="#64748b" />
      </div>
    </section>
  );
};

export default HeroSection;