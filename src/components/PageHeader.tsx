/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers El Jadida - Page Header Component (Ovo Giggle Theme)
 */

import React from 'react';
import { ChevronRight, Home, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { PageId } from '../types';
import { SectionDivider } from './SectionDivider';

interface PageHeaderProps {
  tag: string;
  title: string;
  highlightedWord?: string;
  description: string;
  onNavigate: (page: PageId) => void;
  breadcrumbs: { label: string; page?: PageId }[];
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  tag,
  title,
  highlightedWord,
  description,
  onNavigate,
  breadcrumbs,
}) => {
  return (
    <div className="bg-[#feeddb] border-b border-[#084274]/10 pt-10 pb-14 sm:pb-20 relative overflow-hidden">
      {/* Decorative background stars */}
      <div className="absolute top-4 right-8 pointer-events-none opacity-40 hidden sm:block animate-float-gentle">
        <img
          src="https://cdn.prod.website-files.com/69c84428044e454b1b6c1405/69c846c27cfcd77cf98c9f26_Stars.svg"
          alt=""
          className="w-20 h-auto"
        />
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Breadcrumb row & Back button */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center justify-between gap-4 mb-6"
        >
          <nav className="flex items-center gap-2 text-xs font-semibold text-[#084274]/70">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-1 hover:text-[#084274] transition-colors cursor-pointer"
            >
              <Home className="w-3.5 h-3.5 text-[#e3a044]" />
              <span>Accueil</span>
            </button>

            {breadcrumbs.map((bc, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3 h-3 text-[#084274]/40" />
                {bc.page ? (
                  <button
                    onClick={() => onNavigate(bc.page!)}
                    className="hover:text-[#084274] transition-colors cursor-pointer"
                  >
                    {bc.label}
                  </button>
                ) : (
                  <span className="text-[#084274] font-bold">{bc.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#084274] hover:text-[#e3a044] transition-colors cursor-pointer bg-white/60 hover:bg-white px-3.5 py-1.5  border border-[#084274]/10 shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Retour à l'accueil</span>
          </button>
        </motion.div>

        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="giggle-tag mb-4"
        >
          <div className="giggle-dot animate-pulse" />
          <span>{tag}</span>
        </motion.div>

        {/* Main Display Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-3xl sm:text-5xl lg:text-6xl text-[#084274] tracking-tight mb-4 max-w-4xl leading-[1.12]"
        >
          {title}{' '}
          {highlightedWord && (
            <span className="text-[#e3a044] font-bold">{highlightedWord}</span>
          )}
        </motion.h1>

        {/* Lead text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="font-body text-base sm:text-lg text-[#084274]/80 leading-relaxed max-w-2xl"
        >
          {description}
        </motion.p>
      </div>

      {/* Decorative Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <SectionDivider variant="cream" position="bottom" />
      </div>
    </div>
  );
};
