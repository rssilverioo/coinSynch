import { useForm } from "react-hook-form";
import { roboto } from "@/pages/_app"; // Using directly because it is not applying normally
import styles from "../styles.module.scss";
import { useCallback,  useState } from "react";
import React from "react";
import { Cryptocoins } from "@/services/cryptocoins";
import { stylesEntry } from "@/utils/styles";
import { Input } from "@/components/atoms/Input";
import { Button } from "@/components/atoms/Button";

interface Props {
  onClose: (cryptoClick: Cryptocoins, amount: number) => void;
  cryptos: Cryptocoins[];
}

export function TransferCrypto(props: Props) {


  const form = useForm();
  const [amount, setAmount] = useState("");


  return (
    <form  className={stylesEntry([roboto.className, styles.form])} >
      <h4 className={styles.title}>Transfer Crypto</h4>
      <hr className={styles.hr}/>
      <div className={styles.transfer}>
         <h1>You are transfering </h1>&nbsp;&nbsp;
         <span>BITCOIN &nbsp; <p>BTC</p></span>
      </div>
      <div>
        <select
          name="cryptoName"
          className={styles.input}

        >
          <option value="">Transfer in</option>
          <option value="">Transfer out</option>
        </select>
      </div>
      <div >
        <Input
          design="ghost"
          placeholder="0,00"
          value={amount}
          required

        />
      </div>
      <Button type="submit" design="primary" className={styles.sign_custom_btn}>
        Transfer Crypto
      </Button>
    </form>
  );
}
