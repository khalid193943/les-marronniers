/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers El Jadida - Site Officiel École Privée (Crèche, Maternelle, Primaire)
 * Designed strictly following the Ovo Giggle theme, colors, typography, and complete 18-page architecture.
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SectionDivider } from './components/SectionDivider';

// Home Page Components (preserved exactly as requested)
import { Hero } from './components/Hero';
import { SchoolMission } from './components/SchoolMission';
import { TwoCampusesSection } from './components/TwoCampusesSection';
import { CreativeLifeSection } from './components/CreativeLifeSection';
import { ParentCommunitySection } from './components/ParentCommunitySection';
import { SchoolLifeAndPractical } from './components/SchoolLifeAndPractical';
import { WaveCtaSection } from './components/WaveCtaSection';
import { ContactAndLocationSection } from './components/ContactAndLocationSection';
import { PartnerSection } from './components/PartnerSection';

// Internal Pages (Architecture complète & professionnelle)
import {
  AboutEtablissementPage,
  AboutValeursPage,
  AboutEquipePage,
} from './pages/AboutPages';
import { NiveauxPages } from './pages/NiveauxPages';
import { PedagogiePage } from './pages/PedagogiePage';
import { ActivitesPage } from './pages/ActivitesPage';
import { VieScolairePage } from './pages/VieScolairePage';
import { LocauxPage } from './pages/LocauxPage';
import { SecuriteBienEtrePage } from './pages/SecuriteBienEtrePage';
import { EspaceParentsPage } from './pages/EspaceParentsPage';
import { InscriptionPage } from './pages/InscriptionPage';
import { ActualitesPage } from './pages/ActualitesPage';
import { GaleriePage } from './pages/GaleriePage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';

