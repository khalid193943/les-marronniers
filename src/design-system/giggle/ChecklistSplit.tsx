/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Bloc "collage + checklist".
 * Inspiré de la référence "Designed For Children's Early Education" :
 * visuel à gauche (collage ou pile de photos), gros titre + liste de
 * bénéfices cochés + CTA à droite. Réversible (image à droite).
 */

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { PhotoCollage } from './PhotoCollage';

interface ChecklistSplitProps {
  tag: string;
  title: string;
  line?: string;
  items: string[];
  ctaLabel?: string;
  onCta?: () => void;
  photos: { src: string; alt: string }[];
  /** 'left' = photo à gauche (défaut), 'right' = photo à droite */
  imageSide?: 'left' | 'right';
  className?: string;
}

export const ChecklistSplit: React.FC<ChecklistSplitProps> = ({
  tag,
  title,
  line,
  items,
  ctaLabel,
  onCta,
  photos,
  imageSide = 'left',
  className = '',
}) => {
  const reduce = useReducedMotion();
  const imageFirst = imageSide === 'left';

  return (
    <div className={`max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center ${className}`}>
      {/* Sur mobile, l'image passe TOUJOURS après le texte : on lit d'abord
          de quoi il s'agit, puis on voit l'illustration. L'alternance
          gauche/droite ne reprend qu'à partir du grand écran. */}
      <div className={`order-2 ${imageFirst ? 'lg:order-1' : 'lg:order-2'}`}>
        <PhotoCollage photos={photos} />
      </div>

      <motion.div
        initial={reduce ? undefined : { opacity: 0, x: imageFirst ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`order-1 ${imageFirst ? 'lg:order-2' : 'lg:order-1'}`}
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-[#0086d9]/8 px-4 py-1.5 text-xs font-bold text-[#0086d9] mb-5 keep-round">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e3a044] keep-round" />
          {tag}
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl text-[#0086d9] leading-tight tracking-tight mb-4">
          {title}
        </h2>
        {line && (
          <p className="font-body text-base text-[#00558d]/70 leading-relaxed mb-7 max-w-md">
            {line}
          </p>
        )}

        <ul className="flex flex-col gap-3.5 mb-8">
          {items.map((it, idx) => (
            <motion.li
              key={idx}
              initial={reduce ? undefined : { opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="flex items-start gap-3"
            >
              <span className="w-5 h-5 rounded-full bg-[#e3a044] text-[#0086d9] flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5 keep-round">
                ✓
              </span>
              <span className="font-body text-[15px] text-[#00558d]/85 leading-snug">{it}</span>
            </motion.li>
          ))}
        </ul>

        {ctaLabel && onCta && (
          <button
            onClick={onCta}
            className="inline-flex items-center gap-3 rounded-full bg-[#0086d9] text-[#fff7ef] font-body font-bold text-sm pl-6 pr-2 py-2 cursor-pointer hover:bg-[#003f6b] transition-colors group keep-round"
          >
            <span>{ctaLabel}</span>
            <span className="w-8 h-8 rounded-full bg-[#e3a044] text-[#0086d9] flex items-center justify-center group-hover:rotate-45 transition-transform duration-300 keep-round">
              <ArrowUpRight className="w-4 h-4" strokeWidth={2.2} />
            </span>
          </button>
        )}
      </motion.div>
    </div>
  );
};
