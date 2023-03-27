import { Cryptocoins } from '@/services/cryptocoins';
import { formatNumber } from '@/utils/moneyFormat';
import Image from 'next/image';
import { Chart } from '../Chart';
import styles from './styles.module.scss';


interface Props {
  chartData: Cryptocoins[]

}

export function DailyVariation(props: Props) {
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
            <span>ETH</span>
          </div>
          <span className={styles.amount}>
            {'+' + formatNumber(5.65, true) + '%'}
          </span>
        </div>
      </div>
      <div className={styles.chart}>
        <Chart crypto={props.chartData}/>
      </div>
    </article>
  );
}
