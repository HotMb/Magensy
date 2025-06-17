'use client';

import { Monitor, ShoppingCart, Search, Share2, Settings, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Sites Web Vitrine',
      description: 'Des sites élégants et performants qui reflètent parfaitement votre identité de marque.',
      features: ['Design sur mesure', 'Responsive design', 'Optimisation SEO', 'Performance optimale']
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Boutiques en ligne complètes avec une expérience d\'achat fluide et sécurisée.',
      features: ['Catalogue produits', 'Paiement sécurisé', 'Gestion commandes', 'Analytics intégrées']
    },
    {
      icon: Search,
      title: 'Référencement SEO',
      description: 'Boostez votre visibilité sur Google et attirez plus de clients qualifiés.',
      features: ['Audit SEO complet', 'Stratégie de contenu', 'Optimisation technique', 'Suivi performance']
    },
    {
      icon: Share2,
      title: 'Réseaux Sociaux',
      description: 'Développez votre présence sociale avec une stratégie de contenu engageante.',
      features: ['Stratégie sociale', 'Création de contenu', 'Community management', 'Publicités ciblées']
    },
    {
      icon: Settings,
      title: 'Maintenance',
      description: 'Gardez votre site performant et sécurisé avec notre service de maintenance.',
      features: ['Mises à jour régulières', 'Sauvegardes automatiques', 'Monitoring 24/7', 'Support technique']
    },
    {
      icon: Zap,
      title: 'Consulting Digital',
      description: 'Conseils stratégiques pour optimiser votre transformation digitale.',
      features: ['Audit digital', 'Stratégie personnalisée', 'Formation équipes', 'Accompagnement continu']
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-6">
            Nos <span className="font-bold text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Des solutions digitales complètes pour propulser votre entreprise vers de nouveaux sommets.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="service-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed font-light">{service.description}</p>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 font-light">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 animate-fade-in">
          <div className="bg-white p-12 rounded-3xl shadow-xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-light text-gray-900 mb-4">
              Prêt à <span className="font-bold text-gradient">transformer</span> votre présence digitale ?
            </h3>
            <p className="text-gray-600 mb-8 font-light">
              Discutons de votre projet et découvrons ensemble comment nous pouvons vous aider.
            </p>
            <a href="#contact" className="btn-primary">
              Commencer maintenant
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;