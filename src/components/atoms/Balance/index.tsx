import { formatNumber } from '@/utils/moneyFormat';
import Image from 'next/image';
import styles from './styles.module.scss';

export default function Balance() {
  return (
    <article className={styles.container}>
      <div className={styles.content}>
        <div className={styles.icon}>
          <Image
            src="/svgs/legal-law.svg"
            width={40}
            height={40}
            alt=""
          />
        </div>
        <div className={styles.wrapper}>
          <h4>Balance in US$</h4>
          <p>(approximately)</p>
        </div>
      </div>

      <div className={styles.amount}>
        <span>{formatNumber(32256.56, true)}</span>
      </div>
    </article>
  );
}
