/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers El Jadida - Key Figures Section (Mobile First)
 */

import React from 'react';
import { Award, School, Sparkles, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { CountUp } from '../design-system/giggle/CountUp';

export const KeyFiguresSection: React.FC = () => {
  const figures = [
    {
      icon: Award,
      value: 100, suffix: '%',
      label: 'Taux de Réussite',
    },
    {
      icon: School,
      value: 2, suffix: '',
      label: 'Campus Dédiés',
    },
    {
      icon: Sparkles,
      value: 15, suffix: '+',
      label: 'Ateliers Éducatifs',
    },
    {
      icon: Clock,
      value: 15, suffix: ' ans',
      label: "D'Expérience Reconnue",
    },
  ];

  return (
    <section className="bg-[#0086d9] text-[#fff7ef] py-12 sm:py-16 relative overflow-hidden border-y border-[#fff7ef]/15">
      {/* Subtle modern particle highlights */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff7ef_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {figures.map((fig, idx) => {
            const Icon = fig.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 hover:bg-white/10 border border-[#fff7ef]/15 p-5 sm:p-6 flex flex-col items-center text-center group transition-all duration-300"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 group-hover:bg-[#e3a044] transition-all duration-300 text-[#fff7ef] group-hover:text-[#0086d9]">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                
                <span className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 tracking-tight text-white group-hover:text-[#ffe08a] transition-colors">
                  <CountUp value={fig.value} suffix={fig.suffix} />
                </span>
                
                <span className="font-body text-xs sm:text-sm font-bold uppercase tracking-wider text-[#fff7ef] mb-1">
                  {fig.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
