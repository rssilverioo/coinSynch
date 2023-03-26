import { HTMLAttributes } from 'react';
import { formatNumber } from '@/utils/moneyFormat';
import { stylesEntry } from '@/utils/styles';
import styles from './styles.module.scss';

interface Props extends HTMLAttributes<HTMLSpanElement> {
  value: number;
  hasPercent?: boolean;
}

export function CurrencyChange(props: Props) {
  const isNegative = props.value < 0;
  const format = formatNumber(Number(props.value));

  return (
    <span
      {...props}
      className={stylesEntry([
        styles.change,
        isNegative ? styles.negative : styles.positive,
        props.className
      ])}
    >
      {isNegative ? format : `+${format}`}
      {props.hasPercent ? "%" : undefined}
    </span>
  );
}
