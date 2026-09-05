/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — "Ce qui fait la différence"
 * Bullets basés sur la présentation officielle de l'école (équipe formée à la
 * psychologie de l'enfant, matériel importé d'Europe, effectifs limités…).
 */

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ChecklistSplit } from '../design-system/giggle/ChecklistSplit';
import { DoodleHeart } from '../design-system/giggle/Doodles';

interface DifferenceSectionProps {
  onOpenAdmissions: () => void;
}

export const DifferenceSection: React.FC<DifferenceSectionProps> = ({ onOpenAdmissions }) => {
  const reduce = useReducedMotion();

  return (
    <section className="bg-white py-16 sm:py-24 overflow-hidden relative">
      <DoodleHeart className="hidden lg:block absolute top-10 right-[6%] w-10 text-[#d95f43]/40 pointer-events-none" />
      <motion.div
        initial={reduce ? undefined : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <ChecklistSplit
          tag="Ce qui fait la différence"
          title="Une Équipe Formée à l’Enfance, un Cadre Pensé pour Elle"
          line="Ce n’est pas un slogan : c’est la manière dont chaque journée est organisée aux Marronniers."
          items={[
            'Une équipe expérimentée, formée aux outils pédagogiques et à la psychologie de l’enfant',
            'Du mobilier et du matériel importés d’Europe, conçus par des spécialistes de la petite enfance',
            'Des effectifs volontairement limités pour une attention réellement personnalisée',
            'Un protocole de sécurité et de propreté suivi par toute l’équipe, chaque jour',
          ]}
          ctaLabel="Découvrir notre école"
          onCta={onOpenAdmissions}
          photos={[
            { src: 'https://cdn.prod.website-files.com/69c84428044e454b1b6c1405/6a14546f036a33ba6cc4b748_Images%20(1).avif', alt: 'Équipe pédagogique avec les enfants' },
            { src: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=700&q=80', alt: 'Enseignante attentive' },
            { src: 'https://images.unsplash.com/photo-1596464716127-f2a829822301?auto=format&fit=crop&w=700&q=80', alt: 'Matériel pédagogique' },
            { src: 'https://cdn.prod.website-files.com/69c84428044e454b1b6c1405/6a14546f37bdd99338f62c1c_Images%20(3).avif', alt: 'Salle de classe' },
          ]}
        />
      </motion.div>
    </section>
  );
};
