/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers El Jadida - Main Navigation Bar (Thematic Mega-Menu & Mobile Accordions)
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  Building2,
  HeartHandshake,
  Users2,
  Compass,
  GraduationCap,
  Sparkles,
  Baby,
  Smile,
  BookOpen,
  Lightbulb,
  Clock,
  Dices,
  Image,
  Newspaper,
  CalendarCheck,
  HelpCircle,
  MapPin,
  Phone,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { PageId } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { SCHOOL_INFO } from '../data/schoolInfo';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenAdmissions?: (location?: string) => void;
}

interface NavCategory {
  id: string;
  label: string;
  badge?: string;
  items: {
    page: PageId;
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    highlight?: boolean;
    tag?: string;
  }[];
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>('cycles');
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMouseEnter = (catId: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(catId);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  // Structured Thematic Navigation Architecture
  const categories: NavCategory[] = [
    {
      id: 'etablissement',
      label: "L'Établissement",
      items: [
        {
          page: 'about-etablissement',
          title: 'Notre Établissement',
          description: 'Histoire, mission & cadre sécurisé au Plateau El Jadida',
          icon: Building2,
        },
        {
          page: 'about-valeurs',
          title: 'Nos Valeurs & Engagements',
          description: 'Bienveillance, éveil, rigueur & respect du rythme de l’enfant',
          icon: HeartHandshake,
        },
        {
          page: 'about-equipe',
          title: 'Direction & Équipe',
          description: 'Pédagogues qualifiés, éducatrices dévouées & écoute continue',
          icon: Users2,
        },
        {
          page: 'locaux',
          title: 'Nos 2 Campus & Locaux',
          description: 'Campus Beethoven (Maternelle) & Ibn Khaldoun (Primaire)',
          icon: Compass,
          tag: '2 Campus',
        },
        {
          page: 'securite-bien-etre',
          title: 'Sécurité & Bien-Être',
          description: 'Contrôle d’accès strict, sol anti-chute & hygiène certifiée',
          icon: ShieldCheck,
        },
      ],
    },
    {
      id: 'cycles',
      label: 'Cycles & Niveaux',
      badge: 'Crèche → CE6',
      items: [
        {
          page: 'niveaux',
          title: 'Tous les Niveaux',
          description: 'Vue d’ensemble du cursus continu de 2 ans à 11 ans',
          icon: GraduationCap,
        },
        {
          page: 'niveaux-creche',
          title: 'Crèche & Pouponnière',
          description: 'Dès 2 ans : motricité libre, éveil sensoriel & cocon affectif',
          icon: Baby,
          tag: 'Dès 2 ans',
        },
        {
          page: 'niveaux-maternelle',
          title: 'Maternelle d’Éveil',
          description: 'TPS, PS, MS, GS : trilinguisme précoce & socialisation douce',
          icon: Smile,
        },
        {
          page: 'niveaux-primaire',
          title: 'Primaire d’Excellence',
          description: 'CP au CE6 : bases solides & 100% de réussite aux examens',
          icon: BookOpen,
          tag: '100% Réussite',
        },
        {
          page: 'pedagogie',
          title: 'Projet Pédagogique',
          description: 'Méthode Singapour, sciences pratiques, arts & trilinguisme',
          icon: Lightbulb,
          highlight: true,
        },
      ],
    },
    {
      id: 'vie-scolaire',
      label: 'Vie de l’École',
      items: [
        {
          page: 'vie-scolaire',
          title: 'Vie Scolaire & Rythmes',
          description: 'Journée type, récréations en plein air & bien-vivre ensemble',
          icon: Clock,
        },
        {
          page: 'activites',
          title: 'Ateliers & Activités Parascolaires',
          description: 'Club d’échecs, théâtre, cinéma, musique & robotique',
          icon: Dices,
          tag: '15+ Ateliers',
        },
        {
          page: 'galerie',
          title: 'Galerie Photos & Immersion',
          description: 'Visite visuelle des classes lumineuses et de la cour arborée',
          icon: Image,
        },
        {
          page: 'actualites',
          title: 'Actualités & Événements',
          description: 'Vie des classes, projets de l’année & dates clés',
          icon: Newspaper,
        },
      ],
    },
    {
      id: 'parents',
      label: 'Parents & Inscriptions',
      items: [
        {
          page: 'inscription',
          title: 'Inscriptions & Tarifs',
          description: 'Préinscription 2026-2027, barème d’écolage & pièces requises',
          icon: CalendarCheck,
          highlight: true,
          tag: 'Ouvertes',
        },
        {
          page: 'espace-parents',
          title: 'Espace Parents & Services',
          description: 'Horaires d’accueil, cantine saine & signalement d’absence',
          icon: Users2,
        },
        {
          page: 'faq',
          title: 'Foire Aux Questions (FAQ)',
          description: 'Toutes les réponses claires sur le fonctionnement de l’école',
          icon: HelpCircle,
        },
        {
          page: 'contact',
          title: 'Contact & Accès Campus',
          description: 'Plateau Rue Beethoven, téléphone direct & formulaires',
          icon: MapPin,
        },
      ],
    },
  ];

  const isPageInCategory = (cat: NavCategory) => {
    return cat.items.some((item) => item.page === currentPage);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#feeddb]/95 backdrop-blur-md shadow-md py-2.5 sm:py-3 border-b border-[#084274]/15'
            : 'bg-[#feeddb] py-3 sm:py-4 border-b border-[#084274]/10'
        }`}
      >
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 flex items-center justify-between gap-4">
          
          {/* 1. LOGO DE L'ÉCOLE */}
          <button
            onClick={() => handleNavClick('home')}
            className="inline-flex flex-col items-stretch text-left group cursor-pointer shrink-0 transition-transform active:scale-95 select-none py-1"
            aria-label="Accueil École Les Marronniers El Jadida"
          >
            <div className="w-full flex justify-between items-baseline font-heading text-[26px] sm:text-[32px] lg:text-[36px] font-black text-[#084274] leading-[0.75] tracking-tight">
              <span>L</span>
              <span>E</span>
              <span>S</span>
            </div>
            <span className="font-heading text-sm sm:text-base lg:text-lg font-bold text-[#084274] tracking-tight leading-none mt-1">
              marronniers
            </span>
          </button>

          {/* 2. THEMATIC DESKTOP MENU */}
          <div className="hidden lg:flex items-center justify-center gap-1 xl:gap-2">
            
            {/* Accueil Direct */}
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all cursor-pointer ${
                currentPage === 'home'
                  ? 'text-[#e3a044] bg-[#084274]/5'
                  : 'text-[#084274] hover:text-[#e3a044] hover:bg-[#084274]/5'
              }`}
            >
              Accueil
            </button>

