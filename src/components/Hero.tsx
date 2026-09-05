/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Hero (reconstruction complète)
 * Inspiré de la référence "Designed For Children's Early Education" :
 * collage éclaté de 5 photos à droite, avec accents colorés en arrière-plan,
 * gros titre + trust badges + CountUp à gauche. Le collage se pose en
 * cascade au chargement, chaque photo avec sa propre rotation et son délai.
 */

import React from 'react';
import { Calendar, ArrowRight, Award, ShieldCheck, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { CountUp } from '../design-system/giggle/CountUp';
import { DoodleStar, DoodleSun } from '../design-system/giggle/Doodles';

interface HeroProps {
  onExploreCampuses: () => void;
  onExploreMaternelle: () => void;
  onExplorePrimaire: () => void;
  onOpenAdmissions: () => void;
}

const PHOTOS = [
  {
    src: 'https://cdn.prod.website-files.com/69c84428044e454b1b6c1405/6a14546f036a33ba6cc4b748_Images%20(1).avif',
    alt: 'Élèves en atelier créatif aux Marronniers',
    cls: 'left-0 top-0 w-[58%] aspect-[4/5] z-20',
    rot: -3,
    from: -12,
    delay: 0,
  },
  {
    src: 'https://images.unsplash.com/photo-1596464716127-f2a829822301?auto=format&fit=crop&w=700&q=80',
    alt: 'Jeux de construction en maternelle',
    cls: 'right-0 top-[4%] w-[46%] aspect-square z-30',
    rot: 4,
    from: 16,
    delay: 0.12,
  },
  {
    src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=80',
    alt: 'Activité de peinture',
    cls: 'left-[4%] bottom-0 w-[42%] aspect-square z-10',
    rot: 5,
    from: 18,
    delay: 0.24,
  },
  {
    src: 'https://cdn.prod.website-files.com/69c84428044e454b1b6c1405/6a14546f37bdd99338f62c1c_Images%20(3).avif',
    alt: 'Salle de classe lumineuse',
    cls: 'right-[2%] bottom-[2%] w-[48%] aspect-[4/3] z-20',
    rot: -4,
    from: -16,
    delay: 0.36,
  },
];

export const Hero: React.FC<HeroProps> = ({ onExploreCampuses, onOpenAdmissions }) => {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#feeddb] pt-8 pb-16 lg:pt-14 lg:pb-24">
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#e3a044]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-[#084274]/5 blur-3xl pointer-events-none" />
      <DoodleStar className="hidden xl:block absolute top-24 left-[6%] w-8 text-[#d95f43]/40 pointer-events-none" />
      <DoodleSun className="hidden xl:block absolute bottom-16 left-[10%] w-10 text-[#e3a044]/50 pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 xl:gap-16 items-center">

          {/* Colonne gauche : contenu */}
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left z-10"
          >
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <div className="giggle-tag bg-white/80 backdrop-blur-sm border border-[#084274]/15 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#e3a044] animate-pulse" />
                <span className="font-semibold text-xs text-[#084274] tracking-wide">
                  Faites le choix de la différence
                </span>
              </div>
              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#084274]/10 text-[#084274] text-[11px] font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 text-[#e3a044]" />
                <span>Crèche → CE6</span>
              </div>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#084274] leading-[1.12] sm:leading-[1.08] tracking-tight mb-5 sm:mb-6">
              Où la <strong className="font-bold text-[#084274]">Curiosité</strong> Apprend à{' '}
              <span className="relative inline-block text-[#e3a044]">
                S'Épanouir
                <svg
                  className="absolute -bottom-1.5 sm:-bottom-2 left-0 w-full h-2.5 sm:h-3 text-[#e3a044]/40"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path d="M0,10 Q50,0 100,10" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>
            </h1>

            <p className="font-body text-base sm:text-lg text-[#084274]/80 leading-relaxed mb-8 max-w-xl">
              Une école bienveillante, de la crèche au CE6, où chaque enfant est connu
              par son prénom depuis plus de 15 ans à El Jadida.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenAdmissions}
                className="giggle-button-primary cursor-pointer text-[15px] px-8 py-4 bg-[#084274] hover:bg-[#05335b] text-[#feeddb] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-3 font-bold"
              >
                <Calendar className="w-4 h-4 text-[#e3a044]" />
                <span>Réserver une visite</span>
              </button>

              <button
                onClick={onExploreCampuses}
                className="giggle-button-secondary cursor-pointer text-[15px] px-7 py-4 bg-white/90 hover:bg-white text-[#084274] border border-[#084274]/20 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 font-bold"
              >
                <span>Voir les campus</span>
                <ArrowRight className="w-4 h-4 text-[#e3a044]" />
              </button>
            </div>

            {/* Trust metrics animés */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#084274]/15 w-full max-w-lg">
              <div className="flex flex-col">
                <span className="font-heading text-xl sm:text-2xl font-bold text-[#084274]">
                  <CountUp value={100} suffix="%" />
                </span>
                <span className="text-[11px] sm:text-xs text-[#084274]/70 font-semibold">Réussite CE6</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl sm:text-2xl font-bold text-[#084274]">
                  <CountUp value={2} />
                </span>
                <span className="text-[11px] sm:text-xs text-[#084274]/70 font-semibold">Campus au Plateau</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl sm:text-2xl font-bold text-[#084274]">
                  <CountUp value={15} suffix=" ans" />
                </span>
                <span className="text-[11px] sm:text-xs text-[#084274]/70 font-semibold">Au service des familles</span>
              </div>
            </div>
          </motion.div>

          {/* Colonne droite : collage éclaté de photos */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center items-center relative w-full">
            <div className="relative w-full max-w-md h-[420px] sm:h-[500px] lg:h-[560px]">
              {PHOTOS.map((p, i) => (
                <motion.figure
                  key={i}
                  className={`absolute ${p.cls} overflow-hidden rounded-2xl shadow-xl bg-white border-4 border-white`}
                  initial={
                    reduce
                      ? { rotate: p.rot }
                      : { opacity: 0, rotate: p.from, scale: 0.88, y: 30 }
                  }
                  animate={{ opacity: 1, rotate: p.rot, scale: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 60, damping: 14, delay: 0.15 + p.delay }}
                  whileHover={{ rotate: 0, scale: 1.03, zIndex: 40 }}
                >
                  <img src={p.src} alt={p.alt} className="w-full h-full object-cover" loading="eager" />
                </motion.figure>
              ))}

              {/* Badge flottant : sécurité */}
              <motion.div
                initial={reduce ? undefined : { opacity: 0, y: 14, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.7, type: 'spring', stiffness: 70, damping: 14 }}
                className="absolute -left-3 sm:-left-6 top-[38%] z-40 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-xl border border-[#084274]/10 flex items-center gap-2.5"
              >
                <div className="w-7 h-7 rounded-full bg-[#084274] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#feeddb]" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#084274] uppercase tracking-wider leading-none">
                    Environnement
                  </p>
                  <p className="text-xs font-semibold text-[#084274]/80">Sécurisé & Bienveillant</p>
                </div>
              </motion.div>

              {/* Badge flottant : inscriptions */}
              <motion.div
                initial={reduce ? undefined : { opacity: 0, y: 14, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.85, type: 'spring', stiffness: 70, damping: 14 }}
                className="absolute right-1 sm:right-4 -bottom-2 sm:-bottom-4 z-40 bg-[#084274]/95 backdrop-blur-md text-white px-4 py-3 rounded-xl shadow-xl border border-white/20 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-[#e3a044] flex items-center justify-center text-[#084274] font-bold shrink-0">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#feeddb] uppercase tracking-wider leading-none">
                    Inscriptions Ouvertes
                  </p>
                  <p className="text-xs font-semibold text-white/90">Année 2026-2027</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
