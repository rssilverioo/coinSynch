import { CryptoCoin } from '@/services/cryptocoin';
import { formatNumber } from '@/utils/moneyFormat';
import { stylesEntry } from '@/utils/styles';
import styles from './styles.module.scss';


interface ElementProps {
  data: CryptoCoin;
}

export function CoinCarrouselElement(props: ElementProps) {
  const ChangeMoney = formatNumber(props.data.changePercent24Hr);
  const isPositive = Number(ChangeMoney) >= 0;

  return (
    <div key={props.data.symbol} className={styles.element}>
      <span className={styles.symbol}>{props.data.symbol}</span>

      <span className={styles.price}>
        R$ {formatNumber(props.data.priceUsd)}
      </span>
      <span
        className={stylesEntry([
          styles.change,
          isPositive ? styles.positive : styles.negative
        ])}
      >
        {isPositive ? `+${ChangeMoney}` : ChangeMoney}
      </span>
    </div>
  );
}
