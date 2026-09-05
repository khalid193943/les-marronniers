/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Page "Nos Campus"
 * Consolide : locaux + securite-bien-etre.
 * Deux campus en 50/50 avec piles de photos + équipements en pilules + sécurité.
 */

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Calendar, ShieldCheck, HeartPulse, Footprints, Eye } from 'lucide-react';
import { PageHero } from '../design-system/giggle/PageHero';
import { SCHOOL_INFO } from '../data/schoolInfo';
import { SectionIntro } from '../design-system/giggle/SectionIntro';
import { PhotoStack } from '../design-system/giggle/PhotoStack';
import { PhotoCollage } from '../design-system/giggle/PhotoCollage';
import { ExpandBars, type ExpandBarItem } from '../design-system/giggle/ExpandBars';
import type { ColorCard } from '../design-system/giggle/ColorCardsGrid';
import { DoodleSun, DoodleSpiral } from '../design-system/giggle/Doodles';
import { SectionDivider } from '../components/SectionDivider';
import { PHOTOS } from '../data/photos';
import { Carousel } from '../design-system/giggle/Carousel';

interface CampusPageProps {
  onOpenAdmissions: () => void;
}

const ESPACES: ExpandBarItem[] = [
  {
    title: 'Salles de classe',
    color: 'navy',
    body: 'Six salles spacieuses, lumineuses et ensoleillées, meublées à la taille des enfants. Le matériel didactique est importé d’Europe et conçu par des spécialistes de la petite enfance.',
  },
  {
    title: 'Éveil scientifique',
    color: 'green',
    body: 'Un espace dédié à la manipulation sensorielle, à l’observation du vivant et à l’envie d’expérimenter. Les enfants touchent, testent et comprennent par eux-mêmes.',
  },
  {
    title: 'Cinéma & théâtre',
    color: 'sun',
    body: 'Une vraie salle pour les représentations, les projections pédagogiques, le chant et l’expression orale. C’est là que les plus timides trouvent leur voix.',
  },
  {
    title: 'Psychomotricité',
    color: 'coral',
    body: 'Modules mous, parcours d’équilibre et motricité globale dans un environnement entièrement sécurisé, pour explorer son corps sans crainte.',
  },
  {
    title: 'Cour & jardin',
    color: 'sky',
    body: 'Un extérieur arboré avec jeux importés d’Europe, revêtement anti-choc et anti-dérapant. Les enfants courent, grimpent et se dépensent en sécurité.',
  },
];

const SECURITE: ColorCard[] = [
  { icon: ShieldCheck, title: 'Accès Contrôlé', line: 'Entrées surveillées, remise des enfants aux seuls parents.', tone: 'sky' },
  { icon: Eye, title: 'Encadrement Permanent', line: 'Un adulte présent à chaque instant, partout.', tone: 'sun' },
  { icon: Footprints, title: 'Sols Amortissants', line: 'Revêtement anti-choc sur tous les espaces de jeu.', tone: 'coral' },
  { icon: HeartPulse, title: 'Hygiène & Santé', line: 'Protocoles rigoureux, locaux nettoyés chaque jour.', tone: 'green' },
];

