/* eslint-disable react/prop-types */
import React from 'react';

type Props = React.SVGAttributes<HTMLOrSVGElement>

export function ChevronUp(props: Props) {
  return (
<svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 12}
      height={props.height || 12}
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill={props.fill || '#000000'}
        fillRule="evenodd"
        d="M15.63 12.294a1.256 1.256 0 01-1.786 0L8 6.406l-5.844 5.888a1.257 1.257 0 01-1.786 0 1.28 1.28 0 010-1.8l6.737-6.788a1.256 1.256 0 011.786 0l6.737 6.788a1.28 1.28 0 010 1.8z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
