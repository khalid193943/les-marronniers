/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Page "Notre École"
 * Consolide : about-etablissement + about-valeurs + about-equipe.
 * Texte minimal, PhotoStack, cartes inclinées, doodles.
 */

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Calendar, HeartHandshake, ShieldCheck, Sparkles, Users } from 'lucide-react';
import { PageHero } from '../design-system/giggle/PageHero';
import { SectionIntro } from '../design-system/giggle/SectionIntro';
import { PhotoStack } from '../design-system/giggle/PhotoStack';
import { PhotoCollage } from '../design-system/giggle/PhotoCollage';
import { Squiggle } from '../design-system/giggle/Squiggle';
import { DoodleHeart, DoodleStar } from '../design-system/giggle/Doodles';
import { SectionDivider } from '../components/SectionDivider';

interface EcolePageProps {
  onOpenAdmissions: () => void;
}

const VALEURS = [
  { icon: HeartHandshake, title: 'Bienveillance', line: 'Une écoute attentive, au rythme de chaque enfant.', backer: '#d95f43', rotate: -2 },
  { icon: ShieldCheck, title: 'Sécurité', line: 'Protocoles rigoureux et encadrement permanent.', backer: '#e3a044', rotate: 2 },
  { icon: Sparkles, title: 'Curiosité', line: 'Le désir d’apprendre par l’expérimentation.', backer: '#5b8fd9', rotate: 2 },
  { icon: Users, title: 'Partenariat', line: 'Un dialogue transparent avec les familles.', backer: '#38926c', rotate: -2 },
];

const EQUIPE = [
  { role: 'Direction', line: 'Une vision pédagogique portée depuis plus de 15 ans.' },
  { role: 'Enseignantes', line: 'Diplômées, formées à la pédagogie positive.' },
  { role: 'Éducatrices', line: 'Présentes à chaque instant auprès des tout-petits.' },
];

export const EcolePage: React.FC<EcolePageProps> = ({ onOpenAdmissions }) => {
  const reduce = useReducedMotion();

  return (
    <div>
      <PageHero
        tag="Notre école"
        title="Une École qui Grandit avec Vos Enfants"
        line="Depuis plus de 15 ans au cœur du Plateau, à El Jadida."
      />
      <SectionDivider variant="white" position="top" style="wave1" />

      {/* Histoire — 50/50 avec pile de photos */}
      <section className="bg-white py-16 sm:py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <PhotoCollage
            photos={[
              { src: 'https://cdn.prod.website-files.com/69c84428044e454b1b6c1405/6a14546f036a33ba6cc4b748_Images%20(1).avif', alt: 'La vie à l’école Les Marronniers' },
              { src: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80', alt: 'Une enseignante avec ses élèves' },
              { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80', alt: 'Atelier créatif' },
              { src: 'https://cdn.prod.website-files.com/69c84428044e454b1b6c1405/6a14546f37bdd99338f62c1c_Images%20(3).avif', alt: 'Enfants en activité' },
            ]}
          />
          <motion.div
            initial={reduce ? undefined : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionIntro
              tag="Notre histoire"
              title="Une Histoire de Confiance"
              line="Un établissement à taille humaine, de la crèche au CE6, où chaque famille est connue et chaque enfant accompagné."
              align="left"
            />
            <div className="flex flex-wrap gap-3 mt-8">
              {['2 campus au Plateau', '100 % réussite CE6', 'Trilingue FR · AR · EN'].map((t) => (
                <span key={t} className="rounded-full bg-[#084274]/8 px-4 py-2 text-xs font-bold text-[#084274]">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Valeurs — 4 cartes inclinées */}
      <section className="bg-white pb-20 sm:pb-28 overflow-hidden relative">
        <DoodleHeart className="hidden lg:block absolute top-6 right-16 w-10 text-[#d95f43]/40 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <SectionIntro tag="Nos valeurs" title="Ce qui Nous Guide" className="mb-14" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 max-w-5xl mx-auto">
            {VALEURS.map((v, idx) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={idx}
                  initial={reduce ? undefined : { opacity: 0, y: 30, rotate: v.rotate * 3 }}
                  whileInView={{ opacity: 1, y: 0, rotate: v.rotate }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ type: 'spring', stiffness: 55, damping: 13, delay: idx * 0.08 }}
                  whileHover={{ rotate: 0, y: -6 }}
                  className="relative group"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{ backgroundColor: v.backer, transform: `rotate(${-v.rotate * 1.6}deg) translate(8px, 8px)` }}
                  />
                  <div className="relative z-10 bg-[#084274] p-7 flex flex-col items-center text-center shadow-xl min-h-[220px] justify-center">
                    <Icon className="w-7 h-7 text-[#e3a044] mb-4" strokeWidth={1.8} />
                    <h3 className="font-heading text-xl text-[#feeddb] mb-2">{v.title}</h3>
                    <p className="font-body text-[13px] text-[#feeddb]/75 leading-relaxed">{v.line}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider variant="cream" position="top" style="wave2" />

      {/* Équipe — sobre */}
      <section className="bg-[#feeddb] py-16 sm:py-24 overflow-hidden relative">
        <DoodleStar className="hidden lg:block absolute bottom-10 left-[12%] w-8 text-[#e3a044]/60 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <SectionIntro
            tag="Notre équipe"
            title="Des Adultes de Confiance"
            line="Une équipe stable, formée et passionnée par la petite enfance."
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-14">
            {EQUIPE.map((m, idx) => (
              <motion.div
                key={idx}
                initial={reduce ? undefined : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-[#084274]/6 border border-[#084274]/10 p-6 text-center"
              >
                <h3 className="font-heading text-lg text-[#084274] mb-2">{m.role}</h3>
                <p className="font-body text-sm text-[#084274]/70 leading-relaxed">{m.line}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4">
            <Squiggle variant="curl-down" color="#d95f43" className="w-20 h-auto -mb-2" />
            <button onClick={onOpenAdmissions} className="giggle-button-primary cursor-pointer inline-flex items-center gap-3">
              <Calendar className="w-4 h-4 text-[#e3a044]" />
              <span>Venir nous rencontrer</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
