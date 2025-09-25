import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';
import { useLanguage } from '../../../contexts/LanguageContext';

const LoginForm = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  // Mock credentials for authentication
  const mockCredentials = {
    email: 'delanktc24@gmail.com',
    password: 'Delanno67'
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = t('admin.login.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('admin.login.emailInvalid');
    }

    if (!formData.password.trim()) {
      newErrors.password = t('admin.login.passwordRequired');
    } else if (formData.password.length < 8) {
      newErrors.password = t('admin.login.passwordMinLength');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear specific error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLocked) {
      setErrors({ general: t('admin.login.accountLocked') });
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setErrors({});

    // Simulate API call delay
    setTimeout(() => {
      if (formData.email === mockCredentials.email && formData.password === mockCredentials.password) {
        // Successful login
        localStorage.setItem('adminToken', 'mock-jwt-token-' + Date.now());
        localStorage.setItem('adminUser', JSON.stringify({
          email: formData.email,
          name: 'Administrateur',
          loginTime: new Date().toISOString()
        }));
        
        setIsLoading(false);
        navigate('/admin-dashboard');
      } else {
        // Failed login
        const newAttempts = loginAttempts + 1;
        setLoginAttempts(newAttempts);
        
        if (newAttempts >= 5) {
          setIsLocked(true);
          setErrors({ 
            general: t('admin.login.tooManyAttempts')
          });
          
          // Auto unlock after 15 minutes (for demo purposes, using 30 seconds)
          setTimeout(() => {
            setIsLocked(false);
            setLoginAttempts(0);
          }, 30000);
        } else {
          setErrors({ 
            general: t('admin.login.incorrectCredentials', { remaining: 5 - newAttempts })
          });
        }
        
        setIsLoading(false);
      }
    }, 1500);
  };

  const handleForgotPassword = () => {
    alert('Fonctionnalité de récupération de mot de passe à implémenter');
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-card rounded-lg shadow-elevated p-8 border border-border">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Shield" size={32} color="white" />
          </div>
          <h1 className="text-2xl font-semibold text-text-primary mb-2">
            {t('admin.login.title')}
          </h1>
          <p className="text-text-secondary">
            {t('admin.login.subtitle')}
          </p>
        </div>

        {/* Security Notice */}
        <div className="bg-warning/10 border border-warning/20 rounded-lg p-4 mb-6">
          <div className="flex items-start space-x-3">
            <Icon name="AlertTriangle" size={20} className="text-warning mt-0.5" />
            <div className="text-sm">
              <p className="font-medium text-warning mb-1">{t('admin.login.secureZone')}</p>
              <p className="text-text-secondary">
                {t('admin.login.adminOnly')}
              </p>
            </div>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* General Error */}
          {errors.general && (
            <div className="bg-error/10 border border-error/20 rounded-lg p-4">
              <div className="flex items-center space-x-2">
                <Icon name="AlertCircle" size={16} className="text-error" />
                <p className="text-sm text-error font-medium">{errors.general}</p>
              </div>
            </div>
          )}

          {/* Email Field */}
          <Input
            label={t('admin.login.email')}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder={t('admin.login.emailPlaceholder')}
            error={errors.email}
            required
            disabled={isLoading || isLocked}
          />

          {/* Password Field */}
          <Input
            label={t('admin.login.password')}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder={t('admin.login.passwordPlaceholder')}
            error={errors.password}
            required
            disabled={isLoading || isLocked}
          />

          {/* Login Attempts Warning */}
          {loginAttempts > 0 && loginAttempts < 5 && (
            <div className="bg-warning/10 border border-warning/20 rounded-lg p-3">
              <p className="text-sm text-warning">
                <Icon name="AlertTriangle" size={14} className="inline mr-1" />
                {loginAttempts} tentative(s) échouée(s). {5 - loginAttempts} restante(s).
              </p>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            variant="default"
            size="lg"
            fullWidth
            loading={isLoading}
            disabled={isLocked}
            iconName="LogIn"
            iconPosition="left"
          >
            {isLoading ? t('admin.login.loggingIn') : t('admin.login.login')}
          </Button>

          {/* Forgot Password */}
          <div className="text-center">
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-sm text-accent hover:text-accent/80 transition-smooth"
              disabled={isLoading}
            >
              {t('admin.login.forgotPassword')}
            </button>
          </div>
        </form>

        {/* Demo Credentials Info */}
        <div className="mt-8 pt-6 border-t border-border">
          <div className="bg-muted rounded-lg p-4">
            <h3 className="text-sm font-medium text-text-primary mb-2 flex items-center">
              <Icon name="Info" size={16} className="mr-2" />
              {t('admin.login.demoCredentials')}
            </h3>
            <div className="space-y-1 text-xs text-text-secondary">
              <p><strong>Email:</strong> delanktc24@gmail.com</p>
              <p><strong>Mot de passe:</strong> Delanno67</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;