import { useState } from 'react';
import { FormData } from '@/types';

export interface Cryptocoins {
  asset_id: string;
  name: string;
  amount: number;
}

export const WalletTable = (props: Cryptocoins) => {
  const [cryptoAd, setCryptoAdd] = useState<Cryptocoins[]>([]);

  const handleAddCrypto = (data: FormData) => {
    const newCrypto: Cryptocoins = {
      asset_id: data.crypto,
      name: '',
      amount: data.amount
    };
    setCryptoAdd([...cryptoAd, newCrypto]);
  };


  return (
    <table>
      <thead>
        <tr>
          <th>Crypto</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {cryptoAd?.map((crypto) => (
          <tr key={crypto.asset_id}>
            <td>{crypto.name}</td>
            <td>{crypto.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
