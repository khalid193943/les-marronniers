/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers El Jadida - Mobile-First Floating Quick Action Bar
 * Appears exclusively on mobile (hidden on md/lg screens)
 */

import React from 'react';
import { Phone, MessageCircle, MapPin, Calendar } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolInfo';

interface MobileBottomBarProps {
  onOpenAdmissions: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenAdmissions }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#feeddb]/95 backdrop-blur-lg border-t-2 border-[#084274]/15 shadow-2xl px-3 py-2">
      <div className="grid grid-cols-4 gap-1.5 items-center max-w-md mx-auto">
        
        {/* Call Button */}
        <a
          href="tel:+212523395603"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-[#084274] hover:bg-[#084274]/10 transition-colors active:scale-95"
          aria-label="Appeler l'école"
        >
          <div className="w-8 h-8 rounded-full bg-[#084274] text-[#feeddb] flex items-center justify-center mb-1 shadow-xs">
            <Phone className="w-4 h-4 text-[#e3a044]" />
          </div>
          <span className="text-[10px] font-bold tracking-tight">Appeler</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/212623395603?text=Bonjour,%20je%20souhaite%20des%20informations%20sur%20les%20inscriptions%20aux%20Marronniers."
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-[#084274] hover:bg-[#084274]/10 transition-colors active:scale-95"
          aria-label="Contacter sur WhatsApp"
        >
          <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center mb-1 shadow-xs">
            <MessageCircle className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold tracking-tight">WhatsApp</span>
        </a>

        {/* Location Button */}
        <a
          href="#contact-location"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-[#084274] hover:bg-[#084274]/10 transition-colors active:scale-95"
          aria-label="Voir l'adresse et plan"
        >
          <div className="w-8 h-8 rounded-full bg-[#084274] text-[#feeddb] flex items-center justify-center mb-1 shadow-xs">
            <MapPin className="w-4 h-4 text-[#e3a044]" />
          </div>
          <span className="text-[10px] font-bold tracking-tight">Accès</span>
        </a>

        {/* Admissions Modal Trigger */}
        <button
          onClick={onOpenAdmissions}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-[#084274] hover:bg-[#084274]/10 transition-colors active:scale-95 cursor-pointer"
          aria-label="Prendre rendez-vous"
        >
          <div className="w-8 h-8 rounded-full bg-[#e3a044] text-[#084274] flex items-center justify-center mb-1 shadow-xs">
            <Calendar className="w-4 h-4 font-bold" />
          </div>
          <span className="text-[10px] font-bold tracking-tight text-[#084274]">Rendez-vous</span>
        </button>

      </div>
    </div>
  );
};
