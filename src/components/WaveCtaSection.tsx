/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers El Jadida - Bottom Wave CTA Section (Nouvelle Génération)
 */

import React from 'react';
import { Calendar, Phone, Sparkles, ArrowRight } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolInfo';
import { SectionDivider } from './SectionDivider';
import { motion } from 'motion/react';

interface WaveCtaSectionProps {
  onOpenAdmissions: () => void;
}

export const WaveCtaSection: React.FC<WaveCtaSectionProps> = ({ onOpenAdmissions }) => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Top Blue Wave Separator */}
      <SectionDivider variant="blue" position="top" />

      <section className="relative overflow-hidden bg-[#084274] py-24 sm:py-32 text-center text-[#feeddb]">
        {/* Subtle glowing ambient orbs */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#e3a044]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

        {/* Center Content */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
        >
          {/* White Tag with glowing dot */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-[#feeddb] text-xs font-semibold mb-6 border border-white/20 shadow-sm backdrop-blur-xs">
            <span className="w-2 h-2 rounded-full bg-[#e3a044] animate-ping" />
            <span>Vous Êtes les Bienvenus à El Jadida</span>
          </div>

          {/* Display Heading */}
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight mb-6 max-w-3xl leading-[1.1]">
            Venez Visiter Notre Établissement en Famille
          </h2>

          <p className="font-body text-base sm:text-lg text-white/85 leading-relaxed mb-10 max-w-2xl">
            Rien ne remplace une visite : venez sentir l'ambiance sur place.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={onOpenAdmissions}
              className="w-full sm:w-auto bg-white hover:bg-[#feeddb] text-[#084274] font-bold text-base px-9 py-4.5 shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-3 border-2 border-white group"
            >
              <Calendar className="w-5 h-5 text-[#e3a044]" />
              <span>Réserver une visite</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={`tel:${SCHOOL_INFO.phoneRaw}`}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-[#feeddb] font-semibold text-base px-8 py-4.5 border border-white/30 transition-all flex items-center justify-center gap-2.5 backdrop-blur-xs"
            >
              <Phone className="w-4 h-4 text-[#e3a044]" />
              <span>{SCHOOL_INFO.phone}</span>
            </a>
          </div>

          <p className="text-xs text-white/60 mt-6 font-body">
            Lun – Ven · 7h45 – 18h15
          </p>
        </motion.div>
      </section>

      {/* Bottom Blue Wave Separator returning to cream */}
      <SectionDivider variant="blue" position="bottom" />
    </div>
  );
};
