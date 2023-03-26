import { Cryptocoins } from '@/services/cryptocoins';
import { useState } from "react";
import { CryptoTable } from "../../molecules/CryptoTable";
import { Button } from "../../atoms/Button";
import styles from './styles.module.scss';

interface Props {
  blockchains: Cryptocoins[];
}

export function TopCryptos(props: Props) {
  const [isSample, setIsSample] = useState(true);
	const sample = Array.isArray(props.blockchains) ? props.blockchains.slice(0, 5) : [];

  return (
    <section id="top-cryptos" className={styles.background}>
      <div className={styles.content}>
        <h3>Top Cryptos</h3>

        <CryptoTable blockchains={isSample ? sample : props.blockchains} />
				<Button
					design="ghost"
					className={styles.custom_btn}
					onClick={() => setIsSample((prev) => !prev)}
				>
					{isSample ? "View more +" : "View less -"}
				</Button>
      </div>
    </section>
  );
}
