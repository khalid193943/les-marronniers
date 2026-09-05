/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Collage de photos éparpillées.
 * Inspiré de la référence "Designed For Children's Early Education" :
 * 4 à 5 photos inclinées qui se chevauchent librement, chacune arrivant
 * avec sa propre rotation quand la section entre à l'écran.
 */

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { SmartImage } from './SmartImage';

interface CollagePhoto {
  src: string;
  alt: string;
}

interface PhotoCollageProps {
  /** 4 photos idéalement (les suivantes sont ignorées) */
  photos: CollagePhoto[];
  className?: string;
}

/** Position, taille et rotation finale de chaque photo du collage */
const LAYOUT = [
  { cls: 'left-[2%] top-0 w-[46%] aspect-[4/5] z-20', rot: -4, from: -14 },
  { cls: 'right-[2%] top-[6%] w-[44%] aspect-[3/4] z-30', rot: 3, from: 16 },
  { cls: 'left-0 bottom-[4%] w-[42%] aspect-square z-10', rot: 5, from: 18 },
  { cls: 'right-[8%] bottom-0 w-[46%] aspect-[4/3] z-20', rot: -3, from: -16 },
];

export const PhotoCollage: React.FC<PhotoCollageProps> = ({ photos, className = '' }) => {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`relative aspect-[5/4] w-full ${className}`}
      whileHover="spread"
    >
      {photos.slice(0, 4).map((p, i) => {
        const l = LAYOUT[i];
        return (
          <motion.figure
            key={i}
            className={`absolute ${l.cls} overflow-hidden rounded-2xl shadow-xl bg-white`}
            initial={
              reduce
                ? { rotate: l.rot }
                : { opacity: 0, rotate: l.from, scale: 0.9, y: 24 }
            }
            whileInView={{ opacity: 1, rotate: l.rot, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{
              type: 'spring',
              stiffness: 62,
              damping: 14,
              delay: i * 0.12,
            }}
            variants={{ spread: { rotate: l.rot * 1.6, scale: 1.02 } }}
          >
            <SmartImage src={p.src} alt={p.alt} className="w-full h-full object-cover" />
          </motion.figure>
        );
      })}
    </motion.div>
  );
};
