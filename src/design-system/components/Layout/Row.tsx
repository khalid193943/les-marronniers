/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Academy Design System - Row, Spacer, Centered Layout Primitives
 */

import React from 'react';
import { RowProps, SpacerProps } from '../../types';

export const Row: React.FC<RowProps> = ({
  gap = 'md',
  align = 'center',
  justify = 'start',
  wrap = true,
  className = '',
  children,
  id,
  ...props
}) => {
  const gapClasses = {
    none: 'gap-0',
    xs: 'gap-1.5',
    sm: 'gap-3',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
    '2xl': 'gap-12',
  }[gap];

  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
    baseline: 'items-baseline',
  }[align];

  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
  }[justify];

  return (
    <div
      id={id}
      className={`flex flex-row ${gapClasses} ${alignClasses} ${justifyClasses} ${wrap ? 'flex-wrap' : 'flex-nowrap'} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
};

export const Spacer: React.FC<SpacerProps> = ({
  size = 'md',
  axis = 'vertical',
  className = '',
}) => {
  const sizeMap = {
    xs: axis === 'vertical' ? 'h-2' : 'w-2',
    sm: axis === 'vertical' ? 'h-4' : 'w-4',
    md: axis === 'vertical' ? 'h-8' : 'w-8',
    lg: axis === 'vertical' ? 'h-12' : 'w-12',
    xl: axis === 'vertical' ? 'h-16' : 'w-16',
    '2xl': axis === 'vertical' ? 'h-24' : 'w-24',
    '3xl': axis === 'vertical' ? 'h-32' : 'w-32',
  }[size];

  return <div className={`flex-shrink-0 ${sizeMap} ${className}`} aria-hidden="true" />;
};

export const Centered: React.FC<{
  className?: string;
  maxWidth?: string;
  children: React.ReactNode;
  id?: string;
}> = ({ className = '', maxWidth = 'max-w-2xl', children, id }) => (
  <div id={id} className={`mx-auto text-center flex flex-col items-center justify-center ${maxWidth} ${className}`}>
    {children}
  </div>
);
