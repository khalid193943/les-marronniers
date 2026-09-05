/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers - Why Families Choose Us & Enrolling Banner (Nouvelle Génération)
 */

import React from 'react';
import { TitreAnime } from './motion/Primitives';
import { Calendar, ArrowRight, HeartHandshake, ShieldCheck, Sparkles, GraduationCap, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface SchoolMissionProps {
  onOpenAdmissions: () => void;
}

export const SchoolMission: React.FC<SchoolMissionProps> = ({ onOpenAdmissions }) => {
  const bentoCards = [
    {
      icon: HeartHandshake,
      title: 'Pédagogie Bienveillante',
      desc: 'Chaque journée est pensée pour stimuler la curiosité spontanée, développer l’autonomie et respecter le rythme d’épanouissement de chaque enfant.',
      blueSkew: 'skew-y-[-1deg] rotate-1',
      orangeSkew: 'skew-y-[1deg] -rotate-1',
      badge: 'Écoute & Respect',
    },
    {
      icon: ShieldCheck,
      title: 'Cadre Sécurisant & Protecteur',
      desc: 'Deux campus dédiés à taille humaine où une équipe attentive et chaleureuse veille sur le bien-être émotionnel et physique des tout-petits et des écoliers.',
      blueSkew: 'skew-y-[1deg] -rotate-1',
      orangeSkew: 'skew-y-[-1deg] rotate-1',
      badge: 'Sécurité Maximale',
    },
    {
      icon: Sparkles,
      title: 'Apprentissage par l’Action & le Jeu',
      desc: 'Éveil scientifique précoce, manipulation tactile, cinéma-théâtre, musique et club d’échecs pour apprendre avec passion et sans appréhension.',
      blueSkew: 'skew-y-[-1.5deg] rotate-1',
      orangeSkew: 'skew-y-[1deg] -rotate-2',
      badge: 'Pratique & Créativité',
    },
    {
      icon: GraduationCap,
      title: 'Fondations Solides 2 ans → CE6',
      desc: 'Un parcours d’excellence continu de la Toute Petite Section (TPS) jusqu’au CE6, assurant une transition harmonieuse et fluide vers le collège.',
      blueSkew: 'skew-y-[1.5deg] -rotate-1',
      orangeSkew: 'skew-y-[-1deg] rotate-1',
      badge: 'Continuité d’Excellence',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white overflow-hidden relative">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16 sm:mb-20"
        >
          <div className="giggle-tag mb-6">
            <div className="giggle-dot" />
            <span className="uppercase tracking-wider text-[11px] sm:text-[13px]">POURQUOI NOUS CHOISIR</span>
          </div>
          <TitreAnime as="h2" texte="Pourquoi les Familles Choisissent Les Marronniers" className="font-heading text-4xl sm:text-5xl lg:text-[45px] font-normal not-italic text-[#084274] tracking-tight mb-6 leading-tight" />
          <p className="font-body text-base sm:text-lg text-[#084274]/80 leading-relaxed max-w-4xl mx-auto">
            Nous créons un espace serein, chaleureux et stimulant où chaque enfant se sent en pleine sécurité
            pour explorer, prendre confiance et grandir à travers des expériences d'apprentissage enrichissantes.
          </p>
        </motion.div>

        {/* Bento Grid 4 Cards with exact Tilted Backdrops & Modern SVGs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 max-w-5xl mx-auto mb-24">
          {bentoCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Back tilted orange shape */}
                <div
                  className={`absolute inset-0 bg-[#e3a044] transform ${card.orangeSkew} group-hover:scale-105 transition-all duration-300 opacity-90`}
                />

                {/* Middle tilted blue shape */}
                <div
                  className={`absolute inset-0 bg-[#084274] transform ${card.blueSkew} shadow-xl group-hover:scale-102 transition-all duration-300`}
                />

                {/* Main Card Content */}
                <div className="relative z-10 p-8 sm:p-10 text-center flex flex-col items-center justify-center min-h-[280px]">
                  
                  {/* Badge */}
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#e3a044] bg-white/10 px-3 py-1 mb-4">
                    {card.badge}
                  </span>

                  {/* High Quality Vector Icon */}
                  <div className="w-14 h-14 rounded-full bg-white/10 text-[#feeddb] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#e3a044] group-hover:text-[#084274] transition-all duration-300 shadow-inner">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#feeddb] mb-3">
                    {card.title}
                  </h3>

                  <p className="font-body text-sm sm:text-base text-white/90 leading-relaxed max-w-sm">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* High Converting Enrollment Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#feeddb] p-8 sm:p-12 lg:p-14 shadow-2xl border-2 border-[#084274]/15 max-w-6xl mx-auto relative overflow-hidden group"
        >
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#e3a044]/15 rounded-full blur-2xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            <div className="lg:col-span-8 flex flex-col items-start text-left">
              <div className="giggle-tag mb-4 bg-[#084274]/10 text-[#084274]">
                <div className="giggle-dot" />
                <span className="font-bold text-xs uppercase tracking-wider">Rentrée Scolaire 2026-2027</span>
              </div>

              <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#084274] tracking-tight mb-4">
                Les Inscriptions Sont Ouvertes
              </h3>

              <p className="font-body text-sm sm:text-base text-[#084274]/80 leading-relaxed mb-6 max-w-2xl">
                Nos effectifs par classe sont volontairement limités afin de garantir à chaque élève une écoute sur-mesure et un accompagnement de haute qualité. Planifiez une visite dès maintenant.
              </p>

              <div className="flex flex-wrap gap-4 text-xs font-semibold text-[#084274]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#e3a044]" />
                  Visite personnalisée des locaux
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#e3a044]" />
                  Rencontre avec l'équipe éducative
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#e3a044]" />
                  Dossier d'admission sans engagement
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-4">
              <button
                onClick={onOpenAdmissions}
                className="giggle-button-primary w-full py-4 px-8 text-[15px] font-bold shadow-xl hover:shadow-2xl cursor-pointer flex items-center justify-center gap-3 group"
              >
                <Calendar className="w-4 h-4 text-[#e3a044]" />
                <span>Prendre Rendez-vous</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-[11px] text-center text-[#084274]/60 font-body">
                Secrétariat joignable au 05 23 39 56 03
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