// Nouvelles sections pour la Home Page
import { KeyFiguresSection } from './components/KeyFiguresSection';
import { ParcoursSection } from './components/ParcoursSection';
import { DirectorWordSection } from './components/DirectorWordSection';
import { NewsSection } from './components/NewsSection';
import { SchoolVideoSection } from './components/SchoolVideoSection';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Read initial page from URL hash if available
  useEffect(() => {
    const hash = window.location.hash.replace('#', '') as PageId;
    if (hash && isValidPage(hash)) {
      setCurrentPage(hash);
    }

    const handlePopState = () => {
      const currentHash = window.location.hash.replace('#', '') as PageId;
      if (currentHash && isValidPage(currentHash)) {
        setCurrentPage(currentHash);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const isValidPage = (p: string): p is PageId => {
    return [
      'home',
      'about-etablissement',
      'about-valeurs',
      'about-equipe',
      'niveaux',
      'niveaux-creche',
      'niveaux-maternelle',
      'niveaux-primaire',
      'pedagogie',
      'activites',
      'vie-scolaire',
      'locaux',
      'securite-bien-etre',
      'espace-parents',
      'inscription',
      'actualites',
      'galerie',
      'faq',
      'contact',
    ].includes(p);
  };

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAdmissions = (_location?: string) => {
    // Navigate directly to the comprehensive Inscription page - NO POPUP!
    handleNavigate('inscription');
  };

  return (
    <div className="min-h-screen bg-[#feeddb] text-[#084274] flex flex-col antialiased selection:bg-[#e3a044] selection:text-white font-body">
      {/* Primary Navigation with Full 18-Pages Arborescence */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenAdmissions={handleOpenAdmissions}
      />

      {/* Main Page Routing */}
      <main className="flex-1 pb-16 md:pb-0 overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {currentPage === 'home' && (
              <div>
                {/* 1. Hero Section with Real Photography, Badges & Tilted Cards */}
                <Hero
                  onExploreCampuses={() => handleNavigate('locaux')}
                  onExploreMaternelle={() => handleNavigate('niveaux-maternelle')}
                  onExplorePrimaire={() => handleNavigate('niveaux-primaire')}
                  onOpenAdmissions={() => handleOpenAdmissions()}
                />

                {/* 2. Bandeau Chiffres Clés (NOUVEAU) */}
                <KeyFiguresSection />

                {/* 3. Mot de la Direction / Vision (NOUVEAU) */}
                <DirectorWordSection />

                {/* Blue Wave transition into Video */}
                <SectionDivider variant="blue" position="top" style="wave2" />

                {/* 4. Immersion Vidéo 30s Pleine Largeur (NOUVEAU) */}
                <SchoolVideoSection onOpenAdmissions={() => handleOpenAdmissions()} />

                {/* Separator between Video and Bento Grid */}
                <SectionDivider variant="white" position="top" style="wave1" />

                {/* 5. Pourquoi Nous Choisir (Bento Grid 4 Cards) */}
                <SchoolMission onOpenAdmissions={() => handleOpenAdmissions()} />

                {/* Separator */}
                <SectionDivider variant="white" position="bottom" style="wave1" />

                {/* 5b. UN PARCOURS POUR CHAQUE ÂGE (cartes illustrées + flèches gribouillées - Cream) */}
                <ParcoursSection onNavigate={handleNavigate} />

                {/* 5c. ESPACES D'APPRENTISSAGE (Crèche, Maternelle & Primaire - Cream) */}
                <TwoCampusesSection onOpenAdmissions={handleOpenAdmissions} />

                {/* Separator before Vie Créative (into White) */}
                <SectionDivider variant="white" position="top" style="wave1" />

                {/* 6. VIE CRÉATIVE (Théâtre, Musique, Cinéma, Échecs - White) */}
                <CreativeLifeSection onOpenAdmissions={() => handleOpenAdmissions()} />

                {/* 7. Actualités & Événements (White) */}
                <NewsSection onNavigate={() => handleNavigate('actualites')} />

                {/* Separator before Partenaire d'Excellence */}
                <SectionDivider variant="white" position="bottom" style="wave1" />

                {/* 7b. Partenariat d'Excellence - Institut Français d'El Jadida (4 Axes & 4 Images) */}
                <PartnerSection
                  onOpenAdmissions={() => handleOpenAdmissions()}
                  onNavigate={handleNavigate}
                />

                {/* Separator from White into Cream */}
                <SectionDivider variant="cream" position="bottom" style="wave1" />

                {/* 8. RELATION AVEC LES PARENTS (Témoignages - Cream) */}
                <ParentCommunitySection />

                {/* Separator from Cream into White */}
                <SectionDivider variant="white" position="top" style="wave1" />

                {/* 9. FAQ Parents & Vie Quotidienne (White) */}
                <SchoolLifeAndPractical onOpenAdmissions={() => handleOpenAdmissions()} />

                {/* 10. Iconic Ovo Giggle Wavy Bottom CTA (Navy Blue) */}
                <WaveCtaSection onOpenAdmissions={() => handleOpenAdmissions()} />

                {/* 11. Coordonnées & Accès El Jadida (White) */}
                <ContactAndLocationSection onOpenAdmissions={handleOpenAdmissions} />
              </div>
            )}

            {/* À Propos */}
            {currentPage === 'about-etablissement' && (
              <AboutEtablissementPage
                onNavigate={handleNavigate}
                onOpenAdmissions={handleOpenAdmissions}
              />
            )}
            {currentPage === 'about-valeurs' && (
              <AboutValeursPage
                onNavigate={handleNavigate}
                onOpenAdmissions={handleOpenAdmissions}
              />
            )}
            {currentPage === 'about-equipe' && (
              <AboutEquipePage
                onNavigate={handleNavigate}
                onOpenAdmissions={handleOpenAdmissions}
              />
            )}

            {/* Nos Niveaux */}
            {currentPage === 'niveaux' && (
              <NiveauxPages
                initialTab="all"
                onNavigate={handleNavigate}
                onOpenAdmissions={handleOpenAdmissions}
              />
            )}
            {currentPage === 'niveaux-creche' && (
              <NiveauxPages
                initialTab="creche"
                onNavigate={handleNavigate}
                onOpenAdmissions={handleOpenAdmissions}
              />
            )}
            {currentPage === 'niveaux-maternelle' && (
              <NiveauxPages
                initialTab="maternelle"
                onNavigate={handleNavigate}
                onOpenAdmissions={handleOpenAdmissions}
              />
            )}
            {currentPage === 'niveaux-primaire' && (
              <NiveauxPages
                initialTab="primaire"
                onNavigate={handleNavigate}
                onOpenAdmissions={handleOpenAdmissions}
              />
            )}

            {/* Pédagogie */}
            {currentPage === 'pedagogie' && (
              <PedagogiePage
                onNavigate={handleNavigate}
                onOpenAdmissions={handleOpenAdmissions}
              />
            )}

            {/* Activités */}
            {currentPage === 'activites' && (
              <ActivitesPage
                onNavigate={handleNavigate}
                onOpenAdmissions={handleOpenAdmissions}
              />
            )}

            {/* Vie Scolaire */}
            {currentPage === 'vie-scolaire' && (
              <VieScolairePage
                onNavigate={handleNavigate}
                onOpenAdmissions={handleOpenAdmissions}
              />
            )}

            {/* Nos Locaux */}
            {currentPage === 'locaux' && (
              <LocauxPage
                onNavigate={handleNavigate}
                onOpenAdmissions={handleOpenAdmissions}
              />
            )}

            {/* Sécurité & Bien-Être */}
            {currentPage === 'securite-bien-etre' && (
              <SecuriteBienEtrePage
                onNavigate={handleNavigate}
                onOpenAdmissions={handleOpenAdmissions}
              />
            )}

            {/* Espace Parents */}
            {currentPage === 'espace-parents' && (
              <EspaceParentsPage
                onNavigate={handleNavigate}
                onOpenAdmissions={handleOpenAdmissions}
              />
            )}

            {/* Inscription */}
            {currentPage === 'inscription' && (
              <InscriptionPage
                onNavigate={handleNavigate}
                onOpenAdmissions={handleOpenAdmissions}
              />
            )}

            {/* Actualités */}
            {currentPage === 'actualites' && (
              <ActualitesPage
                onNavigate={handleNavigate}
                onOpenAdmissions={handleOpenAdmissions}
              />
            )}

            {/* Galerie */}
            {currentPage === 'galerie' && (
              <GaleriePage
                onNavigate={handleNavigate}
                onOpenAdmissions={handleOpenAdmissions}
              />
            )}

            {/* FAQ */}
            {currentPage === 'faq' && (
              <FaqPage
                onNavigate={handleNavigate}
                onOpenAdmissions={handleOpenAdmissions}
              />
            )}

            {/* Contact */}
            {currentPage === 'contact' && (
              <ContactPage
                onNavigate={handleNavigate}
                onOpenAdmissions={handleOpenAdmissions}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Blue Top Separator for Footer */}
      <SectionDivider variant="blue" position="top" style="wave2" />

      {/* School Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenAdmissions={handleOpenAdmissions}
      />

      {/* Mobile-First Floating Quick Action Bar (Visible only on mobile) */}
      <MobileBottomBar onOpenAdmissions={() => handleOpenAdmissions()} />
    </div>
  );
}
