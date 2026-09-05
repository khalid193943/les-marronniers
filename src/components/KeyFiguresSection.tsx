/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers El Jadida - Key Figures Section (Mobile First)
 */

import React, { useRef } from 'react';
import { Award, School, Sparkles, Clock } from 'lucide-react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { Compteur, Cascade, CascadeItem, TitreAnime } from './motion/Primitives';

export const KeyFiguresSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const reduit = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  // la trame de points glisse doucement : la bande respire au défilement
  const trameY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  const figures = [
    { icon: Award, number: '100%', label: 'Taux de Réussite', sub: 'Examens officiels du CE6' },
    { icon: School, number: '2', label: 'Campus Dédiés', sub: 'Maternelle & Primaire sécurisés' },
    { icon: Sparkles, number: '15+', label: 'Ateliers Éducatifs', sub: 'Échecs, Théâtre, Cinéma, Musique' },
    { icon: Clock, number: '15 ans', label: "D'Expérience Reconnue", sub: 'Au service des familles d’El Jadida' },
  ];

  return (
    <section
      ref={ref}
      className="bg-[#084274] text-[#feeddb] py-14 sm:py-20 relative overflow-hidden border-y border-[#feeddb]/15"
    >
      {/* trame de points, animée en parallaxe */}
      <motion.div
        aria-hidden="true"
        style={reduit ? undefined : { y: trameY }}
        className="absolute inset-[-10%] opacity-10 bg-[radial-gradient(#feeddb_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
      />

      {/* halo doré discret, en haut à droite */}
      <div
        aria-hidden="true"
        className="absolute -top-1/3 -right-[8%] w-[min(520px,60%)] aspect-square rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(227,160,68,.22), transparent 68%)' }}
      />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <TitreAnime
          as="p"
          texte="Les Marronniers en quelques chiffres"
          className="font-body text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#e3a044] text-center mb-8 sm:mb-12"
        />

        <Cascade decalage={0.11} className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {figures.map((fig, idx) => {
            const Icon = fig.icon;
            return (
              <CascadeItem key={idx}>
                <div className="relative bg-white/5 hover:bg-white/[0.09] border border-[#feeddb]/15 p-5 sm:p-7 flex flex-col items-center text-center group transition-colors duration-300 h-full overflow-hidden">
                  {/* filet doré qui se remplit au survol */}
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-0 h-[2px] w-full bg-[#e3a044] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[600ms] ease-[cubic-bezier(.22,1,.36,1)]"
                  />

                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/10 flex items-center justify-center mb-3 sm:mb-5 group-hover:scale-110 group-hover:rotate-[-8deg] group-hover:bg-[#e3a044] transition-all duration-[450ms] ease-[cubic-bezier(.34,1.4,.5,1)] text-[#feeddb] group-hover:text-[#084274]">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <span className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 tracking-tight text-white group-hover:text-[#e3a044] transition-colors duration-300">
                    <Compteur valeur={fig.number} duree={1.7} />
                  </span>

                  <span className="font-body text-xs sm:text-sm font-bold uppercase tracking-wider text-[#feeddb] mb-1">
                    {fig.label}
                  </span>

                  <span className="font-body text-[11px] sm:text-xs text-[#feeddb]/70 max-w-[180px] leading-tight">
                    {fig.sub}
                  </span>
                </div>
              </CascadeItem>
            );
          })}
        </Cascade>
      </div>
    </section>
  );
};
