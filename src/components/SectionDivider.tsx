/**
 * Les Marronniers — séparateur « papier déchiré ».
 * Un seul tracé continu (plus de raccords visibles), qui chevauche la section voisine :
 * la zone transparente laisse voir la vraie couleur de la section, sans bande parasite.
 *  • position 'top'    : le bord déchiré monte dans la section précédente (couleur = section suivante)
 *  • position 'bottom' : le bord déchiré descend dans la section suivante (couleur = section précédente)
 */
import React, { useMemo } from 'react';

interface SectionDividerProps { variant: 'cream' | 'white' | 'blue'; style?: 'wave1' | 'wave2'; position?: 'top' | 'bottom'; className?: string; }
const COLORS = { cream: '#FFF7EF', white: '#FFFFFF', blue: '#0086D9' };

/* Bord déchiré régulier et déterministe : segments irréguliers, amplitude douce */
const tornPath = (seed: number) => {
  const W = 1600, H = 90, n = 34;
  const r = (k: number) => ((Math.sin(seed * 97.1 + k * 12.9898) * 43758.5453) % 1 + 1) % 1;
  let d = `M0 ${H} L0 ${40 + r(0) * 20}`;
  for (let i = 1; i <= n; i++) { const x = (W / n) * i + (i < n ? (r(i) - 0.5) * 18 : 0); const y = 22 + r(i + 50) * 44; d += ` L${x.toFixed(1)} ${y.toFixed(1)}`; }
  return d + ` L${W} ${H} Z`;
};

export const SectionDivider: React.FC<SectionDividerProps> = ({ variant, style = 'wave1', position = 'top', className = '' }) => {
  const d = useMemo(() => tornPath(style === 'wave1' ? 3 : 7), [style]);
  const fill = COLORS[variant];
  const h = 'h-8 sm:h-10 md:h-12 lg:h-14';
  const overlap = position === 'top' ? '-mt-8 sm:-mt-10 md:-mt-12 lg:-mt-14' : '-mb-8 sm:-mb-10 md:-mb-12 lg:-mb-14';
  return (
    <div className={`relative z-20 w-full ${h} ${overlap} pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1600 90" preserveAspectRatio="none" className={`absolute inset-0 w-full h-[calc(100%+2px)] ${position === 'bottom' ? 'rotate-180 -top-[2px]' : ''}`}>
        <path d={d} fill={fill} />
      </svg>
    </div>
  );
};
