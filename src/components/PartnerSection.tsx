/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Partenariat Institut Français d'El Jadida.
 *
 * Refonte : le logo du partenaire n'apparaît plus qu'UNE fois, en signature
 * du bloc, au lieu d'être répété dans chaque carte. Les quatre axes sont
 * présentés comme des bénéfices concrets pour l'élève, avec une donnée forte
 * mise en avant. Texte d'introduction ramené à deux lignes.
 */

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Award, BookOpenText, Drama, GraduationCap, ArrowUpRight } from 'lucide-react';
import { PageId } from '../types';
import { SectionIntro } from '../design-system/giggle/SectionIntro';
import { DoodleStar } from '../design-system/giggle/Doodles';

interface PartnerSectionProps {
  onOpenAdmissions: () => void;
  onNavigate: (page: PageId) => void;
}

const AXES = [
  {
    icon: Award,
    title: 'Certifications Officielles',
    line: 'Nos élèves passent le DELF Prim sur place : un diplôme d’État français, reconnu à vie et partout dans le monde.',
    highlight: 'DELF Prim',
    tone: '#0086d9',
  },
  {
    icon: BookOpenText,
    title: 'Médiathèque & Culturethèque',
    line: 'Accès aux collections jeunesse de l’Institut et à la plateforme numérique, disponible à toute heure.',
    highlight: 'Accès illimité',
    tone: '#38926c',
  },
  {
    icon: Drama,
    title: 'Spectacles & Arts Vivants',
    line: 'Théâtre, cinéma d’animation et rencontres d’artistes intégrés au parcours scolaire.',
    highlight: 'Toute l’année',
    tone: '#d95f43',
  },
  {
    icon: GraduationCap,
    title: 'Formation des Enseignants',
    line: 'Nos professeurs sont accompagnés par les experts linguistiques de l’Institut Français.',
    highlight: 'Suivi continu',
    tone: '#e3a044',
  },
];

export const PartnerSection: React.FC<PartnerSectionProps> = ({ onOpenAdmissions }) => {
  const reduce = useReducedMotion();

  return (
    <section className="bg-white py-20 sm:py-28 overflow-hidden relative">
      <DoodleStar className="hidden lg:block absolute top-16 left-[6%] w-9 text-[#0086d9]/25 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <SectionIntro
          tag="Partenariat institutionnel"
          title="En Partenariat avec l’Institut Français"
          line="Quatre bénéfices concrets pour nos élèves, du diplôme reconnu à l’ouverture culturelle."
          className="mb-14"
        />

        {/* Les 4 axes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-14">
          {AXES.map((axe, idx) => {
            const Icon = axe.icon;
            return (
              <motion.article
                key={idx}
                initial={reduce ? undefined : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5 }}
                className="relative bg-[#084274]/[0.045] border border-[#084274]/10 rounded-2xl p-6 sm:p-7 overflow-hidden group"
              >
                {/* Filet coloré en haut de carte */}
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ backgroundColor: axe.tone }}
                />

                <div className="flex items-start justify-between gap-4 mb-4">
                  <span
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${axe.tone}1a`, color: axe.tone }}
                  >
                    <Icon className="w-6 h-6" strokeWidth={1.7} />
                  </span>
                  <span
                    className="rounded-full px-3 py-1.5 font-body text-[11px] font-bold whitespace-nowrap"
                    style={{ backgroundColor: `${axe.tone}1a`, color: axe.tone }}
                  >
                    {axe.highlight}
                  </span>
                </div>

                <h3 className="font-heading text-xl sm:text-[22px] text-[#084274] mb-2">
                  {axe.title}
                </h3>
                <p className="font-body text-sm text-[#084274]/70 leading-relaxed">
                  {axe.line}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Signature du partenaire — le logo, une seule fois */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#084274] rounded-2xl px-7 sm:px-10 py-7"
        >
          <div className="flex items-center gap-5">
            <span className="bg-white rounded-xl px-4 py-3 shrink-0">
              <img
                src="/assets/partner-institut-francais.svg"
                alt="Institut Français d'El Jadida"
                className="h-10 w-auto"
                loading="lazy"
              />
            </span>
            <p className="font-body text-sm text-[#feeddb]/85 leading-relaxed max-w-sm">
              Un partenariat qui ouvre à nos élèves les portes de la culture
              francophone, dès le primaire.
            </p>
          </div>

          <button
            onClick={onOpenAdmissions}
            className="cursor-pointer shrink-0 inline-flex items-center gap-3 rounded-full bg-[#e3a044] text-[#084274] font-body font-bold text-sm pl-6 pr-2 py-2 hover:bg-[#f0b055] transition-colors group"
          >
            Nous rencontrer
            <span className="w-8 h-8 rounded-full bg-[#084274] text-[#e3a044] flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <ArrowUpRight className="w-4 h-4" strokeWidth={2.2} />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
