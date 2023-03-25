import { ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';
import { stylesEntry } from '@/utils/styles';
import styles from './styles.module.scss';

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  href?: string;
  design: 'primary' | 'ghost' | 'custom';
  children: ReactNode;
}

export function Button(props: Props) {
  if (props.href) {
    return (
      <Link
        {...props}
        href={props.href}
        className={stylesEntry([styles.base, styles[props.design]])}
      >
        {props.children}

      </Link>
    );
  }

  return (
    <button
      {...props}
      type={props.type || 'button'}
      className={stylesEntry([
				styles.base,
				styles[props.design],
				props.className,
			])}
    >
      {props.children}
    </button>
  );
}
