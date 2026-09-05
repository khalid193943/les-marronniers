/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Page "Actualités & Galerie"
 * Article à la une + liste en lignes avec vignettes (inspiré de la référence
 * "Featured Programs"), réseaux sociaux, puis galerie polaroids.
 */

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { CalendarDays, ArrowUpRight } from 'lucide-react';
import { PageHero } from '../design-system/giggle/PageHero';
import { SectionIntro } from '../design-system/giggle/SectionIntro';
import { DoodleSun, DoodleStar } from '../design-system/giggle/Doodles';
import { SectionDivider } from '../components/SectionDivider';
import { SocialSection } from '../components/SocialSection';
import { getPosts, formatDate, NewsPost } from '../lib/newsStore';
import { PHOTOS, GALLERY } from '../data/photos';

interface ActualitesPageProps {
  onOpenArticle: (slug: string) => void;
}

/* La galerie puise directement dans le catalogue des vraies photos. */
const ROTATIONS = [-3, 2, 3, -2, 2, -3, 3, -2, -3, 2, 3, -2];
const GALERIE = GALLERY.map((key, i) => ({
  ...PHOTOS[key],
  rot: ROTATIONS[i % ROTATIONS.length],
}));

export const ActualitesPage: React.FC<ActualitesPageProps> = ({ onOpenArticle }) => {
  const reduce = useReducedMotion();
  const posts = getPosts();
  const featured: NewsPost | undefined = posts.find((p) => p.featured) ?? posts[0];
  const rest = posts.filter((p) => p.id !== featured?.id);

  return (
    <div>
      <PageHero
        tag="Actualités"
        title="La Vie de l’École"
        line="Ce qui se passe en ce moment aux Marronniers."
      />
      <SectionDivider variant="white" position="top" style="wave1" />

      <section className="bg-white py-14 sm:py-20 overflow-hidden relative">
        <DoodleSun className="hidden lg:block absolute top-10 right-[6%] w-11 text-[#e3a044]/50 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-8">

          {/* Article à la une */}
          {featured && (
            <motion.article
              initial={reduce ? undefined : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => onOpenArticle(featured.slug)}
              className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 sm:mb-20 cursor-pointer group"
            >
              <div className="relative">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-[#e3a044] transition-transform duration-300 group-hover:translate-x-1.5 group-hover:translate-y-1.5"
                  style={{ transform: 'rotate(-2deg) translate(10px,10px)' }}
                />
                <div className="relative z-10 aspect-[4/3] overflow-hidden shadow-xl border-[6px] border-white">
                  {featured.cover && (
                    <img
                      src={featured.cover}
                      alt={featured.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
                </div>
              </div>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#e3a044]/15 px-4 py-1.5 text-[11px] font-bold text-[#0086d9] mb-4 keep-round">
                  <CalendarDays className="w-3.5 h-3.5 text-[#e3a044]" />
                  {featured.category} · {formatDate(featured.date)}
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl text-[#0086d9] leading-tight mb-4">
                  {featured.title}
                </h2>
                <p className="font-body text-base text-[#00558d]/70 leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <span className="inline-flex items-center gap-3 font-body font-bold text-sm text-[#0086d9]">
                  Lire l’article
                  <span className="w-9 h-9 rounded-full bg-[#0086d9] text-[#ffe08a] flex items-center justify-center group-hover:rotate-45 transition-transform duration-300 keep-round">
                    <ArrowUpRight className="w-4 h-4" strokeWidth={2.2} />
                  </span>
                </span>
              </div>
            </motion.article>
          )}

          {/* Autres articles en lignes */}
          {rest.length > 0 && (
            <>
              <SectionIntro tag="Toutes les actualités" title="À Lire Aussi" className="mb-10" />
              <div className="flex flex-col gap-4">
                {rest.map((p, idx) => (
                  <motion.article
                    key={p.id}
                    initial={reduce ? undefined : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: idx * 0.06 }}
                    whileHover={{ x: 6 }}
                    onClick={() => onOpenArticle(p.slug)}
                    className="flex items-center gap-5 sm:gap-8 bg-[#0086d9]/6 hover:bg-[#0086d9]/10 border border-[#0086d9]/10 rounded-2xl p-4 sm:p-5 cursor-pointer transition-colors group"
                  >
                    <div className="flex-1 min-w-0">
                      <span className="font-body text-[10px] font-bold text-[#e3a044]">
                        {p.category} · {formatDate(p.date)}
                      </span>
                      <h3 className="font-heading text-lg sm:text-xl text-[#0086d9] mt-1 mb-1.5">{p.title}</h3>
                      <p className="font-body text-[13px] text-[#00558d]/65 leading-relaxed">{p.excerpt}</p>
                    </div>
                    <div className="w-28 h-24 sm:w-40 sm:h-28 shrink-0 rounded-xl overflow-hidden bg-[#0086d9]/10">
                      {p.cover && (
                        <img
                          src={p.cover}
                          alt={p.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                    </div>
                  </motion.article>
                ))}
              </div>
            </>
          )}

          {posts.length === 0 && (
            <p className="font-body text-center text-[#00558d]/60 py-10">
              Les premières actualités arrivent bientôt.
            </p>
          )}
        </div>
      </section>

      <SocialSection />

      <SectionDivider variant="cream" position="top" style="wave2" />

      {/* Galerie polaroids */}
      <section className="bg-[#fff7ef] py-16 sm:py-24 overflow-hidden relative">
        <DoodleStar className="hidden lg:block absolute top-12 left-[6%] w-9 text-[#d95f43]/50 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <SectionIntro tag="Galerie" title="Des Moments qui Comptent" className="mb-14" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {GALERIE.map((g, idx) => (
              <motion.figure
                key={idx}
                initial={reduce ? undefined : { opacity: 0, y: 30, rotate: g.rot * 2.5 }}
                whileInView={{ opacity: 1, y: 0, rotate: g.rot }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ type: 'spring', stiffness: 60, damping: 13, delay: (idx % 4) * 0.07 }}
                whileHover={{ rotate: 0, scale: 1.04, zIndex: 10 }}
                className="relative bg-white p-2.5 pb-8 shadow-lg cursor-pointer"
              >
                <img src={g.src} alt={g.alt} className="w-full aspect-square object-cover" loading="lazy" />
                <figcaption className="absolute bottom-2 left-0 right-0 text-center font-heading text-xs text-[#00558d]/70">
                  {g.alt}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
