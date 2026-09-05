/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Les deux campus, avec leurs deux plans.
 *
 * L'école a deux adresses distinctes : la maternelle rue Beethoven et le
 * primaire avenue Varennes. Ce bloc les présente ensemble, chacun avec sa
 * propre carte Google Maps et son lien d'itinéraire — pour qu'aucun parent
 * ne se présente au mauvais campus.
 *
 * Sur mobile, les deux cartes s'empilent ; sur desktop elles sont côte à côte.
 */

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { MapPin, Navigation } from 'lucide-react';
import { SCHOOL_INFO } from '../../data/schoolInfo';

interface CampusMapsProps {
  className?: string;
  /** Hauteur des cartes */
  mapHeight?: string;
}

const ACCENTS = ['#0086d9', '#00a06b'];

export const CampusMaps: React.FC<CampusMapsProps> = ({
  className = '',
  mapHeight = 'h-[220px] sm:h-[300px]',
}) => {
  const reduce = useReducedMotion();

  return (
    <div className={`flex gap-4 overflow-x-auto snap-x snap-mandatory carousel-track -mx-4 px-4 md:mx-0 md:px-0 md:overflow-visible md:grid md:grid-cols-1 lg:grid-cols-2 md:gap-6 lg:gap-7 ${className}`}>
      {SCHOOL_INFO.campuses.map((c, idx) => (
        <motion.div
          key={c.id}
          initial={reduce ? undefined : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="snap-center shrink-0 w-[82vw] md:w-auto md:shrink bg-white border border-[#00558d]/12 shadow-lg overflow-hidden flex flex-col"
        >
          {/* Bandeau d'identification du campus */}
          <div
            className="flex items-center gap-3 px-5 py-4"
            style={{ backgroundColor: ACCENTS[idx % ACCENTS.length] }}
          >
            <span className="w-9 h-9 bg-white/20 flex items-center justify-center shrink-0 keep-round">
              <MapPin className="w-4.5 h-4.5 text-white" />
            </span>
            <span className="min-w-0">
              <span className="block font-heading text-lg text-white leading-tight">
                {c.label.replace('Campus ', '')}
              </span>
              <span className="block font-body text-[12.5px] text-white/85 truncate">
                {c.address}
              </span>
            </span>
          </div>

          {/* Plan */}
          <iframe
            title={`Plan — ${c.label}`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              c.address + ', El Jadida, Maroc',
            )}&output=embed`}
            className={`w-full ${mapHeight} border-0 block`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />

          {/* Itinéraire */}
          <a
            href={c.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2.5 px-5 py-4 font-body font-bold text-sm text-[#0086d9] hover:bg-[#0086d9]/8 transition-colors"
          >
            <Navigation className="w-4 h-4" />
            Ouvrir l’itinéraire
          </a>
        </motion.div>
      ))}
    </div>
  );
};
