/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Photo avec badges-statistiques flottants.
 * Inspiré de la référence Kidora : grande photo, 2 cartes arrondies qui
 * débordent sur les coins avec un chiffre animé (CountUp) et un mini-visuel.
 */

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { CountUp } from './CountUp';
import { SmartImage } from './SmartImage';

interface StatBadge {
  value: number;
  suffix?: string;
  label: string;
  /** Position du badge sur la photo */
  corner: 'bottom-left' | 'top-right';
  tone: 'sun' | 'coral' | 'green' | 'sky';
}

interface StatShowcaseProps {
  photo: { src: string; alt: string };
  badges: StatBadge[];
  className?: string;
}

const TONES: Record<StatBadge['tone'], string> = {
  sun: 'linear-gradient(160deg, #fbe6b8 0%, #f0b429 100%)',
  coral: 'linear-gradient(160deg, #f8cec0 0%, #d95f43 100%)',
  green: 'linear-gradient(160deg, #c6e5d5 0%, #38926c 100%)',
  sky: 'linear-gradient(160deg, #cfe2f8 0%, #0086d9 100%)',
};

const CORNER_CLS: Record<StatBadge['corner'], string> = {
  'bottom-left': '-left-4 sm:-left-8 -bottom-5 sm:-bottom-8',
  'top-right': '-right-4 sm:-right-8 -top-5 sm:-top-8',
};

export const StatShowcase: React.FC<StatShowcaseProps> = ({ photo, badges, className = '' }) => {
  const reduce = useReducedMotion();

  return (
    <div className={`relative max-w-2xl mx-auto ${className}`}>
      <motion.div
        initial={reduce ? undefined : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-[28px] overflow-hidden shadow-xl aspect-[5/4]"
      >
        <SmartImage src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
      </motion.div>

      {badges.map((b, i) => (
        <motion.div
          key={i}
          initial={reduce ? undefined : { opacity: 0, scale: 0.85, y: 16 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 70, damping: 14, delay: 0.25 + i * 0.15 }}
          whileHover={{ y: -4 }}
          className={`absolute ${CORNER_CLS[b.corner]} w-36 sm:w-44 rounded-2xl p-4 sm:p-5 shadow-xl`}
          style={{ backgroundImage: TONES[b.tone] }}
        >
          <p className="font-heading text-2xl sm:text-3xl text-[#00558d] leading-none mb-1">
            <CountUp value={b.value} suffix={b.suffix} />
          </p>
          <p className="font-body text-[11px] sm:text-xs font-bold text-[#00558d]/80 leading-snug">
            {b.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
};
