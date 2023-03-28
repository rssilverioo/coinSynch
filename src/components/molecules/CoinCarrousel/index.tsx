import { getCryptos } from '@/api/cryptoApi';
import { CoinCarrouselElement } from '@/components/atoms/CoinCarrouselElement';
import { Cryptocoins } from '@/services/cryptocoins';
import { useEffect, useState } from 'react';

import styles from './styles.module.scss';

interface Props {
  crypto: Cryptocoins[];
}


export function CoinCarrousel(props: Props) {



  return (
   <div className={styles.background}>
    <div className={styles.wrapper}>
          <div className={styles.slider}>
            {props.crypto?.map((crypto) => (

              <CoinCarrouselElement key={crypto.asset_id} data={crypto}/>

            ))}
              {props.crypto?.map((crypto) => (
                <CoinCarrouselElement key={crypto.asset_id + ':)'} data={crypto} />
              ))}
          </div>
        </div>
   </div>
  );
}

