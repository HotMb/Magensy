'use client';

import { Heart, Target, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'Nous aimons ce que nous faisons et cela se ressent dans chaque projet que nous réalisons.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous visons toujours la perfection et ne nous contentons jamais du minimum.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Votre succès est notre succès. Nous travaillons main dans la main avec nos clients.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Nous restons à la pointe des technologies pour offrir des solutions modernes.'
    }
  ];

  return (
    <section id="apropos" className="section-padding bg-slate-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            À Propos de Magensy
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Depuis 2019, nos développeur accompagne les entreprises dans leur transformation digitale. 
            Notre mission est simple : créer des expériences web exceptionnelles qui génèrent des résultats concrets.
          </p>
        </div>

          {/* Story Content */}
          <div className="animate-slide-up">
            <h3 className="text-center text-4xl md:text-5xl font-bold text-slate-900 mb-6">Notre Histoire</h3>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Magensy est née de la passion de créer des solutions digitales qui font vraiment la différence. 
                Fondée par une équipe d'experts du web, notre agence s'est rapidement imposée comme un partenaire 
                de confiance pour les entreprises souhaitant exceller en ligne.
              </p>
              <p>
                Aujourd'hui, nous sommes fiers d'accompagner plus de 200 clients dans leurs projets digitaux, 
                des startups innovantes aux entreprises établies. Notre approche personnalisée et notre 
                expertise technique nous permettent de livrer des projets qui dépassent les attentes.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500 mb-2">200+</div>
                <div className="text-slate-600">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500 mb-2">+5 ans</div>
                <div className="text-slate-600">D'expertise</div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default About;