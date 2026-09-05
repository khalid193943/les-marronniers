/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Academy Design System - Container Component
 */

import React from 'react';
import { ContainerProps } from '../../types';
import { containerWidths } from '../../tokens';

const paddingClasses = {
  none: 'px-0',
  sm: 'px-4',
  md: 'px-4 sm:px-6 lg:px-8',
  lg: 'px-6 sm:px-8 lg:px-12',
  xl: 'px-6 sm:px-10 lg:px-16',
};

export const Container: React.FC<ContainerProps> = ({
  width = '2xl',
  centered = true,
  padding = 'md',
  className = '',
  children,
  id,
  ...props
}) => {
  const widthClass = containerWidths[width] || containerWidths['2xl'];
  const centerClass = centered ? 'mx-auto' : '';
  const padClass = paddingClasses[padding];

  return (
    <div
      id={id}
      className={`w-full ${widthClass} ${centerClass} ${padClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
};
