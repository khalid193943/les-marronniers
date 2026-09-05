/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Academy Design System - Stack Component
 */

import React from 'react';
import { StackProps } from '../../types';

const directionClasses = {
  column: 'flex-col',
  row: 'flex-row',
  'column-reverse': 'flex-col-reverse',
  'row-reverse': 'flex-row-reverse',
};

const gapClasses = {
  none: 'gap-0',
  xs: 'gap-1.5',
  sm: 'gap-3',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8',
  '2xl': 'gap-12',
};

const alignClasses = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
  baseline: 'items-baseline',
};

const justifyClasses = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
};

export const Stack: React.FC<StackProps> = ({
  direction = 'column',
  gap = 'md',
  align = 'stretch',
  justify = 'start',
  wrap = false,
  divider = false,
  className = '',
  children,
  id,
  ...props
}) => {
  const dirClass = directionClasses[direction];
  const gapClass = gapClasses[gap];
  const alignClass = alignClasses[align];
  const justifyClass = justifyClasses[justify];
  const wrapClass = wrap ? 'flex-wrap' : 'flex-nowrap';
  const dividerClass = divider
    ? direction.startsWith('col')
      ? 'divide-y divide-slate-200'
      : 'divide-x divide-slate-200'
    : '';

  return (
    <div
      id={id}
      className={`flex ${dirClass} ${gapClass} ${alignClass} ${justifyClass} ${wrapClass} ${dividerClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
};