            {/* Thematic Categories with Dropdown */}
            {categories.map((cat) => {
              const active = isPageInCategory(cat);
              const isOpen = activeDropdown === cat.id;

              return (
                <div
                  key={cat.id}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(cat.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => setActiveDropdown(isOpen ? null : cat.id)}
                    className={`px-3 py-2 rounded-lg text-sm font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                      active
                        ? 'text-[#e3a044] bg-[#084274]/5'
                        : 'text-[#084274] hover:text-[#e3a044] hover:bg-[#084274]/5'
                    }`}
                  >
                    <span>{cat.label}</span>
                    {cat.badge && (
                      <span className="text-[10px] uppercase font-black bg-[#e3a044]/20 text-[#084274] px-1.5 py-0.5 rounded-full">
                        {cat.badge}
                      </span>
                    )}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#e3a044]' : 'opacity-60'
                      }`}
                    />
                  </button>

                  {/* Mega Dropdown Panel */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full pt-2 w-80 xl:w-96 z-50"
                      >
                        <div className="bg-white rounded-2xl shadow-2xl border border-[#084274]/15 p-3 overflow-hidden backdrop-blur-md">
                          
                          {/* Dropdown Header */}
                          <div className="px-3 py-2 border-b border-[#084274]/10 mb-1 flex items-center justify-between">
                            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#e3a044]">
                              {cat.label}
                            </span>
                            <span className="text-[11px] text-[#084274]/60">
                              {cat.items.length} sections
                            </span>
                          </div>

                          {/* List of sub-pages */}
                          <div className="space-y-1">
                            {cat.items.map((item) => {
                              const Icon = item.icon;
                              const isCurrent = currentPage === item.page;

                              return (
                                <button
                                  key={item.page}
                                  onClick={() => handleNavClick(item.page)}
                                  className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-3 group cursor-pointer ${
                                    isCurrent
                                      ? 'bg-[#feeddb] text-[#084274]'
                                      : 'hover:bg-[#feeddb]/60 text-[#084274]'
                                  }`}
                                >
                                  <div
                                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                                      isCurrent
                                        ? 'bg-[#084274] text-[#feeddb]'
                                        : 'bg-[#feeddb] text-[#084274] group-hover:bg-[#084274] group-hover:text-[#feeddb]'
                                    }`}
                                  >
                                    <Icon className="w-4 h-4" />
                                  </div>

                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-1.5 mb-0.5">
                                      <span className="text-xs font-bold truncate">
                                        {item.title}
                                      </span>
                                      {item.tag && (
                                        <span className="text-[9px] font-black uppercase px-1.5 py-0.2 bg-[#e3a044] text-white rounded-full">
                                          {item.tag}
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-[11px] text-[#084274]/70 line-clamp-1 leading-snug">
                                      {item.description}
                                    </p>
                                  </div>
                                </button>
                              );
                            })}
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

          </div>

          {/* 3. DIRECT ACTION BUTTONS (DESKTOP & MOBILE TOGGLE) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* Direct Page Link to Inscriptions (NO POPUP) */}
            <button
              onClick={() => handleNavClick('inscription')}
              className="cursor-pointer text-xs sm:text-sm font-bold py-2.5 px-4 sm:px-5 rounded-full bg-[#084274] text-white hover:bg-[#063259] transition-all duration-200 whitespace-nowrap shrink-0 shadow-sm active:scale-95 flex items-center gap-2"
            >
              <CalendarCheck className="w-4 h-4 text-[#e3a044]" />
              <span className="hidden sm:inline">Inscriptions 2026-2027</span>
              <span className="sm:hidden">Inscription</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-[#084274] hover:bg-[#084274]/10 rounded-lg transition-colors cursor-pointer touch-manipulation"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu complet'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* 4. MOBILE COMPLETE ACCORDION DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100vh - 65px)' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden fixed inset-x-0 top-[65px] z-40 bg-[#feeddb] overflow-y-auto px-4 py-5 sm:px-6 border-t-2 border-[#084274]/15 shadow-2xl flex flex-col justify-between"
          >
            <div className="space-y-4 max-w-lg mx-auto w-full">
              
              {/* Quick Direct Inscription Banner */}
              <div className="p-4 bg-[#084274] text-white rounded-2xl shadow-md">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#e3a044]">
                    Rentrée 2026-2027
                  </span>
                  <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-bold">
                    Places Limitées
                  </span>
                </div>
                <h4 className="font-heading text-lg font-bold mb-1">
                  Rejoignez Les Marronniers
                </h4>
                <p className="text-xs text-white/80 mb-3">
                  Découvrez nos 2 campus, notre projet pédagogique et préinscrivez votre enfant en ligne.
                </p>
                <button
                  onClick={() => handleNavClick('inscription')}
                  className="w-full py-2.5 text-xs font-bold rounded-xl bg-[#e3a044] text-[#084274] hover:bg-[#d69337] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm font-heading"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Dossier d'Inscription & Visite</span>
                </button>
              </div>

              {/* Direct Accueil */}
              <button
                onClick={() => handleNavClick('home')}
                className={`w-full text-left py-3 px-4 rounded-xl text-base font-bold flex items-center justify-between transition-colors ${
                  currentPage === 'home' ? 'bg-[#084274] text-white' : 'bg-white/70 text-[#084274]'
                }`}
              >
                <span>Page d'Accueil</span>
                <ArrowRight className="w-4 h-4 opacity-70" />
              </button>

              {/* Thematic Categories Accordions */}
              <div className="space-y-2">
                {categories.map((cat) => {
                  const isExpanded = expandedMobileCategory === cat.id;

                  return (
                    <div key={cat.id} className="bg-white/80 rounded-2xl overflow-hidden border border-[#084274]/10">
                      <button
                        onClick={() => setExpandedMobileCategory(isExpanded ? null : cat.id)}
                        className="w-full text-left py-3 px-4 flex items-center justify-between font-heading text-sm font-bold text-[#084274] cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <span>{cat.label}</span>
                          {cat.badge && (
                            <span className="text-[10px] font-sans font-bold bg-[#e3a044]/20 text-[#084274] px-1.5 py-0.2 rounded-full">
                              {cat.badge}
                            </span>
                          )}
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 text-[#084274] transition-transform duration-200 ${
                            isExpanded ? 'rotate-180 text-[#e3a044]' : 'opacity-60'
                          }`}
                        />
                      </button>

