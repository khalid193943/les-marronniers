/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Academy Design System - Image Component
 */

import React, { useState } from 'react';
import { ImageProps } from '../../types';

const aspectRatioClasses = {
  '1:1': 'aspect-square',
  '4:3': 'aspect-[4/3]',
  '16:9': 'aspect-video',
  '21:9': 'aspect-[21/9]',
  '3:4': 'aspect-[3/4]',
  auto: '',
};

const roundedClasses = {
  none: '',
  sm: '',
  md: '',
  lg: '',
  xl: '',
  '2xl': '',
  full: '',
};

const shadowClasses = {
  none: 'shadow-none',
  xs: 'shadow-xs',
  sm: 'shadow-sm-custom',
  md: 'shadow-md-custom',
  lg: 'shadow-lg-custom',
  xl: 'shadow-xl-custom',
  xxl: 'shadow-xxl-custom',
};

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  aspectRatio = 'auto',
  shadow = 'sm',
  caption,
  fit = 'cover',
  overlay = false,
  className = '',
  id,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const aspectClass = aspectRatioClasses[aspectRatio];
  const roundClass = '';
  const shadowClass = shadowClasses[shadow];

  return (
    <figure className={`relative overflow-hidden inline-block w-full ${roundClass} ${shadowClass} ${className}`}>
      <div className={`relative w-full overflow-hidden bg-slate-100 ${aspectClass} ${roundClass}`}>
        {!loaded && !hasError && (
          <div className="absolute inset-0 bg-slate-200 animate-pulse" />
        )}
        
        {hasError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-400 text-xs p-4 text-center">
            Image unavailable
          </div>
        ) : (
          <img
            id={id}
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            loading="lazy"
            onLoad={() => setLoaded(true)}
            onError={() => setHasError(true)}
            className={`w-full h-full object-${fit} transition-opacity duration-500 ${
              loaded ? 'opacity-100' : 'opacity-0'
            } ${roundClass}`}
            {...props}
          />
        )}

        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-t from-[#091930]/80 via-[#091930]/20 to-transparent pointer-events-none" />
        )}
      </div>

      {caption && (
        <figcaption className="mt-2 text-xs text-slate-500 font-sans tracking-wide">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
