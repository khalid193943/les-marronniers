/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — "Suivez notre quotidien"
 * Les vraies actualités de l'école sont publiées sur Facebook & Instagram :
 * cette section y renvoie avec des cartes inclinées animées (vrais liens vérifiés).
 */

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Facebook, Instagram, Youtube, Star } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolInfo';
import { SectionIntro } from '../design-system/giggle/SectionIntro';
import { DoodleHeart } from '../design-system/giggle/Doodles';

const CHANNELS = [
  {
    icon: Facebook,
    name: 'Facebook',
    line: 'Photos, événements et annonces de l’école.',
    href: SCHOOL_INFO.social.facebook,
    handle: 'Les Marronniers El Jadida',
    backer: '#0086d9',
    rotate: -2,
  },
  {
    icon: Instagram,
    name: 'Instagram',
    line: 'Le quotidien des enfants en images.',
    href: SCHOOL_INFO.social.instagram,
    handle: '@lesmarronnierseljadida',
    backer: '#d95f43',
    rotate: 2,
  },
  {
    icon: Youtube,
    name: 'YouTube',
    line: 'L’école vue de l’intérieur, en vidéo.',
    href: SCHOOL_INFO.social.youtube,
    handle: 'Visite en vidéo',
    backer: '#e3a044',
    rotate: -2,
  },
  {
    icon: Star,
    name: 'Avis Google',
    line: 'Ce que les familles disent de nous.',
    href: SCHOOL_INFO.social.googleReviews,
    handle: 'Lire les avis',
    backer: '#38926c',
    rotate: 2,
  },
];

export const SocialSection: React.FC = () => {
  const reduce = useReducedMotion();

  return (
    <section className="bg-white py-16 sm:py-24 overflow-hidden relative">
      <DoodleHeart className="hidden lg:block absolute top-10 left-[8%] w-10 text-[#d95f43]/40 pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <SectionIntro
          tag="Suivez-nous"
          title="Notre Quotidien, en Direct"
          line="Les nouvelles fraîches de l’école sont publiées ici chaque semaine."
          className="mb-14"
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 max-w-4xl mx-auto">
          {CHANNELS.map((c, idx) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={idx}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                initial={reduce ? undefined : { opacity: 0, y: 26, rotate: c.rotate * 3 }}
                whileInView={{ opacity: 1, y: 0, rotate: c.rotate }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ type: 'spring', stiffness: 55, damping: 13, delay: idx * 0.08 }}
                whileHover={{ rotate: 0, y: -6, scale: 1.02 }}
                className="relative group block"
                aria-label={`${c.name} — ${c.handle}`}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                  style={{ backgroundColor: c.backer, transform: `rotate(${-c.rotate * 1.6}deg) translate(7px, 7px)` }}
                />
                <span className="relative z-10 bg-[#0086d9] p-6 flex flex-col items-center text-center shadow-lg min-h-[175px] justify-center">
                  <Icon className="w-7 h-7 text-[#ffe08a] mb-3" strokeWidth={1.7} />
                  <span className="font-heading text-lg text-[#fff7ef] mb-1">{c.name}</span>
                  <span className="font-body text-[12px] text-[#fff7ef]/85 leading-relaxed mb-2">{c.line}</span>
                  <span className="font-body text-[11px] font-bold text-[#ffe08a]">{c.handle}</span>
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
