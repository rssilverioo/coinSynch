import React from 'react';

type Props = React.SVGAttributes<HTMLOrSVGElement>

export function UnionPlus(props: Props) {
  return (
<svg
      width="24"
      height="18"
      viewBox="0 0 24 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        // eslint-disable-next-line react/prop-types
        fill={props.fill || '#000000'}
        fillRule="evenodd"
        d="M5.79.79a.79.79 0 10-1.58 0v3.42H.79a.79.79 0 100 1.58h3.42v3.42a.79.79 0 001.58 0V5.79h3.42a.79.79 0 000-1.58H5.79V.79z"
        clipRule="evenodd"
      ></path>
    </svg>

  );
}
