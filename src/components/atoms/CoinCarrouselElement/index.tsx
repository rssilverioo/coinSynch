import { CryptoCoin } from '@/services/cryptocoin';
import { formatNumber } from '@/utils/moneyFormat';
import { stylesEntry } from '@/utils/styles';
import styles from './styles.module.scss';


interface ElementProps {
  data: CryptoCoin;
}

export function CoinCarouselElement(props: ElementProps) {
  const ChangeMoney = 5
  const isPositive = Number(ChangeMoney) >= 0;

  return (
    <div key={props.data.asset_id} className={styles.element}>
      <span className={styles.symbol}>{props.data.asset_id}</span>

      <span className={styles.price}>
        R$ {props.data?.price_usd}
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
