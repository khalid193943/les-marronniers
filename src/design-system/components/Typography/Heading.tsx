/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers / Giggle Design System - Heading Component
 */

import React from 'react';
import { HeadingProps, HeadingLevel } from '../../types';
import { typography } from '../../tokens';

const toneClasses: Record<string, string> = {
  default: 'text-[#18221D]',
  muted: 'text-[#66533F]',
  subtle: 'text-[#9A7D5B]',
  coral: 'text-[#FF5A36]',
  forest: 'text-[#1A5336]',
  sun: 'text-[#D97706]',
  sky: 'text-[#1D4ED8]',
  lavender: 'text-[#7E22CE]',
  inverted: 'text-[#FBF9F4]',
  white: 'text-white',
};

const alignClasses: Record<string, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
};

export const Heading: React.FC<HeadingProps> = ({
  level = 'h2',
  as,
  tone = 'default',
  serif = false,
  align = 'left',
  className = '',
  children,
  id,
  ...props
}) => {
  const Component = (as || level) as React.ElementType;
  const config = typography.scale[level as HeadingLevel];

  const fontStyleClass = serif ? 'font-serif' : 'font-display';
  const toneClass = toneClasses[tone] || toneClasses.default;
  const alignClass = alignClasses[align] || alignClasses.left;

  return (
    <Component
      id={id}
      className={`${config.fontSize} ${config.lineHeight} ${config.letterSpacing} ${config.fontWeight} ${fontStyleClass} ${toneClass} ${alignClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
};

