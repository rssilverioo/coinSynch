
import styles from './styles.module.scss';
import Image from 'next/image';
import { Button } from '@/components/atoms/Button';
import { UnionPlus } from '@/components/SVGs/UnionPlus';
import {  useState } from 'react';
import { WalletTable } from '@/components/atoms/WalletTable';
import { Cryptocoins } from '@/services/cryptocoins';

interface Props {
	onAddCryptoClick: () => void;
  coinsblock: Cryptocoins[]
}

export function Wallet(props: Props) {
  const [cryptoValues, setCryptoValues] = useState<FormData[]>([]);



  return (
    <>

     <div className={styles.container}>
      <header className={styles.header}>
          <div className={styles.title}>
            <Image
            src="/svgs/wallet.svg"
            alt=""
            width={32}
            height={32}
            />
            <span>My Wallet</span>
          </div>
            <div >
                  <Button
                   design="primary"
                   className={styles.btn}
                   onClick={props.onAddCryptoClick}
                   >
                  <UnionPlus fill="#fff" className={styles.btn_icon} width={22} height={22} />
                    Add Crypto
                    </Button>
            </div>
      </header>
      <hr className={styles.hr}/>
        <div className={styles.content}>
                <Image
                src="/svgs/wallet-not.svg"
                alt=""
                width={82}
                height={68}
                 />
                 <h1>Nothing here yet</h1>
                 <span>Add a crypto and start earning</span>
        <WalletTable asset_id={''} name={''} amount={0} />
        </div>
     </div>
    </>
  )
}
