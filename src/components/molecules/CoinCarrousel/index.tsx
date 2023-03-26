import { getCryptos } from '@/api/cryptoApi';
import { CoinCarrouselElement } from '@/components/atoms/CoinCarrouselElement';
import { Cryptocoins } from '@/services/cryptocoins';
import { useEffect, useState } from 'react';

import styles from './styles.module.scss';

interface Props {
  coins: Cryptocoins[];
}

export function CoinCarrousel(props: Props) {
  const [cryptos, setCryptos] = useState(props.coins);

  useEffect(() => {
    async function fetchData() {
      const data = await getCryptos();
      setCryptos(data);
    }
    fetchData();
  }, []);


  return (
   <div className={styles.background}>
    <div className={styles.wrapper}>
          <div className={styles.slider}>
            {cryptos?.map((crypto) => (
              <CoinCarrouselElement key={crypto.asset_id} data={crypto}/>
            ))}
              {cryptos?.map((crypto) => (
                <CoinCarrouselElement key={crypto.asset_id + ':)'} data={crypto} />
              ))}
          </div>
        </div>
   </div>
  );
}

export async function getStaticProps() {
  const data = await getCryptos();
  return {
    props: {
      cryptos: data,
    },
  };
}
