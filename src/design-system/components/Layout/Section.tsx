/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers / Giggle Design System - Section Component
 */

import React from 'react';
import { SectionProps } from '../../types';
import { Container } from './Container';

const backgroundClasses = {
  white: 'bg-white text-[#18221D]',
  cream: 'bg-[#FBF9F4] text-[#18221D]',
  'coral-soft': 'bg-[#FFF5F2] text-[#18221D]',
  'forest-soft': 'bg-[#F1F8F4] text-[#18221D]',
  'sun-soft': 'bg-[#FEFCE8] text-[#18221D]',
  'sky-soft': 'bg-[#EFF6FF] text-[#18221D]',
  'forest-dark': 'bg-[#1A5336] text-white',
  'ink-dark': 'bg-[#18221D] text-white',
  transparent: 'bg-transparent',
};

const spacingClasses = {
  none: 'py-0',
  sm: 'py-6 sm:py-8',
  md: 'py-10 sm:py-14',
  lg: 'py-16 sm:py-20 lg:py-24',
  xl: 'py-20 sm:py-28 lg:py-32',
  '2xl': 'py-28 sm:py-36 lg:py-44',
};

export const Section: React.FC<SectionProps> = ({
  as = 'section',
  background = 'cream',
  spacing = 'lg',
  containerWidth = '2xl',
  withDivider = false,
  className = '',
  children,
  id,
  ...props
}) => {
  const Component = as as React.ElementType;
  const bgClass = backgroundClasses[background] || backgroundClasses.cream;
  const spaceClass = spacingClasses[spacing] || spacingClasses.lg;
  const dividerClass = withDivider ? 'border-b border-[#EADECD]' : '';

  return (
    <Component
      id={id}
      className={`relative w-full ${bgClass} ${spaceClass} ${dividerClass} ${className}`.trim()}
      {...props}
    >
      {containerWidth ? (
        <Container width={containerWidth}>{children}</Container>
      ) : (
        children
      )}
    </Component>
  );
};

