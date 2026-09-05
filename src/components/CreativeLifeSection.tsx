/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Vie créative & culturelle.
 *
 * Refonte complète dans la palette enfantine vive (bleu, vert, jaune, rouge).
 * Quatre blocs pleine couleur en mosaïque : chacun porte sa photo en fond,
 * un aplat coloré par-dessus et son intitulé en grand. Au survol, l'aplat
 * s'efface pour révéler la photo et le détail monte depuis le bas.
 * Angles nets, rythme irrégulier — vivant sans être brouillon.
 */

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Theater, Music, Film, Crown, ArrowUpRight } from 'lucide-react';
import { SmartImage } from '../design-system/giggle/SmartImage';
import { SectionIntro } from '../design-system/giggle/SectionIntro';
import { DoodleStar, DoodleSpiral } from '../design-system/giggle/Doodles';
import { PHOTOS } from '../data/photos';
import { Carousel } from '../design-system/giggle/Carousel';

interface CreativeLifeSectionProps {
  onOpenAdmissions: () => void;
}

const ACTIVITIES = [
  {
    icon: Theater,
    title: 'Théâtre',
    line: 'Prendre la parole devant les autres, et y prendre goût.',
    detail: 'Diction, gestuelle, présence sur scène. C’est souvent là que les plus timides trouvent leur voix.',
    color: '#e24c3d',
    photo: PHOTOS.theatre,
    span: 'lg:col-span-6 lg:row-span-2',
    tall: true,
  },
  {
    icon: Crown,
    title: 'Échecs',
    line: 'Réfléchir avant d’agir.',
    detail: 'Logique, concentration, fair-play — des compétences qui servent bien au-delà de l’échiquier.',
    color: '#00a06b',
    photo: PHOTOS.echecs,
    span: 'lg:col-span-6 lg:row-span-1',
    tall: false,
  },
  {
    icon: Music,
    title: 'Musique & Chorale',
    line: 'Chanter ensemble, s’écouter.',
    detail: 'Éveil auditif, chant choral et découverte des instruments.',
    color: '#ffc800',
    photo: PHOTOS.chorale,
    span: 'lg:col-span-3 lg:row-span-1',
    tall: false,
    darkText: true,
  },
  {
    icon: Film,
    title: 'Cinéma & Débat',
    line: 'Regarder, comprendre, échanger.',
    detail: 'Des œuvres choisies, puis la discussion : formuler un avis, écouter celui des autres.',
    color: '#0086d9',
    photo: PHOTOS.spectacle,
    span: 'lg:col-span-3 lg:row-span-1',
    tall: false,
  },
];

export const CreativeLifeSection: React.FC<CreativeLifeSectionProps> = ({ onOpenAdmissions }) => {
  const reduce = useReducedMotion();

  return (
    <section className="bg-white py-20 sm:py-28 overflow-hidden relative">
      <DoodleStar className="hidden lg:block absolute top-14 left-[5%] w-9 text-[#ffc800] pointer-events-none" />
      <DoodleSpiral className="hidden lg:block absolute bottom-16 right-[5%] w-10 text-[#e24c3d]/40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <SectionIntro
          tag="Vie créative & culturelle"
          title="Apprendre autrement, chaque après-midi"
          line="Théâtre, échecs, musique, cinéma : chacun trouve son terrain."
          className="mb-14"
        />

        {/* Mosaïque colorée */}
        <Carousel
          className="mb-14"
          desktopGrid="md:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[190px]"
          cardWidth="w-[80vw]"
          itemClasses={ACTIVITIES.map((a) => a.span)}
          aria-label="Activités créatives"
        >
          {ACTIVITIES.map((a, idx) => {
            const Icon = a.icon;
            const fg = a.darkText ? '#00558d' : '#ffffff';
            return (
              <motion.article
                key={idx}
                initial={reduce ? undefined : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: idx * 0.09, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-full overflow-hidden group cursor-pointer min-h-[190px] shadow-lg"
              >
                {/* Photo en fond */}
                <SmartImage
                  src={a.photo.src}
                  alt={a.photo.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Aplat coloré qui s'efface au survol */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-[0.82]"
                  style={{ backgroundColor: a.color, opacity: 0.94 }}
                />

                {/* Contenu */}
                <div className="relative z-10 h-full p-6 sm:p-7 flex flex-col">
                  <Icon
                    className="w-8 h-8 mb-auto shrink-0"
                    strokeWidth={1.6}
                    style={{ color: fg }}
                  />

                  <h3
                    className={`font-heading leading-tight mt-5 mb-1.5 ${
                      a.tall ? 'text-3xl sm:text-4xl' : 'text-2xl'
                    }`}
                    style={{ color: fg }}
                  >
                    {a.title}
                  </h3>
                  <p
                    className="font-body font-medium text-[14px] leading-snug"
                    style={{ color: fg, opacity: 0.9 }}
                  >
                    {a.line}
                  </p>

                  {/* Détail révélé au survol.
                      La grille 0fr → 1fr s'ajuste à la hauteur réelle du
                      texte : contrairement à un max-height fixe, aucune
                      phrase ne peut être coupée. */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                    <p
                      className="font-body text-[13px] leading-relaxed overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:pt-3"
                      style={{ color: fg }}
                    >
                      {a.detail}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </Carousel>

        <div className="text-center">
          <button
            onClick={onOpenAdmissions}
            className="cursor-pointer inline-flex items-center gap-3 bg-[#0086d9] hover:bg-[#006cb3] text-white font-body font-bold text-[15px] pl-8 pr-3 py-3.5 transition-colors group"
          >
            Découvrir tous nos ateliers
            <span className="w-9 h-9 bg-[#ffc800] text-[#00558d] flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <ArrowUpRight className="w-4 h-4" strokeWidth={2.4} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
