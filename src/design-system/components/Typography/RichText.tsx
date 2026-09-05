/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Academy Design System - Rich Text Component
 * Provides comprehensive, elegant typographic styles for editorial content,
 * syllabus documentation, school headmaster addresses, and articles.
 */

import React from 'react';
import { RichTextProps } from '../../types';

export const RichText: React.FC<RichTextProps> = ({
  size = 'base',
  theme = 'light',
  className = '',
  children,
  id,
  ...props
}) => {
  const sizeClasses = {
    sm: 'prose-sm',
    base: 'prose-base',
    lg: 'prose-lg',
  }[size];

  const themeClasses = {
    light: 'text-slate-800',
    dark: 'text-slate-200',
    linen: 'text-[#362f27]',
  }[theme];

  return (
    <div
      id={id}
      className={`rich-text-content ${sizeClasses} ${themeClasses} max-w-prose space-y-5 leading-relaxed ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const RichBlockquote: React.FC<{
  quote: string;
  author?: string;
  title?: string;
  className?: string;
}> = ({ quote, author, title, className = '' }) => (
  <figure className={`border-l-4 border-[#c59d2a] pl-6 py-2 my-6 bg-slate-50/80 -lg ${className}`}>
    <blockquote className="font-serif italic text-xl sm:text-2xl text-slate-800 leading-snug">"{quote}"
    </blockquote>
    {(author || title) && (
      <figcaption className="mt-3 text-sm text-slate-600 font-sans flex items-center gap-2">
        <span className="font-semibold text-slate-900">{author}</span>
        {author && title && <span className="text-slate-400">•</span>}
        <span className="text-slate-500">{title}</span>
      </figcaption>
    )}
  </figure>
);

export const RichFigure: React.FC<{
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  className?: string;
}> = ({ src, alt, caption, credit, className = '' }) => (
  <figure className={`my-8 group overflow-hidden  bg-slate-100 border border-slate-200/80 shadow-sm ${className}`}>
    <img
      src={src}
      alt={alt}
      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
      referrerPolicy="no-referrer"
      loading="lazy"
    />
    {(caption || credit) && (
      <figcaption className="p-3 text-xs sm:text-sm text-slate-600 bg-white border-t border-slate-100 flex flex-col sm:flex-row justify-between gap-1">
        {caption && <span>{caption}</span>}
        {credit && <span className="text-slate-400 italic font-mono text-[11px]">{credit}</span>}
      </figcaption>
    )}
  </figure>
);
