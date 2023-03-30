import { Cryptocoins } from '@/services/cryptocoins';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://rest.coinapi.io/',
  headers: {
    'X-CoinAPI-Key': '2805DEED-C7D3-4C3A-B29F-971B4B8BC7B2',
  },
});


interface Props {
  crypto: Cryptocoins[];
}

export async function getCryptos(): Promise<Cryptocoins[]> {
  const response = await api.get<Cryptocoins[]>('v1/assets/BTC,ETH,LTC,XRP,DOGE,DGB,PAK,BAC,BLZ,DASH,ETC', {
    params: {
      type_is_crypto: 1, // list of desired cryptocurrencies
      limit: 10
    },

  });
const data = response.data;
data.length = 10

return data;
}

