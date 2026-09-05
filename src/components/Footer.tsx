/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers El Jadida - Footer (Exact Ovo Giggle Theme)
 */

import React from 'react';
import { MapPin, Phone, Mail, Calendar, ArrowUp, Baby, GraduationCap, Building2, ShieldCheck, Heart, Facebook, Instagram, Youtube } from 'lucide-react';
import { PageId } from '../types';
import { SCHOOL_INFO } from '../data/schoolInfo';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenAdmissions: (location?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAdmissions }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#084274] text-[#feeddb] pt-16 pb-12 border-t border-[#05335b]">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-4">
            <div
              onClick={() => onNavigate('home')}
              className="inline-flex flex-col items-stretch leading-none mb-5 cursor-pointer group select-none"
            >
              <div className="w-full flex justify-between items-baseline font-heading text-4xl sm:text-5xl font-black text-[#feeddb] leading-[0.72] group-hover:text-[#e3a044] transition-colors">
                <span>L</span>
                <span>E</span>
                <span>S</span>
              </div>
              <span className="font-heading text-xl sm:text-2xl font-bold text-[#e3a044] tracking-tight leading-none mt-1">
                marronniers
              </span>
            </div>

            <p className="font-body text-xs sm:text-sm text-[#feeddb]/80 leading-relaxed mb-6 max-w-sm">
              École privée à El Jadida, de la crèche au CE6.
            </p>

            <div className="space-y-2.5 text-xs text-[#feeddb]/90">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#e3a044] shrink-0 mt-0.5" />
                <span><strong>Maternelle :</strong> 16 Lot Al Asdikaa, Rue Beethoven, Plateau</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#e3a044] shrink-0 mt-0.5" />
                <span><strong>Primaire :</strong> 3 Avenue Varennes, El Jadida</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#e3a044] shrink-0" />
                <a href={`tel:${SCHOOL_INFO.phoneRaw}`} className="hover:text-[#e3a044] transition-colors font-bold">
                  {SCHOOL_INFO.phone}
                </a>
              </div>
            </div>

            {/* Réseaux sociaux officiels */}
            <div className="flex items-center gap-3 mt-6">
              <a href={SCHOOL_INFO.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook Les Marronniers"
                 className="w-10 h-10 rounded-full bg-[#feeddb]/10 hover:bg-[#e3a044] text-[#feeddb] hover:text-[#084274] flex items-center justify-center transition-colors">
                <Facebook className="w-4.5 h-4.5" />
              </a>
              <a href={SCHOOL_INFO.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram Les Marronniers"
                 className="w-10 h-10 rounded-full bg-[#feeddb]/10 hover:bg-[#e3a044] text-[#feeddb] hover:text-[#084274] flex items-center justify-center transition-colors">
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a href={SCHOOL_INFO.social.youtube} target="_blank" rel="noreferrer" aria-label="YouTube Les Marronniers"
                 className="w-10 h-10 rounded-full bg-[#feeddb]/10 hover:bg-[#e3a044] text-[#feeddb] hover:text-[#084274] flex items-center justify-center transition-colors">
                <Youtube className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Rapide */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-lg text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium text-[#feeddb]/80">
              {[
                { id: 'home', label: 'Accueil' },
                { id: 'ecole', label: 'Notre École' },
                { id: 'parcours', label: 'Parcours & Pédagogie' },
                { id: 'vie-scolaire', label: 'Vie Scolaire & Activités' },
                { id: 'campus', label: 'Nos Campus' },
                { id: 'parents', label: 'Espace Parents' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id as PageId)}
                    className="hover:text-[#e3a044] transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Pratique & Cadre */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-heading text-lg text-white mb-2">
              Informations & Espaces
            </h4>

            {/* Locaux Card */}
            <div
              onClick={() => onNavigate('campus')}
              className="p-4 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-[#e3a044] mb-1">
                <Building2 className="w-3.5 h-3.5" />
                <span>Nos Campus & Équipements</span>
              </div>
              <p className="text-xs text-[#feeddb]/80">
                6 classes lumineuses, éveil scientifique, cinéma-théâtre, jardin
              </p>
            </div>

            {/* Sécurité Card */}
            <div
              onClick={() => onNavigate('campus')}
              className="p-4 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-[#24a974] mb-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Sécurité & Bien-Être des Élèves</span>
              </div>
              <p className="text-xs text-[#feeddb]/80">
                Sols anti-choc, surveillance permanente, hygiène rigoureuse
              </p>
            </div>

            {/* Liens rapides */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <button
                onClick={() => onNavigate('parents')}
                className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-[#feeddb] transition-colors cursor-pointer"
              >
                Espace Parents
              </button>
              <button
                onClick={() => onNavigate('inscription')}
                className="px-3 py-1.5 bg-[#e3a044] text-[#084274] font-bold transition-colors cursor-pointer"
              >
                Inscriptions
              </button>
              <button
                onClick={() => onNavigate('actualites')}
                className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-[#feeddb] transition-colors cursor-pointer"
              >
                Actualités
              </button>
              <button
                onClick={() => onNavigate('actualites')}
                className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-[#feeddb] transition-colors cursor-pointer"
              >
                Galerie
              </button>
              <button
                onClick={() => onNavigate('parents')}
                className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-[#feeddb] transition-colors cursor-pointer"
              >
                FAQ
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-[#feeddb] transition-colors cursor-pointer"
              >
                Contact
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#feeddb]/60">
          <p>© 2026 Les Marronniers El Jadida — Établissement Scolaire Privé. Tous droits réservés.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#e3a044] transition-colors cursor-pointer"
          >
            <span>Retour en haut</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
