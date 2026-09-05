/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Carrousel adaptatif.
 *
 * Sur MOBILE : les éléments défilent horizontalement au doigt, avec accroche
 * magnétique (scroll-snap natif, donc fluide même sur téléphone d'entrée de
 * gamme) et des points indiquant la position. Une section de 4 blocs occupe
 * ainsi un écran au lieu de quatre.
 *
 * Sur DESKTOP : la grille habituelle reprend, sans aucun changement visuel.
 *
 * Le défilement est natif (pas de librairie, pas de JS pour bouger) :
 * l'accessibilité clavier et le retour haptique du système sont conservés.
 */

import React, { useRef, useState, useCallback } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface CarouselProps {
  children: React.ReactNode[];
  /** Classes de la grille appliquées à partir de `md:` (desktop) */
  desktopGrid?: string;
  /** Largeur d'une carte sur mobile */
  cardWidth?: string;
  className?: string;
  /** Masquer les points sous le carrousel */
  hideDots?: boolean;
  'aria-label'?: string;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  desktopGrid = 'md:grid-cols-2 lg:grid-cols-4',
  cardWidth = 'w-[78vw] xs:w-[72vw]',
  className = '',
  hideDots = false,
  'aria-label': ariaLabel,
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const items = React.Children.toArray(children);

  const onScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el || el.scrollWidth <= el.clientWidth) return;
    const ratio = el.scrollLeft / (el.scrollWidth - el.clientWidth);
    setActive(Math.round(ratio * (items.length - 1)));
  }, [items.length]);

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.children[i] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  };

  return (
    <div className={className}>
      <motion.div
        ref={trackRef}
        onScroll={onScroll}
        role="group"
        aria-label={ariaLabel}
        initial={reduce ? undefined : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={`
          flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth
          -mx-4 px-4 pb-2 carousel-track
          md:mx-0 md:px-0 md:pb-0 md:grid md:gap-5 md:overflow-visible ${desktopGrid}
        `}
      >
        {items.map((child, i) => (
          <div key={i} className={`snap-center shrink-0 ${cardWidth} md:w-auto md:shrink`}>
            {child}
          </div>
        ))}
      </motion.div>

      {/* Points de position — mobile uniquement */}
      {!hideDots && items.length > 1 && (
        <div className="flex md:hidden justify-center gap-2 mt-5">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Aller à l’élément ${i + 1} sur ${items.length}`}
              className="w-10 h-10 flex items-center justify-center -mx-1.5 cursor-pointer"
            >
              <span
                className={`block h-2 transition-all duration-300 keep-round ${
                  i === active ? 'w-7 bg-[#0086d9]' : 'w-2 bg-[#00558d]/25'
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
