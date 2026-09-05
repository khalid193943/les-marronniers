/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Bandeau défilant infini (marquee).
 * Fait défiler le slogan officiel + mots-clés séparés par des étoiles dessinées.
 * CSS pur (pas de JS) : boucle parfaite, pause au survol, respecte prefers-reduced-motion.
 */

import React from 'react';
import { DoodleStar } from './Doodles';

interface MarqueeBandProps {
  items?: string[];
  /** 'blue' = fond bleu marine / 'accent' = fond moutarde */
  tone?: 'blue' | 'accent';
  className?: string;
}

const DEFAULT_ITEMS = [
  'Faites le choix de la différence',
  'Crèche · Maternelle · Primaire',
  'De la TPS au CE6',
  'El Jadida',
];

export const MarqueeBand: React.FC<MarqueeBandProps> = ({
  items = DEFAULT_ITEMS,
  tone = 'blue',
  className = '',
}) => {
  const isBlue = tone === 'blue';
  // Contenu doublé pour une boucle CSS parfaite (translateX -50%)
  const strip = (key: string) => (
    <div key={key} className="flex items-center shrink-0" aria-hidden={key === 'b'}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span
            className={`font-heading text-lg sm:text-xl whitespace-nowrap px-6 sm:px-8 ${
              isBlue ? 'text-[#fff7ef]' : 'text-[#00558d]'
            }`}
          >
            {item}
          </span>
          <DoodleStar
            className={`w-5 h-5 shrink-0 ${isBlue ? 'text-[#e3a044]' : 'text-[#00558d]'}`}
          />
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`overflow-hidden py-4 sm:py-5 select-none ${
        isBlue ? 'bg-[#00558d]' : 'bg-[#e3a044]'
      } ${className}`}
      role="marquee"
      aria-label={items.join(' · ')}
    >
      <div className="marquee-track flex w-max hover:[animation-play-state:paused]">
        {strip('a')}
        {strip('b')}
      </div>
    </div>
  );
};
