/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — "En chiffres" : photo + badges statistiques flottants.
 */

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { StatShowcase } from '../design-system/giggle/StatShowcase';
import { SectionIntro } from '../design-system/giggle/SectionIntro';
import { DoodleSpiral } from '../design-system/giggle/Doodles';
import { PHOTOS } from '../data/photos';

export const ImpactSection: React.FC = () => {
  const reduce = useReducedMotion();

  return (
    <section className="bg-[#fff7ef] py-16 sm:py-24 overflow-hidden relative">
      <DoodleSpiral className="hidden lg:block absolute bottom-10 right-[8%] w-10 text-[#0086d9]/20 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <motion.div
          initial={reduce ? undefined : { opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionIntro
            tag="L’école en chiffres"
            title="Assez petite pour connaître chaque enfant"
            line="Assez grande pour tout proposer, assez petite pour ne perdre personne."
            align="left"
          />
        </motion.div>

        <StatShowcase
          className="order-2 lg:order-2"
          photo={PHOTOS.spectacle}
          badges={[
            { value: 6, label: 'Salles de classe lumineuses', corner: 'bottom-left', tone: 'sun' },
            { value: 15, suffix: '+', label: 'Ateliers d’éveil chaque semaine', corner: 'top-right', tone: 'coral' },
          ]}
        />
      </div>
    </section>
  );
};
