/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers — Lecture d'un article d'actualité.
 * Grande image inclinée, texte lisible (ligne courte), articles suivants.
 */

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowLeft, CalendarDays, Calendar } from 'lucide-react';
import { SectionDivider } from '../components/SectionDivider';
import { DoodleStar } from '../design-system/giggle/Doodles';
import { getPostBySlug, getPosts, formatDate } from '../lib/newsStore';

interface ArticlePageProps {
  slug: string;
  onBack: () => void;
  onOpenArticle: (slug: string) => void;
  onOpenAdmissions: () => void;
}

export const ArticlePage: React.FC<ArticlePageProps> = ({
  slug,
  onBack,
  onOpenArticle,
  onOpenAdmissions,
}) => {
  const reduce = useReducedMotion();
  const post = getPostBySlug(slug);
  const others = getPosts().filter((p) => p.slug !== slug).slice(0, 2);

  if (!post) {
    return (
      <div className="bg-[#fff7ef] py-24 text-center px-4">
        <h1 className="font-heading text-3xl text-[#0086d9] mb-4">Article introuvable</h1>
        <p className="font-body text-[#00558d]/70 mb-8">Cet article n’existe plus ou a été déplacé.</p>
        <button onClick={onBack} className="giggle-button-primary cursor-pointer inline-flex items-center gap-2">
          <ArrowLeft className="w-4 h-4 text-[#e3a044]" /> Retour aux actualités
        </button>
      </div>
    );
  }

  const paragraphs = post.body.split(/\n\s*\n/).filter(Boolean);

  return (
    <article>
      {/* En-tête */}
      <header className="bg-[#fff7ef] pt-10 pb-14 sm:pt-14 sm:pb-16 relative overflow-hidden">
        <DoodleStar className="hidden md:block absolute top-10 right-[10%] w-9 text-[#e3a044]/60 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 font-body text-sm font-bold text-[#00558d]/70 hover:text-[#0086d9] mb-8 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Toutes les actualités
          </button>

          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0086d9]/8 px-4 py-1.5 text-[11px] font-bold text-[#0086d9] mb-5 keep-round">
              <CalendarDays className="w-3.5 h-3.5 text-[#e3a044]" />
              {post.category} · {formatDate(post.date)}
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#0086d9] leading-tight mb-4">
              {post.title}
            </h1>
            <p className="font-body text-lg text-[#00558d]/70 leading-relaxed">{post.excerpt}</p>
          </motion.div>
        </div>
      </header>

      {/* Image de couverture inclinée */}
      {post.cover && (
        <div className="bg-[#fff7ef] pb-4">
          <motion.div
            initial={reduce ? undefined : { opacity: 0, rotate: 3, y: 24 }}
            animate={{ opacity: 1, rotate: -1, y: 0 }}
            transition={{ type: 'spring', stiffness: 60, damping: 14, delay: 0.1 }}
            className="relative max-w-3xl mx-auto px-4 sm:px-8"
          >
            <span
              aria-hidden="true"
              className="absolute inset-x-4 sm:inset-x-8 inset-y-0 bg-[#e3a044]"
              style={{ transform: 'rotate(1.5deg) translate(10px,10px)' }}
            />
            <div className="relative z-10 aspect-[16/9] overflow-hidden border-[6px] border-white shadow-2xl">
              <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      )}

      <SectionDivider variant="white" position="top" style="wave1" />

      {/* Corps de l'article */}
      <section className="bg-white py-14 sm:py-20 overflow-hidden">
        <div className="max-w-2xl mx-auto px-4 sm:px-8">
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="font-body text-[17px] text-[#00558d]/85 leading-[1.75] mb-6"
            >
              {p}
            </motion.p>
          ))}

          <div className="mt-12 pt-10 border-t border-[#0086d9]/12 text-center">
            <p className="font-body text-sm text-[#00558d]/70 mb-5">
              Envie de découvrir l’école en vrai ?
            </p>
            <button onClick={onOpenAdmissions} className="giggle-button-primary cursor-pointer inline-flex items-center gap-3">
              <Calendar className="w-4 h-4 text-[#e3a044]" />
              <span>Réserver une visite</span>
            </button>
          </div>
        </div>
      </section>

      {/* Articles suivants */}
      {others.length > 0 && (
        <>
          <SectionDivider variant="cream" position="top" style="wave2" />
          <section className="bg-[#fff7ef] py-14 sm:py-20 overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-8">
              <h2 className="font-heading text-2xl sm:text-3xl text-[#0086d9] text-center mb-10">
                À lire ensuite
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {others.map((p, idx) => {
                  const rot = idx % 2 === 0 ? -1.5 : 1.5;
                  return (
                    <motion.article
                      key={p.id}
                      initial={reduce ? undefined : { opacity: 0, y: 24, rotate: rot * 3 }}
                      whileInView={{ opacity: 1, y: 0, rotate: rot }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ type: 'spring', stiffness: 55, damping: 13, delay: idx * 0.08 }}
                      whileHover={{ rotate: 0, y: -5 }}
                      onClick={() => onOpenArticle(p.slug)}
                      className="bg-white border border-[#0086d9]/10 rounded-2xl overflow-hidden cursor-pointer shadow-sm group"
                    >
                      <div className="aspect-[16/10] overflow-hidden bg-[#0086d9]/8">
                        {p.cover && (
                          <img src={p.cover} alt={p.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        )}
                      </div>
                      <div className="p-5">
                        <span className="font-body text-[10px] font-bold text-[#e3a044]">
                          {p.category} · {formatDate(p.date)}
                        </span>
                        <h3 className="font-heading text-lg text-[#0086d9] mt-1">{p.title}</h3>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      )}
    </article>
  );
};
