import { Cryptocoins } from '@/services/cryptocoins';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://rest.coinapi.io/',
  headers: {
    'X-CoinAPI-Key': '02BC8755-1EBE-448E-9969-9812838D8DB6',
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

