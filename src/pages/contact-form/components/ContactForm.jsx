import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Le nom doit contenir au moins 2 caractères';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Le sujet est requis';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Le sujet doit contenir au moins 5 caractères';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Le message doit contenir au moins 20 caractères';
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = 'Le message ne peut pas dépasser 1000 caractères';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setErrors({
        submit: 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-card rounded-xl p-8 border border-border">
        <div className="text-center">
          <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="CheckCircle" size={32} className="text-success" />
          </div>
          <h3 className="text-xl font-semibold text-primary mb-2">
            Message envoyé avec succès !
          </h3>
          <p className="text-text-secondary mb-6">
            Merci pour votre message. Je vous répondrai dans les plus brefs délais, généralement sous 24h.
          </p>
          <Button
            variant="outline"
            onClick={() => setIsSubmitted(false)}
            iconName="ArrowLeft"
            iconPosition="left"
          >
            Envoyer un autre message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl p-8 border border-border">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-primary mb-2">
          Contactez-moi
        </h2>
        <p className="text-text-secondary">
          Vous avez un projet en tête ? N'hésitez pas à me contacter pour discuter de vos besoins.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Nom complet"
            type="text"
            name="name"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleInputChange}
            error={errors.name}
            required
          />
          
          <Input
            label="Adresse email"
            type="email"
            name="email"
            placeholder="votre.email@exemple.com"
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
            required
          />
        </div>

        <Input
          label="Sujet"
          type="text"
          name="subject"
          placeholder="Objet de votre message"
          value={formData.subject}
          onChange={handleInputChange}
          error={errors.subject}
          required
        />

        <div>
          <label className="block text-sm font-medium text-primary mb-2">
            Message <span className="text-error">*</span>
          </label>
          <textarea
            name="message"
            rows={6}
            placeholder="Décrivez votre projet ou votre demande..."
            value={formData.message}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border rounded-lg resize-none transition-smooth focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent ${
              errors.message 
                ? 'border-error focus:ring-error focus:border-error' :'border-border'
            }`}
            required
          />
          {errors.message && (
            <p className="mt-1 text-sm text-error">{errors.message}</p>
          )}
          <p className="mt-1 text-xs text-text-secondary">
            {formData.message.length}/1000 caractères
          </p>
        </div>

        {errors.submit && (
          <div className="p-4 bg-error/10 border border-error/20 rounded-lg">
            <div className="flex items-center space-x-2">
              <Icon name="AlertCircle" size={16} className="text-error" />
              <p className="text-sm text-error">{errors.submit}</p>
            </div>
          </div>
        )}

        <Button
          type="submit"
          variant="default"
          size="lg"
          fullWidth
          loading={isSubmitting}
          iconName="Send"
          iconPosition="right"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
        </Button>
      </form>

      <div className="mt-6 p-4 bg-muted rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={16} className="text-accent flex-shrink-0 mt-0.5" />
          <div className="text-sm text-text-secondary">
            <p className="mb-1">
              <strong>Temps de réponse :</strong> Généralement sous 24h
            </p>
            <p>
              <strong>Types de projets :</strong> Développement web, applications React, APIs, consulting technique
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;