import { CoinCarrouselElement } from '@/components/atoms/CoinCarrouselElement';
import { Cryptocoins } from '@/services/cryptocoins';

import styles from './styles.module.scss';

interface Props {
  coins: Cryptocoins[];
}

export function CoinCarrousel(props: Props) {
  return (
   <div className={styles.background}>
    <div className={styles.wrapper}>
          <div className={styles.slider}>
            {Array.isArray(props.coins) && props.coins?.map((coin) => (
              <CoinCarrouselElement key={coin.asset_id} data={coin} />
            ))}
            {Array.isArray(props.coins) && props.coins?.map((coin) => (
              <CoinCarrouselElement key={coin.asset_id + ':)'} data={coin} />
            ))}
          </div>
        </div>
   </div>
  );
}


