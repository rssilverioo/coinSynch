import { Button } from '@/components/atoms/Button';
import Image from 'next/image';
import styles from './styles.module.scss';

export function NFT() {
  return (
    <article className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text_content}>
          <h2>NFT&rsquo;s news</h2>
          <span>New ElephantX NFT to be lauched!</span>

          <Button design="ghost" className={styles.btn}>
          Read more +
        </Button>
        </div>

      <div className={styles.nft}>
        <Image
          src="/images/eduphant.png"
          alt="Eduphant illustration"
          width={140}
          height={112}
        />
      </div>
      </div>
    </article>
  );
}
