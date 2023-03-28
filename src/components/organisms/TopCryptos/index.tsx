import { Cryptocoins } from '@/services/cryptocoins';
import { useEffect, useState } from "react";
import { CryptoTable } from "../../molecules/CryptoTable";
import { Button } from "../../atoms/Button";
import styles from './styles.module.scss';
import { getCryptos } from '@/api/cryptoApi';


interface Props {
  cryptos: Cryptocoins[];
}




export function TopCryptos(props: Props) {

//   const [cryptos, setCryptos] = useState<Cryptocoins[]>([]);

//     useEffect(() => {
//       const fetchCryptos = async () => {
//         const response = await getCryptos();
//         setCryptos(response);
//       };
//       fetchCryptos();
// }, []);


  const [showAll, setShowAll] = useState(false);
	const displayedCryptos = props.cryptos && props.cryptos.slice(0, 4);

  return (
    <section id="top-cryptos" className={styles.background}>
      <div className={styles.content}>
        <h3>Top Cryptos</h3>
        <CryptoTable cryptos={props.cryptos} openViewMore={showAll}/>
        <Button
					design="ghost"
					className={styles.custom_btn}
					onClick={() => setShowAll((prev) => !prev)}
				>
					{showAll ? "View less -" : "View more +"}
				</Button>
      </div>
    </section>
  );
}
