/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers El Jadida - Page"Vie Scolaire & Rythmes Quotidiens"
 * Immersion complète : journée type, cantine saine, récréations surveillées, charte du vivre-ensemble, étude surveillée & fêtes.
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { PageId } from '../types';
import {
  Sun,
  Clock,
  Calendar,
  Sparkles,
  Users,
  Smile,
  Heart,
  CheckCircle2,
  ArrowRight,
  PartyPopper,
  UtensilsCrossed,
  ShieldCheck,
  BookOpen,
  Coffee,
  Bell,
  HeartHandshake,
  Compass,
} from 'lucide-react';
import { AnimatedSection, AnimatedCard } from '../components/AnimatedSection';

interface VieScolaireProps {
  onNavigate: (page: PageId) => void;
  onOpenAdmissions?: () => void;
}

export const VieScolairePage: React.FC<VieScolaireProps> = ({
  onNavigate,
}) => {
  const [cycleTab, setCycleTab] = useState<'maternelle' | 'primaire'>('maternelle');

  const journeeMaternelle = [
    {
      time: '07h45 - 08h30',
      title: 'Accueil Individualisé & Dépose Sereine',
      desc: 'Accueil chaleureux par les éducatrices dans la salle d’accueil. Dépose sans stress grâce aux facilités de stationnement de la Rue Beethoven.',
      icon: Sun,
    },
    {
      time: '08h30 - 09h15',
      title: 'Rituels du Matin & Trilinguisme Oral',
      desc: 'Regroupement sur tapis, date, météo du jour, tableau des émotions et comptines en français, arabe et anglais.',
      icon: Smile,
    },
    {
      time: '09h15 - 10h15',
      title: 'Ateliers d’Éveil & Manipulation Sensorielle',
      desc: 'Graphisme, motricité fine, pré-lecture syllabique et manipulation de matériel Montessori.',
      icon: Sparkles,
    },
    {
      time: '10h15 - 10h45',
      title: 'Collation Saine & Récréation Surveillée',
      desc: 'Pause fruits frais et récréation dans la cour arborée sur sol amortissant sécurisé.',
      icon: Coffee,
    },
    {
      time: '10h45 - 11h45',
      title: 'Psychomotricité, Musique ou Sciences',
      desc: 'Parcours d’équilibre dans la salle dédiée, chant choral ou observation de la nature vivante.',
      icon: Users,
    },
    {
      time: '11h45 - 13h30',
      title: 'Déjeuner Équilibré & Temps Calme / Sieste',
      desc: 'Repas chaud complet encadré par les maîtresses, suivi d’une sieste réparatrice en dortoir climatisé pour les petits.',
      icon: UtensilsCrossed,
    },
    {
      time: '13h30 - 15h30',
      title: 'Ateliers Artistiques, Théâtre & Conte',
      desc: 'Arts plastiques, découverte du livre, petites saynètes et jeux d’expression scénique.',
      icon: BookOpen,
    },
    {
      time: '15h30 - 17h30',
      title: 'Sortie Échelonnée & Garderie Ludique',
      desc: 'Fin des cours à 15h30 ou accueil en garderie surveillée jusqu’à 17h30 avec jeux calmes.',
      icon: Bell,
    },
  ];

  const journeePrimaire = [
    {
      time: '07h45 - 08h15',
      title: 'Accueil & Entrée en Classe',
      desc: 'Accueil des élèves, mise en rang disciplinée et entrée calme dans les salles lumineuses.',
      icon: Sun,
    },
    {
      time: '08h15 - 10h15',
      title: 'Fondamentaux : Mathématiques & Langues',
      desc: 'Créneau matinal où la vigilance cognitive est optimale : méthode Singapour, analyse grammaticale et lecture suivie.',
      icon: BookOpen,
    },
    {
      time: '10h15 - 10h35',
      title: 'Récréation & Oxygénation',
      desc: 'Détente dans la cour, jeux collectifs et pause avec surveillance active des enseignants.',
      icon: Users,
    },
    {
      time: '10h35 - 12h00',
      title: 'Sciences Expérimentales ou Arabe Classique',
      desc: 'Expériences au laboratoire de sciences ou étude de texte en langue arabe littéraire.',
      icon: Sparkles,
    },
    {
      time: '12h00 - 13h30',
      title: 'Pause Déjeuner & Détente Méridienne',
      desc: 'Restauration à la cantine scolaire ou retour en famille, suivi d’un temps de détente calme.',
      icon: UtensilsCrossed,
    },
    {
      time: '13h30 - 15h30',
      title: 'Anglais Cambridge, Histoire-Géo & Arts',
      desc: 'Ateliers d’expression en anglais, culture générale, arts visuels et éducation physique.',
      icon: Smile,
    },
    {
      time: '15h30 - 16h30',
      title: 'Club d’Échecs ou Ateliers Parascolaires',
      desc: 'Pratique des échecs, théâtre, robotique ou chorale selon le choix de l’enfant.',
      icon: PartyPopper,
    },
    {
      time: '16h30 - 17h30',
      title: 'Étude Dirigée & Aide aux Devoirs',
      desc: 'Accompagnement par les professeurs de l’école : devoirs faits, leçons réactivées, cartable allégé.',
      icon: Bell,
    },
  ];

  const currentTimeline = cycleTab === 'maternelle' ? journeeMaternelle : journeePrimaire;

  const chartePoints = [
    {
      title: 'Bienveillance & Respect Mutuel',
      desc: 'Élèves, enseignants et personnel partagent des rapports fondés sur la courtoisie, le vouvoiement approprié et l’écoute bienveillante.',
    },
    {
      title: 'Politique Zéro Harcèlement',
      desc: 'Sensibilisation dès le primaire, médiation entre pairs et veille attentive continue pour garantir la sécurité morale de tous.',
    },
    {
      title: 'Ponctualité & Tenue Soignée',
      desc: 'Apprentissage du sens de l’engagement : être à l’heure le matin et porter la tenue aux couleurs de l’établissement avec fierté.',
    },
    {
      title: 'Respect des Espaces & du Matériel',
      desc: 'Chaque enfant apprend à ranger ses affaires, à prendre soin des livres de la bibliothèque et à garder la cour propre.',
    },
  ];

  return (
    <div className="bg-[#feeddb] min-h-screen">
      
      {/* 1. Header */}
      <PageHeader
        tag="05 — CADRE DE VIE & RYTHMES"
        title="Vie"
        highlightedWord="Scolaire"
        description="Un environnement structurant, serein et joyeux où chaque heure de la journée est pensée pour le développement intellectuel et l'épanouissement affectif de l'enfant."
        onNavigate={onNavigate}
        breadcrumbs={[{ label: 'Vie Scolaire' }]}
      />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-16">
        
        {/* 2. SECTION INTRODUCTION */}
        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#e3a044] block">
              Rythmes Biologiques Respectés
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-[#084274] leading-tight">
              Une École Vivante, Chaleureuse et <strong>Protectrice</strong>
            </h2>
            <p className="font-body text-base text-[#084274]/85 leading-relaxed">
              La vie scolaire aux Marronniers El Jadida ne s’arrête pas à la porte de la classe. Elle englobe tous les moments qui font le quotidien de l’enfant : l’accueil rassurant du matin, l’énergie collective des récréations, le plaisir d’un repas équilibré partagé et la quiétude de l’étude dirigée.
            </p>
            <p className="font-body text-base text-[#084274]/85 leading-relaxed">
              Nous accordons une attention minutieuse aux rythmes chronobiologiques : les apprentissages exigeants sont placés le matin lorsque la concentration est maximale, tandis que les après-midis favorisent l'expression artistique, les langues, le sport et la curiosité scientifique.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('inscription')}
                className="cursor-pointer text-xs font-bold py-3.5 px-6 rounded-full bg-[#084274] text-white hover:bg-[#063259] transition-all flex items-center gap-2 shadow-sm font-heading"
              >
                <Calendar className="w-4 h-4 text-[#e3a044]" />
                <span>Inscrire mon Enfant pour la Rentrée</span>
              </button>
              <button
                onClick={() => onNavigate('activites')}
                className="cursor-pointer text-xs font-bold py-3.5 px-6 rounded-full bg-white text-[#084274] border border-[#084274]/20 hover:bg-[#feeddb] transition-all flex items-center gap-2 shadow-sm font-heading"
              >
                <PartyPopper className="w-4 h-4 text-[#e3a044]" />
                <span>Découvrir les Activités Parascolaires</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border-4 border-white"
            >
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
                alt="Vie scolaire Les Marronniers El Jadida"
                className="w-full h-88 object-cover"
              />
              <div className="p-5 bg-white flex items-center justify-between">
                <div>
                  <h4 className="font-heading text-sm font-bold text-[#084274]">
                    Accueil de 07h45 à 17h30
                  </h4>
                  <p className="text-xs text-[#084274]/70">
                    Services adaptés aux parents actifs
                  </p>
                </div>
                <span className="px-3 py-1 bg-[#feeddb] text-[#084274] rounded-full text-xs font-bold">
                  Sérénité Quotidienne
                </span>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* 3. TIMELINE : LA JOURNÉE TYPE HEURE PAR HEURE */}
        <AnimatedSection className="mb-24 bg-white rounded-3xl p-8 sm:p-12 border border-[#084274]/15 shadow-md">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#e3a044] block">
              Emploi du Temps Structurant
            </span>
            <h3 className="font-heading text-3xl sm:text-4xl text-[#084274] mt-2">
              Une Journée Type aux Marronniers
            </h3>
            <p className="text-sm text-[#084274]/75 mt-3">
              Consultez le déroulé d'une journée selon l'âge de votre enfant :
            </p>

            {/* Sélecteur de cycle */}
            <div className="inline-flex p-1.5 bg-[#feeddb] rounded-2xl mt-6 border border-[#084274]/15">
              <button
                onClick={() => setCycleTab('maternelle')}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  cycleTab === 'maternelle'
                    ? 'bg-[#084274] text-white shadow-sm'
                    : 'text-[#084274] hover:text-[#e3a044]'
                }`}
              >
                Crèche & Maternelle (2 à 5 ans)
              </button>
              <button
                onClick={() => setCycleTab('primaire')}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  cycleTab === 'primaire'
                    ? 'bg-[#084274] text-white shadow-sm'
                    : 'text-[#084274] hover:text-[#e3a044]'
                }`}
              >
                Élémentaire & Primaire (CP au CE6)
              </button>
            </div>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {currentTimeline.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#feeddb]/40 rounded-2xl p-5 sm:p-6 border border-[#084274]/10 flex flex-col sm:flex-row sm:items-center gap-4 transition-all hover:bg-[#feeddb]/70"
                >
                  <div className="sm:w-44 shrink-0 flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-[#084274] text-white flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#e3a044]" />
                    </div>
                    <span className="font-heading text-xs font-bold text-[#084274]">
                      {item.time}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading text-sm sm:text-base font-bold text-[#084274] mb-1">
                      {item.title}
                    </h4>
                    <p className="font-body text-xs sm:text-sm text-[#084274]/75 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>

        {/* 4. LA RESTAURATION SCOLAIRE & CANTINE SAINE */}
        <AnimatedSection className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
                alt="Cantine saine Les Marronniers"
                className="w-full h-88 object-cover"
              />
            </motion.div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#e3a044] block">
              Nutrition & Saveurs
            </span>
            <h3 className="font-heading text-3xl sm:text-4xl text-[#084274] leading-tight">
              La Cantine des Marronniers : Frais, Équilibré et Fait Maison
            </h3>
            <p className="text-sm sm:text-base text-[#084274]/80 leading-relaxed">
              Le déjeuner est un moment éducatif à part entière. Nous proposons des menus complets et savoureux élaborés selon les recommandations de nutritionnistes pédiatriques.
            </p>
            <p className="text-sm sm:text-base text-[#084274]/80 leading-relaxed">
              Les légumes et viandes proviennent de producteurs locaux d’El Jadida. Les enfants apprennent à goûter de nouvelles saveurs, à utiliser correctement leurs couverts et à débarrasser leur plateau en toute autonomie.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-xl border border-[#084274]/15 shadow-sm hover:shadow-md transition-shadow">
                <h5 className="font-heading text-xs font-bold text-[#084274] mb-1">
                  Produits 100% Frais
                </h5>
                <p className="text-[11px] text-[#084274]/70">
                  Cuisinés le matin même, zéro surgelé ni conservateur.
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-[#084274]/15 shadow-sm hover:shadow-md transition-shadow">
                <h5 className="font-heading text-xs font-bold text-[#084274] mb-1">
                  Surveillance & Goût
                </h5>
                <p className="text-[11px] text-[#084274]/70">
                  Encadrement bienveillant pour stimuler l'appétit de chacun.
                </p>
              </div>
            </div>

            <div>
              <button
                onClick={() => onNavigate('espace-parents')}
                className="cursor-pointer text-xs font-bold py-3 px-6 rounded-full bg-[#084274] text-white hover:bg-[#063259] transition-all flex items-center gap-2 hover:translate-x-1"
              >
                <span>Consulter les Menus de la Semaine</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* 5. CHARTE DU VIVRE-ENSEMBLE */}
        <AnimatedSection className="mb-24 bg-[#084274] text-white rounded-3xl p-8 sm:p-14 shadow-xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#e3a044] block">
              Climat Scolaire Apaisé
            </span>
            <h3 className="font-heading text-3xl sm:text-4xl text-white mt-2">
              Notre Charte du Vivre-Ensemble
            </h3>
            <p className="text-sm text-white/80 mt-3 leading-relaxed">
              Pour que chaque élève s'épanouisse, l'école doit être un sanctuaire de respect, de politesse et de solidarité réciproque.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {chartePoints.map((point, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-white/10 rounded-2xl p-6 border border-white/15 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#e3a044] text-[#084274] flex items-center justify-center font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <h4 className="font-heading text-base font-bold text-white">
                    {point.title}
                  </h4>
                </div>
                <p className="text-xs text-white/75 leading-relaxed pl-11">
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* 6. ÉTUDE SURVEILLÉE & AIDE AUX DEVOIRS */}
        <AnimatedSection className="mb-24 bg-white rounded-3xl p-8 sm:p-12 border border-[#084274]/15 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#e3a044] block">
                Soirées Sereines en Famille
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl text-[#084274]">
                L'Étude Surveillée : Des Devoirs Faits à l'École avec un Professeur
              </h3>
              <p className="text-sm text-[#084274]/80 leading-relaxed">
                De 16h30 à 17h30, nos élèves du primaire peuvent rester en étude dirigée. Encadrés par des enseignants de l'école, ils font leurs devoirs, révisent leurs leçons et posent leurs questions.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#084274]">
                  <CheckCircle2 className="w-4 h-4 text-[#e3a044]" />
                  <span>Zéro conflit devoirs à la maison</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#084274]">
                  <CheckCircle2 className="w-4 h-4 text-[#e3a044]" />
                  <span>Explications claires et méthodologie</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#084274]">
                  <CheckCircle2 className="w-4 h-4 text-[#e3a044]" />
                  <span>Cartable allégé et prêt pour le lendemain</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 text-center lg:text-right">
              <button
                onClick={() => onNavigate('inscription')}
                className="cursor-pointer text-xs font-bold py-3.5 px-6 rounded-full bg-[#084274] text-white hover:bg-[#063259] transition-all shadow-md font-heading hover:scale-105"
              >
                Inscrire à l'Étude Surveillée
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* 7. CALL TO ACTION */}
        <AnimatedSection className="text-center max-w-2xl mx-auto py-6">
          <h4 className="font-heading text-2xl text-[#084274] mb-3">
            Envie de Faire Vivre cette Expérience à Votre Enfant ?
          </h4>
          <p className="text-sm text-[#084274]/75 mb-6">
            Venez nous rencontrer, visiter nos 2 campus et échanger avec la direction et les enseignants.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate('inscription')}
              className="cursor-pointer text-xs font-bold py-3.5 px-8 rounded-full bg-[#e3a044] text-[#084274] hover:bg-[#d69337] transition-all shadow-md font-heading flex items-center gap-2 hover:scale-105"
            >
              <Calendar className="w-4 h-4" />
              <span>Prendre Rendez-vous / Visiter</span>
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="cursor-pointer text-xs font-bold py-3.5 px-8 rounded-full bg-white text-[#084274] border border-[#084274]/20 hover:bg-[#feeddb] transition-all font-heading flex items-center gap-2 hover:scale-105"
            >
              <Compass className="w-4 h-4 text-[#084274]" />
              <span>Coordonnées & Itinéraire</span>
            </button>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
};