export const CampusPage: React.FC<CampusPageProps> = ({ onOpenAdmissions }) => {
  const reduce = useReducedMotion();

  return (
    <div>
      <PageHero
        tag="Nos campus"
        title="Deux campus, deux âges, une même exigence"
        line="Au Plateau, à El Jadida : lumineux, sécurisés, à hauteur d’enfant."
      />
      <SectionDivider variant="white" position="top" style="wave1" />

      {/* Campus Maternelle */}
      <section className="bg-white py-16 sm:py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <PhotoStack
            className="order-2 lg:order-1 aspect-[4/3] max-w-md mx-auto w-full"
            photos={[
              PHOTOS.chorale,
              PHOTOS.fete,
            ]}
            backers={['#d95f43', '#0086d9']}
          />
          <motion.div
            initial={reduce ? undefined : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            <SectionIntro
              tag="Campus 1 · Rue Beethoven"
              title="Crèche & Maternelle"
              line="Un cocon doux et coloré où les tout-petits explorent en toute sécurité."
              align="left"
            />
            <ul className="mt-7 flex flex-col gap-2.5">
              {[
                'Salle de psychomotricité avec modules adaptés',
                'Cour-jardin au revêtement anti-choc',
                'Mobilier et jeux importés d’Europe',
                'Accueil dès 2 ans, en Toute Petite Section',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-[15px] text-[#00558d]/80">
                  <span className="w-5 h-5 rounded-full bg-[#0086d9] text-white flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5 keep-round">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={SCHOOL_INFO.campuses[0].mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-6 rounded-full bg-[#0086d9]/8 border border-[#0086d9]/12 px-5 py-2.5 text-sm font-bold text-[#0086d9] hover:bg-[#0086d9]/12 transition-colors keep-round"
            >
              📍 {SCHOOL_INFO.campuses[0].address}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Campus Primaire — inversé */}
      <section className="bg-white pb-16 sm:pb-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <motion.div
            initial={reduce ? undefined : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-1"
          >
            <SectionIntro
              tag="Campus 2 · Avenue Varennes"
              title="Primaire"
              line="Des classes calmes et bien équipées pour se concentrer et réussir."
              align="left"
            />
            <ul className="mt-7 flex flex-col gap-2.5">
              {[
                'Six salles lumineuses et spacieuses',
                'Salle d’éveil scientifique équipée',
                'Espace cinéma-théâtre pour l’expression',
                'Parcours continu du CP jusqu’au CE6',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-[15px] text-[#00558d]/80">
                  <span className="w-5 h-5 rounded-full bg-[#38926c] text-white flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5 keep-round">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={SCHOOL_INFO.campuses[1].mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-6 rounded-full bg-[#0086d9]/8 border border-[#0086d9]/12 px-5 py-2.5 text-sm font-bold text-[#0086d9] hover:bg-[#0086d9]/12 transition-colors keep-round"
            >
              📍 {SCHOOL_INFO.campuses[1].address}
            </a>
          </motion.div>
          <PhotoStack
            className="order-2 lg:order-2 aspect-[4/3] max-w-md mx-auto w-full"
            photos={[
              PHOTOS.musique,
              PHOTOS.lecture,
            ]}
            backers={['#38926c', '#e3a044']}
          />
        </div>
      </section>

      <SectionDivider variant="cream" position="top" style="wave2" />

      {/* Nos espaces — barres dépliables */}
      <section className="bg-[#fff7ef] py-16 sm:py-24 overflow-hidden relative">
        <DoodleSun className="hidden lg:block absolute top-10 right-[6%] w-11 text-[#e3a044]/60 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <SectionIntro
            tag="Nos espaces"
            title="Chaque espace a sa raison d’être"
            line="Touchez chaque espace pour découvrir ce qu’on y fait."
            className="mb-14"
          />
          <ExpandBars items={ESPACES} sideLabel="NOS ESPACES" />
        </div>
      </section>

      <SectionDivider variant="blue" position="top" style="wave2" />

      {/* Sécurité */}
      <section className="bg-[#0086d9] py-16 sm:py-24 overflow-hidden relative">
        <DoodleSpiral className="hidden lg:block absolute bottom-10 left-[6%] w-10 text-[#fff7ef]/20 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <SectionIntro
            tag="Sécurité & bien-être"
            title="Ce qui les protège, tous les jours"
            tone="dark"
            className="mb-14"
          />
          <Carousel className="mb-14" desktopGrid="md:grid-cols-4" cardWidth="w-[62vw]" aria-label="Sécurité et bien-être">
            {SECURITE.map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={idx}
                  initial={reduce ? undefined : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="bg-[#fff7ef]/8 border border-[#fff7ef]/15 rounded-2xl p-6 text-center"
                >
                  <Icon className="w-7 h-7 text-[#ffe08a] mx-auto mb-3" strokeWidth={1.7} />
                  <h3 className="font-heading text-lg text-[#fff7ef] mb-1.5">{s.title}</h3>
                  <p className="font-body text-[13px] text-[#fff7ef]/85 leading-relaxed">{s.line}</p>
                </motion.div>
              );
            })}
          </Carousel>
          <div className="text-center">
            <button onClick={onOpenAdmissions} className="cursor-pointer inline-flex items-center gap-3 bg-[#e3a044] text-[#0086d9] rounded-full px-8 py-4 font-bold text-[15px] hover:bg-[#f0b055] transition-colors keep-round">
              <Calendar className="w-4 h-4" />
              <span>Visiter les campus</span>
            </button>
          </div>
        </div>
      </section>

      {/* Collage photo de la vie sur les campus */}
      <SectionDivider variant="white" position="top" style="wave1" />
      <section className="bg-white py-16 sm:py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <PhotoCollage
            className="order-2 lg:order-1"
            photos={[
              PHOTOS.echecs,
              PHOTOS.simulateur,
              PHOTOS.spectacle,
              PHOTOS.classeAtelier,
            ]}
          />
          <div className="order-1 lg:order-2">
            <SectionIntro
              tag="Au quotidien"
              title="Des lieux où l’on a envie d’entrer"
              line="Chaque coin de l’école a été pensé pour que les enfants s’y sentent bien."
              align="left"
            />
            <ul className="mt-8 flex flex-col gap-3">
              {['Encadrement présent à chaque récréation', 'Espaces intérieurs et extérieurs pensés ensemble', 'Ambiance chaleureuse dès l’entrée', 'Accueil de 7h45 à 18h15, toute la semaine'].map((item) => (
                <li key={item} className="flex items-center gap-3 font-body text-[15px] text-[#00558d]/80">
                  <span className="w-5 h-5 rounded-full bg-[#e3a044] text-[#0086d9] flex items-center justify-center text-[11px] font-bold shrink-0 keep-round">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
