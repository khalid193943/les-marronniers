/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — En-tête de page commun (style Giggle).
 * Fond crème, pilule + titre + 1 ligne, doodles discrets, séparateur déchiré en bas.
 */

import React from 'react';
import { SectionIntro } from './SectionIntro';
import { DoodleStar, DoodleSun, DoodleSpiral } from './Doodles';

interface PageHeroProps {
  tag: string;
  title: string;
  line?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({ tag, title, line }) => (
  <header className="bg-[#fff7ef] pt-14 pb-16 sm:pt-20 sm:pb-20 relative overflow-hidden">
    <DoodleSun className="hidden md:block absolute top-10 left-[8%] w-12 text-[#e3a044]/60 pointer-events-none" />
    <DoodleStar className="hidden md:block absolute bottom-8 right-[10%] w-9 text-[#d95f43]/50 pointer-events-none" />
    <DoodleSpiral className="hidden lg:block absolute top-16 right-[22%] w-8 text-[#0086d9]/25 pointer-events-none" />
    <div className="max-w-4xl mx-auto px-4 sm:px-8">
      <SectionIntro tag={tag} title={title} line={line} />
    </div>
  </header>
);
