/* eslint-disable react/prop-types */
import React from 'react';

type Props = React.SVGAttributes<HTMLOrSVGElement>

export function ChevronDown(props: Props) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 12}
    height={props.height || 12}
    fill="none"
    viewBox="0 0 8 8"
  >
    <path
      fill={props.fill || '#000000'}
      fillRule="evenodd"
      d="M.185 1.853a.628.628 0 01.893 0L4 4.797l2.922-2.944a.628.628 0 01.893 0 .64.64 0 010 .9L4.447 6.147a.628.628 0 01-.894 0L.185 2.753a.64.64 0 010-.9z"
      clipRule="evenodd"
    ></path>
  </svg>
  );
}
