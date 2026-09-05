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
import { ColorCardsGrid, type ColorCard } from '../design-system/giggle/ColorCardsGrid';
import { DoodleSun, DoodleSpiral } from '../design-system/giggle/Doodles';
import { SectionDivider } from '../components/SectionDivider';

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
        title="Deux Campus Pensés pour Eux"
        line="Au cœur du Plateau, à El Jadida — sécurisés, lumineux, à taille d’enfant."
      />
      <SectionDivider variant="white" position="top" style="wave1" />

      {/* Campus Maternelle */}
      <section className="bg-white py-16 sm:py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <PhotoStack
            className="aspect-[4/3] max-w-md mx-auto w-full"
            photos={[
              { src: 'https://cdn.prod.website-files.com/69c84428044e454b1b6c1405/6a14546f37bdd99338f62c1c_Images%20(3).avif', alt: 'Campus crèche et maternelle' },
              { src: 'https://images.unsplash.com/photo-1596464716127-f2a829822301?auto=format&fit=crop&w=800&q=80', alt: 'Espace de jeu maternelle' },
            ]}
            backers={['#d95f43', '#084274']}
          />
          <motion.div
            initial={reduce ? undefined : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionIntro
              tag="Campus 1"
              title="Crèche & Maternelle"
              line="Un cocon doux et coloré où les tout-petits explorent en toute sécurité."
              align="left"
            />
            <a
              href={SCHOOL_INFO.campuses[0].mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-6 rounded-full bg-[#084274]/8 border border-[#084274]/12 px-5 py-2.5 text-sm font-bold text-[#084274] hover:bg-[#084274]/12 transition-colors"
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
            className="order-2 lg:order-1"
          >
            <SectionIntro
              tag="Campus 2"
              title="Primaire"
              line="Des classes calmes et bien équipées pour se concentrer et réussir."
              align="left"
            />
            <a
              href={SCHOOL_INFO.campuses[1].mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-6 rounded-full bg-[#084274]/8 border border-[#084274]/12 px-5 py-2.5 text-sm font-bold text-[#084274] hover:bg-[#084274]/12 transition-colors"
            >
              📍 {SCHOOL_INFO.campuses[1].address}
            </a>
          </motion.div>
          <PhotoStack
            className="order-1 lg:order-2 aspect-[4/3] max-w-md mx-auto w-full"
            photos={[
              { src: 'https://cdn.prod.website-files.com/69c84428044e454b1b6c1405/69c846a1048134d965991ee7_Office.avif', alt: 'Campus primaire' },
              { src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80', alt: 'Salle de classe primaire' },
            ]}
            backers={['#38926c', '#e3a044']}
          />
        </div>
      </section>

      <SectionDivider variant="cream" position="top" style="wave2" />

      {/* Nos espaces — barres dépliables */}
      <section className="bg-[#feeddb] py-16 sm:py-24 overflow-hidden relative">
        <DoodleSun className="hidden lg:block absolute top-10 right-[6%] w-11 text-[#e3a044]/60 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <SectionIntro
            tag="Nos espaces"
            title="Tout est Prévu"
            line="Touchez chaque espace pour découvrir ce qu’on y fait."
            className="mb-14"
          />
          <ExpandBars items={ESPACES} sideLabel="NOS ESPACES" />
        </div>
      </section>

      <SectionDivider variant="blue" position="top" style="wave2" />

      {/* Sécurité */}
      <section className="bg-[#084274] py-16 sm:py-24 overflow-hidden relative">
        <DoodleSpiral className="hidden lg:block absolute bottom-10 left-[6%] w-10 text-[#feeddb]/20 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <SectionIntro
            tag="Sécurité & bien-être"
            title="Votre Tranquillité, Notre Priorité"
            tone="dark"
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
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
                  className="bg-[#feeddb]/8 border border-[#feeddb]/15 rounded-2xl p-6 text-center"
                >
                  <Icon className="w-7 h-7 text-[#e3a044] mx-auto mb-3" strokeWidth={1.7} />
                  <h3 className="font-heading text-lg text-[#feeddb] mb-1.5">{s.title}</h3>
                  <p className="font-body text-[13px] text-[#feeddb]/70 leading-relaxed">{s.line}</p>
                </motion.div>
              );
            })}
          </div>
          <div className="text-center">
            <button onClick={onOpenAdmissions} className="cursor-pointer inline-flex items-center gap-3 bg-[#e3a044] text-[#084274] rounded-full px-8 py-4 font-bold text-[15px] hover:bg-[#f0b055] transition-colors">
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
            photos={[
              { src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80', alt: 'En classe aux Marronniers' },
              { src: 'https://images.unsplash.com/photo-1596464716127-f2a829822301?auto=format&fit=crop&w=800&q=80', alt: 'Atelier en maternelle' },
              { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80', alt: 'Activité créative' },
              { src: 'https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?auto=format&fit=crop&w=800&q=80', alt: 'Jeux dans la cour' },
            ]}
          />
          <div>
            <SectionIntro
              tag="Au quotidien"
              title="Des Espaces qui Donnent Envie de Venir"
              line="Chaque coin de l’école a été pensé pour que les enfants s’y sentent bien."
              align="left"
            />
            <ul className="mt-8 flex flex-col gap-3">
              {['Matériel importé d’Europe', 'Sols anti-choc dans toute la cour', 'Stationnement facile pour les parents', 'Accueil de 7h45 à 18h15'].map((item) => (
                <li key={item} className="flex items-center gap-3 font-body text-[15px] text-[#084274]/80">
                  <span className="w-5 h-5 rounded-full bg-[#e3a044] text-[#084274] flex items-center justify-center text-[11px] font-bold shrink-0">✓</span>
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
