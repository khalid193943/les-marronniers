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
import { SectionIntro } from '../design-system/giggle/SectionIntro';
import { PhotoStack } from '../design-system/giggle/PhotoStack';
import { DoodleSun, DoodleSpiral } from '../design-system/giggle/Doodles';
import { SectionDivider } from '../components/SectionDivider';

interface CampusPageProps {
  onOpenAdmissions: () => void;
}

const EQUIPEMENTS = [
  '6 salles de classe lumineuses',
  'Salle d’éveil scientifique',
  'Espace cinéma & théâtre',
  'Salle de psychomotricité',
  'Grande cour & jardin arboré',
  'Sol anti-choc & anti-dérapant',
  'Matériel importé d’Europe',
  'Stationnement à proximité',
];

const SECURITE = [
  { icon: ShieldCheck, title: 'Accès Contrôlé', line: 'Entrées surveillées, remise des enfants aux seuls parents.' },
  { icon: Eye, title: 'Encadrement Permanent', line: 'Un adulte présent à chaque instant, partout.' },
  { icon: Footprints, title: 'Sols Amortissants', line: 'Revêtement anti-choc sur tous les espaces de jeu.' },
  { icon: HeartPulse, title: 'Hygiène & Santé', line: 'Protocoles rigoureux, locaux nettoyés chaque jour.' },
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

      {/* Équipements en pilules */}
      <section className="bg-[#feeddb] py-16 sm:py-20 overflow-hidden relative">
        <DoodleSun className="hidden lg:block absolute top-10 right-[8%] w-11 text-[#e3a044]/60 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <SectionIntro tag="Équipements" title="Tout est Prévu" className="mb-10" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
            className="flex flex-wrap justify-center gap-3"
          >
            {EQUIPEMENTS.map((e) => (
              <motion.span
                key={e}
                variants={{
                  hidden: reduce ? {} : { opacity: 0, y: 12, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                className="rounded-full bg-[#084274]/8 border border-[#084274]/12 px-5 py-2.5 text-sm font-semibold text-[#084274]"
              >
                {e}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      <SectionDivider variant="blue" position="top" style="wave2" />

      {/* Sécurité — section bleu marine */}
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
                  className="bg-[#feeddb]/8 border border-[#feeddb]/15 p-6 text-center"
                >
                  <Icon className="w-7 h-7 text-[#e3a044] mx-auto mb-3" strokeWidth={1.7} />
                  <h3 className="font-heading text-lg text-[#feeddb] mb-1.5">{s.title}</h3>
                  <p className="font-body text-[13px] text-[#feeddb]/70 leading-relaxed">{s.line}</p>
                </motion.div>
              );
            })}
          </div>
          <div className="text-center">
            <button onClick={onOpenAdmissions} className="giggle-button-accent cursor-pointer inline-flex items-center gap-3 bg-[#e3a044] text-[#084274] rounded-full px-8 py-4 font-bold text-[15px] hover:bg-[#f0b055] transition-colors">
              <Calendar className="w-4 h-4" />
              <span>Visiter les campus</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
