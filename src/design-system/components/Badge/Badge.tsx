/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers / Giggle Design System - Badge Component
 */

import React from 'react';
import { BadgeProps } from '../../types';

const toneClasses = {
  coral: 'bg-[#FFF5F2] text-[#FF5A36] border border-[#FFD4C7]',
  forest: 'bg-[#F1F8F4] text-[#1A5336] border border-[#BEE1CF]',
  sun: 'bg-[#FEFCE8] text-[#B45309] border border-[#FEF08A]',
  sky: 'bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE]',
  lavender: 'bg-[#FAF5FF] text-[#7E22CE] border border-[#E9D5FF]',
  ink: 'bg-[#F6F7F6] text-[#18221D] border border-[#C4CBCE]',
  outline: 'bg-transparent text-[#18221D] border border-[#EADECD]',
  white: 'bg-white text-[#18221D] border border-[#EADECD] shadow-xs',
};

const sizeClasses = {
  sm: 'text-[11px] font-bold px-2.5 py-0.5 tracking-wider',
  md: 'text-xs font-bold px-3 py-1 tracking-wider',
  lg: 'text-sm font-bold px-4 py-1.5 tracking-wider',
};

export const Badge: React.FC<BadgeProps> = ({
  tone = 'coral',
  size = 'md',
  pill = true,
  icon,
  className = '',
  children,
  id,
  ...props
}) => {
  const toneClass = toneClasses[tone] || toneClasses.coral;
  const sizeClass = sizeClasses[size] || sizeClasses.md;
  const roundedClass = pill ? '' : '';

  return (
    <span
      id={id}
      className={`inline-flex items-center gap-1.5 font-display uppercase font-bold select-none ${roundedClass} ${toneClass} ${sizeClass} ${className}`.trim()}
      {...props}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span className="whitespace-nowrap">{children}</span>
    </span>
  );
};

