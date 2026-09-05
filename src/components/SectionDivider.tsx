/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Les Marronniers El Jadida - Exact Ovo Giggle Section Separators
 * Uses the exact SVG geometry provided by the user:
 * Blue Big 2: https://cdn.prod.website-files.com/69c84428044e454b1b6c1405/69c9276193fe1d2d5fbc5204_Blue%20Big%202.svg
 * White Big 2: https://cdn.prod.website-files.com/69c84428044e454b1b6c1405/69c92708bbe3665544135e27_White%20Big%202.svg
 */

import React from 'react';

interface SectionDividerProps {
  /**
   * Color variant:
   * - 'cream': #FFF7EF (site signature warm cream)
   * - 'white': #FFFFFF (pure white)
   * - 'blue': #00558d (signature navy blue)
   */
  variant: 'cream' | 'white' | 'blue';
  /**
   * Type of wave:
   * - 'wave1': White Big 2 shape (wavy organic curves)
   * - 'wave2': Blue Big 2 shape (angular energetic peaks)
   */
  style?: 'wave1' | 'wave2';
  position?: 'top' | 'bottom';
  className?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  variant,
  style = 'wave1',
  position = 'top',
  className = '',
}) => {
  const colorMap = {
    cream: '#FFF7EF',
    white: '#FFFFFF',
    blue: '#00558d',
  };

  const fillColor = colorMap[variant];

  return (
    <div
      className={`w-full overflow-hidden leading-none select-none pointer-events-none z-20 ${
        position === 'bottom' ? 'rotate-180 transform -mb-[2px]' : '-mt-[2px]'
      } ${className}`}
      aria-hidden="true"
    >
      {style === 'wave2' || variant === 'blue' ? (
        <svg
          className="w-full h-8 sm:h-12 md:h-16 lg:h-20 xl:h-24 block"
          viewBox="0 0 4665 216"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="1552" y="85" width="13" height="131" fill={fillColor} />
          <path
            d="M71.7298 0L0 26.0707V212.285L1555 216V80.7188L1336.74 99.2691L1276.28 50.1359L1142.04 88.7406L1087.73 58.1577L984.748 99.2691L923.778 26.0707L757.262 99.2691L710.638 38.1033L615.339 80.7188L510.819 26.0707L414.496 99.2691L362.748 38.1033L233.634 58.1577L188.547 12.0326L115.28 50.1359L71.7298 0Z"
            fill={fillColor}
          />
          <path
            d="M71.7298 0L0 26.0707V216H1555V80.7188L1336.74 99.2691L1276.28 50.1359L1142.04 88.7406L1087.73 58.1577L984.748 99.2691L923.778 26.0707L757.262 99.2691L710.638 38.1033L615.339 80.7188L510.819 26.0707L414.496 99.2691L362.748 38.1033L233.634 58.1577L188.547 12.0326L115.28 50.1359L71.7298 0Z"
            fill={fillColor}
          />
          <rect x="3102" y="27" width="13" height="187" fill={fillColor} />
          <path
            d="M3181.73 0L3110 26.0707V216H4665V80.7188L4446.74 99.2691L4386.28 50.1359L4252.04 88.7406L4197.73 58.1577L4094.75 99.2691L4033.78 26.0707L3867.26 99.2691L3820.64 38.1033L3725.34 80.7188L3620.82 26.0707L3524.5 99.2691L3472.75 38.1033L3343.63 58.1577L3298.55 12.0326L3225.28 50.1359L3181.73 0Z"
            fill={fillColor}
          />
          <path
            d="M3038.27 0L3110 26.0707V216H1555V80.7188L1773.26 99.2691L1833.72 50.1359L1967.96 88.7406L2022.27 58.1577L2125.25 99.2691L2186.22 26.0707L2352.74 99.2691L2399.36 38.1033L2494.66 80.7188L2599.18 26.0707L2695.5 99.2691L2747.25 38.1033L2876.37 58.1577L2921.45 12.0326L2994.72 50.1359L3038.27 0Z"
            fill={fillColor}
          />
        </svg>
      ) : (
        <svg
          className="w-full h-8 sm:h-12 md:h-16 lg:h-20 xl:h-24 block"
          viewBox="0 0 4665 184"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M58.0685 12.2487L0 24.4974L5.20664e-05 173.837V184H1555V66.8968H1438.35L1304.74 75.3767L1199.91 66.8968L1096.11 86.2121L970.719 35.3328L749.237 66.8968L673.696 75.3767L573.49 45.226L454.784 66.8968H380.785L293.425 45.226L236.899 12.2487L135.664 35.3328L126.414 0L58.0685 12.2487Z"
            fill={fillColor}
          />
          <rect x="1546" y="68" width="18" height="116" fill={fillColor} />
          <path
            d="M3168.07 12.2487L3110 24.4974L3110 173.837V184H4665V66.8968H4548.35L4414.74 75.3767L4309.91 66.8968L4206.11 86.2121L4080.72 35.3328L3859.24 66.8968L3783.7 75.3767L3683.49 45.226L3564.78 66.8968H3490.78L3403.43 45.226L3346.9 12.2487L3245.66 35.3328L3236.41 0L3168.07 12.2487Z"
            fill={fillColor}
          />
          <rect x="3103" y="28" width="18" height="156" fill={fillColor} />
          <path
            d="M3051.93 12.2487L3110 24.4974L3110 173.837V184H1555V66.8968H1671.65L1805.26 75.3767L1910.09 66.8968L2013.89 86.2121L2139.28 35.3328L2360.76 66.8968L2436.3 75.3767L2536.51 45.226L2655.22 66.8968H2729.22L2816.57 45.226L2873.1 12.2487L2974.34 35.3328L2983.59 0L3051.93 12.2487Z"
            fill={fillColor}
          />
        </svg>
      )}
    </div>
  );
};
