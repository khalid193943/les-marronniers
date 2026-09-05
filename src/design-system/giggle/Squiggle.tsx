/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Flèches gribouillées à la main, dessinées au scroll.
 * Reproduit les connecteurs sinueux de l'inspiration Giggle entre les cartes.
 * Le trait se "dessine" (pathLength 0 → 1) quand il entre dans le viewport.
 */

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

type SquiggleVariant = 'loop-right' | 'loop-left' | 'wave-down' | 'curl-down';

interface SquiggleProps {
  variant?: SquiggleVariant;
  className?: string;
  /** Couleur du trait, ex: '#38926c' (vert), '#d95f43' (corail), '#4a90d9' (bleu ciel) */
  color?: string;
  strokeWidth?: number;
  delay?: number;
}

const PATHS: Record<SquiggleVariant, { d: string; arrow: string; viewBox: string }> = {
  // Grande boucle qui descend vers la droite (entre carte gauche → carte droite)
  'loop-right': {
    viewBox: '0 0 260 200',
    d: 'M18 24 C70 10, 150 18, 168 52 C186 86, 120 96, 108 74 C96 52, 150 40, 196 78 C230 106, 238 148, 226 176',
    arrow: 'M214 164 L226 178 L236 162',
  },
  // Miroir : boucle qui descend vers la gauche
  'loop-left': {
    viewBox: '0 0 260 200',
    d: 'M242 24 C190 10, 110 18, 92 52 C74 86, 140 96, 152 74 C164 52, 110 40, 64 78 C30 106, 22 148, 34 176',
    arrow: 'M46 164 L34 178 L24 162',
  },
  // Vague douce verticale (transition simple)
  'wave-down': {
    viewBox: '0 0 120 200',
    d: 'M60 12 C30 40, 92 62, 62 92 C34 120, 90 140, 58 176',
    arrow: 'M46 166 L58 180 L70 165',
  },
  // Spirale qui se déroule vers le bas
  'curl-down': {
    viewBox: '0 0 160 200',
    d: 'M80 14 C120 18, 132 52, 104 62 C78 71, 66 44, 92 38 C124 31, 140 78, 108 104 C82 125, 60 150, 74 180',
    arrow: 'M62 170 L75 183 L86 168',
  },
};

export const Squiggle: React.FC<SquiggleProps> = ({
  variant = 'loop-right',
  className = '',
  color = '#38926c',
  strokeWidth = 4,
  delay = 0,
}) => {
  const reduce = useReducedMotion();
  const { d, arrow, viewBox } = PATHS[variant];

  const draw = reduce
    ? {}
    : {
        initial: { pathLength: 0, opacity: 0 },
        whileInView: { pathLength: 1, opacity: 1 },
        viewport: { once: true, margin: '-80px' },
      };

  return (
    <svg
      viewBox={viewBox}
      className={`pointer-events-none select-none ${className}`}
      fill="none"
      aria-hidden="true"
    >
      <motion.path
        d={d}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        {...draw}
        transition={{ duration: 1.4, delay, ease: 'easeInOut' }}
      />
      <motion.path
        d={arrow}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...(reduce
          ? {}
          : {
              initial: { pathLength: 0, opacity: 0 },
              whileInView: { pathLength: 1, opacity: 1 },
              viewport: { once: true, margin: '-80px' },
            })}
        transition={{ duration: 0.35, delay: delay + 1.3, ease: 'easeOut' }}
      />
    </svg>
  );
};
