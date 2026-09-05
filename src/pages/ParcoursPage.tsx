/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Page "Parcours & Pédagogie"
 * Consolide : niveaux + niveaux-creche + niveaux-maternelle + niveaux-primaire + pedagogie.
 * Zigzag illustré (signature Giggle) + piliers pédagogiques.
 */

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { BookOpen, Puzzle, Languages, Brain } from 'lucide-react';
import { PageHero } from '../design-system/giggle/PageHero';
import { Squiggle } from '../design-system/giggle/Squiggle';
import { DoodleReading, DoodleBlocks, DoodleGrow, DoodleSun } from '../design-system/giggle/Doodles';
import { SectionDivider } from '../components/SectionDivider';
import { ColorCardsGrid, type ColorCard } from '../design-system/giggle/ColorCardsGrid';
import { ChecklistSplit } from '../design-system/giggle/ChecklistSplit';

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

const PILIERS: ColorCard[] = [
  { icon: Puzzle, title: 'Apprendre en Jouant', line: 'Manipulation, jeu et expérimentation avant l’abstraction.', tone: 'sky' },
  { icon: Brain, title: 'Pédagogie Positive', line: 'Encourager, valoriser l’effort, respecter chaque rythme.', tone: 'sun' },
  { icon: Languages, title: 'Trois Langues', line: 'Français, arabe et anglais dès la maternelle.', tone: 'coral' },
  { icon: BookOpen, title: 'Fondamentaux Solides', line: 'Lecture, écriture, calcul travaillés chaque jour.', tone: 'green' },
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
      <section className="bg-[#fff7ef] pb-20 sm:pb-28 overflow-hidden">
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
                      <div className="relative z-10 bg-[#0086d9] p-8 sm:p-10 shadow-xl">
                        <Doodle className="w-full max-w-[250px] mx-auto text-[#fff7ef] mb-6 opacity-95" />
                        <div className="flex items-center justify-between mb-3">
                          <h2 className="font-heading text-2xl sm:text-3xl text-[#fff7ef]">{n.title}</h2>
                          <span className="rounded-full bg-[#fff7ef]/12 px-3.5 py-1.5 font-body text-xs font-bold text-[#fff7ef]">
                            {n.age}
                          </span>
                        </div>
                        <p className="font-body text-sm sm:text-[15px] text-[#fff7ef]/85 leading-relaxed mb-5">
                          {n.line}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {n.grades.map((g) => (
                            <span key={g} className="px-2.5 py-1 text-[11px] font-bold text-[#ffe08a] border border-[#e3a044]/40 rounded-full">
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

      {/* Trilinguisme & transition — checklist + collage */}
      <section className="bg-white py-16 sm:py-24 overflow-hidden">
        <ChecklistSplit
          tag="Trois langues, un seul enfant"
          title="Une Transition Sans Rupture, du Premier Jour au CE6"
          line="Le français, l’arabe et l’anglais s’installent dès la maternelle, au même rythme que la confiance."
          items={[
            'Langage et vocabulaire construits dès la Toute Petite Section',
            'Arabe et anglais introduits progressivement en maternelle',
            'Lecture, écriture et calcul consolidés chaque jour au primaire',
            'Un même repère pédagogique de la crèche jusqu’à l’examen du CE6',
          ]}
          photos={[
            { src: 'https://images.unsplash.com/photo-1596464716127-f2a829822301?auto=format&fit=crop&w=700&q=80', alt: 'Apprentissage du langage en maternelle' },
            { src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=700&q=80', alt: 'Classe de primaire' },
            { src: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=700&q=80', alt: 'Enfant concentré' },
            { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=80', alt: 'Activité de lecture' },
          ]}
        />
      </section>

      <SectionDivider variant="cream" position="top" style="wave2" />

      {/* Piliers pédagogiques */}
      <section className="bg-[#fff7ef] py-16 sm:py-24 overflow-hidden relative">
        <DoodleSun className="hidden lg:block absolute top-12 right-[10%] w-11 text-[#e3a044]/50 pointer-events-none" />
        <ColorCardsGrid
          heading="Une pédagogie qui donne envie d’apprendre, chaque jour."
          ctaLabel="Inscrire mon enfant"
          onCta={onOpenAdmissions}
          cards={PILIERS}
        />
      </section>
    </div>
  );
};
