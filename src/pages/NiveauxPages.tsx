/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers El Jadida - Page Espaces d'Apprentissage & Niveaux Scolaires
 * Crèche (2-3 ans), Maternelle (TPS/PS/MS/GS) & Primaire (CP au CE6)
 * Esthétique Ovo Giggle / Bento Grids / Journées Types / Trilinguisme
 */

import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { SectionDivider } from '../components/SectionDivider';
import { PageId } from '../types';
import {
  Baby,
  Smile,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Calendar,
  ArrowRight,
  BookOpen,
  Heart,
  Palette,
  ShieldCheck,
  Brain,
  Clock,
  Award,
  Globe2,
  Music,
  Users,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NiveauxProps {
  initialTab?: 'all' | 'creche' | 'maternelle' | 'primaire';
  onNavigate: (page: PageId) => void;
  onOpenAdmissions: () => void;
}

export const NiveauxPages: React.FC<NiveauxProps> = ({
  initialTab = 'all',
  onNavigate,
  onOpenAdmissions,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'creche' | 'maternelle' | 'primaire'>(initialTab);

  return (
    <div className="bg-[#feeddb] min-h-screen">
      <PageHeader
        tag="CURSUS & ESPACES PÉDAGOGIQUES"
        title="Nos Niveaux"
        highlightedWord="Scolaires"
        description="De 2 ans au CE6, un continuum éducatif exigeant et bienveillant où chaque enfant grandit à son rythme dans un univers stimulant et trilingue."
        onNavigate={onNavigate}
        breadcrumbs={[
          { label: 'Nos Cursus' },
          ...(activeTab !== 'all' ? [{ label: activeTab === 'creche' ? 'Crèche' : activeTab === 'maternelle' ? 'Maternelle' : 'Primaire' }] : []),
        ]}
      />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-14 sm:py-20">
        
        {/* Navigation Tabs Pill Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16">
          {[
            { id: 'all', label: 'Vue d’Ensemble du Cursus', icon: Globe2 },
            { id: 'creche', label: '1. Crèche (2-3 ans)', icon: Baby },
            { id: 'maternelle', label: '2. Maternelle (TPS à GS)', icon: Smile },
            { id: 'primaire', label: '3. Primaire (CP au CE6)', icon: GraduationCap },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 sm:px-6 py-3 text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer border-2 ${
                  activeTab === tab.id
                    ? 'bg-[#084274] text-white border-[#084274] shadow-md scale-105'
                    : 'bg-white text-[#084274] hover:bg-white/80 border-[#084274]/15'
                }`}
              >
                <Icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-[#e3a044]' : 'text-[#084274]'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* CONTENT WITH ANIMATEPRESENCE */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {/* 1. ESPACE CRÈCHE */}
            {(activeTab === 'all' || activeTab === 'creche') && (
              <div
                id="creche"
                className="mb-20 bg-[#e6ccb2] border-2 border-[#084274]/15 p-6 sm:p-10 lg:p-12 shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  <div className="lg:col-span-7 space-y-5">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#feeddb] text-[#084274] text-xs font-bold border border-[#084274]/15 shadow-2xs">
                      <Baby className="w-4 h-4 text-[#e3a044]" />
                      <span>Cycle 1 • Petite Enfance (Dès 2 ans)</span>
                    </div>

                    <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] text-[#084274] tracking-tight leading-tight">
                      La Crèche : Douceur, Sécurité & Éveil des Sens
                    </h2>

                    <p className="font-body text-sm sm:text-base text-[#084274]/85 leading-relaxed">
                      L’accueil des tout-petits repose sur un principe fondateur : <strong>le respect absolu du rythme biologique</strong> de chaque enfant. Dans un univers molletonné, aéré et lumineux, nos éducatrices formées accompagnent l'éveil du langage, la motricité libre et la première socialisation avec infinie tendresse.
                    </p>

                    {/* 6 Atouts Crèche */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {[
                        'Éveil sensoriel & manipulation des matières',
                        'Encadrement bienveillant (taux d’adulte élevé)',
                        'Développement de la motricité libre et équilibre',
                        'Dortoir calme, hygiénique et surveillé',
                        'Sol amortissant anti-choc dans la cour',
                        'Alimentation saine & rythme de repos respecté',
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-[#084274]">
                          <CheckCircle2 className="w-4 h-4 text-[#24a974] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onOpenAdmissions}
                        className="giggle-button-primary text-xs sm:text-sm px-6 py-3.5 font-bold cursor-pointer flex items-center gap-2"
                      >
                        <span>Inscrire Mon Enfant en Crèche</span>
                        <ArrowRight className="w-4 h-4 text-[#e3a044]" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onNavigate('locaux')}
                        className="giggle-button-secondary text-xs sm:text-sm px-5 py-3.5 font-bold cursor-pointer"
                      >
                        <span>Visiter l'Espace Crèche</span>
                      </motion.button>
                    </div>
                  </div>

                  {/* Image with tilted backdrop */}
                  <div className="lg:col-span-5 relative">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className="relative w-full h-[320px] sm:h-[400px]"
                    >
                      <div className="absolute inset-0 bg-[#e3a044] transform rotate-2 shadow-md" />
                      <div className="absolute inset-0 bg-[#084274] transform -rotate-1 shadow-lg" />
                      <div className="relative z-10 w-full h-full overflow-hidden border-2 border-white/40 shadow-2xl">
                        <img
                          src="https://images.unsplash.com/photo-1596464716127-f2a829822301?auto=format&fit=crop&w=800&q=80"
                          alt="Espace Crèche Les Marronniers"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-3 border border-[#084274]/15 text-xs text-[#084274] font-bold">
                          Campus Beethoven • Accueil dès 2 ans
                        </div>
                      </div>
                    </motion.div>
                  </div>

                </div>

                {/* Journée Type Crèche */}
                <div className="mt-10 pt-8 border-t-2 border-[#084274]/15">
                  <h3 className="font-heading text-lg font-bold text-[#084274] mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#e3a044]" />
                    <span>Une Journée Type à la Crèche</span>
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                    <motion.div whileHover={{ y: -3 }} className="bg-white/70 p-3 border border-[#084274]/10 transition-all">
                      <span className="font-bold text-[#e3a044] block">08:00 - 09:00</span>
                      <span className="font-semibold text-[#084274]">Accueil personnalisé & jeux calmes</span>
                    </motion.div>
                    <motion.div whileHover={{ y: -3 }} className="bg-white/70 p-3 border border-[#084274]/10 transition-all">
                      <span className="font-bold text-[#e3a044] block">09:30 - 11:30</span>
                      <span className="font-semibold text-[#084274]">Ateliers sensoriels & motricité</span>
                    </motion.div>
                    <motion.div whileHover={{ y: -3 }} className="bg-white/70 p-3 border border-[#084274]/10 transition-all">
                      <span className="font-bold text-[#e3a044] block">12:00 - 14:00</span>
                      <span className="font-semibold text-[#084274]">Repas encadré & sieste sereine</span>
                    </motion.div>
                    <motion.div whileHover={{ y: -3 }} className="bg-white/70 p-3 border border-[#084274]/10 transition-all">
                      <span className="font-bold text-[#e3a044] block">15:00 - 16:30</span>
                      <span className="font-semibold text-[#084274]">Éveil musical & contes contés</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. ESPACE MATERNELLE */}
            {(activeTab === 'all' || activeTab === 'maternelle') && (
              <div
                id="maternelle"
                className="mb-20 bg-[#e6ccb2] border-2 border-[#084274]/15 p-6 sm:p-10 lg:p-12 shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Image on left for variation */}
                  <div className="lg:col-span-5 order-2 lg:order-1 relative">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className="relative w-full h-[320px] sm:h-[400px]"
                    >
                      <div className="absolute inset-0 bg-[#e3a044] transform -rotate-2 shadow-md" />
                      <div className="absolute inset-0 bg-[#084274] transform rotate-1 shadow-lg" />
                      <div className="relative z-10 w-full h-full overflow-hidden border-2 border-white/40 shadow-2xl">
                        <img
                          src="https://cdn.prod.website-files.com/69c84428044e454b1b6c1405/6a14546f37bdd99338f62c1c_Images%20(3).avif"
                          alt="Espace Maternelle Les Marronniers"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-3 border border-[#084274]/15 text-xs text-[#084274] font-bold">
                          6 Classes Spacieuses • Immersion Trilingue
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#feeddb] text-[#084274] text-xs font-bold border border-[#084274]/15 shadow-2xs">
                      <Smile className="w-4 h-4 text-[#e3a044]" />
                      <span>Cycle 2 • Maternelle (TPS, PS, MS, GS • 3 à 5 ans)</span>
                    </div>

                    <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] text-[#084274] tracking-tight leading-tight">
                      La Maternelle : Découvrir le Plaisir d’Apprendre & de Vivre Ensemble
                    </h2>

                    <p className="font-body text-sm sm:text-base text-[#084274]/85 leading-relaxed">
                      L'école maternelle prépare les bases de tous les apprentissages futurs. Grâce à nos 6 classes lumineuses et notre cour avec jardin arboré, les enfants développent leur autonomie, enrichissent leur vocabulaire en <strong>Français, Arabe et Anglais</strong> et découvrent la démarche scientifique dès le plus jeune âge.
                    </p>

                    {/* 4 Pillars Maternelle */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <motion.div whileHover={{ y: -3 }} className="p-3 bg-white/70 border border-[#084274]/10 transition-all">
                        <span className="font-bold text-xs text-[#084274] block mb-1">🌍 Trilinguisme Naturel</span>
                        <span className="text-[11px] text-[#084274]/80">Immersion quotidienne en français, arabe littéraire et initiation vivante à l'anglais.</span>
                      </motion.div>
                      <motion.div whileHover={{ y: -3 }} className="p-3 bg-white/70 border border-[#084274]/10 transition-all">
                        <span className="font-bold text-xs text-[#084274] block mb-1">🔬 Salle d'Éveil Scientifique</span>
                        <span className="text-[11px] text-[#084274]/80">Manipulation de loupes, balances, graines et observation des phénomènes naturels.</span>
                      </motion.div>
                      <motion.div whileHover={{ y: -3 }} className="p-3 bg-white/70 border border-[#084274]/10 transition-all">
                        <span className="font-bold text-xs text-[#084274] block mb-1">🎭 Théâtre & Expression Scénique</span>
                        <span className="text-[11px] text-[#084274]/80">Prise de parole en public, jeux de rôles, poésie et spectacle de fin d'année.</span>
                      </motion.div>
                      <motion.div whileHover={{ y: -3 }} className="p-3 bg-white/70 border border-[#084274]/10 transition-all">
                        <span className="font-bold text-xs text-[#084274] block mb-1">✍️ Pré-Lecture & Graphisme</span>
                        <span className="text-[11px] text-[#084274]/80">Tenue du crayon, motricité fine, reconnaissance des phonèmes et chiffres.</span>
                      </motion.div>
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onOpenAdmissions}
                        className="giggle-button-primary text-xs sm:text-sm px-6 py-3.5 font-bold cursor-pointer flex items-center gap-2"
                      >
                        <span>Préinscrire en Maternelle</span>
                        <ArrowRight className="w-4 h-4 text-[#e3a044]" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onNavigate('activites')}
                        className="giggle-button-secondary text-xs sm:text-sm px-5 py-3.5 font-bold cursor-pointer"
                      >
                        <span>Voir les Ateliers Artistiques</span>
                      </motion.button>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* 3. ESPACE PRIMAIRE */}
            {(activeTab === 'all' || activeTab === 'primaire') && (
              <div
                id="primaire"
                className="mb-20 bg-[#084274] text-[#feeddb] border-2 border-[#084274] p-6 sm:p-10 lg:p-12 shadow-2xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  <div className="lg:col-span-7 space-y-5">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 text-white text-xs font-bold border border-white/20 shadow-2xs">
                      <GraduationCap className="w-4 h-4 text-[#e3a044]" />
                      <span>Cycle 3 • Primaire (CP, CE1, CE2, CE3, CE4, CE5, CE6)</span>
                    </div>

                    <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] text-white tracking-tight leading-tight">
                      Le Primaire : L’Excellence Académique & l’Épanouissement Personnel
                    </h2>

                    <p className="font-body text-sm sm:text-base text-[#feeddb]/85 leading-relaxed">
                      Le cycle primaire consolide les savoirs fondamentaux dans un climat d'exigence bienveillante. Avec <strong>100% de réussite aux examens officiels du CE6</strong>, nos élèves développent un esprit critique aiguisé, un raisonnement mathématique solide et une maîtrise trilingue remarquable les préparant sereinement au collège.
                    </p>

                    {/* 6 Points Clés Primaire */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {[
                        'Maîtrise approfondie des maths et du calcul mental',
                        'Club officiel d’échecs & raisonnement stratégique',
                        'Lecture cursive, orthographe & éloquence',
                        'Pédagogie de projet & expérimentation concrète',
                        'Ateliers cinéma, théâtre et chant choral',
                        'Préparation méthodique à l’examen du CE6',
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-white">
                          <CheckCircle2 className="w-4 h-4 text-[#e3a044] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onOpenAdmissions}
                        className="bg-[#e3a044] hover:bg-[#d59336] text-[#084274] font-bold text-xs sm:text-sm px-6 py-3.5 shadow-lg transition-transform cursor-pointer flex items-center gap-2 border-none"
                      >
                        <span>Candidater pour le Primaire</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onNavigate('contact')}
                        className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm px-5 py-3.5 border border-white/20 transition-colors cursor-pointer"
                      >
                        <span>Rencontrer l’Équipe du Primaire</span>
                      </motion.button>
                    </div>
                  </div>

                  {/* Photo with tilted frame */}
                  <div className="lg:col-span-5 relative">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className="relative w-full h-[320px] sm:h-[400px]"
                    >
                      <div className="absolute inset-0 bg-[#e3a044] transform rotate-2 shadow-md" />
                      <div className="absolute inset-0 bg-white/20 transform -rotate-1 shadow-lg" />
                      <div className="relative z-10 w-full h-full overflow-hidden border-2 border-white/40 shadow-2xl">
                        <img
                          src="https://cdn.prod.website-files.com/69c84428044e454b1b6c1405/69c846a1048134d965991ee7_Office.avif"
                          alt="Classes Primaires Les Marronniers"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-4 left-4 right-4 bg-[#084274]/95 backdrop-blur-sm p-3 border border-white/20 text-xs text-white font-bold flex justify-between items-center">
                          <span>Campus Ibn Khaldoun</span>
                          <span className="text-[#e3a044]">100% Réussite CE6</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

      </div>

      <SectionDivider variant="white" position="bottom" style="wave1" />
    </div>
  );
};
