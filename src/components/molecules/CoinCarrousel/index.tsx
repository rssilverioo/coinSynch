import { CoinCarouselElement } from '@/components/atoms/CoinCarrouselElement';
import { CryptoCoin } from '@/services/cryptocoin';

import styles from './styles.module.scss';

interface Props {
  coins: CryptoCoin[];
}

export function CoinCarousel(props: Props) {
  return (
   <div className={styles.background}>
    <div className={styles.wrapper}>
          <div className={styles.slider}>
            {props.coins?.map((coin) => (
              <CoinCarouselElement key={coin.asset_id} data={coin} />
            ))}
            {props.coins?.map((coin) => (
              <CoinCarouselElement key={coin.asset_id + ':)'} data={coin} />
            ))}
          </div>
        </div>
   </div>
  );
}


