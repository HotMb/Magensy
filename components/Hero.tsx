'use client';

import { ArrowRight, Play, Star, Users, Award } from 'lucide-react';

interface HeroProps {
  scrollY: number;
}

const Hero = ({ scrollY }: HeroProps) => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with modern gradient */}
      <div className="absolute inset-0 gradient-primary"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-300/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Floating particles */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div className="absolute top-20 left-20 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-yellow-300 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center text-white">
          {/* Main heading with modern typography */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight mb-8 leading-tight">
            Créons ensemble
            <span className="block font-bold text-gradient animate-slide-up" style={{ animationDelay: '0.3s' }}>
              votre succès digital
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto font-light leading-relaxed animate-slide-up" style={{ animationDelay: '0.6s' }}>
            Magensy transforme vos ambitions en réalité digitale avec des solutions web sur-mesure qui marquent les esprits et génèrent des résultats.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-scale-in" style={{ animationDelay: '0.9s' }}>
            <a href="#realisations" className="btn-primary text-lg flex items-center gap-3">
              <Play className="w-5 h-5" />
              Découvrir nos créations
            </a>
            <a href="#contact" className="btn-secondary text-lg">
              Parlons de votre projet
            </a>
          </div>

          {/* Stats with modern design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <div className="glass-effect p-6 rounded-2xl">
              <div className="flex items-center justify-center mb-3">
                <Star className="w-8 h-8 text-yellow-400 mr-3" />
                <span className="text-4xl font-light">4.9</span>
                <span className="text-gray-300 ml-1">/5</span>
              </div>
              <p className="text-gray-300 font-light">Satisfaction client</p>
            </div>
            <div className="glass-effect p-6 rounded-2xl">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-8 h-8 text-yellow-400 mr-3" />
                <span className="text-4xl font-light">200+</span>
              </div>
              <p className="text-gray-300 font-light">Projets réalisés</p>
            </div>
            <div className="glass-effect p-6 rounded-2xl">
              <div className="flex items-center justify-center mb-3">
                <Award className="w-8 h-8 text-yellow-400 mr-3" />
                <span className="text-4xl font-light">+5</span>
                <span className="text-gray-300 ml-1">ans</span>
              </div>
              <p className="text-gray-300 font-light">D'expertise</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modern scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center mb-2">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="text-white/50 text-xs font-light">Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;