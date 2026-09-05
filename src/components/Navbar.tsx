/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Navbar simplifiée (architecture consolidée en 9 vues).
 * Fini les méga-menus : 7 liens plats + CTA Inscription. Drawer plein écran sur mobile.
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Calendar, Phone } from 'lucide-react';
import { PageId } from '../types';
import { SCHOOL_INFO } from '../data/schoolInfo';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenAdmissions?: (location?: string) => void;
}

const LINKS: { page: PageId; label: string }[] = [
  { page: 'home', label: 'Accueil' },
  { page: 'ecole', label: 'Notre École' },
  { page: 'parcours', label: 'Parcours' },
  { page: 'vie-scolaire', label: 'Vie Scolaire' },
  { page: 'campus', label: 'Campus' },
  { page: 'parents', label: 'Parents' },
  { page: 'actualites', label: 'Actualités' },
  { page: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenAdmissions }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const go = (page: PageId) => {
    setOpen(false);
    onNavigate(page);
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#feeddb]/95 backdrop-blur-md shadow-md' : 'bg-[#feeddb]'
      }`}
    >
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <button
          onClick={() => go('home')}
          className="flex items-center gap-2.5 cursor-pointer group"
          aria-label="Accueil Les Marronniers"
        >
          <span className="w-9 h-9 rounded-full bg-[#084274] text-[#e3a044] font-heading text-lg flex items-center justify-center group-hover:rotate-6 transition-transform">
            M
          </span>
          <span className="font-heading text-lg lg:text-xl text-[#084274] leading-none">
            Les Marronniers
          </span>
        </button>

        {/* Liens desktop */}
        <div className="hidden xl:flex items-center gap-1">
          {LINKS.map((l) => {
            const active = currentPage === l.page;
            return (
              <button
                key={l.page}
                onClick={() => go(l.page)}
                className={`relative px-3.5 py-2 rounded-full font-body text-[13.5px] font-semibold cursor-pointer transition-colors ${
                  active
                    ? 'bg-[#084274]/10 text-[#084274]'
                    : 'text-[#084274]/70 hover:text-[#084274] hover:bg-[#084274]/6'
                }`}
              >
                {l.label}
              </button>
            );
          })}
        </div>

        {/* CTA + burger */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenAdmissions?.()}
            className="hidden sm:inline-flex giggle-button-primary cursor-pointer !py-2.5 !px-6 text-sm items-center gap-2"
          >
            <Calendar className="w-4 h-4 text-[#e3a044]" />
            <span>Inscription</span>
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="xl:hidden w-11 h-11 rounded-full bg-[#084274]/8 text-[#084274] flex items-center justify-center cursor-pointer"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Drawer mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="xl:hidden absolute top-full left-0 right-0 bg-[#feeddb] shadow-2xl border-t border-[#084274]/10 max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <div className="px-6 py-6 flex flex-col gap-1.5">
              {LINKS.map((l, idx) => {
                const active = currentPage === l.page;
                return (
                  <motion.button
                    key={l.page}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    onClick={() => go(l.page)}
                    className={`text-left px-4 py-3.5 rounded-2xl font-body text-[15px] font-bold cursor-pointer transition-colors ${
                      active ? 'bg-[#084274] text-[#feeddb]' : 'text-[#084274] hover:bg-[#084274]/8'
                    }`}
                  >
                    {l.label}
                  </motion.button>
                );
              })}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-[#084274]/10">
                <button
                  onClick={() => {
                    setOpen(false);
                    onOpenAdmissions?.();
                  }}
                  className="giggle-button-primary cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#e3a044]" />
                  <span>Inscription 2026-2027</span>
                </button>
                <a
                  href={`tel:${SCHOOL_INFO.phoneRaw}`}
                  className="giggle-button-secondary inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#e3a044]" />
                  <span>{SCHOOL_INFO.phone}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
