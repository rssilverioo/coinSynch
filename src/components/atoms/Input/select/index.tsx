import { Cryptocoins } from "@/services/cryptocoins";
import { stylesEntry } from "@/utils/styles";
import { ForwardRefRenderFunction, InputHTMLAttributes, ReactNode } from "react";
import { FieldErrors, FieldValues } from "react-hook-form";
import styles from "../styles.module.scss";

export interface CryptoSelectProps {
  cryptos: Cryptocoins[];
  onChange: (crypto: string) => void;
  value: string;
  label?: string;
  design: "filled" | "ghost";
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  validationsError?: FieldErrors<FieldValues>;
}
interface FormData {
  crypto: string;
  amount: number;
}

export const CryptoSelect: ForwardRefRenderFunction<HTMLInputElement, CryptoSelectProps> = ({   cryptos, onChange, value, ...props }, ref) => {
  return (
  <>



        <div >

        <div >
        <select className={styles.input}  value={value} onChange={(e) => onChange(e.target.value)}>
          {cryptos?.map((crypto) => (
            <option key={crypto.asset_id} value={crypto.asset_id}>
              {crypto.name}
              </option>
      ))}
        </select>
        </div>

        </div>
  </>

  );
};
