/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Hero.
 *
 * Volontairement dépouillé : un titre, une phrase, deux boutons.
 * Aucun badge, aucune statistique, aucune pastille flottante — tout ce
 * qui encombrait la première impression a été retiré. Le visuel porte
 * l'émotion, le texte porte le message.
 */

import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { SmartImage } from '../design-system/giggle/SmartImage';
import { PHOTOS } from '../data/photos';

interface HeroProps {
  onExploreCampuses: () => void;
  onExploreMaternelle: () => void;
  onExplorePrimaire: () => void;
  onOpenAdmissions: () => void;
}

/** Trois photos en escalier : une grande, deux plus petites à droite. */
const VISUALS = [
  { photo: PHOTOS.sourires, cls: 'col-span-3 row-span-6', rot: -1.5, from: -7, delay: 0.15, fb: 'paint' as const },
  { photo: PHOTOS.classeAtelier, cls: 'col-span-2 row-span-3', rot: 2, from: 9, delay: 0.28, fb: 'blocks' as const },
  { photo: PHOTOS.eveil, cls: 'col-span-2 row-span-3', rot: -2, from: -9, delay: 0.4, fb: 'reading' as const },
];

export const Hero: React.FC<HeroProps> = ({ onExploreCampuses, onOpenAdmissions }) => {
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduce ? undefined : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="relative overflow-hidden bg-[#fff7ef] pt-12 pb-16 lg:pt-20 lg:pb-24">
      {/* Accents colorés très diffus, hérités de la palette enfantine */}
      <div className="absolute -top-32 -right-24 w-[30rem] h-[30rem] bg-[#0086d9]/8 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#ffc800]/12 blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 xl:gap-16 items-center">

          {/* Texte : titre + phrase + 2 boutons, rien de plus */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <motion.h1
              {...rise(0)}
              className="font-heading text-[2.3rem] leading-[1.12] sm:text-5xl sm:leading-[1.08] lg:text-6xl xl:text-[4.4rem] xl:leading-[1.05] text-[#0086d9] tracking-tight mb-7"
            >
              Où la curiosité<br />apprend à{' '}
              <span className="relative inline-block text-[#e3a044]">
                s’épanouir
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#ffc800]"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M0,10 Q50,0 100,10" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              {...rise(0.1)}
              className="font-body text-lg sm:text-xl text-[#00558d]/80 leading-relaxed mb-10 max-w-lg"
            >
              Une école bienveillante à El Jadida, de la crèche au CE6.
            </motion.p>

            <motion.div
              {...rise(0.2)}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <button
                onClick={onOpenAdmissions}
                className="cursor-pointer inline-flex items-center justify-center gap-3 bg-[#0086d9] hover:bg-[#006cb3] text-white font-body font-bold text-[15px] px-9 py-4.5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4" />
                Réserver une visite
              </button>
              <button
                onClick={onExploreCampuses}
                className="cursor-pointer inline-flex items-center justify-center gap-2.5 bg-white hover:bg-[#0086d9]/6 text-[#0086d9] font-body font-bold text-[15px] px-8 py-4.5 border-2 border-[#0086d9]/25 transition-all duration-300 hover:-translate-y-0.5 group"
              >
                Voir les campus
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Visuel — deux compositions distinctes :
              • MOBILE : une seule grande photo, lisible et entière. Une
                grille de trois vignettes sur 390 px de large donnerait des
                cases minuscules et couperait les visages.
              • DESKTOP : les trois photos en escalier. */}
          <div className="lg:col-span-6">
            {/* Mobile */}
            <motion.figure
              initial={reduce ? { rotate: -1.5 } : { opacity: 0, rotate: -6, y: 26, scale: 0.94 }}
              animate={{ opacity: 1, rotate: -1.5, y: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 58, damping: 15, delay: 0.15 }}
              className="md:hidden relative overflow-hidden border-4 border-white shadow-xl aspect-[5/4] max-w-[420px] mx-auto"
            >
              <SmartImage
                src={PHOTOS.sourires.src}
                alt={PHOTOS.sourires.alt}
                loading="eager"
                fallback="paint"
                className="w-full h-full object-cover"
              />
              {/* Deux vignettes qui débordent d'un coin, pour la profondeur */}
              <span
                aria-hidden="true"
                className="absolute -bottom-1 -right-1 w-[38%] aspect-square border-4 border-white overflow-hidden shadow-lg"
              >
                <SmartImage
                  src={PHOTOS.eveil.src}
                  alt=""
                  loading="eager"
                  className="w-full h-full object-cover"
                />
              </span>
            </motion.figure>

            {/* Desktop */}
            <div className="hidden md:grid grid-cols-5 grid-rows-6 gap-3 sm:gap-4 h-[490px] lg:h-[540px] max-w-[560px] mx-auto">
              {VISUALS.map((v, i) => (
                <motion.figure
                  key={i}
                  initial={reduce ? { rotate: v.rot } : { opacity: 0, rotate: v.from, scale: 0.92, y: 26 }}
                  animate={{ opacity: 1, rotate: v.rot, scale: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 58, damping: 15, delay: v.delay }}
                  whileHover={{ rotate: 0, scale: 1.02, zIndex: 20 }}
                  className={`${v.cls} overflow-hidden border-4 border-white shadow-xl`}
                >
                  <SmartImage
                    src={v.photo.src}
                    alt={v.photo.alt}
                    loading="eager"
                    fallback={v.fb}
                    className="w-full h-full object-cover"
                  />
                </motion.figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
