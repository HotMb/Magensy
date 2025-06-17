'use client';

import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Sites Web Vitrine',
    'E-commerce',
    'Référencement SEO',
    'Réseaux Sociaux',
    'Maintenance',
    'Consulting Digital'
  ];

  const quickLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Services', href: '#services' },
    { name: 'Réalisations', href: '#realisations' },
    { name: 'À propos', href: '#apropos' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/magensy/', name: 'LinkedIn', target: '_blank', rel: 'noopener noreferrer' },
    { icon: Instagram, href: 'https://www.instagram.com/magensy.fr/', name: 'Instagram', target: '_blank', rel: 'noopener noreferrer' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
            <div className="flex items-center space-x-3">
              <span className="text-4xl logo-m text-yellow-400">M</span>
              <span className="text-xl font-light text-white transition-colors duration-300">agensy</span>
            </div>
              
              <p className="text-gray-300 mb-8 leading-relaxed font-light">
                Votre partenaire digital de confiance pour créer des expériences web exceptionnelles qui transforment vos visiteurs en clients.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110"
                    aria-label={social.name}
                    {...(social.target ? { target: social.target, rel: social.rel } : {})}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold mb-8">Nos Services</h3>
              <ul className="space-y-4">
                {services.map((service) => (
                  <li key={service}>
                    <a 
                      href="#services" 
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-light"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-8">Navigation</h3>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-light"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-8">Contact</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-300 font-light">
                    <p>53 Rue du Maréchal Lyautey</p>
                    <p>59370 Mons-En-Baroeul, France</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <a href="tel:+33613222552">
                  <span className="text-gray-300 font-light">+33 6 13 22 25 52</span>
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <a href="mailto:magensy.consulting@gmail.com?subject=Sujet&body=Message">
                    <span className="text-gray-300 font-light">magensy.consulting@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <div>
              <p className="font-light">&copy; {currentYear} Magensy. Tous droits réservés.</p>
            </div>
  
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;