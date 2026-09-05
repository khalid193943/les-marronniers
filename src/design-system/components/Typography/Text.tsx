/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers / Giggle Design System - Text Component
 */

import React from 'react';
import { TextProps, TextVariant } from '../../types';
import { typography } from '../../tokens';

const toneClasses: Record<string, string> = {
  default: 'text-[#18221D]',
  muted: 'text-[#5C5346]',
  subtle: 'text-[#8A7A68]',
  coral: 'text-[#FF5A36]',
  forest: 'text-[#1A5336]',
  sun: 'text-[#B45309]',
  sky: 'text-[#1D4ED8]',
  lavender: 'text-[#7E22CE]',
  inverted: 'text-[#F5EFE4]',
  white: 'text-white',
};

const weightClasses: Record<string, string> = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
};

const alignClasses: Record<string, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
};

export const Text: React.FC<TextProps> = ({
  variant = 'paragraph',
  as,
  tone = 'default',
  weight,
  align = 'left',
  className = '',
  children,
  id,
  ...props
}) => {
  // Default HTML tag based on variant
  let defaultTag: 'p' | 'span' | 'small' | 'label' | 'div' = 'p';
  if (variant === 'caption') defaultTag = 'small';
  if (variant === 'label') defaultTag = 'label';

  const Component = (as || defaultTag) as React.ElementType;
  const config = typography.scale[variant as TextVariant];

  const weightClass = weight ? weightClasses[weight] : config.fontWeight;
  const toneClass = toneClasses[tone] || toneClasses.default;
  const alignClass = alignClasses[align] || alignClasses.left;

  return (
    <Component
      id={id}
      className={`${config.fontSize} ${config.lineHeight} ${config.letterSpacing} ${weightClass} ${config.fontFamily} ${toneClass} ${alignClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
};

