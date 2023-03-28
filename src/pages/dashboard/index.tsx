
import styles from "./styles.module.scss";
import { useEffect, useRef, useState } from "react";
import { LayoutDashboard } from "@/components/organisms/LayoutDashboard";
import { Cryptocoins } from "@/services/cryptocoins";
import { Modal, ModalHandler } from "@/components/molecules/modals/Modal";
import Balance from "@/components/atoms/Balance";
import { DailyVariation } from "@/components/atoms/DailyVariation";
import { NFT } from "@/components/atoms/NFT";
import { Wallet } from "@/components/molecules/Wallet";
import { AddCrypto } from "@/components/molecules/forms/AddCrypto";
import { getCryptos } from "@/api/cryptoApi";
import { GetStaticProps } from "next";
import { TransferCrypto } from "@/components/molecules/forms/TransferCrypto";

interface Props {
  cryptos: Cryptocoins[];
  amountCrypto: Cryptocoins[];
}



export default function Dashboard(props: Props)

{
  const [cryptos, setCryptos] = useState<Cryptocoins[]>([]);
  const modalHandlerAddCrypto = useRef<ModalHandler>(null);
  const modalHandlerTransferCrypto = useRef<ModalHandler>(null);

  function openAddCrypto() {
    modalHandlerAddCrypto.current?.close();
    modalHandlerAddCrypto.current?.open();
  }

  function openTransferCrypto() {
    modalHandlerTransferCrypto.current?.close();
    modalHandlerTransferCrypto.current?.open();
  }


  function closeAddCrypto(pickcrypt: Cryptocoins, amount: number) {
    modalHandlerAddCrypto.current?.close();
    const newPickCrypt = { ...pickcrypt, amount };
    const newCrypts = [...cryptos, newPickCrypt];
    setCryptos(newCrypts);
  }




  return (
    <LayoutDashboard>
      <div className={styles.bg}>
        <main className={styles.page_content}>
          <Modal ref={modalHandlerAddCrypto}>
            <AddCrypto onClose={closeAddCrypto}  cryptos={props.cryptos} />
          </Modal>
          <Modal ref={modalHandlerTransferCrypto}>
            <TransferCrypto onClose={closeAddCrypto}  cryptos={props.cryptos} />
          </Modal>

          <div className={styles.quick_info_section}>
            <Balance />
            <DailyVariation chartData={props.cryptos}/>
            <NFT />
          </div>
          <Wallet onAddCryptoClick={openAddCrypto}  onTransferCryptoClick={openTransferCrypto} AddCrypto={cryptos} />
        </main>
      </div>
    </LayoutDashboard>
  );
}


export const getStaticProps: GetStaticProps = async () => {
  const cryptosData = await getCryptos();
  return {
    props: {
      cryptos: cryptosData
    },
    revalidate: 60 // 24 horas em segundos
  };
};
