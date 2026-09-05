/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — « Grandir aux Marronniers ».
 *
 * La section la plus colorée du site : quatre grands blocs pleins, dans la
 * palette enfantine validée (bleu, vert, jaune, rouge). Chaque bloc porte
 * un chiffre, un intitulé et une phrase. Ils entrent en cascade au scroll
 * et se soulèvent au survol. Angles nets, aucune photo — c'est un moment
 * de respiration graphique entre deux sections illustrées.
 */

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Smile, Sparkles, ShieldCheck, GraduationCap, ArrowUpRight } from 'lucide-react';
import { SectionIntro } from '../design-system/giggle/SectionIntro';
import { DoodleSun, DoodleHeart, DoodleStar } from '../design-system/giggle/Doodles';
import { Carousel } from '../design-system/giggle/Carousel';

interface ColorfulReasonsSectionProps {
  onOpenAdmissions: () => void;
}

const REASONS = [
  {
    icon: Smile,
    num: '01',
    title: 'On l’appelle par son prénom',
    line: 'Dans une école à taille humaine, chaque enfant est connu de toute l’équipe — pas seulement de sa maîtresse.',
    bg: '#0086d9',
    fg: '#ffffff',
    span: 'md:col-span-7',
  },
  {
    icon: Sparkles,
    num: '02',
    title: 'On apprend en jouant',
    line: 'Manipuler, tester, se tromper : les mains avant l’abstrait.',
    bg: '#ffc800',
    fg: '#00558d',
    span: 'md:col-span-5',
  },
  {
    icon: ShieldCheck,
    num: '03',
    title: 'On y est en sécurité',
    line: 'Accès contrôlé, sols anti-choc, un adulte présent partout et à chaque instant.',
    bg: '#e24c3d',
    fg: '#ffffff',
    span: 'md:col-span-5',
  },
  {
    icon: GraduationCap,
    num: '04',
    title: 'On va jusqu’au bout',
    line: 'De la Toute Petite Section au CE6, un seul chemin, sans rupture ni changement d’école.',
    bg: '#00a06b',
    fg: '#ffffff',
    span: 'md:col-span-7',
  },
];

export const ColorfulReasonsSection: React.FC<ColorfulReasonsSectionProps> = ({
  onOpenAdmissions,
}) => {
  const reduce = useReducedMotion();

  return (
    <section className="bg-[#fff7ef] py-20 sm:py-28 overflow-hidden relative">
      <DoodleSun className="hidden lg:block absolute top-16 left-[6%] w-11 text-[#ffc800] pointer-events-none" />
      <DoodleHeart className="hidden lg:block absolute bottom-24 right-[7%] w-10 text-[#e24c3d]/45 pointer-events-none" />
      <DoodleStar className="hidden xl:block absolute top-1/2 right-[3%] w-8 text-[#00a06b]/40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <SectionIntro
          tag="Grandir aux Marronniers"
          title="Quatre raisons de s’y sentir bien"
          line="Ce que les parents nous disent, après la première visite."
          className="mb-14"
        />

        <Carousel
          className="mb-14"
          desktopGrid="md:grid-cols-12"
          cardWidth="w-[80vw]"
          itemClasses={REASONS.map((r) => r.span)}
          aria-label="Raisons de choisir l’école"
        >
          {REASONS.map((r, idx) => {
            const Icon = r.icon;
            return (
              <motion.article
                key={idx}
                initial={reduce ? undefined : { opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-70px' }}
                transition={{
                  type: 'spring',
                  stiffness: 58,
                  damping: 14,
                  delay: idx * 0.1,
                }}
                whileHover={{ y: -7 }}
                className="relative h-full overflow-hidden p-7 sm:p-9 min-h-[220px] flex flex-col shadow-lg"
                style={{ backgroundColor: r.bg }}
              >
                {/* Chiffre en très grand, en filigrane */}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-6 -right-2 font-heading text-[8rem] leading-none opacity-15 select-none pointer-events-none"
                  style={{ color: r.fg }}
                >
                  {r.num}
                </span>

                <Icon
                  className="w-9 h-9 mb-auto shrink-0"
                  strokeWidth={1.6}
                  style={{ color: r.fg }}
                />

                <h3
                  className="relative z-10 font-heading text-2xl sm:text-3xl leading-tight mt-6 mb-2.5"
                  style={{ color: r.fg }}
                >
                  {r.title}
                </h3>
                <p
                  className="relative z-10 font-body font-medium text-[15px] leading-relaxed max-w-md"
                  style={{ color: r.fg, opacity: 0.92 }}
                >
                  {r.line}
                </p>
              </motion.article>
            );
          })}
        </Carousel>

        <div className="text-center">
          <button
            onClick={onOpenAdmissions}
            className="cursor-pointer inline-flex items-center gap-3 bg-[#00558d] hover:bg-[#0086d9] text-white font-body font-bold text-[15px] pl-8 pr-3 py-3.5 transition-colors group"
          >
            Venir voir par vous-même
            <span className="w-9 h-9 bg-[#ffc800] text-[#00558d] flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <ArrowUpRight className="w-4 h-4" strokeWidth={2.4} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
