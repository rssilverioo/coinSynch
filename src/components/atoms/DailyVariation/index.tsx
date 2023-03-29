import { getCryptos } from '@/api/cryptoApi';
import { Cryptocoins } from '@/services/cryptocoins';
import { formatNumber } from '@/utils/moneyFormat';
import { stylesEntry } from '@/utils/styles';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Chart } from '../Chart';
import styles from './styles.module.scss';


interface Props {
  chartData: Cryptocoins[]

}

export function DailyVariation(props: Props) {
  const ChangeMoney = formatNumber(2);
  const isPositive = Number(ChangeMoney) >= 0;
  const [cryptos, setCryptos] = useState(props.chartData);



  return (
    <article className={styles.container}>
      <div className={styles.content}>
        <span className={styles.card_text}>Daily Variation</span>
        <div className={styles.coin}>
          <div className={styles.symbol}>
              <Image
                      src="/images/eth.jpg"
                      width={24}
                      height={24}
                      alt="Ethereum"
                    />
          {cryptos
            ?.filter((crypto) => crypto.asset_id === 'ETH')
            .map((crypto) => (
              <div className={styles.symbol} key={crypto.asset_id}>

                <span>{crypto.asset_id}</span>
              </div>
            ))}
          </div>
          {cryptos
             ?.filter((crypto) => crypto.asset_id === 'ETH')
              .map((crypto) => (
                <span
                key={crypto.asset_id}
                className={stylesEntry([
                  styles.amount,
                  isPositive ? styles.positive : styles.negative
                ])}
              >
                {isPositive ? `+${ChangeMoney}%` : ChangeMoney}
            </span>
              ))}

        </div>
      </div>
      <div className={styles.chart}>
        <Chart crypto={props.chartData}/>
      </div>
    </article>
  );
}
