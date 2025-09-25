import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import { useLanguage } from '../../../contexts/LanguageContext';

const ContactForm = () => {
  const { t } = useLanguage();
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
      newErrors.name = t('contact.form.nameRequired');
    } else if (formData.name.trim().length < 2) {
      newErrors.name = t('contact.form.nameMinLength');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contact.form.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contact.form.emailInvalid');
    }

    if (!formData.subject.trim()) {
      newErrors.subject = t('contact.form.subjectRequired');
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = t('contact.form.subjectMinLength');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contact.form.messageRequired');
    } else if (formData.message.trim().length < 20) {
      newErrors.message = t('contact.form.messageMinLength');
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = t('contact.form.messageMaxLength');
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
        submit: t('contact.form.submitError')
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
            {t('contact.form.success')}
          </h3>
          <p className="text-text-secondary mb-6">
            {t('contact.form.successMessage')}
          </p>
          <Button
            variant="outline"
            onClick={() => setIsSubmitted(false)}
            iconName="ArrowLeft"
            iconPosition="left"
          >
            {t('contact.form.sendAnother')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl p-8 border border-border">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-primary mb-2">
          {t('contact.title')}
        </h2>
        <p className="text-text-secondary">
          {t('contact.subtitle')}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label={t('contact.form.name')}
            type="text"
            name="name"
            placeholder={t('contact.form.namePlaceholder')}
            value={formData.name}
            onChange={handleInputChange}
            error={errors.name}
            required
          />
          
          <Input
            label={t('contact.form.email')}
            type="email"
            name="email"
            placeholder={t('contact.form.emailPlaceholder')}
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
            required
          />
        </div>

        <Input
          label={t('contact.form.subject')}
          type="text"
          name="subject"
          placeholder={t('contact.form.subjectPlaceholder')}
          value={formData.subject}
          onChange={handleInputChange}
          error={errors.subject}
          required
        />

        <div>
          <label className="block text-sm font-medium text-primary mb-2">
            {t('contact.form.message')} <span className="text-error">*</span>
          </label>
          <textarea
            name="message"
            rows={6}
            placeholder={t('contact.form.messagePlaceholder')}
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
            {formData.message.length}/1000 {t('contact.form.charactersCount')}
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
          {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
        </Button>
      </form>

      <div className="mt-6 p-4 bg-muted rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={16} className="text-accent flex-shrink-0 mt-0.5" />
          <div className="text-sm text-text-secondary">
            <p className="mb-1">
              <strong>{t('contact.form.responseTime')}</strong> {t('contact.form.responseTimeValue')}
            </p>
            <p>
              <strong>{t('contact.form.projectTypes')}</strong> {t('contact.form.projectTypesValue')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;