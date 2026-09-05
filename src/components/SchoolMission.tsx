/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — "Pourquoi Nous Choisir" (refonte Giggle)
 * Règle : titre + 1 ligne par carte. Cartes carrées bleu marine inclinées
 * avec fond coloré décalé, exactement comme "Why Families Choose Us" de l'inspiration.
 * Bannière d'inscription : texte minimal à gauche, pile de photos à droite.
 */

import React from 'react';
import { Calendar, HeartHandshake, ShieldCheck, Sparkles, GraduationCap } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { SectionIntro } from '../design-system/giggle/SectionIntro';
import { PhotoStack } from '../design-system/giggle/PhotoStack';
import { DoodleStar, DoodleSun } from '../design-system/giggle/Doodles';
import { PHOTOS } from '../data/photos';

interface SchoolMissionProps {
  onOpenAdmissions: () => void;
}

const CARDS = [
  {
    icon: HeartHandshake,
    title: 'Pédagogie Bienveillante',
    line: 'Chaque enfant avance à son rythme, avec écoute et encouragement.',
    backer: '#e3a044',
    rotate: -2,
  },
  {
    icon: ShieldCheck,
    title: 'Cadre Sécurisant',
    line: 'Deux campus à taille humaine, une équipe attentive au quotidien.',
    backer: '#d95f43',
    rotate: 2,
  },
  {
    icon: Sparkles,
    title: 'Apprendre en Jouant',
    line: 'Théâtre, musique, échecs et éveil scientifique dès la maternelle.',
    backer: '#38926c',
    rotate: 2,
  },
  {
    icon: GraduationCap,
    title: 'Fondations Solides',
    line: 'Un parcours continu de 2 ans jusqu’au CE6, sans rupture.',
    backer: '#0086d9',
    rotate: -2,
  },
];

export const SchoolMission: React.FC<SchoolMissionProps> = ({ onOpenAdmissions }) => {
  const reduce = useReducedMotion();

  return (
    <section className="py-20 sm:py-28 bg-white overflow-hidden relative">
      {/* Doodles décoratifs discrets */}
      <DoodleSun className="hidden lg:block absolute top-24 left-12 w-12 text-[#ffe08a]/50 pointer-events-none" />
      <DoodleStar className="hidden lg:block absolute top-40 right-16 w-8 text-[#d95f43]/40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <SectionIntro
          tag="Pourquoi nous choisir"
          title="Un Lieu où l’Enfant se Sent Bien"
          line="Un espace serein et stimulant pour explorer, prendre confiance et grandir."
          className="mb-16 sm:mb-20"
        />

        {/* 4 cartes carrées inclinées — grille 2×2 comme l'inspiration */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-14 lg:gap-x-24 max-w-3xl mx-auto mb-24 sm:mb-32">
          {CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={
                  reduce
                    ? undefined
                    : { opacity: 0, y: 30, rotate: card.rotate * 3 }
                }
                whileInView={{ opacity: 1, y: 0, rotate: card.rotate }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  type: 'spring',
                  stiffness: 55,
                  damping: 13,
                  delay: idx * 0.08,
                }}
                whileHover={{ rotate: 0, y: -6 }}
                className="relative group"
              >
                {/* Fond coloré décalé */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                  style={{
                    backgroundColor: card.backer,
                    transform: `rotate(${-card.rotate * 1.6}deg) translate(10px, 10px)`,
                  }}
                />

                {/* Carte bleu marine */}
                <div className="relative z-10 bg-[#0086d9] p-8 sm:p-10 aspect-square flex flex-col items-center justify-center text-center shadow-xl">
                  <div className="w-14 h-14 rounded-full border-2 border-[#fff7ef]/30 text-[#fff7ef] flex items-center justify-center mb-5 group-hover:bg-[#e3a044] group-hover:border-[#e3a044] group-hover:text-[#0086d9] transition-colors duration-300 keep-round">
                    <Icon className="w-6 h-6" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl text-[#fff7ef] mb-3">
                    {card.title}
                  </h3>
                  <p className="font-body text-sm text-[#fff7ef]/85 leading-relaxed max-w-[240px]">
                    {card.line}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bannière inscription — texte minimal + pile de photos (comme "Now Enrolling" de l'inspiration) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center max-w-5xl mx-auto">
          <motion.div
            initial={reduce ? undefined : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[#e3a044]/15 px-4 py-1.5 text-xs font-bold text-[#0086d9] mb-5 keep-round">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e3a044] keep-round" />
              Rentrée 2026 – 2027
            </span>
            <h3 className="font-heading text-3xl sm:text-4xl text-[#0086d9] tracking-tight mb-4">
              Les Inscriptions Sont Ouvertes
            </h3>
            <p className="font-body text-base text-[#00558d]/70 leading-relaxed mb-8 max-w-md">
              Effectifs limités par classe. Venez visiter, rencontrer l’équipe et
              découvrir nos campus.
            </p>
            <button
              onClick={onOpenAdmissions}
              className="giggle-button-primary cursor-pointer inline-flex items-center gap-3"
            >
              <Calendar className="w-4 h-4 text-[#ffe08a]" />
              <span>Réserver une visite</span>
            </button>
          </motion.div>

          <PhotoStack
            className="order-1 lg:order-2 aspect-[4/3] max-w-md mx-auto w-full"
            photos={[
              PHOTOS.tennisTable,
              PHOTOS.peinture,
            ]}
            backers={['#e3a044', '#0086d9']}
          />
        </div>
      </div>
    </section>
  );
};
