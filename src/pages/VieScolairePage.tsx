/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Page "Vie Scolaire & Activités" (reconstruction enrichie)
 * Journée type (Timeline) → ateliers (ColorCardsGrid) → rythme de l'année (ExpandBars).
 */

import React from 'react';
import {
  Theater, Music, Film, Crown, FlaskConical, PersonStanding,
  Sun, Utensils, BookOpen, Palette, Home,
} from 'lucide-react';
import { PageHero } from '../design-system/giggle/PageHero';
import { SectionIntro } from '../design-system/giggle/SectionIntro';
import { DoodlePaint, DoodleStar, DoodleSun } from '../design-system/giggle/Doodles';
import { SectionDivider } from '../components/SectionDivider';
import { Timeline, type TimelineStep } from '../design-system/giggle/Timeline';
import { ColorCardsGrid, type ColorCard } from '../design-system/giggle/ColorCardsGrid';
import { ExpandBars, type ExpandBarItem } from '../design-system/giggle/ExpandBars';

interface VieScolairePageProps {
  onOpenAdmissions: () => void;
}

const JOURNEE: TimelineStep[] = [
  { meta: '7h45', icon: Sun, title: 'Accueil en douceur', line: 'Chaque enfant est accueilli par son prénom, dès l’ouverture des portes.' },
  { meta: '9h00', icon: BookOpen, title: 'Apprentissages', line: 'Langage, lecture, calcul — le matin, quand l’attention est la plus vive.' },
  { meta: '12h00', icon: Utensils, title: 'Déjeuner & pause', line: 'Repas équilibré préparé sur place, puis temps calme ou sieste pour les petits.' },
  { meta: '14h00', icon: Palette, title: 'Ateliers créatifs', line: 'Théâtre, musique, arts, éveil scientifique — le moment que les enfants préfèrent.' },
  { meta: '16h30', icon: Home, title: 'Retour en famille', line: 'Sortie sécurisée, avec un mot ou un échange oral pour chaque parent.' },
  { meta: '18h15', icon: Sun, title: 'Garderie du soir', line: 'Un accueil étendu pour les familles qui terminent plus tard.' },
];

const ACTIVITES: ColorCard[] = [
  { icon: FlaskConical, title: 'Éveil Scientifique', line: 'Observer, manipuler et comprendre le monde vivant.', tone: 'navy' },
  { icon: Theater, title: 'Théâtre', line: 'Prendre la parole en public avec confiance.', tone: 'coral' },
  { icon: Crown, title: 'Échecs', line: 'Logique, concentration et fair-play.', tone: 'sun' },
  { icon: Music, title: 'Musique', line: 'Chant choral et découverte du rythme.', tone: 'sky' },
  { icon: Film, title: 'Cinéma & Débat', line: 'Regarder, comprendre et échanger.', tone: 'green' },
  { icon: PersonStanding, title: 'Psychomotricité', line: 'Bouger, s’équilibrer, se dépasser en sécurité.', tone: 'coral' },
];

const RYTHME: ExpandBarItem[] = [
  {
    title: 'Premier trimestre',
    color: 'navy',
    body: 'La rentrée pose les bases de l’année : prise de repères, premiers apprentissages et intégration des nouveaux élèves dans leur classe.',
  },
  {
    title: 'Deuxième trimestre',
    color: 'sun',
    body: 'Le cœur de l’année scolaire : consolidation des acquis, ateliers créatifs et premiers bilans partagés avec les familles.',
  },
  {
    title: 'Troisième trimestre',
    color: 'green',
    body: 'Approfondissement, préparation aux examens pour les classes de CE6, et moments forts de fin d’année comme le spectacle.',
  },
  {
    title: 'Vacances scolaires',
    color: 'coral',
    body: 'L’école suit le calendrier officiel marocain. Les dates précises sont communiquées à l’avance via le cahier de liaison.',
  },
];

export const VieScolairePage: React.FC<VieScolairePageProps> = ({ onOpenAdmissions }) => {
  return (
    <div>
      <PageHero
        tag="Vie scolaire"
        title="Des Journées qui Donnent Envie"
        line="Un rythme pensé pour apprendre, jouer et se reposer."
      />
      <SectionDivider variant="white" position="top" style="wave1" />

      {/* Journée type */}
      <section className="bg-white py-16 sm:py-24 overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <SectionIntro tag="Une journée type" title="Le Rythme d’une Journée" className="mb-14" />
          <Timeline steps={JOURNEE} />
        </div>
      </section>

      <SectionDivider variant="cream" position="top" style="wave2" />

      {/* Ateliers */}
      <section className="bg-[#feeddb] py-16 sm:py-24 overflow-hidden relative">
        <DoodleStar className="hidden lg:block absolute top-12 left-[6%] w-9 text-[#d95f43]/50 pointer-events-none" />
        <DoodlePaint className="hidden xl:block absolute bottom-8 right-[2%] w-40 text-[#084274]/12 pointer-events-none" />
        <ColorCardsGrid
          heading="Plus de 15 activités d’éveil pour que chaque enfant trouve sa voie."
          ctaLabel="Réserver une visite"
          onCta={onOpenAdmissions}
          cards={ACTIVITES}
        />
      </section>

      <SectionDivider variant="white" position="top" style="wave1" />

      {/* Rythme de l'année */}
      <section className="bg-white py-16 sm:py-24 overflow-hidden relative">
        <DoodleSun className="hidden lg:block absolute top-10 right-[8%] w-10 text-[#e3a044]/50 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <SectionIntro
            tag="Le rythme de l’année"
            title="Trois Trimestres, un Seul Objectif"
            line="Touchez chaque bloc pour en savoir plus."
            className="mb-14"
          />
          <ExpandBars items={RYTHME} sideLabel="ANNÉE SCOLAIRE" />
        </div>
      </section>
    </div>
  );
};
