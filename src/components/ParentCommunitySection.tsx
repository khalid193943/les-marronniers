/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, CheckCircle2 } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolInfo';
import { motion } from 'motion/react';

export const ParentCommunitySection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth * 0.75 : current.offsetWidth * 0.75;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const testimonials = [
    {
      name: 'Michael Johnson',
      role: 'Parent d’élève en CP',
      child: 'Élève depuis la TPS',
      quote:
        '“Notre fille rentre chaque soir enthousiaste et épanouie. L’atmosphère est à la fois studieuse, chaleureuse et d’une infinie douceur.”'
    },
    {
      name: 'David Rodriguez',
      role: 'Parent d’élève en Maternelle',
      child: 'Grande Section',
      quote:
        '“Ce qui nous a conquis dès la première visite, c’est le souci du détail et la bienveillance des maîtresses. Nos enfants s’y sentent véritablement protégés.”'
    },
    {
      name: 'Khadija El Idrissi',
      role: 'Parent d’élève en CE4',
      child: 'Élève au Primaire',
      quote:
        '“Le niveau en langues et les ateliers d’échecs et de théâtre ont donné à mon fils une assurance remarquable. C’est la meilleure école d’El Jadida.”'
    },
    {
      name: 'Emily Parker',
      role: 'Parent d’élève en CE1',
      child: 'Parcours continu',
      quote:
        '“Nous cherchions un équilibre rare entre excellence académique et cadre familial. Les Marronniers a dépassé toutes nos espérances.”'
    },
    {
      name: 'Sofia Benjelloun',
      role: 'Parent d’élève en Moyenne Section',
      child: 'Maternelle Beethoven',
      quote:
        '“Un campus lumineux, des éducatrices attentives et une communication quotidienne irréprochable avec la direction. Une communauté formidable.”'
    }
  ];

  return (
    <section id="parents" className="py-24 bg-[#fff7ef] overflow-hidden relative">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="giggle-tag mb-6">
            <div className="giggle-dot" />
            <span className="uppercase tracking-wider text-[11px] sm:text-[13px]">Paroles de Parents</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-[45px] text-[#0086d9] tracking-tight mb-6 leading-tight">
            Aimés des Enfants, Approuvés par les Familles
          </h2>
          <p className="font-body text-base sm:text-lg text-[#00558d]/80 leading-relaxed max-w-4xl mx-auto">
            Découvrez ce que les parents pensent de notre accompagnement, de notre pédagogie et de l'environnement que nous offrons à leurs enfants.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 pt-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testi, idx) => (
            <div 
              key={idx} 
              className="snap-start shrink-0 w-[85vw] sm:w-[340px] lg:w-[calc(25%-1.125rem)] bg-[#0086d9]/8 p-8 sm:p-9 flex flex-col justify-between min-h-[420px] rounded-none border-2 border-[#0086d9]/15 shadow-md hover:shadow-xl hover:border-[#0086d9]/30 transition-all duration-300 group"
            >
              <div>
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 text-[#e3a044] mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-xs font-bold text-[#0086d9] ml-2">5.0</span>
                </div>

                <p className="font-body text-[#0086d9] text-base sm:text-lg leading-relaxed font-medium">
                  {testi.quote}
                </p>
              </div>
              
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-[#0086d9]/10">
                
                <div>
                  <h4 className="font-heading font-bold text-[#0086d9] text-base leading-tight">{testi.name}</h4>
                  <p className="font-body text-[#00558d]/70 text-xs font-medium mt-0.5">
                    {testi.role}
                  </p>
                  <span className="text-[10px] font-bold text-[#e3a044] uppercase tracking-wider block mt-0.5">
                    {testi.child}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-between mt-6">
          <p className="text-xs font-semibold text-[#00558d]/70">
            Faites défiler pour découvrir plus de témoignages
          </p>

          <div className="flex gap-3">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 flex items-center justify-center bg-[#0086d9]/8 text-[#0086d9] hover:bg-[#0086d9]/18 hover:scale-105 active:scale-95 transition-all shadow-sm border border-[#0086d9]/15 cursor-pointer"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 flex items-center justify-center bg-[#0086d9]/8 text-[#0086d9] hover:bg-[#0086d9]/18 hover:scale-105 active:scale-95 transition-all shadow-sm border border-[#0086d9]/15 cursor-pointer"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
