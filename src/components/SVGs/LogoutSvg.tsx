/* eslint-disable react/prop-types */
import React from 'react';

type Props = React.SVGAttributes<HTMLOrSVGElement>

export function LogoutSvg(props: Props) {
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
          d="M11.4 11c0-.333.266-.6.6-.6.333 0 .6.267.533.6v.8c0 1.2-1 2.2-2.2 2.2h-2.6c-.2 1.6-1.933 2.467-3.333 1.6l-3.2-2c-.6-.4-1-1.133-1-1.867V2.267C.2 1 1.267.067 2.4.067h8c1.2 0 2.2 1 2.2 2.2v.8c0 .333-.267.6-.6.6a.598.598 0 01-.6-.6v-.8c0-.534-.467-1-1-1H4.933L6.8 2.4c.6.4 1 1.133 1 1.867V12.8h2.6c.533 0 1-.467 1-1V11zm-4.8 2.733V4.267c0-.334-.2-.667-.467-.867l-3.2-2a1.01 1.01 0 00-1.533.867v9.466c0 .334.2.667.467.867l3.2 2a1.01 1.01 0 001.533-.867zM15.733 6.8c.067.067.067.133.067.2s-.017.117-.034.167c-.016.05-.033.1-.033.166-.033.034-.05.067-.067.1a.348.348 0 01-.066.1l-1.6 1.6c-.267.267-.6.267-.867 0-.267-.266-.267-.6 0-.866l.6-.6H10.4a.597.597 0 01-.6-.6c0-.334.266-.6.6-.6h3.333l-.6-.6c-.267-.267-.267-.6 0-.867s.6-.267.867 0l1.6 1.6c.066.067.133.133.133.2z"
          clipRule="evenodd"
        ></path>
        </svg>
  );
}