/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers El Jadida - Page"Notre Projet Pédagogique"
 * Démarche éducative approfondie, trilinguisme immersif, méthode Singapour, sciences & épanouissement.
 */

import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { AnimatedSection } from '../components/AnimatedSection';
import { motion } from 'motion/react';
import { PageId } from '../types';
import {
  Compass,
  Heart,
  Users,
  Brain,
  Palette,
  Activity,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Lightbulb,
  Globe2,
  BookOpen,
  Calculator,
  Microscope,
  Smile,
  ShieldCheck,
  ChevronDown,
  Award,
  Sparkles,
  Layers,
  MessageSquare,
} from 'lucide-react';

interface PedagogiePageProps {
  onNavigate: (page: PageId) => void;
  onOpenAdmissions?: () => void;
}

export const PedagogiePage: React.FC<PedagogiePageProps> = ({
  onNavigate,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const piliers = [
    {
      icon: Compass,
      title: 'Apprentissage par l’Action & l’Expérience',
      desc: 'L’enfant retient ce qu’il manipule et expérimente. Nos cours partent systématiquement du concret vers l’abstrait, stimulant sa curiosité active plutôt qu’une écoute passive.',
      tag: 'Actif & Concret',
    },
    {
      icon: Globe2,
      title: 'Trilinguisme Naturel Précoce',
      desc: 'Bain linguistique quotidien en Français, Arabe classique et Anglais dès la maternelle. L’oreille de l’enfant intègre les phonèmes avec une aisance native.',
      tag: 'Français • Arabe • Anglais',
    },
    {
      icon: Microscope,
      title: 'Éveil Scientifique & Démarche d’Investigation',
      desc: 'Grâce à notre laboratoire d’éveil, les élèves émettent des hypothèses, manipulent des éprouvettes adaptées et observent la nature vivante.',
      tag: 'Curiosité & Rigueur',
    },
    {
      icon: Activity,
      title: 'Développement Psychomoteur & Équilibre',
      desc: 'Le corps est le socle de l’intelligence. Notre salle de psychomotricité et la cour avec sol amortissant favorisent la coordination motrice fine et globale.',
      tag: 'Motricité & Énergie',
    },
    {
      icon: Palette,
      title: 'Expression Scénique, Théâtre & Musique',
      desc: 'Libérer la voix, surmonter la timidité, articuler avec clarté et coopérer : le théâtre et le chant choral forgent l’éloquence dès le plus jeune âge.',
      tag: 'Confiance & Éloquence',
    },
    {
      icon: Heart,
      title: 'Bienveillance & Sécurité Affective',
      desc: 'Un enfant qui se sent écouté et valorisé n’a pas peur de faire des erreurs. Nous transformons chaque hésitation en tremplin de réussite.',
      tag: 'Climat Serein',
    },
  ];

  const mathSteps = [
    {
      num: '01',
      title: 'L’Étape Concrète (Manipulation)',
      desc: 'Les élèves manipulent des jetons, des perles Montessori, des réglettes Cuisenaire et des solides géométriques pour comprendre physiquement les quantités.',
      icon: Layers,
    },
    {
      num: '02',
      title: 'L’Étape Picturale (Modélisation en barres)',
      desc: 'Ils transposent ce qu’ils ont touché sous forme de schémas, de barres proportionnelles et de dessins structurés qui clarifient l’énoncé du problème.',
      icon: Palette,
    },
    {
      num: '03',
      title: 'L’Étape Abstraite (Symbolisation & Calcul)',
      desc: 'Une fois le concept compris visuellement, l’écriture des chiffres, des opérations (+, -, ×, ÷) et des équations devient intuitive et fluide.',
      icon: Calculator,
    },
  ];

  const trilinguismeDetails = [
    {
      lang: 'Français',
      role: 'Langue Principale d’Enseignement & de Pensée',
      accentColor: 'border-[#084274]',
      badgeColor: 'bg-[#084274] text-white',
      desc: 'Tous les enseignements fondamentaux (mathématiques, sciences, littérature, découverte du monde) sont dispensés avec un soin méticuleux apporté à l’enrichissement du lexique, à la structure syntaxique et à l’amour des livres.',
      points: [
        'Méthode syllabique enrichie dès la GS et consolidée au CP',
        'Production d’écrits personnels dès le CE1 (récits, poésies, exposés)',
        'Bibliothèque de classe et rallye-lecture trimestriel',
        'Ateliers d’éloquence et prise de parole en public',
      ],
    },
    {
      lang: 'Arabe Classique',
      role: 'Enracinement Culturel & Richesse Littéraire',
      accentColor: 'border-[#e3a044]',
      badgeColor: 'bg-[#e3a044] text-[#084274]',
      desc: 'L’Arabe classique est enseigné avec passion selon les exigences du Ministère de l’Éducation Nationale marocain, en valorisant la beauté de la langue, l’art de la calligraphie et la mémorisation de textes choisis.',
      points: [
        'Éveil aux sonorités et comptines arabes dès la crèche et maternelle',
        'Initiation rigoureuse à la lecture et à l’écriture dès le CP',
        'Étude de contes traditionnels et poésie arabe',
        'Maîtrise grammaticale exemplaire validée aux examens du CE6',
      ],
    },
    {
      lang: 'Anglais (Cambridge)',
      role: 'Ouverture Internationale & Aisance Orale',
      accentColor: 'border-[#2a9d8f]',
      badgeColor: 'bg-[#2a9d8f] text-white',
      desc: 'Dès 3 ans, l’anglais s’invite naturellement dans les rituels du quotidien. Des éducateurs anglophones animent des jeux, des chansons et des dialogues selon les standards du Cambridge Young Learners (Starters, Movers).',
      points: [
        'Bain d’écoute quotidien (consignes, météo, rituels en anglais)',
        'Jeux de rôles, flashcards interactives et marionnettes',
        'Acquisition précoce d’un accent naturel sans filtre phonologique',
        'Aisance spontanée à converser sur des thèmes du quotidien',
      ],
    },
  ];

  const faqItems = [
    {
      q: 'Comment appliquez-vous la méthode de Singapour en mathématiques ?',
      a: 'La méthode de Singapour repose sur le passage progressif du concret (manipuler des objets), au pictural (dessiner des barres de modélisation), puis à l’abstrait (poser les opérations). Cela permet à 100% des élèves de comprendre le "pourquoi" avant d’apprendre le "comment", éliminant ainsi toute angoisse des maths.',
    },
    {
      q: 'Comment gérez-vous les enfants arrivant sans notions d’une des trois langues ?',
      a: 'Nos équipes mettent en place une pédagogie différenciée avec des séances de renforcement bienveillant en petits groupes. L’immersion naturelle et l’entraide entre camarades permettent une intégration linguistique rapide en 4 à 8 semaines.',
    },
    {
      q: 'Quel est le volume de travail à la maison le soir ?',
      a: 'Nous croyons aux soirées sereines en famille. L’essentiel du travail de mémorisation et d’assimilation est réalisé en classe. Les devoirs se limitent à de courtes lectures plaisir (10 à 15 minutes) et à la réactivation des notions vues, sans surcharge.',
    },
    {
      q: 'Comment évaluez-vous les progrès des élèves ?',
      a: 'Nous privilégions l’évaluation formative continue : des bilans de compétences clairs sans classement anxiogène. En maternelle, un livret de progrès illustré permet aux parents de suivre les acquisitions. En primaire, des évaluations régulières préparent sereinement aux épreuves officielles du CE6.',
    },
    {
      q: 'Y a-t-il un accompagnement pour les élèves à besoins particuliers ou précoces ?',
      a: 'Oui. Nos effectifs réduits permettent à nos enseignants d’adapter le rythme d’apprentissage : parcours d’approfondissement pour les élèves rapides, et étayage personnalisé pour ceux qui ont besoin de temps supplémentaire.',
    },
  ];

  return (
    <div className="bg-[#feeddb] min-h-screen">
      
      {/* 1. Page Header */}
      <PageHeader
        tag="03 — DÉMARCHE PÉDAGOGIQUE"
        title="Notre Projet"
        highlightedWord="Pédagogique"
        description="Une approche équilibrée alliant bienveillance affective, trilinguisme précoce, rigueur intellectuelle et goût d'apprendre pour préparer l'enfant à réussir."
        onNavigate={onNavigate}
        breadcrumbs={[{ label: 'Notre Pédagogie' }]}
      />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-16">
        
        {/* 2. SECTION INTRODUCTION & MANIFESTE */}
        <AnimatedSection direction="up" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#e3a044] block">
              La Philosophie des Marronniers
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-[#084274] leading-tight">
              Donner à chaque enfant le <strong>goût d'apprendre</strong> et les clés de l'excellence
            </h2>
            <p className="font-body text-base text-[#084274]/85 leading-relaxed">
              Aux Marronniers El Jadida, la réussite scolaire ne s’obtient jamais sous la contrainte ou par le bachotage passif. Elle naît de l’émerveillement intellectuel, du plaisir de comprendre et de la confiance que l’enfant porte en ses propres capacités.
            </p>
            <p className="font-body text-base text-[#084274]/85 leading-relaxed">
              Notre équipe d’enseignants et d’éducatrices chevronnés conjugue les exigences des programmes officiels marocains avec les avancées des neurosciences éducatives (méthode de Singapour, pédagogie de projet, manipulation concrète).
            </p>

            <div className="p-5 bg-white rounded-2xl border border-[#084274]/15 shadow-sm flex items-start gap-4">
              <Sparkles className="w-6 h-6 text-[#e3a044] shrink-0 mt-1" />
              <div>
                <h4 className="font-heading text-sm font-bold text-[#084274]">
                  Notre Règle d'Or Pédagogique
                </h4>
                <p className="text-xs text-[#084274]/75 mt-1 italic">
                  « L’erreur n’est pas une faute, c’est le premier pas indispensable vers la compréhension. Un élève encouragé apprend deux fois plus vite et conserve son enthousiasme intact. »
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate('inscription')}
                className="cursor-pointer text-xs font-bold py-3.5 px-6 rounded-full bg-[#084274] text-white hover:bg-[#063259] transition-all flex items-center gap-2 shadow-sm font-heading"
              >
                <Calendar className="w-4 h-4 text-[#e3a044]" />
                <span>Prendre Rendez-vous / Déposer un Dossier</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate('locaux')}
                className="cursor-pointer text-xs font-bold py-3.5 px-6 rounded-full bg-white text-[#084274] border border-[#084274]/20 hover:bg-[#feeddb] transition-all flex items-center gap-2 shadow-sm font-heading"
              >
                <Compass className="w-4 h-4 text-[#084274]" />
                <span>Explorer nos 2 Campus</span>
              </motion.button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border-4 border-white"
            >
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80"
                alt="Enseignement actif aux Marronniers El Jadida"
                className="w-full h-96 object-cover"
              />
              <div className="p-6 bg-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-heading text-lg font-bold text-[#084274]">
                      100% Réussite CE6
                    </p>
                    <p className="text-xs text-[#084274]/70">
                      Admission dans les meilleurs collèges
                    </p>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full bg-[#e3a044]/20 text-[#084274] font-bold text-xs">
                    Excellence Reconnue
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* 3. LES 6 PILIERS PÉDAGOGIQUES FONDAMENTAUX */}
        <AnimatedSection direction="up" className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#e3a044] block">
              Cadre d'Apprentissage
            </span>
            <h3 className="font-heading text-3xl sm:text-4xl text-[#084274] mt-2">
              Les 6 Piliers de Notre Démarche
            </h3>
            <p className="text-sm text-[#084274]/75 mt-3 leading-relaxed">
              Chaque journée d'école est rythmée pour solliciter harmonieusement l'intelligence logique, la créativité sensible et le bien-être physique de l'enfant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {piliers.map((pilier, idx) => {
              const Icon = pilier.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6, boxShadow: "0 10px 25px -5px rgba(8, 66, 116, 0.1)" }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl p-7 border border-[#084274]/15 shadow-sm transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#feeddb] text-[#084274] flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-[#084274]/10 text-[#084274]">
                        {pilier.tag}
                      </span>
                    </div>

                    <h4 className="font-heading text-lg font-bold text-[#084274] mb-2 leading-snug">
                      {pilier.title}
                    </h4>
                    <p className="font-body text-xs sm:text-sm text-[#084274]/75 leading-relaxed">
                      {pilier.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#084274]/10 flex items-center text-xs font-bold text-[#e3a044]">
                    <span>Pilier {idx + 1} de la méthode</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>

        {/* 4. SECTION DÉDIÉE AU TRILINGUISME NATUREL */}
        <AnimatedSection direction="up" className="mb-24 bg-white rounded-3xl p-8 sm:p-12 border border-[#084274]/15 shadow-lg">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#e3a044] block">
              Compétence Clé du 21e Siècle
            </span>
            <h3 className="font-heading text-3xl sm:text-4xl text-[#084274] mt-2">
              Le Trilinguisme Naturel dès le Plus Jeune Âge
            </h3>
            <p className="text-sm sm:text-base text-[#084274]/80 mt-3 leading-relaxed">
              Au Maroc et dans le monde d’aujourd’hui, maîtriser avec élégance le <strong>Français</strong>, l'<strong>Arabe classique</strong> et l'<strong>Anglais</strong> ouvre toutes les portes académiques et professionnelles. Aux Marronniers, ce trilinguisme n’est pas une corvée mais une seconde nature.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {trilinguismeDetails.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className={`bg-[#feeddb]/50 rounded-2xl p-6 border-t-4 ${item.accentColor} border-x border-b border-[#084274]/10 flex flex-col justify-between transition-all`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${item.badgeColor}`}>
                      {item.lang}
                    </span>
                  </div>
                  <h4 className="font-heading text-base font-bold text-[#084274] mb-2">
                    {item.role}
                  </h4>
                  <p className="text-xs text-[#084274]/80 leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  <div className="space-y-2.5">
                    <p className="text-[11px] font-black uppercase tracking-wider text-[#084274]/60">
                      Objectifs & Méthodologie :
                    </p>
                    {item.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-[#084274]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#e3a044] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#084274]/10 text-[11px] text-[#084274]/70 italic">
                  Pratique quotidienne et interactive
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* 5. MÉTHODE DE SINGAPOUR EN MATHÉMATIQUES */}
        <AnimatedSection direction="up" className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#e3a044] block">
                Mathématiques Sans Angoisse
              </span>
              <h3 className="font-heading text-3xl sm:text-4xl text-[#084274]">
                Comprendre avant d’apprendre : la Méthode de Singapour
              </h3>
              <p className="text-sm sm:text-base text-[#084274]/80 leading-relaxed">
                Reconnue mondialement pour son efficacité lors des classements PISA, la méthode de Singapour supprime le réflexe d’appliquer des formules sans les comprendre.
              </p>
              <p className="text-sm sm:text-base text-[#084274]/80 leading-relaxed">
                Chaque notion nouvelle passe par un cycle en 3 étapes (C-P-A) : <strong>Concret</strong> (manipulation), <strong>Pictural</strong> (dessin en barres) et <strong>Abstrait</strong> (symboles mathématiques).
              </p>

              <div className="p-4 bg-white rounded-2xl border border-[#084274]/15 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#084274]">
                  <Award className="w-4 h-4 text-[#e3a044]" />
                  <span>Bénéfice prouvé sur les élèves :</span>
                </div>
                <p className="text-xs text-[#084274]/75">
                  Développe un raisonnement logique rigoureux, apprend à résoudre des problèmes complexes et suscite le plaisir spontané de chercher.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {mathSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white rounded-2xl p-6 border border-[#084274]/15 shadow-sm flex items-start gap-5 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#084274] text-white flex items-center justify-center font-heading text-base font-bold shrink-0">
                      {step.num}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-4 h-4 text-[#e3a044]" />
                        <h4 className="font-heading text-base font-bold text-[#084274]">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-[#084274]/75 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* 6. PÔLE SCIENCES & DÉCOUVERTE DU VIVANT */}
        <AnimatedSection direction="up" className="mb-24 bg-[#084274] text-white rounded-3xl p-8 sm:p-14 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#e3a044] block">
                Laboratoire d'Expérimentation
              </span>
              <h3 className="font-heading text-3xl sm:text-4xl text-white">
                La Démarche Scientifique dès l'Enfance
              </h3>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                Nos élèves ne lisent pas seulement la science dans un manuel : ils la vivent. Dans notre salle d'éveil scientifique dédiée et dans notre jardin scolaire, ils observent la germination, construisent des circuits électriques sécurisés et découvrent la biologie.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white/10 rounded-xl border border-white/10">
                  <h5 className="font-heading text-sm font-bold text-[#e3a044] mb-1">
                    Démarche d'Investigation
                  </h5>
                  <p className="text-xs text-white/70">
                    Poser une question, formuler une hypothèse, tester par l'expérience et analyser ensemble le résultat.
                  </p>
                </div>
                <div className="p-4 bg-white/10 rounded-xl border border-white/10">
                  <h5 className="font-heading text-sm font-bold text-[#e3a044] mb-1">
                    Écocitoyenneté Active
                  </h5>
                  <p className="text-xs text-white/70">
                    Sensibilisation au tri sélectif, respect de l'eau, préservation du littoral d'El Jadida et biodiversité.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20"
              >
                <img
                  src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?auto=format&fit=crop&w=800&q=80"
                  alt="Laboratoire scientifique Les Marronniers"
                  className="w-full h-80 object-cover"
                />
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* 7. SUIVI INDIVIDUALISÉ & DIFFÉRENCIATION */}
        <AnimatedSection direction="up" className="mb-24 bg-white rounded-3xl p-8 sm:p-12 border border-[#084274]/15 shadow-sm">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#e3a044] block">
              Accompagnement Sur-Mesure
            </span>
            <h3 className="font-heading text-3xl sm:text-4xl text-[#084274] mt-2">
              Un Regard Bienveillant sur Chaque Profil
            </h3>
            <p className="text-sm sm:text-base text-[#084274]/80 mt-3">
              Chaque enfant a son propre rythme d’éclosion. Grâce à nos effectifs limités par classe, aucun élève n'est invisible ou laissé de côté.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div whileHover={{ y: -6 }} className="p-6 bg-[#feeddb]/40 rounded-2xl border border-[#084274]/10 transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#084274] text-white flex items-center justify-center mb-4">
                <Smile className="w-5 h-5 text-[#e3a044]" />
              </div>
              <h4 className="font-heading text-base font-bold text-[#084274] mb-2">
                Évaluations Formatives Sans Stress
              </h4>
              <p className="text-xs text-[#084274]/75 leading-relaxed">
                Pas de classements stigmatisants. Les bilans valorisent les progrès accomplis, identifient les points à consolider et encouragent l’effort.
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -6 }} className="p-6 bg-[#feeddb]/40 rounded-2xl border border-[#084274]/10 transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#084274] text-white flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-[#e3a044]" />
              </div>
              <h4 className="font-heading text-base font-bold text-[#084274] mb-2">
                Remédiation & Soutien Intégré
              </h4>
              <p className="text-xs text-[#084274]/75 leading-relaxed">
                Lorsqu'une notion est mal comprise, l'enseignant intervient aussitôt en petits ateliers de déblocage ciblés avant que la difficulté ne s'installe.
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -6 }} className="p-6 bg-[#feeddb]/40 rounded-2xl border border-[#084274]/10 transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#084274] text-white flex items-center justify-center mb-4">
                <Heart className="w-5 h-5 text-[#e3a044]" />
              </div>
              <h4 className="font-heading text-base font-bold text-[#084274] mb-2">
                Alliance Étroite avec les Parents
              </h4>
              <p className="text-xs text-[#084274]/75 leading-relaxed">
                Rendez-vous individuels réguliers, cahier de liaison numérique et écoute permanente pour que l’école et la famille avancent main dans la main.
              </p>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* 8. FAQ PÉDAGOGIQUE DÉTAILLÉE */}
        <AnimatedSection direction="up" className="mb-20 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#e3a044] block">
              Questions Fréquentes des Parents
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl text-[#084274] mt-2">
              Tout Savoir sur Notre Approche Pédagogique
            </h3>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#084274]/15 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-heading text-sm sm:text-base font-bold text-[#084274] cursor-pointer"
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#e3a044] transition-transform shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 border-t border-[#084274]/10 text-xs sm:text-sm text-[#084274]/80 leading-relaxed font-body">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </AnimatedSection>

        {/* 9. CALL TO ACTION FINAL */}
        <AnimatedSection direction="up" className="bg-gradient-to-br from-[#084274] to-[#0b5494] text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl">
          <h3 className="font-heading text-2xl sm:text-3xl text-white mb-3">
            Venez Découvrir Notre Pédagogie en Situation Réelle
          </h3>
          <p className="text-sm text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Rien ne remplace le regard d'un parent observant une classe en activité. Nous vous accueillons avec plaisir sur nos 2 campus pour vous expliquer notre méthode et échanger sur votre enfant.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('inscription')}
              className="cursor-pointer text-xs sm:text-sm font-bold py-3.5 px-8 rounded-full bg-[#e3a044] text-[#084274] hover:bg-[#d69337] transition-all flex items-center gap-2 shadow-lg font-heading"
            >
              <Calendar className="w-4 h-4" />
              <span>Réserver une Visite Pédagogique Privée</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('locaux')}
              className="cursor-pointer text-xs sm:text-sm font-bold py-3.5 px-8 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all flex items-center gap-2 font-heading"
            >
              <Compass className="w-4 h-4 text-[#e3a044]" />
              <span>Visiter les Campus Beethoven & Ibn Khaldoun</span>
            </motion.button>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
};
