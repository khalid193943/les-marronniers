/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Academy Design System - Link Component
 */

import React from 'react';
import { ExternalLink } from 'lucide-react';
import { LinkProps } from '../../types';

const variantClasses = {
  default: 'text-[#0f294a] hover:text-[#2664aa] hover:underline underline-offset-4 decoration-1 font-medium',
  subtle: 'text-slate-600 hover:text-slate-900 hover:underline underline-offset-4 decoration-1 font-normal',
  gold: 'text-[#855d1c] hover:text-[#a77c20] hover:underline underline-offset-4 decoration-1 font-medium',
  navy: 'text-[#0f294a] hover:text-[#1e4f88] font-semibold border-b border-[#0f294a]/30 hover:border-[#0f294a]',
  white: 'text-white hover:text-slate-200 hover:underline underline-offset-4 decoration-1 font-medium',
  underline: 'text-current underline underline-offset-4 decoration-1 hover:decoration-2',
};

export const Link: React.FC<LinkProps> = ({
  href,
  variant = 'default',
  icon,
  iconPosition = 'right',
  isExternal = false,
  className = '',
  children,
  id,
  target,
  rel,
  ...props
}) => {
  const variantClass = variantClasses[variant] || variantClasses.default;
  const externalProps = isExternal
    ? {
        target: target || '_blank',
        rel: rel || 'noopener noreferrer',
      }
    : { target, rel };

  return (
    <a
      id={id}
      href={href}
      className={`inline-flex items-center gap-1.5 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#0f294a] focus-visible: ${variantClass} ${className}`.trim()}
      {...externalProps}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
      {isExternal && !icon && <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-70" aria-hidden="true" />}
    </a>
  );
};
