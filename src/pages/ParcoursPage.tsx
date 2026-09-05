/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Page "Parcours & Pédagogie"
 * Consolide : niveaux + niveaux-creche + niveaux-maternelle + niveaux-primaire + pedagogie.
 * Zigzag illustré (signature Giggle) + piliers pédagogiques.
 */

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Calendar, BookOpen, Puzzle, Languages, Brain } from 'lucide-react';
import { PageHero } from '../design-system/giggle/PageHero';
import { SectionIntro } from '../design-system/giggle/SectionIntro';
import { Squiggle } from '../design-system/giggle/Squiggle';
import { DoodleReading, DoodleBlocks, DoodleGrow, DoodleSun } from '../design-system/giggle/Doodles';
import { SectionDivider } from '../components/SectionDivider';

interface ParcoursPageProps {
  onOpenAdmissions: () => void;
}

const NIVEAUX = [
  {
    title: 'Crèche',
    line: 'Éveil sensoriel, sécurité affective et motricité libre, dès le plus jeune âge.',
    grades: ['TPS'],
    age: '2 – 3 ans',
    Doodle: DoodleReading,
    backer: '#d95f43',
    rotate: -2,
    side: 'left' as const,
    squiggle: { variant: 'loop-right' as const, color: '#38926c' },
  },
  {
    title: 'Maternelle',
    line: 'Langage, autonomie et créativité pour préparer le primaire en douceur.',
    grades: ['PS', 'MS', 'GS'],
    age: '3 – 5 ans',
    Doodle: DoodleBlocks,
    backer: '#e3a044',
    rotate: 2,
    side: 'right' as const,
    squiggle: { variant: 'loop-left' as const, color: '#d95f43' },
  },
  {
    title: 'Primaire',
    line: 'Français, maths, sciences et langues : des fondations solides jusqu’au CE6.',
    grades: ['CP', 'CE1', 'CE2', 'CE3', 'CE4', 'CE5', 'CE6'],
    age: '6 – 11 ans',
    Doodle: DoodleGrow,
    backer: '#38926c',
    rotate: -2,
    side: 'left' as const,
    squiggle: null,
  },
];

const PILIERS = [
  { icon: Puzzle, title: 'Apprendre en Jouant', line: 'Manipulation, jeu et expérimentation avant l’abstraction.' },
  { icon: Brain, title: 'Pédagogie Positive', line: 'Encourager, valoriser l’effort, respecter chaque rythme.' },
  { icon: Languages, title: 'Trois Langues', line: 'Français, arabe et anglais dès la maternelle.' },
  { icon: BookOpen, title: 'Fondamentaux Solides', line: 'Lecture, écriture, calcul travaillés chaque jour.' },
];

export const ParcoursPage: React.FC<ParcoursPageProps> = ({ onOpenAdmissions }) => {
  const reduce = useReducedMotion();

  return (
    <div>
      <PageHero
        tag="Nos programmes"
        title="Un Parcours pour Chaque Âge"
        line="De la crèche au CE6, un seul chemin, sans rupture."
      />

      {/* Zigzag des niveaux */}
      <section className="bg-[#feeddb] pb-20 sm:pb-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col">
            {NIVEAUX.map((n, idx) => {
              const { Doodle } = n;
              const isLeft = n.side === 'left';
              return (
                <React.Fragment key={idx}>
                  <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'} w-full`}>
                    <motion.div
                      initial={reduce ? undefined : { opacity: 0, y: 40, rotate: n.rotate * 3 }}
                      whileInView={{ opacity: 1, y: 0, rotate: n.rotate }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ type: 'spring', stiffness: 55, damping: 14 }}
                      whileHover={{ rotate: 0, y: -6 }}
                      className="relative w-full max-w-md lg:max-w-lg group"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                        style={{ backgroundColor: n.backer, transform: `rotate(${-n.rotate * 1.5}deg) translate(12px, 12px)` }}
                      />
                      <div className="relative z-10 bg-[#084274] p-8 sm:p-10 shadow-xl">
                        <Doodle className="w-full max-w-[250px] mx-auto text-[#feeddb] mb-6 opacity-95" />
                        <div className="flex items-center justify-between mb-3">
                          <h2 className="font-heading text-2xl sm:text-3xl text-[#feeddb]">{n.title}</h2>
                          <span className="rounded-full bg-[#feeddb]/12 px-3.5 py-1.5 font-body text-xs font-bold text-[#feeddb]">
                            {n.age}
                          </span>
                        </div>
                        <p className="font-body text-sm sm:text-[15px] text-[#feeddb]/75 leading-relaxed mb-5">
                          {n.line}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {n.grades.map((g) => (
                            <span key={g} className="px-2.5 py-1 text-[11px] font-bold text-[#e3a044] border border-[#e3a044]/40 rounded-full">
                              {g}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {n.squiggle && (
                    <div className={`hidden md:flex w-full ${isLeft ? 'justify-end pr-16 lg:pr-32' : 'justify-start pl-16 lg:pl-32'} -my-4`}>
                      <Squiggle variant={n.squiggle.variant} color={n.squiggle.color} className="w-44 lg:w-56 h-auto" />
                    </div>
                  )}
                  {idx < NIVEAUX.length - 1 && <div className="h-10 md:h-0" />}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider variant="white" position="top" style="wave1" />

      {/* Piliers pédagogiques */}
      <section className="bg-white py-16 sm:py-24 overflow-hidden relative">
        <DoodleSun className="hidden lg:block absolute top-12 right-[10%] w-11 text-[#e3a044]/50 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <SectionIntro
            tag="Notre pédagogie"
            title="Comment Nous Enseignons"
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto mb-14">
            {PILIERS.map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={idx}
                  initial={reduce ? undefined : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: idx * 0.07 }}
                  className="flex items-start gap-4 bg-[#084274]/6 border border-[#084274]/10 p-6"
                >
                  <span className="w-11 h-11 shrink-0 rounded-full bg-[#084274] text-[#e3a044] flex items-center justify-center">
                    <Icon className="w-5 h-5" strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg text-[#084274] mb-1">{p.title}</h3>
                    <p className="font-body text-sm text-[#084274]/70 leading-relaxed">{p.line}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center">
            <button onClick={onOpenAdmissions} className="giggle-button-primary cursor-pointer inline-flex items-center gap-3">
              <Calendar className="w-4 h-4 text-[#e3a044]" />
              <span>Inscrire mon enfant</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
