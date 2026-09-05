/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers El Jadida - Page Foire Aux Questions (FAQ)
 * Esthétique Ovo Giggle / Bento Grids / Recherche Instantanée / Accordéon Fluide
 */

import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { SectionDivider } from '../components/SectionDivider';
import { PageId } from '../types';
import { SCHOOL_INFO } from '../data/schoolInfo';
import {
  HelpCircle,
  ChevronDown,
  Search,
  CheckCircle2,
  Calendar,
  Phone,
  ArrowRight,
  MessageSquare,
  Sparkles,
  Send,
  Building2,
  Clock,
  ShieldCheck,
  GraduationCap,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedSection } from '../components/AnimatedSection';

interface FaqPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAdmissions: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({
  onNavigate,
  onOpenAdmissions,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [userQuestion, setUserQuestion] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [questionSent, setQuestionSent] = useState(false);

  const faqs = [
    {
      category: 'admissions',
      question: 'Quels niveaux scolaires sont accueillis aux Marronniers El Jadida ?',
      answer: 'Notre établissement accueille les enfants dès la Crèche (2 à 3 ans), en Maternelle (TPS, PS, MS, GS - 3 à 5 ans) et durant tout le cycle Primaire officiel (du CP au CE6 - 6 à 11 ans). Ce continuum sur 2 campus dédiés garantit une progression pédagogique harmonieuse sans rupture.',
      highlight: 'Continuum de 2 à 11 ans',
    },
    {
      category: 'locaux',
      question: 'Où se situent exactement les 2 campus de l’école à El Jadida ?',
      answer: 'Nos deux campus sont situés dans le quartier résidentiel et paisible du Plateau à El Jadida (24000). Le Campus Beethoven (16 Lot Al Asdikaa, Rue Beethoven) accueille la Crèche et la Maternelle, tandis que le Campus Ibn Khaldoun accueille le cycle Primaire. Les deux sites offrent un accès facile et des places de stationnement directes pour les parents.',
      highlight: 'Quartier Plateau • Stationnement aisé',
    },
    {
      category: 'admissions',
      question: 'Quelle est la procédure exacte pour inscrire un enfant ?',
      answer: 'La procédure se déroule en 3 étapes bienveillantes : 1) Prise de rendez-vous de visite en ligne ou par téléphone (+212 523 395 603). 2) Rencontre avec la direction pédagogique et visite personnalisée des locaux. 3) Dépôt du dossier administratif (certificat de scolarité pour le primaire, carnet de vaccination, photos d’identité) et confirmation de la place.',
      highlight: 'Visite privée préalable obligatoire',
    },
    {
      category: 'pedagogie',
      question: 'Comment s’organise l’apprentissage des langues (Français, Arabe, Anglais) ?',
      answer: 'Dès la Petite Section de Maternelle, nos élèves bénéficient d’une immersion trilingue naturelle. Le français et l’arabe littéraire sont enseignés de front avec rigueur. L’anglais est introduit dès le plus jeune âge sous forme de comptines, rituels oraux et jeux interactifs, puis structuré progressivement jusqu’au CE6.',
      highlight: 'Immersion trilingue dès 3 ans',
    },
    {
      category: 'horaires',
      question: 'Quels sont les horaires de classe et proposez-vous une garderie ?',
      answer: 'L’accueil des élèves se fait dès 07h45 le matin. Les cours s’échelonnent de 08h30 à 12h00, puis de 14h00 à 16h30. Pour faciliter le quotidien des parents actifs, un service de cantine équilibrée et une garderie surveillée avec aide aux devoirs et ateliers sont proposés jusqu’à 18h00.',
      highlight: 'Accueil de 07h45 à 18h00',
    },
    {
      category: 'securite',
      question: 'Quelles sont les mesures de sécurité et de propreté mises en place ?',
      answer: 'La sécurité est absolue : un agent de contrôle filtre systématiquement chaque entrée. Les cours de récréation disposent d’un sol amortissant haute sécurité certifié anti-chocs. L’ensemble du personnel est formé aux gestes de premiers secours pédiatriques. Enfin, les classes et sanitaires font l’objet d’un protocole de désinfection quotidien rigoureux.',
      highlight: 'Sol anti-choc & Accès sécurisé',
    },
    {
      category: 'pedagogie',
      question: 'Quelles sont les activités parascolaires intégrées à l’école ?',
      answer: 'Les Marronniers intègrent à la vie scolaire plus de 15 ateliers : notre Club Officiel d’Échecs, notre laboratoire d’éveil scientifique et robotique, notre espace Cinéma-Théâtre de 50 places pour l’art dramatique et la prise de parole en public, le chant choral et la gymnastique/psychomotricité.',
      highlight: 'Échecs, Théâtre, Sciences & Cinéma',
    },
    {
      category: 'admissions',
      question: 'Comment obtenir la grille des tarifs de scolarité 2026-2027 ?',
      answer: 'Par souci d’éthique et de transparence, notre grille tarifaire détaillée (frais d’inscription, écolage mensuel, options cantine et ateliers) vous est remise en main propre lors de votre entretien avec la direction. Cela nous permet d’adapter les modalités selon le niveau et la fratrie.',
      highlight: 'Transparence & Facilités de paiement',
    },
  ];

  const filteredFaqs = faqs.filter((f) => {
    const matchCat = activeCategory === 'all' || f.category === activeCategory;
    const matchQuery =
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchQuery;
  });

  const handleAskQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    setQuestionSent(true);
  };

  return (
    <div className="bg-[#feeddb] min-h-screen">
      <PageHeader
        tag="QUESTIONS FRÉQUENTES & RÉPONSES DÉTAILLÉES"
        title="Foire Aux"
        highlightedWord="Questions"
        description="Tout ce que vous devez savoir sur la vie scolaire, les admissions, les infrastructures et le projet éducatif de l'École Les Marronniers."
        onNavigate={onNavigate}
        breadcrumbs={[{ label: 'FAQ' }]}
      />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-14 sm:py-20">
        
        {/* Search Bar & Category Filters */}
        <AnimatedSection direction="up" className="max-w-3xl mx-auto mb-16">
          <div className="relative mb-8">
            <Search className="w-5 h-5 text-[#084274]/50 absolute left-5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Rechercher par mot-clé (ex: tarifs, cantine, échecs, horaires, campus...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-4 bg-white border-2 border-[#084274]/15 text-xs sm:text-sm text-[#084274] placeholder-[#084274]/50 shadow-md focus:outline-none focus:border-[#084274]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-[#084274]/60 hover:text-[#084274] cursor-pointer"
              >
                Effacer
              </button>
            )}
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              { id: 'all', label: 'Toutes les Questions' },
              { id: 'admissions', label: 'Inscriptions & Tarifs' },
              { id: 'locaux', label: 'Les 2 Campus & Accès' },
              { id: 'pedagogie', label: 'Pédagogie & Langues' },
              { id: 'horaires', label: 'Horaires & Garderie' },
              { id: 'securite', label: 'Sécurité & Hygiène' },
            ].map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer border-2 ${
                  activeCategory === cat.id
                    ? 'bg-[#084274] text-white border-[#084274] shadow-md scale-105'
                    : 'bg-white text-[#084274] hover:bg-white/80 border-[#084274]/15'
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </AnimatedSection>

        {/* FAQ Accordion List */}
        <AnimatedSection direction="up" className="max-w-4xl mx-auto space-y-4 mb-20">
          {filteredFaqs.length === 0 ? (
            <div className="bg-[#e6ccb2] p-8 text-center border-2 border-[#084274]/15">
              <HelpCircle className="w-10 h-10 text-[#e3a044] mx-auto mb-2" />
              <p className="font-heading font-bold text-lg text-[#084274]">Aucun résultat trouvé pour votre recherche.</p>
              <p className="text-xs text-[#084274]/70 mt-1">Posez-nous directement votre question via le formulaire ci-dessous.</p>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className={`border-2 transition-all overflow-hidden ${
                    isOpen
                      ? 'bg-white border-[#084274] shadow-lg'
                      : 'bg-[#e6ccb2] border-[#084274]/15 hover:border-[#084274]/30'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#e3a044] block mb-1">
                        {faq.highlight}
                      </span>
                      <h3 className="font-heading text-base sm:text-lg font-bold text-[#084274] leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                    <div className={`w-8 h-8 rounded-none flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-[#084274] text-[#feeddb] rotate-180' : 'bg-white text-[#084274]'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-2 text-xs sm:text-sm font-body text-[#084274]/85 leading-relaxed border-t border-[#084274]/10">
                          <p>{faq.answer}</p>
                          <div className="mt-4 pt-3 flex items-center gap-4 text-xs font-bold text-[#084274]">
                            <button
                              onClick={onOpenAdmissions}
                              className="text-[#e3a044] hover:text-[#084274] flex items-center gap-1 cursor-pointer"
                            >
                              <span>Prendre rendez-vous de visite</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          )}
        </AnimatedSection>

        {/* Ask Question / Direct Contact Box */}
        <AnimatedSection direction="up" className="max-w-4xl mx-auto bg-[#084274] text-[#feeddb] p-8 sm:p-12 border-2 border-[#084274] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="giggle-tag mb-2 bg-white/10 text-[#feeddb] w-fit">
                <div className="giggle-dot bg-[#e3a044]" />
                <span className="uppercase tracking-wider text-[11px] sm:text-[13px]">Assistance Personnalisée</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl text-white">
                Vous Avez une Question Spécifique ?
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#feeddb]/85 leading-relaxed">
                Notre secrétariat et la direction pédagogique sont à votre écoute pour vous renseigner dans les moindres détails.
              </p>

              <div className="space-y-2 pt-2 text-xs">
                <a
                  href={`tel:${SCHOOL_INFO.phoneRaw}`}
                  className="flex items-center gap-2 text-white hover:text-[#e3a044] font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#e3a044]" />
                  <span>{SCHOOL_INFO.phone}</span>
                </a>
                <p className="text-white/70">
                  Du lundi au vendredi de 07h45 à 17h30
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white/10 p-6 border border-white/15">
              {questionSent ? (
                <div className="text-center py-6">
                  <CheckCircle2 className="w-10 h-10 text-[#24a974] mx-auto mb-2" />
                  <p className="font-heading font-bold text-white text-base">Message bien reçu !</p>
                  <p className="text-xs text-[#feeddb]/80 mt-1">Notre équipe vous répondra par email dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleAskQuestion} className="space-y-3">
                  <div>
                    <label className="text-[11px] font-bold text-white block mb-1">Votre Email :</label>
                    <input
                      type="email"
                      required
                      placeholder="nom@exemple.com"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white text-xs text-[#084274] border-none focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-white block mb-1">Votre Question :</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Posez votre question ici..."
                      value={userQuestion}
                      onChange={(e) => setUserQuestion(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white text-xs text-[#084274] border-none focus:outline-none"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full giggle-button-primary py-3 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 text-[#e3a044]" />
                    <span>Envoyer Ma Question</span>
                  </motion.button>
                </form>
              )}
            </div>

          </div>
        </AnimatedSection>

      </div>

      <SectionDivider variant="white" position="bottom" style="wave1" />
    </div>
  );
};
