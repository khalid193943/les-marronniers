/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Pile de photos "polaroid" inclinées.
 * Reproduit les compositions photo de l'inspiration Giggle :
 * photos légèrement tournées, superposées, avec fonds colorés décalés.
 * Animation : les photos "se posent" en pivotant quand la section entre à l'écran,
 * puis s'éventaillent doucement au survol.
 */

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { SmartImage } from './SmartImage';

interface StackPhoto {
  src: string;
  alt: string;
}

interface PhotoStackProps {
  photos: StackPhoto[]; // 1 à 3 photos, la première est la principale
  className?: string;
  /** Couleurs des cadres décalés derrière la photo principale */
  backers?: [string, string];
}

const SECONDARY_LAYOUT = [
  // Position / rotation finale des photos secondaires (index 1 et 2)
  { pos: 'top-[-8%] right-[-6%] w-[46%]', rot: 6, hoverRot: 10, from: 18 },
  { pos: 'bottom-[-10%] left-[-8%] w-[42%]', rot: -7, hoverRot: -11, from: -20 },
];

export const PhotoStack: React.FC<PhotoStackProps> = ({
  photos,
  className = '',
  backers = ['#e3a044', '#0086d9'],
}) => {
  const reduce = useReducedMotion();
  const [main, ...rest] = photos;

  return (
    <motion.div
      className={`relative ${className}`}
      initial={reduce ? undefined : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      whileHover="fan"
    >
      {/* Cadres colorés décalés derrière la photo principale */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ backgroundColor: backers[0] }}
        initial={reduce ? { rotate: 3 } : { rotate: 10, opacity: 0 }}
        whileInView={{ rotate: 3, opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ type: 'spring', stiffness: 60, damping: 14 }}
        variants={{ fan: { rotate: 5 } }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 shadow-xl"
        style={{ backgroundColor: backers[1] }}
        initial={reduce ? { rotate: -2 } : { rotate: -8, opacity: 0 }}
        whileInView={{ rotate: -2, opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ type: 'spring', stiffness: 60, damping: 14, delay: 0.08 }}
        variants={{ fan: { rotate: -4 } }}
      />

      {/* Photo principale */}
      <motion.div
        className="relative z-10 overflow-hidden shadow-2xl border-[6px] border-white"
        initial={reduce ? undefined : { rotate: 4, y: 24, opacity: 0 }}
        whileInView={{ rotate: 0, y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ type: 'spring', stiffness: 70, damping: 15, delay: 0.15 }}
      >
        <SmartImage src={main.src} alt={main.alt} className="w-full h-full object-cover" />
      </motion.div>

      {/* Photos secondaires qui se posent par-dessus */}
      {rest.slice(0, 2).map((p, i) => {
        const layout = SECONDARY_LAYOUT[i];
        return (
          <motion.div
            key={i}
            className={`absolute ${layout.pos} z-20 overflow-hidden shadow-xl border-[5px] border-white aspect-[4/3]`}
            initial={
              reduce
                ? { rotate: layout.rot }
                : { rotate: layout.from, y: -30, opacity: 0 }
            }
            whileInView={{ rotate: layout.rot, y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              type: 'spring',
              stiffness: 65,
              damping: 13,
              delay: 0.3 + i * 0.15,
            }}
            variants={{ fan: { rotate: layout.hoverRot, scale: 1.03 } }}
          >
            <SmartImage src={p.src} alt={p.alt} className="w-full h-full object-cover" />
          </motion.div>
        );
      })}
    </motion.div>
  );
};
