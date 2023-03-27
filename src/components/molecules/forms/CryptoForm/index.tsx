import { useEffect, useState } from 'react';
import { Cryptocoins } from '@/services/cryptocoins';
import { getCryptos } from '@/api/cryptoApi';
import { CryptoSelect, CryptoSelectProps } from '@/components/atoms/Input/select';
import { FormData } from '@/types';
import { useForm } from 'react-hook-form';
import styles from "../styles.module.scss";
import { roboto } from '@/pages/_app'; // Using directly because it is not applying normally
import { stylesEntry } from '@/utils/styles';
import { Input } from '@/components/atoms/Input';
import { Button } from '@/components/atoms/Button';

interface Props {
  onNeedCrypto: () => void;
  cryptoAdd: Cryptocoins[];
  onSubmit: (formData: FormData) => void;
}

export const CryptoForm = (props: Props) => {
  const [cryptos, setCryptos] = useState<Cryptocoins[]>([]);
  const { register, handleSubmit, watch, setValue } = useForm<FormData>();

  useEffect(() => {
    const fetchCryptos = async () => {
      const response = await getCryptos();
      setCryptos(response);
      setValue('crypto', response[0].asset_id);
    };
    fetchCryptos();
  }, []);

  const onSubmit = (data: FormData) => {
    console.log("-------<", data);
    if (typeof props.onSubmit === 'function') {
      props.onSubmit(data);
    }
  };

  return (
    <>
      <form
      className={stylesEntry([roboto.className, styles.form])}
      onSubmit={handleSubmit(onSubmit)}>
         <h4 className={styles.title}>
          Add Crypto
      </h4>
        <CryptoSelect
          cryptos={cryptos}
          onChange={(crypto: string) => setValue('crypto', crypto)}
          value={watch('crypto')}
        />
          <Input
        design="ghost"
        placeholder="0,00"
        type="number"
        required
        {...register('amount')}

      />

      <Button type="submit" design="primary" className={styles.sign_custom_btn}>
        Add Crypto
      </Button>
      </form>
    </>
  );
};
