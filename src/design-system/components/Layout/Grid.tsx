/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Academy Design System - Grid Primitives
 * Fully responsive 8-column, 6-column, 4-column, and custom column layouts.
 */

import React from 'react';
import { GridProps, GridColumns, GridGap } from '../../types';

const colClasses: Record<GridColumns, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  8: 'grid-cols-8',
  12: 'grid-cols-12',
};

const colSmClasses: Record<GridColumns, string> = {
  1: 'sm:grid-cols-1',
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-3',
  4: 'sm:grid-cols-4',
  5: 'sm:grid-cols-5',
  6: 'sm:grid-cols-6',
  8: 'sm:grid-cols-8',
  12: 'sm:grid-cols-12',
};

const colMdClasses: Record<GridColumns, string> = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
  5: 'md:grid-cols-5',
  6: 'md:grid-cols-6',
  8: 'md:grid-cols-8',
  12: 'md:grid-cols-12',
};

const colLgClasses: Record<GridColumns, string> = {
  1: 'lg:grid-cols-1',
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
  5: 'lg:grid-cols-5',
  6: 'lg:grid-cols-6',
  8: 'lg:grid-cols-8',
  12: 'lg:grid-cols-12',
};

const colXlClasses: Record<GridColumns, string> = {
  1: 'xl:grid-cols-1',
  2: 'xl:grid-cols-2',
  3: 'xl:grid-cols-3',
  4: 'xl:grid-cols-4',
  5: 'xl:grid-cols-5',
  6: 'xl:grid-cols-6',
  8: 'xl:grid-cols-8',
  12: 'xl:grid-cols-12',
};

const gapClasses: Record<GridGap, string> = {
  none: 'gap-0',
  xs: 'gap-2',
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
  xl: 'gap-10',
  '2xl': 'gap-12 lg:gap-16',
};

const alignClasses = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
};

export const Grid: React.FC<GridProps> = ({
  cols = 4,
  colsSm,
  colsMd,
  colsLg,
  colsXl,
  gap = 'md',
  align = 'stretch',
  className = '',
  children,
  id,
  ...props
}) => {
  const baseCol = colClasses[cols] || 'grid-cols-4';
  const smCol = colsSm ? colSmClasses[colsSm] : '';
  const mdCol = colsMd ? colMdClasses[colsMd] : '';
  const lgCol = colsLg ? colLgClasses[colsLg] : '';
  const xlCol = colsXl ? colXlClasses[colsXl] : '';
  const gapClass = gapClasses[gap] || gapClasses.md;
  const alignClass = alignClasses[align] || alignClasses.stretch;

  return (
    <div
      id={id}
      className={`grid ${baseCol} ${smCol} ${mdCol} ${lgCol} ${xlCol} ${gapClass} ${alignClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
};

// Explicit helpers for 8-col, 6-col, 4-col grids
export const Grid8Col: React.FC<Omit<GridProps, 'cols'>> = (props) => (
  <Grid cols={1} colsSm={2} colsMd={4} colsLg={8} {...props} />
);

export const Grid6Col: React.FC<Omit<GridProps, 'cols'>> = (props) => (
  <Grid cols={1} colsSm={2} colsMd={3} colsLg={6} {...props} />
);

export const Grid4Col: React.FC<Omit<GridProps, 'cols'>> = (props) => (
  <Grid cols={1} colsSm={2} colsMd={2} colsLg={4} {...props} />
);
