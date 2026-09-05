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
import { ActivityShowcase, type ShowcaseItem } from '../design-system/giggle/ActivityShowcase';
import { PHOTOS } from '../data/photos';
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

const ACTIVITES: ShowcaseItem[] = [
  {
    icon: FlaskConical,
    title: 'Éveil Scientifique',
    line: 'Observer, manipuler, comprendre',
    detail: 'Dans notre salle dédiée, les enfants touchent, testent et observent le monde vivant. On ne leur explique pas la nature : on les laisse la découvrir, avec du vrai matériel adapté à leur taille.',
    photo: PHOTOS.eveil,
    badge: 'Salle d’éveil scientifique',
  },
  {
    icon: Theater,
    title: 'Théâtre & Expression',
    line: 'Prendre la parole avec confiance',
    detail: 'Notre cinéma-théâtre accueille chaque semaine les répétitions. Diction, gestuelle, présence : c’est souvent là que les enfants les plus timides trouvent leur voix.',
    photo: PHOTOS.sourires,
    badge: 'Cinéma-théâtre',
  },
  {
    icon: Crown,
    title: 'Club d’Échecs',
    line: 'Logique, concentration, fair-play',
    detail: 'Anticiper, réfléchir avant d’agir, accepter de perdre pour mieux recommencer. Les échecs travaillent des compétences qui servent bien au-delà de l’échiquier.',
    photo: PHOTOS.echecs,
    badge: 'Dès le primaire',
  },
  {
    icon: Music,
    title: 'Musique & Chorale',
    line: 'Rythme, écoute et harmonie',
    detail: 'Chant choral, découverte des instruments et travail du tempo. Chanter ensemble apprend à s’écouter — une compétence sociale autant que musicale.',
    photo: PHOTOS.chorale,
    badge: 'Toute l’année',
  },
  {
    icon: Film,
    title: 'Cinéma & Débat',
    line: 'Regarder, comprendre, échanger',
    detail: 'Des œuvres choisies sont projetées puis discutées ensemble. Les enfants apprennent à formuler un avis, à écouter celui des autres et à changer d’idée sans se sentir en échec.',
    photo: PHOTOS.jeuGroupe,
    badge: 'Séances guidées',
  },
  {
    icon: PersonStanding,
    title: 'Psychomotricité',
    line: 'Bouger, s’équilibrer, se dépasser',
    detail: 'Modules mous, parcours d’équilibre et motricité globale dans un espace entièrement sécurisé. Le corps se construit en même temps que la confiance.',
    photo: PHOTOS.peinture,
    badge: 'Salle dédiée',
  },
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
        <SectionIntro
          tag="Nos ateliers"
          title="Plus de 15 Activités d’Éveil"
          line="Touchez un atelier pour le découvrir en images."
          className="mb-12"
        />
        <ActivityShowcase items={ACTIVITES} />
        <div className="text-center mt-12">
          <button
            onClick={onOpenAdmissions}
            className="giggle-button-primary cursor-pointer inline-flex items-center gap-3"
          >
            <span>Venir voir nos ateliers</span>
          </button>
        </div>
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
