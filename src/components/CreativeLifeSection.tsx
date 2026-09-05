/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { TitreAnime } from './motion/Primitives';
import { Theater, Music, Film, Crown, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface CreativeLifeSectionProps {
  onOpenAdmissions: () => void;
}

export const CreativeLifeSection: React.FC<CreativeLifeSectionProps> = ({
  onOpenAdmissions,
}) => {
  const activities = [
    {
      id: 'theatre',
      title: 'Théâtre & Expression',
      subtitle: 'Prendre confiance et s’exprimer avec aisance',
      desc: 'Diction, prise de parole en public, gestuelle et confiance en soi dès la maternelle.',
      icon: Theater,
      color: 'bg-[#feeddb]',
      textColor: 'text-[#084274]',
      badgeColor: 'bg-[#084274]/10 text-[#084274]',
      img: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&w=800&q=80',
      span: 'md:col-span-2 md:row-span-1',
    },
    {
      id: 'echecs',
      title: 'Club d’Échecs',
      subtitle: 'Stratégie & Raisonnement',
      desc: 'Développement de la logique, concentration, anticipation et fair-play.',
      icon: Crown,
      color: 'bg-[#084274]',
      textColor: 'text-white',
      badgeColor: 'bg-white/20 text-[#feeddb]',
      img: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=800&q=80',
      span: 'md:col-span-1 md:row-span-2',
    },
    {
      id: 'musique',
      title: 'Musique & Chorale',
      subtitle: 'Rythme & Harmonie',
      desc: 'Éveil auditif, chant choral, découverte des instruments et du tempo.',
      icon: Music,
      color: 'bg-[#e3a044]',
      textColor: 'text-[#084274]',
      badgeColor: 'bg-[#084274]/15 text-[#084274]',
      img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
      span: 'md:col-span-1 md:row-span-1',
    },
    {
      id: 'cinema',
      title: 'Cinéma & Débat',
      subtitle: 'Culture & Regard Critique',
      desc: 'Projection d’œuvres sélectionnées et débats guidés pour stimuler l’esprit critique.',
      icon: Film,
      color: 'bg-[#e6ccb2]',
      textColor: 'text-[#084274]',
      badgeColor: 'bg-[#084274]/10 text-[#084274]',
      img: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
      span: 'md:col-span-1 md:row-span-1',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="giggle-tag mb-6">
            <div className="giggle-dot" />
            <span className="uppercase tracking-wider text-[11px] sm:text-[13px]">VIE CRÉATIVE & CULTURELLE</span>
          </div>
          <TitreAnime as="h2" texte="Cultiver les Talents & l'Imaginaire" className="font-heading text-4xl sm:text-5xl lg:text-[50px] text-[#084274] tracking-tight mb-6 leading-tight" />
          <p className="font-body text-base sm:text-lg text-[#084274]/80 leading-relaxed max-w-4xl mx-auto">
            L'excellence académique se marie à l'épanouissement personnel. Nos ateliers créatifs intégrés au cursus sont conçus pour révéler les sensibilités artistiques et intellectuelles de chaque élève.
          </p>
        </motion.div>

        {/* Wow Factor Bento Layout with Touch & Desktop Support */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-5 h-auto md:h-[620px] mb-12">
          {activities.map((act, idx) => {
            const Icon = act.icon;
            return (
              <motion.div 
                key={act.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative group overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border-2 border-[#084274]/15 ${act.span} ${act.color}`}
              >
                {/* Background Image with Dynamic Overlay */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10 opacity-60 sm:opacity-0 sm:group-hover:opacity-80 transition-opacity duration-500" />
                  <img 
                    src={act.img} 
                    alt={act.title}
                    className="w-full h-full object-cover mix-blend-multiply sm:mix-blend-overlay opacity-50 sm:opacity-25 sm:group-hover:opacity-100 sm:group-hover:scale-110 transition-all duration-700 ease-out"
                  />
                </div>
                
                {/* Content Overlay */}
                <div className="relative z-20 h-full p-7 sm:p-9 flex flex-col justify-between">
                  <div>
                    {/* Top Row: Icon & Subtitle Tag */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className={`w-12 h-12 flex items-center justify-center rounded-none shadow-xs ${
                        act.textColor === 'text-white' 
                          ? 'bg-white/20 backdrop-blur-sm text-white' 
                          : 'bg-[#084274] text-[#feeddb]'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>

                      <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 ${act.badgeColor}`}>
                        {act.subtitle}
                      </span>
                    </div>

                    <h3 className={`font-heading text-2xl sm:text-3xl lg:text-4xl mb-3 sm:group-hover:text-white transition-colors duration-300 ${act.textColor}`}>
                      {act.title}
                    </h3>

                    <p className={`font-body text-sm sm:text-base leading-relaxed ${
                      act.textColor === 'text-white' ? 'text-white/90' : 'text-[#084274] sm:text-[#084274]/80 sm:group-hover:text-white/90'
                    } transition-all duration-500`}>
                      {act.desc}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-current/10 mt-6">
                    <span className="text-xs font-bold uppercase tracking-wider opacity-80 sm:opacity-0 sm:group-hover:opacity-100 sm:group-hover:text-white transition-opacity">
                      Atelier Intégré
                    </span>
                    <button 
                      onClick={onOpenAdmissions}
                      className={`w-10 h-10 flex items-center justify-center ${
                        act.textColor === 'text-white' ? 'bg-[#feeddb] text-[#084274]' : 'bg-[#084274] text-white'
                      } hover:scale-110 transition-transform cursor-pointer shadow-sm`}
                      aria-label={`En savoir plus sur ${act.title}`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <button 
            onClick={onOpenAdmissions}
            className="giggle-button-primary shadow-xl hover:shadow-2xl cursor-pointer flex items-center gap-3 px-8 py-4 text-[15px]"
          >
            <Sparkles className="w-4 h-4 text-[#e3a044]" />
            <span>Découvrir Toutes Nos Activités & Ateliers</span>
          </button>
        </div>
      </div>
    </section>
  );
};
