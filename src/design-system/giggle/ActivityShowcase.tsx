/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Vitrine des activités.
 *
 * Une liste d'onglets à gauche, la photo et le détail à droite : chaque
 * atelier obtient une vraie place, avec sa photo et son bénéfice, au lieu
 * d'être réduit à une vignette d'icône. La photo se renouvelle en fondu
 * quand on change d'atelier.
 */

import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';
import { SmartImage } from './SmartImage';

export interface ShowcaseItem {
  icon: LucideIcon;
  title: string;
  /** Bénéfice en une phrase */
  line: string;
  /** Détail affiché quand l'atelier est sélectionné */
  detail: string;
  photo: { src: string; alt: string };
  /** Petite étiquette (lieu, fréquence…) */
  badge?: string;
}

interface ActivityShowcaseProps {
  items: ShowcaseItem[];
  className?: string;
}

export const ActivityShowcase: React.FC<ActivityShowcaseProps> = ({ items, className = '' }) => {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const current = items[active];

  return (
    <div className={`max-w-6xl mx-auto px-4 sm:px-8 ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

        {/* Liste des ateliers */}
        <div className="lg:col-span-5 flex flex-col gap-2.5">
          {items.map((item, idx) => {
            const Icon = item.icon;
            const isActive = idx === active;
            return (
              <motion.button
                key={idx}
                onClick={() => setActive(idx)}
                initial={reduce ? undefined : { opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                aria-pressed={isActive}
                className={`flex items-center gap-4 text-left rounded-2xl px-5 py-4 cursor-pointer transition-colors ${
                  isActive
                    ? 'bg-[#00558d] shadow-lg'
                    : 'bg-[#00558d]/6 hover:bg-[#00558d]/12'
                }`}
              >
                <span
                  className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isActive ? 'bg-[#e3a044] text-[#00558d]' : 'bg-[#00558d]/10 text-[#0086d9]'
                  }`}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.8} />
                </span>
                <span className="min-w-0 flex-1">
                  <span
                    className={`block font-heading text-lg leading-tight ${
                      isActive ? 'text-[#fff7ef]' : 'text-[#00558d]'
                    }`}
                  >
                    {item.title}
                  </span>
                  <span
                    className={`block font-body text-[13px] leading-snug mt-0.5 ${
                      isActive ? 'text-[#fff7ef]/70' : 'text-[#00558d]/60'
                    }`}
                  >
                    {item.line}
                  </span>
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Détail de l'atelier sélectionné */}
        <div className="lg:col-span-7 lg:sticky lg:top-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-[#e3a044] rounded-3xl"
                style={{ transform: 'rotate(-1.5deg) translate(10px, 10px)' }}
              />
              <div className="relative z-10 bg-white rounded-3xl overflow-hidden shadow-xl border border-[#00558d]/8">
                <div className="aspect-[16/10] relative">
                  <SmartImage
                    src={current.photo.src}
                    alt={current.photo.alt}
                    className="w-full h-full object-cover"
                  />
                  {current.badge && (
                    <span className="absolute top-4 left-4 rounded-full bg-white/95 backdrop-blur-sm px-4 py-1.5 font-body text-[11px] font-bold text-[#00558d] shadow">
                      {current.badge}
                    </span>
                  )}
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="font-heading text-2xl text-[#00558d] mb-2.5">{current.title}</h3>
                  <p className="font-body text-[15px] text-[#00558d]/75 leading-relaxed">
                    {current.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
