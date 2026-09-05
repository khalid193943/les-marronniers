/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Page "Notre École" (reconstruction enrichie)
 * Histoire → valeurs → parcours d'une famille (Timeline) → équipe détaillée.
 * Le texte de l'équipe reprend fidèlement la présentation officielle de l'école.
 */

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  Calendar, HeartHandshake, ShieldCheck, Sparkles, Users,
  MapPinned, HandHeart, GraduationCap, BadgeCheck,
} from 'lucide-react';
import { PageHero } from '../design-system/giggle/PageHero';
import { SectionIntro } from '../design-system/giggle/SectionIntro';
import { PhotoCollage } from '../design-system/giggle/PhotoCollage';
import { Squiggle } from '../design-system/giggle/Squiggle';
import { DoodleHeart, DoodleStar } from '../design-system/giggle/Doodles';
import { SectionDivider } from '../components/SectionDivider';
import { Timeline, type TimelineStep } from '../design-system/giggle/Timeline';

interface EcolePageProps {
  onOpenAdmissions: () => void;
}

const VALEURS = [
  { icon: HeartHandshake, title: 'Bienveillance', line: 'Une écoute attentive, au rythme de chaque enfant.', backer: '#d95f43', rotate: -2 },
  { icon: ShieldCheck, title: 'Sécurité', line: 'Protocoles rigoureux et encadrement permanent.', backer: '#e3a044', rotate: 2 },
  { icon: Sparkles, title: 'Curiosité', line: 'Le désir d’apprendre par l’expérimentation.', backer: '#5b8fd9', rotate: 2 },
  { icon: Users, title: 'Partenariat', line: 'Un dialogue transparent avec les familles.', backer: '#38926c', rotate: -2 },
];

const PARCOURS_FAMILLE: TimelineStep[] = [
  { icon: MapPinned, title: 'La Première Visite', line: 'Vous découvrez les campus, l’ambiance et rencontrez l’équipe, sans engagement.' },
  { icon: HandHeart, title: 'Une Intégration en Douceur', line: 'Votre enfant est accueilli par son prénom, à son rythme, dès les premiers jours.' },
  { icon: Users, title: 'Un Suivi au Quotidien', line: 'Cahier de liaison, rencontres et échanges réguliers tout au long de l’année.' },
  { icon: GraduationCap, title: 'Le Chemin vers le CE6', line: 'Une progression continue, sans rupture, de la crèche jusqu’à l’examen officiel.' },
];

const EQUIPE = [
  {
    role: 'Direction',
    line: 'Porte la vision pédagogique de l’école et accompagne chaque famille dès la première visite.',
  },
  {
    role: 'Enseignantes',
    line: 'Expérimentées, formées pour utiliser au mieux nos outils pédagogiques et didactiques.',
  },
  {
    role: 'Éducatrices',
    line: 'Formées pour connaître au mieux la psychologie et les besoins propres à chaque âge.',
  },
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

      {/* Histoire — collage + résumé */}
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

      {/* Le parcours d'une famille — timeline */}
      <section className="bg-[#feeddb] py-16 sm:py-24 overflow-hidden relative">
        <DoodleStar className="hidden lg:block absolute top-12 left-[8%] w-9 text-[#e3a044]/60 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <SectionIntro
            tag="Votre parcours avec nous"
            title="De la Première Visite au CE6"
            line="Un accompagnement continu, pensé étape par étape."
            className="mb-14"
          />
          <Timeline steps={PARCOURS_FAMILLE} />
        </div>
      </section>

      <SectionDivider variant="white" position="top" style="wave1" />

      {/* Équipe — enrichie avec texte officiel */}
      <section className="bg-white py-16 sm:py-24 overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <SectionIntro
            tag="Notre équipe"
            title="Des Adultes de Confiance"
            line="Une équipe stable, expérimentée et formée à la petite enfance."
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
            {EQUIPE.map((m, idx) => (
              <motion.div
                key={idx}
                initial={reduce ? undefined : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-[#084274]/6 border border-[#084274]/10 rounded-xl p-6 text-center"
              >
                <h3 className="font-heading text-lg text-[#084274] mb-2">{m.role}</h3>
                <p className="font-body text-sm text-[#084274]/70 leading-relaxed">{m.line}</p>
              </motion.div>
            ))}
          </div>

          {/* Bandeau engagement qualité (texte officiel) */}
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="flex items-start gap-4 bg-[#38926c]/8 border border-[#38926c]/20 rounded-xl p-6 max-w-3xl mx-auto mb-14"
          >
            <BadgeCheck className="w-6 h-6 text-[#1f8a63] shrink-0 mt-0.5" />
            <p className="font-body text-sm text-[#084274]/80 leading-relaxed">
              Notre équipe pédagogique est expérimentée, formée pour utiliser au mieux nos
              outils didactiques et pour connaître la psychologie et les besoins propres à
              chaque enfant — c’est l’engagement que nous prenons envers chaque famille.
            </p>
          </motion.div>

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
