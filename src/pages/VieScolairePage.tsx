/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Page "Vie Scolaire & Activités"
 * Consolide : vie-scolaire + activites.
 * Journée type en fil vertical + grille d'activités courte.
 */

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Theater, Music, Film, Crown, FlaskConical, PersonStanding, Sun, Utensils, BookOpen, Palette, Home } from 'lucide-react';
import { PageHero } from '../design-system/giggle/PageHero';
import { SectionIntro } from '../design-system/giggle/SectionIntro';
import { Squiggle } from '../design-system/giggle/Squiggle';
import { DoodlePaint, DoodleStar } from '../design-system/giggle/Doodles';
import { SectionDivider } from '../components/SectionDivider';

const JOURNEE = [
  { time: '8h15', icon: Sun, title: 'Accueil en douceur', line: 'Chaque enfant est accueilli par son prénom.' },
  { time: '9h00', icon: BookOpen, title: 'Apprentissages', line: 'Langage, lecture, calcul — le matin, quand l’attention est là.' },
  { time: '12h00', icon: Utensils, title: 'Déjeuner & pause', line: 'Repas équilibré puis temps calme ou sieste.' },
  { time: '14h00', icon: Palette, title: 'Ateliers créatifs', line: 'Théâtre, musique, arts, éveil scientifique.' },
  { time: '16h30', icon: Home, title: 'Retour en famille', line: 'Sortie sécurisée et échanges avec les parents.' },
];

const ACTIVITES = [
  { icon: Theater, title: 'Théâtre', line: 'Prendre la parole avec confiance.', backer: '#d95f43' },
  { icon: Crown, title: 'Échecs', line: 'Logique, concentration, fair-play.', backer: '#e3a044' },
  { icon: Music, title: 'Musique', line: 'Chant choral et découverte du rythme.', backer: '#5b8fd9' },
  { icon: Film, title: 'Cinéma', line: 'Regarder, comprendre, débattre.', backer: '#38926c' },
  { icon: FlaskConical, title: 'Éveil Scientifique', line: 'Observer et expérimenter le vivant.', backer: '#e3a044' },
  { icon: PersonStanding, title: 'Psychomotricité', line: 'Bouger, s’équilibrer, se dépasser.', backer: '#d95f43' },
];

export const VieScolairePage: React.FC = () => {
  const reduce = useReducedMotion();

  return (
    <div>
      <PageHero
        tag="Vie scolaire"
        title="Des Journées qui Donnent Envie"
        line="Un rythme pensé pour apprendre, jouer et se reposer."
      />
      <SectionDivider variant="white" position="top" style="wave1" />

      {/* Journée type — fil vertical */}
      <section className="bg-white py-16 sm:py-24 overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <SectionIntro tag="Une journée type" title="Le Rythme d’une Journée" className="mb-14" />
          <div className="relative">
            {/* Fil vertical pointillé */}
            <span aria-hidden="true" className="absolute left-[27px] sm:left-1/2 top-2 bottom-2 border-l-2 border-dashed border-[#084274]/20" />
            <div className="flex flex-col gap-10">
              {JOURNEE.map((j, idx) => {
                const Icon = j.icon;
                const isLeft = idx % 2 === 0;
                return (
                  <motion.div
                    key={idx}
                    initial={reduce ? undefined : { opacity: 0, x: isLeft ? -24 : 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, delay: idx * 0.06 }}
                    className={`relative flex items-start gap-5 sm:w-1/2 ${
                      isLeft ? 'sm:pr-10' : 'sm:ml-auto sm:pl-10'
                    }`}
                  >
                    <span className="relative z-10 w-14 h-14 shrink-0 rounded-full bg-[#084274] text-[#e3a044] flex items-center justify-center shadow-md">
                      <Icon className="w-6 h-6" strokeWidth={1.8} />
                    </span>
                    <div className="bg-[#084274]/6 border border-[#084274]/10 p-5 flex-1">
                      <div className="flex items-center gap-3 mb-1.5">
                        <span className="font-heading text-base text-[#e3a044] font-bold">{j.time}</span>
                        <h3 className="font-heading text-lg text-[#084274]">{j.title}</h3>
                      </div>
                      <p className="font-body text-sm text-[#084274]/70 leading-relaxed">{j.line}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="cream" position="top" style="wave2" />

      {/* Activités — 6 cartes courtes */}
      <section className="bg-[#feeddb] py-16 sm:py-24 overflow-hidden relative">
        <DoodleStar className="hidden lg:block absolute top-12 left-[8%] w-9 text-[#d95f43]/50 pointer-events-none" />
        <DoodlePaint className="hidden xl:block absolute bottom-8 right-[4%] w-40 text-[#084274]/15 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <SectionIntro
            tag="Nos ateliers"
            title="Plus de 15 Activités d’Éveil"
            line="Chaque enfant trouve son terrain d’expression favori."
            className="mb-14"
          />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-4xl mx-auto">
            {ACTIVITES.map((a, idx) => {
              const Icon = a.icon;
              const rotate = idx % 2 === 0 ? -2 : 2;
              return (
                <motion.div
                  key={idx}
                  initial={reduce ? undefined : { opacity: 0, y: 26, rotate: rotate * 3 }}
                  whileInView={{ opacity: 1, y: 0, rotate }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ type: 'spring', stiffness: 55, damping: 13, delay: (idx % 3) * 0.08 }}
                  whileHover={{ rotate: 0, y: -5 }}
                  className="relative group"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{ backgroundColor: a.backer, transform: `rotate(${-rotate * 1.6}deg) translate(7px, 7px)` }}
                  />
                  <div className="relative z-10 bg-[#084274] p-6 sm:p-7 flex flex-col items-center text-center shadow-lg min-h-[170px] justify-center">
                    <Icon className="w-7 h-7 text-[#e3a044] mb-3" strokeWidth={1.7} />
                    <h3 className="font-heading text-lg text-[#feeddb] mb-1.5">{a.title}</h3>
                    <p className="font-body text-xs sm:text-[13px] text-[#feeddb]/70 leading-relaxed">{a.line}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="hidden md:flex justify-center mt-4">
            <Squiggle variant="wave-down" color="#38926c" className="w-14 h-auto opacity-70" />
          </div>
        </div>
      </section>
    </div>
  );
};
