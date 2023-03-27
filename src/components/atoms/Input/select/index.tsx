import { Cryptocoins } from "@/services/cryptocoins";
import { ForwardRefRenderFunction, InputHTMLAttributes, ReactNode } from "react";
import { FieldErrors, FieldValues } from "react-hook-form";
import styles from "../styles.module.scss";

export interface CryptoSelectProps {
  cryptos: Cryptocoins[];
  onChange: (crypto: string) => void;
  value: string;
}

export const CryptoSelect = (props: CryptoSelectProps) => {
  return (
  <>


        <div >
        <select className={styles.input}  value={props.value} onChange={(e) => props.onChange(e.target.value)}>
          {props.cryptos?.map((crypto) => (
            <option key={crypto.asset_id} value={crypto.asset_id}>
              {crypto.name}
              </option>
      ))}
        </select>
        </div>

  </>
  );
};
