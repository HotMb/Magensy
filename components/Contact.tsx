'use client';

import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import Script from 'next/script';
import 'leaflet/dist/leaflet.css';
import emailjs from '@emailjs/browser';

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  service?: string;
  message?: string;
}

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isEmailJSInitialized, setIsEmailJSInitialized] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  // Initialisation de EmailJS
  useEffect(() => {
    const initEmailJS = () => {
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      
      if (!publicKey) {
        console.error('EmailJS public key is not defined');
        return false;
      }

      try {
        emailjs.init(publicKey);
        console.log('EmailJS initialisé avec succès');
        return true;
      } catch (error) {
        console.error('Erreur lors de l\'initialisation de EmailJS:', error);
        return false;
      }
    };

    const initialized = initEmailJS();
    setIsEmailJSInitialized(initialized);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    if (!isEmailJSInitialized) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Configuration EmailJS manquante. Veuillez réessayer plus tard.'
      });
      return;
    }

    setStatus({ loading: true, success: false, error: false, message: '' });

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing');
      }

      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current!,
        publicKey
      );

      setStatus({
        loading: false,
        success: true,
        error: false,
        message: 'Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.'
      });

      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Erreur d\'envoi:', error);
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Une erreur est survenue. Veuillez réessayer.'
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Le nom doit contenir au moins 2 caractères';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'L\'email est requis';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide';
    }

    if (!formData.service) {
      newErrors.service = 'Veuillez sélectionner un service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'magensy.consulting@gmail.com'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+33 6 13 22 25 52'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      value: '53 Rue de Maréshal lyautey\n59370 Mons-En-Baroeul, France'
    },
    {
      icon: Clock,
      title: 'Horaires',
      value: 'Lun-Ven: 9h-18h\nSamedi: 9h-12h'
    }
  ];

  const services = [
    'Site Web Vitrine',
    'E-commerce',
    'Référencement SEO',
    'Réseaux Sociaux',
    'Maintenance',
    'Consulting Digital',
    'Autre'
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-6">
            Parlons de votre <span className="font-bold text-gradient">projet</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Prêt à transformer votre vision en réalité digitale ? Contactez-nous pour discuter de vos besoins.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="card-modern p-10">
              <h3 className="text-3xl font-light text-gray-900 mb-8">Envoyez-nous un message</h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="from_name" value={formData.name} />
                <input type="hidden" name="from_email" value={formData.email} />
                <input type="hidden" name="company" value={formData.company} />
                <input type="hidden" name="service" value={formData.service} />
                <input type="hidden" name="message" value={formData.message} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-light text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-4 rounded-xl border ${
                        errors.name ? 'border-red-500' : 'border-gray-200'
                      } focus:ring-2 focus:border-transparent transition-all duration-300 font-light`}
                      style={{ outlineColor: '#DFB628' }}
                      placeholder="Votre nom"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-light text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-4 rounded-xl border ${
                        errors.email ? 'border-red-500' : 'border-gray-200'
                      } focus:ring-2 focus:border-transparent transition-all duration-300 font-light`}
                      style={{ outlineColor: '#DFB628' }}
                      placeholder="votre@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-light text-gray-700 mb-2">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:border-transparent transition-all duration-300 font-light"
                      style={{ outlineColor: '#DFB628' }}
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-light text-gray-700 mb-2">
                      Service souhaité *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full px-4 py-4 rounded-xl border ${
                        errors.service ? 'border-red-500' : 'border-gray-200'
                      } focus:ring-2 focus:border-transparent transition-all duration-300 font-light`}
                      style={{ outlineColor: '#DFB628' }}
                    >
                      <option value="">Sélectionner un service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-sm text-red-500">{errors.service}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-light text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`w-full px-4 py-4 rounded-xl border ${
                      errors.message ? 'border-red-500' : 'border-gray-200'
                    } focus:ring-2 focus:border-transparent transition-all duration-300 resize-none font-light`}
                    style={{ outlineColor: '#DFB628' }}
                    placeholder="Décrivez votre projet en détail..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                {status.message && (
                  <div className={`p-4 rounded-xl ${
                    status.success ? 'bg-green-50 text-green-700 border border-green-200' : 
                    status.error ? 'bg-red-50 text-red-700 border border-red-200' : 
                    'bg-blue-50 text-blue-700 border border-blue-200'
                  }`}>
                    <p className="font-medium">{status.message}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status.loading}
                  className={`w-full btn-primary text-lg py-4 ${
                    status.loading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {status.loading ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Map */}
          <div className="animate-scale-in">
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.title}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center mb-4">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                    <p className="text-gray-600 whitespace-pre-line font-light">{info.value}</p>
                    </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-green-50 border border-green-200 p-6 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">Réponse rapide ?</h4>
                    <p className="text-gray-600 text-sm font-light">Contactez-nous sur WhatsApp</p>
                  </div>
                  <a 
                    href="https://wa.me/33613222552"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-light transition-colors duration-300"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 animate-fade-in">
          <h3 className="text-4xl font-light text-gray-900 text-center mb-16">
            Questions <span className="font-bold text-gradient">Fréquentes</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-4">Combien de temps pour créer un site ?</h4>
              <p className="text-gray-600 font-light leading-relaxed">En moyenne, comptez 2-4 semaines pour un site vitrine et 4-8 semaines pour un e-commerce, selon la complexité du projet.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-4">Proposez-vous la maintenance ?</h4>
              <p className="text-gray-600 font-light leading-relaxed">Oui, nous offrons des forfaits de maintenance incluant mises à jour, sauvegardes et support technique prioritaire.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-4">Travaillez-vous avec tous les budgets ?</h4>
              <p className="text-gray-600 font-light leading-relaxed">Nous proposons des solutions adaptées à différents budgets. Contactez-nous pour discuter de vos besoins spécifiques.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-4">Le référencement est-il inclus ?</h4>
              <p className="text-gray-600 font-light leading-relaxed">L'optimisation SEO de base est incluse dans tous nos projets. Nous proposons aussi des services SEO avancés en complément.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;