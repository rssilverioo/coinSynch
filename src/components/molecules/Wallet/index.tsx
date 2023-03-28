
import styles from './styles.module.scss';
import Image from 'next/image';
import { Button } from '@/components/atoms/Button';
import { UnionPlus } from '@/components/SVGs/UnionPlus';
import { WalletTable } from '@/components/atoms/WalletTable';
import { Cryptocoins } from '@/services/cryptocoins';
import { WalletNot } from '@/components/atoms/WalletNot';

interface Props {
	onAddCryptoClick: () => void;
	onTransferCryptoClick: () => void;
  AddCrypto: Cryptocoins[]
}

export function Wallet(props: Props) {



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
      <section id="top-cryptos" className={styles.background}>
        {! props.AddCrypto || props.AddCrypto.length === 0 ? <div className={styles.content}>
            <WalletNot />
          </div> : (

            <WalletTable onTransferCryptoClick={props.onTransferCryptoClick}  cryptos={props.AddCrypto} />

        )}

      </section>
     </div>
    </>
  )
}
