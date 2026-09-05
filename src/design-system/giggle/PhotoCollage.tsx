/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Composition photo.
 *
 * Les QUATRE photos sont entièrement visibles : plus rien n'est caché
 * derrière. Elles sont disposées en damier légèrement décalé (les deux
 * colonnes ne sont pas alignées), chacune avec sa propre inclinaison, ce
 * qui garde le côté vivant sans jamais rogner un visage.
 * Angles nets, cadre blanc, arrivée en cascade au scroll.
 */

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { SmartImage } from './SmartImage';

interface CollagePhoto {
  src: string;
  alt: string;
}

interface PhotoCollageProps {
  /** 4 photos, toutes affichées en entier. */
  photos: CollagePhoto[];
  className?: string;
}

/** Inclinaison, décalage vertical et retard propres à chaque photo. */
const LAYOUT = [
  { rot: -2.5, offset: 'mt-0', delay: 0 },
  { rot: 2, offset: 'mt-5 sm:mt-12', delay: 0.1 },
  { rot: 2.5, offset: '-mt-1 sm:-mt-4', delay: 0.2 },
  { rot: -2, offset: 'mt-4 sm:mt-8', delay: 0.3 },
];

export const PhotoCollage: React.FC<PhotoCollageProps> = ({ photos, className = '' }) => {
  const reduce = useReducedMotion();

  return (
    <motion.div className={`grid grid-cols-2 gap-4 sm:gap-5 ${className}`} whileHover="open">
      {photos.slice(0, 4).map((p, i) => {
        const l = LAYOUT[i];
        return (
          <motion.figure
            key={i}
            className={`${l.offset} aspect-square sm:aspect-[4/5] overflow-hidden border-4 border-white shadow-xl bg-white`}
            initial={
              reduce
                ? { rotate: l.rot }
                : { opacity: 0, rotate: l.rot * 4, scale: 0.9, y: 28 }
            }
            whileInView={{ opacity: 1, rotate: l.rot, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ type: 'spring', stiffness: 62, damping: 15, delay: l.delay }}
            variants={{ open: { rotate: l.rot * 1.8 } }}
            whileHover={{ scale: 1.03, zIndex: 20, rotate: 0 }}
          >
            <SmartImage src={p.src} alt={p.alt} className="w-full h-full object-cover" />
          </motion.figure>
        );
      })}
    </motion.div>
  );
};
