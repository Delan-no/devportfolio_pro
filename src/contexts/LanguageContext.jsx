import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Récupérer la langue depuis localStorage ou détecter la langue du navigateur
    const savedLanguage = localStorage.getItem('portfolio-language');
    if (savedLanguage) {
      return savedLanguage;
    }
    
    // Détecter la langue du navigateur
    const browserLanguage = navigator.language || navigator.languages[0];
    const supportedLanguages = ['fr', 'en'];
    
    // Si la langue du navigateur est supportée, l'utiliser
    if (supportedLanguages.includes(browserLanguage)) {
      return browserLanguage;
    }
    
    // Sinon, utiliser la langue principale du navigateur (fr, en, etc.)
    const primaryLanguage = browserLanguage.split('-')[0];
    if (supportedLanguages.includes(primaryLanguage)) {
      return primaryLanguage;
    }
    
    // Par défaut, utiliser le français
    return 'fr';
  });

  const [translations, setTranslations] = useState({});

  // Charger les traductions selon la langue
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const translationModule = await import(`../locales/${language}.json`);
        setTranslations(translationModule.default);
      } catch (error) {
        console.error(`Erreur lors du chargement des traductions pour ${language}:`, error);
        // Fallback vers le français si la langue demandée n'existe pas
        if (language !== 'fr') {
          const fallbackModule = await import('../locales/fr.json');
          setTranslations(fallbackModule.default);
        }
      }
    };

    loadTranslations();
  }, [language]);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('portfolio-language', newLanguage);
  };

  const t = (key, params = {}) => {
    let translation = translations;
    
    // Naviguer dans l'objet de traduction avec la clé
    const keys = key.split('.');
    for (const k of keys) {
      if (translation && typeof translation === 'object' && k in translation) {
        translation = translation[k];
      } else {
        console.warn(`Clé de traduction manquante: ${key}`);
        return key; // Retourner la clé si la traduction n'existe pas
      }
    }

    // Si c'est une chaîne, remplacer les paramètres
    if (typeof translation === 'string') {
      return translation.replace(/\{\{(\w+)\}\}/g, (match, param) => {
        return params[param] || match;
      });
    }

    return translation || key;
  };

  const value = {
    language,
    translations,
    changeLanguage,
    t,
    isFrench: language === 'fr',
    isEnglish: language === 'en'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

