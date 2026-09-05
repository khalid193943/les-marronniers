/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers El Jadida - Page"Sécurité & Bien-Être"
 * Protocoles physiques stricts, sol anti-chutes, hygiène renforcée, secourisme pédiatrique & sécurité affective.
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { PageId } from '../types';
import {
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  Users,
  Eye,
  CheckCircle2,
  Calendar,
  Lock,
  ArrowRight,
  Smile,
  AlertTriangle,
  Stethoscope,
  Wind,
  Car,
  ChevronDown,
  Building,
} from 'lucide-react';
import { AnimatedSection, AnimatedCard } from '../components/AnimatedSection';

interface SecuriteProps {
  onNavigate: (page: PageId) => void;
  onOpenAdmissions?: () => void;
}

export const SecuriteBienEtrePage: React.FC<SecuriteProps> = ({
  onNavigate,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const piliers = [
    {
      icon: Eye,
      title: 'Surveillance & Vigilance Continue',
      desc: 'Aucun enfant n’est jamais laissé sans surveillance adulte. Les éducatrices, enseignants et auxiliaires assurent une présence attentive et continue dans les classes, couloirs, sanitaires et cours.',
      tag: 'Présence 100%',
    },
    {
      icon: Lock,
      title: 'Contrôle d’Accès Filtré & Sas Sécurisé',
      desc: 'L’entrée de l’école est verrouillée et filtrée par un agent d’accueil. Les enfants ne sont remis qu’aux parents ou aux personnes expressément mandatées sur fiche nominative avec pièce d’identité.',
      tag: 'Accès Contrôlé',
    },
    {
      icon: ShieldCheck,
      title: 'Sol Amortissant & Aménagements Conformes',
      desc: 'Grande cour extérieure dotée d’un sol amortissant haute absorption certifié anti-chute. Mobilier aux normes de la petite enfance, coins arrondis et prises sécurisées hors d’atteinte.',
      tag: 'Protection Physique',
    },
    {
      icon: Wind,
      title: 'Hygiène Quotidienne & Aération Naturelle',
      desc: 'Désinfection minutieuse des sanitaires et points de contact 3 fois par jour. Nettoyage des jouets sensoriels de la crèche et flux d’air naturel constant dans les 6 salles de classe.',
      tag: 'Hygiène Stricte',
    },
    {
      icon: Stethoscope,
      title: 'Personnel Formé aux Premiers Soins',
      desc: 'L’ensemble de l’équipe éducative est formée aux gestes de premiers secours pédiatriques. Une infirmerie d’accueil équipée permet d’intervenir promptement pour tout petit bobo.',
      tag: 'Secourisme Agréé',
    },
    {
      icon: HeartHandshake,
      title: 'Sécurité Affective & Climat Apaisant',
      desc: 'La sécurité est aussi psychologique : nous cultivons une ambiance chaleureuse, respectueuse et prévenante pour que chaque enfant vienne à l’école le cœur léger et sans anxiété.',
      tag: 'Bien-Être Moral',
    },
  ];

  const protocoles = [
    {
      title: 'Registre de Sortie & Identité Vérifiée',
      desc: 'Aucun départ n’est autorisé sans vérification préalable. En cas d’imprévu, le parent doit prévenir l’administration par écrit ou téléphone vérifié avant 15h.',
    },
    {
      title: 'Gestion des Allergies & Protocoles PAI',
      desc: 'Prise en charge personnalisée des enfants présentant des allergies alimentaires ou de l’asthme avec trousse d’urgence identifiée et étiquetée.',
    },
    {
      title: 'Exercices d’Évacuation Biannuels',
      desc: 'Exercices incendie et simulation d’évacuation organisés chaque trimestre pour apprendre aux élèves et au personnel les bons réflexes dans le calme.',
    },
    {
      title: 'Dépose Minute Sécurisée au Plateau',
      desc: 'Emplacement Rue Beethoven pensé pour une dépose rapide et sans danger, guidée par nos agents pour éviter les traversées de chaussée périlleuses.',
    },
  ];

  const faqs = [
    {
      q: 'Comment assurez-vous la sécurité des tout-petits lors des récréations ?',
      a: 'Les récréations de la crèche/maternelle et du primaire sont distinctes dans le temps et l’espace. La cour dispose d’un sol amortissant élastomère certifié qui absorbe les chocs en cas de chute. Les éducatrices sont postées stratégiquement pour couvrir chaque recoin de l’aire de jeux.',
    },
    {
      q: 'Une tierce personne (nounou, grand-parent) peut-elle récupérer mon enfant ?',
      a: 'Seules les personnes figurant sur la fiche de renseignements remise lors de l’inscription sont autorisées à récupérer l’enfant. Une dérogation exceptionnelle n’est acceptée que sur message écrit signé du tuteur légal avec présentation obligatoire de la CIN de la personne.',
    },
    {
      q: 'Que se passe-t-il si mon enfant a de la fièvre ou fait un petit bobo pendant la journée ?',
      a: 'L’enfant est immédiatement pris en charge par notre référente premiers secours dans l’espace infirmerie. La température est contrôlée, les premiers soins prodigués et les parents sont immédiatement avisés par téléphone.',
    },
    {
      q: 'Quelles sont les mesures sanitaires et de propreté appliquées ?',
      a: 'Les sanitaires sont nettoyés après chaque pause récréative. Les tables, poignées et jouets sont désinfectés quotidiennement avec des produits hypoallergéniques certifiés sans risque pour les enfants.',
    },
  ];

  return (
    <div className="bg-[#feeddb] min-h-screen">
      
      {/* 1. Page Header */}
      <PageHeader
        tag="07 — BIEN-ÊTRE & PROTECTION"
        title="Sécurité &"
        highlightedWord="Bien-Être"
        description="Parce que la sérénité des parents et la protection physique et affective de l'enfant sont notre priorité absolue à chaque instant de la journée."
        onNavigate={onNavigate}
        breadcrumbs={[{ label: 'Sécurité & Bien-Être' }]}
      />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-16">
        
        {/* 2. SECTION INTRODUCTION */}
        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#e3a044] block">
              Zéro Compromis sur la Protection
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-[#084274] leading-tight">
              Un Cocon Sécurisé Conçu pour la <strong>Tranquillité des Familles</strong>
            </h2>
            <p className="font-body text-base text-[#084274]/85 leading-relaxed">
              Confier son enfant à une école est le plus bel acte de foi qu’un parent puisse faire. Aux Marronniers El Jadida, nous considérons cette confiance comme un engagement sacré.
            </p>
            <p className="font-body text-base text-[#084274]/85 leading-relaxed">
              De l’infrastructure matérielle (angles protégés, sol amortissant, mobilier adapté) jusqu’à la formation continue de notre personnel aux gestes qui sauvent, chaque détail architectural et humain a été pensé pour prévenir le moindre risque.
            </p>

            <div className="p-4 bg-white rounded-2xl border border-[#084274]/15 shadow-sm flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-[#e3a044] shrink-0" />
              <div>
                <h5 className="font-heading text-xs font-bold text-[#084274]">
                  Homologation & Contrôle Régulier
                </h5>
                <p className="text-[11px] text-[#084274]/70">
                  Tous nos équipements de jeux et matériels de classe répondent strictement aux normes de sécurité en vigueur.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('locaux')}
                className="cursor-pointer text-xs font-bold py-3.5 px-6 rounded-full bg-[#084274] text-white hover:bg-[#063259] transition-all flex items-center gap-2 shadow-sm font-heading hover:scale-105"
              >
                <Building className="w-4 h-4 text-[#e3a044]" />
                <span>Visiter nos 2 Campus en Personne</span>
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="cursor-pointer text-xs font-bold py-3.5 px-6 rounded-full bg-white text-[#084274] border border-[#084274]/20 hover:bg-[#feeddb] transition-all flex items-center gap-2 shadow-sm font-heading hover:scale-105"
              >
                <Lock className="w-4 h-4 text-[#084274]" />
                <span>Consulter le Règlement Intérieur</span>
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
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80"
                alt="Sécurité et bienveillance aux Marronniers"
                className="w-full h-92 object-cover"
              />
              <div className="p-5 bg-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-heading text-sm font-bold text-[#084274]">
                      Sas d'Entrée Filtré
                    </h4>
                    <p className="text-xs text-[#084274]/70">
                      Plateau, Rue Beethoven
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-[#25D366]/20 text-[#084274] rounded-full text-xs font-bold">
                    Zone Sécurisée
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* 3. LES 6 PILIERS DE SÉCURITÉ */}
        <AnimatedSection className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#e3a044] block">
              Notre Dispositif Global
            </span>
            <h3 className="font-heading text-3xl sm:text-4xl text-[#084274] mt-2">
              6 Niveaux de Protection Intégrés
            </h3>
            <p className="text-sm text-[#084274]/75 mt-3 leading-relaxed">
              Une sécurité invisible mais omniprésente qui laisse l'enfant libre de jouer, créer et grandir sans appréhension.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {piliers.map((pilier, idx) => {
              const Icon = pilier.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl p-7 border border-[#084274]/15 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
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
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                    <span>Protocole vérifié au quotidien</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>

        {/* 4. PROTOCOLES OPÉRATIONNELS DÉTAILLÉS */}
        <AnimatedSection className="mb-24 bg-white rounded-3xl p-8 sm:p-12 border border-[#084274]/15 shadow-md">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#e3a044] block">
              Procédures Quotidiennes
            </span>
            <h3 className="font-heading text-3xl sm:text-4xl text-[#084274] mt-2">
              Des Protocoles Clairs et Éprouvés
            </h3>
            <p className="text-sm text-[#084274]/80 mt-3">
              Rien n'est laissé au hasard dans l'organisation de notre vie d'école.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {protocoles.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="bg-[#feeddb]/40 rounded-2xl p-6 border border-[#084274]/10"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-[#084274] text-white flex items-center justify-center font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <h4 className="font-heading text-base font-bold text-[#084274]">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#084274]/75 leading-relaxed pl-10">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* 5. FOCUS : LA SÉCURITÉ AFFECTIVE */}
        <AnimatedSection className="mb-24 bg-[#084274] text-white rounded-3xl p-8 sm:p-14 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#e3a044] block">
                Épanouissement Émotionnel
              </span>
              <h3 className="font-heading text-3xl sm:text-4xl text-white">
                La Sécurité Affective : Apprendre le Cœur Léger
              </h3>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                Un enfant stressé ou apeuré bloque ses mécanismes d'apprentissage. Aux Marronniers, nous accordons une importance fondamentale au climat relationnel dans chaque classe.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <Smile className="w-5 h-5 text-[#e3a044] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-white/80">
                    <strong>Écoute active :</strong> les éducatrices prennent le temps d’écouter les chagrins du matin et de dénouer les petites frustrations.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <HeartHandshake className="w-5 h-5 text-[#e3a044] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-white/80">
                    <strong>Règlement des conflits par la parole :</strong> pas de cris ni d’humiliation, les enfants apprennent à exprimer leur ressenti.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-[#e3a044] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-white/80">
                    <strong>Solidarité entre niveaux :</strong> les grands du primaire parrainent avec tendresse les petits de maternelle.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80"
                  alt="Écoute et bienveillance aux Marronniers"
                  className="w-full h-80 object-cover"
                />
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* 6. FAQ SÉCURITÉ */}
        <AnimatedSection className="mb-20 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#e3a044] block">
              Questions & Réponses
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl text-[#084274] mt-2">
              Foire Aux Questions sur la Sécurité
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
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
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#e3a044] transition-transform shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-5 pb-5 pt-1 border-t border-[#084274]/10 text-xs sm:text-sm text-[#084274]/80 leading-relaxed font-body"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </AnimatedSection>

        {/* 7. CALL TO ACTION */}
        <AnimatedSection className="text-center max-w-2xl mx-auto py-6">
          <h4 className="font-heading text-2xl text-[#084274] mb-3">
            Venez Constater par Vous-Même Nos Standards de Sécurité
          </h4>
          <p className="text-sm text-[#084274]/75 mb-6 leading-relaxed">
            Prenez rendez-vous pour visiter nos 2 campus, inspecter la cour, les classes et échanger avec la direction.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate('inscription')}
              className="cursor-pointer text-xs font-bold py-3.5 px-8 rounded-full bg-[#e3a044] text-[#084274] hover:bg-[#d69337] transition-all shadow-md font-heading flex items-center gap-2 hover:scale-105"
            >
              <Calendar className="w-4 h-4" />
              <span>Réserver une Visite des Lieux</span>
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="cursor-pointer text-xs font-bold py-3.5 px-8 rounded-full bg-white text-[#084274] border border-[#084274]/20 hover:bg-[#feeddb] transition-all font-heading flex items-center gap-2 hover:scale-105"
            >
              <ShieldCheck className="w-4 h-4 text-[#084274]" />
              <span>Poser une Question au Secrétariat</span>
            </button>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
};
