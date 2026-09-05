/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — "Un Parcours pour Chaque Âge"
 * Réplique de la section signature de l'inspiration Giggle ("Learning Paths") :
 * cartes bleu marine inclinées avec illustrations dessinées à la main,
 * fonds colorés décalés, en zigzag gauche/droite, reliées par des flèches gribouillées.
 * Peu de texte : titre + 1 phrase + badge d'âge. C'est tout.
 */

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { PageId } from '../types';
import { SectionIntro } from '../design-system/giggle/SectionIntro';
import { Squiggle } from '../design-system/giggle/Squiggle';
import {
  DoodleReading,
  DoodleBlocks,
  DoodlePaint,
  DoodleGrow,
} from '../design-system/giggle/Doodles';

interface ParcoursSectionProps {
  onNavigate: (page: PageId) => void;
}

const STAGES = [
  {
    id: 'niveaux-creche' as PageId,
    title: 'Petits Explorateurs',
    line: 'Éveil sensoriel en douceur : jeu libre, motricité et premiers rituels rassurants.',
    age: '2 – 3 ans',
    level: 'Crèche & TPS',
    Doodle: DoodleReading,
    backer: '#d95f43', // corail
    rotate: -2,
    side: 'left' as const,
    squiggle: { variant: 'loop-right' as const, color: '#38926c' },
  },
  {
    id: 'niveaux-maternelle' as PageId,
    title: 'Curieux Apprentis',
    line: 'Langage, créativité et autonomie à travers des ateliers guidés et le jeu.',
    age: '3 – 5 ans',
    level: 'PS · MS · GS',
    Doodle: DoodleBlocks,
    backer: '#e3a044', // moutarde
    rotate: 2,
    side: 'right' as const,
    squiggle: { variant: 'loop-left' as const, color: '#d95f43' },
  },
  {
    id: 'niveaux-primaire' as PageId,
    title: 'Beaux Départs',
    line: 'Lecture, écriture, calcul : des fondations solides dans un rythme serein.',
    age: '6 – 8 ans',
    level: 'CP · CE1 · CE2',
    Doodle: DoodlePaint,
    backer: '#0086d9', // bleu ciel
    rotate: -2,
    side: 'left' as const,
    squiggle: { variant: 'loop-right' as const, color: '#0086d9' },
  },
  {
    id: 'niveaux-primaire' as PageId,
    title: 'Prêts à Grandir',
    line: 'Confiance, méthode et esprit critique jusqu’à la réussite du CE6.',
    age: '9 – 11 ans',
    level: 'CM1 → CE6',
    Doodle: DoodleGrow,
    backer: '#38926c', // vert
    rotate: 2,
    side: 'right' as const,
    squiggle: null,
  },
];

export const ParcoursSection: React.FC<ParcoursSectionProps> = ({ onNavigate }) => {
  const reduce = useReducedMotion();

  return (
    <section className="bg-[#fff7ef] py-20 sm:py-28 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <SectionIntro
          tag="Nos programmes"
          title="Un Parcours pour Chaque Âge"
          line="De la crèche au CE6, chaque étape est pensée pour grandir avec confiance."
          className="mb-16 sm:mb-20"
        />

        <div className="flex flex-col">
          {STAGES.map((stage, idx) => {
            const { Doodle } = stage;
            const isLeft = stage.side === 'left';

            return (
              <React.Fragment key={idx}>
                <div
                  className={`flex ${
                    isLeft ? 'justify-start' : 'justify-end'
                  } w-full`}
                >
                  {/* Carte inclinée avec fond coloré décalé */}
                  <motion.button
                    onClick={() => onNavigate(stage.id)}
                    initial={
                      reduce
                        ? undefined
                        : { opacity: 0, y: 40, rotate: stage.rotate * 3 }
                    }
                    whileInView={{ opacity: 1, y: 0, rotate: stage.rotate }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ type: 'spring', stiffness: 55, damping: 14 }}
                    whileHover={{ rotate: 0, scale: 1.02, y: -6 }}
                    whileTap={{ scale: 0.99 }}
                    className="relative w-full max-w-md lg:max-w-lg text-left cursor-pointer group focus-visible:outline-4"
                    aria-label={`${stage.title}, ${stage.age}`}
                  >
                    {/* Fond coloré décalé */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 translate-x-3 translate-y-3 transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4"
                      style={{
                        backgroundColor: stage.backer,
                        transform: `rotate(${-stage.rotate * 1.5}deg) translate(12px, 12px)`,
                      }}
                    />

                    {/* Carte bleu marine */}
                    <span className="relative z-10 block bg-[#0086d9] p-8 sm:p-10 shadow-xl">
                      {/* Illustration dessinée à la main */}
                      <Doodle className="w-full max-w-[260px] mx-auto text-[#fff7ef] mb-6 opacity-95" />

                      <span className="block font-heading text-2xl sm:text-3xl text-[#fff7ef] mb-2">
                        {stage.title}
                      </span>
                      <span className="block font-body text-sm sm:text-[15px] text-[#fff7ef]/85 leading-relaxed mb-5">
                        {stage.line}
                      </span>

                      <span className="flex items-center justify-between">
                        <span className="font-body text-xs font-bold text-[#ffe08a] tracking-wide">
                          {stage.level}
                        </span>
                        <span className="inline-flex items-center rounded-full bg-[#fff7ef]/12 px-3.5 py-1.5 font-body text-xs font-bold text-[#fff7ef]">
                          {stage.age}
                        </span>
                      </span>
                    </span>
                  </motion.button>
                </div>

                {/* Flèche gribouillée vers la carte suivante */}
                {stage.squiggle && (
                  <div
                    className={`hidden md:flex w-full ${
                      isLeft ? 'justify-end pr-16 lg:pr-32' : 'justify-start pl-16 lg:pl-32'
                    } -my-4`}
                  >
                    <Squiggle
                      variant={stage.squiggle.variant}
                      color={stage.squiggle.color}
                      className="w-44 lg:w-56 h-auto"
                    />
                  </div>
                )}

                {/* Espacement mobile entre cartes */}
                {idx < STAGES.length - 1 && <div className="h-10 md:h-0" />}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};
