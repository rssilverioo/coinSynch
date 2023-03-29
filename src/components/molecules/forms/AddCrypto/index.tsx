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

export function AddCrypto(props: Props) {

  const form = useForm();
  const [amount, setAmount] = useState("");
  const [selectValue, setSelectValue] = useState("");

  const onSubmit = useCallback(() => {
    const cryptoClick = props.cryptos && props.cryptos.find(
      (TopCrypto) => TopCrypto.name === selectValue
    );
    if (!cryptoClick) {
      return;

    }
    props.onClose(cryptoClick, parseFloat(amount));
  }, [amount, props.cryptos, selectValue]);

  const handleChange = (e: any) => {
    setAmount(e.target.value);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className={stylesEntry([roboto.className, styles.form])} >
      <h4 className={styles.title}>Add Crypto</h4>
      <div>
        <select
          name="cryptoName"
          className={styles.input}
          value={selectValue}
          onChange={(e) => setSelectValue(e.target.value)}
        >
          <option value="" disabled >Choose Crypto</option>
          {props.cryptos?.map((cryptoName) => {
            return (
              <option value={cryptoName.name} key={cryptoName.name} className={styles.optiontest}>
               <h2>{cryptoName.name}</h2>
               <span>{cryptoName.asset_id}</span>
              </option>
            );
          })}
        </select>
      </div>
      <div >
        <Input
          design="ghost"
          placeholder="0,00"
          value={amount}
          required
          onChange={handleChange}
        />
      </div>
      <Button type="submit" design="primary" className={styles.sign_custom_btn}>
        Add Crypto
      </Button>
    </form>
  );
}
