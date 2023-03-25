import { CoinCarrouselElement } from '@/components/atoms/CoinCarrouselElement';
import { CryptoCoin } from '@/services/cryptocoin';

import styles from './styles.module.scss';

interface Props {
  coins: CryptoCoin[];
}

export function CoinCarrousel(props: Props) {
  return (
   <div className={styles.background}>
    <div className={styles.wrapper}>
          <div className={styles.slider}>
            {props.coins.map((coins) => (
              <CoinCarrouselElement key={coins.id} data={coins} />
            ))}
            {props.coins.map((coins) => (
              <CoinCarrouselElement key={coins.id + ':)'} data={coins} />
            ))}
          </div>
        </div>
   </div>
  );
}


