/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Page "Actualités & Galerie"
 * Consolide : actualites + galerie.
 * Actus courtes + galerie façon polaroids inclinés.
 */

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { CalendarDays } from 'lucide-react';
import { PageHero } from '../design-system/giggle/PageHero';
import { SectionIntro } from '../design-system/giggle/SectionIntro';
import { DoodleSun, DoodleStar } from '../design-system/giggle/Doodles';
import { SectionDivider } from '../components/SectionDivider';
import { SocialSection } from '../components/SocialSection';

const ACTUS = [
  { date: 'Rentrée 2026-2027', title: 'Inscriptions Ouvertes', line: 'De la Toute Petite Section au CE6 — places limitées par classe.', backer: '#e3a044' },
  { date: 'Toute l’année', title: 'Ateliers d’Éveil', line: 'Théâtre, chant, cinéma et éveil scientifique dans nos salles dédiées.', backer: '#38926c' },
  { date: 'En vidéo', title: 'L’École Vue de l’Intérieur', line: 'Découvrez nos espaces et notre ambiance en images.', backer: '#d95f43' },
];

const GALERIE = [
  { src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80', alt: 'En classe', rot: -3 },
  { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80', alt: 'Atelier créatif', rot: 2 },
  { src: 'https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?auto=format&fit=crop&w=800&q=80', alt: 'Jeux en groupe', rot: 3 },
  { src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80', alt: 'Musique', rot: -2 },
  { src: 'https://images.unsplash.com/photo-1596464716127-f2a829822301?auto=format&fit=crop&w=800&q=80', alt: 'Petits explorateurs', rot: 2 },
  { src: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80', alt: 'Sourires', rot: -3 },
  { src: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=800&q=80', alt: 'Club d’échecs', rot: 3 },
  { src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80', alt: 'Éveil musical', rot: -2 },
];

export const ActualitesPage: React.FC = () => {
  const reduce = useReducedMotion();

  return (
    <div>
      <PageHero
        tag="Actualités & galerie"
        title="La Vie de l’École en Images"
        line="Ce qui se passe en ce moment aux Marronniers."
      />
      <SectionDivider variant="white" position="top" style="wave1" />

      {/* Actus — 3 cartes */}
      <section className="bg-white py-16 sm:py-24 overflow-hidden relative">
        <DoodleSun className="hidden lg:block absolute top-10 right-[8%] w-11 text-[#e3a044]/50 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <SectionIntro tag="En ce moment" title="Les Prochains Rendez-vous" className="mb-14" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 max-w-4xl mx-auto">
            {ACTUS.map((a, idx) => {
              const rotate = idx % 2 === 0 ? -2 : 2;
              return (
                <motion.article
                  key={idx}
                  initial={reduce ? undefined : { opacity: 0, y: 28, rotate: rotate * 3 }}
                  whileInView={{ opacity: 1, y: 0, rotate }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ type: 'spring', stiffness: 55, damping: 13, delay: idx * 0.08 }}
                  whileHover={{ rotate: 0, y: -5 }}
                  className="relative group"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{ backgroundColor: a.backer, transform: `rotate(${-rotate * 1.6}deg) translate(8px, 8px)` }}
                  />
                  <div className="relative z-10 bg-[#084274] p-7 shadow-lg min-h-[190px] flex flex-col">
                    <span className="inline-flex items-center gap-2 text-[11px] font-bold text-[#e3a044] mb-3">
                      <CalendarDays className="w-3.5 h-3.5" />
                      {a.date}
                    </span>
                    <h3 className="font-heading text-xl text-[#feeddb] mb-2">{a.title}</h3>
                    <p className="font-body text-[13px] text-[#feeddb]/70 leading-relaxed">{a.line}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <SocialSection />

      <SectionDivider variant="cream" position="top" style="wave2" />

      {/* Galerie polaroids */}
      <section className="bg-[#feeddb] py-16 sm:py-24 overflow-hidden relative">
        <DoodleStar className="hidden lg:block absolute top-12 left-[6%] w-9 text-[#d95f43]/50 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <SectionIntro tag="Galerie" title="Des Moments qui Comptent" className="mb-14" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {GALERIE.map((g, idx) => (
              <motion.figure
                key={idx}
                initial={reduce ? undefined : { opacity: 0, y: 30, rotate: g.rot * 2.5 }}
                whileInView={{ opacity: 1, y: 0, rotate: g.rot }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ type: 'spring', stiffness: 60, damping: 13, delay: (idx % 4) * 0.07 }}
                whileHover={{ rotate: 0, scale: 1.04, zIndex: 10 }}
                className="relative bg-white p-2.5 pb-8 shadow-lg cursor-pointer"
              >
                <img src={g.src} alt={g.alt} className="w-full aspect-square object-cover" loading="lazy" />
                <figcaption className="absolute bottom-2 left-0 right-0 text-center font-heading text-xs text-[#084274]/70">
                  {g.alt}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