                      {/* Items under this category */}
                      {isExpanded && (
                        <div className="px-2 pb-2 space-y-1 border-t border-[#084274]/10 pt-2">
                          {cat.items.map((item) => {
                            const Icon = item.icon;
                            const isCurrent = currentPage === item.page;

                            return (
                              <button
                                key={item.page}
                                onClick={() => handleNavClick(item.page)}
                                className={`w-full text-left p-2.5 rounded-xl transition-colors flex items-center gap-3 ${
                                  isCurrent ? 'bg-[#084274] text-white' : 'hover:bg-[#feeddb] text-[#084274]'
                                }`}
                              >
                                <div
                                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                                    isCurrent ? 'bg-[#e3a044] text-[#084274]' : 'bg-[#feeddb] text-[#084274]'
                                  }`}
                                >
                                  <Icon className="w-3.5 h-3.5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-1.5">
                                    <span className="text-xs font-bold truncate">
                                      {item.title}
                                    </span>
                                    {item.tag && (
                                      <span className="text-[9px] bg-[#e3a044] text-white px-1.5 py-0.2 rounded-full font-bold">
                                        {item.tag}
                                      </span>
                                    )}
                                  </div>
                                </div>
                                <ArrowRight className="w-3.5 h-3.5 opacity-50 shrink-0" />
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Direct Secretary Hotline */}
            <div className="pt-6 pb-2 border-t border-[#084274]/15 max-w-lg mx-auto w-full text-center mt-4">
              <p className="text-xs font-bold text-[#084274] mb-3">
                Secrétariat & Accueil des Familles (07h45 - 17h30)
              </p>
              <div className="flex items-center justify-center gap-3">
                <a
                  href={`tel:${SCHOOL_INFO.phoneRaw}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 bg-[#084274] text-white text-xs font-bold rounded-xl shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-[#e3a044]" />
                  <span>05 23 39 56 03</span>
                </a>
                <a
                  href="https://wa.me/212623395603"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 bg-[#25D366] text-white text-xs font-bold rounded-xl shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
