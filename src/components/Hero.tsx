/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Hero.
 *
 * Composition volontairement épurée : une grande photo verticale porteuse,
 * deux photos secondaires en escalier, et deux badges bien séparés (l'un
 * en haut à gauche, l'autre en bas à droite) pour qu'aucun ne recouvre un
 * visage. Les photos utilisent SmartImage : aucune image cassée possible.
 */

import React from 'react';
import { Calendar, ArrowRight, Award, ShieldCheck, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { CountUp } from '../design-system/giggle/CountUp';
import { SmartImage } from '../design-system/giggle/SmartImage';
import { DoodleStar, DoodleSun } from '../design-system/giggle/Doodles';
import { PHOTOS } from '../data/photos';

interface HeroProps {
  onExploreCampuses: () => void;
  onExploreMaternelle: () => void;
  onExplorePrimaire: () => void;
  onOpenAdmissions: () => void;
}

const STATS = [
  { value: 100, suffix: '%', label: 'Réussite au CE6' },
  { value: 2, suffix: '', label: 'Campus au Plateau' },
  { value: 15, suffix: ' ans', label: 'Au service des familles' },
];

export const Hero: React.FC<HeroProps> = ({ onExploreCampuses, onOpenAdmissions }) => {
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduce ? undefined : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="relative overflow-hidden bg-[#fff7ef] pt-8 pb-16 lg:pt-16 lg:pb-24">
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[28rem] h-[28rem] rounded-full bg-[#0086d9]/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-[#e3a044]/12 blur-3xl pointer-events-none" />
      <DoodleSun className="hidden xl:block absolute bottom-24 left-[5%] w-10 text-[#e3a044]/50 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 xl:gap-16 items-center">

          {/* ---------- Colonne texte ---------- */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <motion.div {...rise(0)} className="flex flex-wrap items-center gap-2.5 mb-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/85 backdrop-blur-sm border border-[#0086d9]/20 px-4 py-2 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#e3a044] animate-pulse" />
                <span className="font-body font-semibold text-xs text-[#0086d9]">
                  Faites le choix de la différence
                </span>
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#0086d9]/12 px-3.5 py-2 text-[11px] font-bold text-[#0086d9]">
                <Award className="w-3.5 h-3.5" />
                Crèche → CE6
              </span>
            </motion.div>

            <motion.h1
              {...rise(0.08)}
              className="font-heading text-[2.1rem] leading-[1.14] sm:text-5xl sm:leading-[1.1] lg:text-6xl xl:text-[4.2rem] xl:leading-[1.06] text-[#0086d9] tracking-tight mb-6"
            >
              Où la Curiosité<br />Apprend à{' '}
              <span className="relative inline-block text-[#e3a044]">
                S’Épanouir
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#e3a044]/45"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M0,10 Q50,0 100,10" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              {...rise(0.16)}
              className="font-body text-base sm:text-lg text-[#00558d]/75 leading-relaxed mb-9 max-w-lg"
            >
              Une école bienveillante, de la crèche au CE6, où chaque enfant est
              connu par son prénom — depuis plus de 15 ans à El Jadida.
            </motion.p>

            <motion.div
              {...rise(0.24)}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-12"
            >
              <button
                onClick={onOpenAdmissions}
                className="cursor-pointer inline-flex items-center justify-center gap-3 rounded-full bg-[#0086d9] hover:bg-[#0086d9] text-[#fff7ef] font-body font-bold text-[15px] px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4 text-[#e3a044]" />
                Réserver une visite
              </button>
              <button
                onClick={onExploreCampuses}
                className="cursor-pointer inline-flex items-center justify-center gap-2.5 rounded-full bg-white hover:bg-white text-[#0086d9] font-body font-bold text-[15px] px-7 py-4 border border-[#0086d9]/15 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group"
              >
                Voir les campus
                <ArrowRight className="w-4 h-4 text-[#0086d9] group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            <motion.div
              {...rise(0.32)}
              className="grid grid-cols-3 gap-6 pt-7 border-t border-[#0086d9]/12 w-full max-w-lg"
            >
              {STATS.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="font-heading text-2xl sm:text-[1.7rem] text-[#0086d9] leading-none mb-1.5">
                    <CountUp value={s.value} suffix={s.suffix} />
                  </span>
                  <span className="font-body text-[11px] sm:text-xs text-[#00558d]/65 font-semibold leading-snug">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ---------- Colonne visuelle ---------- */}
          <div className="lg:col-span-6 relative">
            <div className="relative max-w-[540px] mx-auto">
              <DoodleStar className="hidden lg:block absolute -top-6 -left-4 w-8 text-[#d95f43]/45 z-40 pointer-events-none" />

              <div className="grid grid-cols-5 grid-rows-5 gap-3 sm:gap-4 h-[420px] sm:h-[500px] lg:h-[540px]">
                {/* Grande photo porteuse */}
                <motion.figure
                  initial={reduce ? { rotate: -1.5 } : { opacity: 0, rotate: -8, y: 28 }}
                  animate={{ opacity: 1, rotate: -1.5, y: 0 }}
                  transition={{ type: 'spring', stiffness: 58, damping: 15, delay: 0.15 }}
                  whileHover={{ rotate: 0, scale: 1.02, zIndex: 30 }}
                  className="col-span-3 row-span-5 relative rounded-3xl overflow-hidden shadow-xl border-4 border-white"
                >
                  <SmartImage
                    src={PHOTOS.classeAtelier.src}
                    alt={PHOTOS.classeAtelier.alt}
                    loading="eager"
                    fallback="paint"
                    className="w-full h-full object-cover"
                  />
                </motion.figure>

                {/* Photo secondaire haute */}
                <motion.figure
                  initial={reduce ? { rotate: 2.5 } : { opacity: 0, rotate: 10, y: -24 }}
                  animate={{ opacity: 1, rotate: 2.5, y: 0 }}
                  transition={{ type: 'spring', stiffness: 58, damping: 15, delay: 0.3 }}
                  whileHover={{ rotate: 0, scale: 1.03, zIndex: 30 }}
                  className="col-span-2 row-span-2 rounded-3xl overflow-hidden shadow-lg border-4 border-white"
                >
                  <SmartImage
                    src={PHOTOS.classeMaternelle.src}
                    alt={PHOTOS.classeMaternelle.alt}
                    loading="eager"
                    fallback="blocks"
                    className="w-full h-full object-cover"
                  />
                </motion.figure>

                {/* Photo secondaire basse */}
                <motion.figure
                  initial={reduce ? { rotate: -2.5 } : { opacity: 0, rotate: -10, y: 26 }}
                  animate={{ opacity: 1, rotate: -2.5, y: 0 }}
                  transition={{ type: 'spring', stiffness: 58, damping: 15, delay: 0.42 }}
                  whileHover={{ rotate: 0, scale: 1.03, zIndex: 30 }}
                  className="col-span-2 row-span-3 rounded-3xl overflow-hidden shadow-lg border-4 border-white"
                >
                  <SmartImage
                    src={PHOTOS.lecture.src}
                    alt={PHOTOS.lecture.alt}
                    loading="eager"
                    fallback="reading"
                    className="w-full h-full object-cover"
                  />
                </motion.figure>
              </div>

              {/* Badge haut-gauche */}
              <motion.div
                initial={reduce ? undefined : { opacity: 0, x: -18, scale: 0.92 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 70, damping: 15, delay: 0.62 }}
                className="absolute -left-2 sm:-left-6 top-[22%] z-40 bg-white/95 backdrop-blur-md pl-3 pr-4 py-2.5 rounded-2xl shadow-lg border border-[#0086d9]/8 flex items-center gap-2.5"
              >
                <span className="w-8 h-8 rounded-full bg-[#0086d9] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-white" />
                </span>
                <span className="leading-tight">
                  <span className="block font-body text-[10px] font-bold text-[#0086d9] tracking-wide">
                    ENVIRONNEMENT
                  </span>
                  <span className="block font-body text-[13px] font-semibold text-[#0086d9]">
                    Sécurisé & bienveillant
                  </span>
                </span>
              </motion.div>

              {/* Badge bas-droite */}
              <motion.div
                initial={reduce ? undefined : { opacity: 0, x: 18, scale: 0.92 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 70, damping: 15, delay: 0.74 }}
                className="absolute -right-2 sm:-right-5 -bottom-5 z-40 bg-[#0086d9] pl-3 pr-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5"
              >
                <span className="w-8 h-8 rounded-full bg-[#e3a044] flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-[#0086d9]" />
                </span>
                <span className="leading-tight">
                  <span className="block font-body text-[10px] font-bold text-[#e3a044] tracking-wide">
                    INSCRIPTIONS OUVERTES
                  </span>
                  <span className="block font-body text-[13px] font-semibold text-white">
                    Année 2026 – 2027
                  </span>
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
