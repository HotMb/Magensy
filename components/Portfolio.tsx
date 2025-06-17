'use client';

import { useState } from 'react';
import { Filter } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Restaurant Le Gourmet',
      category: 'vitrine',
      image: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Site vitrine élégant pour un restaurant gastronomique avec système de réservation intégré.',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Boutique Mode Élégance',
      category: 'ecommerce',
      image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'E-commerce complet avec catalogue produits et expérience d\'achat optimisée.',
      technologies: ['Shopify', 'JavaScript', 'CSS3']
    },
    {
      id: 3,
      title: 'Cabinet Médical Dr. Martin',
      category: 'vitrine',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Site professionnel avec prise de rendez-vous en ligne et gestion des patients.',
      technologies: ['WordPress', 'PHP', 'MySQL']
    },
    {
      id: 4,
      title: 'Agence Immobilière Premium',
      category: 'vitrine',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Plateforme immobilière avec recherche avancée et visites virtuelles.',
      technologies: ['Vue.js', 'Laravel', 'PostgreSQL']
    },
    {
      id: 5,
      title: 'Artisan Boulangerie Bio',
      category: 'ecommerce',
      image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Boutique en ligne pour produits artisanaux avec système de livraison locale.',
      technologies: ['WooCommerce', 'WordPress', 'Stripe']
    },
    {
      id: 6,
      title: 'Coach Sportif Personnel',
      category: 'vitrine',
      image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Site personnel avec blog, planning et système de coaching en ligne.',
      technologies: ['Next.js', 'Tailwind', 'Supabase']
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous les projets' },
    { id: 'vitrine', name: 'Sites Vitrine' },
    { id: 'ecommerce', name: 'E-commerce' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="realisations" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-6">
            Nos <span className="font-bold text-gradient">Réalisations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Découvrez nos créations récentes et laissez-vous inspirer par notre approche créative.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-slide-up">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-8 py-3 rounded-full font-light transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="card-modern overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed font-light">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 animate-fade-in">
          <div className="bg-gray-50 p-12 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-light text-gray-900 mb-4">
              Votre projet mérite la même <span className="font-bold text-gradient">attention</span>
            </h3>
            <p className="text-gray-600 mb-8 font-light">
              Chaque détail compte pour créer une expérience utilisateur exceptionnelle.
            </p>
            <a href="#contact" className="btn-primary">
              Démarrer votre projet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;