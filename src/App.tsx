/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers El Jadida — Application principale.
 * Architecture consolidée : 18 pages → 9 vues. Les anciens IDs restent valides
 * et redirigent vers leur vue canonique (aucun lien cassé).
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SectionDivider } from './components/SectionDivider';
import { MobileBottomBar } from './components/MobileBottomBar';

// Home
import { Hero } from './components/Hero';
import { KeyFiguresSection } from './components/KeyFiguresSection';
import { DirectorWordSection } from './components/DirectorWordSection';
import { SchoolVideoSection } from './components/SchoolVideoSection';
import { SchoolMission } from './components/SchoolMission';
import { ParcoursSection } from './components/ParcoursSection';
import { CreativeLifeSection } from './components/CreativeLifeSection';
import { PartnerSection } from './components/PartnerSection';
import { ParentCommunitySection } from './components/ParentCommunitySection';
import { WaveCtaSection } from './components/WaveCtaSection';
import { ContactAndLocationSection } from './components/ContactAndLocationSection';

// Pages consolidées
import { EcolePage } from './pages/EcolePage';
import { ParcoursPage } from './pages/ParcoursPage';
import { VieScolairePage } from './pages/VieScolairePage';
import { CampusPage } from './pages/CampusPage';
import { ParentsPage } from './pages/ParentsPage';
import { ActualitesPage } from './pages/ActualitesPage';
import { InscriptionPage } from './pages/InscriptionPage';
import { ContactPage } from './pages/ContactPage';

type View =
  | 'home'
  | 'ecole'
  | 'parcours'
  | 'vie-scolaire'
  | 'campus'
  | 'parents'
  | 'actualites'
  | 'inscription'
  | 'contact';

/** Chaque ancien PageId pointe vers sa vue canonique — aucun lien cassé. */
const ALIASES: Record<string, View> = {
  home: 'home',
  ecole: 'ecole',
  'about-etablissement': 'ecole',
  'about-valeurs': 'ecole',
  'about-equipe': 'ecole',
  parcours: 'parcours',
  niveaux: 'parcours',
  'niveaux-creche': 'parcours',
  'niveaux-maternelle': 'parcours',
  'niveaux-primaire': 'parcours',
  pedagogie: 'parcours',
  'vie-scolaire': 'vie-scolaire',
  activites: 'vie-scolaire',
  campus: 'campus',
  locaux: 'campus',
  'securite-bien-etre': 'campus',
  parents: 'parents',
  'espace-parents': 'parents',
  faq: 'parents',
  actualites: 'actualites',
  galerie: 'actualites',
  inscription: 'inscription',
  contact: 'contact',
};

const toView = (p: string): View => ALIASES[p] ?? 'home';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  useEffect(() => {
    const readHash = () => {
      const hash = window.location.hash.replace('#', '');
      setCurrentPage(hash in ALIASES ? (hash as PageId) : 'home');
    };
    readHash();
    window.addEventListener('popstate', readHash);
    window.addEventListener('hashchange', readHash);
    return () => {
      window.removeEventListener('popstate', readHash);
      window.removeEventListener('hashchange', readHash);
    };
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAdmissions = (_location?: string) => {
    handleNavigate('inscription');
  };

  const view = toView(currentPage);

  return (
    <div className="min-h-screen bg-[#feeddb] text-[#084274] flex flex-col antialiased selection:bg-[#e3a044] selection:text-white font-body">
      <Navbar
        currentPage={view as PageId}
        onNavigate={handleNavigate}
        onOpenAdmissions={handleOpenAdmissions}
      />

      <main className="flex-1 pb-16 md:pb-0 overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {view === 'home' && (
              <div>
                <Hero
                  onExploreCampuses={() => handleNavigate('campus')}
                  onExploreMaternelle={() => handleNavigate('parcours')}
                  onExplorePrimaire={() => handleNavigate('parcours')}
                  onOpenAdmissions={() => handleOpenAdmissions()}
                />
                <KeyFiguresSection />
                <DirectorWordSection />
                <SectionDivider variant="blue" position="top" style="wave2" />
                <SchoolVideoSection onOpenAdmissions={() => handleOpenAdmissions()} />
                <SectionDivider variant="white" position="top" style="wave1" />
                <SchoolMission onOpenAdmissions={() => handleOpenAdmissions()} />
                <SectionDivider variant="white" position="bottom" style="wave1" />
                <ParcoursSection onNavigate={handleNavigate} />
                <SectionDivider variant="white" position="top" style="wave1" />
                <CreativeLifeSection onOpenAdmissions={() => handleOpenAdmissions()} />
                <SectionDivider variant="white" position="bottom" style="wave1" />
                <PartnerSection
                  onOpenAdmissions={() => handleOpenAdmissions()}
                  onNavigate={handleNavigate}
                />
                <SectionDivider variant="cream" position="bottom" style="wave1" />
                <ParentCommunitySection />
                <WaveCtaSection onOpenAdmissions={() => handleOpenAdmissions()} />
                <ContactAndLocationSection />
              </div>
            )}

            {view === 'ecole' && <EcolePage onOpenAdmissions={handleOpenAdmissions} />}
            {view === 'parcours' && <ParcoursPage onOpenAdmissions={handleOpenAdmissions} />}
            {view === 'vie-scolaire' && <VieScolairePage />}
            {view === 'campus' && <CampusPage onOpenAdmissions={handleOpenAdmissions} />}
            {view === 'parents' && <ParentsPage />}
            {view === 'actualites' && <ActualitesPage />}
            {view === 'inscription' && (
              <InscriptionPage onOpenAdmissions={() => handleNavigate('contact')} />
            )}
            {view === 'contact' && <ContactPage onOpenAdmissions={handleOpenAdmissions} />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={handleNavigate} />
      <MobileBottomBar onOpenAdmissions={() => handleOpenAdmissions()} />
    </div>
  );
}
