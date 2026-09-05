/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers El Jadida - Page Découvrir Toutes Nos Activités & Ateliers
 * Esthétique Ovo Giggle / Bento Grids / Planning Hebdomadaire
 */

import React, { useState } from 'react';
import { TitreAnime } from '../components/motion/Primitives';
import { PageHeader } from '../components/PageHeader';
import { SectionDivider } from '../components/SectionDivider';
import { PageId } from '../types';
import {
  Sparkles,
  Palette,
  Film,
  Music,
  Activity,
  Award,
  BookOpen,
  Brain,
  Calendar,
  ArrowRight,
  Clock,
  CheckCircle2,
  Trophy,
  Users,
  Compass,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedSection } from '../components/AnimatedSection';

interface ActivitesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAdmissions: () => void;
}

export const ActivitesPage: React.FC<ActivitesPageProps> = ({
  onNavigate,
  onOpenAdmissions,
}) => {
  const [filter, setFilter] = useState<string>('all');
  const [activeDay, setActiveDay] = useState<'lundi' | 'mardi' | 'mercredi' | 'jeudi' | 'vendredi'>('mercredi');

  const activities = [
    {
      category: 'sciences',
      icon: Sparkles,
      tag: 'Expérimentation & Découverte',
      title: 'Laboratoire d’Éveil Scientifique & Robotique',
      level: 'Maternelle GS & Tout le Primaire',
      image: 'https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?auto=format&fit=crop&w=800&q=80',
      desc: 'Dans notre salle d’expériences dédiée, les élèves manipulent des éprouvettes adaptées, étudient la germination des graines, la densité des liquides et s’initient à la logique des algorithmes et petits robots.',
      benefits: ['Démarche d’investigation', 'Curiosité expérimentale', 'Vocabulaire scientifique précis'],
      schedule: 'Mardi & Jeudi 16h30',
    },
    {
      category: 'arts',
      icon: Film,
      tag: 'Scène & Expression Orale',
      title: 'Théâtre, Diction & Éloquence',
      level: 'Maternelle & Primaire (Groupes par âge)',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
      desc: 'Dans notre salle cinéma-théâtre avec estrade et rideaux, les enfants apprennent à poser leur voix, à gérer leur posture corporelle et à dompter le trac lors de saynètes trilingues et du grand spectacle annuel.',
      benefits: ['Aisance à l’oral trilingue', 'Confiance en soi solide', 'Écoute et cohésion de troupe'],
      schedule: 'Mercredi 14h00 & Vendredi 16h30',
    },
    {
      category: 'reflexion',
      icon: Brain,
      tag: 'Stratégie & Concentration',
      title: 'Club Officiel d’Échecs des Marronniers',
      level: 'Du CP au CE6 (Initiation en Maternelle GS)',
      image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=800&q=80',
      desc: 'Un atelier emblématique de notre école. Sous la supervision d’éducateurs passionnés, les élèves apprennent à anticiper les coups, à élaborer des stratégies complexes et participent à des tournois régionaux.',
      benefits: ['Capacité d’anticipation', 'Patience & maîtrise de soi', 'Raisonnement logique pur'],
      schedule: 'Lundi & Mercredi 15h30',
    },
    {
      category: 'arts',
      icon: Music,
      tag: 'Rythme & Harmonie',
      title: 'Éveil Musical, Chant Choral & Rythmique',
      level: 'De la Crèche au CE6',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
      desc: 'Découverte des percussions (djembés, maracas, xylophones), initiation aux rythmes traditionnels marocains et internationaux, écoute active des grandes œuvres et chorale trilingue.',
      benefits: ['Sens du rythme & motricité fine', 'Mémoire auditive', 'Plaisir de l’harmonie collective'],
      schedule: 'Mardi 15h00 & Vendredi 15h30',
    },
    {
      category: 'arts',
      icon: Palette,
      tag: 'Créativité & Beaux-Arts',
      title: 'Arts Plastiques, Modelage & Peinture',
      level: 'Tous les niveaux scolaires',
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&q=80',
      desc: 'Peinture sur chevalet, modelage de l’argile, fresques collectives et exploration de grands maîtres de la peinture marocaine et universelle. Une exposition annuelle valorise chaque œuvre.',
      benefits: ['Liberté d’expression artistique', 'Précision du geste graphique', 'Sensibilité esthétique'],
      schedule: 'Jeudi 15h00 & Samedi matin',
    },
    {
      category: 'corps',
      icon: Activity,
      tag: 'Motricité & Esprit d’Équipe',
      title: 'Gymnastique, Parcours Moteurs & Sports Collectifs',
      level: 'Tous les niveaux (Espaces dédiés)',
      image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80',
      desc: 'Modules mous en salle de psychomotricité pour les petits, mini-basket, handball et jeux athlétiques dans la cour arborée avec sol amortissant haute sécurité.',
      benefits: ['Équilibre et coordination corporelle', 'Dépense physique saine', 'Respect des règles du jeu'],
      schedule: 'Lundi, Mercredi & Vendredi',
    },
  ];

  const filtered = filter === 'all' ? activities : activities.filter((a) => a.category === filter);

  const scheduleDays = {
    lundi: [
      { time: '12h30 - 13h30', title: 'Club d’Échecs (Perfectionnement CP/CE1)', coach: 'Maître animateur' },
      { time: '16h30 - 17h30', title: 'Mini-Gymnastique & Motricité Maternelle', coach: 'Éducatrice spécialisée' },
    ],
    mardi: [
      { time: '12h30 - 13h30', title: 'Chant Choral & Percussions Trilingues', coach: 'Professeur de musique' },
      { time: '16h30 - 17h30', title: 'Atelier Sciences & Expériences Pratiques', coach: 'Enseignant référent' },
    ],
    mercredi: [
      { time: '14h00 - 15h30', title: 'Théâtre & Expression Scénique (Grand Groupe)', coach: 'Metteur en scène intervenant' },
      { time: '15h30 - 17h00', title: 'Tournoi Inter-Classes du Club d’Échecs', coach: 'Responsable tournois' },
    ],
    jeudi: [
      { time: '12h30 - 13h30', title: 'Arts Plastiques, Argile & Fresques Murales', coach: 'Intervenante plasticienne' },
      { time: '16h30 - 17h30', title: 'Initiation Robotique & Algorithmes Ludiques', coach: 'Laboratoire de sciences' },
    ],
    vendredi: [
      { time: '15h00 - 16h30', title: 'Jeux Sportifs Collectifs & Défis Fair-play', coach: 'Éducateur sportif' },
      { time: '16h30 - 17h30', title: 'Projection & Débat Cinéma Jeunesse', coach: 'Espace Cinéma-Théâtre' },
    ],
  };

  return (
    <div className="bg-[#feeddb] min-h-screen">
      <PageHeader
        tag="ACTIVITÉS PÉDAGOGIQUES & ATELIERS"
        title="Découvrir Nos"
        highlightedWord="Ateliers & Clubs"
        description="Parce que l'école est un lieu d'épanouissement global, Les Marronniers intègrent plus de 15 ateliers artistiques, scientifiques, sportifs et stratégiques à la vie de ses élèves."
        onNavigate={onNavigate}
        breadcrumbs={[{ label: 'Activités & Ateliers' }]}
      />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-14 sm:py-20">
        
        {/* Key Metrics Strip */}
        <AnimatedSection direction="up" className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          <motion.div whileHover={{ y: -4 }} className="bg-[#e6ccb2] p-5 border-2 border-[#084274]/15 shadow-sm text-center transition-all">
            <span className="font-heading text-3xl sm:text-4xl font-bold text-[#e3a044] block mb-1">15+</span>
            <span className="text-xs font-bold text-[#084274] uppercase tracking-wider">Ateliers Éducatifs</span>
          </motion.div>
          <motion.div whileHover={{ y: -4 }} className="bg-[#e6ccb2] p-5 border-2 border-[#084274]/15 shadow-sm text-center transition-all">
            <span className="font-heading text-3xl sm:text-4xl font-bold text-[#e3a044] block mb-1">1 Club</span>
            <span className="text-xs font-bold text-[#084274] uppercase tracking-wider">Officiel d'Échecs</span>
          </motion.div>
          <motion.div whileHover={{ y: -4 }} className="bg-[#e6ccb2] p-5 border-2 border-[#084274]/15 shadow-sm text-center transition-all">
            <span className="font-heading text-3xl sm:text-4xl font-bold text-[#e3a044] block mb-1">50 Places</span>
            <span className="text-xs font-bold text-[#084274] uppercase tracking-wider">Espace Cinéma-Théâtre</span>
          </motion.div>
          <motion.div whileHover={{ y: -4 }} className="bg-[#e6ccb2] p-5 border-2 border-[#084274]/15 shadow-sm text-center transition-all">
            <span className="font-heading text-3xl sm:text-4xl font-bold text-[#e3a044] block mb-1">1 Labo</span>
            <span className="text-xs font-bold text-[#084274] uppercase tracking-wider">Éveil Scientifique</span>
          </motion.div>
        </AnimatedSection>

        {/* Filter Buttons */}
        <AnimatedSection direction="up" className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16">
          {[
            { id: 'all', label: 'Toutes les Activités' },
            { id: 'arts', label: 'Théâtre, Cinéma & Musique' },
            { id: 'reflexion', label: 'Club d’Échecs & Stratégie' },
            { id: 'sciences', label: 'Sciences & Manipulation' },
            { id: 'corps', label: 'Sports & Motricité' },
          ].map((btn) => (
            <motion.button
              key={btn.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(btn.id)}
              className={`px-5 py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer border-2 ${
                filter === btn.id
                  ? 'bg-[#084274] text-white border-[#084274] shadow-md scale-105'
                  : 'bg-white text-[#084274] hover:bg-white/80 border-[#084274]/15'
              }`}
            >
              {btn.label}
            </motion.button>
          ))}
        </AnimatedSection>

        {/* Activities Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filtered.map((act, idx) => {
            const Icon = act.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-[#e6ccb2] border-2 border-[#084274]/15 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:border-[#084274]/30 transition-all duration-300 group overflow-hidden"
              >
                <div>
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <img
                      src={act.image}
                      alt={act.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-[#feeddb] text-[#084274] text-xs font-bold shadow-md border border-[#084274]/10">
                        {act.tag}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-white bg-[#084274]/90 px-2.5 py-1">
                        {act.level}
                      </span>
                      <div className="w-8 h-8 rounded-none bg-[#e3a044] text-[#084274] flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <h3 className="font-heading text-xl font-bold text-[#084274] mb-3 leading-snug">
                      {act.title}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-[#084274]/85 leading-relaxed mb-5">
                      {act.desc}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-[#084274]/15 mb-4">
                      <span className="text-[10px] font-bold text-[#e3a044] uppercase tracking-wider block">
                        Bénéfices constatés :
                      </span>
                      {act.benefits.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2 text-xs text-[#084274] font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#24a974] shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-[#084274]/10 mt-2">
                  <span className="text-[11px] text-[#084274]/70 font-semibold flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#e3a044]" />
                    {act.schedule}
                  </span>
                  <button
                    onClick={onOpenAdmissions}
                    className="text-xs font-bold text-[#084274] hover:text-[#e3a044] flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Inscrire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section: Planning Hebdomadaire des Ateliers (Interactive Schedule) */}
        <AnimatedSection direction="up" className="bg-[#084274] text-[#feeddb] p-6 sm:p-10 lg:p-14 border-2 border-[#084274] shadow-2xl mb-20">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#e3a044] block mb-2">
              Organisation & Créneaux
            </span>
            <TitreAnime as="h2" texte="Planning Hebdomadaire des Ateliers Parascolaires" className="font-heading text-3xl sm:text-4xl text-white tracking-tight leading-tight" />
            <p className="text-xs sm:text-sm text-[#feeddb]/80 mt-3 leading-relaxed font-body">
              Chaque jour de la semaine réserve des créneaux privilégiés après les cours pour approfondir un talent ou une passion.
            </p>
          </div>

          {/* Days buttons */}
          <div className="flex flex-wrap gap-2 mb-8">
            {(['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi'] as const).map((day) => (
              <motion.button
                key={day}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveDay(day)}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeDay === day
                    ? 'bg-[#e3a044] text-[#084274] shadow-md scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {day}
              </motion.button>
            ))}
          </div>

          {/* Schedule list */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {scheduleDays[activeDay].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/10 border border-white/15 p-5 flex flex-col justify-between transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-heading text-sm font-bold text-[#e3a044] flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {item.time}
                    </span>
                    <span className="text-[11px] text-white/70">{item.coach}</span>
                  </div>
                  <h4 className="font-heading text-base font-bold text-white mt-1">
                    {item.title}
                  </h4>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </AnimatedSection>

        {/* Section: Focus sur le Club d'Échecs */}
        <AnimatedSection direction="up" className="bg-[#e6ccb2] border-2 border-[#084274]/20 p-8 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#084274] text-[#feeddb] text-xs font-bold">
              <Trophy className="w-4 h-4 text-[#e3a044]" />
              <span>Pôle d'Excellence Stratégique</span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl text-[#084274]">
              Le Club d’Échecs des Marronniers : Former les Esprits de Demain
            </h3>
            <p className="font-body text-sm text-[#084274]/85 leading-relaxed">
              Le jeu d'échecs n'est pas un simple divertissement aux Marronniers : c'est un véritable outil pédagogique reconnu pour renforcer la concentration, la gestion du temps et la résolution méthodique de problèmes. Nos jeunes champions s'illustrent régulièrement dans les rencontres inter-écoles d'El Jadida et de la région.
            </p>
            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenAdmissions}
                className="giggle-button-primary text-xs sm:text-sm px-6 py-3 font-bold cursor-pointer"
              >
                Inscrire Mon Enfant aux Ateliers
              </motion.button>
            </div>
          </div>

          <motion.div whileHover={{ scale: 1.02 }} className="lg:col-span-4 bg-white/70 p-6 border border-[#084274]/15 shadow-sm space-y-3 text-xs text-[#084274] transition-all">
            <p className="font-heading font-bold text-sm text-[#084274]">
              Pourquoi les Échecs dès le CP ?
            </p>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#24a974] shrink-0 mt-0.5" />
              <span>Favorise la réussite en mathématiques et géométrie</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#24a974] shrink-0 mt-0.5" />
              <span>Canalise l'attention et réduit l'impulsivité</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#24a974] shrink-0 mt-0.5" />
              <span>Apprend le respect de l'adversaire et la sportivité</span>
            </div>
          </motion.div>
        </AnimatedSection>

      </div>

      <SectionDivider variant="white" position="bottom" style="wave1" />
    </div>
  );
};
