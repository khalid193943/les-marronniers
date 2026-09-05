/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Barres colorées empilées et dépliables.
 * Inspiré de la référence "What Moves You" : bandes pleine largeur aux couleurs
 * franches, numéro en exposant, gros titre, bouton flèche rond, étoile dessinée
 * en filigrane, et ouverture animée d'un texte à droite.
 */

import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export interface ExpandBarItem {
  title: string;
  body: string;
  /** Couleur de fond de la barre */
  color: 'green' | 'navy' | 'sun' | 'coral' | 'sky';
}

interface ExpandBarsProps {
  items: ExpandBarItem[];
  /** Texte vertical géant à gauche (desktop uniquement) */
  sideLabel?: string;
  className?: string;
}

const COLORS: Record<ExpandBarItem['color'], { bg: string; fg: string; dim: string }> = {
  green: { bg: '#1f8a63', fg: '#ffffff', dim: 'rgba(255,255,255,0.85)' },
  navy: { bg: '#084274', fg: '#feeddb', dim: 'rgba(254,237,219,0.8)' },
  sun: { bg: '#f0b429', fg: '#084274', dim: 'rgba(8,66,116,0.8)' },
  coral: { bg: '#d95f43', fg: '#ffffff', dim: 'rgba(255,255,255,0.85)' },
  sky: { bg: '#0086d9', fg: '#ffffff', dim: 'rgba(255,255,255,0.9)' },
};

/** Étoile filigrane discrète, cantonnée au bas de la barre ouverte */
const StarWatermark: React.FC<{ color: string }> = ({ color }) => (
  <svg
    viewBox="0 0 220 200"
    className="absolute left-2 bottom-0 w-36 h-32 opacity-45 pointer-events-none"
    aria-hidden="true"
  >
    <g fill="none" stroke={color} strokeWidth="3" strokeLinejoin="round">
      <path d="M42 40 L62 94 L124 84 L74 120 L104 176 L48 144 L18 190 L24 128 L-6 108 L36 96 Z" />
      <path d="M136 108 L142 122 L158 120 L145 130 L150 146 L136 137 L122 146 L127 130 L114 120 L130 122 Z" />
    </g>
  </svg>
);

export const ExpandBars: React.FC<ExpandBarsProps> = ({
  items,
  sideLabel,
  className = '',
}) => {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState<number>(0);

  return (
    <div className={`relative ${className}`}>
      {/* Texte vertical géant */}
      {sideLabel && (
        <span
          aria-hidden="true"
          className="hidden xl:block absolute -left-2 top-1/2 -translate-y-1/2 origin-center font-heading text-[#084274]/70 text-5xl tracking-tight whitespace-nowrap select-none"
          style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%) rotate(180deg)' }}
        >
          {sideLabel}
        </span>
      )}

      <div className="flex flex-col gap-3 xl:pl-24">
        {items.map((item, idx) => {
          const isOpen = open === idx;
          const c = COLORS[item.color];
          const num = String(idx + 1).padStart(2, '0');

          return (
            <motion.div
              key={idx}
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[28px] overflow-hidden relative"
              style={{ backgroundColor: c.bg }}
            >
              <button
                onClick={() => setOpen(isOpen ? -1 : idx)}
                aria-expanded={isOpen}
                className="relative z-10 w-full flex items-center gap-4 sm:gap-6 px-6 sm:px-9 py-6 sm:py-7 text-left cursor-pointer"
              >
                <span
                  className="font-body text-xs font-bold self-start mt-1.5 shrink-0"
                  style={{ color: c.dim }}
                >
                  {num}
                </span>
                <span
                  className="font-heading text-2xl sm:text-3xl lg:text-[38px] leading-tight flex-1"
                  style={{ color: c.fg }}
                >
                  {item.title}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full shrink-0 flex items-center justify-center border-2"
                  style={{ borderColor: c.fg, color: c.fg }}
                >
                  <ArrowUpRight className="w-5 h-5" strokeWidth={2.2} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-10 overflow-hidden"
                  >
                    <StarWatermark color={c.dim} />
                    <p
                      className="relative z-10 font-body text-sm sm:text-[15px] leading-relaxed px-6 sm:px-9 pb-8 sm:pb-10 sm:pl-24 sm:text-right sm:ml-auto max-w-2xl sm:mr-20"
                      style={{ color: c.dim }}
                    >
                      {item.body}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
