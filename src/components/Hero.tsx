/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers - Main School Hero (Nouvelle Génération)
 */

import React from 'react';
import { Calendar, MapPin, ArrowRight, Sparkles, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onExploreCampuses: () => void;
  onExploreMaternelle: () => void;
  onExplorePrimaire: () => void;
  onOpenAdmissions: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreCampuses,
  onOpenAdmissions,
}) => {
  return (
    <section className="relative overflow-hidden bg-[#feeddb] pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Subtle modern geometric background accents */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#e3a044]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-[#084274]/5 blur-3xl pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Content with staggered motion */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left z-10"
          >
            {/* Top Badge: Prestigieux Établissement */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <div className="giggle-tag bg-white/80 backdrop-blur-sm border border-[#084274]/15 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#e3a044] animate-pulse" />
                <span className="font-semibold text-xs text-[#084274] tracking-wide">
                  Établissement Privé d'Excellence • El Jadida
                </span>
              </div>
              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#084274]/10 text-[#084274] text-[11px] font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 text-[#e3a044]" />
                <span>Crèche → CE6</span>
              </div>
            </div>

            {/* Main Headline */}
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

            {/* Description */}
            <p className="font-body text-base sm:text-lg text-[#084274]/80 leading-relaxed mb-8 max-w-xl">
              Depuis plus de 15 ans, Les Marronniers offre aux enfants un cadre sécurisant et stimulant à El Jadida. Notre pédagogie bienveillante développe l'autonomie, l'esprit critique et l'excellence académique dès le plus jeune âge.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenAdmissions}
                className="giggle-button-primary cursor-pointer text-[15px] px-8 py-4 bg-[#084274] hover:bg-[#05335b] text-[#feeddb] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-3 font-bold"
              >
                <Calendar className="w-4 h-4 text-[#e3a044]" />
                <span>Prendre Rendez-vous / Inscription</span>
              </button>

              <button
                onClick={onExploreCampuses}
                className="giggle-button-secondary cursor-pointer text-[15px] px-7 py-4 bg-white/90 hover:bg-white text-[#084274] border border-[#084274]/20 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 font-bold"
              >
                <span>Découvrir les 2 Campus</span>
                <ArrowRight className="w-4 h-4 text-[#e3a044]" />
              </button>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#084274]/15 w-full max-w-lg">
              <div className="flex flex-col">
                <span className="font-heading text-xl sm:text-2xl font-bold text-[#084274]">100%</span>
                <span className="text-[11px] sm:text-xs text-[#084274]/70 font-semibold">Réussite CE6</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl sm:text-2xl font-bold text-[#084274]">2 Campus</span>
                <span className="text-[11px] sm:text-xs text-[#084274]/70 font-semibold">Plateau El Jadida</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl sm:text-2xl font-bold text-[#084274]">Trilingue</span>
                <span className="text-[11px] sm:text-xs text-[#084274]/70 font-semibold">Français • Arabe • Anglais</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Layered Architecture Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 xl:col-span-6 flex justify-center items-center relative w-full"
          >
            <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[520px] xl:h-[580px]">
              
              {/* Layer 1: Orange tilted backdrop */}
              <div className="absolute inset-0 bg-[#e3a044] transform rotate-1 sm:rotate-3 shadow-md transition-transform duration-500 hover:rotate-3 sm:hover:rotate-4" />

              {/* Layer 2: Blue tilted backdrop */}
              <div className="absolute inset-0 bg-[#084274] transform -rotate-1 sm:-rotate-2 shadow-xl transition-transform duration-500 hover:-rotate-2 sm:hover:-rotate-3" />

              {/* Layer 3: Main Photography */}
              <div className="relative z-10 w-full h-full overflow-hidden shadow-2xl border-2 border-white/20 group">
                <img
                  src="https://cdn.prod.website-files.com/69c84428044e454b1b6c1405/6a14546f036a33ba6cc4b748_Images%20(1).avif"
                  alt="Élèves et enseignants de l'école Les Marronniers El Jadida"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />
                
                {/* Floating Glassmorphic Pill 1: Top Right */}
                <div className="absolute top-5 right-5 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 shadow-xl border border-[#084274]/10 flex items-center gap-2.5 animate-float-gentle">
                  <div className="w-7 h-7 rounded-full bg-[#084274] flex items-center justify-center text-white">
                    <ShieldCheck className="w-4 h-4 text-[#feeddb]" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-[#084274] uppercase tracking-wider leading-none">Environnement</p>
                    <p className="text-xs font-semibold text-[#084274]/80">Sécurisé & Bienveillant</p>
                  </div>
                </div>

                {/* Floating Glassmorphic Pill 2: Bottom Left */}
                <div className="absolute bottom-5 left-5 z-20 bg-[#084274]/95 backdrop-blur-md text-white px-4 py-3 shadow-xl border border-white/20 flex items-center gap-3 animate-float-reverse">
                  <div className="w-8 h-8 rounded-full bg-[#e3a044] flex items-center justify-center text-[#084274] font-bold">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-[#feeddb] uppercase tracking-wider leading-none">Inscriptions Ouvertes</p>
                    <p className="text-xs font-semibold text-white/90">Année Scolaire 2026-2027</p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
