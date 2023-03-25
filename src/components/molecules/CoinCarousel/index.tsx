import { CoinCarouselElement } from '@/components/atoms/CoinCarouselElement';
import { CryptoCoin } from '@/services/cryptocoins';

import styles from './styles.module.scss';

interface Props {
  dataCoins: CryptoCoin[];
}

export function CoinCarousel(props: Props) {
  return (
   <div className={styles.background}>
    <div className={styles.wrapper}>
          <div className={styles.slider}>
           {props.dataCoins?.map((coins) =>(
              <CoinCarouselElement key={coins.asset_id} data={coins} />
           ))}
            {props.dataCoins?.map((coins) => (
              <CoinCarouselElement key={coins.asset_id + ':)'} data={coins} />
            ))}
          </div>
        </div>
   </div>
  );
}


